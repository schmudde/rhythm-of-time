(ns rhythm-of-time.sequencer
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [rhythm-of-time.synthesizer :as synth]))


(defn setup []
  (q/frame-rate 5)
  (q/color-mode :hsb)
  {:stages '(1 0 0 0 0 0 0 0)
   :frequencies [500 600 700 800 900 1000 1100 1200]
   :stages2 '(1 0 0 0 0 0 0 0)
   :frequencies2 [1000 1200 1400 1600 1800 2000 2200 2400]
   :audio1 true
   :audio2 true
   :tempo1 120 ;; currently, nothing > 120 works as a maximum tempo
   :tempo2 60}  ;; currently, 0 does not work as a minimum tempo
  )


(defn frame-rate-scaler [tempo]
  "baseline-tempo / frame-rate = tempo / x. If tempo=120 then returns the equivalent to (q/frame-rate)"
  (let [baseline-tempo 120
        current-frame-rate 5 ;(q/current-frame-rate)
        scaled-tempo (.round js/Math (/ (* tempo current-frame-rate) baseline-tempo))]
    (+ (- current-frame-rate scaled-tempo ) 1)))

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

(defn stage-value [stage-state]
  "takes a stage state, 0 or 1, and prepares it for drawing"
  (* stage-state 255))

(defn gain-value [audio-on-off]
  (if audio-on-off
    0.1
    ;0.0
    0.0))

(defn draw-stage! [stage position-x position-y]
    (q/fill 255 235 95 stage)
    (q/ellipse (+ 100 (* position-x 20)) (+ 220 position-y) 15 15))

(defn draw-state [state]
  "Side effect: draws state onto screen"
  (q/background 200)

  (let [length-of-sequencer (count (:stages state))]
    (synth/ping! (first (:frequencies state)) (gain-value (:audio1 state)))
    (synth/ping! (first (:frequencies2 state)) (gain-value (:audio2 state)))
    (dotimes [i length-of-sequencer]
      (draw-stage! (stage-value (nth (:stages state) i)) i 0)
      (draw-stage! (stage-value (nth (:stages2 state) i)) i 20))
    ))

(defn framer [x]
  (q/fill 100 100 100 100))

(defn update-tempo [state]
  (assoc-in state [:tempo2] 120))

(defn reset [state]
  (-> state
    (assoc-in [:stages] '(0 0 0 0 0 0 0 1)) ; note that this starts at the end of the sequence
    (assoc-in [:frequencies] [500 600 700 800 900 1000 1100 1200])
    (assoc-in [:stages2] '(0 0 0 0 0 0 0 1)) ; note that this starts at the end of the sequence
    (assoc-in [:frequencies2] [1000 1200 1400 1600 1800 2000 2200 2400])))

(defn stop! [state]
  (q/no-loop)
  state)

(defn start! [state]
  (q/start-loop)
  state)

(defn interactive [state event]
  (case (str (:raw-key event))
    "s" (stop! state)
    "b" (start! state)
    "t" (update-state (update-tempo state))
    "r" (reset state)
    state))

(q/defsketch sequencer
  :host "sequencer"
  :setup setup
  :draw draw-state
  :update update-state
  :key-pressed interactive
  :size [500 300]
  :middleware [m/fun-mode])
