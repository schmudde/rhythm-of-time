// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('rhythm_of_time.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44871__delegate = function (x){
if(cljs.core.truth_(rhythm_of_time.core.on_js_reload)){
return cljs.core.apply.call(null,rhythm_of_time.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'rhythm-of-time.core/on-js-reload' is missing");
}
};
var G__44871 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__44872__i = 0, G__44872__a = new Array(arguments.length -  0);
while (G__44872__i < G__44872__a.length) {G__44872__a[G__44872__i] = arguments[G__44872__i + 0]; ++G__44872__i;}
  x = new cljs.core.IndexedSeq(G__44872__a,0);
} 
return G__44871__delegate.call(this,x);};
G__44871.cljs$lang$maxFixedArity = 0;
G__44871.cljs$lang$applyTo = (function (arglist__44873){
var x = cljs.core.seq(arglist__44873);
return G__44871__delegate(x);
});
G__44871.cljs$core$IFn$_invoke$arity$variadic = G__44871__delegate;
return G__44871;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1469933753811