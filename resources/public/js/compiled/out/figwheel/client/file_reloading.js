// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21734__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21734__auto__){
return or__21734__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21734__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40079_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40079_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40084 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40085 = null;
var count__40086 = (0);
var i__40087 = (0);
while(true){
if((i__40087 < count__40086)){
var n = cljs.core._nth.call(null,chunk__40085,i__40087);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40088 = seq__40084;
var G__40089 = chunk__40085;
var G__40090 = count__40086;
var G__40091 = (i__40087 + (1));
seq__40084 = G__40088;
chunk__40085 = G__40089;
count__40086 = G__40090;
i__40087 = G__40091;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40084);
if(temp__4657__auto__){
var seq__40084__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40084__$1)){
var c__22545__auto__ = cljs.core.chunk_first.call(null,seq__40084__$1);
var G__40092 = cljs.core.chunk_rest.call(null,seq__40084__$1);
var G__40093 = c__22545__auto__;
var G__40094 = cljs.core.count.call(null,c__22545__auto__);
var G__40095 = (0);
seq__40084 = G__40092;
chunk__40085 = G__40093;
count__40086 = G__40094;
i__40087 = G__40095;
continue;
} else {
var n = cljs.core.first.call(null,seq__40084__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40096 = cljs.core.next.call(null,seq__40084__$1);
var G__40097 = null;
var G__40098 = (0);
var G__40099 = (0);
seq__40084 = G__40096;
chunk__40085 = G__40097;
count__40086 = G__40098;
i__40087 = G__40099;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40150_40161 = cljs.core.seq.call(null,deps);
var chunk__40151_40162 = null;
var count__40152_40163 = (0);
var i__40153_40164 = (0);
while(true){
if((i__40153_40164 < count__40152_40163)){
var dep_40165 = cljs.core._nth.call(null,chunk__40151_40162,i__40153_40164);
topo_sort_helper_STAR_.call(null,dep_40165,(depth + (1)),state);

var G__40166 = seq__40150_40161;
var G__40167 = chunk__40151_40162;
var G__40168 = count__40152_40163;
var G__40169 = (i__40153_40164 + (1));
seq__40150_40161 = G__40166;
chunk__40151_40162 = G__40167;
count__40152_40163 = G__40168;
i__40153_40164 = G__40169;
continue;
} else {
var temp__4657__auto___40170 = cljs.core.seq.call(null,seq__40150_40161);
if(temp__4657__auto___40170){
var seq__40150_40171__$1 = temp__4657__auto___40170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40150_40171__$1)){
var c__22545__auto___40172 = cljs.core.chunk_first.call(null,seq__40150_40171__$1);
var G__40173 = cljs.core.chunk_rest.call(null,seq__40150_40171__$1);
var G__40174 = c__22545__auto___40172;
var G__40175 = cljs.core.count.call(null,c__22545__auto___40172);
var G__40176 = (0);
seq__40150_40161 = G__40173;
chunk__40151_40162 = G__40174;
count__40152_40163 = G__40175;
i__40153_40164 = G__40176;
continue;
} else {
var dep_40177 = cljs.core.first.call(null,seq__40150_40171__$1);
topo_sort_helper_STAR_.call(null,dep_40177,(depth + (1)),state);

var G__40178 = cljs.core.next.call(null,seq__40150_40171__$1);
var G__40179 = null;
var G__40180 = (0);
var G__40181 = (0);
seq__40150_40161 = G__40178;
chunk__40151_40162 = G__40179;
count__40152_40163 = G__40180;
i__40153_40164 = G__40181;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40154){
var vec__40158 = p__40154;
var seq__40159 = cljs.core.seq.call(null,vec__40158);
var first__40160 = cljs.core.first.call(null,seq__40159);
var seq__40159__$1 = cljs.core.next.call(null,seq__40159);
var x = first__40160;
var xs = seq__40159__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40158,seq__40159,first__40160,seq__40159__$1,x,xs,get_deps__$1){
return (function (p1__40100_SHARP_){
return clojure.set.difference.call(null,p1__40100_SHARP_,x);
});})(vec__40158,seq__40159,first__40160,seq__40159__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40194 = cljs.core.seq.call(null,provides);
var chunk__40195 = null;
var count__40196 = (0);
var i__40197 = (0);
while(true){
if((i__40197 < count__40196)){
var prov = cljs.core._nth.call(null,chunk__40195,i__40197);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40198_40206 = cljs.core.seq.call(null,requires);
var chunk__40199_40207 = null;
var count__40200_40208 = (0);
var i__40201_40209 = (0);
while(true){
if((i__40201_40209 < count__40200_40208)){
var req_40210 = cljs.core._nth.call(null,chunk__40199_40207,i__40201_40209);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40210,prov);

var G__40211 = seq__40198_40206;
var G__40212 = chunk__40199_40207;
var G__40213 = count__40200_40208;
var G__40214 = (i__40201_40209 + (1));
seq__40198_40206 = G__40211;
chunk__40199_40207 = G__40212;
count__40200_40208 = G__40213;
i__40201_40209 = G__40214;
continue;
} else {
var temp__4657__auto___40215 = cljs.core.seq.call(null,seq__40198_40206);
if(temp__4657__auto___40215){
var seq__40198_40216__$1 = temp__4657__auto___40215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40198_40216__$1)){
var c__22545__auto___40217 = cljs.core.chunk_first.call(null,seq__40198_40216__$1);
var G__40218 = cljs.core.chunk_rest.call(null,seq__40198_40216__$1);
var G__40219 = c__22545__auto___40217;
var G__40220 = cljs.core.count.call(null,c__22545__auto___40217);
var G__40221 = (0);
seq__40198_40206 = G__40218;
chunk__40199_40207 = G__40219;
count__40200_40208 = G__40220;
i__40201_40209 = G__40221;
continue;
} else {
var req_40222 = cljs.core.first.call(null,seq__40198_40216__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40222,prov);

var G__40223 = cljs.core.next.call(null,seq__40198_40216__$1);
var G__40224 = null;
var G__40225 = (0);
var G__40226 = (0);
seq__40198_40206 = G__40223;
chunk__40199_40207 = G__40224;
count__40200_40208 = G__40225;
i__40201_40209 = G__40226;
continue;
}
} else {
}
}
break;
}

var G__40227 = seq__40194;
var G__40228 = chunk__40195;
var G__40229 = count__40196;
var G__40230 = (i__40197 + (1));
seq__40194 = G__40227;
chunk__40195 = G__40228;
count__40196 = G__40229;
i__40197 = G__40230;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40194);
if(temp__4657__auto__){
var seq__40194__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40194__$1)){
var c__22545__auto__ = cljs.core.chunk_first.call(null,seq__40194__$1);
var G__40231 = cljs.core.chunk_rest.call(null,seq__40194__$1);
var G__40232 = c__22545__auto__;
var G__40233 = cljs.core.count.call(null,c__22545__auto__);
var G__40234 = (0);
seq__40194 = G__40231;
chunk__40195 = G__40232;
count__40196 = G__40233;
i__40197 = G__40234;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40194__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40202_40235 = cljs.core.seq.call(null,requires);
var chunk__40203_40236 = null;
var count__40204_40237 = (0);
var i__40205_40238 = (0);
while(true){
if((i__40205_40238 < count__40204_40237)){
var req_40239 = cljs.core._nth.call(null,chunk__40203_40236,i__40205_40238);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40239,prov);

var G__40240 = seq__40202_40235;
var G__40241 = chunk__40203_40236;
var G__40242 = count__40204_40237;
var G__40243 = (i__40205_40238 + (1));
seq__40202_40235 = G__40240;
chunk__40203_40236 = G__40241;
count__40204_40237 = G__40242;
i__40205_40238 = G__40243;
continue;
} else {
var temp__4657__auto___40244__$1 = cljs.core.seq.call(null,seq__40202_40235);
if(temp__4657__auto___40244__$1){
var seq__40202_40245__$1 = temp__4657__auto___40244__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40202_40245__$1)){
var c__22545__auto___40246 = cljs.core.chunk_first.call(null,seq__40202_40245__$1);
var G__40247 = cljs.core.chunk_rest.call(null,seq__40202_40245__$1);
var G__40248 = c__22545__auto___40246;
var G__40249 = cljs.core.count.call(null,c__22545__auto___40246);
var G__40250 = (0);
seq__40202_40235 = G__40247;
chunk__40203_40236 = G__40248;
count__40204_40237 = G__40249;
i__40205_40238 = G__40250;
continue;
} else {
var req_40251 = cljs.core.first.call(null,seq__40202_40245__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40251,prov);

var G__40252 = cljs.core.next.call(null,seq__40202_40245__$1);
var G__40253 = null;
var G__40254 = (0);
var G__40255 = (0);
seq__40202_40235 = G__40252;
chunk__40203_40236 = G__40253;
count__40204_40237 = G__40254;
i__40205_40238 = G__40255;
continue;
}
} else {
}
}
break;
}

var G__40256 = cljs.core.next.call(null,seq__40194__$1);
var G__40257 = null;
var G__40258 = (0);
var G__40259 = (0);
seq__40194 = G__40256;
chunk__40195 = G__40257;
count__40196 = G__40258;
i__40197 = G__40259;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40264_40268 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40265_40269 = null;
var count__40266_40270 = (0);
var i__40267_40271 = (0);
while(true){
if((i__40267_40271 < count__40266_40270)){
var ns_40272 = cljs.core._nth.call(null,chunk__40265_40269,i__40267_40271);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40272);

var G__40273 = seq__40264_40268;
var G__40274 = chunk__40265_40269;
var G__40275 = count__40266_40270;
var G__40276 = (i__40267_40271 + (1));
seq__40264_40268 = G__40273;
chunk__40265_40269 = G__40274;
count__40266_40270 = G__40275;
i__40267_40271 = G__40276;
continue;
} else {
var temp__4657__auto___40277 = cljs.core.seq.call(null,seq__40264_40268);
if(temp__4657__auto___40277){
var seq__40264_40278__$1 = temp__4657__auto___40277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40264_40278__$1)){
var c__22545__auto___40279 = cljs.core.chunk_first.call(null,seq__40264_40278__$1);
var G__40280 = cljs.core.chunk_rest.call(null,seq__40264_40278__$1);
var G__40281 = c__22545__auto___40279;
var G__40282 = cljs.core.count.call(null,c__22545__auto___40279);
var G__40283 = (0);
seq__40264_40268 = G__40280;
chunk__40265_40269 = G__40281;
count__40266_40270 = G__40282;
i__40267_40271 = G__40283;
continue;
} else {
var ns_40284 = cljs.core.first.call(null,seq__40264_40278__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40284);

var G__40285 = cljs.core.next.call(null,seq__40264_40278__$1);
var G__40286 = null;
var G__40287 = (0);
var G__40288 = (0);
seq__40264_40268 = G__40285;
chunk__40265_40269 = G__40286;
count__40266_40270 = G__40287;
i__40267_40271 = G__40288;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21734__auto__ = goog.require__;
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40289__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40290__i = 0, G__40290__a = new Array(arguments.length -  0);
while (G__40290__i < G__40290__a.length) {G__40290__a[G__40290__i] = arguments[G__40290__i + 0]; ++G__40290__i;}
  args = new cljs.core.IndexedSeq(G__40290__a,0);
} 
return G__40289__delegate.call(this,args);};
G__40289.cljs$lang$maxFixedArity = 0;
G__40289.cljs$lang$applyTo = (function (arglist__40291){
var args = cljs.core.seq(arglist__40291);
return G__40289__delegate(args);
});
G__40289.cljs$core$IFn$_invoke$arity$variadic = G__40289__delegate;
return G__40289;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40293 = cljs.core._EQ_;
var expr__40294 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40293.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40294))){
var path_parts = ((function (pred__40293,expr__40294){
return (function (p1__40292_SHARP_){
return clojure.string.split.call(null,p1__40292_SHARP_,/[\/\\]/);
});})(pred__40293,expr__40294))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40293,expr__40294){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40296){if((e40296 instanceof Error)){
var e = e40296;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40296;

}
}})());
});
;})(path_parts,sep,root,pred__40293,expr__40294))
} else {
if(cljs.core.truth_(pred__40293.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40294))){
return ((function (pred__40293,expr__40294){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__40293,expr__40294){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40293,expr__40294))
);

return deferred.addErrback(((function (deferred,pred__40293,expr__40294){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40293,expr__40294))
);
});
;})(pred__40293,expr__40294))
} else {
return ((function (pred__40293,expr__40294){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40293,expr__40294))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40297,callback){
var map__40300 = p__40297;
var map__40300__$1 = ((((!((map__40300 == null)))?((((map__40300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40300):map__40300);
var file_msg = map__40300__$1;
var request_url = cljs.core.get.call(null,map__40300__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40300,map__40300__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40300,map__40300__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto__){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto__){
return (function (state_40324){
var state_val_40325 = (state_40324[(1)]);
if((state_val_40325 === (7))){
var inst_40320 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
var statearr_40326_40346 = state_40324__$1;
(statearr_40326_40346[(2)] = inst_40320);

(statearr_40326_40346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (1))){
var state_40324__$1 = state_40324;
var statearr_40327_40347 = state_40324__$1;
(statearr_40327_40347[(2)] = null);

(statearr_40327_40347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (4))){
var inst_40304 = (state_40324[(7)]);
var inst_40304__$1 = (state_40324[(2)]);
var state_40324__$1 = (function (){var statearr_40328 = state_40324;
(statearr_40328[(7)] = inst_40304__$1);

return statearr_40328;
})();
if(cljs.core.truth_(inst_40304__$1)){
var statearr_40329_40348 = state_40324__$1;
(statearr_40329_40348[(1)] = (5));

} else {
var statearr_40330_40349 = state_40324__$1;
(statearr_40330_40349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (6))){
var state_40324__$1 = state_40324;
var statearr_40331_40350 = state_40324__$1;
(statearr_40331_40350[(2)] = null);

(statearr_40331_40350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (3))){
var inst_40322 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40324__$1,inst_40322);
} else {
if((state_val_40325 === (2))){
var state_40324__$1 = state_40324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40324__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40325 === (11))){
var inst_40316 = (state_40324[(2)]);
var state_40324__$1 = (function (){var statearr_40332 = state_40324;
(statearr_40332[(8)] = inst_40316);

return statearr_40332;
})();
var statearr_40333_40351 = state_40324__$1;
(statearr_40333_40351[(2)] = null);

(statearr_40333_40351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (9))){
var inst_40310 = (state_40324[(9)]);
var inst_40308 = (state_40324[(10)]);
var inst_40312 = inst_40310.call(null,inst_40308);
var state_40324__$1 = state_40324;
var statearr_40334_40352 = state_40324__$1;
(statearr_40334_40352[(2)] = inst_40312);

(statearr_40334_40352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (5))){
var inst_40304 = (state_40324[(7)]);
var inst_40306 = figwheel.client.file_reloading.blocking_load.call(null,inst_40304);
var state_40324__$1 = state_40324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40324__$1,(8),inst_40306);
} else {
if((state_val_40325 === (10))){
var inst_40308 = (state_40324[(10)]);
var inst_40314 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40308);
var state_40324__$1 = state_40324;
var statearr_40335_40353 = state_40324__$1;
(statearr_40335_40353[(2)] = inst_40314);

(statearr_40335_40353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (8))){
var inst_40310 = (state_40324[(9)]);
var inst_40304 = (state_40324[(7)]);
var inst_40308 = (state_40324[(2)]);
var inst_40309 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40310__$1 = cljs.core.get.call(null,inst_40309,inst_40304);
var state_40324__$1 = (function (){var statearr_40336 = state_40324;
(statearr_40336[(9)] = inst_40310__$1);

(statearr_40336[(10)] = inst_40308);

return statearr_40336;
})();
if(cljs.core.truth_(inst_40310__$1)){
var statearr_40337_40354 = state_40324__$1;
(statearr_40337_40354[(1)] = (9));

} else {
var statearr_40338_40355 = state_40324__$1;
(statearr_40338_40355[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26497__auto__))
;
return ((function (switch__26385__auto__,c__26497__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26386__auto__ = null;
var figwheel$client$file_reloading$state_machine__26386__auto____0 = (function (){
var statearr_40342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40342[(0)] = figwheel$client$file_reloading$state_machine__26386__auto__);

(statearr_40342[(1)] = (1));

return statearr_40342;
});
var figwheel$client$file_reloading$state_machine__26386__auto____1 = (function (state_40324){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_40324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e40343){if((e40343 instanceof Object)){
var ex__26389__auto__ = e40343;
var statearr_40344_40356 = state_40324;
(statearr_40344_40356[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40357 = state_40324;
state_40324 = G__40357;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26386__auto__ = function(state_40324){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26386__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26386__auto____1.call(this,state_40324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26386__auto____0;
figwheel$client$file_reloading$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26386__auto____1;
return figwheel$client$file_reloading$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto__))
})();
var state__26499__auto__ = (function (){var statearr_40345 = f__26498__auto__.call(null);
(statearr_40345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto__);

return statearr_40345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto__))
);

return c__26497__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40358,callback){
var map__40361 = p__40358;
var map__40361__$1 = ((((!((map__40361 == null)))?((((map__40361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40361):map__40361);
var file_msg = map__40361__$1;
var namespace = cljs.core.get.call(null,map__40361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40361,map__40361__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40361,map__40361__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40363){
var map__40366 = p__40363;
var map__40366__$1 = ((((!((map__40366 == null)))?((((map__40366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40366):map__40366);
var file_msg = map__40366__$1;
var namespace = cljs.core.get.call(null,map__40366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21722__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21722__auto__){
var or__21734__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
var or__21734__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21734__auto____$1)){
return or__21734__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21722__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40368,callback){
var map__40371 = p__40368;
var map__40371__$1 = ((((!((map__40371 == null)))?((((map__40371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40371):map__40371);
var file_msg = map__40371__$1;
var request_url = cljs.core.get.call(null,map__40371__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40371__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26497__auto___40475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___40475,out){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___40475,out){
return (function (state_40457){
var state_val_40458 = (state_40457[(1)]);
if((state_val_40458 === (1))){
var inst_40431 = cljs.core.seq.call(null,files);
var inst_40432 = cljs.core.first.call(null,inst_40431);
var inst_40433 = cljs.core.next.call(null,inst_40431);
var inst_40434 = files;
var state_40457__$1 = (function (){var statearr_40459 = state_40457;
(statearr_40459[(7)] = inst_40433);

(statearr_40459[(8)] = inst_40434);

(statearr_40459[(9)] = inst_40432);

return statearr_40459;
})();
var statearr_40460_40476 = state_40457__$1;
(statearr_40460_40476[(2)] = null);

(statearr_40460_40476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (2))){
var inst_40434 = (state_40457[(8)]);
var inst_40440 = (state_40457[(10)]);
var inst_40439 = cljs.core.seq.call(null,inst_40434);
var inst_40440__$1 = cljs.core.first.call(null,inst_40439);
var inst_40441 = cljs.core.next.call(null,inst_40439);
var inst_40442 = (inst_40440__$1 == null);
var inst_40443 = cljs.core.not.call(null,inst_40442);
var state_40457__$1 = (function (){var statearr_40461 = state_40457;
(statearr_40461[(11)] = inst_40441);

(statearr_40461[(10)] = inst_40440__$1);

return statearr_40461;
})();
if(inst_40443){
var statearr_40462_40477 = state_40457__$1;
(statearr_40462_40477[(1)] = (4));

} else {
var statearr_40463_40478 = state_40457__$1;
(statearr_40463_40478[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (3))){
var inst_40455 = (state_40457[(2)]);
var state_40457__$1 = state_40457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40457__$1,inst_40455);
} else {
if((state_val_40458 === (4))){
var inst_40440 = (state_40457[(10)]);
var inst_40445 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40440);
var state_40457__$1 = state_40457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40457__$1,(7),inst_40445);
} else {
if((state_val_40458 === (5))){
var inst_40451 = cljs.core.async.close_BANG_.call(null,out);
var state_40457__$1 = state_40457;
var statearr_40464_40479 = state_40457__$1;
(statearr_40464_40479[(2)] = inst_40451);

(statearr_40464_40479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (6))){
var inst_40453 = (state_40457[(2)]);
var state_40457__$1 = state_40457;
var statearr_40465_40480 = state_40457__$1;
(statearr_40465_40480[(2)] = inst_40453);

(statearr_40465_40480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (7))){
var inst_40441 = (state_40457[(11)]);
var inst_40447 = (state_40457[(2)]);
var inst_40448 = cljs.core.async.put_BANG_.call(null,out,inst_40447);
var inst_40434 = inst_40441;
var state_40457__$1 = (function (){var statearr_40466 = state_40457;
(statearr_40466[(8)] = inst_40434);

(statearr_40466[(12)] = inst_40448);

return statearr_40466;
})();
var statearr_40467_40481 = state_40457__$1;
(statearr_40467_40481[(2)] = null);

(statearr_40467_40481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26497__auto___40475,out))
;
return ((function (switch__26385__auto__,c__26497__auto___40475,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto____0 = (function (){
var statearr_40471 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40471[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto__);

(statearr_40471[(1)] = (1));

return statearr_40471;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto____1 = (function (state_40457){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_40457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e40472){if((e40472 instanceof Object)){
var ex__26389__auto__ = e40472;
var statearr_40473_40482 = state_40457;
(statearr_40473_40482[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40483 = state_40457;
state_40457 = G__40483;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto__ = function(state_40457){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto____1.call(this,state_40457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___40475,out))
})();
var state__26499__auto__ = (function (){var statearr_40474 = f__26498__auto__.call(null);
(statearr_40474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___40475);

return statearr_40474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___40475,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40484,opts){
var map__40488 = p__40484;
var map__40488__$1 = ((((!((map__40488 == null)))?((((map__40488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40488):map__40488);
var eval_body__$1 = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21722__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21722__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21722__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40490){var e = e40490;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40491_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40491_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40500){
var vec__40501 = p__40500;
var k = cljs.core.nth.call(null,vec__40501,(0),null);
var v = cljs.core.nth.call(null,vec__40501,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40504){
var vec__40505 = p__40504;
var k = cljs.core.nth.call(null,vec__40505,(0),null);
var v = cljs.core.nth.call(null,vec__40505,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40511,p__40512){
var map__40759 = p__40511;
var map__40759__$1 = ((((!((map__40759 == null)))?((((map__40759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40759):map__40759);
var opts = map__40759__$1;
var before_jsload = cljs.core.get.call(null,map__40759__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40759__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40759__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40760 = p__40512;
var map__40760__$1 = ((((!((map__40760 == null)))?((((map__40760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40760):map__40760);
var msg = map__40760__$1;
var files = cljs.core.get.call(null,map__40760__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40760__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40760__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40913){
var state_val_40914 = (state_40913[(1)]);
if((state_val_40914 === (7))){
var inst_40775 = (state_40913[(7)]);
var inst_40774 = (state_40913[(8)]);
var inst_40777 = (state_40913[(9)]);
var inst_40776 = (state_40913[(10)]);
var inst_40782 = cljs.core._nth.call(null,inst_40775,inst_40777);
var inst_40783 = figwheel.client.file_reloading.eval_body.call(null,inst_40782,opts);
var inst_40784 = (inst_40777 + (1));
var tmp40915 = inst_40775;
var tmp40916 = inst_40774;
var tmp40917 = inst_40776;
var inst_40774__$1 = tmp40916;
var inst_40775__$1 = tmp40915;
var inst_40776__$1 = tmp40917;
var inst_40777__$1 = inst_40784;
var state_40913__$1 = (function (){var statearr_40918 = state_40913;
(statearr_40918[(7)] = inst_40775__$1);

(statearr_40918[(8)] = inst_40774__$1);

(statearr_40918[(11)] = inst_40783);

(statearr_40918[(9)] = inst_40777__$1);

(statearr_40918[(10)] = inst_40776__$1);

return statearr_40918;
})();
var statearr_40919_41005 = state_40913__$1;
(statearr_40919_41005[(2)] = null);

(statearr_40919_41005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (20))){
var inst_40817 = (state_40913[(12)]);
var inst_40825 = figwheel.client.file_reloading.sort_files.call(null,inst_40817);
var state_40913__$1 = state_40913;
var statearr_40920_41006 = state_40913__$1;
(statearr_40920_41006[(2)] = inst_40825);

(statearr_40920_41006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (27))){
var state_40913__$1 = state_40913;
var statearr_40921_41007 = state_40913__$1;
(statearr_40921_41007[(2)] = null);

(statearr_40921_41007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (1))){
var inst_40766 = (state_40913[(13)]);
var inst_40763 = before_jsload.call(null,files);
var inst_40764 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40765 = (function (){return ((function (inst_40766,inst_40763,inst_40764,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40508_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40508_SHARP_);
});
;})(inst_40766,inst_40763,inst_40764,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40766__$1 = cljs.core.filter.call(null,inst_40765,files);
var inst_40767 = cljs.core.not_empty.call(null,inst_40766__$1);
var state_40913__$1 = (function (){var statearr_40922 = state_40913;
(statearr_40922[(13)] = inst_40766__$1);

(statearr_40922[(14)] = inst_40763);

(statearr_40922[(15)] = inst_40764);

return statearr_40922;
})();
if(cljs.core.truth_(inst_40767)){
var statearr_40923_41008 = state_40913__$1;
(statearr_40923_41008[(1)] = (2));

} else {
var statearr_40924_41009 = state_40913__$1;
(statearr_40924_41009[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (24))){
var state_40913__$1 = state_40913;
var statearr_40925_41010 = state_40913__$1;
(statearr_40925_41010[(2)] = null);

(statearr_40925_41010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (39))){
var inst_40867 = (state_40913[(16)]);
var state_40913__$1 = state_40913;
var statearr_40926_41011 = state_40913__$1;
(statearr_40926_41011[(2)] = inst_40867);

(statearr_40926_41011[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (46))){
var inst_40908 = (state_40913[(2)]);
var state_40913__$1 = state_40913;
var statearr_40927_41012 = state_40913__$1;
(statearr_40927_41012[(2)] = inst_40908);

(statearr_40927_41012[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (4))){
var inst_40811 = (state_40913[(2)]);
var inst_40812 = cljs.core.List.EMPTY;
var inst_40813 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40812);
var inst_40814 = (function (){return ((function (inst_40811,inst_40812,inst_40813,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40509_SHARP_){
var and__21722__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40509_SHARP_);
if(cljs.core.truth_(and__21722__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40509_SHARP_));
} else {
return and__21722__auto__;
}
});
;})(inst_40811,inst_40812,inst_40813,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40815 = cljs.core.filter.call(null,inst_40814,files);
var inst_40816 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40817 = cljs.core.concat.call(null,inst_40815,inst_40816);
var state_40913__$1 = (function (){var statearr_40928 = state_40913;
(statearr_40928[(17)] = inst_40811);

(statearr_40928[(12)] = inst_40817);

(statearr_40928[(18)] = inst_40813);

return statearr_40928;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40929_41013 = state_40913__$1;
(statearr_40929_41013[(1)] = (16));

} else {
var statearr_40930_41014 = state_40913__$1;
(statearr_40930_41014[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (15))){
var inst_40801 = (state_40913[(2)]);
var state_40913__$1 = state_40913;
var statearr_40931_41015 = state_40913__$1;
(statearr_40931_41015[(2)] = inst_40801);

(statearr_40931_41015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (21))){
var inst_40827 = (state_40913[(19)]);
var inst_40827__$1 = (state_40913[(2)]);
var inst_40828 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40827__$1);
var state_40913__$1 = (function (){var statearr_40932 = state_40913;
(statearr_40932[(19)] = inst_40827__$1);

return statearr_40932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40913__$1,(22),inst_40828);
} else {
if((state_val_40914 === (31))){
var inst_40911 = (state_40913[(2)]);
var state_40913__$1 = state_40913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40913__$1,inst_40911);
} else {
if((state_val_40914 === (32))){
var inst_40867 = (state_40913[(16)]);
var inst_40872 = inst_40867.cljs$lang$protocol_mask$partition0$;
var inst_40873 = (inst_40872 & (64));
var inst_40874 = inst_40867.cljs$core$ISeq$;
var inst_40875 = (inst_40873) || (inst_40874);
var state_40913__$1 = state_40913;
if(cljs.core.truth_(inst_40875)){
var statearr_40933_41016 = state_40913__$1;
(statearr_40933_41016[(1)] = (35));

} else {
var statearr_40934_41017 = state_40913__$1;
(statearr_40934_41017[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (40))){
var inst_40888 = (state_40913[(20)]);
var inst_40887 = (state_40913[(2)]);
var inst_40888__$1 = cljs.core.get.call(null,inst_40887,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40889 = cljs.core.get.call(null,inst_40887,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40890 = cljs.core.not_empty.call(null,inst_40888__$1);
var state_40913__$1 = (function (){var statearr_40935 = state_40913;
(statearr_40935[(20)] = inst_40888__$1);

(statearr_40935[(21)] = inst_40889);

return statearr_40935;
})();
if(cljs.core.truth_(inst_40890)){
var statearr_40936_41018 = state_40913__$1;
(statearr_40936_41018[(1)] = (41));

} else {
var statearr_40937_41019 = state_40913__$1;
(statearr_40937_41019[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (33))){
var state_40913__$1 = state_40913;
var statearr_40938_41020 = state_40913__$1;
(statearr_40938_41020[(2)] = false);

(statearr_40938_41020[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (13))){
var inst_40787 = (state_40913[(22)]);
var inst_40791 = cljs.core.chunk_first.call(null,inst_40787);
var inst_40792 = cljs.core.chunk_rest.call(null,inst_40787);
var inst_40793 = cljs.core.count.call(null,inst_40791);
var inst_40774 = inst_40792;
var inst_40775 = inst_40791;
var inst_40776 = inst_40793;
var inst_40777 = (0);
var state_40913__$1 = (function (){var statearr_40939 = state_40913;
(statearr_40939[(7)] = inst_40775);

(statearr_40939[(8)] = inst_40774);

(statearr_40939[(9)] = inst_40777);

(statearr_40939[(10)] = inst_40776);

return statearr_40939;
})();
var statearr_40940_41021 = state_40913__$1;
(statearr_40940_41021[(2)] = null);

(statearr_40940_41021[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (22))){
var inst_40835 = (state_40913[(23)]);
var inst_40831 = (state_40913[(24)]);
var inst_40830 = (state_40913[(25)]);
var inst_40827 = (state_40913[(19)]);
var inst_40830__$1 = (state_40913[(2)]);
var inst_40831__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40830__$1);
var inst_40832 = (function (){var all_files = inst_40827;
var res_SINGLEQUOTE_ = inst_40830__$1;
var res = inst_40831__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40835,inst_40831,inst_40830,inst_40827,inst_40830__$1,inst_40831__$1,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40510_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40510_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40835,inst_40831,inst_40830,inst_40827,inst_40830__$1,inst_40831__$1,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40833 = cljs.core.filter.call(null,inst_40832,inst_40830__$1);
var inst_40834 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40835__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40834);
var inst_40836 = cljs.core.not_empty.call(null,inst_40835__$1);
var state_40913__$1 = (function (){var statearr_40941 = state_40913;
(statearr_40941[(26)] = inst_40833);

(statearr_40941[(23)] = inst_40835__$1);

(statearr_40941[(24)] = inst_40831__$1);

(statearr_40941[(25)] = inst_40830__$1);

return statearr_40941;
})();
if(cljs.core.truth_(inst_40836)){
var statearr_40942_41022 = state_40913__$1;
(statearr_40942_41022[(1)] = (23));

} else {
var statearr_40943_41023 = state_40913__$1;
(statearr_40943_41023[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (36))){
var state_40913__$1 = state_40913;
var statearr_40944_41024 = state_40913__$1;
(statearr_40944_41024[(2)] = false);

(statearr_40944_41024[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (41))){
var inst_40888 = (state_40913[(20)]);
var inst_40892 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40893 = cljs.core.map.call(null,inst_40892,inst_40888);
var inst_40894 = cljs.core.pr_str.call(null,inst_40893);
var inst_40895 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40894)].join('');
var inst_40896 = figwheel.client.utils.log.call(null,inst_40895);
var state_40913__$1 = state_40913;
var statearr_40945_41025 = state_40913__$1;
(statearr_40945_41025[(2)] = inst_40896);

(statearr_40945_41025[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (43))){
var inst_40889 = (state_40913[(21)]);
var inst_40899 = (state_40913[(2)]);
var inst_40900 = cljs.core.not_empty.call(null,inst_40889);
var state_40913__$1 = (function (){var statearr_40946 = state_40913;
(statearr_40946[(27)] = inst_40899);

return statearr_40946;
})();
if(cljs.core.truth_(inst_40900)){
var statearr_40947_41026 = state_40913__$1;
(statearr_40947_41026[(1)] = (44));

} else {
var statearr_40948_41027 = state_40913__$1;
(statearr_40948_41027[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (29))){
var inst_40833 = (state_40913[(26)]);
var inst_40835 = (state_40913[(23)]);
var inst_40867 = (state_40913[(16)]);
var inst_40831 = (state_40913[(24)]);
var inst_40830 = (state_40913[(25)]);
var inst_40827 = (state_40913[(19)]);
var inst_40863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40866 = (function (){var all_files = inst_40827;
var res_SINGLEQUOTE_ = inst_40830;
var res = inst_40831;
var files_not_loaded = inst_40833;
var dependencies_that_loaded = inst_40835;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40833,inst_40835,inst_40867,inst_40831,inst_40830,inst_40827,inst_40863,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40865){
var map__40949 = p__40865;
var map__40949__$1 = ((((!((map__40949 == null)))?((((map__40949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40949):map__40949);
var namespace = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40833,inst_40835,inst_40867,inst_40831,inst_40830,inst_40827,inst_40863,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40867__$1 = cljs.core.group_by.call(null,inst_40866,inst_40833);
var inst_40869 = (inst_40867__$1 == null);
var inst_40870 = cljs.core.not.call(null,inst_40869);
var state_40913__$1 = (function (){var statearr_40951 = state_40913;
(statearr_40951[(16)] = inst_40867__$1);

(statearr_40951[(28)] = inst_40863);

return statearr_40951;
})();
if(inst_40870){
var statearr_40952_41028 = state_40913__$1;
(statearr_40952_41028[(1)] = (32));

} else {
var statearr_40953_41029 = state_40913__$1;
(statearr_40953_41029[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (44))){
var inst_40889 = (state_40913[(21)]);
var inst_40902 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40889);
var inst_40903 = cljs.core.pr_str.call(null,inst_40902);
var inst_40904 = [cljs.core.str("not required: "),cljs.core.str(inst_40903)].join('');
var inst_40905 = figwheel.client.utils.log.call(null,inst_40904);
var state_40913__$1 = state_40913;
var statearr_40954_41030 = state_40913__$1;
(statearr_40954_41030[(2)] = inst_40905);

(statearr_40954_41030[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (6))){
var inst_40808 = (state_40913[(2)]);
var state_40913__$1 = state_40913;
var statearr_40955_41031 = state_40913__$1;
(statearr_40955_41031[(2)] = inst_40808);

(statearr_40955_41031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (28))){
var inst_40833 = (state_40913[(26)]);
var inst_40860 = (state_40913[(2)]);
var inst_40861 = cljs.core.not_empty.call(null,inst_40833);
var state_40913__$1 = (function (){var statearr_40956 = state_40913;
(statearr_40956[(29)] = inst_40860);

return statearr_40956;
})();
if(cljs.core.truth_(inst_40861)){
var statearr_40957_41032 = state_40913__$1;
(statearr_40957_41032[(1)] = (29));

} else {
var statearr_40958_41033 = state_40913__$1;
(statearr_40958_41033[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (25))){
var inst_40831 = (state_40913[(24)]);
var inst_40847 = (state_40913[(2)]);
var inst_40848 = cljs.core.not_empty.call(null,inst_40831);
var state_40913__$1 = (function (){var statearr_40959 = state_40913;
(statearr_40959[(30)] = inst_40847);

return statearr_40959;
})();
if(cljs.core.truth_(inst_40848)){
var statearr_40960_41034 = state_40913__$1;
(statearr_40960_41034[(1)] = (26));

} else {
var statearr_40961_41035 = state_40913__$1;
(statearr_40961_41035[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (34))){
var inst_40882 = (state_40913[(2)]);
var state_40913__$1 = state_40913;
if(cljs.core.truth_(inst_40882)){
var statearr_40962_41036 = state_40913__$1;
(statearr_40962_41036[(1)] = (38));

} else {
var statearr_40963_41037 = state_40913__$1;
(statearr_40963_41037[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (17))){
var state_40913__$1 = state_40913;
var statearr_40964_41038 = state_40913__$1;
(statearr_40964_41038[(2)] = recompile_dependents);

(statearr_40964_41038[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (3))){
var state_40913__$1 = state_40913;
var statearr_40965_41039 = state_40913__$1;
(statearr_40965_41039[(2)] = null);

(statearr_40965_41039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (12))){
var inst_40804 = (state_40913[(2)]);
var state_40913__$1 = state_40913;
var statearr_40966_41040 = state_40913__$1;
(statearr_40966_41040[(2)] = inst_40804);

(statearr_40966_41040[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (2))){
var inst_40766 = (state_40913[(13)]);
var inst_40773 = cljs.core.seq.call(null,inst_40766);
var inst_40774 = inst_40773;
var inst_40775 = null;
var inst_40776 = (0);
var inst_40777 = (0);
var state_40913__$1 = (function (){var statearr_40967 = state_40913;
(statearr_40967[(7)] = inst_40775);

(statearr_40967[(8)] = inst_40774);

(statearr_40967[(9)] = inst_40777);

(statearr_40967[(10)] = inst_40776);

return statearr_40967;
})();
var statearr_40968_41041 = state_40913__$1;
(statearr_40968_41041[(2)] = null);

(statearr_40968_41041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (23))){
var inst_40833 = (state_40913[(26)]);
var inst_40835 = (state_40913[(23)]);
var inst_40831 = (state_40913[(24)]);
var inst_40830 = (state_40913[(25)]);
var inst_40827 = (state_40913[(19)]);
var inst_40838 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40840 = (function (){var all_files = inst_40827;
var res_SINGLEQUOTE_ = inst_40830;
var res = inst_40831;
var files_not_loaded = inst_40833;
var dependencies_that_loaded = inst_40835;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40833,inst_40835,inst_40831,inst_40830,inst_40827,inst_40838,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40839){
var map__40969 = p__40839;
var map__40969__$1 = ((((!((map__40969 == null)))?((((map__40969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40969):map__40969);
var request_url = cljs.core.get.call(null,map__40969__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40833,inst_40835,inst_40831,inst_40830,inst_40827,inst_40838,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40841 = cljs.core.reverse.call(null,inst_40835);
var inst_40842 = cljs.core.map.call(null,inst_40840,inst_40841);
var inst_40843 = cljs.core.pr_str.call(null,inst_40842);
var inst_40844 = figwheel.client.utils.log.call(null,inst_40843);
var state_40913__$1 = (function (){var statearr_40971 = state_40913;
(statearr_40971[(31)] = inst_40838);

return statearr_40971;
})();
var statearr_40972_41042 = state_40913__$1;
(statearr_40972_41042[(2)] = inst_40844);

(statearr_40972_41042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (35))){
var state_40913__$1 = state_40913;
var statearr_40973_41043 = state_40913__$1;
(statearr_40973_41043[(2)] = true);

(statearr_40973_41043[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (19))){
var inst_40817 = (state_40913[(12)]);
var inst_40823 = figwheel.client.file_reloading.expand_files.call(null,inst_40817);
var state_40913__$1 = state_40913;
var statearr_40974_41044 = state_40913__$1;
(statearr_40974_41044[(2)] = inst_40823);

(statearr_40974_41044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (11))){
var state_40913__$1 = state_40913;
var statearr_40975_41045 = state_40913__$1;
(statearr_40975_41045[(2)] = null);

(statearr_40975_41045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (9))){
var inst_40806 = (state_40913[(2)]);
var state_40913__$1 = state_40913;
var statearr_40976_41046 = state_40913__$1;
(statearr_40976_41046[(2)] = inst_40806);

(statearr_40976_41046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (5))){
var inst_40777 = (state_40913[(9)]);
var inst_40776 = (state_40913[(10)]);
var inst_40779 = (inst_40777 < inst_40776);
var inst_40780 = inst_40779;
var state_40913__$1 = state_40913;
if(cljs.core.truth_(inst_40780)){
var statearr_40977_41047 = state_40913__$1;
(statearr_40977_41047[(1)] = (7));

} else {
var statearr_40978_41048 = state_40913__$1;
(statearr_40978_41048[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (14))){
var inst_40787 = (state_40913[(22)]);
var inst_40796 = cljs.core.first.call(null,inst_40787);
var inst_40797 = figwheel.client.file_reloading.eval_body.call(null,inst_40796,opts);
var inst_40798 = cljs.core.next.call(null,inst_40787);
var inst_40774 = inst_40798;
var inst_40775 = null;
var inst_40776 = (0);
var inst_40777 = (0);
var state_40913__$1 = (function (){var statearr_40979 = state_40913;
(statearr_40979[(7)] = inst_40775);

(statearr_40979[(8)] = inst_40774);

(statearr_40979[(32)] = inst_40797);

(statearr_40979[(9)] = inst_40777);

(statearr_40979[(10)] = inst_40776);

return statearr_40979;
})();
var statearr_40980_41049 = state_40913__$1;
(statearr_40980_41049[(2)] = null);

(statearr_40980_41049[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (45))){
var state_40913__$1 = state_40913;
var statearr_40981_41050 = state_40913__$1;
(statearr_40981_41050[(2)] = null);

(statearr_40981_41050[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (26))){
var inst_40833 = (state_40913[(26)]);
var inst_40835 = (state_40913[(23)]);
var inst_40831 = (state_40913[(24)]);
var inst_40830 = (state_40913[(25)]);
var inst_40827 = (state_40913[(19)]);
var inst_40850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40852 = (function (){var all_files = inst_40827;
var res_SINGLEQUOTE_ = inst_40830;
var res = inst_40831;
var files_not_loaded = inst_40833;
var dependencies_that_loaded = inst_40835;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40833,inst_40835,inst_40831,inst_40830,inst_40827,inst_40850,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40851){
var map__40982 = p__40851;
var map__40982__$1 = ((((!((map__40982 == null)))?((((map__40982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40982):map__40982);
var namespace = cljs.core.get.call(null,map__40982__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40982__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40833,inst_40835,inst_40831,inst_40830,inst_40827,inst_40850,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40853 = cljs.core.map.call(null,inst_40852,inst_40831);
var inst_40854 = cljs.core.pr_str.call(null,inst_40853);
var inst_40855 = figwheel.client.utils.log.call(null,inst_40854);
var inst_40856 = (function (){var all_files = inst_40827;
var res_SINGLEQUOTE_ = inst_40830;
var res = inst_40831;
var files_not_loaded = inst_40833;
var dependencies_that_loaded = inst_40835;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40833,inst_40835,inst_40831,inst_40830,inst_40827,inst_40850,inst_40852,inst_40853,inst_40854,inst_40855,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40833,inst_40835,inst_40831,inst_40830,inst_40827,inst_40850,inst_40852,inst_40853,inst_40854,inst_40855,state_val_40914,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40857 = setTimeout(inst_40856,(10));
var state_40913__$1 = (function (){var statearr_40984 = state_40913;
(statearr_40984[(33)] = inst_40855);

(statearr_40984[(34)] = inst_40850);

return statearr_40984;
})();
var statearr_40985_41051 = state_40913__$1;
(statearr_40985_41051[(2)] = inst_40857);

(statearr_40985_41051[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (16))){
var state_40913__$1 = state_40913;
var statearr_40986_41052 = state_40913__$1;
(statearr_40986_41052[(2)] = reload_dependents);

(statearr_40986_41052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (38))){
var inst_40867 = (state_40913[(16)]);
var inst_40884 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40867);
var state_40913__$1 = state_40913;
var statearr_40987_41053 = state_40913__$1;
(statearr_40987_41053[(2)] = inst_40884);

(statearr_40987_41053[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (30))){
var state_40913__$1 = state_40913;
var statearr_40988_41054 = state_40913__$1;
(statearr_40988_41054[(2)] = null);

(statearr_40988_41054[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (10))){
var inst_40787 = (state_40913[(22)]);
var inst_40789 = cljs.core.chunked_seq_QMARK_.call(null,inst_40787);
var state_40913__$1 = state_40913;
if(inst_40789){
var statearr_40989_41055 = state_40913__$1;
(statearr_40989_41055[(1)] = (13));

} else {
var statearr_40990_41056 = state_40913__$1;
(statearr_40990_41056[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (18))){
var inst_40821 = (state_40913[(2)]);
var state_40913__$1 = state_40913;
if(cljs.core.truth_(inst_40821)){
var statearr_40991_41057 = state_40913__$1;
(statearr_40991_41057[(1)] = (19));

} else {
var statearr_40992_41058 = state_40913__$1;
(statearr_40992_41058[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (42))){
var state_40913__$1 = state_40913;
var statearr_40993_41059 = state_40913__$1;
(statearr_40993_41059[(2)] = null);

(statearr_40993_41059[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (37))){
var inst_40879 = (state_40913[(2)]);
var state_40913__$1 = state_40913;
var statearr_40994_41060 = state_40913__$1;
(statearr_40994_41060[(2)] = inst_40879);

(statearr_40994_41060[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40914 === (8))){
var inst_40774 = (state_40913[(8)]);
var inst_40787 = (state_40913[(22)]);
var inst_40787__$1 = cljs.core.seq.call(null,inst_40774);
var state_40913__$1 = (function (){var statearr_40995 = state_40913;
(statearr_40995[(22)] = inst_40787__$1);

return statearr_40995;
})();
if(inst_40787__$1){
var statearr_40996_41061 = state_40913__$1;
(statearr_40996_41061[(1)] = (10));

} else {
var statearr_40997_41062 = state_40913__$1;
(statearr_40997_41062[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26385__auto__,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto____0 = (function (){
var statearr_41001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41001[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto__);

(statearr_41001[(1)] = (1));

return statearr_41001;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto____1 = (function (state_40913){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_40913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e41002){if((e41002 instanceof Object)){
var ex__26389__auto__ = e41002;
var statearr_41003_41063 = state_40913;
(statearr_41003_41063[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41064 = state_40913;
state_40913 = G__41064;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto__ = function(state_40913){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto____1.call(this,state_40913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26499__auto__ = (function (){var statearr_41004 = f__26498__auto__.call(null);
(statearr_41004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto__);

return statearr_41004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto__,map__40759,map__40759__$1,opts,before_jsload,on_jsload,reload_dependents,map__40760,map__40760__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26497__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41067,link){
var map__41070 = p__41067;
var map__41070__$1 = ((((!((map__41070 == null)))?((((map__41070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41070):map__41070);
var file = cljs.core.get.call(null,map__41070__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41070,map__41070__$1,file){
return (function (p1__41065_SHARP_,p2__41066_SHARP_){
if(cljs.core._EQ_.call(null,p1__41065_SHARP_,p2__41066_SHARP_)){
return p1__41065_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41070,map__41070__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41076){
var map__41077 = p__41076;
var map__41077__$1 = ((((!((map__41077 == null)))?((((map__41077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41077):map__41077);
var match_length = cljs.core.get.call(null,map__41077__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41077__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41072_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41072_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args41079 = [];
var len__22809__auto___41082 = arguments.length;
var i__22810__auto___41083 = (0);
while(true){
if((i__22810__auto___41083 < len__22809__auto___41082)){
args41079.push((arguments[i__22810__auto___41083]));

var G__41084 = (i__22810__auto___41083 + (1));
i__22810__auto___41083 = G__41084;
continue;
} else {
}
break;
}

var G__41081 = args41079.length;
switch (G__41081) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41079.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41086_SHARP_,p2__41087_SHARP_){
return cljs.core.assoc.call(null,p1__41086_SHARP_,cljs.core.get.call(null,p2__41087_SHARP_,key),p2__41087_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41088){
var map__41091 = p__41088;
var map__41091__$1 = ((((!((map__41091 == null)))?((((map__41091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41091):map__41091);
var f_data = map__41091__$1;
var file = cljs.core.get.call(null,map__41091__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41093,files_msg){
var map__41100 = p__41093;
var map__41100__$1 = ((((!((map__41100 == null)))?((((map__41100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41100):map__41100);
var opts = map__41100__$1;
var on_cssload = cljs.core.get.call(null,map__41100__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41102_41106 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__41103_41107 = null;
var count__41104_41108 = (0);
var i__41105_41109 = (0);
while(true){
if((i__41105_41109 < count__41104_41108)){
var f_41110 = cljs.core._nth.call(null,chunk__41103_41107,i__41105_41109);
figwheel.client.file_reloading.reload_css_file.call(null,f_41110);

var G__41111 = seq__41102_41106;
var G__41112 = chunk__41103_41107;
var G__41113 = count__41104_41108;
var G__41114 = (i__41105_41109 + (1));
seq__41102_41106 = G__41111;
chunk__41103_41107 = G__41112;
count__41104_41108 = G__41113;
i__41105_41109 = G__41114;
continue;
} else {
var temp__4657__auto___41115 = cljs.core.seq.call(null,seq__41102_41106);
if(temp__4657__auto___41115){
var seq__41102_41116__$1 = temp__4657__auto___41115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41102_41116__$1)){
var c__22545__auto___41117 = cljs.core.chunk_first.call(null,seq__41102_41116__$1);
var G__41118 = cljs.core.chunk_rest.call(null,seq__41102_41116__$1);
var G__41119 = c__22545__auto___41117;
var G__41120 = cljs.core.count.call(null,c__22545__auto___41117);
var G__41121 = (0);
seq__41102_41106 = G__41118;
chunk__41103_41107 = G__41119;
count__41104_41108 = G__41120;
i__41105_41109 = G__41121;
continue;
} else {
var f_41122 = cljs.core.first.call(null,seq__41102_41116__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41122);

var G__41123 = cljs.core.next.call(null,seq__41102_41116__$1);
var G__41124 = null;
var G__41125 = (0);
var G__41126 = (0);
seq__41102_41106 = G__41123;
chunk__41103_41107 = G__41124;
count__41104_41108 = G__41125;
i__41105_41109 = G__41126;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41100,map__41100__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__41100,map__41100__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1469933701677