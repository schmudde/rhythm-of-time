// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42067){
var map__42092 = p__42067;
var map__42092__$1 = ((((!((map__42092 == null)))?((((map__42092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42092):map__42092);
var m = map__42092__$1;
var n = cljs.core.get.call(null,map__42092__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42094_42116 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42095_42117 = null;
var count__42096_42118 = (0);
var i__42097_42119 = (0);
while(true){
if((i__42097_42119 < count__42096_42118)){
var f_42120 = cljs.core._nth.call(null,chunk__42095_42117,i__42097_42119);
cljs.core.println.call(null,"  ",f_42120);

var G__42121 = seq__42094_42116;
var G__42122 = chunk__42095_42117;
var G__42123 = count__42096_42118;
var G__42124 = (i__42097_42119 + (1));
seq__42094_42116 = G__42121;
chunk__42095_42117 = G__42122;
count__42096_42118 = G__42123;
i__42097_42119 = G__42124;
continue;
} else {
var temp__4657__auto___42125 = cljs.core.seq.call(null,seq__42094_42116);
if(temp__4657__auto___42125){
var seq__42094_42126__$1 = temp__4657__auto___42125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42094_42126__$1)){
var c__22545__auto___42127 = cljs.core.chunk_first.call(null,seq__42094_42126__$1);
var G__42128 = cljs.core.chunk_rest.call(null,seq__42094_42126__$1);
var G__42129 = c__22545__auto___42127;
var G__42130 = cljs.core.count.call(null,c__22545__auto___42127);
var G__42131 = (0);
seq__42094_42116 = G__42128;
chunk__42095_42117 = G__42129;
count__42096_42118 = G__42130;
i__42097_42119 = G__42131;
continue;
} else {
var f_42132 = cljs.core.first.call(null,seq__42094_42126__$1);
cljs.core.println.call(null,"  ",f_42132);

var G__42133 = cljs.core.next.call(null,seq__42094_42126__$1);
var G__42134 = null;
var G__42135 = (0);
var G__42136 = (0);
seq__42094_42116 = G__42133;
chunk__42095_42117 = G__42134;
count__42096_42118 = G__42135;
i__42097_42119 = G__42136;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42137 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21734__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42137);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42137)))?cljs.core.second.call(null,arglists_42137):arglists_42137));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42098_42138 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42099_42139 = null;
var count__42100_42140 = (0);
var i__42101_42141 = (0);
while(true){
if((i__42101_42141 < count__42100_42140)){
var vec__42102_42142 = cljs.core._nth.call(null,chunk__42099_42139,i__42101_42141);
var name_42143 = cljs.core.nth.call(null,vec__42102_42142,(0),null);
var map__42105_42144 = cljs.core.nth.call(null,vec__42102_42142,(1),null);
var map__42105_42145__$1 = ((((!((map__42105_42144 == null)))?((((map__42105_42144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42105_42144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42105_42144):map__42105_42144);
var doc_42146 = cljs.core.get.call(null,map__42105_42145__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42147 = cljs.core.get.call(null,map__42105_42145__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42143);

cljs.core.println.call(null," ",arglists_42147);

if(cljs.core.truth_(doc_42146)){
cljs.core.println.call(null," ",doc_42146);
} else {
}

var G__42148 = seq__42098_42138;
var G__42149 = chunk__42099_42139;
var G__42150 = count__42100_42140;
var G__42151 = (i__42101_42141 + (1));
seq__42098_42138 = G__42148;
chunk__42099_42139 = G__42149;
count__42100_42140 = G__42150;
i__42101_42141 = G__42151;
continue;
} else {
var temp__4657__auto___42152 = cljs.core.seq.call(null,seq__42098_42138);
if(temp__4657__auto___42152){
var seq__42098_42153__$1 = temp__4657__auto___42152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42098_42153__$1)){
var c__22545__auto___42154 = cljs.core.chunk_first.call(null,seq__42098_42153__$1);
var G__42155 = cljs.core.chunk_rest.call(null,seq__42098_42153__$1);
var G__42156 = c__22545__auto___42154;
var G__42157 = cljs.core.count.call(null,c__22545__auto___42154);
var G__42158 = (0);
seq__42098_42138 = G__42155;
chunk__42099_42139 = G__42156;
count__42100_42140 = G__42157;
i__42101_42141 = G__42158;
continue;
} else {
var vec__42107_42159 = cljs.core.first.call(null,seq__42098_42153__$1);
var name_42160 = cljs.core.nth.call(null,vec__42107_42159,(0),null);
var map__42110_42161 = cljs.core.nth.call(null,vec__42107_42159,(1),null);
var map__42110_42162__$1 = ((((!((map__42110_42161 == null)))?((((map__42110_42161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42110_42161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42110_42161):map__42110_42161);
var doc_42163 = cljs.core.get.call(null,map__42110_42162__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42164 = cljs.core.get.call(null,map__42110_42162__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42160);

cljs.core.println.call(null," ",arglists_42164);

if(cljs.core.truth_(doc_42163)){
cljs.core.println.call(null," ",doc_42163);
} else {
}

var G__42165 = cljs.core.next.call(null,seq__42098_42153__$1);
var G__42166 = null;
var G__42167 = (0);
var G__42168 = (0);
seq__42098_42138 = G__42165;
chunk__42099_42139 = G__42166;
count__42100_42140 = G__42167;
i__42101_42141 = G__42168;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__42092,map__42092__$1,m,n,nm){
return (function (p__42112){
var vec__42113 = p__42112;
var role = cljs.core.nth.call(null,vec__42113,(0),null);
var spec = cljs.core.nth.call(null,vec__42113,(1),null);
if(cljs.core.truth_((function (){var and__21722__auto__ = spec;
if(cljs.core.truth_(and__21722__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__21722__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__42092,map__42092__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1469933704248