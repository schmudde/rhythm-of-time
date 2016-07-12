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
  (doall (map #(cntrl/tempo-defaults! %) ["tempo1" "tempo2"]))
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

(defn advancer [stages frequency-list tempo]
  "advances the sequencer to the next stage and the next frequency"
  (if (advance? tempo)
    {:stage (drop-last (conj stages (last stages)))
     :frequency (subvec (conj frequency-list (first frequency-list)) 1)
     :audio true}
    {:stage stages
     :frequency frequency-list
     :audio false}))


(defn update-state [state]
  "returns the new state"
  (let [stages (:stages state)
        stages2 (:stages2 state)
        frequency-list (:frequencies state)
        frequency-list2 (:frequencies2 state)
        sequencer1 (advancer stages frequency-list (:tempo1 state))
        sequencer2 (advancer stages2 frequency-list2 (:tempo2 state))]
      {:stages (:stage sequencer1)
       :frequencies (:frequency sequencer1)
       :audio1 (:audio sequencer1)
       :stages2 (:stage sequencer2)
       :frequencies2 (:frequency sequencer2)
       :audio2 (:audio sequencer2)
       :tempo1 (:tempo1 state)
       :tempo2 (:tempo2 state)}
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

  (let [length-of-sequencer (count (:stages state))]
    (synth/ping! (first (:frequencies state)) (gain-value (:audio1 state)))
    (synth/ping! (first (:frequencies2 state)) (gain-value (:audio2 state)))
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
