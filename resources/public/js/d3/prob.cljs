(ns d3.prob)

(defn >f>
  "build a function that return a float between a and b"
  [a b]
  (with-meta [a b] {:realize #(+ (rand (- b a)) a)}))

(defn >i>
  "build a function that return an int between a and b"
  [a b]
  (with-meta [a b] {:realize #(Math/round (realize (>f> a b))) }))

(defn one-of
  "build a function that return a random element of x"
  [x]
  (with-meta x {:realize  #(rand-nth x)}))

(defn realize1 [x]
  (if-let [rf (:realize (meta x))]
    (rf x)
    x))

(defn realize [x]
  (if-let [rf (:realize (meta x))]
    (realize (rf x))
    x))

(realize (>f> 0 3))

