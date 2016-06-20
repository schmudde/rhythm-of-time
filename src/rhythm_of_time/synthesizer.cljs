(ns rhythm-of-time.synthesizer
  (:require [cljs-bach.synthesis :as bach]))

(defonce context (bach/audio-context))

(defn ping [freq gain]
  (bach/connect->
   (bach/square freq)
   (bach/percussive 0.01 1.0)
   (bach/gain gain)))

(defn ping! [hertz gain]
  (-> (ping hertz gain)
      (bach/connect-> bach/destination)
      (bach/run-with context (bach/current-time context) 0.1)))
