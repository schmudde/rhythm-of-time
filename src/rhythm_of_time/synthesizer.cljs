(ns rhythm-of-time.synthesizer
  (:require [cljs-bach.synthesis :as bach]))

(defonce context (bach/audio-context))

(defn ping [freq]
  (bach/connect->
   (bach/square freq)
   (bach/percussive 0.01 1.0)
   (bach/gain 0.1)))

(defn ping! [hertz time]
  (-> (ping hertz)
      (bach/connect-> bach/destination)
      (bach/run-with context (bach/current-time context) time)))
