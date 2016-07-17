(ns rhythm-of-time.quil-js-api
  (:require [quil.core :as q :include-macros true]
            [rhythm-of-time.controls :as cntrl]))

(defn ^:export state-js [name]
  "Returns the state of the sketch in a JavaScript-friendly form"
  (q/with-sketch (q/get-sketch-by-id name) (clj->js (q/state))))

(defn ^:export reset-state [name]
  "Resets the state to its default. Cannot simply use (reset!) because we lose the rest of the atom/object properties."
  (cntrl/reset-sequencer name))

(defn ^:export stop-loop! [name]
  (reset-state name)
  (.noLoop (q/get-sketch-by-id name)))

(defn ^:export stop-loop [name]
  (stop-loop! name))

(defn ^:export start-loop! [name]
  (.loop (q/get-sketch-by-id name)))

(defn ^:export start-loop [name]
  (start-loop! name))
