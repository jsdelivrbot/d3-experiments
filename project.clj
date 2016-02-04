(defproject d3-in-action "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [cljsjs/c3 "0.4.10-0"]
                 [figwheel-sidecar "0.5.0"]
                 [cljs-http "0.1.39"]
                 [cljsjs/d3-cloud "1.2.1-0"]]
  :plugins [[lein-cljsbuild "1.1.0"]]
  :source-paths ["src" "script"] )
