// Compiled by ClojureScript 1.9.36 {}
goog.provide('rhythm_of_time.controls');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('rhythm_of_time.sequencer');
goog.require('cljs.reader');
rhythm_of_time.controls.volume_update = (function rhythm_of_time$controls$volume_update(){
var volume = cljs.reader.read_string.call(null,dommy.core.value.call(null,document.getElementById("volume")));
return cljs.core.swap_BANG_.call(null,rhythm_of_time.sequencer.audio_defaults,cljs.core.assoc,new cljs.core.Keyword(null,"volume","volume",1900330799),volume);
});
rhythm_of_time.controls.tempo_update = (function rhythm_of_time$controls$tempo_update(tempo_slider){
var tempo_keyword = cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(tempo_slider)].join(''));
var default_tempo = cljs.core.deref.call(null,rhythm_of_time.sequencer.seq_defaults).call(null,cljs.core.keyword.call(null,tempo_slider));
var tempo = dommy.core.value.call(null,document.querySelector(dommy.core.selector.call(null,tempo_keyword)));
if(cljs.core.truth_(tempo)){
return rhythm_of_time.sequencer.update_tempo.call(null,"sequencer",tempo_slider,tempo);
} else {
return rhythm_of_time.sequencer.update_tempo.call(null,"sequencer",tempo_slider,default_tempo);
}
});
rhythm_of_time.controls.slider_defaults_BANG_ = (function rhythm_of_time$controls$slider_defaults_BANG_(slider,value){

var slider_keyword = cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(slider)].join(''));
return dommy.core.set_value_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,slider_keyword)),value);
});
rhythm_of_time.controls.tempo_defaults_BANG_ = (function rhythm_of_time$controls$tempo_defaults_BANG_(tempo_slider){

var default_tempo = cljs.core.deref.call(null,rhythm_of_time.sequencer.seq_defaults).call(null,cljs.core.keyword.call(null,tempo_slider));
return rhythm_of_time.controls.slider_defaults_BANG_.call(null,tempo_slider,default_tempo);
});
rhythm_of_time.controls.sound_toggle = (function rhythm_of_time$controls$sound_toggle(){

return rhythm_of_time.sequencer.one_note.call(null);
});
dommy.core.listen_BANG_.call(null,document.getElementById("sound"),new cljs.core.Keyword(null,"click","click",1912301393),rhythm_of_time.controls.sound_toggle,new cljs.core.Keyword(null,"touchend","touchend",-1574059019),rhythm_of_time.controls.sound_toggle);
rhythm_of_time.controls.reset_sequencer = (function rhythm_of_time$controls$reset_sequencer(name){
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__44861_SHARP_){
return rhythm_of_time.controls.tempo_defaults_BANG_.call(null,p1__44861_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rhythm_of_time.sequencer.tempo_id_trk1,rhythm_of_time.sequencer.tempo_id_trk2], null)));

return rhythm_of_time.sequencer.reset_defaults_BANG_.call(null,name);
});
rhythm_of_time.controls.toggle_sequencer_BANG_ = (function rhythm_of_time$controls$toggle_sequencer_BANG_(){

rhythm_of_time.controls.reset_sequencer.call(null,"sequencer");

return dommy.core.toggle_BANG_.call(null,document.getElementById("back-to-sequencer"));
});
rhythm_of_time.controls.melody = (function rhythm_of_time$controls$melody(melody_select){
return rhythm_of_time.sequencer.set_melody_BANG_.call(null,melody_select);
});
dommy.core.listen_BANG_.call(null,document.getElementById("melody-i"),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return rhythm_of_time.controls.melody.call(null,"i");
}));
dommy.core.listen_BANG_.call(null,document.getElementById("melody-ii"),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return rhythm_of_time.controls.melody.call(null,"ii");
}));
dommy.core.listen_BANG_.call(null,document.getElementById("timbre-a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return rhythm_of_time.sequencer.set_synth_BANG_.call(null,"a");
}));
dommy.core.listen_BANG_.call(null,document.getElementById("timbre-b"),new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return rhythm_of_time.sequencer.set_synth_BANG_.call(null,"b");
}));
dommy.core.listen_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(rhythm_of_time.sequencer.tempo_id_trk1)].join('')))),new cljs.core.Keyword(null,"change","change",-1163046502),(function (){
return rhythm_of_time.controls.tempo_update.call(null,rhythm_of_time.sequencer.tempo_id_trk1);
}));
dommy.core.listen_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(rhythm_of_time.sequencer.tempo_id_trk2)].join('')))),new cljs.core.Keyword(null,"change","change",-1163046502),(function (){
return rhythm_of_time.controls.tempo_update.call(null,rhythm_of_time.sequencer.tempo_id_trk2);
}));
dommy.core.listen_BANG_.call(null,document.getElementById("volume"),new cljs.core.Keyword(null,"change","change",-1163046502),rhythm_of_time.controls.volume_update);

//# sourceMappingURL=controls.js.map?rel=1469933753735