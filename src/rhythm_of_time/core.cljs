(ns rhythm-of-time.core
  (:require [rhythm-of-time.sequencer :as seq]
            [rhythm-of-time.quil-js-api :as js-api]
            [rhythm-of-time.controls :as tempo-cntrl :refer [tempo-slider-defaults!]]))

(enable-console-print!)

(println "This text is printed from src/rhythm-of-time/core.cljs. Reload")

(tempo-cntrl/tempo-slider-defaults! "tempo-trk1" (@seq/seq-defaults (keyword "tempo-trk1")))
(tempo-cntrl/tempo-slider-defaults! "tempo-trk2" (@seq/seq-defaults (keyword "tempo-trk2")))
(seq/sequencer)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
