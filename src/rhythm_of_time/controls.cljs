(ns rhythm-of-time.controls
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]
            [rhythm-of-time.quil-js-api :as js-api]))

(defn plus [x y] (+ x y))

(defn hide-sequencer! [e]
  (.log js/console "You clicked my button! Congratulations")
  (dommy/toggle! (sel :#hiders)))
   ;; (-> (sel1 :#hider)
   ;;     (dommy/toggle!)))

(defn toggle-sequencer! [e]
  (js/console.log "toggle-sequencer!")
  (map dommy/toggle! (sel :.sequencer)))

(dommy/listen! (sel1 :#film-button) :click toggle-sequencer!)


(defn tempo-update []
  (let [default-tempo (dommy/attr (sel1 :#tempo) :defaultValue)
        tempo (dommy/value (sel1 :#tempo))]
    (println tempo)
    (if tempo
      (js-api/update-tempo2 "sequencer" tempo)
      (js-api/update-tempo2 "sequencer" default-tempo))))

(dommy/listen! (sel1 :#tempo) :click tempo-update)
