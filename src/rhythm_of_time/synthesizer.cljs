
(ns rhythm-of-time.synthesizer
  (:require [cljs-bach.synthesis :as bach]))

(defonce context (bach/audio-context))

(defn ping-sine [freq gain]
  (bach/connect->
   (bach/sine freq)
   (bach/percussive 0.02 0.9)
   (bach/low-pass 14000)
   (bach/gain gain)))

(defn ping-saw [freq gain]
  (bach/connect->
   (bach/sawtooth freq)
   (bach/percussive 0.01 0.7)
   (bach/low-pass 5000)
   (bach/gain gain)))


(defn ping! [hertz gain type]
  (-> (if (= type "sine")
        (ping-sine hertz gain)
        (ping-saw hertz gain))
      (bach/connect-> bach/destination)
      (bach/run-with context (bach/current-time context) 0.1)))
