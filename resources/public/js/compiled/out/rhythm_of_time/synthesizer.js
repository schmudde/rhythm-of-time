// Compiled by ClojureScript 1.9.36 {}
goog.provide('rhythm_of_time.synthesizer');
goog.require('cljs.core');
goog.require('cljs_bach.synthesis');
if(typeof rhythm_of_time.synthesizer.context !== 'undefined'){
} else {
rhythm_of_time.synthesizer.context = cljs_bach.synthesis.audio_context.call(null);
}
rhythm_of_time.synthesizer.ping = (function rhythm_of_time$synthesizer$ping(freq,gain){
return cljs_bach.synthesis.connect__GT_.call(null,cljs_bach.synthesis.square.call(null,freq),cljs_bach.synthesis.percussive.call(null,0.01,1.0),cljs_bach.synthesis.gain.call(null,gain));
});
rhythm_of_time.synthesizer.ping_BANG_ = (function rhythm_of_time$synthesizer$ping_BANG_(hertz,gain){
return cljs_bach.synthesis.run_with.call(null,cljs_bach.synthesis.connect__GT_.call(null,rhythm_of_time.synthesizer.ping.call(null,hertz,gain),cljs_bach.synthesis.destination),rhythm_of_time.synthesizer.context,cljs_bach.synthesis.current_time.call(null,rhythm_of_time.synthesizer.context),0.1);
});

//# sourceMappingURL=synthesizer.js.map?rel=1468519956265