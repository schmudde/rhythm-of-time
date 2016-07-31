// Compiled by ClojureScript 1.9.36 {}
goog.provide('rhythm_of_time.core');
goog.require('cljs.core');
goog.require('rhythm_of_time.sequencer');
goog.require('rhythm_of_time.quil_js_api');
goog.require('rhythm_of_time.controls');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__44868_SHARP_){
return rhythm_of_time.controls.slider_defaults_BANG_.call(null,p1__44868_SHARP_,cljs.core.deref.call(null,rhythm_of_time.sequencer.seq_defaults).call(null,cljs.core.keyword.call(null,p1__44868_SHARP_)));
}),rhythm_of_time.sequencer.get_tempo_track_names.call(null)));
rhythm_of_time.controls.slider_defaults_BANG_.call(null,"volume",cljs.core.deref.call(null,rhythm_of_time.sequencer.audio_defaults).call(null,new cljs.core.Keyword(null,"volume","volume",1900330799)));
rhythm_of_time.sequencer.sequencer.call(null);
if(typeof rhythm_of_time.core.app_state !== 'undefined'){
} else {
rhythm_of_time.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
rhythm_of_time.core.on_js_reload = (function rhythm_of_time$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1469933753802