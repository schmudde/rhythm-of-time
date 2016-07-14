// Compiled by ClojureScript 1.9.36 {}
goog.provide('rhythm_of_time.controls');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('rhythm_of_time.quil_js_api');
rhythm_of_time.controls.plus = (function rhythm_of_time$controls$plus(x,y){
return (x + y);
});
rhythm_of_time.controls.tempo_update = (function rhythm_of_time$controls$tempo_update(tempo_slider){
var tempo_keyword = cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(tempo_slider)].join(''));
var default_tempo = cljs.core.deref.call(null,rhythm_of_time.quil_js_api.seq_defaults).call(null,cljs.core.keyword.call(null,tempo_slider));
var tempo = dommy.core.value.call(null,document.querySelector(dommy.core.selector.call(null,tempo_keyword)));
if(cljs.core.truth_(tempo)){
return rhythm_of_time.quil_js_api.update_tempo.call(null,"sequencer",tempo_slider,tempo);
} else {
return rhythm_of_time.quil_js_api.update_tempo.call(null,"sequencer",tempo_slider,default_tempo);
}
});
rhythm_of_time.controls.tempo_defaults_BANG_ = (function rhythm_of_time$controls$tempo_defaults_BANG_(tempo_slider){

var tempo_keyword = cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(tempo_slider)].join(''));
var default_tempo = cljs.core.deref.call(null,rhythm_of_time.quil_js_api.seq_defaults).call(null,cljs.core.keyword.call(null,tempo_slider));
return dommy.core.set_value_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,tempo_keyword)),default_tempo);
});
rhythm_of_time.controls.reset_sequencer = (function rhythm_of_time$controls$reset_sequencer(name){
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__25565_SHARP_){
return rhythm_of_time.controls.tempo_defaults_BANG_.call(null,p1__25565_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rhythm_of_time.quil_js_api.tempo_id_trk1,rhythm_of_time.quil_js_api.tempo_id_trk2], null)));

return rhythm_of_time.quil_js_api.reset_state.call(null,name);
});
goog.exportSymbol('rhythm_of_time.controls.reset_sequencer', rhythm_of_time.controls.reset_sequencer);
rhythm_of_time.controls.toggle_sequencer_BANG_ = (function rhythm_of_time$controls$toggle_sequencer_BANG_(e){

rhythm_of_time.quil_js_api.stop_loop_BANG_.call(null,"sequencer");

rhythm_of_time.controls.reset_sequencer.call(null,"sequencer");

dommy.core.toggle_BANG_.call(null,document.getElementById("movie"));

return cljs.core.doall.call(null,cljs.core.map.call(null,dommy.core.toggle_BANG_,dommy.utils.__GT_Array.call(null,document.getElementsByClassName("sequencer-row"))));
});
rhythm_of_time.controls.melody = (function rhythm_of_time$controls$melody(melody_select){
return rhythm_of_time.quil_js_api.set_melody_BANG_.call(null,melody_select);
});
dommy.core.listen_BANG_.call(null,document.getElementById("film-button"),new cljs.core.Keyword(null,"click","click",1912301393),rhythm_of_time.controls.toggle_sequencer_BANG_);
dommy.core.listen_BANG_.call(null,document.getElementById("melody-i"),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return rhythm_of_time.controls.melody.call(null,"i");
}));
dommy.core.listen_BANG_.call(null,document.getElementById("melody-ii"),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return rhythm_of_time.controls.melody.call(null,"ii");
}));
dommy.core.listen_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(rhythm_of_time.quil_js_api.tempo_id_trk1)].join('')))),new cljs.core.Keyword(null,"change","change",-1163046502),(function (){
return rhythm_of_time.controls.tempo_update.call(null,rhythm_of_time.quil_js_api.tempo_id_trk1);
}));
dommy.core.listen_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(rhythm_of_time.quil_js_api.tempo_id_trk2)].join('')))),new cljs.core.Keyword(null,"change","change",-1163046502),(function (){
return rhythm_of_time.controls.tempo_update.call(null,rhythm_of_time.quil_js_api.tempo_id_trk2);
}));

//# sourceMappingURL=controls.js.map?rel=1468519957350