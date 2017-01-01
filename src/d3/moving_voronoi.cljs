(ns d3.moving-voronoi
  (:require-macros [d3.utils :refer [attrs> styles>]])
  (:require cljsjs.d3
            [d3.utils :as u]
            [d3.prob :as p]
            [d3.palettes :as palettes]
    #_[d3.multis :refer [draw animate]]))

(defn voronoi [width height]
  (.clipExtent
    (u/voronoi)
    (clj->js [[0 0]
              [width height]])))

(defn svg [parent-selector [width height]]
  (.. js/d3
      (select parent-selector)
      (append "svg")
      (attr "width" width)
      (attr "height" (or height width))))

(comment
  "polyshrink"
  (.. (svg "#app" [1000 1000])
      (append "g")
      (selectAll "path")
      (data (clj->js (map (fn [[x y]] {:x x :y y}) [[10 10] [100 10] [50 50]])))
      (enter)
      (append "path")
      (style "fill" "blue")))

(defn moving-particles [{:keys [width height n speed radius]}]
  (let [max-rad (if (number? radius) radius (apply max radius))
        points (atom (mapv (fn [_] {:x (p/realize (p/>i> max-rad (- width max-rad)))
                                    :y (p/realize (p/>i> max-rad (- height max-rad)))
                                    :vx (p/realize speed)
                                    :vy (p/realize speed)
                                    :rad (p/realize radius)})
                           (range (p/realize n))))
        _ (u/timer (fn [_]
                     (reset! points
                             (mapv
                               (fn [{:keys [x y vx vy rad]}]
                                 (let [vx (if (or (> (+ x vx) (- width rad)) (< (+ x vx) rad)) (- vx) vx)
                                       vy (if (or (> (+ y vy) (- height rad)) (< (+ y vy) rad)) (- vy) vy)]
                                   {:x (+ x vx)
                                    :y (+ y vy)
                                    :vx vx
                                    :vy vy
                                    :rad rad}))
                               @points))
                     false))]
    points))

(comment
  (moving-particles
    {:width 500
     :height 500
     :radius (p/>f> 10 30)
     :n (p/>i> 10 20)
     :speed (p/>f> -0.5 0.5)}))

(defn moving-circles [{:keys [selector width height radius n speed] :as opts}]
  (let [points (moving-particles opts)
        pts (.. (svg selector [width height])
                (append "g")
                (selectAll "circle")
                (data (clj->js @points))
                (enter)
                (append "circle")
                (attr "r" #(.-rad %))
                (attr "cx" #(.-x %))
                (attr "cy" #(.-y %)))]

    (u/timer (fn [_]
               (let [ps @points]
                 (.. pts
                     (attr "cx" #(:x (get ps %2)))
                     (attr "cy" #(:y (get ps %2))))
                 false)))))

(comment
  (moving-circles
    {:selector "#app"
     :width 500
     :height 500
     :radius (p/>f> 10 30)
     :n (p/>i> 10 20)
     :speed (p/>f> -0.5 0.5)}))

(defn shrinked-pol [pol]
  (let [[cx cy :as centroid] (js->clj (.centroid pol))
        line (.. js/d3 -svg line (interpolate "basis-closed"))
        pd (line (clj->js points))]

    (>> svg
        [:append "path"]
        (u/attrs {:d pd})
        (u/styles {:fill "red"}))
    (>> svg
        [:append "path"]
        (u/attrs {:d pd :transform (str "translate(" cx " " cy ") scale(0.5,0.5) translate(" (- cx) " " (- cy) ")")})
        (u/styles {:fill "blue"}))))

(defn moving-voronoi [{:keys [selector width height radius n speed palette] :as opts}]
  (let [points (moving-particles (assoc opts :radius 1))
        color (p/one-of (or palette (val (first (shuffle (seq (:top @palettes/color-lovers)))))))
        vor-obj (voronoi width height)
        svg (svg selector [width height])

        pts (.. svg
                (append "g")
                (selectAll "path")
                (data (clj->js @points))
                (enter)
                (append "path")
                (style "fill" #(p/realize color)))

        pts2 (.. svg
                 (append "g")
                 (selectAll "path")
                 (data (clj->js @points))
                 (enter)
                 (append "path")
                 (style "fill" #(p/realize color)))


        line (.. js/d3 -svg line (interpolate "basis-closed"))

        three-polate (fn [[[x0 y0] [x1 y1]]]
                       [[x0 y0]
                        [(/ (+ (* 2 x0) x1) 3), (/ (+ (* 2 y0) y1) 3)]
                        [(/ (+ (* 2 x1) x0) 3), (/ (+ (* 2 y1) y0) 3)]])

        resample (fn [pts]
                   (let [pairs (map vector (cons (last pts) pts) pts)]
                     (mapcat three-polate pairs)))]

    (u/timer (fn [_]
               (let [ps @points
                     vnoi (vor-obj (clj->js (mapv (juxt :x :y) ps)))]
                 (-> pts
                     (.attr "d" (fn [pt i] (line (clj->js (resample (nth vnoi i)))))))
                 (-> pts2
                     (.attr "d" (fn [pt i] (line (clj->js (resample (nth vnoi i))))))
                     (.attr "transform" "scale(0.5 0.5)"))
                 false)))))

(comment
  ((voronoi 100 100) (clj->js [[20 20] [30 30] [0 15] [70 90] [0 89] [50 15]]))
  (moving-voronoi
    {:selector "#app"
     :width 500
     :height 500
     :speed (p/>f> -1 1)
     :n 100}))

;; flowers -----------------------------------------------

(defn vec2
  ([[a b]] {:x a :y b})
  ([a b] {:x a :y b}))

(defn regular-polygon [{x :x y :y} n r]
  (let [τ (* 2 Math/PI)]
    (mapv (fn [θ] (vec2 (+ x (* r (Math/cos θ)))
                        (+ y (* r (Math/sin θ)))))
          (range 1e-6 τ (/ τ n)))))

(comment
  (.. (svg "#app" [300 300])
      (append "g")
      (selectAll "circle")
      (data (clj->js (regular-polygon [150 150] 6 150)))
      (enter)
      (append "circle")
      (attr "r" 10)
      (attr "cx" #(.-x %))
      (attr "cy" #(.-y %))
      (style "fill" "black")))

(defn v2-dist [{x1 :x y1 :y} {x2 :x y2 :y}]
  (Math/sqrt (+ (Math/pow (- x2 x1) 2) (Math/pow (- y2 y1) 2))))

(defn rotate [{ox :x oy :y} {tx :x ty :y :as t} angle]
  (let [c (Math/cos angle)
        s (Math/sin angle)]
    (assoc t :x (+ (* c (- tx ox)) (- (* s (- ty oy))) ox)
             :y (+ (* s (- tx ox)) (* c (- ty oy)) oy))))

(defn rotating-points [o dθ points]
  (let [ps (atom points)]
    (u/timer
      (fn [_]
        (reset! ps (mapv #(rotate o % dθ) @ps))
        false))
    ps))

(comment
  (let [points (rotating-points [150 150] 0.01 (regular-polygon [150 150] 6 150))
        xs (.. (svg "#app" [300 300])
               (append "g")
               (selectAll "circle")
               (data (clj->js @points))
               (enter)
               (append "circle")
               (attr "r" 10)
               (style "fill" "black"))]
    (u/timer
      (fn [_]
        (let [ps @points]
          (.. xs
              (attr "cx" #(get (nth ps %2) 0))
              (attr "cy" #(get (nth ps %2) 1))))
        false))))

(defn flower-points [{:keys [origin lrs]}]
  (mapv (fn [x]
          (let [r (rand Math/PI)]
            (mapv #(rotate origin % r)
                  (regular-polygon origin (:petals x) (:radius x)))))
        lrs))

(defn flower-lr [petals radius]
  {:petals petals :radius radius})

(defn n-polate [n]
  (fn [{x0 :x y0 :y} {x1 :x y1 :y}]
    (mapv
      (fn [x]
        [(/ (+ (* (- n x) x0) (* x x1)) n), (/ (+ (* (- n x) y0) (* x y1)) n)])
      (range n))))

(comment
  ((n-polate 3) [0 0] [3 3]))

(defn polygon->line [pts]
  (let [line (.. js/d3 -svg line (interpolate "basis-closed"))
        pairs (map vector (cons (last pts) pts) pts)
        points (mapcat (fn [[a b]] ((n-polate 2) a b)) pairs)]
    (line (clj->js points))))

(comment
  (polygon->line (map (partial apply vec2) [[0 1] [1 0] [0 -1] [-1 0]]))
  (let [tp (fn [[[x0 y0] [x1 y1]]]
             [[x0 y0]
              [(/ (+ (* 2 x0) x1) 3), (/ (+ (* 2 y0) y1) 3)]
              [(/ (+ (* 2 x1) x0) 3), (/ (+ (* 2 y1) y0) 3)]])]
    (tp [[0 0] [3 3]])))

(defn each* [x f]
  (.each x (fn [e] (this-as p ((if (fn? f) (f e) f) (js/d3.select p))))))

(comment
  (let [fps (flower-points
              {:origin (vec2 150 150)
               :lrs (map (partial apply flower-lr) [[3 50] [7 100] [12 150]])})]
    (.. (svg "#app" [300 300])
        (append "g")
        (selectAll ".flower-layer")
        (data (clj->js fps))
        (enter)
        (append "g")
        (attr "class" "flower-layer")
        (selectAll "circle")
        (data identity)
        (enter)
        (append "circle")
        (attr "class" "petal")
        (attr "r" 10)
        (attr "cx" #(.-x %))
        (attr "cy" #(.-y %))
        (style "fill" "black"))))

(comment
  (let [zissou (:zissou palettes/wes-anderson)
        flower {:origin (vec2 150 150)
                :lrs (map (fn [[a b c]] (assoc (flower-lr a b) :styles c))
                          [[5 50 (fn [x] (.style x "fill" (get zissou 0)))]
                           [9 80 (fn [x] (.style x "fill" (get zissou 1)))]
                           [7 120 (fn [x] (.style x "fill" (get zissou 2)))]])}
        fps (flower-points flower)
        points (flatten fps)
        vor ((voronoi 300 300) (clj->js (map (juxt :x :y) points)))
        vor (loop [ret [] v vor [c :as chuncks] (map :petals (:lrs flower)) lr-idx 0]
              (if c
                (recur (conj ret
                             (let [styles (:styles (nth (:lrs flower) lr-idx))]
                               (map (fn [ps] {:points (map vec2 ps) :styles styles})
                                    (take c v))))
                       (drop c v)
                       (next chuncks)
                       (inc lr-idx))
                ret))]
    (-> (svg "#app" [300 300])
        (.append "g")
        (.attr "class" "flower")
        (.selectAll ".flower-layer")
        (.data (apply array vor))
        (.enter)
        (.append "g")
        (.attr "class" "flower-layer")
        (.selectAll "path")
        (.data #(apply array %))
        (.enter)
        (.append "path")
        (.attr "class" "petal")
        (.attr "d" #(polygon->line (:points %)))
        (each* #(:styles %)))))

(defn voronoi* [[width height] points]
  (let [v (.clipExtent
            (u/voronoi)
            (clj->js [[0 0]
                      [width height]]))
        polygons (v (clj->js (map (juxt :x :y) points)))]
    (map (fn [point polygon]
           {:polygon polygon :point point})
         points
         polygons)))

(defn flower-points* [{:keys [origin lrs]}]
  (mapv (fn [lr]
          (let [r (rand Math/PI)]
            (mapv #(assoc (rotate origin % r) :lr lr)
                  (regular-polygon origin (:petals lr) (:radius lr)))))
        lrs))

(defn ->array [x]
  (apply array x))

(comment
  (let [[c1 c2 c3 c4] (shuffle (:cavalcanti palettes/wes-anderson))
        flower {:origin (vec2 150 150)
                :lrs (mapv (fn [id [a b c]] (assoc (flower-lr a b) :styles c :id id))
                           (range)
                           [[1 30 (styles> {"fill" c1})]
                            [6 70 (styles> {"fill" c2})]
                            [10 110 (styles> {"fill" c3})]
                            [12 150 (styles> {"fill" c4})]])}
        fps (flower-points* flower)
        points (flatten fps)
        vor (voronoi* [300 300] points)
        layers (->> (group-by (comp :id :lr :point) vor)
                    sort
                    (mapv second)
                    ->array)]
    (-> (svg "#app" [300 300])
        (.append "g")
        (.attr "class" "flower")
        (.selectAll ".flower-layer")
        (.data layers)
        (.enter)
        (.append "g")
        (.attr "class" "flower-layer")
        (.selectAll "path")
        (.data ->array)
        (.enter)
        (.append "path")
        (.attr "class" "petal")
        (.attr "d" #(polygon->line (map vec2 (:polygon %))))
        (each* #(-> % :point :lr :styles)))))

(comment
  (let [[c1 c2 c3 c4] (shuffle (first (shuffle (vals palettes/wes-anderson))))
        flower {:origin (vec2 150 150)
                :lrs (mapv (fn [id [a b c]] (assoc (flower-lr a b) :speed (p/realize (p/>f> -0.01 0.01)) :styles c :id id))
                           (range)
                           [[1 30 (styles> {"fill" c1})]
                            [6 70 (styles> {"fill" c2})]
                            [10 110 (styles> {"fill" c3})]
                            [12 150 (styles> {"fill" c4})]])}

        fps (flower-points* flower)
        points (flatten fps)
        vor (voronoi* [300 300] points)

        layers (->> (group-by (comp :id :lr :point) vor)
                    sort
                    (mapv second))

        rotating-layers (mapv #(rotating-points (:origin flower) (:speed %2) %1)
                              fps
                              (:lrs flower))

        petals (-> (svg "#app" [300 300])
                   (.append "g")
                   (.attr "class" "flower")
                   (.selectAll ".flower-layer")
                   (.data (->array layers))
                   (.enter)
                   (.append "g")
                   (.attr "class" "flower-layer")
                   (.selectAll "path")
                   (.data ->array)
                   (.enter)
                   (.append "path")
                   (.attr "class" "petal")
                   (.attr "d" #(polygon->line (map vec2 (:polygon %))))
                   (each* #(-> % :point :lr :styles)))]

    (u/timer (fn [_]
               (let [layers (map deref rotating-layers)
                     vor (voronoi* [300 300] (apply concat layers))
                     layers (group-by (comp :id :lr :point) vor)]
                 (-> petals (.attr "d"
                                   (fn [pt i]
                                     (polygon->line
                                       (map vec2
                                            (:polygon
                                              (nth (get layers (get-in pt [:point :lr :id])) i))))))))
               false))))





