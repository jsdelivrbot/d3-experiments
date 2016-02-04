(ns figwheel.connect (:require [d3.one] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:5000/figwheel-ws"})

