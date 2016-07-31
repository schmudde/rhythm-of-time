// Compiled by ClojureScript 1.9.36 {}
goog.provide('rhythm_of_time.quil_js_api');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('rhythm_of_time.controls');
rhythm_of_time.quil_js_api.state_js = (function rhythm_of_time$quil_js_api$state_js(name){

var _STAR_applet_STAR_44865 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = quil.core.get_sketch_by_id.call(null,name);

try{return cljs.core.clj__GT_js.call(null,quil.core.state.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_44865;
}});
goog.exportSymbol('rhythm_of_time.quil_js_api.state_js', rhythm_of_time.quil_js_api.state_js);
rhythm_of_time.quil_js_api.reset_state = (function rhythm_of_time$quil_js_api$reset_state(name){

return rhythm_of_time.controls.reset_sequencer.call(null,name);
});
goog.exportSymbol('rhythm_of_time.quil_js_api.reset_state', rhythm_of_time.quil_js_api.reset_state);
rhythm_of_time.quil_js_api.stop_loop_BANG_ = (function rhythm_of_time$quil_js_api$stop_loop_BANG_(name){
rhythm_of_time.quil_js_api.reset_state.call(null,name);

return quil.core.get_sketch_by_id.call(null,name).noLoop();
});
goog.exportSymbol('rhythm_of_time.quil_js_api.stop_loop_BANG_', rhythm_of_time.quil_js_api.stop_loop_BANG_);
rhythm_of_time.quil_js_api.stop_loop = (function rhythm_of_time$quil_js_api$stop_loop(name){
return rhythm_of_time.quil_js_api.stop_loop_BANG_.call(null,name);
});
goog.exportSymbol('rhythm_of_time.quil_js_api.stop_loop', rhythm_of_time.quil_js_api.stop_loop);
rhythm_of_time.quil_js_api.start_loop_BANG_ = (function rhythm_of_time$quil_js_api$start_loop_BANG_(name){
return quil.core.get_sketch_by_id.call(null,name).loop();
});
goog.exportSymbol('rhythm_of_time.quil_js_api.start_loop_BANG_', rhythm_of_time.quil_js_api.start_loop_BANG_);
rhythm_of_time.quil_js_api.start_loop = (function rhythm_of_time$quil_js_api$start_loop(name){
return rhythm_of_time.quil_js_api.start_loop_BANG_.call(null,name);
});
goog.exportSymbol('rhythm_of_time.quil_js_api.start_loop', rhythm_of_time.quil_js_api.start_loop);
rhythm_of_time.quil_js_api.hide_canvas_controls = (function rhythm_of_time$quil_js_api$hide_canvas_controls(){
return rhythm_of_time.controls.toggle_sequencer_BANG_.call(null);
});
goog.exportSymbol('rhythm_of_time.quil_js_api.hide_canvas_controls', rhythm_of_time.quil_js_api.hide_canvas_controls);

//# sourceMappingURL=quil_js_api.js.map?rel=1469933753754