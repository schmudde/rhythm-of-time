(ns rhythm-of-time.sequencer
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.reader :as reader]
            [rhythm-of-time.synthesizer :as synth]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Melody Settings                                     ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def melody (atom {:track1 "frequencies-i-1" :track2 "frequencies-i-2"}))

(defn set-melody! [melody-select]
  (case melody-select
    "i" (reset! melody {:track1 "frequencies-i-1" :track2 "frequencies-i-2"})
    "ii" (reset! melody {:track1 "frequencies-ii-1" :track2 "frequencies-ii-2"})
    (reset! {:track1 "frequencies-i-1" :track2 "frequencies-i-2"})))

(defn get-melody [] @melody)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Tempo Track Interface IDs                           ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; The DEFAULT name of the tempo id for each track
; The HTML5 markup has the same id as the CLJS atom keyword
; If they are not the same, the program will fail
(def tempo-id-trk1 "tempo-trk1")
(def tempo-id-trk2 "tempo-trk2")

(defn get-tempo-track-names []
  (vector tempo-id-trk1 tempo-id-trk2))

(defn update-tempo [name tempo-track tempo]
  (swap! (. (q/get-sketch-by-id name) -quil) assoc (keyword tempo-track) tempo))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Sequencer Settings                                  ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def seq-defaults (atom
  {:stages '(1 0 0 0 0 0 0 0)
   :frequencies-i-1 [220 246.942 261.626 293.665 329.628 349.228 391.995 440]
   :frequencies-ii-1 [800 700 600 500 400 300 200 100]
   :stages2 '(1 0 0 0 0 0 0 0)
   :frequencies-i-2 [261.626 293.665 329.628 349.228 391.995 440 493.883 523.251]
   :frequencies-ii-2 [800 400 700 300 600 200 500 100]
   :audio1 true ;; determines whether or not the audio sounds on
   :audio2 true ;; a frame refresh
   (keyword tempo-id-trk1) 85 ;; currently, nothing > 120 works as a maximum tempo
   (keyword tempo-id-trk2) 60}  ;; currently, 0 does not work as a minimum tempo
  ))

(defn get-defaults [] @seq-defaults)

(defn reset-defaults! [name]
  (let [current-sketch (. (q/get-sketch-by-id name) -quil)]
    (doseq [[k v] @seq-defaults]
      (swap! current-sketch assoc k v))))

(defn setup []
  (q/frame-rate 5)
  (q/stroke-weight 2)
  (q/color-mode :rgb)
  @seq-defaults)

;; (defn stop-loop! []
;;   (q/no-loop))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Audio Settings                                      ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def audio-defaults (atom
                     {:volume 0.15
                      :synth "sine"}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Framerate & Tempo Sync Functions                    ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn frame-rate-scaler [tempo]
  "baseline-tempo / frame-rate = tempo / x. If tempo=120 then returns the equivalent to (q/frame-rate)"
  (let [baseline-tempo 120
        current-frame-rate 5 ;(q/current-frame-rate)
        scaled-tempo (.round js/Math (/ (* tempo current-frame-rate) baseline-tempo))]
    (inc (- current-frame-rate scaled-tempo ))))

(defn advance? [tempo]
  "if the frame-count is some multiple of the scaled frame-rate then advance"
  (if (integer? (/ (q/frame-count) (frame-rate-scaler tempo)))
    true
    false))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Animation Update Functions                          ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn advancer [stages frequency-list-i frequency-list-ii tempo]
  "advances the sequencer to the next stage and the next frequency"
  (if (advance? tempo)
    {:stage (drop-last (conj stages (last stages)))
     :frequency-i (subvec (conj frequency-list-i (first frequency-list-i)) 1)
     :frequency-ii (subvec (conj frequency-list-ii (first frequency-list-ii)) 1)
     :audio true}
    {:stage stages
     :frequency-i frequency-list-i
     :frequency-ii frequency-list-ii
     :audio false}))

(defn update-state [state]
  "returns the new state"
  (let [tempo-trk1 (keyword tempo-id-trk1)
        tempo-trk2 (keyword tempo-id-trk2)

        stages (:stages state)
        stages2 (:stages2 state)

        frequency-list-i-trk1 (:frequencies-i-1 state)
        frequency-list-i-trk2 (:frequencies-i-2 state)

        frequency-list-ii-trk1 (:frequencies-ii-1 state)
        frequency-list-ii-trk2 (:frequencies-ii-2 state)


        sequencer-trk1 (advancer stages
                                 frequency-list-i-trk1
                                 frequency-list-ii-trk1
                                 (tempo-trk1 state))
        sequencer-trk2 (advancer stages2
                                 frequency-list-i-trk2
                                 frequency-list-ii-trk2
                                 (tempo-trk2 state))]

      {:stages (:stage sequencer-trk1)
       :frequencies-i-1 (:frequency-i sequencer-trk1)
       :frequencies-ii-1 (:frequency-ii sequencer-trk1)
       :audio1 (:audio sequencer-trk1)
       :stages2 (:stage sequencer-trk2)
       :frequencies-i-2 (:frequency-i sequencer-trk2)
       :frequencies-ii-2 (:frequency-ii sequencer-trk2)
       :audio2 (:audio sequencer-trk2)
       tempo-trk1 (tempo-trk1 state)
       tempo-trk2 (tempo-trk2 state)}
))

(defn stage-value [stage-state]
  "takes a stage state, 0 or 1, and prepares it for drawing"
  (* stage-state 255))

(defn select-fill-color []
    ; set the sequencer color based on the melody selected
    (case (@melody :track1)
      "frequencies-i-1" [255 245 255] ; pink
      "frequencies-ii-1" [255 255 199] ; yellow
      [255 245 255]) ; pink
  )

(defn draw-stroke! [weight green blue x y width height]
    (q/stroke-weight weight)
    (q/stroke 255 green blue)
    (q/ellipse x y width height)
  )

(defn draw-stage! [stage position-x position-y]
  (let [intensity (q/frame-count)
        height 15
        width 15
        x (+ (* position-x 20) width)
        y (+ height position-y)
        lower-intensity 15
        red (nth (select-fill-color) 0)
        green (nth (select-fill-color) 1)
        blue (nth (select-fill-color) 2)]

    (if (even? intensity)
      (q/fill red (- green lower-intensity) blue (- stage 15))
      (q/fill red green blue stage))

    (if (not (zero? stage))
      (draw-stroke! 6 100 blue x y width height))

    (draw-stroke! 4 200 255 x y width height)
    (draw-stroke! 2 255 blue x y width height)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Audio Functions                                     ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn browser-detection [] js/navigator.userAgent)

(defn one-note [] (synth/ping! 440 0.2 "saw"))

(defn gain-value [audio-on-off]
  (if audio-on-off
    (@audio-defaults :volume)
    0.0))

(defn set-synth! [synth-select]
  (case synth-select
    "a" (swap! audio-defaults assoc :synth "sine")
    "b" (swap! audio-defaults assoc :synth "sawtooth")
    (swap! audio-defaults assoc :synth "sine")))

(defn synth-type []
  (@audio-defaults :synth))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  Quil Sketch Functions                               ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn draw-state [state]
  "Side effect: draws state onto screen"
  (q/background 0)

  (let [length-of-sequencer (count (:stages state))
        track1 (keyword ((get-melody) :track1))
        track2 (keyword ((get-melody) :track2))]
    (synth/ping! (first (track1 state))
                 (gain-value (:audio1 state))
                 (synth-type))
    (synth/ping! (first (track2 state))
                 (gain-value (:audio2 state))
                 (synth-type))
    (dotimes [i length-of-sequencer]
      (draw-stage! (stage-value (nth (:stages state) i)) i 0)
      (draw-stage! (stage-value (nth (:stages2 state) i)) i 20))
    ))

(q/defsketch sequencer
  :host "sequencer"
  :setup setup
  :draw draw-state
  :update update-state
  :settings #(q/smooth 2)             ;; Turn on anti-aliasing
  :size [170 50]
  :middleware [m/fun-mode])
