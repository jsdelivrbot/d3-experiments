(ns generics.core)

(defn generics [x]
  (when-let [gs (:generics (meta x))] (gs x)))

(defmulti foo-multi #(or (:type (meta %1)) (type %1)))

(defmethod foo-multi :default [x & args] "default foo")

(defn foo [x & args]
  (if-let [gs (generics x)]
    (apply (:foo gs) args)
    (apply foo-multi x args)))

(defn add-method [x name impl]
  (let [gs (or (generics x) (constantly {}))]
    (vary-meta x
             #(assoc % :generics
                       (fn [x]
                         (assoc (gs x) name (partial impl x)))))))

(foo 1)
(foo (with-meta [1 2]
                {:generics (fn [x] {:foo #(str "foo" x)})}))

(foo (conj (add-method [1 2] :foo (fn [x & args] (apply str "added meth called with " x args)))
           1)
     1 2 3)

(-> [])
