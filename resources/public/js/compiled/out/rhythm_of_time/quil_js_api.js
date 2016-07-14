// Compiled by ClojureScript 1.9.36 {}
goog.provide('rhythm_of_time.quil_js_api');
goog.require('cljs.core');
goog.require('quil.core');
rhythm_of_time.quil_js_api.tempo_id_trk1 = "tempo-trk1";
rhythm_of_time.quil_js_api.tempo_id_trk2 = "tempo-trk2";
rhythm_of_time.quil_js_api.seq_defaults = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.Keyword(null,"frequencies-i-2","frequencies-i-2",-457625052),new cljs.core.Keyword(null,"frequencies-i-1","frequencies-i-1",1335991142),new cljs.core.Keyword(null,"audio1","audio1",-1317416216),cljs.core.keyword.call(null,rhythm_of_time.quil_js_api.tempo_id_trk2),new cljs.core.Keyword(null,"frequencies-ii-2","frequencies-ii-2",800215401),new cljs.core.Keyword(null,"audio2","audio2",-96461134),cljs.core.keyword.call(null,rhythm_of_time.quil_js_api.tempo_id_trk1),new cljs.core.Keyword(null,"stages2","stages2",961103093),new cljs.core.Keyword(null,"frequencies-ii-1","frequencies-ii-1",1433664316)],[cljs.core.list((1),(0),(0),(0),(0),(0),(0),(0)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [261.626,293.665,329.628,349.228,391.995,(440),493.883,523.251], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(220),246.942,261.626,293.665,329.628,349.228,391.995,(440)], null),true,(60),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(400),(700),(300),(600),(200),(500),(100)], null),true,(85),cljs.core.list((1),(0),(0),(0),(0),(0),(0),(0)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(700),(600),(500),(400),(300),(200),(100)], null)]));
rhythm_of_time.quil_js_api.melody = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track1","track1",-38408105),"frequencies-i-1",new cljs.core.Keyword(null,"track2","track2",1073623557),"frequencies-i-2"], null));
rhythm_of_time.quil_js_api.set_melody_BANG_ = (function rhythm_of_time$quil_js_api$set_melody_BANG_(melody_select){
var G__24569 = melody_select;
switch (G__24569) {
case "i":
return cljs.core.reset_BANG_.call(null,rhythm_of_time.quil_js_api.melody,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track1","track1",-38408105),"frequencies-i-1",new cljs.core.Keyword(null,"track2","track2",1073623557),"frequencies-i-2"], null));

break;
case "ii":
return cljs.core.reset_BANG_.call(null,rhythm_of_time.quil_js_api.melody,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track1","track1",-38408105),"frequencies-ii-1",new cljs.core.Keyword(null,"track2","track2",1073623557),"frequencies-ii-2"], null));

break;
default:
return cljs.core.reset_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track1","track1",-38408105),"frequencies-i-1",new cljs.core.Keyword(null,"track2","track2",1073623557),"frequencies-i-2"], null));

}
});
rhythm_of_time.quil_js_api.get_melody = (function rhythm_of_time$quil_js_api$get_melody(){
return cljs.core.deref.call(null,rhythm_of_time.quil_js_api.melody);
});
rhythm_of_time.quil_js_api.get_defaults = (function rhythm_of_time$quil_js_api$get_defaults(){
return cljs.core.deref.call(null,rhythm_of_time.quil_js_api.seq_defaults);
});
rhythm_of_time.quil_js_api.get_sketch_by_id = (function rhythm_of_time$quil_js_api$get_sketch_by_id(name){
return quil.core.get_sketch_by_id.call(null,name);
});
rhythm_of_time.quil_js_api.get_sketch_state_by_id = (function rhythm_of_time$quil_js_api$get_sketch_state_by_id(name){
var _STAR_applet_STAR_24572 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = rhythm_of_time.quil_js_api.get_sketch_by_id.call(null,name);

try{return quil.core.state.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_24572;
}});
rhythm_of_time.quil_js_api.state_js = (function rhythm_of_time$quil_js_api$state_js(name){

var _STAR_applet_STAR_24574 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = rhythm_of_time.quil_js_api.get_sketch_by_id.call(null,name);

try{return cljs.core.clj__GT_js.call(null,quil.core.state.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_24574;
}});
goog.exportSymbol('rhythm_of_time.quil_js_api.state_js', rhythm_of_time.quil_js_api.state_js);
rhythm_of_time.quil_js_api.reset_state = (function rhythm_of_time$quil_js_api$reset_state(name){

var current_sketch = rhythm_of_time.quil_js_api.get_sketch_by_id.call(null,name).quil;
var seq__24585 = cljs.core.seq.call(null,cljs.core.deref.call(null,rhythm_of_time.quil_js_api.seq_defaults));
var chunk__24586 = null;
var count__24587 = (0);
var i__24588 = (0);
while(true){
if((i__24588 < count__24587)){
var vec__24589 = cljs.core._nth.call(null,chunk__24586,i__24588);
var k = cljs.core.nth.call(null,vec__24589,(0),null);
var v = cljs.core.nth.call(null,vec__24589,(1),null);
cljs.core.swap_BANG_.call(null,current_sketch,cljs.core.assoc,k,v);

var G__24595 = seq__24585;
var G__24596 = chunk__24586;
var G__24597 = count__24587;
var G__24598 = (i__24588 + (1));
seq__24585 = G__24595;
chunk__24586 = G__24596;
count__24587 = G__24597;
i__24588 = G__24598;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24585);
if(temp__4657__auto__){
var seq__24585__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24585__$1)){
var c__22806__auto__ = cljs.core.chunk_first.call(null,seq__24585__$1);
var G__24599 = cljs.core.chunk_rest.call(null,seq__24585__$1);
var G__24600 = c__22806__auto__;
var G__24601 = cljs.core.count.call(null,c__22806__auto__);
var G__24602 = (0);
seq__24585 = G__24599;
chunk__24586 = G__24600;
count__24587 = G__24601;
i__24588 = G__24602;
continue;
} else {
var vec__24592 = cljs.core.first.call(null,seq__24585__$1);
var k = cljs.core.nth.call(null,vec__24592,(0),null);
var v = cljs.core.nth.call(null,vec__24592,(1),null);
cljs.core.swap_BANG_.call(null,current_sketch,cljs.core.assoc,k,v);

var G__24603 = cljs.core.next.call(null,seq__24585__$1);
var G__24604 = null;
var G__24605 = (0);
var G__24606 = (0);
seq__24585 = G__24603;
chunk__24586 = G__24604;
count__24587 = G__24605;
i__24588 = G__24606;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('rhythm_of_time.quil_js_api.reset_state', rhythm_of_time.quil_js_api.reset_state);
rhythm_of_time.quil_js_api.stop_loop_BANG_ = (function rhythm_of_time$quil_js_api$stop_loop_BANG_(name){
rhythm_of_time.quil_js_api.reset_state.call(null,name);

return rhythm_of_time.quil_js_api.get_sketch_by_id.call(null,name).noLoop();
});
goog.exportSymbol('rhythm_of_time.quil_js_api.stop_loop_BANG_', rhythm_of_time.quil_js_api.stop_loop_BANG_);
rhythm_of_time.quil_js_api.stop_loop = (function rhythm_of_time$quil_js_api$stop_loop(name){
return rhythm_of_time.quil_js_api.stop_loop_BANG_.call(null,name);
});
goog.exportSymbol('rhythm_of_time.quil_js_api.stop_loop', rhythm_of_time.quil_js_api.stop_loop);
rhythm_of_time.quil_js_api.start_loop_BANG_ = (function rhythm_of_time$quil_js_api$start_loop_BANG_(name){
return rhythm_of_time.quil_js_api.get_sketch_by_id.call(null,name).loop();
});
goog.exportSymbol('rhythm_of_time.quil_js_api.start_loop_BANG_', rhythm_of_time.quil_js_api.start_loop_BANG_);
rhythm_of_time.quil_js_api.start_loop = (function rhythm_of_time$quil_js_api$start_loop(name){
return rhythm_of_time.quil_js_api.start_loop_BANG_.call(null,name);
});
goog.exportSymbol('rhythm_of_time.quil_js_api.start_loop', rhythm_of_time.quil_js_api.start_loop);
rhythm_of_time.quil_js_api.update_tempo = (function rhythm_of_time$quil_js_api$update_tempo(name,tempo_track,tempo){
return cljs.core.swap_BANG_.call(null,rhythm_of_time.quil_js_api.get_sketch_by_id.call(null,name).quil,cljs.core.assoc,cljs.core.keyword.call(null,tempo_track),tempo);
});

//# sourceMappingURL=quil_js_api.js.map?rel=1468519956250