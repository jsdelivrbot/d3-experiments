(ns d3.rotating-voronoi
  (:require-macros [d3.utils :refer [styles> attrs>]])
  (:require [d3.utils :as u]
            [clojure.string :refer [join]]))

;; adapted from strokes examples

(defn rvoronoi [{:keys [selector width height data default-style]}]
  (let [points (atom [])
        get-points (fn [& args] (clj->js (map deref @points)))
        vor-obj (.clipExtent
                  (u/voronoi)
                  (clj->js [[(/ (- width) 2) (/ (- height) 2)]
                            [(/ (+ width) 2) (/ (+ height) 2)]]))

        τ (* 2 Math/PI)

        round-d2 #(/ (int (* % 100)) 100)

        styles-vec (reduce
                     (fn [acc [_ _ _ n _ x]]
                       (concat acc (repeat n (or x default-style))))
                     [] data)

        launch-circle (fn [[cx cy r n δθ]]
                        (let [launch-pt
                              (fn [θ]
                                (let [init-pt [(+ cx (* r (Math/cos θ))) (+ cy (* r (Math/sin θ)))]
                                      cur-pt (atom init-pt)
                                      cur-θ (atom θ)]
                                  (u/timer (fn []
                                             (swap! cur-θ + δθ)
                                             (reset! cur-pt [(round-d2 (+ cx (* r (Math/cos @cur-θ))))
                                                             (round-d2 (+ cy (* r (Math/sin @cur-θ))))])
                                             false))
                                  (swap! points conj cur-pt)))]
                          (dorun (map launch-pt (range 1e-6 τ (/ τ n))))))

        _ (dorun (map launch-circle data))

        line (.. js/d3 -svg line (interpolate "basis-closed"))

        svg (.. js/d3
                (select selector)
                (append "svg")
                (attr "width" width)
                (attr "height" height)
                (append "g")
                (attr "transform" #(str "translate(" (/ width 2) "," (/ height 2) ")")))

        path (.. svg
                 (selectAll "path")
                 (data get-points)
                 (enter)
                 (append "path")
                 (each (fn [_ i] (this-as p ((nth styles-vec i) (js/d3.select p))))))

        three-polate (fn [[[x0 y0] [x1 y1]]]
                       [[x0 y0]
                        [(/ (+ (* 2 x0) x1) 3), (/ (+ (* 2 y0) y1) 3)]
                        [(/ (+ (* 2 x1) x0) 3), (/ (+ (* 2 y1) y0) 3)]])

        resample (fn [pts]
                   (let [pairs (map vector (cons (last pts) pts) pts)]
                     (mapcat three-polate pairs)))]
    (u/timer (fn []
               (let [pts (get-points)
                     ;_ (println "---------------")
                     ;_ (println pts)
                     vnoi (vor-obj pts)]
                 (-> path (.attr "d" (fn [pt i] (line (clj->js (resample (nth vnoi i))))))))
               false))))

;; examples -------------------------------------------

(defn rand* [a b]
  (+ (rand (- b a)) a))

(defn ex1 []
  (let [cs (.. js/d3.scale linear (domain #js [0 10]) (range #js ["tomato" "#FAFAFA"]))
        data [[-100 100 120 40 (- 0.001)]
              [-100 100 30 10 (+ 0.03)]
              [-100 100 60 3 (- 0.05)]
              [-100 100 15 4 (- 0.02)]
              [-100 100 0 1 (- 0.02)]
              [240 (- 120) 80 4 (- 0.02)]
              [240 (- 120) 0 1 (- 0.02)]
              [280 (+ 120) 40 8 (+ 0.02)]
              [280 (+ 120) 20 8 (- 0.02)]]
        data (mapv #(conj %1 (fn [x] (.style x "fill" (cs %2)))) data (range))]

    (rvoronoi {:width         800
               :height        800
               :selector      "#app"
               :data          data
               :default-style (styles> {:stroke "white" :stroke-width "2px" :fill #(cs (rand* 0 6))})})))

(comment (ex1))

(defn rand-rot [& _]
  (let [cx (rand* -400 400)
        cy (rand* -400 400)]
    [[cx cy (rand* 10 25) (rand* 3 10) (rand* (- 0.03) 0.03)]
     [cx cy (rand* 25 60) (rand* 3 10) (rand* (- 0.03) 0.03)]
     [cx cy (rand* 60 90) (rand* 3 10) (rand* (- 0.03) 0.03)]
     [cx cy (rand* 90 120) (rand* 3 10) (rand* (- 0.03) 0.03)]]))

(defn ex2 []
  (let [cs (.. js/d3.scale linear (domain #js [0 10]) (range #js ["tomato" "#FAFAFA"]))
        data2 (vec (mapcat rand-rot (range 4)))]

    (rvoronoi {:width         800
               :height        800
               :selector      "#app"
               :data          data2
               :default-style (styles> {:stroke "white" :stroke-width "2px" :fill #(cs (rand* 0 6))})})))

(comment (ex2))

(defn flower [{:keys [x y r depth petals speed]}]
  (let [rad-inc (/ r depth)]
    (map
      (fn [[a b]]
        [x y (rand* a b) (apply rand* petals) (apply rand* speed)])
      (partition 2 1 (reductions + 0 (repeat depth rad-inc))))))

(defn ex3 []
  (let [cs (.. js/d3.scale linear (domain #js [0 10]) (range #js ["tomato" "#FAFAFA"]))]
    (rvoronoi {:width         800
               :height        800
               :selector      "#app"
               :data          (flower {:x      0
                                       :y      0
                                       :depth  10
                                       :r      600
                                       :petals [3 21]
                                       :speed  [-0.01 0.01]})
               :default-style (styles> {:stroke "white" :stroke-width "2px" :fill #(cs (rand* 0 6))})})))

(comment (ex3))

(defn ->num [x]
  (cond
    (number? x) x
    (and (vector? x) (= 2 (count x))) (apply rand* x)
    (set? x) (rand-nth x)))

(defn flower2 [{:keys [x y layers petals speed]}]
  (map
    (fn [[r pets spd]]
      [x y (->num r) (->num (or pets petals)) (->num (or spd speed))])
    layers))

(defn ex4 []
  (let [cs (.. js/d3.scale linear (domain #js [0 10]) (range #js ["tomato" "#FAFAFA"]))]
    (rvoronoi {:width         800
               :height        800
               :selector      "#app"
               :data          (flower2 {:x      0
                                       :y      0
                                       :layers [[10 3 0.001]
                                                [50 6 0.005]
                                                [100 12 -0.01]
                                                [120 3 0.01]
                                                [220 20 0.002]
                                                [300 30 -0.005]
                                                [310 10 -0.002]
                                                [400 22 0.002]
                                                [420 42 -0.002]]})
               :default-style (styles> {:stroke "white" :stroke-width "2px" :fill #(cs (rand* 0 6))})})))

(comment (ex4))

(comment

  "works"
  (vor-obj
    #js [#js [116.97531962097815 -26.77264648050324]
         #js [93.86461674029003 74.76251550207807]
         #js [0.07194296491761916 119.99997843420556]
         #js [-93.77490533040492 74.87501005190981]
         #js [-117.00733725246894 -26.632368071333698]
         #js [-52.13085770872562 -108.08502983555401]
         #js [52.00122096539325 -108.14745960080775]])

  "bug"
  (vor-obj #js [#js [116.94848849130483 -26.889608394306208]
                #js [93.93933231102723 74.66861351972726]
                #js [0.19194288738033663 119.99984649126841]
                #js [-93.69998344538344 74.96874750410915]
                #js [-117.03391111243779 -26.515347437399534]
                #js [-52.23891665512036 -108.03284494402334]
                #js [51.893047523208665 -108.199406739381]])

  "rounded works"
  (vor-obj
    #js [#js [116.948 -26.889]
         #js [93.939 74.668]
         #js [0.191 119.999]
         #js [-93.699 74.968]
         #js [-117.033 -26.515]
         #js [-52.238 -108.032]
         #js [51.893 -108.199]]))

