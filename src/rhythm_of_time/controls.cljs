(ns rhythm-of-time.controls
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]
            [rhythm-of-time.sequencer :as seq]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Tempo Controls                                      ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn tempo-update [tempo-slider]
  (let [tempo-keyword (keyword (str "#" tempo-slider))
        default-tempo (@seq/seq-defaults (keyword tempo-slider))
        tempo (dommy/value (sel1 tempo-keyword))]
    (if tempo
      (seq/update-tempo "sequencer" tempo-slider tempo)
      (seq/update-tempo "sequencer" tempo-slider default-tempo))))

(defn tempo-defaults! [tempo-slider]
  "this function only sets a single slider position to default, not the actual value"
  (let [tempo-keyword (keyword (str "#" tempo-slider))
        default-tempo (@seq/seq-defaults (keyword tempo-slider))]
    (dommy/set-value! (sel1 tempo-keyword) default-tempo)))


(defn tempo-slider-defaults! [tempo-slider tempo-value]
  "this function only sets a single slider position to default, not the actual value"
  (let [tempo-keyword (keyword (str "#" tempo-slider))]
    (dommy/set-value! (sel1 tempo-keyword) tempo-value)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Sequencer Controls                                  ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export reset-sequencer [name]
  (doall (map #(tempo-defaults! %) [seq/tempo-id-trk1 seq/tempo-id-trk2]))
  (seq/reset-defaults! name))

(defn toggle-sequencer! [e]
  "Stop sequencer, hide sequencer and its controls, and show the movie"
  (seq/stop-loop!)
  (reset-sequencer "sequencer")
  (dommy/toggle! (sel1 :#movie))
  (doall (map dommy/toggle! (sel :.sequencer-row))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Melody Controls                                     ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn melody [melody-select]
  (seq/set-melody! melody-select))

(dommy/listen! (sel1 :#melody-i) :click (fn [] (melody "i")))

(dommy/listen! (sel1 :#melody-ii) :click (fn [] (melody "ii")))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Tempo Controls                                      ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(dommy/listen! (sel1 (keyword (str "#" seq/tempo-id-trk1))) :change
               (fn [] (tempo-update seq/tempo-id-trk1)))

(dommy/listen! (sel1 (keyword (str "#" seq/tempo-id-trk2))) :change
               (fn [] (tempo-update seq/tempo-id-trk2)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Page Controls                                       ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(dommy/listen! (sel1 :#film-button) :click toggle-sequencer!)
