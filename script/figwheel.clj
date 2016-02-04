(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
 {:figwheel-options {:css-dirs ["resources/public/css"]
                     :ring-handler "testvg.handler/app"
                     :server-port 5000}
  :build-ids ["dev"]
  :all-builds
                    [{:id "dev"
                      :figwheel true
                      :source-paths ["src"]
                      :compiler {:main 'd3.one
                                 :asset-path "js"
                                 ;:optimizations :none
                                 ;:externs ["resources/public/cloud/cloud-externs.js"]
                                 :output-to "resources/public/js/main.js"
                                 :output-dir "resources/public/js"
                                 :verbose true}}]})

(ra/cljs-repl)
