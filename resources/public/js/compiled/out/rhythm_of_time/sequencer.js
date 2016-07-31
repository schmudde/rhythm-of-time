// Compiled by ClojureScript 1.9.36 {}
goog.provide('rhythm_of_time.sequencer');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljs.reader');
goog.require('rhythm_of_time.synthesizer');
rhythm_of_time.sequencer.melody = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track1","track1",-38408105),"frequencies-i-1",new cljs.core.Keyword(null,"track2","track2",1073623557),"frequencies-i-2"], null));
rhythm_of_time.sequencer.set_melody_BANG_ = (function rhythm_of_time$sequencer$set_melody_BANG_(melody_select){
var G__44809 = melody_select;
switch (G__44809) {
case "i":
return cljs.core.reset_BANG_.call(null,rhythm_of_time.sequencer.melody,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track1","track1",-38408105),"frequencies-i-1",new cljs.core.Keyword(null,"track2","track2",1073623557),"frequencies-i-2"], null));

break;
case "ii":
return cljs.core.reset_BANG_.call(null,rhythm_of_time.sequencer.melody,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track1","track1",-38408105),"frequencies-ii-1",new cljs.core.Keyword(null,"track2","track2",1073623557),"frequencies-ii-2"], null));

break;
default:
return cljs.core.reset_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track1","track1",-38408105),"frequencies-i-1",new cljs.core.Keyword(null,"track2","track2",1073623557),"frequencies-i-2"], null));

}
});
rhythm_of_time.sequencer.get_melody = (function rhythm_of_time$sequencer$get_melody(){
return cljs.core.deref.call(null,rhythm_of_time.sequencer.melody);
});
rhythm_of_time.sequencer.tempo_id_trk1 = "tempo-trk1";
rhythm_of_time.sequencer.tempo_id_trk2 = "tempo-trk2";
rhythm_of_time.sequencer.get_tempo_track_names = (function rhythm_of_time$sequencer$get_tempo_track_names(){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[rhythm_of_time.sequencer.tempo_id_trk1,rhythm_of_time.sequencer.tempo_id_trk2],null));
});
rhythm_of_time.sequencer.update_tempo = (function rhythm_of_time$sequencer$update_tempo(name,tempo_track,tempo){
return cljs.core.swap_BANG_.call(null,quil.core.get_sketch_by_id.call(null,name).quil,cljs.core.assoc,cljs.core.keyword.call(null,tempo_track),tempo);
});
rhythm_of_time.sequencer.seq_defaults = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.Keyword(null,"frequencies-i-2","frequencies-i-2",-457625052),new cljs.core.Keyword(null,"frequencies-i-1","frequencies-i-1",1335991142),new cljs.core.Keyword(null,"audio1","audio1",-1317416216),cljs.core.keyword.call(null,rhythm_of_time.sequencer.tempo_id_trk2),new cljs.core.Keyword(null,"frequencies-ii-2","frequencies-ii-2",800215401),new cljs.core.Keyword(null,"audio2","audio2",-96461134),cljs.core.keyword.call(null,rhythm_of_time.sequencer.tempo_id_trk1),new cljs.core.Keyword(null,"stages2","stages2",961103093),new cljs.core.Keyword(null,"frequencies-ii-1","frequencies-ii-1",1433664316)],[cljs.core.list((1),(0),(0),(0),(0),(0),(0),(0)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [261.626,293.665,329.628,349.228,391.995,(440),493.883,523.251], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(220),246.942,261.626,293.665,329.628,349.228,391.995,(440)], null),true,(60),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(400),(700),(300),(600),(200),(500),(100)], null),true,(85),cljs.core.list((1),(0),(0),(0),(0),(0),(0),(0)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(700),(600),(500),(400),(300),(200),(100)], null)]));
rhythm_of_time.sequencer.get_defaults = (function rhythm_of_time$sequencer$get_defaults(){
return cljs.core.deref.call(null,rhythm_of_time.sequencer.seq_defaults);
});
rhythm_of_time.sequencer.reset_defaults_BANG_ = (function rhythm_of_time$sequencer$reset_defaults_BANG_(name){
var current_sketch = quil.core.get_sketch_by_id.call(null,name).quil;
var seq__44821 = cljs.core.seq.call(null,cljs.core.deref.call(null,rhythm_of_time.sequencer.seq_defaults));
var chunk__44822 = null;
var count__44823 = (0);
var i__44824 = (0);
while(true){
if((i__44824 < count__44823)){
var vec__44825 = cljs.core._nth.call(null,chunk__44822,i__44824);
var k = cljs.core.nth.call(null,vec__44825,(0),null);
var v = cljs.core.nth.call(null,vec__44825,(1),null);
cljs.core.swap_BANG_.call(null,current_sketch,cljs.core.assoc,k,v);

var G__44831 = seq__44821;
var G__44832 = chunk__44822;
var G__44833 = count__44823;
var G__44834 = (i__44824 + (1));
seq__44821 = G__44831;
chunk__44822 = G__44832;
count__44823 = G__44833;
i__44824 = G__44834;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44821);
if(temp__4657__auto__){
var seq__44821__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44821__$1)){
var c__22545__auto__ = cljs.core.chunk_first.call(null,seq__44821__$1);
var G__44835 = cljs.core.chunk_rest.call(null,seq__44821__$1);
var G__44836 = c__22545__auto__;
var G__44837 = cljs.core.count.call(null,c__22545__auto__);
var G__44838 = (0);
seq__44821 = G__44835;
chunk__44822 = G__44836;
count__44823 = G__44837;
i__44824 = G__44838;
continue;
} else {
var vec__44828 = cljs.core.first.call(null,seq__44821__$1);
var k = cljs.core.nth.call(null,vec__44828,(0),null);
var v = cljs.core.nth.call(null,vec__44828,(1),null);
cljs.core.swap_BANG_.call(null,current_sketch,cljs.core.assoc,k,v);

var G__44839 = cljs.core.next.call(null,seq__44821__$1);
var G__44840 = null;
var G__44841 = (0);
var G__44842 = (0);
seq__44821 = G__44839;
chunk__44822 = G__44840;
count__44823 = G__44841;
i__44824 = G__44842;
continue;
}
} else {
return null;
}
}
break;
}
});
rhythm_of_time.sequencer.setup = (function rhythm_of_time$sequencer$setup(){
quil.core.frame_rate.call(null,(5));

quil.core.stroke_weight.call(null,(2));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

return cljs.core.deref.call(null,rhythm_of_time.sequencer.seq_defaults);
});
rhythm_of_time.sequencer.audio_defaults = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"volume","volume",1900330799),0.15,new cljs.core.Keyword(null,"synth","synth",-862700847),"sine"], null));
rhythm_of_time.sequencer.frame_rate_scaler = (function rhythm_of_time$sequencer$frame_rate_scaler(tempo){

var baseline_tempo = (120);
var current_frame_rate = (5);
var scaled_tempo = Math.round(((tempo * current_frame_rate) / baseline_tempo));
return ((current_frame_rate - scaled_tempo) + (1));
});
rhythm_of_time.sequencer.advance_QMARK_ = (function rhythm_of_time$sequencer$advance_QMARK_(tempo){

if(cljs.core.integer_QMARK_.call(null,(quil.core.frame_count.call(null) / rhythm_of_time.sequencer.frame_rate_scaler.call(null,tempo)))){
return true;
} else {
return false;
}
});
rhythm_of_time.sequencer.advancer = (function rhythm_of_time$sequencer$advancer(stages,frequency_list_i,frequency_list_ii,tempo){

if(cljs.core.truth_(rhythm_of_time.sequencer.advance_QMARK_.call(null,tempo))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stage","stage",1843544772),cljs.core.drop_last.call(null,cljs.core.conj.call(null,stages,cljs.core.last.call(null,stages))),new cljs.core.Keyword(null,"frequency-i","frequency-i",-1114231898),cljs.core.subvec.call(null,cljs.core.conj.call(null,frequency_list_i,cljs.core.first.call(null,frequency_list_i)),(1)),new cljs.core.Keyword(null,"frequency-ii","frequency-ii",-92182024),cljs.core.subvec.call(null,cljs.core.conj.call(null,frequency_list_ii,cljs.core.first.call(null,frequency_list_ii)),(1)),new cljs.core.Keyword(null,"audio","audio",1819127321),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stage","stage",1843544772),stages,new cljs.core.Keyword(null,"frequency-i","frequency-i",-1114231898),frequency_list_i,new cljs.core.Keyword(null,"frequency-ii","frequency-ii",-92182024),frequency_list_ii,new cljs.core.Keyword(null,"audio","audio",1819127321),false], null);
}
});
rhythm_of_time.sequencer.update_state = (function rhythm_of_time$sequencer$update_state(state){

var tempo_trk1 = cljs.core.keyword.call(null,rhythm_of_time.sequencer.tempo_id_trk1);
var tempo_trk2 = cljs.core.keyword.call(null,rhythm_of_time.sequencer.tempo_id_trk2);
var stages = new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(state);
var stages2 = new cljs.core.Keyword(null,"stages2","stages2",961103093).cljs$core$IFn$_invoke$arity$1(state);
var frequency_list_i_trk1 = new cljs.core.Keyword(null,"frequencies-i-1","frequencies-i-1",1335991142).cljs$core$IFn$_invoke$arity$1(state);
var frequency_list_i_trk2 = new cljs.core.Keyword(null,"frequencies-i-2","frequencies-i-2",-457625052).cljs$core$IFn$_invoke$arity$1(state);
var frequency_list_ii_trk1 = new cljs.core.Keyword(null,"frequencies-ii-1","frequencies-ii-1",1433664316).cljs$core$IFn$_invoke$arity$1(state);
var frequency_list_ii_trk2 = new cljs.core.Keyword(null,"frequencies-ii-2","frequencies-ii-2",800215401).cljs$core$IFn$_invoke$arity$1(state);
var sequencer_trk1 = rhythm_of_time.sequencer.advancer.call(null,stages,frequency_list_i_trk1,frequency_list_ii_trk1,tempo_trk1.call(null,state));
var sequencer_trk2 = rhythm_of_time.sequencer.advancer.call(null,stages2,frequency_list_i_trk2,frequency_list_ii_trk2,tempo_trk2.call(null,state));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.Keyword(null,"frequencies-i-2","frequencies-i-2",-457625052),new cljs.core.Keyword(null,"frequencies-i-1","frequencies-i-1",1335991142),new cljs.core.Keyword(null,"audio1","audio1",-1317416216),new cljs.core.Keyword(null,"frequencies-ii-2","frequencies-ii-2",800215401),tempo_trk2,tempo_trk1,new cljs.core.Keyword(null,"audio2","audio2",-96461134),new cljs.core.Keyword(null,"stages2","stages2",961103093),new cljs.core.Keyword(null,"frequencies-ii-1","frequencies-ii-1",1433664316)],[new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(sequencer_trk1),new cljs.core.Keyword(null,"frequency-i","frequency-i",-1114231898).cljs$core$IFn$_invoke$arity$1(sequencer_trk2),new cljs.core.Keyword(null,"frequency-i","frequency-i",-1114231898).cljs$core$IFn$_invoke$arity$1(sequencer_trk1),new cljs.core.Keyword(null,"audio","audio",1819127321).cljs$core$IFn$_invoke$arity$1(sequencer_trk1),new cljs.core.Keyword(null,"frequency-ii","frequency-ii",-92182024).cljs$core$IFn$_invoke$arity$1(sequencer_trk2),tempo_trk2.call(null,state),tempo_trk1.call(null,state),new cljs.core.Keyword(null,"audio","audio",1819127321).cljs$core$IFn$_invoke$arity$1(sequencer_trk2),new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(sequencer_trk2),new cljs.core.Keyword(null,"frequency-ii","frequency-ii",-92182024).cljs$core$IFn$_invoke$arity$1(sequencer_trk1)]);
});
rhythm_of_time.sequencer.stage_value = (function rhythm_of_time$sequencer$stage_value(stage_state){

return (stage_state * (255));
});
rhythm_of_time.sequencer.select_fill_color = (function rhythm_of_time$sequencer$select_fill_color(){
var G__44844 = cljs.core.deref.call(null,rhythm_of_time.sequencer.melody).call(null,new cljs.core.Keyword(null,"track1","track1",-38408105));
switch (G__44844) {
case "frequencies-i-1":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(245),(255)], null);

break;
case "frequencies-ii-1":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(199)], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(245),(255)], null);

}
});
rhythm_of_time.sequencer.draw_stroke_BANG_ = (function rhythm_of_time$sequencer$draw_stroke_BANG_(weight,green,blue,x,y,width,height){
quil.core.stroke_weight.call(null,weight);

quil.core.stroke.call(null,(255),green,blue);

return quil.core.ellipse.call(null,x,y,width,height);
});
rhythm_of_time.sequencer.draw_stage_BANG_ = (function rhythm_of_time$sequencer$draw_stage_BANG_(stage,position_x,position_y){
var intensity = quil.core.frame_count.call(null);
var height = (15);
var width = (15);
var x = ((position_x * (20)) + width);
var y = (height + position_y);
var lower_intensity = (15);
var red = cljs.core.nth.call(null,rhythm_of_time.sequencer.select_fill_color.call(null),(0));
var green = cljs.core.nth.call(null,rhythm_of_time.sequencer.select_fill_color.call(null),(1));
var blue = cljs.core.nth.call(null,rhythm_of_time.sequencer.select_fill_color.call(null),(2));
if(cljs.core.even_QMARK_.call(null,intensity)){
quil.core.fill.call(null,red,(green - lower_intensity),blue,(stage - (15)));
} else {
quil.core.fill.call(null,red,green,blue,stage);
}

if(!((stage === (0)))){
rhythm_of_time.sequencer.draw_stroke_BANG_.call(null,(6),(100),blue,x,y,width,height);
} else {
}

rhythm_of_time.sequencer.draw_stroke_BANG_.call(null,(4),(200),(255),x,y,width,height);

return rhythm_of_time.sequencer.draw_stroke_BANG_.call(null,(2),(255),blue,x,y,width,height);
});
rhythm_of_time.sequencer.browser_detection = (function rhythm_of_time$sequencer$browser_detection(){
return navigator.userAgent;
});
rhythm_of_time.sequencer.one_note = (function rhythm_of_time$sequencer$one_note(){
return rhythm_of_time.synthesizer.ping_BANG_.call(null,(440),0.2,"saw");
});
rhythm_of_time.sequencer.gain_value = (function rhythm_of_time$sequencer$gain_value(audio_on_off){
if(cljs.core.truth_(audio_on_off)){
return cljs.core.deref.call(null,rhythm_of_time.sequencer.audio_defaults).call(null,new cljs.core.Keyword(null,"volume","volume",1900330799));
} else {
return 0.0;
}
});
rhythm_of_time.sequencer.set_synth_BANG_ = (function rhythm_of_time$sequencer$set_synth_BANG_(synth_select){
var G__44847 = synth_select;
switch (G__44847) {
case "a":
return cljs.core.swap_BANG_.call(null,rhythm_of_time.sequencer.audio_defaults,cljs.core.assoc,new cljs.core.Keyword(null,"synth","synth",-862700847),"sine");

break;
case "b":
return cljs.core.swap_BANG_.call(null,rhythm_of_time.sequencer.audio_defaults,cljs.core.assoc,new cljs.core.Keyword(null,"synth","synth",-862700847),"sawtooth");

break;
default:
return cljs.core.swap_BANG_.call(null,rhythm_of_time.sequencer.audio_defaults,cljs.core.assoc,new cljs.core.Keyword(null,"synth","synth",-862700847),"sine");

}
});
rhythm_of_time.sequencer.synth_type = (function rhythm_of_time$sequencer$synth_type(){
return cljs.core.deref.call(null,rhythm_of_time.sequencer.audio_defaults).call(null,new cljs.core.Keyword(null,"synth","synth",-862700847));
});
rhythm_of_time.sequencer.draw_state = (function rhythm_of_time$sequencer$draw_state(state){

quil.core.background.call(null,(0));

var length_of_sequencer = cljs.core.count.call(null,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(state));
var track1 = cljs.core.keyword.call(null,rhythm_of_time.sequencer.get_melody.call(null).call(null,new cljs.core.Keyword(null,"track1","track1",-38408105)));
var track2 = cljs.core.keyword.call(null,rhythm_of_time.sequencer.get_melody.call(null).call(null,new cljs.core.Keyword(null,"track2","track2",1073623557)));
rhythm_of_time.synthesizer.ping_BANG_.call(null,cljs.core.first.call(null,track1.call(null,state)),rhythm_of_time.sequencer.gain_value.call(null,new cljs.core.Keyword(null,"audio1","audio1",-1317416216).cljs$core$IFn$_invoke$arity$1(state)),rhythm_of_time.sequencer.synth_type.call(null));

rhythm_of_time.synthesizer.ping_BANG_.call(null,cljs.core.first.call(null,track2.call(null,state)),rhythm_of_time.sequencer.gain_value.call(null,new cljs.core.Keyword(null,"audio2","audio2",-96461134).cljs$core$IFn$_invoke$arity$1(state)),rhythm_of_time.sequencer.synth_type.call(null));

var n__22649__auto__ = length_of_sequencer;
var i = (0);
while(true){
if((i < n__22649__auto__)){
rhythm_of_time.sequencer.draw_stage_BANG_.call(null,rhythm_of_time.sequencer.stage_value.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(state),i)),i,(0));

rhythm_of_time.sequencer.draw_stage_BANG_.call(null,rhythm_of_time.sequencer.stage_value.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"stages2","stages2",961103093).cljs$core$IFn$_invoke$arity$1(state),i)),i,(20));

var G__44849 = (i + (1));
i = G__44849;
continue;
} else {
return null;
}
break;
}
});
rhythm_of_time.sequencer.sequencer = (function rhythm_of_time$sequencer$sequencer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"sequencer",new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
return quil.core.smooth.call(null,(2));
}),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,rhythm_of_time.sequencer.update_state))?(function() { 
var G__44850__delegate = function (args){
return cljs.core.apply.call(null,rhythm_of_time.sequencer.update_state,args);
};
var G__44850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44851__i = 0, G__44851__a = new Array(arguments.length -  0);
while (G__44851__i < G__44851__a.length) {G__44851__a[G__44851__i] = arguments[G__44851__i + 0]; ++G__44851__i;}
  args = new cljs.core.IndexedSeq(G__44851__a,0);
} 
return G__44850__delegate.call(this,args);};
G__44850.cljs$lang$maxFixedArity = 0;
G__44850.cljs$lang$applyTo = (function (arglist__44852){
var args = cljs.core.seq(arglist__44852);
return G__44850__delegate(args);
});
G__44850.cljs$core$IFn$_invoke$arity$variadic = G__44850__delegate;
return G__44850;
})()
:rhythm_of_time.sequencer.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(170),(50)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,rhythm_of_time.sequencer.setup))?(function() { 
var G__44853__delegate = function (args){
return cljs.core.apply.call(null,rhythm_of_time.sequencer.setup,args);
};
var G__44853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44854__i = 0, G__44854__a = new Array(arguments.length -  0);
while (G__44854__i < G__44854__a.length) {G__44854__a[G__44854__i] = arguments[G__44854__i + 0]; ++G__44854__i;}
  args = new cljs.core.IndexedSeq(G__44854__a,0);
} 
return G__44853__delegate.call(this,args);};
G__44853.cljs$lang$maxFixedArity = 0;
G__44853.cljs$lang$applyTo = (function (arglist__44855){
var args = cljs.core.seq(arglist__44855);
return G__44853__delegate(args);
});
G__44853.cljs$core$IFn$_invoke$arity$variadic = G__44853__delegate;
return G__44853;
})()
:rhythm_of_time.sequencer.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,rhythm_of_time.sequencer.draw_state))?(function() { 
var G__44856__delegate = function (args){
return cljs.core.apply.call(null,rhythm_of_time.sequencer.draw_state,args);
};
var G__44856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44857__i = 0, G__44857__a = new Array(arguments.length -  0);
while (G__44857__i < G__44857__a.length) {G__44857__a[G__44857__i] = arguments[G__44857__i + 0]; ++G__44857__i;}
  args = new cljs.core.IndexedSeq(G__44857__a,0);
} 
return G__44856__delegate.call(this,args);};
G__44856.cljs$lang$maxFixedArity = 0;
G__44856.cljs$lang$applyTo = (function (arglist__44858){
var args = cljs.core.seq(arglist__44858);
return G__44856__delegate(args);
});
G__44856.cljs$core$IFn$_invoke$arity$variadic = G__44856__delegate;
return G__44856;
})()
:rhythm_of_time.sequencer.draw_state));
});
goog.exportSymbol('rhythm_of_time.sequencer.sequencer', rhythm_of_time.sequencer.sequencer);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23029__23030__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__23029__23030__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),rhythm_of_time.sequencer.sequencer,new cljs.core.Keyword(null,"host-id","host-id",742376279),"sequencer"], null));
}

//# sourceMappingURL=sequencer.js.map?rel=1469933753665