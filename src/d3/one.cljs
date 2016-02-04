(ns d3.one
  (:require cljsjs.d3
            cljsjs.d3-cloud
            [d3.utils :as u :refer [p >> *> js>]]
            [cljs-http.client :as http]
            [cljs.core.async :as async]
            [d3.rotating-voronoi :refer [rvoronoi]])
  (:import goog.net.XhrIo))

(enable-console-print!)

(defn get-json [url success]
  (.send goog.net.XhrIo
         url
         (fn [r] (success (.getResponseJson (.-target r))))))

;; CHAPTER 1 -------------------------------------------------------------

(defn clear-svg! []
  (*> [:select "#app"]
      [:select "svg"]
      [:remove]))

(defn svg [& [w h]]
  (*> [:select "#app"]
      [:append "svg"]
      (u/attrs {:width (or w 500) :height (or h 500)})))

(defn moving-circle1 []
  (>> (svg)
      [:append "circle"]
      (u/attrs {:r 20 :cx 20 :cy 20})
      (u/styles {:fill "red"})
      [:transition]
      [:delay 1000]
      [:duration 5000]
      (u/attrs {:r 40 :cx 140 :cy 140})
      (u/styles {:fill "blue"})))

;; CHAPTER 2  ----------------------------------------------------------------

;; SCALES AND SCALING

(let [ramp (-> u/scale
               (.linear)
               (.domain #js [0 10])
               (.range #js ["blue" "red"]))]
  [(ramp 10) (ramp 5) (.invert ramp "blue")])

;; BINNING: CATEGORIZING DATA

(let [a #js [423 124 66 424 58 10 900 44 1]
      q-scale1 (-> u/scale (.quantile) (.domain a) (.range #js [0 1 2]))
      q-scale2 (-> u/scale (.quantile) (.domain a) (.range #js ["a" "b" "c"]))]
  [[(q-scale1 423) (q-scale1 20) (q-scale1 10000)]
   [(q-scale2 423) (q-scale2 20) (q-scale2 10000)]])

;; NESTING

(comment
  (defonce tweets (atom nil))

  (when-not @tweets
    (async/take! (http/get "http://api.vigiglobe.com/api/content/v1/messages"
                           {:with-credentials? false
                            :query-params      {"project_id" "vgteam-TV_Shows"
                                                "limit"      10
                                                "sort"       "[\"pub_date_epoch_ms:desc\"]"}})
                 (fn [r] (reset! tweets (map #(select-keys % [:text :author]) (-> r :body :data)))))))


;; 4.2.1 Plotting Data

(def scatter-data
  [{:friends 5 :salary 22000}
   {:friends 3 :salary 18000}
   {:friends 10 :salary 88000}
   {:friends 0 :salary 180000}
   {:friends 27 :salary 56000}
   {:friends 8 :salary 74000}])

(defn plotting1 []
  (>> (svg)
      [:selectAll "circle"]
      [:data [scatter-data]]
      [:enter]
      [:append "circle"]
      (u/attrs {:r 5 :cx #(* 10 %2) :cy #(.-friends %1)})))

#_(plotting1)

(defn plotting2 []
  (let [x-extent (js/d3.extent (js> scatter-data) #(.-salary %))
        y-extent (js/d3.extent (js> scatter-data) #(.-friends %))
        xsc (.. u/scale linear (domain x-extent) (range #js [0 500]))
        ysc (.. u/scale linear (domain y-extent) (range #js [0 500]))
        x-axis (.. js/d3 -svg axis (scale xsc) (orient "bottom") (ticks 4) (tickSize 500))
        y-axis (.. js/d3 -svg axis (scale ysc) (orient "right") (ticks 16) (tickSize 500))
        svg (svg 600 600)]
    (>> svg
        [:selectAll "circle"]
        [:data [scatter-data]]
        [:enter]
        [:append "circle"]
        (u/attrs {:r 5 :cx #(xsc (.-salary %)) :cy #(ysc (.-friends %))}))

    (>> svg
        [:append "g"]
        [:attr ["id" "yAxisG"]]
        [:call y-axis])

    (>> svg
        [:append "g"]
        [:attr ["id" "xAxisG"]]
        [:call x-axis])

    (*> [:selectAll "path.domain"] (u/styles {:fill "none" :stroke "black"}))
    (*> [:selectAll "line"] (u/styles {:stroke "black"}))))

#_(plotting2)

;; layouts ----------------------------------------------------

(defn bounds [num-coll]
  [(apply min num-coll) (apply max num-coll)])

(defn pie
  "incomplete transition are bad"
  [data]
  (let [pie-chart (.sort (.pie u/layout) nil)
        p1 (pie-chart (js> data))
        p2 (pie-chart (js> (vec (shuffle data))))
        new-arc (.. (u/arc) (outerRadius "100") (innerRadius "70"))
        color-scale (.. u/scale linear (domain (js> (bounds data))) (range #js ["blue" "red"]))
        svg (svg)]
    (>> svg
        [:append "g"]
        [:attr ["transform" "translate(250,250)"]]
        [:selectAll "path"]
        [:data p1]
        [:enter]
        [:append "path"]
        [:attr ["d" new-arc]]
        (u/styles {:fill         (fn [d] (color-scale (.-data d)))
                   :opacity      "0.5"
                   :stroke       "black"
                   :stroke-width "2px"}))
    (>> svg
        [:selectAll "path"]
        [:data p2]
        [:transition]
        [:delay 1000]
        [:duration 1000]
        [:attr ["d" new-arc]]
        [:style ["fill" (fn [d] (color-scale (.-data d)))]])))

#_(pie [2 2 6 7])

;; word cloud --------------------------------------------

(defn lscale [d r]
  (.. u/scale linear (domain (js> d)) (range (js> r))))

(defn word-cloud [data]
  (let [ws (lscale (vals data) [20 80])
        rs (lscale [0 1] [-10 10])
        data (mapv (fn [[k v]] {:text k :frequency v}) data)
        draw (fn [words]
               (let [svg (>> (svg 1000 1000)
                             [:append "g"]
                             [:attr [:transform "translate(500,500)"]])]
                 (>> svg
                     [:selectAll "text"]
                     [:data [words]]
                     [:enter]
                     [:append "text"]
                     (u/styles {:font-size #(str (.-size %) "px")
                                :opacity   0.75})
                     (u/attrs {:text-anchor "middle"
                               :transform   #(str "translate(" (.-x %) "," (.-y %)
                                                  ")rotate(" (.-rotate %) ")"
                                                  )})
                     [:text (fn [x] (.-text x))])))]
    (.. (.. js/d3 -layout cloud)
        (size (js> [1000 1000]))
        (words (js> data))
        (padding 5)
        (fontSize (fn [d] (ws (.-frequency d))))
        (rotate #(rs (rand)))
        (on "end" draw)
        start)

    ()))

(defn gen-words [n]
  (into {} (map #(vector (str "word" %) (rand-int 10)) (range n))))

(comment
  (clear-svg!)
  (word-cloud (gen-words 50)))

(defn wc2 [{:keys [selector width height rotate]}]
  (let [fill (.category20 u/scale)
        svg (*> [:select selector]
                [:append "svg"]
                (u/attrs {:width width :height height})
                [:append "g"]
                (u/translate (/ width 2) (/ height 2)))
        draw (fn [words]
               (let [cl (>> svg
                            [:selectAll "g text"]
                            [:data [words #(.-text %) #_(js> [(.-frequency %) (.-text %)])]])]
                 (>> cl
                     [:enter]
                     [:append "text"]
                     (u/styles {:font-family "Impact"
                                :fill        #(fill %2)})
                     (u/attrs {:text-anchor "middle"
                               :font-size   1})
                     [:text #(.-text %)])

                 (>> cl
                     [:transition]
                     [:duration 600]
                     (u/styles {:font-size    #(str (.-frequency %) "px")
                                :fill-opacity 1})
                     [:attr ["transform" #(str "translate(" (.-x %) "," (.-y %)
                                               ") rotate(" (.-rotate %) ")")]])
                 (>> cl
                     [:exit]
                     [:transition]
                     [:duration 200]
                     [:style ["fill-opacity" 0.000001]]
                     [:attr ["font-size" 1]]
                     [:remove])))]
    (fn [ws]
      (.. (.. js/d3 -layout cloud)
          (size (js> [width height]))
          (words (js> ws))
          (padding 5)
          (rotate rotate)
          (font "Impact")
          (fontSize (fn [d] (.-frequency d)))
          (on "end" draw)
          start))))


(comment
  (do
    (clear-svg!)
    (let [words ["You don't know about me without you have read a book called The Adventures of Tom Sawyer but that ain't no matter.",
                 "The boy with fair hair lowered himself down the last few feet of rock and began to pick his way toward the lagoon.",
                 "When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.",
                 "It was inevitable: the scent of bitter almonds always reminded him of the fate of unrequited love."]
          wgen #(mapv (fn [t] {:text      t
                               :frequency (+ 10 (rand-nth [10 30 50]))})
                      (clojure.string/split (rand-nth words) #" "))
          wc (wc2 {:selector "#app"
                   :width    500
                   :height   500
                   :rotate   (fn [] (rand-nth [0 90 -90]))})]
      (js/setInterval #(wc (wgen)) 2000))
    ))





(defn draw-pack [data & [options]]
  (let [{:keys [width
                height
                color-scale
                selector
                children
                value
                stroke-width]} (merge {:width        800
                                       :height       800
                                       :color-scale  (js/d3.scale.category10)
                                       :selector     "#app"
                                       :children     #(.-children %)
                                       :value        #(.-value %)
                                       :stroke-width "2px"}
                                      options)

        packChart (u/layout.pack)

        svg (*> [:select selector]
                [:append "svg"]
                (u/attrs {:width width :height height})
                [:append "g"])]

    (.. packChart
        (size #js [width height])
        (children children)
        (value value))

    (>> svg
        [:selectAll "circle"]
        [:data [(packChart (js> data))]]
        [:enter]
        [:append "circle"]
        (u/attrs {:r  #(.-r %)
                  :cx #(.-x %)
                  :cy #(.-y %)})
        (u/styles {:fill         #(color-scale (.-depth %))
                   :stroke-width stroke-width
                   :stroke       #(color-scale (inc (.-depth %)))}))))

(comment

  "pack-draw examples"

  (get-json "data/tweets.json"
            (fn [r]
              (draw-pack
                {:id     "All"
                 :values (.. js/d3
                             nest
                             (key #(.-user %))
                             (entries (aget r "tweets")))}
                {:color-scale (.. u/scale
                                  linear
                                  (domain #js [0 2])
                                  (range #js ["lightcoral" "#FAFAFA"]))
                 :children    #(.-values %)
                 :value       #(+ (count (.-retweets %)) (count (.-favorites %)) 1)})))

  (get-json "data/flare-pack.json"
            (fn [r]
              (draw-pack
                r
                {:color-scale (.. u/scale
                                  linear
                                  (domain #js [0 5])
                                  (range #js ["lightcoral" "#FAFAFA"]))}))))


(defn voro1 [{:keys [width height selector n-polygon color-scale]}]
  (let [svg (*> [:select selector]
                [:append "svg"]
                (u/attrs {:width width :height height})
                [:append "g"])
        path (>> svg [:selectAll "path"])
        voronoi (.clipExtent (js/d3.geom.voronoi) (js> [[0 0] [width height]]))
        points (repeatedly n-polygon (fn [] [(rand-int width) (rand-int height)]))
        paths-data (mapv (fn [d] (when d (str "M" (.join d "L") "Z")))
                         (voronoi (js> points)))
        path (>> path
                 [:data [(js> paths-data)]])]

    (>> path
        [:enter]
        [:append "path"]
        (u/styles {:fill   #(color-scale (mod %2 20))
                   :stroke #(color-scale (mod %2 20))}))

    (>> path [:attr ["d" str]])
    (>> path [:exit] [:remove])))

(comment
  (voro1
    {:height      800
     :width       800
     :selector    "#app"
     :n-polygon   500
     :color-scale (.. u/scale
                      linear
                      (domain #js [0 20])
                      (range #js ["tomato" "#FAFAFA"]))}))

(defn v2-dist [[x1 y1] [x2 y2]]
  (let [dx (- x2 x1)
        dy (- y2 y1)]
    (Math/sqrt (+ (* dx dx) (* dy dy)))))

(defn voro2 [{:keys [width height extra selector n-polygon colors]}]
  (let [svg (*> [:select selector]
                [:append "svg"]
                (u/attrs {:width width :height height})
                (u/translate (- extra) (- extra))
                [:append "g"])

        voronoi (.clipExtent (js/d3.geom.voronoi) (js> [[(- extra) (- extra)] [(+ width extra) (+ height extra)]]))

        rand-point (fn [] [(- (rand-int (+ width (* 2 extra))) extra)
                           (- (rand-int (+ height (* 2 extra))) extra)])

        points (repeatedly n-polygon rand-point)

        data (mapv js/d3.geom.polygon (.triangles voronoi (js> points)))

        dists (mapv (fn [points]
                      (apply +
                             (map (partial v2-dist [(/ width 2) (/ height 2)])
                                  points)))
                    data)

        cscale (.. u/scale
                   linear
                   (domain (js> [(apply min dists) (apply max dists)]))
                   (range (js> colors)))

        colors (mapv cscale dists)

        path (>> svg
                 [:selectAll "path"]
                 [:data [(js> (mapv js/d3.geom.polygon (.triangles voronoi (js> points))))]])]

    (>> path
        [:enter]
        [:append "path"]
        (u/styles {:fill   #(get colors %2)
                   :stroke #(get colors %2)}))

    (>> path [:attr ["d" #(str "M" (.join % "L") "Z")]])
    (>> path [:exit] [:remove])))

(comment
  (voro2
    {:height    800
     :width     800
     :extra     50
     :selector  "#app"
     :n-polygon 700
     :colors    ["darkviolet" "#FAFAFA"]}))

(clear-svg!)

(comment
  (rvoronoi {:selector "#app"
             :width    400
             :height   400
             :data     [[-50 50 120 40 (- 0.01)]
                        [-50 50 30 10 (+ 0.03)]
                        [-50 50 60 3 (- 0.05)]
                        [-50 50 15 4 (- 0.02)]
                        [-50 50 0 1 (- 0.02)]
                        [140 (- 120) 80 10 (- 0.02)]
                        [140 (- 120) 100 6 (+ 0.02)]
                        [140 (- 120) 20 6 (- 0.02)]
                        [180 (+ 120) 40 5 (+ 0.02)]
                        [180 (+ 120) 60 8 (- 0.02)]]
             :styles   (fn [x] (.. x (style "fill" "lightskyblue") (style "stroke" "white")))
             :fill     "lightsky-blue"}))