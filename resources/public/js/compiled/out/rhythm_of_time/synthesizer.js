// Compiled by ClojureScript 1.9.36 {}
goog.provide('rhythm_of_time.synthesizer');
goog.require('cljs.core');
goog.require('cljs_bach.synthesis');
if(typeof rhythm_of_time.synthesizer.context !== 'undefined'){
} else {
rhythm_of_time.synthesizer.context = cljs_bach.synthesis.audio_context.call(null);
}
rhythm_of_time.synthesizer.ping_sine = (function rhythm_of_time$synthesizer$ping_sine(freq,gain){
return cljs_bach.synthesis.connect__GT_.call(null,cljs_bach.synthesis.sine.call(null,freq),cljs_bach.synthesis.percussive.call(null,0.02,0.9),cljs_bach.synthesis.low_pass.call(null,(14000)),cljs_bach.synthesis.gain.call(null,gain));
});
rhythm_of_time.synthesizer.ping_saw = (function rhythm_of_time$synthesizer$ping_saw(freq,gain){
return cljs_bach.synthesis.connect__GT_.call(null,cljs_bach.synthesis.sawtooth.call(null,freq),cljs_bach.synthesis.percussive.call(null,0.01,0.7),cljs_bach.synthesis.low_pass.call(null,(5000)),cljs_bach.synthesis.gain.call(null,gain));
});
rhythm_of_time.synthesizer.ping_BANG_ = (function rhythm_of_time$synthesizer$ping_BANG_(hertz,gain,type){
return cljs_bach.synthesis.run_with.call(null,cljs_bach.synthesis.connect__GT_.call(null,((cljs.core._EQ_.call(null,type,"sine"))?rhythm_of_time.synthesizer.ping_sine.call(null,hertz,gain):rhythm_of_time.synthesizer.ping_saw.call(null,hertz,gain)),cljs_bach.synthesis.destination),rhythm_of_time.synthesizer.context,cljs_bach.synthesis.current_time.call(null,rhythm_of_time.synthesizer.context),0.1);
});

//# sourceMappingURL=synthesizer.js.map?rel=1469933753516