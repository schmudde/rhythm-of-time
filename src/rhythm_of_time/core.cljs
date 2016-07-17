(ns rhythm-of-time.core
  (:require [rhythm-of-time.sequencer :as seq]
            [rhythm-of-time.quil-js-api :as js-api]))

(enable-console-print!)

(println "This text is printed from src/rhythm-of-time/core.cljs. Reload")

(seq/sequencer)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
