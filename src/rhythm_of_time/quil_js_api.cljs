(ns rhythm-of-time.quil-js-api
  (:require [quil.core :as q :include-macros true]))

(def seq-defaults (atom
  {:stages '(1 0 0 0 0 0 0 0)
   :frequencies [500 600 700 800 900 1000 1100 1200]
   :stages2 '(1 0 0 0 0 0 0 0)
   :frequencies2 [1000 1200 1400 1600 1800 2000 2200 2400]
   :audio1 true
   :audio2 true
   :tempo1 85 ;; currently, nothing > 120 works as a maximum tempo
   :tempo2 60}  ;; currently, 0 does not work as a minimum tempo
  ))

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
