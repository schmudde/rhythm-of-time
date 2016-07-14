// Compiled by ClojureScript 1.9.36 {}
goog.provide('rhythm_of_time.sequencer');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('rhythm_of_time.controls');
goog.require('rhythm_of_time.quil_js_api');
goog.require('rhythm_of_time.synthesizer');
goog.require('quil.middleware');
goog.require('cljs.reader');
rhythm_of_time.sequencer.setup = (function rhythm_of_time$sequencer$setup(){
quil.core.frame_rate.call(null,(5));

quil.core.stroke_weight.call(null,(2));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__25699_SHARP_){
return rhythm_of_time.controls.tempo_defaults_BANG_.call(null,p1__25699_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rhythm_of_time.quil_js_api.tempo_id_trk1,rhythm_of_time.quil_js_api.tempo_id_trk2], null)));

return rhythm_of_time.quil_js_api.get_defaults.call(null);
});
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

var tempo_trk1 = cljs.core.keyword.call(null,rhythm_of_time.quil_js_api.tempo_id_trk1);
var tempo_trk2 = cljs.core.keyword.call(null,rhythm_of_time.quil_js_api.tempo_id_trk2);
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
rhythm_of_time.sequencer.gain_value = (function rhythm_of_time$sequencer$gain_value(audio_on_off){
if(cljs.core.truth_(audio_on_off)){
return 0.1;
} else {
return 0.0;
}
});
rhythm_of_time.sequencer.draw_stroke_BANG_ = (function rhythm_of_time$sequencer$draw_stroke_BANG_(weight,green_value,x,y,width,height){
quil.core.stroke_weight.call(null,weight);

quil.core.stroke.call(null,(255),green_value,(255));

return quil.core.ellipse.call(null,x,y,width,height);
});
rhythm_of_time.sequencer.draw_stage_BANG_ = (function rhythm_of_time$sequencer$draw_stage_BANG_(stage,position_x,position_y){
var intensity = quil.core.frame_count.call(null);
var height = (15);
var width = (15);
var x = ((position_x * (20)) + width);
var y = (height + position_y);
if(cljs.core.even_QMARK_.call(null,intensity)){
quil.core.fill.call(null,(255),(230),(255),(stage - (15)));
} else {
quil.core.fill.call(null,(255),(245),(255),stage);
}

if(!((stage === (0)))){
rhythm_of_time.sequencer.draw_stroke_BANG_.call(null,(6),(100),x,y,width,height);
} else {
}

rhythm_of_time.sequencer.draw_stroke_BANG_.call(null,(4),(200),x,y,width,height);

return rhythm_of_time.sequencer.draw_stroke_BANG_.call(null,(2),(255),x,y,width,height);
});
rhythm_of_time.sequencer.draw_state = (function rhythm_of_time$sequencer$draw_state(state){

quil.core.background.call(null,(0));

var length_of_sequencer = cljs.core.count.call(null,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(state));
var track1 = cljs.core.keyword.call(null,rhythm_of_time.quil_js_api.get_melody.call(null).call(null,new cljs.core.Keyword(null,"track1","track1",-38408105)));
var track2 = cljs.core.keyword.call(null,rhythm_of_time.quil_js_api.get_melody.call(null).call(null,new cljs.core.Keyword(null,"track2","track2",1073623557)));
rhythm_of_time.synthesizer.ping_BANG_.call(null,cljs.core.first.call(null,track1.call(null,state)),rhythm_of_time.sequencer.gain_value.call(null,new cljs.core.Keyword(null,"audio1","audio1",-1317416216).cljs$core$IFn$_invoke$arity$1(state)));

rhythm_of_time.synthesizer.ping_BANG_.call(null,cljs.core.first.call(null,track2.call(null,state)),rhythm_of_time.sequencer.gain_value.call(null,new cljs.core.Keyword(null,"audio2","audio2",-96461134).cljs$core$IFn$_invoke$arity$1(state)));

var n__22910__auto__ = length_of_sequencer;
var i = (0);
while(true){
if((i < n__22910__auto__)){
rhythm_of_time.sequencer.draw_stage_BANG_.call(null,rhythm_of_time.sequencer.stage_value.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(state),i)),i,(0));

rhythm_of_time.sequencer.draw_stage_BANG_.call(null,rhythm_of_time.sequencer.stage_value.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"stages2","stages2",961103093).cljs$core$IFn$_invoke$arity$1(state),i)),i,(20));

var G__25700 = (i + (1));
i = G__25700;
continue;
} else {
return null;
}
break;
}
});
rhythm_of_time.sequencer.browser_detection = (function rhythm_of_time$sequencer$browser_detection(){
return navigator.userAgent;
});
rhythm_of_time.sequencer.sequencer = (function rhythm_of_time$sequencer$sequencer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"sequencer",new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
return quil.core.smooth.call(null,(2));
}),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,rhythm_of_time.sequencer.update_state))?(function() { 
var G__25701__delegate = function (args){
return cljs.core.apply.call(null,rhythm_of_time.sequencer.update_state,args);
};
var G__25701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25702__i = 0, G__25702__a = new Array(arguments.length -  0);
while (G__25702__i < G__25702__a.length) {G__25702__a[G__25702__i] = arguments[G__25702__i + 0]; ++G__25702__i;}
  args = new cljs.core.IndexedSeq(G__25702__a,0);
} 
return G__25701__delegate.call(this,args);};
G__25701.cljs$lang$maxFixedArity = 0;
G__25701.cljs$lang$applyTo = (function (arglist__25703){
var args = cljs.core.seq(arglist__25703);
return G__25701__delegate(args);
});
G__25701.cljs$core$IFn$_invoke$arity$variadic = G__25701__delegate;
return G__25701;
})()
:rhythm_of_time.sequencer.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(170),(50)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,rhythm_of_time.sequencer.setup))?(function() { 
var G__25704__delegate = function (args){
return cljs.core.apply.call(null,rhythm_of_time.sequencer.setup,args);
};
var G__25704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25705__i = 0, G__25705__a = new Array(arguments.length -  0);
while (G__25705__i < G__25705__a.length) {G__25705__a[G__25705__i] = arguments[G__25705__i + 0]; ++G__25705__i;}
  args = new cljs.core.IndexedSeq(G__25705__a,0);
} 
return G__25704__delegate.call(this,args);};
G__25704.cljs$lang$maxFixedArity = 0;
G__25704.cljs$lang$applyTo = (function (arglist__25706){
var args = cljs.core.seq(arglist__25706);
return G__25704__delegate(args);
});
G__25704.cljs$core$IFn$_invoke$arity$variadic = G__25704__delegate;
return G__25704;
})()
:rhythm_of_time.sequencer.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,rhythm_of_time.sequencer.draw_state))?(function() { 
var G__25707__delegate = function (args){
return cljs.core.apply.call(null,rhythm_of_time.sequencer.draw_state,args);
};
var G__25707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25708__i = 0, G__25708__a = new Array(arguments.length -  0);
while (G__25708__i < G__25708__a.length) {G__25708__a[G__25708__i] = arguments[G__25708__i + 0]; ++G__25708__i;}
  args = new cljs.core.IndexedSeq(G__25708__a,0);
} 
return G__25707__delegate.call(this,args);};
G__25707.cljs$lang$maxFixedArity = 0;
G__25707.cljs$lang$applyTo = (function (arglist__25709){
var args = cljs.core.seq(arglist__25709);
return G__25707__delegate(args);
});
G__25707.cljs$core$IFn$_invoke$arity$variadic = G__25707__delegate;
return G__25707;
})()
:rhythm_of_time.sequencer.draw_state));
});
goog.exportSymbol('rhythm_of_time.sequencer.sequencer', rhythm_of_time.sequencer.sequencer);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23290__23291__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__23290__23291__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),rhythm_of_time.sequencer.sequencer,new cljs.core.Keyword(null,"host-id","host-id",742376279),"sequencer"], null));
}

//# sourceMappingURL=sequencer.js.map?rel=1468519957883