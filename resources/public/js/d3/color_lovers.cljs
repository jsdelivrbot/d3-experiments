(ns d3.color-lovers
  (:import goog.net.XhrIo))

(defn get-json [url success]
  (.send goog.net.XhrIo
         url
         (fn [r] (success (.getResponseJson (.-target r))))))

(defn palettes->map [x]
  (into {} (map (fn [x] [(.-title x) (js->clj (.-colors x))]) x)))

(defn palettes-req [w]
  (fn [cb]
    (get-json (str "https://crossorigin.me/http://www.colourlovers.com/api/palettes/" w "?format=json")
              (comp cb palettes->map))))

(def top-palettes (palettes-req "top"))
(def new-palettes (palettes-req "new"))
(def rand-palette (palettes-req "random"))


(defn colors->map [x]
  (into {} (map (fn [x] [(.-title x) (.-hex x)]) x)))

(defn colors-req [w]
  (fn [cb]
    (get-json (str "https://crossorigin.me/http://www.colourlovers.com/api/colors/" w "?format=json")
              (comp cb colors->map))))

(def top-colors (colors-req "top"))
(def new-colors (colors-req "new"))
(def rand-color (colors-req "random"))

(comment
  (top-colors #(println %))
  (new-palettes #(println "new-palettes" %))
  (rand-palette #(println %)))


