(ns rhythm-of-time.sequencer
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [rhythm-of-time.synthesizer :as synth]))


(defn setup []
  (q/frame-rate 2)
  (q/color-mode :hsb)
  {:stages '(1 0 0 0 0 0 0 0)
   :frequencies [500 600 700 800 900 1000 1100 1200]
   :stages2 '(1 0 0 0 0 0 0 0)
   :frequencies2 [1000 1200 1400 1600 1800 2000 2200 2400]}
  )

(defn update-state [state]
  "returns the new state"
  (let [stages (:stages state)
        frequency-list (:frequencies state)
        frequency-list2 (:frequencies2 state)]
    {:stages (drop-last (conj stages (last stages)))
     :frequencies (subvec (conj frequency-list (first frequency-list)) 1)
     :frequencies2 (subvec (conj frequency-list2 (first frequency-list2)) 1)}
    ))

(defn stage-value [stage-state]
  "takes a stage state, 0 or 1, and prepares it for drawing"
  (* stage-state 255))

(defn draw-stage! [stage position]
    (q/fill 255 235 95 stage)
    (q/ellipse (+ 100 (* position 20)) 220 15 15))

(defn draw-state [state]
  "Side effect: draws state onto screen"
  (q/background 200)
;  (synth/ping! (first (:frequencies state)) 0.1)
;  (synth/ping! (first (:frequencies2 state)) 0.1)

  (let [length-of-sequencer (count (:stages state))]
    (dotimes [i length-of-sequencer]
      (draw-stage! (stage-value (nth (:stages state) i)) i))
    ))

(defn plus [x y]
  (+ x y))

(defn framer [x]
  (q/fill 100 100 100 100))

(q/defsketch sequencer
  :host "sequencer"
  :setup setup
  :draw draw-state
  :update update-state
  :size [500 300]
  :middleware [m/fun-mode])
