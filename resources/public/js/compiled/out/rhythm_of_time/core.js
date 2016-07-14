// Compiled by ClojureScript 1.9.36 {}
goog.provide('rhythm_of_time.core');
goog.require('cljs.core');
goog.require('rhythm_of_time.sequencer');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/rhythm-of-time/core.cljs. Reload");
rhythm_of_time.sequencer.sequencer.call(null);
if(typeof rhythm_of_time.core.app_state !== 'undefined'){
} else {
rhythm_of_time.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
rhythm_of_time.core.on_js_reload = (function rhythm_of_time$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1468519957898