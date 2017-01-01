(ns d3.flocks
  (:require cljsjs.d3))

(defn rand* [a b]
  (+ (rand (- b a)) a))

(let [cs (js/d3.scale.category10)
      boids (map (fn [_] (rand* 0.8 1.2)) (range 100))
      ])
