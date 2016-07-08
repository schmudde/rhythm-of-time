(ns rhythm-of-time.controls
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]
            [rhythm-of-time.quil-js-api :as js-api]))

(defn plus [x y] (+ x y))

(defn toggle-sequencer! [e]
  "Stop sequencer, hide sequencer and its controls, and show the movie"
  (js-api/stop-loop! "sequencer")
  (dommy/toggle! (sel1 :#movie))
  (doall (map dommy/toggle! (sel :.sequencer))))

(dommy/listen! (sel1 :#film-button) :click toggle-sequencer!)

(defn tempo-update []
  (let [default-tempo (dommy/attr (sel1 :#tempo) :defaultValue)
        tempo (dommy/value (sel1 :#tempo))]
    (println tempo)
    (if tempo
      (js-api/update-tempo2 "sequencer" tempo)
      (js-api/update-tempo2 "sequencer" default-tempo))))

(dommy/listen! (sel1 :#tempo) :click tempo-update)
