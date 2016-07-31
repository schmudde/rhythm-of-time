(ns rhythm-of-time.core
  (:require [rhythm-of-time.sequencer :as seq]
            [rhythm-of-time.quil-js-api :as js-api]
            [rhythm-of-time.controls :as tempo-cntrl :refer [slider-defaults!]]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Set DOM defaults                                    ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; this dude sets the HTML5 slider position to the default values
(doall (map #(tempo-cntrl/slider-defaults! % (@seq/seq-defaults (keyword %))) (seq/get-tempo-track-names)))


(tempo-cntrl/slider-defaults! "volume" (@seq/audio-defaults :volume))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Load Sequencer                                      ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(seq/sequencer)

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
