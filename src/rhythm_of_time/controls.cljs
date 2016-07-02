(ns rhythm-of-time.controls
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]))

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
