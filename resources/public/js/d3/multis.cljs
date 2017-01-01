(ns d3.multis)

(defn t1 [x & _] (or (:type (meta x)) (type x)))

(defmulti draw t1)
(defmulti animate t1)
