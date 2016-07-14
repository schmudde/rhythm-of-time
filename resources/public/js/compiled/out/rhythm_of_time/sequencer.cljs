(ns rhythm-of-time.sequencer
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.reader :as reader]
            [rhythm-of-time.synthesizer :as synth]
            [rhythm-of-time.controls :as cntrl]
            [rhythm-of-time.quil-js-api :as js-api]))


(defn setup []
  (q/frame-rate 5)
  (q/stroke-weight 2)
  (q/color-mode :rgb)
  ;; Setup the display sliders
  (doall (map #(cntrl/tempo-defaults! %) [js-api/tempo-id-trk1 js-api/tempo-id-trk2]))
  (js-api/get-defaults))

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
  (let [tempo-trk1 (keyword js-api/tempo-id-trk1)
        tempo-trk2 (keyword js-api/tempo-id-trk2)

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

;; (defn zero-through-nine []
;;   "returns a value 0-9 based on the frame number. loops forever"
;;   (let [frame (q/frame-count)
;;         current-frame (last (str frame))]
;;     (reader/read-string current-frame)))

(defn stage-value [stage-state]
  "takes a stage state, 0 or 1, and prepares it for drawing"
  (* stage-state 255))

(defn gain-value [audio-on-off]
  (if audio-on-off
    0.1
    ;0.0
    0.0))

(defn draw-stroke! [weight green-value x y width height]
    (q/stroke-weight weight)
    (q/stroke 255 green-value 255)
    (q/ellipse x y width height)
  )

(defn draw-stage! [stage position-x position-y]
  (let [intensity (q/frame-count)
        height 15
        width 15
        x (+ (* position-x 20) width)
        y (+ height position-y)]

    (if (even? intensity)
      (q/fill 255 230 255 (- stage 15))
      (q/fill 255 245 255 stage))

    (if (not (zero? stage))
      (draw-stroke! 6 100 x y width height))

    (draw-stroke! 4 200 x y width height)
    (draw-stroke! 2 255 x y width height)))

(defn draw-state [state]
  "Side effect: draws state onto screen"
  (q/background 0)

  (let [length-of-sequencer (count (:stages state))
        track1 (keyword ((js-api/get-melody) :track1))
        track2 (keyword ((js-api/get-melody) :track2))]
    (synth/ping! (first (track1 state)) (gain-value (:audio1 state)))
    (synth/ping! (first (track2 state)) (gain-value (:audio2 state)))
    (dotimes [i length-of-sequencer]
      (draw-stage! (stage-value (nth (:stages state) i)) i 0)
      (draw-stage! (stage-value (nth (:stages2 state) i)) i 20))
    ))

(defn browser-detection [] js/navigator.userAgent)

(q/defsketch sequencer
  :host "sequencer"
  :setup setup
  :draw draw-state
  :update update-state
  :settings #(q/smooth 2)             ;; Turn on anti-aliasing
  :size [170 50]
  :middleware [m/fun-mode])
