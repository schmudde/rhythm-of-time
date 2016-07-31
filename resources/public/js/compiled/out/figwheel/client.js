// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-3";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args43976 = [];
var len__22809__auto___43979 = arguments.length;
var i__22810__auto___43980 = (0);
while(true){
if((i__22810__auto___43980 < len__22809__auto___43979)){
args43976.push((arguments[i__22810__auto___43980]));

var G__43981 = (i__22810__auto___43980 + (1));
i__22810__auto___43980 = G__43981;
continue;
} else {
}
break;
}

var G__43978 = args43976.length;
switch (G__43978) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43976.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22816__auto__ = [];
var len__22809__auto___43984 = arguments.length;
var i__22810__auto___43985 = (0);
while(true){
if((i__22810__auto___43985 < len__22809__auto___43984)){
args__22816__auto__.push((arguments[i__22810__auto___43985]));

var G__43986 = (i__22810__auto___43985 + (1));
i__22810__auto___43985 = G__43986;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((0) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22817__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43983){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43983));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22816__auto__ = [];
var len__22809__auto___43988 = arguments.length;
var i__22810__auto___43989 = (0);
while(true){
if((i__22810__auto___43989 < len__22809__auto___43988)){
args__22816__auto__.push((arguments[i__22810__auto___43989]));

var G__43990 = (i__22810__auto___43989 + (1));
i__22810__auto___43989 = G__43990;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((0) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22817__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43987){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43987));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__43991 = cljs.core._EQ_;
var expr__43992 = (function (){var or__21734__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e43995){if((e43995 instanceof Error)){
var e = e43995;
return false;
} else {
throw e43995;

}
}})();
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__43991.call(null,"true",expr__43992))){
return true;
} else {
if(cljs.core.truth_(pred__43991.call(null,"false",expr__43992))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43992)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e43997){if((e43997 instanceof Error)){
var e = e43997;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e43997;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43998){
var map__44001 = p__43998;
var map__44001__$1 = ((((!((map__44001 == null)))?((((map__44001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44001):map__44001);
var message = cljs.core.get.call(null,map__44001__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44001__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21734__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21722__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21722__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21722__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26497__auto___44163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___44163,ch){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___44163,ch){
return (function (state_44132){
var state_val_44133 = (state_44132[(1)]);
if((state_val_44133 === (7))){
var inst_44128 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
var statearr_44134_44164 = state_44132__$1;
(statearr_44134_44164[(2)] = inst_44128);

(statearr_44134_44164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (1))){
var state_44132__$1 = state_44132;
var statearr_44135_44165 = state_44132__$1;
(statearr_44135_44165[(2)] = null);

(statearr_44135_44165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (4))){
var inst_44085 = (state_44132[(7)]);
var inst_44085__$1 = (state_44132[(2)]);
var state_44132__$1 = (function (){var statearr_44136 = state_44132;
(statearr_44136[(7)] = inst_44085__$1);

return statearr_44136;
})();
if(cljs.core.truth_(inst_44085__$1)){
var statearr_44137_44166 = state_44132__$1;
(statearr_44137_44166[(1)] = (5));

} else {
var statearr_44138_44167 = state_44132__$1;
(statearr_44138_44167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (15))){
var inst_44092 = (state_44132[(8)]);
var inst_44107 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44092);
var inst_44108 = cljs.core.first.call(null,inst_44107);
var inst_44109 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44108);
var inst_44110 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_44109)].join('');
var inst_44111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44110);
var state_44132__$1 = state_44132;
var statearr_44139_44168 = state_44132__$1;
(statearr_44139_44168[(2)] = inst_44111);

(statearr_44139_44168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (13))){
var inst_44116 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
var statearr_44140_44169 = state_44132__$1;
(statearr_44140_44169[(2)] = inst_44116);

(statearr_44140_44169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (6))){
var state_44132__$1 = state_44132;
var statearr_44141_44170 = state_44132__$1;
(statearr_44141_44170[(2)] = null);

(statearr_44141_44170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (17))){
var inst_44114 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
var statearr_44142_44171 = state_44132__$1;
(statearr_44142_44171[(2)] = inst_44114);

(statearr_44142_44171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (3))){
var inst_44130 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44132__$1,inst_44130);
} else {
if((state_val_44133 === (12))){
var inst_44091 = (state_44132[(9)]);
var inst_44105 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44091,opts);
var state_44132__$1 = state_44132;
if(cljs.core.truth_(inst_44105)){
var statearr_44143_44172 = state_44132__$1;
(statearr_44143_44172[(1)] = (15));

} else {
var statearr_44144_44173 = state_44132__$1;
(statearr_44144_44173[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (2))){
var state_44132__$1 = state_44132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44132__$1,(4),ch);
} else {
if((state_val_44133 === (11))){
var inst_44092 = (state_44132[(8)]);
var inst_44097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44098 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44092);
var inst_44099 = cljs.core.async.timeout.call(null,(1000));
var inst_44100 = [inst_44098,inst_44099];
var inst_44101 = (new cljs.core.PersistentVector(null,2,(5),inst_44097,inst_44100,null));
var state_44132__$1 = state_44132;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44132__$1,(14),inst_44101);
} else {
if((state_val_44133 === (9))){
var inst_44092 = (state_44132[(8)]);
var inst_44118 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44119 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44092);
var inst_44120 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44119);
var inst_44121 = [cljs.core.str("Not loading: "),cljs.core.str(inst_44120)].join('');
var inst_44122 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44121);
var state_44132__$1 = (function (){var statearr_44145 = state_44132;
(statearr_44145[(10)] = inst_44118);

return statearr_44145;
})();
var statearr_44146_44174 = state_44132__$1;
(statearr_44146_44174[(2)] = inst_44122);

(statearr_44146_44174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (5))){
var inst_44085 = (state_44132[(7)]);
var inst_44087 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44088 = (new cljs.core.PersistentArrayMap(null,2,inst_44087,null));
var inst_44089 = (new cljs.core.PersistentHashSet(null,inst_44088,null));
var inst_44090 = figwheel.client.focus_msgs.call(null,inst_44089,inst_44085);
var inst_44091 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44090);
var inst_44092 = cljs.core.first.call(null,inst_44090);
var inst_44093 = figwheel.client.autoload_QMARK_.call(null);
var state_44132__$1 = (function (){var statearr_44147 = state_44132;
(statearr_44147[(9)] = inst_44091);

(statearr_44147[(8)] = inst_44092);

return statearr_44147;
})();
if(cljs.core.truth_(inst_44093)){
var statearr_44148_44175 = state_44132__$1;
(statearr_44148_44175[(1)] = (8));

} else {
var statearr_44149_44176 = state_44132__$1;
(statearr_44149_44176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (14))){
var inst_44103 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
var statearr_44150_44177 = state_44132__$1;
(statearr_44150_44177[(2)] = inst_44103);

(statearr_44150_44177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (16))){
var state_44132__$1 = state_44132;
var statearr_44151_44178 = state_44132__$1;
(statearr_44151_44178[(2)] = null);

(statearr_44151_44178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (10))){
var inst_44124 = (state_44132[(2)]);
var state_44132__$1 = (function (){var statearr_44152 = state_44132;
(statearr_44152[(11)] = inst_44124);

return statearr_44152;
})();
var statearr_44153_44179 = state_44132__$1;
(statearr_44153_44179[(2)] = null);

(statearr_44153_44179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (8))){
var inst_44091 = (state_44132[(9)]);
var inst_44095 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44091,opts);
var state_44132__$1 = state_44132;
if(cljs.core.truth_(inst_44095)){
var statearr_44154_44180 = state_44132__$1;
(statearr_44154_44180[(1)] = (11));

} else {
var statearr_44155_44181 = state_44132__$1;
(statearr_44155_44181[(1)] = (12));

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
});})(c__26497__auto___44163,ch))
;
return ((function (switch__26385__auto__,c__26497__auto___44163,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26386__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26386__auto____0 = (function (){
var statearr_44159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44159[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26386__auto__);

(statearr_44159[(1)] = (1));

return statearr_44159;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26386__auto____1 = (function (state_44132){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_44132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e44160){if((e44160 instanceof Object)){
var ex__26389__auto__ = e44160;
var statearr_44161_44182 = state_44132;
(statearr_44161_44182[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44183 = state_44132;
state_44132 = G__44183;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26386__auto__ = function(state_44132){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26386__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26386__auto____1.call(this,state_44132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26386__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26386__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___44163,ch))
})();
var state__26499__auto__ = (function (){var statearr_44162 = f__26498__auto__.call(null);
(statearr_44162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___44163);

return statearr_44162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___44163,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44184_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44184_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_44187 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44187){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e44186){if((e44186 instanceof Error)){
var e = e44186;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44187], null));
} else {
var e = e44186;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_44187))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44188){
var map__44197 = p__44188;
var map__44197__$1 = ((((!((map__44197 == null)))?((((map__44197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44197):map__44197);
var opts = map__44197__$1;
var build_id = cljs.core.get.call(null,map__44197__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44197,map__44197__$1,opts,build_id){
return (function (p__44199){
var vec__44200 = p__44199;
var seq__44201 = cljs.core.seq.call(null,vec__44200);
var first__44202 = cljs.core.first.call(null,seq__44201);
var seq__44201__$1 = cljs.core.next.call(null,seq__44201);
var map__44203 = first__44202;
var map__44203__$1 = ((((!((map__44203 == null)))?((((map__44203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44203):map__44203);
var msg = map__44203__$1;
var msg_name = cljs.core.get.call(null,map__44203__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44201__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44200,seq__44201,first__44202,seq__44201__$1,map__44203,map__44203__$1,msg,msg_name,_,map__44197,map__44197__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44200,seq__44201,first__44202,seq__44201__$1,map__44203,map__44203__$1,msg,msg_name,_,map__44197,map__44197__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44197,map__44197__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44211){
var vec__44212 = p__44211;
var seq__44213 = cljs.core.seq.call(null,vec__44212);
var first__44214 = cljs.core.first.call(null,seq__44213);
var seq__44213__$1 = cljs.core.next.call(null,seq__44213);
var map__44215 = first__44214;
var map__44215__$1 = ((((!((map__44215 == null)))?((((map__44215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44215):map__44215);
var msg = map__44215__$1;
var msg_name = cljs.core.get.call(null,map__44215__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44213__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44217){
var map__44229 = p__44217;
var map__44229__$1 = ((((!((map__44229 == null)))?((((map__44229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44229):map__44229);
var on_compile_warning = cljs.core.get.call(null,map__44229__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44229__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44229,map__44229__$1,on_compile_warning,on_compile_fail){
return (function (p__44231){
var vec__44232 = p__44231;
var seq__44233 = cljs.core.seq.call(null,vec__44232);
var first__44234 = cljs.core.first.call(null,seq__44233);
var seq__44233__$1 = cljs.core.next.call(null,seq__44233);
var map__44235 = first__44234;
var map__44235__$1 = ((((!((map__44235 == null)))?((((map__44235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44235):map__44235);
var msg = map__44235__$1;
var msg_name = cljs.core.get.call(null,map__44235__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44233__$1;
var pred__44237 = cljs.core._EQ_;
var expr__44238 = msg_name;
if(cljs.core.truth_(pred__44237.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44238))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44237.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44238))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44229,map__44229__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto__,msg_hist,msg_names,msg){
return (function (state_44446){
var state_val_44447 = (state_44446[(1)]);
if((state_val_44447 === (7))){
var inst_44374 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
if(cljs.core.truth_(inst_44374)){
var statearr_44448_44494 = state_44446__$1;
(statearr_44448_44494[(1)] = (8));

} else {
var statearr_44449_44495 = state_44446__$1;
(statearr_44449_44495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (20))){
var inst_44440 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44450_44496 = state_44446__$1;
(statearr_44450_44496[(2)] = inst_44440);

(statearr_44450_44496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (27))){
var inst_44436 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44451_44497 = state_44446__$1;
(statearr_44451_44497[(2)] = inst_44436);

(statearr_44451_44497[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (1))){
var inst_44367 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44446__$1 = state_44446;
if(cljs.core.truth_(inst_44367)){
var statearr_44452_44498 = state_44446__$1;
(statearr_44452_44498[(1)] = (2));

} else {
var statearr_44453_44499 = state_44446__$1;
(statearr_44453_44499[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (24))){
var inst_44438 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44454_44500 = state_44446__$1;
(statearr_44454_44500[(2)] = inst_44438);

(statearr_44454_44500[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (4))){
var inst_44444 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44446__$1,inst_44444);
} else {
if((state_val_44447 === (15))){
var inst_44442 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44455_44501 = state_44446__$1;
(statearr_44455_44501[(2)] = inst_44442);

(statearr_44455_44501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (21))){
var inst_44401 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44456_44502 = state_44446__$1;
(statearr_44456_44502[(2)] = inst_44401);

(statearr_44456_44502[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (31))){
var inst_44425 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44446__$1 = state_44446;
if(cljs.core.truth_(inst_44425)){
var statearr_44457_44503 = state_44446__$1;
(statearr_44457_44503[(1)] = (34));

} else {
var statearr_44458_44504 = state_44446__$1;
(statearr_44458_44504[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (32))){
var inst_44434 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44459_44505 = state_44446__$1;
(statearr_44459_44505[(2)] = inst_44434);

(statearr_44459_44505[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (33))){
var inst_44423 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44460_44506 = state_44446__$1;
(statearr_44460_44506[(2)] = inst_44423);

(statearr_44460_44506[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (13))){
var inst_44388 = figwheel.client.heads_up.clear.call(null);
var state_44446__$1 = state_44446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,(16),inst_44388);
} else {
if((state_val_44447 === (22))){
var inst_44405 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44406 = figwheel.client.heads_up.append_warning_message.call(null,inst_44405);
var state_44446__$1 = state_44446;
var statearr_44461_44507 = state_44446__$1;
(statearr_44461_44507[(2)] = inst_44406);

(statearr_44461_44507[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (36))){
var inst_44432 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44462_44508 = state_44446__$1;
(statearr_44462_44508[(2)] = inst_44432);

(statearr_44462_44508[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (29))){
var inst_44416 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44463_44509 = state_44446__$1;
(statearr_44463_44509[(2)] = inst_44416);

(statearr_44463_44509[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (6))){
var inst_44369 = (state_44446[(7)]);
var state_44446__$1 = state_44446;
var statearr_44464_44510 = state_44446__$1;
(statearr_44464_44510[(2)] = inst_44369);

(statearr_44464_44510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (28))){
var inst_44412 = (state_44446[(2)]);
var inst_44413 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44414 = figwheel.client.heads_up.display_warning.call(null,inst_44413);
var state_44446__$1 = (function (){var statearr_44465 = state_44446;
(statearr_44465[(8)] = inst_44412);

return statearr_44465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,(29),inst_44414);
} else {
if((state_val_44447 === (25))){
var inst_44410 = figwheel.client.heads_up.clear.call(null);
var state_44446__$1 = state_44446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,(28),inst_44410);
} else {
if((state_val_44447 === (34))){
var inst_44427 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44446__$1 = state_44446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,(37),inst_44427);
} else {
if((state_val_44447 === (17))){
var inst_44394 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44466_44511 = state_44446__$1;
(statearr_44466_44511[(2)] = inst_44394);

(statearr_44466_44511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (3))){
var inst_44386 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44446__$1 = state_44446;
if(cljs.core.truth_(inst_44386)){
var statearr_44467_44512 = state_44446__$1;
(statearr_44467_44512[(1)] = (13));

} else {
var statearr_44468_44513 = state_44446__$1;
(statearr_44468_44513[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (12))){
var inst_44382 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44469_44514 = state_44446__$1;
(statearr_44469_44514[(2)] = inst_44382);

(statearr_44469_44514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (2))){
var inst_44369 = (state_44446[(7)]);
var inst_44369__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44446__$1 = (function (){var statearr_44470 = state_44446;
(statearr_44470[(7)] = inst_44369__$1);

return statearr_44470;
})();
if(cljs.core.truth_(inst_44369__$1)){
var statearr_44471_44515 = state_44446__$1;
(statearr_44471_44515[(1)] = (5));

} else {
var statearr_44472_44516 = state_44446__$1;
(statearr_44472_44516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (23))){
var inst_44408 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44446__$1 = state_44446;
if(cljs.core.truth_(inst_44408)){
var statearr_44473_44517 = state_44446__$1;
(statearr_44473_44517[(1)] = (25));

} else {
var statearr_44474_44518 = state_44446__$1;
(statearr_44474_44518[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (35))){
var state_44446__$1 = state_44446;
var statearr_44475_44519 = state_44446__$1;
(statearr_44475_44519[(2)] = null);

(statearr_44475_44519[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (19))){
var inst_44403 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44446__$1 = state_44446;
if(cljs.core.truth_(inst_44403)){
var statearr_44476_44520 = state_44446__$1;
(statearr_44476_44520[(1)] = (22));

} else {
var statearr_44477_44521 = state_44446__$1;
(statearr_44477_44521[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (11))){
var inst_44378 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44478_44522 = state_44446__$1;
(statearr_44478_44522[(2)] = inst_44378);

(statearr_44478_44522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (9))){
var inst_44380 = figwheel.client.heads_up.clear.call(null);
var state_44446__$1 = state_44446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,(12),inst_44380);
} else {
if((state_val_44447 === (5))){
var inst_44371 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44446__$1 = state_44446;
var statearr_44479_44523 = state_44446__$1;
(statearr_44479_44523[(2)] = inst_44371);

(statearr_44479_44523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (14))){
var inst_44396 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44446__$1 = state_44446;
if(cljs.core.truth_(inst_44396)){
var statearr_44480_44524 = state_44446__$1;
(statearr_44480_44524[(1)] = (18));

} else {
var statearr_44481_44525 = state_44446__$1;
(statearr_44481_44525[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (26))){
var inst_44418 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44446__$1 = state_44446;
if(cljs.core.truth_(inst_44418)){
var statearr_44482_44526 = state_44446__$1;
(statearr_44482_44526[(1)] = (30));

} else {
var statearr_44483_44527 = state_44446__$1;
(statearr_44483_44527[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (16))){
var inst_44390 = (state_44446[(2)]);
var inst_44391 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44392 = figwheel.client.heads_up.display_exception.call(null,inst_44391);
var state_44446__$1 = (function (){var statearr_44484 = state_44446;
(statearr_44484[(9)] = inst_44390);

return statearr_44484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,(17),inst_44392);
} else {
if((state_val_44447 === (30))){
var inst_44420 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44421 = figwheel.client.heads_up.display_warning.call(null,inst_44420);
var state_44446__$1 = state_44446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,(33),inst_44421);
} else {
if((state_val_44447 === (10))){
var inst_44384 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44485_44528 = state_44446__$1;
(statearr_44485_44528[(2)] = inst_44384);

(statearr_44485_44528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (18))){
var inst_44398 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44399 = figwheel.client.heads_up.display_exception.call(null,inst_44398);
var state_44446__$1 = state_44446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,(21),inst_44399);
} else {
if((state_val_44447 === (37))){
var inst_44429 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
var statearr_44486_44529 = state_44446__$1;
(statearr_44486_44529[(2)] = inst_44429);

(statearr_44486_44529[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (8))){
var inst_44376 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44446__$1 = state_44446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,(11),inst_44376);
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
});})(c__26497__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26385__auto__,c__26497__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto____0 = (function (){
var statearr_44490 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44490[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto__);

(statearr_44490[(1)] = (1));

return statearr_44490;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto____1 = (function (state_44446){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_44446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e44491){if((e44491 instanceof Object)){
var ex__26389__auto__ = e44491;
var statearr_44492_44530 = state_44446;
(statearr_44492_44530[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44531 = state_44446;
state_44446 = G__44531;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto__ = function(state_44446){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto____1.call(this,state_44446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto__,msg_hist,msg_names,msg))
})();
var state__26499__auto__ = (function (){var statearr_44493 = f__26498__auto__.call(null);
(statearr_44493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto__);

return statearr_44493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto__,msg_hist,msg_names,msg))
);

return c__26497__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26497__auto___44594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___44594,ch){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___44594,ch){
return (function (state_44577){
var state_val_44578 = (state_44577[(1)]);
if((state_val_44578 === (1))){
var state_44577__$1 = state_44577;
var statearr_44579_44595 = state_44577__$1;
(statearr_44579_44595[(2)] = null);

(statearr_44579_44595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (2))){
var state_44577__$1 = state_44577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44577__$1,(4),ch);
} else {
if((state_val_44578 === (3))){
var inst_44575 = (state_44577[(2)]);
var state_44577__$1 = state_44577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44577__$1,inst_44575);
} else {
if((state_val_44578 === (4))){
var inst_44565 = (state_44577[(7)]);
var inst_44565__$1 = (state_44577[(2)]);
var state_44577__$1 = (function (){var statearr_44580 = state_44577;
(statearr_44580[(7)] = inst_44565__$1);

return statearr_44580;
})();
if(cljs.core.truth_(inst_44565__$1)){
var statearr_44581_44596 = state_44577__$1;
(statearr_44581_44596[(1)] = (5));

} else {
var statearr_44582_44597 = state_44577__$1;
(statearr_44582_44597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (5))){
var inst_44565 = (state_44577[(7)]);
var inst_44567 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44565);
var state_44577__$1 = state_44577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44577__$1,(8),inst_44567);
} else {
if((state_val_44578 === (6))){
var state_44577__$1 = state_44577;
var statearr_44583_44598 = state_44577__$1;
(statearr_44583_44598[(2)] = null);

(statearr_44583_44598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (7))){
var inst_44573 = (state_44577[(2)]);
var state_44577__$1 = state_44577;
var statearr_44584_44599 = state_44577__$1;
(statearr_44584_44599[(2)] = inst_44573);

(statearr_44584_44599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (8))){
var inst_44569 = (state_44577[(2)]);
var state_44577__$1 = (function (){var statearr_44585 = state_44577;
(statearr_44585[(8)] = inst_44569);

return statearr_44585;
})();
var statearr_44586_44600 = state_44577__$1;
(statearr_44586_44600[(2)] = null);

(statearr_44586_44600[(1)] = (2));


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
});})(c__26497__auto___44594,ch))
;
return ((function (switch__26385__auto__,c__26497__auto___44594,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26386__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26386__auto____0 = (function (){
var statearr_44590 = [null,null,null,null,null,null,null,null,null];
(statearr_44590[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26386__auto__);

(statearr_44590[(1)] = (1));

return statearr_44590;
});
var figwheel$client$heads_up_plugin_$_state_machine__26386__auto____1 = (function (state_44577){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_44577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e44591){if((e44591 instanceof Object)){
var ex__26389__auto__ = e44591;
var statearr_44592_44601 = state_44577;
(statearr_44592_44601[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44602 = state_44577;
state_44577 = G__44602;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26386__auto__ = function(state_44577){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26386__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26386__auto____1.call(this,state_44577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26386__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26386__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___44594,ch))
})();
var state__26499__auto__ = (function (){var statearr_44593 = f__26498__auto__.call(null);
(statearr_44593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___44594);

return statearr_44593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___44594,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto__){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto__){
return (function (state_44623){
var state_val_44624 = (state_44623[(1)]);
if((state_val_44624 === (1))){
var inst_44618 = cljs.core.async.timeout.call(null,(3000));
var state_44623__$1 = state_44623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44623__$1,(2),inst_44618);
} else {
if((state_val_44624 === (2))){
var inst_44620 = (state_44623[(2)]);
var inst_44621 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44623__$1 = (function (){var statearr_44625 = state_44623;
(statearr_44625[(7)] = inst_44620);

return statearr_44625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44623__$1,inst_44621);
} else {
return null;
}
}
});})(c__26497__auto__))
;
return ((function (switch__26385__auto__,c__26497__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26386__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26386__auto____0 = (function (){
var statearr_44629 = [null,null,null,null,null,null,null,null];
(statearr_44629[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26386__auto__);

(statearr_44629[(1)] = (1));

return statearr_44629;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26386__auto____1 = (function (state_44623){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_44623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e44630){if((e44630 instanceof Object)){
var ex__26389__auto__ = e44630;
var statearr_44631_44633 = state_44623;
(statearr_44631_44633[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44634 = state_44623;
state_44623 = G__44634;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26386__auto__ = function(state_44623){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26386__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26386__auto____1.call(this,state_44623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26386__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26386__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto__))
})();
var state__26499__auto__ = (function (){var statearr_44632 = f__26498__auto__.call(null);
(statearr_44632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto__);

return statearr_44632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto__))
);

return c__26497__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto__,figwheel_version,temp__4657__auto__){
return (function (state_44657){
var state_val_44658 = (state_44657[(1)]);
if((state_val_44658 === (1))){
var inst_44651 = cljs.core.async.timeout.call(null,(2000));
var state_44657__$1 = state_44657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44657__$1,(2),inst_44651);
} else {
if((state_val_44658 === (2))){
var inst_44653 = (state_44657[(2)]);
var inst_44654 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_44655 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44654);
var state_44657__$1 = (function (){var statearr_44659 = state_44657;
(statearr_44659[(7)] = inst_44653);

return statearr_44659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44657__$1,inst_44655);
} else {
return null;
}
}
});})(c__26497__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26385__auto__,c__26497__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto____0 = (function (){
var statearr_44663 = [null,null,null,null,null,null,null,null];
(statearr_44663[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto__);

(statearr_44663[(1)] = (1));

return statearr_44663;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto____1 = (function (state_44657){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_44657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e44664){if((e44664 instanceof Object)){
var ex__26389__auto__ = e44664;
var statearr_44665_44667 = state_44657;
(statearr_44665_44667[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44668 = state_44657;
state_44657 = G__44668;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto__ = function(state_44657){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto____1.call(this,state_44657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26499__auto__ = (function (){var statearr_44666 = f__26498__auto__.call(null);
(statearr_44666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto__);

return statearr_44666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto__,figwheel_version,temp__4657__auto__))
);

return c__26497__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44669){
var map__44673 = p__44669;
var map__44673__$1 = ((((!((map__44673 == null)))?((((map__44673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44673):map__44673);
var file = cljs.core.get.call(null,map__44673__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44673__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44673__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44675 = "";
var G__44675__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__44675),cljs.core.str("file "),cljs.core.str(file)].join(''):G__44675);
var G__44675__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__44675__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__44675__$1);
if(cljs.core.truth_((function (){var and__21722__auto__ = line;
if(cljs.core.truth_(and__21722__auto__)){
return column;
} else {
return and__21722__auto__;
}
})())){
return [cljs.core.str(G__44675__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__44675__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44676){
var map__44683 = p__44676;
var map__44683__$1 = ((((!((map__44683 == null)))?((((map__44683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44683):map__44683);
var ed = map__44683__$1;
var formatted_exception = cljs.core.get.call(null,map__44683__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44683__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44683__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44685_44689 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44686_44690 = null;
var count__44687_44691 = (0);
var i__44688_44692 = (0);
while(true){
if((i__44688_44692 < count__44687_44691)){
var msg_44693 = cljs.core._nth.call(null,chunk__44686_44690,i__44688_44692);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44693);

var G__44694 = seq__44685_44689;
var G__44695 = chunk__44686_44690;
var G__44696 = count__44687_44691;
var G__44697 = (i__44688_44692 + (1));
seq__44685_44689 = G__44694;
chunk__44686_44690 = G__44695;
count__44687_44691 = G__44696;
i__44688_44692 = G__44697;
continue;
} else {
var temp__4657__auto___44698 = cljs.core.seq.call(null,seq__44685_44689);
if(temp__4657__auto___44698){
var seq__44685_44699__$1 = temp__4657__auto___44698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44685_44699__$1)){
var c__22545__auto___44700 = cljs.core.chunk_first.call(null,seq__44685_44699__$1);
var G__44701 = cljs.core.chunk_rest.call(null,seq__44685_44699__$1);
var G__44702 = c__22545__auto___44700;
var G__44703 = cljs.core.count.call(null,c__22545__auto___44700);
var G__44704 = (0);
seq__44685_44689 = G__44701;
chunk__44686_44690 = G__44702;
count__44687_44691 = G__44703;
i__44688_44692 = G__44704;
continue;
} else {
var msg_44705 = cljs.core.first.call(null,seq__44685_44699__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44705);

var G__44706 = cljs.core.next.call(null,seq__44685_44699__$1);
var G__44707 = null;
var G__44708 = (0);
var G__44709 = (0);
seq__44685_44689 = G__44706;
chunk__44686_44690 = G__44707;
count__44687_44691 = G__44708;
i__44688_44692 = G__44709;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44710){
var map__44713 = p__44710;
var map__44713__$1 = ((((!((map__44713 == null)))?((((map__44713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44713):map__44713);
var w = map__44713__$1;
var message = cljs.core.get.call(null,map__44713__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21722__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21722__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21722__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44725 = cljs.core.seq.call(null,plugins);
var chunk__44726 = null;
var count__44727 = (0);
var i__44728 = (0);
while(true){
if((i__44728 < count__44727)){
var vec__44729 = cljs.core._nth.call(null,chunk__44726,i__44728);
var k = cljs.core.nth.call(null,vec__44729,(0),null);
var plugin = cljs.core.nth.call(null,vec__44729,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44735 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44725,chunk__44726,count__44727,i__44728,pl_44735,vec__44729,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44735.call(null,msg_hist);
});})(seq__44725,chunk__44726,count__44727,i__44728,pl_44735,vec__44729,k,plugin))
);
} else {
}

var G__44736 = seq__44725;
var G__44737 = chunk__44726;
var G__44738 = count__44727;
var G__44739 = (i__44728 + (1));
seq__44725 = G__44736;
chunk__44726 = G__44737;
count__44727 = G__44738;
i__44728 = G__44739;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44725);
if(temp__4657__auto__){
var seq__44725__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44725__$1)){
var c__22545__auto__ = cljs.core.chunk_first.call(null,seq__44725__$1);
var G__44740 = cljs.core.chunk_rest.call(null,seq__44725__$1);
var G__44741 = c__22545__auto__;
var G__44742 = cljs.core.count.call(null,c__22545__auto__);
var G__44743 = (0);
seq__44725 = G__44740;
chunk__44726 = G__44741;
count__44727 = G__44742;
i__44728 = G__44743;
continue;
} else {
var vec__44732 = cljs.core.first.call(null,seq__44725__$1);
var k = cljs.core.nth.call(null,vec__44732,(0),null);
var plugin = cljs.core.nth.call(null,vec__44732,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44744 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44725,chunk__44726,count__44727,i__44728,pl_44744,vec__44732,k,plugin,seq__44725__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44744.call(null,msg_hist);
});})(seq__44725,chunk__44726,count__44727,i__44728,pl_44744,vec__44732,k,plugin,seq__44725__$1,temp__4657__auto__))
);
} else {
}

var G__44745 = cljs.core.next.call(null,seq__44725__$1);
var G__44746 = null;
var G__44747 = (0);
var G__44748 = (0);
seq__44725 = G__44745;
chunk__44726 = G__44746;
count__44727 = G__44747;
i__44728 = G__44748;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args44749 = [];
var len__22809__auto___44756 = arguments.length;
var i__22810__auto___44757 = (0);
while(true){
if((i__22810__auto___44757 < len__22809__auto___44756)){
args44749.push((arguments[i__22810__auto___44757]));

var G__44758 = (i__22810__auto___44757 + (1));
i__22810__auto___44757 = G__44758;
continue;
} else {
}
break;
}

var G__44751 = args44749.length;
switch (G__44751) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44749.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44752_44760 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44753_44761 = null;
var count__44754_44762 = (0);
var i__44755_44763 = (0);
while(true){
if((i__44755_44763 < count__44754_44762)){
var msg_44764 = cljs.core._nth.call(null,chunk__44753_44761,i__44755_44763);
figwheel.client.socket.handle_incoming_message.call(null,msg_44764);

var G__44765 = seq__44752_44760;
var G__44766 = chunk__44753_44761;
var G__44767 = count__44754_44762;
var G__44768 = (i__44755_44763 + (1));
seq__44752_44760 = G__44765;
chunk__44753_44761 = G__44766;
count__44754_44762 = G__44767;
i__44755_44763 = G__44768;
continue;
} else {
var temp__4657__auto___44769 = cljs.core.seq.call(null,seq__44752_44760);
if(temp__4657__auto___44769){
var seq__44752_44770__$1 = temp__4657__auto___44769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44752_44770__$1)){
var c__22545__auto___44771 = cljs.core.chunk_first.call(null,seq__44752_44770__$1);
var G__44772 = cljs.core.chunk_rest.call(null,seq__44752_44770__$1);
var G__44773 = c__22545__auto___44771;
var G__44774 = cljs.core.count.call(null,c__22545__auto___44771);
var G__44775 = (0);
seq__44752_44760 = G__44772;
chunk__44753_44761 = G__44773;
count__44754_44762 = G__44774;
i__44755_44763 = G__44775;
continue;
} else {
var msg_44776 = cljs.core.first.call(null,seq__44752_44770__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44776);

var G__44777 = cljs.core.next.call(null,seq__44752_44770__$1);
var G__44778 = null;
var G__44779 = (0);
var G__44780 = (0);
seq__44752_44760 = G__44777;
chunk__44753_44761 = G__44778;
count__44754_44762 = G__44779;
i__44755_44763 = G__44780;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22816__auto__ = [];
var len__22809__auto___44785 = arguments.length;
var i__22810__auto___44786 = (0);
while(true){
if((i__22810__auto___44786 < len__22809__auto___44785)){
args__22816__auto__.push((arguments[i__22810__auto___44786]));

var G__44787 = (i__22810__auto___44786 + (1));
i__22810__auto___44786 = G__44787;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((0) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44782){
var map__44783 = p__44782;
var map__44783__$1 = ((((!((map__44783 == null)))?((((map__44783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44783):map__44783);
var opts = map__44783__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44781){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44781));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44789){if((e44789 instanceof Error)){
var e = e44789;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44789;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44793){
var map__44794 = p__44793;
var map__44794__$1 = ((((!((map__44794 == null)))?((((map__44794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44794):map__44794);
var msg_name = cljs.core.get.call(null,map__44794__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1469933709354