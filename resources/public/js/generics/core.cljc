(ns generics.core
  (:refer-clojure :exclude [get-method add-method]))

(defn- generics [x]
  (when-let [gs (:generics (meta x))] (gs x)))

(defn- add-methods [x impl-map]
  (let [gs (or (generics x) (constantly {}))]
    (vary-meta x
               #(assoc % :generics
                         (fn [x]
                           (apply assoc (gs x)
                                  (mapcat (fn [[k v]] [k (partial v x)]) impl-map)))))))

(defn- add-method [x name impl]
  (add-methods x {name impl}))

(comment
  "maybe usefull for 'get-method being able to return type lvl impls"
  (defn impl-for
    "get multim's implementation for args"
    [multim & args]
    (let [disp (apply (.dispatchFn multim) args)]
      (get-method multim disp)))

  (defmacro with-dispatch [disp-val expr]
    "call a particular dispatch on a multi method"
    `((get (methods ~(first expr)) ~disp-val) ~@(next expr))))

(defn get-method [x name]
  (when-let [gf (:generics (meta x))]
    #(name (gf %))))

(defn default-dispatch-fn [x]
  (or (:type (meta x)) (type x)))

;fail in cljs for now
;No method in multimethod 'emit-constant' for dispatch value: class generics.core$defgeneric$fn__62708

#?(:clj
   (defmacro defgeneric [nam & [opts]]
     (let [kw (keyword nam)
           multi-fn (:multi opts)
           multi-name (symbol (str (name nam) "-multi"))
           dispatch-fn (or (:dispatch-fn opts) (fn [x] (or (:type (meta x)) (type x))))]

       `(do
          ~@(when-not multi-fn
              [`(defmulti ~multi-name ~dispatch-fn)
               `(defmethod ~multi-name :default [x# & _#]
                  (throw (Exception. (str "no " ~(name nam) " implementation for " x#))))]
              )

          (defn ~nam [x# & args#]
            (if-let [gs# (generics x#)]
              (apply (~kw gs#) args#)
              (apply ~(or multi-fn multi-name) x# args#)))

          (defn ~(symbol (str (name nam) "!")) [x# impl#]
            (add-method x# ~kw impl#))
          ))))

(comment
  "tests"
  (macroexpand '(defgeneric baz))

  (defmulti bazm #(or (:type (meta %1)) (type %1)))

  (defmethod bazm :default [x & args] "default baz")

  (defgeneric baz {:multi bazm})

  (baz [1])

  (baz (baz! [1 2] (fn [x & args] (apply str "baz called with " x args))))

  (baz (add-methods [3 2 1]
                    {:foo (fn [x] (println "foo" x))
                     :baz (fn [x] (println "baz" x))})))
