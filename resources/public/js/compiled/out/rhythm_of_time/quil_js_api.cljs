(ns rhythm-of-time.quil-js-api
  (:require [quil.core :as q :include-macros true]))

; The DEFAULT name of the tempo id for each track
; The HTML5 markup has the same id as the CLJS atom keyword
; If they are not the same, the program will fail
(def tempo-id-trk1 "tempo-trk1")
(def tempo-id-trk2 "tempo-trk2")

(def seq-defaults (atom
  {:stages '(1 0 0 0 0 0 0 0)
   :frequencies-i-1 [220 246.942 261.626 293.665 329.628 349.228 391.995 440]
   :frequencies-ii-1 [800 700 600 500 400 300 200 100]
   :stages2 '(1 0 0 0 0 0 0 0)
   :frequencies-i-2 [261.626 293.665 329.628 349.228 391.995 440 493.883 523.251]
   :frequencies-ii-2 [800 400 700 300 600 200 500 100]
   :audio1 true
   :audio2 true
   (keyword tempo-id-trk1) 85 ;; currently, nothing > 120 works as a maximum tempo
   (keyword tempo-id-trk2) 60}  ;; currently, 0 does not work as a minimum tempo
  ))

(def melody (atom {:track1 "frequencies-i-1" :track2 "frequencies-i-2"}))

(defn set-melody! [melody-select]
  (case melody-select
    "i" (reset! melody {:track1 "frequencies-i-1" :track2 "frequencies-i-2"})
    "ii" (reset! melody {:track1 "frequencies-ii-1" :track2 "frequencies-ii-2"})
    (reset! {:track1 "frequencies-i-1" :track2 "frequencies-i-2"})))

(defn get-melody [] @melody)

(defn get-defaults [] @seq-defaults)

(defn get-sketch-by-id [name]
  (q/get-sketch-by-id name))

(defn get-sketch-state-by-id [name]
  (q/with-sketch (get-sketch-by-id name) (q/state)))

(defn ^:export state-js [name]
  "Returns the state of the sketch in a JavaScript-friendly form"
  (q/with-sketch (get-sketch-by-id name) (clj->js (q/state))))

(defn ^:export reset-state [name]
  "Resets the state to its default. Cannot simply use (reset!) because we lose the rest of the atom/object properties."
  (let [current-sketch (. (get-sketch-by-id name) -quil)]
    (doseq [[k v] @seq-defaults]
      (swap! current-sketch assoc k v))))

(defn ^:export stop-loop! [name]
  (reset-state name)
  (.noLoop (get-sketch-by-id name)))

(defn ^:export stop-loop [name]
  (stop-loop! name))

(defn ^:export start-loop! [name]
  (.loop (get-sketch-by-id name)))

(defn ^:export start-loop [name]
  (start-loop! name))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Custom Controls                                     ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn update-tempo [name tempo-track tempo]
  (swap! (. (get-sketch-by-id name) -quil) assoc (keyword tempo-track) tempo))
