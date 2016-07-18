(ns rhythm-of-time.controls
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]
            [rhythm-of-time.sequencer :as seq]
            [cljs.reader :as reader]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Tempo & Volume Controls                             ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn volume-update []
  (let [volume (reader/read-string (dommy/value (sel1 :#volume)))]
    (swap! seq/audio-defaults assoc :volume volume)))

(defn tempo-update [tempo-slider]
  (let [tempo-keyword (keyword (str "#" tempo-slider))
        default-tempo (@seq/seq-defaults (keyword tempo-slider))
        tempo (dommy/value (sel1 tempo-keyword))]
    (if tempo
      (seq/update-tempo "sequencer" tempo-slider tempo)
      (seq/update-tempo "sequencer" tempo-slider default-tempo))))

(defn slider-defaults! [slider value]
  "this function only sets a single slider position to default, not the actual value"
  (let [slider-keyword (keyword (str "#" slider))]
    (dommy/set-value! (sel1 slider-keyword) value)))

(defn tempo-defaults! [tempo-slider]
  "this function grabs the default value from the sequencer defaults, and then calls slider-defaults to set the value"
  (let [default-tempo (@seq/seq-defaults (keyword tempo-slider))]
    (slider-defaults! tempo-slider default-tempo)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Sequencer Controls                                  ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn reset-sequencer [name]
  (doall (map #(tempo-defaults! %) [seq/tempo-id-trk1 seq/tempo-id-trk2]))
  (seq/reset-defaults! name))

(defn toggle-sequencer! []
  "Stop sequencer, hide sequencer and its controls, and show the movie"
  (reset-sequencer "sequencer")
;  (dommy/toggle! (sel1 :#movie))
  (doall (map dommy/toggle! (sel :.sequencer-row))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Melody & Timbre Controls                            ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn melody [melody-select]
  (seq/set-melody! melody-select))

(dommy/listen! (sel1 :#melody-i) :click (fn [] (melody "i")))

(dommy/listen! (sel1 :#melody-ii) :click (fn [] (melody "ii")))

(dommy/listen! (sel1 :#timbre-a) :click (fn [] (seq/set-synth! "a")))

(dommy/listen! (sel1 :#timbre-b) :click (fn [] (seq/set-synth! "b")))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Tempo & Volume Controls                             ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(dommy/listen! (sel1 (keyword (str "#" seq/tempo-id-trk1))) :change
               (fn [] (tempo-update seq/tempo-id-trk1)))

(dommy/listen! (sel1 (keyword (str "#" seq/tempo-id-trk2))) :change
               (fn [] (tempo-update seq/tempo-id-trk2)))

(dommy/listen! (sel1 :#volume) :change volume-update)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Page Controls                                       ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;(dommy/listen! (sel1 :#film-button) :click toggle-sequencer!)
