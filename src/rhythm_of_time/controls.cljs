(ns rhythm-of-time.controls
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]
            [rhythm-of-time.quil-js-api :as js-api]))

(defn plus [x y] (+ x y))

(defn tempo-update [tempo-slider]
  (let [tempo-keyword (keyword (str "#" tempo-slider))
        default-tempo (@js-api/seq-defaults (keyword tempo-slider))
        tempo (dommy/value (sel1 tempo-keyword))]
    (if tempo
      (js-api/update-tempo "sequencer" tempo-slider tempo)
      (js-api/update-tempo "sequencer" tempo-slider default-tempo))))

(defn tempo-defaults! [tempo-slider]
  "This function only sets the controls to default, not the actual values"
  (let [tempo-keyword (keyword (str "#" tempo-slider))
        default-tempo (@js-api/seq-defaults (keyword tempo-slider))]
    (dommy/set-value! (sel1 tempo-keyword) default-tempo)))

(defn ^:export reset-sequencer [name]
  (doall (map #(tempo-defaults! %) ["tempo1" "tempo2"]))
  (js-api/reset-state name))

(defn toggle-sequencer! [e]
  "Stop sequencer, hide sequencer and its controls, and show the movie"
  (js-api/stop-loop! "sequencer")
  (reset-sequencer "sequencer")
  (dommy/toggle! (sel1 :#movie))
  (doall (map dommy/toggle! (sel :.sequencer-row))))

(dommy/listen! (sel1 :#film-button) :click toggle-sequencer!)

(dommy/listen! (sel1 :#tempo1) :click (fn [] (tempo-update "tempo1")))

(dommy/listen! (sel1 :#tempo2) :click (fn [] (tempo-update "tempo2")))
