(ns figwheel.connect (:require [figwheel.client] [rhythm-of-time.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/rhythm-of-time.core.on-js-reload (apply js/rhythm-of-time.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'rhythm-of-time.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

