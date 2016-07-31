// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args37228 = [];
var len__22809__auto___37234 = arguments.length;
var i__22810__auto___37235 = (0);
while(true){
if((i__22810__auto___37235 < len__22809__auto___37234)){
args37228.push((arguments[i__22810__auto___37235]));

var G__37236 = (i__22810__auto___37235 + (1));
i__22810__auto___37235 = G__37236;
continue;
} else {
}
break;
}

var G__37230 = args37228.length;
switch (G__37230) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37228.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37231 = (function (f,blockable,meta37232){
this.f = f;
this.blockable = blockable;
this.meta37232 = meta37232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37233,meta37232__$1){
var self__ = this;
var _37233__$1 = this;
return (new cljs.core.async.t_cljs$core$async37231(self__.f,self__.blockable,meta37232__$1));
});

cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37233){
var self__ = this;
var _37233__$1 = this;
return self__.meta37232;
});

cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37232","meta37232",1831741728,null)], null);
});

cljs.core.async.t_cljs$core$async37231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37231";

cljs.core.async.t_cljs$core$async37231.cljs$lang$ctorPrWriter = (function (this__22340__auto__,writer__22341__auto__,opt__22342__auto__){
return cljs.core._write.call(null,writer__22341__auto__,"cljs.core.async/t_cljs$core$async37231");
});

cljs.core.async.__GT_t_cljs$core$async37231 = (function cljs$core$async$__GT_t_cljs$core$async37231(f__$1,blockable__$1,meta37232){
return (new cljs.core.async.t_cljs$core$async37231(f__$1,blockable__$1,meta37232));
});

}

return (new cljs.core.async.t_cljs$core$async37231(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args37240 = [];
var len__22809__auto___37243 = arguments.length;
var i__22810__auto___37244 = (0);
while(true){
if((i__22810__auto___37244 < len__22809__auto___37243)){
args37240.push((arguments[i__22810__auto___37244]));

var G__37245 = (i__22810__auto___37244 + (1));
i__22810__auto___37244 = G__37245;
continue;
} else {
}
break;
}

var G__37242 = args37240.length;
switch (G__37242) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37240.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args37247 = [];
var len__22809__auto___37250 = arguments.length;
var i__22810__auto___37251 = (0);
while(true){
if((i__22810__auto___37251 < len__22809__auto___37250)){
args37247.push((arguments[i__22810__auto___37251]));

var G__37252 = (i__22810__auto___37251 + (1));
i__22810__auto___37251 = G__37252;
continue;
} else {
}
break;
}

var G__37249 = args37247.length;
switch (G__37249) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37247.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args37254 = [];
var len__22809__auto___37257 = arguments.length;
var i__22810__auto___37258 = (0);
while(true){
if((i__22810__auto___37258 < len__22809__auto___37257)){
args37254.push((arguments[i__22810__auto___37258]));

var G__37259 = (i__22810__auto___37258 + (1));
i__22810__auto___37258 = G__37259;
continue;
} else {
}
break;
}

var G__37256 = args37254.length;
switch (G__37256) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37254.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37261 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37261);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37261,ret){
return (function (){
return fn1.call(null,val_37261);
});})(val_37261,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args37262 = [];
var len__22809__auto___37265 = arguments.length;
var i__22810__auto___37266 = (0);
while(true){
if((i__22810__auto___37266 < len__22809__auto___37265)){
args37262.push((arguments[i__22810__auto___37266]));

var G__37267 = (i__22810__auto___37266 + (1));
i__22810__auto___37266 = G__37267;
continue;
} else {
}
break;
}

var G__37264 = args37262.length;
switch (G__37264) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37262.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22649__auto___37269 = n;
var x_37270 = (0);
while(true){
if((x_37270 < n__22649__auto___37269)){
(a[x_37270] = (0));

var G__37271 = (x_37270 + (1));
x_37270 = G__37271;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37272 = (i + (1));
i = G__37272;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37276 = (function (alt_flag,flag,meta37277){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37277 = meta37277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37278,meta37277__$1){
var self__ = this;
var _37278__$1 = this;
return (new cljs.core.async.t_cljs$core$async37276(self__.alt_flag,self__.flag,meta37277__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37278){
var self__ = this;
var _37278__$1 = this;
return self__.meta37277;
});})(flag))
;

cljs.core.async.t_cljs$core$async37276.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37276.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37277","meta37277",1014103097,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37276";

cljs.core.async.t_cljs$core$async37276.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22340__auto__,writer__22341__auto__,opt__22342__auto__){
return cljs.core._write.call(null,writer__22341__auto__,"cljs.core.async/t_cljs$core$async37276");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37276 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37276(alt_flag__$1,flag__$1,meta37277){
return (new cljs.core.async.t_cljs$core$async37276(alt_flag__$1,flag__$1,meta37277));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37276(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37282 = (function (alt_handler,flag,cb,meta37283){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37283 = meta37283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37284,meta37283__$1){
var self__ = this;
var _37284__$1 = this;
return (new cljs.core.async.t_cljs$core$async37282(self__.alt_handler,self__.flag,self__.cb,meta37283__$1));
});

cljs.core.async.t_cljs$core$async37282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37284){
var self__ = this;
var _37284__$1 = this;
return self__.meta37283;
});

cljs.core.async.t_cljs$core$async37282.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37282.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37283","meta37283",855613291,null)], null);
});

cljs.core.async.t_cljs$core$async37282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37282";

cljs.core.async.t_cljs$core$async37282.cljs$lang$ctorPrWriter = (function (this__22340__auto__,writer__22341__auto__,opt__22342__auto__){
return cljs.core._write.call(null,writer__22341__auto__,"cljs.core.async/t_cljs$core$async37282");
});

cljs.core.async.__GT_t_cljs$core$async37282 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37282(alt_handler__$1,flag__$1,cb__$1,meta37283){
return (new cljs.core.async.t_cljs$core$async37282(alt_handler__$1,flag__$1,cb__$1,meta37283));
});

}

return (new cljs.core.async.t_cljs$core$async37282(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37285_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37285_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37286_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37286_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21734__auto__ = wport;
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37287 = (i + (1));
i = G__37287;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21734__auto__ = ret;
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21722__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21722__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21722__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22816__auto__ = [];
var len__22809__auto___37293 = arguments.length;
var i__22810__auto___37294 = (0);
while(true){
if((i__22810__auto___37294 < len__22809__auto___37293)){
args__22816__auto__.push((arguments[i__22810__auto___37294]));

var G__37295 = (i__22810__auto___37294 + (1));
i__22810__auto___37294 = G__37295;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((1) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37290){
var map__37291 = p__37290;
var map__37291__$1 = ((((!((map__37291 == null)))?((((map__37291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37291):map__37291);
var opts = map__37291__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37288){
var G__37289 = cljs.core.first.call(null,seq37288);
var seq37288__$1 = cljs.core.next.call(null,seq37288);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37289,seq37288__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37296 = [];
var len__22809__auto___37346 = arguments.length;
var i__22810__auto___37347 = (0);
while(true){
if((i__22810__auto___37347 < len__22809__auto___37346)){
args37296.push((arguments[i__22810__auto___37347]));

var G__37348 = (i__22810__auto___37347 + (1));
i__22810__auto___37347 = G__37348;
continue;
} else {
}
break;
}

var G__37298 = args37296.length;
switch (G__37298) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37296.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26497__auto___37350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___37350){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___37350){
return (function (state_37322){
var state_val_37323 = (state_37322[(1)]);
if((state_val_37323 === (7))){
var inst_37318 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
var statearr_37324_37351 = state_37322__$1;
(statearr_37324_37351[(2)] = inst_37318);

(statearr_37324_37351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (1))){
var state_37322__$1 = state_37322;
var statearr_37325_37352 = state_37322__$1;
(statearr_37325_37352[(2)] = null);

(statearr_37325_37352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (4))){
var inst_37301 = (state_37322[(7)]);
var inst_37301__$1 = (state_37322[(2)]);
var inst_37302 = (inst_37301__$1 == null);
var state_37322__$1 = (function (){var statearr_37326 = state_37322;
(statearr_37326[(7)] = inst_37301__$1);

return statearr_37326;
})();
if(cljs.core.truth_(inst_37302)){
var statearr_37327_37353 = state_37322__$1;
(statearr_37327_37353[(1)] = (5));

} else {
var statearr_37328_37354 = state_37322__$1;
(statearr_37328_37354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (13))){
var state_37322__$1 = state_37322;
var statearr_37329_37355 = state_37322__$1;
(statearr_37329_37355[(2)] = null);

(statearr_37329_37355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (6))){
var inst_37301 = (state_37322[(7)]);
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37322__$1,(11),to,inst_37301);
} else {
if((state_val_37323 === (3))){
var inst_37320 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37322__$1,inst_37320);
} else {
if((state_val_37323 === (12))){
var state_37322__$1 = state_37322;
var statearr_37330_37356 = state_37322__$1;
(statearr_37330_37356[(2)] = null);

(statearr_37330_37356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (2))){
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37322__$1,(4),from);
} else {
if((state_val_37323 === (11))){
var inst_37311 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
if(cljs.core.truth_(inst_37311)){
var statearr_37331_37357 = state_37322__$1;
(statearr_37331_37357[(1)] = (12));

} else {
var statearr_37332_37358 = state_37322__$1;
(statearr_37332_37358[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (9))){
var state_37322__$1 = state_37322;
var statearr_37333_37359 = state_37322__$1;
(statearr_37333_37359[(2)] = null);

(statearr_37333_37359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (5))){
var state_37322__$1 = state_37322;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37334_37360 = state_37322__$1;
(statearr_37334_37360[(1)] = (8));

} else {
var statearr_37335_37361 = state_37322__$1;
(statearr_37335_37361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (14))){
var inst_37316 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
var statearr_37336_37362 = state_37322__$1;
(statearr_37336_37362[(2)] = inst_37316);

(statearr_37336_37362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (10))){
var inst_37308 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
var statearr_37337_37363 = state_37322__$1;
(statearr_37337_37363[(2)] = inst_37308);

(statearr_37337_37363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (8))){
var inst_37305 = cljs.core.async.close_BANG_.call(null,to);
var state_37322__$1 = state_37322;
var statearr_37338_37364 = state_37322__$1;
(statearr_37338_37364[(2)] = inst_37305);

(statearr_37338_37364[(1)] = (10));


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
});})(c__26497__auto___37350))
;
return ((function (switch__26385__auto__,c__26497__auto___37350){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_37342 = [null,null,null,null,null,null,null,null];
(statearr_37342[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_37342[(1)] = (1));

return statearr_37342;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_37322){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_37322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e37343){if((e37343 instanceof Object)){
var ex__26389__auto__ = e37343;
var statearr_37344_37365 = state_37322;
(statearr_37344_37365[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37366 = state_37322;
state_37322 = G__37366;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_37322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_37322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___37350))
})();
var state__26499__auto__ = (function (){var statearr_37345 = f__26498__auto__.call(null);
(statearr_37345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___37350);

return statearr_37345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___37350))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37554){
var vec__37555 = p__37554;
var v = cljs.core.nth.call(null,vec__37555,(0),null);
var p = cljs.core.nth.call(null,vec__37555,(1),null);
var job = vec__37555;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26497__auto___37741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___37741,res,vec__37555,v,p,job,jobs,results){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___37741,res,vec__37555,v,p,job,jobs,results){
return (function (state_37562){
var state_val_37563 = (state_37562[(1)]);
if((state_val_37563 === (1))){
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37562__$1,(2),res,v);
} else {
if((state_val_37563 === (2))){
var inst_37559 = (state_37562[(2)]);
var inst_37560 = cljs.core.async.close_BANG_.call(null,res);
var state_37562__$1 = (function (){var statearr_37564 = state_37562;
(statearr_37564[(7)] = inst_37559);

return statearr_37564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37562__$1,inst_37560);
} else {
return null;
}
}
});})(c__26497__auto___37741,res,vec__37555,v,p,job,jobs,results))
;
return ((function (switch__26385__auto__,c__26497__auto___37741,res,vec__37555,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0 = (function (){
var statearr_37568 = [null,null,null,null,null,null,null,null];
(statearr_37568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__);

(statearr_37568[(1)] = (1));

return statearr_37568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1 = (function (state_37562){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_37562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e37569){if((e37569 instanceof Object)){
var ex__26389__auto__ = e37569;
var statearr_37570_37742 = state_37562;
(statearr_37570_37742[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37743 = state_37562;
state_37562 = G__37743;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__ = function(state_37562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1.call(this,state_37562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___37741,res,vec__37555,v,p,job,jobs,results))
})();
var state__26499__auto__ = (function (){var statearr_37571 = f__26498__auto__.call(null);
(statearr_37571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___37741);

return statearr_37571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___37741,res,vec__37555,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37572){
var vec__37573 = p__37572;
var v = cljs.core.nth.call(null,vec__37573,(0),null);
var p = cljs.core.nth.call(null,vec__37573,(1),null);
var job = vec__37573;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22649__auto___37744 = n;
var __37745 = (0);
while(true){
if((__37745 < n__22649__auto___37744)){
var G__37576_37746 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37576_37746) {
case "compute":
var c__26497__auto___37748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37745,c__26497__auto___37748,G__37576_37746,n__22649__auto___37744,jobs,results,process,async){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (__37745,c__26497__auto___37748,G__37576_37746,n__22649__auto___37744,jobs,results,process,async){
return (function (state_37589){
var state_val_37590 = (state_37589[(1)]);
if((state_val_37590 === (1))){
var state_37589__$1 = state_37589;
var statearr_37591_37749 = state_37589__$1;
(statearr_37591_37749[(2)] = null);

(statearr_37591_37749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37590 === (2))){
var state_37589__$1 = state_37589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37589__$1,(4),jobs);
} else {
if((state_val_37590 === (3))){
var inst_37587 = (state_37589[(2)]);
var state_37589__$1 = state_37589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37589__$1,inst_37587);
} else {
if((state_val_37590 === (4))){
var inst_37579 = (state_37589[(2)]);
var inst_37580 = process.call(null,inst_37579);
var state_37589__$1 = state_37589;
if(cljs.core.truth_(inst_37580)){
var statearr_37592_37750 = state_37589__$1;
(statearr_37592_37750[(1)] = (5));

} else {
var statearr_37593_37751 = state_37589__$1;
(statearr_37593_37751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37590 === (5))){
var state_37589__$1 = state_37589;
var statearr_37594_37752 = state_37589__$1;
(statearr_37594_37752[(2)] = null);

(statearr_37594_37752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37590 === (6))){
var state_37589__$1 = state_37589;
var statearr_37595_37753 = state_37589__$1;
(statearr_37595_37753[(2)] = null);

(statearr_37595_37753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37590 === (7))){
var inst_37585 = (state_37589[(2)]);
var state_37589__$1 = state_37589;
var statearr_37596_37754 = state_37589__$1;
(statearr_37596_37754[(2)] = inst_37585);

(statearr_37596_37754[(1)] = (3));


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
});})(__37745,c__26497__auto___37748,G__37576_37746,n__22649__auto___37744,jobs,results,process,async))
;
return ((function (__37745,switch__26385__auto__,c__26497__auto___37748,G__37576_37746,n__22649__auto___37744,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0 = (function (){
var statearr_37600 = [null,null,null,null,null,null,null];
(statearr_37600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__);

(statearr_37600[(1)] = (1));

return statearr_37600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1 = (function (state_37589){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_37589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e37601){if((e37601 instanceof Object)){
var ex__26389__auto__ = e37601;
var statearr_37602_37755 = state_37589;
(statearr_37602_37755[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37756 = state_37589;
state_37589 = G__37756;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__ = function(state_37589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1.call(this,state_37589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__;
})()
;})(__37745,switch__26385__auto__,c__26497__auto___37748,G__37576_37746,n__22649__auto___37744,jobs,results,process,async))
})();
var state__26499__auto__ = (function (){var statearr_37603 = f__26498__auto__.call(null);
(statearr_37603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___37748);

return statearr_37603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(__37745,c__26497__auto___37748,G__37576_37746,n__22649__auto___37744,jobs,results,process,async))
);


break;
case "async":
var c__26497__auto___37757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37745,c__26497__auto___37757,G__37576_37746,n__22649__auto___37744,jobs,results,process,async){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (__37745,c__26497__auto___37757,G__37576_37746,n__22649__auto___37744,jobs,results,process,async){
return (function (state_37616){
var state_val_37617 = (state_37616[(1)]);
if((state_val_37617 === (1))){
var state_37616__$1 = state_37616;
var statearr_37618_37758 = state_37616__$1;
(statearr_37618_37758[(2)] = null);

(statearr_37618_37758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (2))){
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(4),jobs);
} else {
if((state_val_37617 === (3))){
var inst_37614 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37616__$1,inst_37614);
} else {
if((state_val_37617 === (4))){
var inst_37606 = (state_37616[(2)]);
var inst_37607 = async.call(null,inst_37606);
var state_37616__$1 = state_37616;
if(cljs.core.truth_(inst_37607)){
var statearr_37619_37759 = state_37616__$1;
(statearr_37619_37759[(1)] = (5));

} else {
var statearr_37620_37760 = state_37616__$1;
(statearr_37620_37760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (5))){
var state_37616__$1 = state_37616;
var statearr_37621_37761 = state_37616__$1;
(statearr_37621_37761[(2)] = null);

(statearr_37621_37761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (6))){
var state_37616__$1 = state_37616;
var statearr_37622_37762 = state_37616__$1;
(statearr_37622_37762[(2)] = null);

(statearr_37622_37762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (7))){
var inst_37612 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37623_37763 = state_37616__$1;
(statearr_37623_37763[(2)] = inst_37612);

(statearr_37623_37763[(1)] = (3));


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
});})(__37745,c__26497__auto___37757,G__37576_37746,n__22649__auto___37744,jobs,results,process,async))
;
return ((function (__37745,switch__26385__auto__,c__26497__auto___37757,G__37576_37746,n__22649__auto___37744,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0 = (function (){
var statearr_37627 = [null,null,null,null,null,null,null];
(statearr_37627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__);

(statearr_37627[(1)] = (1));

return statearr_37627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1 = (function (state_37616){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_37616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e37628){if((e37628 instanceof Object)){
var ex__26389__auto__ = e37628;
var statearr_37629_37764 = state_37616;
(statearr_37629_37764[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37765 = state_37616;
state_37616 = G__37765;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__ = function(state_37616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1.call(this,state_37616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__;
})()
;})(__37745,switch__26385__auto__,c__26497__auto___37757,G__37576_37746,n__22649__auto___37744,jobs,results,process,async))
})();
var state__26499__auto__ = (function (){var statearr_37630 = f__26498__auto__.call(null);
(statearr_37630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___37757);

return statearr_37630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(__37745,c__26497__auto___37757,G__37576_37746,n__22649__auto___37744,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37766 = (__37745 + (1));
__37745 = G__37766;
continue;
} else {
}
break;
}

var c__26497__auto___37767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___37767,jobs,results,process,async){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___37767,jobs,results,process,async){
return (function (state_37652){
var state_val_37653 = (state_37652[(1)]);
if((state_val_37653 === (1))){
var state_37652__$1 = state_37652;
var statearr_37654_37768 = state_37652__$1;
(statearr_37654_37768[(2)] = null);

(statearr_37654_37768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (2))){
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37652__$1,(4),from);
} else {
if((state_val_37653 === (3))){
var inst_37650 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37652__$1,inst_37650);
} else {
if((state_val_37653 === (4))){
var inst_37633 = (state_37652[(7)]);
var inst_37633__$1 = (state_37652[(2)]);
var inst_37634 = (inst_37633__$1 == null);
var state_37652__$1 = (function (){var statearr_37655 = state_37652;
(statearr_37655[(7)] = inst_37633__$1);

return statearr_37655;
})();
if(cljs.core.truth_(inst_37634)){
var statearr_37656_37769 = state_37652__$1;
(statearr_37656_37769[(1)] = (5));

} else {
var statearr_37657_37770 = state_37652__$1;
(statearr_37657_37770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (5))){
var inst_37636 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37652__$1 = state_37652;
var statearr_37658_37771 = state_37652__$1;
(statearr_37658_37771[(2)] = inst_37636);

(statearr_37658_37771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (6))){
var inst_37633 = (state_37652[(7)]);
var inst_37638 = (state_37652[(8)]);
var inst_37638__$1 = cljs.core.async.chan.call(null,(1));
var inst_37639 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37640 = [inst_37633,inst_37638__$1];
var inst_37641 = (new cljs.core.PersistentVector(null,2,(5),inst_37639,inst_37640,null));
var state_37652__$1 = (function (){var statearr_37659 = state_37652;
(statearr_37659[(8)] = inst_37638__$1);

return statearr_37659;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37652__$1,(8),jobs,inst_37641);
} else {
if((state_val_37653 === (7))){
var inst_37648 = (state_37652[(2)]);
var state_37652__$1 = state_37652;
var statearr_37660_37772 = state_37652__$1;
(statearr_37660_37772[(2)] = inst_37648);

(statearr_37660_37772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37653 === (8))){
var inst_37638 = (state_37652[(8)]);
var inst_37643 = (state_37652[(2)]);
var state_37652__$1 = (function (){var statearr_37661 = state_37652;
(statearr_37661[(9)] = inst_37643);

return statearr_37661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37652__$1,(9),results,inst_37638);
} else {
if((state_val_37653 === (9))){
var inst_37645 = (state_37652[(2)]);
var state_37652__$1 = (function (){var statearr_37662 = state_37652;
(statearr_37662[(10)] = inst_37645);

return statearr_37662;
})();
var statearr_37663_37773 = state_37652__$1;
(statearr_37663_37773[(2)] = null);

(statearr_37663_37773[(1)] = (2));


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
});})(c__26497__auto___37767,jobs,results,process,async))
;
return ((function (switch__26385__auto__,c__26497__auto___37767,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0 = (function (){
var statearr_37667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__);

(statearr_37667[(1)] = (1));

return statearr_37667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1 = (function (state_37652){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_37652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e37668){if((e37668 instanceof Object)){
var ex__26389__auto__ = e37668;
var statearr_37669_37774 = state_37652;
(statearr_37669_37774[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37775 = state_37652;
state_37652 = G__37775;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__ = function(state_37652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1.call(this,state_37652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___37767,jobs,results,process,async))
})();
var state__26499__auto__ = (function (){var statearr_37670 = f__26498__auto__.call(null);
(statearr_37670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___37767);

return statearr_37670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___37767,jobs,results,process,async))
);


var c__26497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto__,jobs,results,process,async){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto__,jobs,results,process,async){
return (function (state_37708){
var state_val_37709 = (state_37708[(1)]);
if((state_val_37709 === (7))){
var inst_37704 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
var statearr_37710_37776 = state_37708__$1;
(statearr_37710_37776[(2)] = inst_37704);

(statearr_37710_37776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (20))){
var state_37708__$1 = state_37708;
var statearr_37711_37777 = state_37708__$1;
(statearr_37711_37777[(2)] = null);

(statearr_37711_37777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (1))){
var state_37708__$1 = state_37708;
var statearr_37712_37778 = state_37708__$1;
(statearr_37712_37778[(2)] = null);

(statearr_37712_37778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (4))){
var inst_37673 = (state_37708[(7)]);
var inst_37673__$1 = (state_37708[(2)]);
var inst_37674 = (inst_37673__$1 == null);
var state_37708__$1 = (function (){var statearr_37713 = state_37708;
(statearr_37713[(7)] = inst_37673__$1);

return statearr_37713;
})();
if(cljs.core.truth_(inst_37674)){
var statearr_37714_37779 = state_37708__$1;
(statearr_37714_37779[(1)] = (5));

} else {
var statearr_37715_37780 = state_37708__$1;
(statearr_37715_37780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (15))){
var inst_37686 = (state_37708[(8)]);
var state_37708__$1 = state_37708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37708__$1,(18),to,inst_37686);
} else {
if((state_val_37709 === (21))){
var inst_37699 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
var statearr_37716_37781 = state_37708__$1;
(statearr_37716_37781[(2)] = inst_37699);

(statearr_37716_37781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (13))){
var inst_37701 = (state_37708[(2)]);
var state_37708__$1 = (function (){var statearr_37717 = state_37708;
(statearr_37717[(9)] = inst_37701);

return statearr_37717;
})();
var statearr_37718_37782 = state_37708__$1;
(statearr_37718_37782[(2)] = null);

(statearr_37718_37782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (6))){
var inst_37673 = (state_37708[(7)]);
var state_37708__$1 = state_37708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37708__$1,(11),inst_37673);
} else {
if((state_val_37709 === (17))){
var inst_37694 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
if(cljs.core.truth_(inst_37694)){
var statearr_37719_37783 = state_37708__$1;
(statearr_37719_37783[(1)] = (19));

} else {
var statearr_37720_37784 = state_37708__$1;
(statearr_37720_37784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (3))){
var inst_37706 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37708__$1,inst_37706);
} else {
if((state_val_37709 === (12))){
var inst_37683 = (state_37708[(10)]);
var state_37708__$1 = state_37708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37708__$1,(14),inst_37683);
} else {
if((state_val_37709 === (2))){
var state_37708__$1 = state_37708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37708__$1,(4),results);
} else {
if((state_val_37709 === (19))){
var state_37708__$1 = state_37708;
var statearr_37721_37785 = state_37708__$1;
(statearr_37721_37785[(2)] = null);

(statearr_37721_37785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (11))){
var inst_37683 = (state_37708[(2)]);
var state_37708__$1 = (function (){var statearr_37722 = state_37708;
(statearr_37722[(10)] = inst_37683);

return statearr_37722;
})();
var statearr_37723_37786 = state_37708__$1;
(statearr_37723_37786[(2)] = null);

(statearr_37723_37786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (9))){
var state_37708__$1 = state_37708;
var statearr_37724_37787 = state_37708__$1;
(statearr_37724_37787[(2)] = null);

(statearr_37724_37787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (5))){
var state_37708__$1 = state_37708;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37725_37788 = state_37708__$1;
(statearr_37725_37788[(1)] = (8));

} else {
var statearr_37726_37789 = state_37708__$1;
(statearr_37726_37789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (14))){
var inst_37688 = (state_37708[(11)]);
var inst_37686 = (state_37708[(8)]);
var inst_37686__$1 = (state_37708[(2)]);
var inst_37687 = (inst_37686__$1 == null);
var inst_37688__$1 = cljs.core.not.call(null,inst_37687);
var state_37708__$1 = (function (){var statearr_37727 = state_37708;
(statearr_37727[(11)] = inst_37688__$1);

(statearr_37727[(8)] = inst_37686__$1);

return statearr_37727;
})();
if(inst_37688__$1){
var statearr_37728_37790 = state_37708__$1;
(statearr_37728_37790[(1)] = (15));

} else {
var statearr_37729_37791 = state_37708__$1;
(statearr_37729_37791[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (16))){
var inst_37688 = (state_37708[(11)]);
var state_37708__$1 = state_37708;
var statearr_37730_37792 = state_37708__$1;
(statearr_37730_37792[(2)] = inst_37688);

(statearr_37730_37792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (10))){
var inst_37680 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
var statearr_37731_37793 = state_37708__$1;
(statearr_37731_37793[(2)] = inst_37680);

(statearr_37731_37793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (18))){
var inst_37691 = (state_37708[(2)]);
var state_37708__$1 = state_37708;
var statearr_37732_37794 = state_37708__$1;
(statearr_37732_37794[(2)] = inst_37691);

(statearr_37732_37794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37709 === (8))){
var inst_37677 = cljs.core.async.close_BANG_.call(null,to);
var state_37708__$1 = state_37708;
var statearr_37733_37795 = state_37708__$1;
(statearr_37733_37795[(2)] = inst_37677);

(statearr_37733_37795[(1)] = (10));


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
});})(c__26497__auto__,jobs,results,process,async))
;
return ((function (switch__26385__auto__,c__26497__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0 = (function (){
var statearr_37737 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__);

(statearr_37737[(1)] = (1));

return statearr_37737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1 = (function (state_37708){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_37708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e37738){if((e37738 instanceof Object)){
var ex__26389__auto__ = e37738;
var statearr_37739_37796 = state_37708;
(statearr_37739_37796[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37797 = state_37708;
state_37708 = G__37797;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__ = function(state_37708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1.call(this,state_37708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto__,jobs,results,process,async))
})();
var state__26499__auto__ = (function (){var statearr_37740 = f__26498__auto__.call(null);
(statearr_37740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto__);

return statearr_37740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto__,jobs,results,process,async))
);

return c__26497__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args37798 = [];
var len__22809__auto___37801 = arguments.length;
var i__22810__auto___37802 = (0);
while(true){
if((i__22810__auto___37802 < len__22809__auto___37801)){
args37798.push((arguments[i__22810__auto___37802]));

var G__37803 = (i__22810__auto___37802 + (1));
i__22810__auto___37802 = G__37803;
continue;
} else {
}
break;
}

var G__37800 = args37798.length;
switch (G__37800) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37798.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args37805 = [];
var len__22809__auto___37808 = arguments.length;
var i__22810__auto___37809 = (0);
while(true){
if((i__22810__auto___37809 < len__22809__auto___37808)){
args37805.push((arguments[i__22810__auto___37809]));

var G__37810 = (i__22810__auto___37809 + (1));
i__22810__auto___37809 = G__37810;
continue;
} else {
}
break;
}

var G__37807 = args37805.length;
switch (G__37807) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37805.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args37812 = [];
var len__22809__auto___37865 = arguments.length;
var i__22810__auto___37866 = (0);
while(true){
if((i__22810__auto___37866 < len__22809__auto___37865)){
args37812.push((arguments[i__22810__auto___37866]));

var G__37867 = (i__22810__auto___37866 + (1));
i__22810__auto___37866 = G__37867;
continue;
} else {
}
break;
}

var G__37814 = args37812.length;
switch (G__37814) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37812.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26497__auto___37869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___37869,tc,fc){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___37869,tc,fc){
return (function (state_37840){
var state_val_37841 = (state_37840[(1)]);
if((state_val_37841 === (7))){
var inst_37836 = (state_37840[(2)]);
var state_37840__$1 = state_37840;
var statearr_37842_37870 = state_37840__$1;
(statearr_37842_37870[(2)] = inst_37836);

(statearr_37842_37870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (1))){
var state_37840__$1 = state_37840;
var statearr_37843_37871 = state_37840__$1;
(statearr_37843_37871[(2)] = null);

(statearr_37843_37871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (4))){
var inst_37817 = (state_37840[(7)]);
var inst_37817__$1 = (state_37840[(2)]);
var inst_37818 = (inst_37817__$1 == null);
var state_37840__$1 = (function (){var statearr_37844 = state_37840;
(statearr_37844[(7)] = inst_37817__$1);

return statearr_37844;
})();
if(cljs.core.truth_(inst_37818)){
var statearr_37845_37872 = state_37840__$1;
(statearr_37845_37872[(1)] = (5));

} else {
var statearr_37846_37873 = state_37840__$1;
(statearr_37846_37873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (13))){
var state_37840__$1 = state_37840;
var statearr_37847_37874 = state_37840__$1;
(statearr_37847_37874[(2)] = null);

(statearr_37847_37874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (6))){
var inst_37817 = (state_37840[(7)]);
var inst_37823 = p.call(null,inst_37817);
var state_37840__$1 = state_37840;
if(cljs.core.truth_(inst_37823)){
var statearr_37848_37875 = state_37840__$1;
(statearr_37848_37875[(1)] = (9));

} else {
var statearr_37849_37876 = state_37840__$1;
(statearr_37849_37876[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (3))){
var inst_37838 = (state_37840[(2)]);
var state_37840__$1 = state_37840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37840__$1,inst_37838);
} else {
if((state_val_37841 === (12))){
var state_37840__$1 = state_37840;
var statearr_37850_37877 = state_37840__$1;
(statearr_37850_37877[(2)] = null);

(statearr_37850_37877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (2))){
var state_37840__$1 = state_37840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37840__$1,(4),ch);
} else {
if((state_val_37841 === (11))){
var inst_37817 = (state_37840[(7)]);
var inst_37827 = (state_37840[(2)]);
var state_37840__$1 = state_37840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37840__$1,(8),inst_37827,inst_37817);
} else {
if((state_val_37841 === (9))){
var state_37840__$1 = state_37840;
var statearr_37851_37878 = state_37840__$1;
(statearr_37851_37878[(2)] = tc);

(statearr_37851_37878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (5))){
var inst_37820 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37821 = cljs.core.async.close_BANG_.call(null,fc);
var state_37840__$1 = (function (){var statearr_37852 = state_37840;
(statearr_37852[(8)] = inst_37820);

return statearr_37852;
})();
var statearr_37853_37879 = state_37840__$1;
(statearr_37853_37879[(2)] = inst_37821);

(statearr_37853_37879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (14))){
var inst_37834 = (state_37840[(2)]);
var state_37840__$1 = state_37840;
var statearr_37854_37880 = state_37840__$1;
(statearr_37854_37880[(2)] = inst_37834);

(statearr_37854_37880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (10))){
var state_37840__$1 = state_37840;
var statearr_37855_37881 = state_37840__$1;
(statearr_37855_37881[(2)] = fc);

(statearr_37855_37881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (8))){
var inst_37829 = (state_37840[(2)]);
var state_37840__$1 = state_37840;
if(cljs.core.truth_(inst_37829)){
var statearr_37856_37882 = state_37840__$1;
(statearr_37856_37882[(1)] = (12));

} else {
var statearr_37857_37883 = state_37840__$1;
(statearr_37857_37883[(1)] = (13));

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
});})(c__26497__auto___37869,tc,fc))
;
return ((function (switch__26385__auto__,c__26497__auto___37869,tc,fc){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_37861 = [null,null,null,null,null,null,null,null,null];
(statearr_37861[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_37861[(1)] = (1));

return statearr_37861;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_37840){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_37840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e37862){if((e37862 instanceof Object)){
var ex__26389__auto__ = e37862;
var statearr_37863_37884 = state_37840;
(statearr_37863_37884[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37885 = state_37840;
state_37840 = G__37885;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_37840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_37840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___37869,tc,fc))
})();
var state__26499__auto__ = (function (){var statearr_37864 = f__26498__auto__.call(null);
(statearr_37864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___37869);

return statearr_37864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___37869,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto__){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto__){
return (function (state_37949){
var state_val_37950 = (state_37949[(1)]);
if((state_val_37950 === (7))){
var inst_37945 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
var statearr_37951_37972 = state_37949__$1;
(statearr_37951_37972[(2)] = inst_37945);

(statearr_37951_37972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (1))){
var inst_37929 = init;
var state_37949__$1 = (function (){var statearr_37952 = state_37949;
(statearr_37952[(7)] = inst_37929);

return statearr_37952;
})();
var statearr_37953_37973 = state_37949__$1;
(statearr_37953_37973[(2)] = null);

(statearr_37953_37973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (4))){
var inst_37932 = (state_37949[(8)]);
var inst_37932__$1 = (state_37949[(2)]);
var inst_37933 = (inst_37932__$1 == null);
var state_37949__$1 = (function (){var statearr_37954 = state_37949;
(statearr_37954[(8)] = inst_37932__$1);

return statearr_37954;
})();
if(cljs.core.truth_(inst_37933)){
var statearr_37955_37974 = state_37949__$1;
(statearr_37955_37974[(1)] = (5));

} else {
var statearr_37956_37975 = state_37949__$1;
(statearr_37956_37975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (6))){
var inst_37936 = (state_37949[(9)]);
var inst_37929 = (state_37949[(7)]);
var inst_37932 = (state_37949[(8)]);
var inst_37936__$1 = f.call(null,inst_37929,inst_37932);
var inst_37937 = cljs.core.reduced_QMARK_.call(null,inst_37936__$1);
var state_37949__$1 = (function (){var statearr_37957 = state_37949;
(statearr_37957[(9)] = inst_37936__$1);

return statearr_37957;
})();
if(inst_37937){
var statearr_37958_37976 = state_37949__$1;
(statearr_37958_37976[(1)] = (8));

} else {
var statearr_37959_37977 = state_37949__$1;
(statearr_37959_37977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (3))){
var inst_37947 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37949__$1,inst_37947);
} else {
if((state_val_37950 === (2))){
var state_37949__$1 = state_37949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37949__$1,(4),ch);
} else {
if((state_val_37950 === (9))){
var inst_37936 = (state_37949[(9)]);
var inst_37929 = inst_37936;
var state_37949__$1 = (function (){var statearr_37960 = state_37949;
(statearr_37960[(7)] = inst_37929);

return statearr_37960;
})();
var statearr_37961_37978 = state_37949__$1;
(statearr_37961_37978[(2)] = null);

(statearr_37961_37978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (5))){
var inst_37929 = (state_37949[(7)]);
var state_37949__$1 = state_37949;
var statearr_37962_37979 = state_37949__$1;
(statearr_37962_37979[(2)] = inst_37929);

(statearr_37962_37979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (10))){
var inst_37943 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
var statearr_37963_37980 = state_37949__$1;
(statearr_37963_37980[(2)] = inst_37943);

(statearr_37963_37980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (8))){
var inst_37936 = (state_37949[(9)]);
var inst_37939 = cljs.core.deref.call(null,inst_37936);
var state_37949__$1 = state_37949;
var statearr_37964_37981 = state_37949__$1;
(statearr_37964_37981[(2)] = inst_37939);

(statearr_37964_37981[(1)] = (10));


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
});})(c__26497__auto__))
;
return ((function (switch__26385__auto__,c__26497__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26386__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26386__auto____0 = (function (){
var statearr_37968 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37968[(0)] = cljs$core$async$reduce_$_state_machine__26386__auto__);

(statearr_37968[(1)] = (1));

return statearr_37968;
});
var cljs$core$async$reduce_$_state_machine__26386__auto____1 = (function (state_37949){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_37949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e37969){if((e37969 instanceof Object)){
var ex__26389__auto__ = e37969;
var statearr_37970_37982 = state_37949;
(statearr_37970_37982[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37983 = state_37949;
state_37949 = G__37983;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26386__auto__ = function(state_37949){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26386__auto____1.call(this,state_37949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26386__auto____0;
cljs$core$async$reduce_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26386__auto____1;
return cljs$core$async$reduce_$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto__))
})();
var state__26499__auto__ = (function (){var statearr_37971 = f__26498__auto__.call(null);
(statearr_37971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto__);

return statearr_37971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto__))
);

return c__26497__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args37984 = [];
var len__22809__auto___38036 = arguments.length;
var i__22810__auto___38037 = (0);
while(true){
if((i__22810__auto___38037 < len__22809__auto___38036)){
args37984.push((arguments[i__22810__auto___38037]));

var G__38038 = (i__22810__auto___38037 + (1));
i__22810__auto___38037 = G__38038;
continue;
} else {
}
break;
}

var G__37986 = args37984.length;
switch (G__37986) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37984.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto__){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto__){
return (function (state_38011){
var state_val_38012 = (state_38011[(1)]);
if((state_val_38012 === (7))){
var inst_37993 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
var statearr_38013_38040 = state_38011__$1;
(statearr_38013_38040[(2)] = inst_37993);

(statearr_38013_38040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (1))){
var inst_37987 = cljs.core.seq.call(null,coll);
var inst_37988 = inst_37987;
var state_38011__$1 = (function (){var statearr_38014 = state_38011;
(statearr_38014[(7)] = inst_37988);

return statearr_38014;
})();
var statearr_38015_38041 = state_38011__$1;
(statearr_38015_38041[(2)] = null);

(statearr_38015_38041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (4))){
var inst_37988 = (state_38011[(7)]);
var inst_37991 = cljs.core.first.call(null,inst_37988);
var state_38011__$1 = state_38011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38011__$1,(7),ch,inst_37991);
} else {
if((state_val_38012 === (13))){
var inst_38005 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
var statearr_38016_38042 = state_38011__$1;
(statearr_38016_38042[(2)] = inst_38005);

(statearr_38016_38042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (6))){
var inst_37996 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
if(cljs.core.truth_(inst_37996)){
var statearr_38017_38043 = state_38011__$1;
(statearr_38017_38043[(1)] = (8));

} else {
var statearr_38018_38044 = state_38011__$1;
(statearr_38018_38044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (3))){
var inst_38009 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38011__$1,inst_38009);
} else {
if((state_val_38012 === (12))){
var state_38011__$1 = state_38011;
var statearr_38019_38045 = state_38011__$1;
(statearr_38019_38045[(2)] = null);

(statearr_38019_38045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (2))){
var inst_37988 = (state_38011[(7)]);
var state_38011__$1 = state_38011;
if(cljs.core.truth_(inst_37988)){
var statearr_38020_38046 = state_38011__$1;
(statearr_38020_38046[(1)] = (4));

} else {
var statearr_38021_38047 = state_38011__$1;
(statearr_38021_38047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (11))){
var inst_38002 = cljs.core.async.close_BANG_.call(null,ch);
var state_38011__$1 = state_38011;
var statearr_38022_38048 = state_38011__$1;
(statearr_38022_38048[(2)] = inst_38002);

(statearr_38022_38048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (9))){
var state_38011__$1 = state_38011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38023_38049 = state_38011__$1;
(statearr_38023_38049[(1)] = (11));

} else {
var statearr_38024_38050 = state_38011__$1;
(statearr_38024_38050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (5))){
var inst_37988 = (state_38011[(7)]);
var state_38011__$1 = state_38011;
var statearr_38025_38051 = state_38011__$1;
(statearr_38025_38051[(2)] = inst_37988);

(statearr_38025_38051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (10))){
var inst_38007 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
var statearr_38026_38052 = state_38011__$1;
(statearr_38026_38052[(2)] = inst_38007);

(statearr_38026_38052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (8))){
var inst_37988 = (state_38011[(7)]);
var inst_37998 = cljs.core.next.call(null,inst_37988);
var inst_37988__$1 = inst_37998;
var state_38011__$1 = (function (){var statearr_38027 = state_38011;
(statearr_38027[(7)] = inst_37988__$1);

return statearr_38027;
})();
var statearr_38028_38053 = state_38011__$1;
(statearr_38028_38053[(2)] = null);

(statearr_38028_38053[(1)] = (2));


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
});})(c__26497__auto__))
;
return ((function (switch__26385__auto__,c__26497__auto__){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_38032 = [null,null,null,null,null,null,null,null];
(statearr_38032[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_38032[(1)] = (1));

return statearr_38032;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_38011){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_38011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e38033){if((e38033 instanceof Object)){
var ex__26389__auto__ = e38033;
var statearr_38034_38054 = state_38011;
(statearr_38034_38054[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38055 = state_38011;
state_38011 = G__38055;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_38011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_38011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto__))
})();
var state__26499__auto__ = (function (){var statearr_38035 = f__26498__auto__.call(null);
(statearr_38035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto__);

return statearr_38035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto__))
);

return c__26497__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22397__auto__ = (((_ == null))?null:_);
var m__22398__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,_);
} else {
var m__22398__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22397__auto__ = (((m == null))?null:m);
var m__22398__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22398__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22397__auto__ = (((m == null))?null:m);
var m__22398__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,m,ch);
} else {
var m__22398__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22397__auto__ = (((m == null))?null:m);
var m__22398__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,m);
} else {
var m__22398__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38281 = (function (mult,ch,cs,meta38282){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38282 = meta38282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38283,meta38282__$1){
var self__ = this;
var _38283__$1 = this;
return (new cljs.core.async.t_cljs$core$async38281(self__.mult,self__.ch,self__.cs,meta38282__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38283){
var self__ = this;
var _38283__$1 = this;
return self__.meta38282;
});})(cs))
;

cljs.core.async.t_cljs$core$async38281.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38281.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38281.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38281.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38281.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38281.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38282","meta38282",-788884813,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38281";

cljs.core.async.t_cljs$core$async38281.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22340__auto__,writer__22341__auto__,opt__22342__auto__){
return cljs.core._write.call(null,writer__22341__auto__,"cljs.core.async/t_cljs$core$async38281");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38281 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38281(mult__$1,ch__$1,cs__$1,meta38282){
return (new cljs.core.async.t_cljs$core$async38281(mult__$1,ch__$1,cs__$1,meta38282));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38281(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26497__auto___38506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___38506,cs,m,dchan,dctr,done){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___38506,cs,m,dchan,dctr,done){
return (function (state_38418){
var state_val_38419 = (state_38418[(1)]);
if((state_val_38419 === (7))){
var inst_38414 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
var statearr_38420_38507 = state_38418__$1;
(statearr_38420_38507[(2)] = inst_38414);

(statearr_38420_38507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (20))){
var inst_38317 = (state_38418[(7)]);
var inst_38329 = cljs.core.first.call(null,inst_38317);
var inst_38330 = cljs.core.nth.call(null,inst_38329,(0),null);
var inst_38331 = cljs.core.nth.call(null,inst_38329,(1),null);
var state_38418__$1 = (function (){var statearr_38421 = state_38418;
(statearr_38421[(8)] = inst_38330);

return statearr_38421;
})();
if(cljs.core.truth_(inst_38331)){
var statearr_38422_38508 = state_38418__$1;
(statearr_38422_38508[(1)] = (22));

} else {
var statearr_38423_38509 = state_38418__$1;
(statearr_38423_38509[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (27))){
var inst_38286 = (state_38418[(9)]);
var inst_38361 = (state_38418[(10)]);
var inst_38366 = (state_38418[(11)]);
var inst_38359 = (state_38418[(12)]);
var inst_38366__$1 = cljs.core._nth.call(null,inst_38359,inst_38361);
var inst_38367 = cljs.core.async.put_BANG_.call(null,inst_38366__$1,inst_38286,done);
var state_38418__$1 = (function (){var statearr_38424 = state_38418;
(statearr_38424[(11)] = inst_38366__$1);

return statearr_38424;
})();
if(cljs.core.truth_(inst_38367)){
var statearr_38425_38510 = state_38418__$1;
(statearr_38425_38510[(1)] = (30));

} else {
var statearr_38426_38511 = state_38418__$1;
(statearr_38426_38511[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (1))){
var state_38418__$1 = state_38418;
var statearr_38427_38512 = state_38418__$1;
(statearr_38427_38512[(2)] = null);

(statearr_38427_38512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (24))){
var inst_38317 = (state_38418[(7)]);
var inst_38336 = (state_38418[(2)]);
var inst_38337 = cljs.core.next.call(null,inst_38317);
var inst_38295 = inst_38337;
var inst_38296 = null;
var inst_38297 = (0);
var inst_38298 = (0);
var state_38418__$1 = (function (){var statearr_38428 = state_38418;
(statearr_38428[(13)] = inst_38297);

(statearr_38428[(14)] = inst_38298);

(statearr_38428[(15)] = inst_38295);

(statearr_38428[(16)] = inst_38336);

(statearr_38428[(17)] = inst_38296);

return statearr_38428;
})();
var statearr_38429_38513 = state_38418__$1;
(statearr_38429_38513[(2)] = null);

(statearr_38429_38513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (39))){
var state_38418__$1 = state_38418;
var statearr_38433_38514 = state_38418__$1;
(statearr_38433_38514[(2)] = null);

(statearr_38433_38514[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (4))){
var inst_38286 = (state_38418[(9)]);
var inst_38286__$1 = (state_38418[(2)]);
var inst_38287 = (inst_38286__$1 == null);
var state_38418__$1 = (function (){var statearr_38434 = state_38418;
(statearr_38434[(9)] = inst_38286__$1);

return statearr_38434;
})();
if(cljs.core.truth_(inst_38287)){
var statearr_38435_38515 = state_38418__$1;
(statearr_38435_38515[(1)] = (5));

} else {
var statearr_38436_38516 = state_38418__$1;
(statearr_38436_38516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (15))){
var inst_38297 = (state_38418[(13)]);
var inst_38298 = (state_38418[(14)]);
var inst_38295 = (state_38418[(15)]);
var inst_38296 = (state_38418[(17)]);
var inst_38313 = (state_38418[(2)]);
var inst_38314 = (inst_38298 + (1));
var tmp38430 = inst_38297;
var tmp38431 = inst_38295;
var tmp38432 = inst_38296;
var inst_38295__$1 = tmp38431;
var inst_38296__$1 = tmp38432;
var inst_38297__$1 = tmp38430;
var inst_38298__$1 = inst_38314;
var state_38418__$1 = (function (){var statearr_38437 = state_38418;
(statearr_38437[(13)] = inst_38297__$1);

(statearr_38437[(14)] = inst_38298__$1);

(statearr_38437[(15)] = inst_38295__$1);

(statearr_38437[(17)] = inst_38296__$1);

(statearr_38437[(18)] = inst_38313);

return statearr_38437;
})();
var statearr_38438_38517 = state_38418__$1;
(statearr_38438_38517[(2)] = null);

(statearr_38438_38517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (21))){
var inst_38340 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
var statearr_38442_38518 = state_38418__$1;
(statearr_38442_38518[(2)] = inst_38340);

(statearr_38442_38518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (31))){
var inst_38366 = (state_38418[(11)]);
var inst_38370 = done.call(null,null);
var inst_38371 = cljs.core.async.untap_STAR_.call(null,m,inst_38366);
var state_38418__$1 = (function (){var statearr_38443 = state_38418;
(statearr_38443[(19)] = inst_38370);

return statearr_38443;
})();
var statearr_38444_38519 = state_38418__$1;
(statearr_38444_38519[(2)] = inst_38371);

(statearr_38444_38519[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (32))){
var inst_38358 = (state_38418[(20)]);
var inst_38361 = (state_38418[(10)]);
var inst_38359 = (state_38418[(12)]);
var inst_38360 = (state_38418[(21)]);
var inst_38373 = (state_38418[(2)]);
var inst_38374 = (inst_38361 + (1));
var tmp38439 = inst_38358;
var tmp38440 = inst_38359;
var tmp38441 = inst_38360;
var inst_38358__$1 = tmp38439;
var inst_38359__$1 = tmp38440;
var inst_38360__$1 = tmp38441;
var inst_38361__$1 = inst_38374;
var state_38418__$1 = (function (){var statearr_38445 = state_38418;
(statearr_38445[(22)] = inst_38373);

(statearr_38445[(20)] = inst_38358__$1);

(statearr_38445[(10)] = inst_38361__$1);

(statearr_38445[(12)] = inst_38359__$1);

(statearr_38445[(21)] = inst_38360__$1);

return statearr_38445;
})();
var statearr_38446_38520 = state_38418__$1;
(statearr_38446_38520[(2)] = null);

(statearr_38446_38520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (40))){
var inst_38386 = (state_38418[(23)]);
var inst_38390 = done.call(null,null);
var inst_38391 = cljs.core.async.untap_STAR_.call(null,m,inst_38386);
var state_38418__$1 = (function (){var statearr_38447 = state_38418;
(statearr_38447[(24)] = inst_38390);

return statearr_38447;
})();
var statearr_38448_38521 = state_38418__$1;
(statearr_38448_38521[(2)] = inst_38391);

(statearr_38448_38521[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (33))){
var inst_38377 = (state_38418[(25)]);
var inst_38379 = cljs.core.chunked_seq_QMARK_.call(null,inst_38377);
var state_38418__$1 = state_38418;
if(inst_38379){
var statearr_38449_38522 = state_38418__$1;
(statearr_38449_38522[(1)] = (36));

} else {
var statearr_38450_38523 = state_38418__$1;
(statearr_38450_38523[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (13))){
var inst_38307 = (state_38418[(26)]);
var inst_38310 = cljs.core.async.close_BANG_.call(null,inst_38307);
var state_38418__$1 = state_38418;
var statearr_38451_38524 = state_38418__$1;
(statearr_38451_38524[(2)] = inst_38310);

(statearr_38451_38524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (22))){
var inst_38330 = (state_38418[(8)]);
var inst_38333 = cljs.core.async.close_BANG_.call(null,inst_38330);
var state_38418__$1 = state_38418;
var statearr_38452_38525 = state_38418__$1;
(statearr_38452_38525[(2)] = inst_38333);

(statearr_38452_38525[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (36))){
var inst_38377 = (state_38418[(25)]);
var inst_38381 = cljs.core.chunk_first.call(null,inst_38377);
var inst_38382 = cljs.core.chunk_rest.call(null,inst_38377);
var inst_38383 = cljs.core.count.call(null,inst_38381);
var inst_38358 = inst_38382;
var inst_38359 = inst_38381;
var inst_38360 = inst_38383;
var inst_38361 = (0);
var state_38418__$1 = (function (){var statearr_38453 = state_38418;
(statearr_38453[(20)] = inst_38358);

(statearr_38453[(10)] = inst_38361);

(statearr_38453[(12)] = inst_38359);

(statearr_38453[(21)] = inst_38360);

return statearr_38453;
})();
var statearr_38454_38526 = state_38418__$1;
(statearr_38454_38526[(2)] = null);

(statearr_38454_38526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (41))){
var inst_38377 = (state_38418[(25)]);
var inst_38393 = (state_38418[(2)]);
var inst_38394 = cljs.core.next.call(null,inst_38377);
var inst_38358 = inst_38394;
var inst_38359 = null;
var inst_38360 = (0);
var inst_38361 = (0);
var state_38418__$1 = (function (){var statearr_38455 = state_38418;
(statearr_38455[(27)] = inst_38393);

(statearr_38455[(20)] = inst_38358);

(statearr_38455[(10)] = inst_38361);

(statearr_38455[(12)] = inst_38359);

(statearr_38455[(21)] = inst_38360);

return statearr_38455;
})();
var statearr_38456_38527 = state_38418__$1;
(statearr_38456_38527[(2)] = null);

(statearr_38456_38527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (43))){
var state_38418__$1 = state_38418;
var statearr_38457_38528 = state_38418__$1;
(statearr_38457_38528[(2)] = null);

(statearr_38457_38528[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (29))){
var inst_38402 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
var statearr_38458_38529 = state_38418__$1;
(statearr_38458_38529[(2)] = inst_38402);

(statearr_38458_38529[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (44))){
var inst_38411 = (state_38418[(2)]);
var state_38418__$1 = (function (){var statearr_38459 = state_38418;
(statearr_38459[(28)] = inst_38411);

return statearr_38459;
})();
var statearr_38460_38530 = state_38418__$1;
(statearr_38460_38530[(2)] = null);

(statearr_38460_38530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (6))){
var inst_38350 = (state_38418[(29)]);
var inst_38349 = cljs.core.deref.call(null,cs);
var inst_38350__$1 = cljs.core.keys.call(null,inst_38349);
var inst_38351 = cljs.core.count.call(null,inst_38350__$1);
var inst_38352 = cljs.core.reset_BANG_.call(null,dctr,inst_38351);
var inst_38357 = cljs.core.seq.call(null,inst_38350__$1);
var inst_38358 = inst_38357;
var inst_38359 = null;
var inst_38360 = (0);
var inst_38361 = (0);
var state_38418__$1 = (function (){var statearr_38461 = state_38418;
(statearr_38461[(29)] = inst_38350__$1);

(statearr_38461[(20)] = inst_38358);

(statearr_38461[(30)] = inst_38352);

(statearr_38461[(10)] = inst_38361);

(statearr_38461[(12)] = inst_38359);

(statearr_38461[(21)] = inst_38360);

return statearr_38461;
})();
var statearr_38462_38531 = state_38418__$1;
(statearr_38462_38531[(2)] = null);

(statearr_38462_38531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (28))){
var inst_38358 = (state_38418[(20)]);
var inst_38377 = (state_38418[(25)]);
var inst_38377__$1 = cljs.core.seq.call(null,inst_38358);
var state_38418__$1 = (function (){var statearr_38463 = state_38418;
(statearr_38463[(25)] = inst_38377__$1);

return statearr_38463;
})();
if(inst_38377__$1){
var statearr_38464_38532 = state_38418__$1;
(statearr_38464_38532[(1)] = (33));

} else {
var statearr_38465_38533 = state_38418__$1;
(statearr_38465_38533[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (25))){
var inst_38361 = (state_38418[(10)]);
var inst_38360 = (state_38418[(21)]);
var inst_38363 = (inst_38361 < inst_38360);
var inst_38364 = inst_38363;
var state_38418__$1 = state_38418;
if(cljs.core.truth_(inst_38364)){
var statearr_38466_38534 = state_38418__$1;
(statearr_38466_38534[(1)] = (27));

} else {
var statearr_38467_38535 = state_38418__$1;
(statearr_38467_38535[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (34))){
var state_38418__$1 = state_38418;
var statearr_38468_38536 = state_38418__$1;
(statearr_38468_38536[(2)] = null);

(statearr_38468_38536[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (17))){
var state_38418__$1 = state_38418;
var statearr_38469_38537 = state_38418__$1;
(statearr_38469_38537[(2)] = null);

(statearr_38469_38537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (3))){
var inst_38416 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38418__$1,inst_38416);
} else {
if((state_val_38419 === (12))){
var inst_38345 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
var statearr_38470_38538 = state_38418__$1;
(statearr_38470_38538[(2)] = inst_38345);

(statearr_38470_38538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (2))){
var state_38418__$1 = state_38418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38418__$1,(4),ch);
} else {
if((state_val_38419 === (23))){
var state_38418__$1 = state_38418;
var statearr_38471_38539 = state_38418__$1;
(statearr_38471_38539[(2)] = null);

(statearr_38471_38539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (35))){
var inst_38400 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
var statearr_38472_38540 = state_38418__$1;
(statearr_38472_38540[(2)] = inst_38400);

(statearr_38472_38540[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (19))){
var inst_38317 = (state_38418[(7)]);
var inst_38321 = cljs.core.chunk_first.call(null,inst_38317);
var inst_38322 = cljs.core.chunk_rest.call(null,inst_38317);
var inst_38323 = cljs.core.count.call(null,inst_38321);
var inst_38295 = inst_38322;
var inst_38296 = inst_38321;
var inst_38297 = inst_38323;
var inst_38298 = (0);
var state_38418__$1 = (function (){var statearr_38473 = state_38418;
(statearr_38473[(13)] = inst_38297);

(statearr_38473[(14)] = inst_38298);

(statearr_38473[(15)] = inst_38295);

(statearr_38473[(17)] = inst_38296);

return statearr_38473;
})();
var statearr_38474_38541 = state_38418__$1;
(statearr_38474_38541[(2)] = null);

(statearr_38474_38541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (11))){
var inst_38295 = (state_38418[(15)]);
var inst_38317 = (state_38418[(7)]);
var inst_38317__$1 = cljs.core.seq.call(null,inst_38295);
var state_38418__$1 = (function (){var statearr_38475 = state_38418;
(statearr_38475[(7)] = inst_38317__$1);

return statearr_38475;
})();
if(inst_38317__$1){
var statearr_38476_38542 = state_38418__$1;
(statearr_38476_38542[(1)] = (16));

} else {
var statearr_38477_38543 = state_38418__$1;
(statearr_38477_38543[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (9))){
var inst_38347 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
var statearr_38478_38544 = state_38418__$1;
(statearr_38478_38544[(2)] = inst_38347);

(statearr_38478_38544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (5))){
var inst_38293 = cljs.core.deref.call(null,cs);
var inst_38294 = cljs.core.seq.call(null,inst_38293);
var inst_38295 = inst_38294;
var inst_38296 = null;
var inst_38297 = (0);
var inst_38298 = (0);
var state_38418__$1 = (function (){var statearr_38479 = state_38418;
(statearr_38479[(13)] = inst_38297);

(statearr_38479[(14)] = inst_38298);

(statearr_38479[(15)] = inst_38295);

(statearr_38479[(17)] = inst_38296);

return statearr_38479;
})();
var statearr_38480_38545 = state_38418__$1;
(statearr_38480_38545[(2)] = null);

(statearr_38480_38545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (14))){
var state_38418__$1 = state_38418;
var statearr_38481_38546 = state_38418__$1;
(statearr_38481_38546[(2)] = null);

(statearr_38481_38546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (45))){
var inst_38408 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
var statearr_38482_38547 = state_38418__$1;
(statearr_38482_38547[(2)] = inst_38408);

(statearr_38482_38547[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (26))){
var inst_38350 = (state_38418[(29)]);
var inst_38404 = (state_38418[(2)]);
var inst_38405 = cljs.core.seq.call(null,inst_38350);
var state_38418__$1 = (function (){var statearr_38483 = state_38418;
(statearr_38483[(31)] = inst_38404);

return statearr_38483;
})();
if(inst_38405){
var statearr_38484_38548 = state_38418__$1;
(statearr_38484_38548[(1)] = (42));

} else {
var statearr_38485_38549 = state_38418__$1;
(statearr_38485_38549[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (16))){
var inst_38317 = (state_38418[(7)]);
var inst_38319 = cljs.core.chunked_seq_QMARK_.call(null,inst_38317);
var state_38418__$1 = state_38418;
if(inst_38319){
var statearr_38486_38550 = state_38418__$1;
(statearr_38486_38550[(1)] = (19));

} else {
var statearr_38487_38551 = state_38418__$1;
(statearr_38487_38551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (38))){
var inst_38397 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
var statearr_38488_38552 = state_38418__$1;
(statearr_38488_38552[(2)] = inst_38397);

(statearr_38488_38552[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (30))){
var state_38418__$1 = state_38418;
var statearr_38489_38553 = state_38418__$1;
(statearr_38489_38553[(2)] = null);

(statearr_38489_38553[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (10))){
var inst_38298 = (state_38418[(14)]);
var inst_38296 = (state_38418[(17)]);
var inst_38306 = cljs.core._nth.call(null,inst_38296,inst_38298);
var inst_38307 = cljs.core.nth.call(null,inst_38306,(0),null);
var inst_38308 = cljs.core.nth.call(null,inst_38306,(1),null);
var state_38418__$1 = (function (){var statearr_38490 = state_38418;
(statearr_38490[(26)] = inst_38307);

return statearr_38490;
})();
if(cljs.core.truth_(inst_38308)){
var statearr_38491_38554 = state_38418__$1;
(statearr_38491_38554[(1)] = (13));

} else {
var statearr_38492_38555 = state_38418__$1;
(statearr_38492_38555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (18))){
var inst_38343 = (state_38418[(2)]);
var state_38418__$1 = state_38418;
var statearr_38493_38556 = state_38418__$1;
(statearr_38493_38556[(2)] = inst_38343);

(statearr_38493_38556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (42))){
var state_38418__$1 = state_38418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38418__$1,(45),dchan);
} else {
if((state_val_38419 === (37))){
var inst_38286 = (state_38418[(9)]);
var inst_38386 = (state_38418[(23)]);
var inst_38377 = (state_38418[(25)]);
var inst_38386__$1 = cljs.core.first.call(null,inst_38377);
var inst_38387 = cljs.core.async.put_BANG_.call(null,inst_38386__$1,inst_38286,done);
var state_38418__$1 = (function (){var statearr_38494 = state_38418;
(statearr_38494[(23)] = inst_38386__$1);

return statearr_38494;
})();
if(cljs.core.truth_(inst_38387)){
var statearr_38495_38557 = state_38418__$1;
(statearr_38495_38557[(1)] = (39));

} else {
var statearr_38496_38558 = state_38418__$1;
(statearr_38496_38558[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38419 === (8))){
var inst_38297 = (state_38418[(13)]);
var inst_38298 = (state_38418[(14)]);
var inst_38300 = (inst_38298 < inst_38297);
var inst_38301 = inst_38300;
var state_38418__$1 = state_38418;
if(cljs.core.truth_(inst_38301)){
var statearr_38497_38559 = state_38418__$1;
(statearr_38497_38559[(1)] = (10));

} else {
var statearr_38498_38560 = state_38418__$1;
(statearr_38498_38560[(1)] = (11));

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
});})(c__26497__auto___38506,cs,m,dchan,dctr,done))
;
return ((function (switch__26385__auto__,c__26497__auto___38506,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26386__auto__ = null;
var cljs$core$async$mult_$_state_machine__26386__auto____0 = (function (){
var statearr_38502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38502[(0)] = cljs$core$async$mult_$_state_machine__26386__auto__);

(statearr_38502[(1)] = (1));

return statearr_38502;
});
var cljs$core$async$mult_$_state_machine__26386__auto____1 = (function (state_38418){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_38418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e38503){if((e38503 instanceof Object)){
var ex__26389__auto__ = e38503;
var statearr_38504_38561 = state_38418;
(statearr_38504_38561[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38562 = state_38418;
state_38418 = G__38562;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26386__auto__ = function(state_38418){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26386__auto____1.call(this,state_38418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26386__auto____0;
cljs$core$async$mult_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26386__auto____1;
return cljs$core$async$mult_$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___38506,cs,m,dchan,dctr,done))
})();
var state__26499__auto__ = (function (){var statearr_38505 = f__26498__auto__.call(null);
(statearr_38505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___38506);

return statearr_38505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___38506,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args38563 = [];
var len__22809__auto___38566 = arguments.length;
var i__22810__auto___38567 = (0);
while(true){
if((i__22810__auto___38567 < len__22809__auto___38566)){
args38563.push((arguments[i__22810__auto___38567]));

var G__38568 = (i__22810__auto___38567 + (1));
i__22810__auto___38567 = G__38568;
continue;
} else {
}
break;
}

var G__38565 = args38563.length;
switch (G__38565) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38563.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22397__auto__ = (((m == null))?null:m);
var m__22398__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,m,ch);
} else {
var m__22398__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22397__auto__ = (((m == null))?null:m);
var m__22398__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,m,ch);
} else {
var m__22398__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22397__auto__ = (((m == null))?null:m);
var m__22398__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,m);
} else {
var m__22398__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22397__auto__ = (((m == null))?null:m);
var m__22398__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,m,state_map);
} else {
var m__22398__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22397__auto__ = (((m == null))?null:m);
var m__22398__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,m,mode);
} else {
var m__22398__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22816__auto__ = [];
var len__22809__auto___38580 = arguments.length;
var i__22810__auto___38581 = (0);
while(true){
if((i__22810__auto___38581 < len__22809__auto___38580)){
args__22816__auto__.push((arguments[i__22810__auto___38581]));

var G__38582 = (i__22810__auto___38581 + (1));
i__22810__auto___38581 = G__38582;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((3) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38574){
var map__38575 = p__38574;
var map__38575__$1 = ((((!((map__38575 == null)))?((((map__38575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38575):map__38575);
var opts = map__38575__$1;
var statearr_38577_38583 = state;
(statearr_38577_38583[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38575,map__38575__$1,opts){
return (function (val){
var statearr_38578_38584 = state;
(statearr_38578_38584[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38575,map__38575__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38579_38585 = state;
(statearr_38579_38585[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38570){
var G__38571 = cljs.core.first.call(null,seq38570);
var seq38570__$1 = cljs.core.next.call(null,seq38570);
var G__38572 = cljs.core.first.call(null,seq38570__$1);
var seq38570__$2 = cljs.core.next.call(null,seq38570__$1);
var G__38573 = cljs.core.first.call(null,seq38570__$2);
var seq38570__$3 = cljs.core.next.call(null,seq38570__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38571,G__38572,G__38573,seq38570__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38751 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38752){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38752 = meta38752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38753,meta38752__$1){
var self__ = this;
var _38753__$1 = this;
return (new cljs.core.async.t_cljs$core$async38751(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38752__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38753){
var self__ = this;
var _38753__$1 = this;
return self__.meta38752;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38751.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38751.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async38751.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38751.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38751.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38751.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38751.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38751.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38752","meta38752",-54194216,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38751";

cljs.core.async.t_cljs$core$async38751.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22340__auto__,writer__22341__auto__,opt__22342__auto__){
return cljs.core._write.call(null,writer__22341__auto__,"cljs.core.async/t_cljs$core$async38751");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38751 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38751(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38752){
return (new cljs.core.async.t_cljs$core$async38751(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38752));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38751(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26497__auto___38916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___38916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___38916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38853){
var state_val_38854 = (state_38853[(1)]);
if((state_val_38854 === (7))){
var inst_38769 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
var statearr_38855_38917 = state_38853__$1;
(statearr_38855_38917[(2)] = inst_38769);

(statearr_38855_38917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (20))){
var inst_38781 = (state_38853[(7)]);
var state_38853__$1 = state_38853;
var statearr_38856_38918 = state_38853__$1;
(statearr_38856_38918[(2)] = inst_38781);

(statearr_38856_38918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (27))){
var state_38853__$1 = state_38853;
var statearr_38857_38919 = state_38853__$1;
(statearr_38857_38919[(2)] = null);

(statearr_38857_38919[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (1))){
var inst_38757 = (state_38853[(8)]);
var inst_38757__$1 = calc_state.call(null);
var inst_38759 = (inst_38757__$1 == null);
var inst_38760 = cljs.core.not.call(null,inst_38759);
var state_38853__$1 = (function (){var statearr_38858 = state_38853;
(statearr_38858[(8)] = inst_38757__$1);

return statearr_38858;
})();
if(inst_38760){
var statearr_38859_38920 = state_38853__$1;
(statearr_38859_38920[(1)] = (2));

} else {
var statearr_38860_38921 = state_38853__$1;
(statearr_38860_38921[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (24))){
var inst_38813 = (state_38853[(9)]);
var inst_38827 = (state_38853[(10)]);
var inst_38804 = (state_38853[(11)]);
var inst_38827__$1 = inst_38804.call(null,inst_38813);
var state_38853__$1 = (function (){var statearr_38861 = state_38853;
(statearr_38861[(10)] = inst_38827__$1);

return statearr_38861;
})();
if(cljs.core.truth_(inst_38827__$1)){
var statearr_38862_38922 = state_38853__$1;
(statearr_38862_38922[(1)] = (29));

} else {
var statearr_38863_38923 = state_38853__$1;
(statearr_38863_38923[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (4))){
var inst_38772 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
if(cljs.core.truth_(inst_38772)){
var statearr_38864_38924 = state_38853__$1;
(statearr_38864_38924[(1)] = (8));

} else {
var statearr_38865_38925 = state_38853__$1;
(statearr_38865_38925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (15))){
var inst_38798 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
if(cljs.core.truth_(inst_38798)){
var statearr_38866_38926 = state_38853__$1;
(statearr_38866_38926[(1)] = (19));

} else {
var statearr_38867_38927 = state_38853__$1;
(statearr_38867_38927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (21))){
var inst_38803 = (state_38853[(12)]);
var inst_38803__$1 = (state_38853[(2)]);
var inst_38804 = cljs.core.get.call(null,inst_38803__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38805 = cljs.core.get.call(null,inst_38803__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38806 = cljs.core.get.call(null,inst_38803__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38853__$1 = (function (){var statearr_38868 = state_38853;
(statearr_38868[(11)] = inst_38804);

(statearr_38868[(13)] = inst_38805);

(statearr_38868[(12)] = inst_38803__$1);

return statearr_38868;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38853__$1,(22),inst_38806);
} else {
if((state_val_38854 === (31))){
var inst_38835 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
if(cljs.core.truth_(inst_38835)){
var statearr_38869_38928 = state_38853__$1;
(statearr_38869_38928[(1)] = (32));

} else {
var statearr_38870_38929 = state_38853__$1;
(statearr_38870_38929[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (32))){
var inst_38812 = (state_38853[(14)]);
var state_38853__$1 = state_38853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38853__$1,(35),out,inst_38812);
} else {
if((state_val_38854 === (33))){
var inst_38803 = (state_38853[(12)]);
var inst_38781 = inst_38803;
var state_38853__$1 = (function (){var statearr_38871 = state_38853;
(statearr_38871[(7)] = inst_38781);

return statearr_38871;
})();
var statearr_38872_38930 = state_38853__$1;
(statearr_38872_38930[(2)] = null);

(statearr_38872_38930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (13))){
var inst_38781 = (state_38853[(7)]);
var inst_38788 = inst_38781.cljs$lang$protocol_mask$partition0$;
var inst_38789 = (inst_38788 & (64));
var inst_38790 = inst_38781.cljs$core$ISeq$;
var inst_38791 = (inst_38789) || (inst_38790);
var state_38853__$1 = state_38853;
if(cljs.core.truth_(inst_38791)){
var statearr_38873_38931 = state_38853__$1;
(statearr_38873_38931[(1)] = (16));

} else {
var statearr_38874_38932 = state_38853__$1;
(statearr_38874_38932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (22))){
var inst_38813 = (state_38853[(9)]);
var inst_38812 = (state_38853[(14)]);
var inst_38811 = (state_38853[(2)]);
var inst_38812__$1 = cljs.core.nth.call(null,inst_38811,(0),null);
var inst_38813__$1 = cljs.core.nth.call(null,inst_38811,(1),null);
var inst_38814 = (inst_38812__$1 == null);
var inst_38815 = cljs.core._EQ_.call(null,inst_38813__$1,change);
var inst_38816 = (inst_38814) || (inst_38815);
var state_38853__$1 = (function (){var statearr_38875 = state_38853;
(statearr_38875[(9)] = inst_38813__$1);

(statearr_38875[(14)] = inst_38812__$1);

return statearr_38875;
})();
if(cljs.core.truth_(inst_38816)){
var statearr_38876_38933 = state_38853__$1;
(statearr_38876_38933[(1)] = (23));

} else {
var statearr_38877_38934 = state_38853__$1;
(statearr_38877_38934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (36))){
var inst_38803 = (state_38853[(12)]);
var inst_38781 = inst_38803;
var state_38853__$1 = (function (){var statearr_38878 = state_38853;
(statearr_38878[(7)] = inst_38781);

return statearr_38878;
})();
var statearr_38879_38935 = state_38853__$1;
(statearr_38879_38935[(2)] = null);

(statearr_38879_38935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (29))){
var inst_38827 = (state_38853[(10)]);
var state_38853__$1 = state_38853;
var statearr_38880_38936 = state_38853__$1;
(statearr_38880_38936[(2)] = inst_38827);

(statearr_38880_38936[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (6))){
var state_38853__$1 = state_38853;
var statearr_38881_38937 = state_38853__$1;
(statearr_38881_38937[(2)] = false);

(statearr_38881_38937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (28))){
var inst_38823 = (state_38853[(2)]);
var inst_38824 = calc_state.call(null);
var inst_38781 = inst_38824;
var state_38853__$1 = (function (){var statearr_38882 = state_38853;
(statearr_38882[(15)] = inst_38823);

(statearr_38882[(7)] = inst_38781);

return statearr_38882;
})();
var statearr_38883_38938 = state_38853__$1;
(statearr_38883_38938[(2)] = null);

(statearr_38883_38938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (25))){
var inst_38849 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
var statearr_38884_38939 = state_38853__$1;
(statearr_38884_38939[(2)] = inst_38849);

(statearr_38884_38939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (34))){
var inst_38847 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
var statearr_38885_38940 = state_38853__$1;
(statearr_38885_38940[(2)] = inst_38847);

(statearr_38885_38940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (17))){
var state_38853__$1 = state_38853;
var statearr_38886_38941 = state_38853__$1;
(statearr_38886_38941[(2)] = false);

(statearr_38886_38941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (3))){
var state_38853__$1 = state_38853;
var statearr_38887_38942 = state_38853__$1;
(statearr_38887_38942[(2)] = false);

(statearr_38887_38942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (12))){
var inst_38851 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38853__$1,inst_38851);
} else {
if((state_val_38854 === (2))){
var inst_38757 = (state_38853[(8)]);
var inst_38762 = inst_38757.cljs$lang$protocol_mask$partition0$;
var inst_38763 = (inst_38762 & (64));
var inst_38764 = inst_38757.cljs$core$ISeq$;
var inst_38765 = (inst_38763) || (inst_38764);
var state_38853__$1 = state_38853;
if(cljs.core.truth_(inst_38765)){
var statearr_38888_38943 = state_38853__$1;
(statearr_38888_38943[(1)] = (5));

} else {
var statearr_38889_38944 = state_38853__$1;
(statearr_38889_38944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (23))){
var inst_38812 = (state_38853[(14)]);
var inst_38818 = (inst_38812 == null);
var state_38853__$1 = state_38853;
if(cljs.core.truth_(inst_38818)){
var statearr_38890_38945 = state_38853__$1;
(statearr_38890_38945[(1)] = (26));

} else {
var statearr_38891_38946 = state_38853__$1;
(statearr_38891_38946[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (35))){
var inst_38838 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
if(cljs.core.truth_(inst_38838)){
var statearr_38892_38947 = state_38853__$1;
(statearr_38892_38947[(1)] = (36));

} else {
var statearr_38893_38948 = state_38853__$1;
(statearr_38893_38948[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (19))){
var inst_38781 = (state_38853[(7)]);
var inst_38800 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38781);
var state_38853__$1 = state_38853;
var statearr_38894_38949 = state_38853__$1;
(statearr_38894_38949[(2)] = inst_38800);

(statearr_38894_38949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (11))){
var inst_38781 = (state_38853[(7)]);
var inst_38785 = (inst_38781 == null);
var inst_38786 = cljs.core.not.call(null,inst_38785);
var state_38853__$1 = state_38853;
if(inst_38786){
var statearr_38895_38950 = state_38853__$1;
(statearr_38895_38950[(1)] = (13));

} else {
var statearr_38896_38951 = state_38853__$1;
(statearr_38896_38951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (9))){
var inst_38757 = (state_38853[(8)]);
var state_38853__$1 = state_38853;
var statearr_38897_38952 = state_38853__$1;
(statearr_38897_38952[(2)] = inst_38757);

(statearr_38897_38952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (5))){
var state_38853__$1 = state_38853;
var statearr_38898_38953 = state_38853__$1;
(statearr_38898_38953[(2)] = true);

(statearr_38898_38953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (14))){
var state_38853__$1 = state_38853;
var statearr_38899_38954 = state_38853__$1;
(statearr_38899_38954[(2)] = false);

(statearr_38899_38954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (26))){
var inst_38813 = (state_38853[(9)]);
var inst_38820 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38813);
var state_38853__$1 = state_38853;
var statearr_38900_38955 = state_38853__$1;
(statearr_38900_38955[(2)] = inst_38820);

(statearr_38900_38955[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (16))){
var state_38853__$1 = state_38853;
var statearr_38901_38956 = state_38853__$1;
(statearr_38901_38956[(2)] = true);

(statearr_38901_38956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (38))){
var inst_38843 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
var statearr_38902_38957 = state_38853__$1;
(statearr_38902_38957[(2)] = inst_38843);

(statearr_38902_38957[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (30))){
var inst_38813 = (state_38853[(9)]);
var inst_38804 = (state_38853[(11)]);
var inst_38805 = (state_38853[(13)]);
var inst_38830 = cljs.core.empty_QMARK_.call(null,inst_38804);
var inst_38831 = inst_38805.call(null,inst_38813);
var inst_38832 = cljs.core.not.call(null,inst_38831);
var inst_38833 = (inst_38830) && (inst_38832);
var state_38853__$1 = state_38853;
var statearr_38903_38958 = state_38853__$1;
(statearr_38903_38958[(2)] = inst_38833);

(statearr_38903_38958[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (10))){
var inst_38757 = (state_38853[(8)]);
var inst_38777 = (state_38853[(2)]);
var inst_38778 = cljs.core.get.call(null,inst_38777,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38779 = cljs.core.get.call(null,inst_38777,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38780 = cljs.core.get.call(null,inst_38777,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38781 = inst_38757;
var state_38853__$1 = (function (){var statearr_38904 = state_38853;
(statearr_38904[(16)] = inst_38778);

(statearr_38904[(17)] = inst_38780);

(statearr_38904[(18)] = inst_38779);

(statearr_38904[(7)] = inst_38781);

return statearr_38904;
})();
var statearr_38905_38959 = state_38853__$1;
(statearr_38905_38959[(2)] = null);

(statearr_38905_38959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (18))){
var inst_38795 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
var statearr_38906_38960 = state_38853__$1;
(statearr_38906_38960[(2)] = inst_38795);

(statearr_38906_38960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (37))){
var state_38853__$1 = state_38853;
var statearr_38907_38961 = state_38853__$1;
(statearr_38907_38961[(2)] = null);

(statearr_38907_38961[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (8))){
var inst_38757 = (state_38853[(8)]);
var inst_38774 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38757);
var state_38853__$1 = state_38853;
var statearr_38908_38962 = state_38853__$1;
(statearr_38908_38962[(2)] = inst_38774);

(statearr_38908_38962[(1)] = (10));


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
});})(c__26497__auto___38916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26385__auto__,c__26497__auto___38916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26386__auto__ = null;
var cljs$core$async$mix_$_state_machine__26386__auto____0 = (function (){
var statearr_38912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38912[(0)] = cljs$core$async$mix_$_state_machine__26386__auto__);

(statearr_38912[(1)] = (1));

return statearr_38912;
});
var cljs$core$async$mix_$_state_machine__26386__auto____1 = (function (state_38853){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_38853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e38913){if((e38913 instanceof Object)){
var ex__26389__auto__ = e38913;
var statearr_38914_38963 = state_38853;
(statearr_38914_38963[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38964 = state_38853;
state_38853 = G__38964;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26386__auto__ = function(state_38853){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26386__auto____1.call(this,state_38853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26386__auto____0;
cljs$core$async$mix_$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26386__auto____1;
return cljs$core$async$mix_$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___38916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26499__auto__ = (function (){var statearr_38915 = f__26498__auto__.call(null);
(statearr_38915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___38916);

return statearr_38915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___38916,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22397__auto__ = (((p == null))?null:p);
var m__22398__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22398__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22397__auto__ = (((p == null))?null:p);
var m__22398__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,p,v,ch);
} else {
var m__22398__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38965 = [];
var len__22809__auto___38968 = arguments.length;
var i__22810__auto___38969 = (0);
while(true){
if((i__22810__auto___38969 < len__22809__auto___38968)){
args38965.push((arguments[i__22810__auto___38969]));

var G__38970 = (i__22810__auto___38969 + (1));
i__22810__auto___38969 = G__38970;
continue;
} else {
}
break;
}

var G__38967 = args38965.length;
switch (G__38967) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38965.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22397__auto__ = (((p == null))?null:p);
var m__22398__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,p);
} else {
var m__22398__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22397__auto__ = (((p == null))?null:p);
var m__22398__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22397__auto__)]);
if(!((m__22398__auto__ == null))){
return m__22398__auto__.call(null,p,v);
} else {
var m__22398__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22398__auto____$1 == null))){
return m__22398__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args38973 = [];
var len__22809__auto___39098 = arguments.length;
var i__22810__auto___39099 = (0);
while(true){
if((i__22810__auto___39099 < len__22809__auto___39098)){
args38973.push((arguments[i__22810__auto___39099]));

var G__39100 = (i__22810__auto___39099 + (1));
i__22810__auto___39099 = G__39100;
continue;
} else {
}
break;
}

var G__38975 = args38973.length;
switch (G__38975) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38973.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21734__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21734__auto__,mults){
return (function (p1__38972_SHARP_){
if(cljs.core.truth_(p1__38972_SHARP_.call(null,topic))){
return p1__38972_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38972_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21734__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38976 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38977){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38977 = meta38977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38978,meta38977__$1){
var self__ = this;
var _38978__$1 = this;
return (new cljs.core.async.t_cljs$core$async38976(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38977__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38978){
var self__ = this;
var _38978__$1 = this;
return self__.meta38977;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38976.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38976.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38976.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38976.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38976.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38977","meta38977",106118831,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38976";

cljs.core.async.t_cljs$core$async38976.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22340__auto__,writer__22341__auto__,opt__22342__auto__){
return cljs.core._write.call(null,writer__22341__auto__,"cljs.core.async/t_cljs$core$async38976");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38976 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38977){
return (new cljs.core.async.t_cljs$core$async38976(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38977));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38976(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26497__auto___39102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___39102,mults,ensure_mult,p){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___39102,mults,ensure_mult,p){
return (function (state_39050){
var state_val_39051 = (state_39050[(1)]);
if((state_val_39051 === (7))){
var inst_39046 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39052_39103 = state_39050__$1;
(statearr_39052_39103[(2)] = inst_39046);

(statearr_39052_39103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (20))){
var state_39050__$1 = state_39050;
var statearr_39053_39104 = state_39050__$1;
(statearr_39053_39104[(2)] = null);

(statearr_39053_39104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (1))){
var state_39050__$1 = state_39050;
var statearr_39054_39105 = state_39050__$1;
(statearr_39054_39105[(2)] = null);

(statearr_39054_39105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (24))){
var inst_39029 = (state_39050[(7)]);
var inst_39038 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39029);
var state_39050__$1 = state_39050;
var statearr_39055_39106 = state_39050__$1;
(statearr_39055_39106[(2)] = inst_39038);

(statearr_39055_39106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (4))){
var inst_38981 = (state_39050[(8)]);
var inst_38981__$1 = (state_39050[(2)]);
var inst_38982 = (inst_38981__$1 == null);
var state_39050__$1 = (function (){var statearr_39056 = state_39050;
(statearr_39056[(8)] = inst_38981__$1);

return statearr_39056;
})();
if(cljs.core.truth_(inst_38982)){
var statearr_39057_39107 = state_39050__$1;
(statearr_39057_39107[(1)] = (5));

} else {
var statearr_39058_39108 = state_39050__$1;
(statearr_39058_39108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (15))){
var inst_39023 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39059_39109 = state_39050__$1;
(statearr_39059_39109[(2)] = inst_39023);

(statearr_39059_39109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (21))){
var inst_39043 = (state_39050[(2)]);
var state_39050__$1 = (function (){var statearr_39060 = state_39050;
(statearr_39060[(9)] = inst_39043);

return statearr_39060;
})();
var statearr_39061_39110 = state_39050__$1;
(statearr_39061_39110[(2)] = null);

(statearr_39061_39110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (13))){
var inst_39005 = (state_39050[(10)]);
var inst_39007 = cljs.core.chunked_seq_QMARK_.call(null,inst_39005);
var state_39050__$1 = state_39050;
if(inst_39007){
var statearr_39062_39111 = state_39050__$1;
(statearr_39062_39111[(1)] = (16));

} else {
var statearr_39063_39112 = state_39050__$1;
(statearr_39063_39112[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (22))){
var inst_39035 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
if(cljs.core.truth_(inst_39035)){
var statearr_39064_39113 = state_39050__$1;
(statearr_39064_39113[(1)] = (23));

} else {
var statearr_39065_39114 = state_39050__$1;
(statearr_39065_39114[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (6))){
var inst_39031 = (state_39050[(11)]);
var inst_39029 = (state_39050[(7)]);
var inst_38981 = (state_39050[(8)]);
var inst_39029__$1 = topic_fn.call(null,inst_38981);
var inst_39030 = cljs.core.deref.call(null,mults);
var inst_39031__$1 = cljs.core.get.call(null,inst_39030,inst_39029__$1);
var state_39050__$1 = (function (){var statearr_39066 = state_39050;
(statearr_39066[(11)] = inst_39031__$1);

(statearr_39066[(7)] = inst_39029__$1);

return statearr_39066;
})();
if(cljs.core.truth_(inst_39031__$1)){
var statearr_39067_39115 = state_39050__$1;
(statearr_39067_39115[(1)] = (19));

} else {
var statearr_39068_39116 = state_39050__$1;
(statearr_39068_39116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (25))){
var inst_39040 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39069_39117 = state_39050__$1;
(statearr_39069_39117[(2)] = inst_39040);

(statearr_39069_39117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (17))){
var inst_39005 = (state_39050[(10)]);
var inst_39014 = cljs.core.first.call(null,inst_39005);
var inst_39015 = cljs.core.async.muxch_STAR_.call(null,inst_39014);
var inst_39016 = cljs.core.async.close_BANG_.call(null,inst_39015);
var inst_39017 = cljs.core.next.call(null,inst_39005);
var inst_38991 = inst_39017;
var inst_38992 = null;
var inst_38993 = (0);
var inst_38994 = (0);
var state_39050__$1 = (function (){var statearr_39070 = state_39050;
(statearr_39070[(12)] = inst_38993);

(statearr_39070[(13)] = inst_38992);

(statearr_39070[(14)] = inst_38991);

(statearr_39070[(15)] = inst_38994);

(statearr_39070[(16)] = inst_39016);

return statearr_39070;
})();
var statearr_39071_39118 = state_39050__$1;
(statearr_39071_39118[(2)] = null);

(statearr_39071_39118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (3))){
var inst_39048 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39050__$1,inst_39048);
} else {
if((state_val_39051 === (12))){
var inst_39025 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39072_39119 = state_39050__$1;
(statearr_39072_39119[(2)] = inst_39025);

(statearr_39072_39119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (2))){
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39050__$1,(4),ch);
} else {
if((state_val_39051 === (23))){
var state_39050__$1 = state_39050;
var statearr_39073_39120 = state_39050__$1;
(statearr_39073_39120[(2)] = null);

(statearr_39073_39120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (19))){
var inst_39031 = (state_39050[(11)]);
var inst_38981 = (state_39050[(8)]);
var inst_39033 = cljs.core.async.muxch_STAR_.call(null,inst_39031);
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39050__$1,(22),inst_39033,inst_38981);
} else {
if((state_val_39051 === (11))){
var inst_39005 = (state_39050[(10)]);
var inst_38991 = (state_39050[(14)]);
var inst_39005__$1 = cljs.core.seq.call(null,inst_38991);
var state_39050__$1 = (function (){var statearr_39074 = state_39050;
(statearr_39074[(10)] = inst_39005__$1);

return statearr_39074;
})();
if(inst_39005__$1){
var statearr_39075_39121 = state_39050__$1;
(statearr_39075_39121[(1)] = (13));

} else {
var statearr_39076_39122 = state_39050__$1;
(statearr_39076_39122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (9))){
var inst_39027 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39077_39123 = state_39050__$1;
(statearr_39077_39123[(2)] = inst_39027);

(statearr_39077_39123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (5))){
var inst_38988 = cljs.core.deref.call(null,mults);
var inst_38989 = cljs.core.vals.call(null,inst_38988);
var inst_38990 = cljs.core.seq.call(null,inst_38989);
var inst_38991 = inst_38990;
var inst_38992 = null;
var inst_38993 = (0);
var inst_38994 = (0);
var state_39050__$1 = (function (){var statearr_39078 = state_39050;
(statearr_39078[(12)] = inst_38993);

(statearr_39078[(13)] = inst_38992);

(statearr_39078[(14)] = inst_38991);

(statearr_39078[(15)] = inst_38994);

return statearr_39078;
})();
var statearr_39079_39124 = state_39050__$1;
(statearr_39079_39124[(2)] = null);

(statearr_39079_39124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (14))){
var state_39050__$1 = state_39050;
var statearr_39083_39125 = state_39050__$1;
(statearr_39083_39125[(2)] = null);

(statearr_39083_39125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (16))){
var inst_39005 = (state_39050[(10)]);
var inst_39009 = cljs.core.chunk_first.call(null,inst_39005);
var inst_39010 = cljs.core.chunk_rest.call(null,inst_39005);
var inst_39011 = cljs.core.count.call(null,inst_39009);
var inst_38991 = inst_39010;
var inst_38992 = inst_39009;
var inst_38993 = inst_39011;
var inst_38994 = (0);
var state_39050__$1 = (function (){var statearr_39084 = state_39050;
(statearr_39084[(12)] = inst_38993);

(statearr_39084[(13)] = inst_38992);

(statearr_39084[(14)] = inst_38991);

(statearr_39084[(15)] = inst_38994);

return statearr_39084;
})();
var statearr_39085_39126 = state_39050__$1;
(statearr_39085_39126[(2)] = null);

(statearr_39085_39126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (10))){
var inst_38993 = (state_39050[(12)]);
var inst_38992 = (state_39050[(13)]);
var inst_38991 = (state_39050[(14)]);
var inst_38994 = (state_39050[(15)]);
var inst_38999 = cljs.core._nth.call(null,inst_38992,inst_38994);
var inst_39000 = cljs.core.async.muxch_STAR_.call(null,inst_38999);
var inst_39001 = cljs.core.async.close_BANG_.call(null,inst_39000);
var inst_39002 = (inst_38994 + (1));
var tmp39080 = inst_38993;
var tmp39081 = inst_38992;
var tmp39082 = inst_38991;
var inst_38991__$1 = tmp39082;
var inst_38992__$1 = tmp39081;
var inst_38993__$1 = tmp39080;
var inst_38994__$1 = inst_39002;
var state_39050__$1 = (function (){var statearr_39086 = state_39050;
(statearr_39086[(12)] = inst_38993__$1);

(statearr_39086[(17)] = inst_39001);

(statearr_39086[(13)] = inst_38992__$1);

(statearr_39086[(14)] = inst_38991__$1);

(statearr_39086[(15)] = inst_38994__$1);

return statearr_39086;
})();
var statearr_39087_39127 = state_39050__$1;
(statearr_39087_39127[(2)] = null);

(statearr_39087_39127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (18))){
var inst_39020 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39088_39128 = state_39050__$1;
(statearr_39088_39128[(2)] = inst_39020);

(statearr_39088_39128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (8))){
var inst_38993 = (state_39050[(12)]);
var inst_38994 = (state_39050[(15)]);
var inst_38996 = (inst_38994 < inst_38993);
var inst_38997 = inst_38996;
var state_39050__$1 = state_39050;
if(cljs.core.truth_(inst_38997)){
var statearr_39089_39129 = state_39050__$1;
(statearr_39089_39129[(1)] = (10));

} else {
var statearr_39090_39130 = state_39050__$1;
(statearr_39090_39130[(1)] = (11));

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
});})(c__26497__auto___39102,mults,ensure_mult,p))
;
return ((function (switch__26385__auto__,c__26497__auto___39102,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_39094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39094[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_39094[(1)] = (1));

return statearr_39094;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_39050){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_39050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e39095){if((e39095 instanceof Object)){
var ex__26389__auto__ = e39095;
var statearr_39096_39131 = state_39050;
(statearr_39096_39131[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39132 = state_39050;
state_39050 = G__39132;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_39050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_39050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___39102,mults,ensure_mult,p))
})();
var state__26499__auto__ = (function (){var statearr_39097 = f__26498__auto__.call(null);
(statearr_39097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___39102);

return statearr_39097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___39102,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args39133 = [];
var len__22809__auto___39136 = arguments.length;
var i__22810__auto___39137 = (0);
while(true){
if((i__22810__auto___39137 < len__22809__auto___39136)){
args39133.push((arguments[i__22810__auto___39137]));

var G__39138 = (i__22810__auto___39137 + (1));
i__22810__auto___39137 = G__39138;
continue;
} else {
}
break;
}

var G__39135 = args39133.length;
switch (G__39135) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39133.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args39140 = [];
var len__22809__auto___39143 = arguments.length;
var i__22810__auto___39144 = (0);
while(true){
if((i__22810__auto___39144 < len__22809__auto___39143)){
args39140.push((arguments[i__22810__auto___39144]));

var G__39145 = (i__22810__auto___39144 + (1));
i__22810__auto___39144 = G__39145;
continue;
} else {
}
break;
}

var G__39142 = args39140.length;
switch (G__39142) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39140.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args39147 = [];
var len__22809__auto___39218 = arguments.length;
var i__22810__auto___39219 = (0);
while(true){
if((i__22810__auto___39219 < len__22809__auto___39218)){
args39147.push((arguments[i__22810__auto___39219]));

var G__39220 = (i__22810__auto___39219 + (1));
i__22810__auto___39219 = G__39220;
continue;
} else {
}
break;
}

var G__39149 = args39147.length;
switch (G__39149) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39147.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26497__auto___39222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___39222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___39222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39188){
var state_val_39189 = (state_39188[(1)]);
if((state_val_39189 === (7))){
var state_39188__$1 = state_39188;
var statearr_39190_39223 = state_39188__$1;
(statearr_39190_39223[(2)] = null);

(statearr_39190_39223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (1))){
var state_39188__$1 = state_39188;
var statearr_39191_39224 = state_39188__$1;
(statearr_39191_39224[(2)] = null);

(statearr_39191_39224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (4))){
var inst_39152 = (state_39188[(7)]);
var inst_39154 = (inst_39152 < cnt);
var state_39188__$1 = state_39188;
if(cljs.core.truth_(inst_39154)){
var statearr_39192_39225 = state_39188__$1;
(statearr_39192_39225[(1)] = (6));

} else {
var statearr_39193_39226 = state_39188__$1;
(statearr_39193_39226[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (15))){
var inst_39184 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39194_39227 = state_39188__$1;
(statearr_39194_39227[(2)] = inst_39184);

(statearr_39194_39227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (13))){
var inst_39177 = cljs.core.async.close_BANG_.call(null,out);
var state_39188__$1 = state_39188;
var statearr_39195_39228 = state_39188__$1;
(statearr_39195_39228[(2)] = inst_39177);

(statearr_39195_39228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (6))){
var state_39188__$1 = state_39188;
var statearr_39196_39229 = state_39188__$1;
(statearr_39196_39229[(2)] = null);

(statearr_39196_39229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (3))){
var inst_39186 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39188__$1,inst_39186);
} else {
if((state_val_39189 === (12))){
var inst_39174 = (state_39188[(8)]);
var inst_39174__$1 = (state_39188[(2)]);
var inst_39175 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39174__$1);
var state_39188__$1 = (function (){var statearr_39197 = state_39188;
(statearr_39197[(8)] = inst_39174__$1);

return statearr_39197;
})();
if(cljs.core.truth_(inst_39175)){
var statearr_39198_39230 = state_39188__$1;
(statearr_39198_39230[(1)] = (13));

} else {
var statearr_39199_39231 = state_39188__$1;
(statearr_39199_39231[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (2))){
var inst_39151 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39152 = (0);
var state_39188__$1 = (function (){var statearr_39200 = state_39188;
(statearr_39200[(7)] = inst_39152);

(statearr_39200[(9)] = inst_39151);

return statearr_39200;
})();
var statearr_39201_39232 = state_39188__$1;
(statearr_39201_39232[(2)] = null);

(statearr_39201_39232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (11))){
var inst_39152 = (state_39188[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39188,(10),Object,null,(9));
var inst_39161 = chs__$1.call(null,inst_39152);
var inst_39162 = done.call(null,inst_39152);
var inst_39163 = cljs.core.async.take_BANG_.call(null,inst_39161,inst_39162);
var state_39188__$1 = state_39188;
var statearr_39202_39233 = state_39188__$1;
(statearr_39202_39233[(2)] = inst_39163);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39188__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (9))){
var inst_39152 = (state_39188[(7)]);
var inst_39165 = (state_39188[(2)]);
var inst_39166 = (inst_39152 + (1));
var inst_39152__$1 = inst_39166;
var state_39188__$1 = (function (){var statearr_39203 = state_39188;
(statearr_39203[(10)] = inst_39165);

(statearr_39203[(7)] = inst_39152__$1);

return statearr_39203;
})();
var statearr_39204_39234 = state_39188__$1;
(statearr_39204_39234[(2)] = null);

(statearr_39204_39234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (5))){
var inst_39172 = (state_39188[(2)]);
var state_39188__$1 = (function (){var statearr_39205 = state_39188;
(statearr_39205[(11)] = inst_39172);

return statearr_39205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39188__$1,(12),dchan);
} else {
if((state_val_39189 === (14))){
var inst_39174 = (state_39188[(8)]);
var inst_39179 = cljs.core.apply.call(null,f,inst_39174);
var state_39188__$1 = state_39188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39188__$1,(16),out,inst_39179);
} else {
if((state_val_39189 === (16))){
var inst_39181 = (state_39188[(2)]);
var state_39188__$1 = (function (){var statearr_39206 = state_39188;
(statearr_39206[(12)] = inst_39181);

return statearr_39206;
})();
var statearr_39207_39235 = state_39188__$1;
(statearr_39207_39235[(2)] = null);

(statearr_39207_39235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (10))){
var inst_39156 = (state_39188[(2)]);
var inst_39157 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39188__$1 = (function (){var statearr_39208 = state_39188;
(statearr_39208[(13)] = inst_39156);

return statearr_39208;
})();
var statearr_39209_39236 = state_39188__$1;
(statearr_39209_39236[(2)] = inst_39157);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39188__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39189 === (8))){
var inst_39170 = (state_39188[(2)]);
var state_39188__$1 = state_39188;
var statearr_39210_39237 = state_39188__$1;
(statearr_39210_39237[(2)] = inst_39170);

(statearr_39210_39237[(1)] = (5));


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
});})(c__26497__auto___39222,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26385__auto__,c__26497__auto___39222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_39214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39214[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_39214[(1)] = (1));

return statearr_39214;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_39188){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_39188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e39215){if((e39215 instanceof Object)){
var ex__26389__auto__ = e39215;
var statearr_39216_39238 = state_39188;
(statearr_39216_39238[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39239 = state_39188;
state_39188 = G__39239;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_39188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_39188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___39222,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26499__auto__ = (function (){var statearr_39217 = f__26498__auto__.call(null);
(statearr_39217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___39222);

return statearr_39217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___39222,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args39241 = [];
var len__22809__auto___39299 = arguments.length;
var i__22810__auto___39300 = (0);
while(true){
if((i__22810__auto___39300 < len__22809__auto___39299)){
args39241.push((arguments[i__22810__auto___39300]));

var G__39301 = (i__22810__auto___39300 + (1));
i__22810__auto___39300 = G__39301;
continue;
} else {
}
break;
}

var G__39243 = args39241.length;
switch (G__39243) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39241.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26497__auto___39303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___39303,out){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___39303,out){
return (function (state_39275){
var state_val_39276 = (state_39275[(1)]);
if((state_val_39276 === (7))){
var inst_39254 = (state_39275[(7)]);
var inst_39255 = (state_39275[(8)]);
var inst_39254__$1 = (state_39275[(2)]);
var inst_39255__$1 = cljs.core.nth.call(null,inst_39254__$1,(0),null);
var inst_39256 = cljs.core.nth.call(null,inst_39254__$1,(1),null);
var inst_39257 = (inst_39255__$1 == null);
var state_39275__$1 = (function (){var statearr_39277 = state_39275;
(statearr_39277[(7)] = inst_39254__$1);

(statearr_39277[(9)] = inst_39256);

(statearr_39277[(8)] = inst_39255__$1);

return statearr_39277;
})();
if(cljs.core.truth_(inst_39257)){
var statearr_39278_39304 = state_39275__$1;
(statearr_39278_39304[(1)] = (8));

} else {
var statearr_39279_39305 = state_39275__$1;
(statearr_39279_39305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39276 === (1))){
var inst_39244 = cljs.core.vec.call(null,chs);
var inst_39245 = inst_39244;
var state_39275__$1 = (function (){var statearr_39280 = state_39275;
(statearr_39280[(10)] = inst_39245);

return statearr_39280;
})();
var statearr_39281_39306 = state_39275__$1;
(statearr_39281_39306[(2)] = null);

(statearr_39281_39306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39276 === (4))){
var inst_39245 = (state_39275[(10)]);
var state_39275__$1 = state_39275;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39275__$1,(7),inst_39245);
} else {
if((state_val_39276 === (6))){
var inst_39271 = (state_39275[(2)]);
var state_39275__$1 = state_39275;
var statearr_39282_39307 = state_39275__$1;
(statearr_39282_39307[(2)] = inst_39271);

(statearr_39282_39307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39276 === (3))){
var inst_39273 = (state_39275[(2)]);
var state_39275__$1 = state_39275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39275__$1,inst_39273);
} else {
if((state_val_39276 === (2))){
var inst_39245 = (state_39275[(10)]);
var inst_39247 = cljs.core.count.call(null,inst_39245);
var inst_39248 = (inst_39247 > (0));
var state_39275__$1 = state_39275;
if(cljs.core.truth_(inst_39248)){
var statearr_39284_39308 = state_39275__$1;
(statearr_39284_39308[(1)] = (4));

} else {
var statearr_39285_39309 = state_39275__$1;
(statearr_39285_39309[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39276 === (11))){
var inst_39245 = (state_39275[(10)]);
var inst_39264 = (state_39275[(2)]);
var tmp39283 = inst_39245;
var inst_39245__$1 = tmp39283;
var state_39275__$1 = (function (){var statearr_39286 = state_39275;
(statearr_39286[(10)] = inst_39245__$1);

(statearr_39286[(11)] = inst_39264);

return statearr_39286;
})();
var statearr_39287_39310 = state_39275__$1;
(statearr_39287_39310[(2)] = null);

(statearr_39287_39310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39276 === (9))){
var inst_39255 = (state_39275[(8)]);
var state_39275__$1 = state_39275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39275__$1,(11),out,inst_39255);
} else {
if((state_val_39276 === (5))){
var inst_39269 = cljs.core.async.close_BANG_.call(null,out);
var state_39275__$1 = state_39275;
var statearr_39288_39311 = state_39275__$1;
(statearr_39288_39311[(2)] = inst_39269);

(statearr_39288_39311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39276 === (10))){
var inst_39267 = (state_39275[(2)]);
var state_39275__$1 = state_39275;
var statearr_39289_39312 = state_39275__$1;
(statearr_39289_39312[(2)] = inst_39267);

(statearr_39289_39312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39276 === (8))){
var inst_39254 = (state_39275[(7)]);
var inst_39256 = (state_39275[(9)]);
var inst_39255 = (state_39275[(8)]);
var inst_39245 = (state_39275[(10)]);
var inst_39259 = (function (){var cs = inst_39245;
var vec__39250 = inst_39254;
var v = inst_39255;
var c = inst_39256;
return ((function (cs,vec__39250,v,c,inst_39254,inst_39256,inst_39255,inst_39245,state_val_39276,c__26497__auto___39303,out){
return (function (p1__39240_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39240_SHARP_);
});
;})(cs,vec__39250,v,c,inst_39254,inst_39256,inst_39255,inst_39245,state_val_39276,c__26497__auto___39303,out))
})();
var inst_39260 = cljs.core.filterv.call(null,inst_39259,inst_39245);
var inst_39245__$1 = inst_39260;
var state_39275__$1 = (function (){var statearr_39290 = state_39275;
(statearr_39290[(10)] = inst_39245__$1);

return statearr_39290;
})();
var statearr_39291_39313 = state_39275__$1;
(statearr_39291_39313[(2)] = null);

(statearr_39291_39313[(1)] = (2));


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
});})(c__26497__auto___39303,out))
;
return ((function (switch__26385__auto__,c__26497__auto___39303,out){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_39295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39295[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_39295[(1)] = (1));

return statearr_39295;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_39275){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_39275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e39296){if((e39296 instanceof Object)){
var ex__26389__auto__ = e39296;
var statearr_39297_39314 = state_39275;
(statearr_39297_39314[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39315 = state_39275;
state_39275 = G__39315;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_39275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_39275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___39303,out))
})();
var state__26499__auto__ = (function (){var statearr_39298 = f__26498__auto__.call(null);
(statearr_39298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___39303);

return statearr_39298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___39303,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args39316 = [];
var len__22809__auto___39365 = arguments.length;
var i__22810__auto___39366 = (0);
while(true){
if((i__22810__auto___39366 < len__22809__auto___39365)){
args39316.push((arguments[i__22810__auto___39366]));

var G__39367 = (i__22810__auto___39366 + (1));
i__22810__auto___39366 = G__39367;
continue;
} else {
}
break;
}

var G__39318 = args39316.length;
switch (G__39318) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39316.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26497__auto___39369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___39369,out){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___39369,out){
return (function (state_39342){
var state_val_39343 = (state_39342[(1)]);
if((state_val_39343 === (7))){
var inst_39324 = (state_39342[(7)]);
var inst_39324__$1 = (state_39342[(2)]);
var inst_39325 = (inst_39324__$1 == null);
var inst_39326 = cljs.core.not.call(null,inst_39325);
var state_39342__$1 = (function (){var statearr_39344 = state_39342;
(statearr_39344[(7)] = inst_39324__$1);

return statearr_39344;
})();
if(inst_39326){
var statearr_39345_39370 = state_39342__$1;
(statearr_39345_39370[(1)] = (8));

} else {
var statearr_39346_39371 = state_39342__$1;
(statearr_39346_39371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39343 === (1))){
var inst_39319 = (0);
var state_39342__$1 = (function (){var statearr_39347 = state_39342;
(statearr_39347[(8)] = inst_39319);

return statearr_39347;
})();
var statearr_39348_39372 = state_39342__$1;
(statearr_39348_39372[(2)] = null);

(statearr_39348_39372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39343 === (4))){
var state_39342__$1 = state_39342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39342__$1,(7),ch);
} else {
if((state_val_39343 === (6))){
var inst_39337 = (state_39342[(2)]);
var state_39342__$1 = state_39342;
var statearr_39349_39373 = state_39342__$1;
(statearr_39349_39373[(2)] = inst_39337);

(statearr_39349_39373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39343 === (3))){
var inst_39339 = (state_39342[(2)]);
var inst_39340 = cljs.core.async.close_BANG_.call(null,out);
var state_39342__$1 = (function (){var statearr_39350 = state_39342;
(statearr_39350[(9)] = inst_39339);

return statearr_39350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39342__$1,inst_39340);
} else {
if((state_val_39343 === (2))){
var inst_39319 = (state_39342[(8)]);
var inst_39321 = (inst_39319 < n);
var state_39342__$1 = state_39342;
if(cljs.core.truth_(inst_39321)){
var statearr_39351_39374 = state_39342__$1;
(statearr_39351_39374[(1)] = (4));

} else {
var statearr_39352_39375 = state_39342__$1;
(statearr_39352_39375[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39343 === (11))){
var inst_39319 = (state_39342[(8)]);
var inst_39329 = (state_39342[(2)]);
var inst_39330 = (inst_39319 + (1));
var inst_39319__$1 = inst_39330;
var state_39342__$1 = (function (){var statearr_39353 = state_39342;
(statearr_39353[(10)] = inst_39329);

(statearr_39353[(8)] = inst_39319__$1);

return statearr_39353;
})();
var statearr_39354_39376 = state_39342__$1;
(statearr_39354_39376[(2)] = null);

(statearr_39354_39376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39343 === (9))){
var state_39342__$1 = state_39342;
var statearr_39355_39377 = state_39342__$1;
(statearr_39355_39377[(2)] = null);

(statearr_39355_39377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39343 === (5))){
var state_39342__$1 = state_39342;
var statearr_39356_39378 = state_39342__$1;
(statearr_39356_39378[(2)] = null);

(statearr_39356_39378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39343 === (10))){
var inst_39334 = (state_39342[(2)]);
var state_39342__$1 = state_39342;
var statearr_39357_39379 = state_39342__$1;
(statearr_39357_39379[(2)] = inst_39334);

(statearr_39357_39379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39343 === (8))){
var inst_39324 = (state_39342[(7)]);
var state_39342__$1 = state_39342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39342__$1,(11),out,inst_39324);
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
});})(c__26497__auto___39369,out))
;
return ((function (switch__26385__auto__,c__26497__auto___39369,out){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_39361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39361[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_39361[(1)] = (1));

return statearr_39361;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_39342){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_39342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e39362){if((e39362 instanceof Object)){
var ex__26389__auto__ = e39362;
var statearr_39363_39380 = state_39342;
(statearr_39363_39380[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39381 = state_39342;
state_39342 = G__39381;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_39342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_39342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___39369,out))
})();
var state__26499__auto__ = (function (){var statearr_39364 = f__26498__auto__.call(null);
(statearr_39364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___39369);

return statearr_39364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___39369,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39389 = (function (map_LT_,f,ch,meta39390){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39390 = meta39390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39391,meta39390__$1){
var self__ = this;
var _39391__$1 = this;
return (new cljs.core.async.t_cljs$core$async39389(self__.map_LT_,self__.f,self__.ch,meta39390__$1));
});

cljs.core.async.t_cljs$core$async39389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39391){
var self__ = this;
var _39391__$1 = this;
return self__.meta39390;
});

cljs.core.async.t_cljs$core$async39389.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39389.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39392 = (function (map_LT_,f,ch,meta39390,_,fn1,meta39393){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39390 = meta39390;
this._ = _;
this.fn1 = fn1;
this.meta39393 = meta39393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39394,meta39393__$1){
var self__ = this;
var _39394__$1 = this;
return (new cljs.core.async.t_cljs$core$async39392(self__.map_LT_,self__.f,self__.ch,self__.meta39390,self__._,self__.fn1,meta39393__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39394){
var self__ = this;
var _39394__$1 = this;
return self__.meta39393;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39382_SHARP_){
return f1.call(null,(((p1__39382_SHARP_ == null))?null:self__.f.call(null,p1__39382_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39392.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39390","meta39390",-1649321114,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39389","cljs.core.async/t_cljs$core$async39389",641600781,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39393","meta39393",-1858819382,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39392";

cljs.core.async.t_cljs$core$async39392.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22340__auto__,writer__22341__auto__,opt__22342__auto__){
return cljs.core._write.call(null,writer__22341__auto__,"cljs.core.async/t_cljs$core$async39392");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39392 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39392(map_LT___$1,f__$1,ch__$1,meta39390__$1,___$2,fn1__$1,meta39393){
return (new cljs.core.async.t_cljs$core$async39392(map_LT___$1,f__$1,ch__$1,meta39390__$1,___$2,fn1__$1,meta39393));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39392(self__.map_LT_,self__.f,self__.ch,self__.meta39390,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21722__auto__ = ret;
if(cljs.core.truth_(and__21722__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21722__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39389.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39390","meta39390",-1649321114,null)], null);
});

cljs.core.async.t_cljs$core$async39389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39389";

cljs.core.async.t_cljs$core$async39389.cljs$lang$ctorPrWriter = (function (this__22340__auto__,writer__22341__auto__,opt__22342__auto__){
return cljs.core._write.call(null,writer__22341__auto__,"cljs.core.async/t_cljs$core$async39389");
});

cljs.core.async.__GT_t_cljs$core$async39389 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39389(map_LT___$1,f__$1,ch__$1,meta39390){
return (new cljs.core.async.t_cljs$core$async39389(map_LT___$1,f__$1,ch__$1,meta39390));
});

}

return (new cljs.core.async.t_cljs$core$async39389(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39398 = (function (map_GT_,f,ch,meta39399){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39399 = meta39399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39400,meta39399__$1){
var self__ = this;
var _39400__$1 = this;
return (new cljs.core.async.t_cljs$core$async39398(self__.map_GT_,self__.f,self__.ch,meta39399__$1));
});

cljs.core.async.t_cljs$core$async39398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39400){
var self__ = this;
var _39400__$1 = this;
return self__.meta39399;
});

cljs.core.async.t_cljs$core$async39398.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39398.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39398.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39399","meta39399",-1906948355,null)], null);
});

cljs.core.async.t_cljs$core$async39398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39398";

cljs.core.async.t_cljs$core$async39398.cljs$lang$ctorPrWriter = (function (this__22340__auto__,writer__22341__auto__,opt__22342__auto__){
return cljs.core._write.call(null,writer__22341__auto__,"cljs.core.async/t_cljs$core$async39398");
});

cljs.core.async.__GT_t_cljs$core$async39398 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39398(map_GT___$1,f__$1,ch__$1,meta39399){
return (new cljs.core.async.t_cljs$core$async39398(map_GT___$1,f__$1,ch__$1,meta39399));
});

}

return (new cljs.core.async.t_cljs$core$async39398(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39404 = (function (filter_GT_,p,ch,meta39405){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39405 = meta39405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39406,meta39405__$1){
var self__ = this;
var _39406__$1 = this;
return (new cljs.core.async.t_cljs$core$async39404(self__.filter_GT_,self__.p,self__.ch,meta39405__$1));
});

cljs.core.async.t_cljs$core$async39404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39406){
var self__ = this;
var _39406__$1 = this;
return self__.meta39405;
});

cljs.core.async.t_cljs$core$async39404.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39404.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39404.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39405","meta39405",-1590332715,null)], null);
});

cljs.core.async.t_cljs$core$async39404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39404";

cljs.core.async.t_cljs$core$async39404.cljs$lang$ctorPrWriter = (function (this__22340__auto__,writer__22341__auto__,opt__22342__auto__){
return cljs.core._write.call(null,writer__22341__auto__,"cljs.core.async/t_cljs$core$async39404");
});

cljs.core.async.__GT_t_cljs$core$async39404 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39404(filter_GT___$1,p__$1,ch__$1,meta39405){
return (new cljs.core.async.t_cljs$core$async39404(filter_GT___$1,p__$1,ch__$1,meta39405));
});

}

return (new cljs.core.async.t_cljs$core$async39404(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args39407 = [];
var len__22809__auto___39451 = arguments.length;
var i__22810__auto___39452 = (0);
while(true){
if((i__22810__auto___39452 < len__22809__auto___39451)){
args39407.push((arguments[i__22810__auto___39452]));

var G__39453 = (i__22810__auto___39452 + (1));
i__22810__auto___39452 = G__39453;
continue;
} else {
}
break;
}

var G__39409 = args39407.length;
switch (G__39409) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39407.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26497__auto___39455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___39455,out){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___39455,out){
return (function (state_39430){
var state_val_39431 = (state_39430[(1)]);
if((state_val_39431 === (7))){
var inst_39426 = (state_39430[(2)]);
var state_39430__$1 = state_39430;
var statearr_39432_39456 = state_39430__$1;
(statearr_39432_39456[(2)] = inst_39426);

(statearr_39432_39456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39431 === (1))){
var state_39430__$1 = state_39430;
var statearr_39433_39457 = state_39430__$1;
(statearr_39433_39457[(2)] = null);

(statearr_39433_39457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39431 === (4))){
var inst_39412 = (state_39430[(7)]);
var inst_39412__$1 = (state_39430[(2)]);
var inst_39413 = (inst_39412__$1 == null);
var state_39430__$1 = (function (){var statearr_39434 = state_39430;
(statearr_39434[(7)] = inst_39412__$1);

return statearr_39434;
})();
if(cljs.core.truth_(inst_39413)){
var statearr_39435_39458 = state_39430__$1;
(statearr_39435_39458[(1)] = (5));

} else {
var statearr_39436_39459 = state_39430__$1;
(statearr_39436_39459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39431 === (6))){
var inst_39412 = (state_39430[(7)]);
var inst_39417 = p.call(null,inst_39412);
var state_39430__$1 = state_39430;
if(cljs.core.truth_(inst_39417)){
var statearr_39437_39460 = state_39430__$1;
(statearr_39437_39460[(1)] = (8));

} else {
var statearr_39438_39461 = state_39430__$1;
(statearr_39438_39461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39431 === (3))){
var inst_39428 = (state_39430[(2)]);
var state_39430__$1 = state_39430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39430__$1,inst_39428);
} else {
if((state_val_39431 === (2))){
var state_39430__$1 = state_39430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39430__$1,(4),ch);
} else {
if((state_val_39431 === (11))){
var inst_39420 = (state_39430[(2)]);
var state_39430__$1 = state_39430;
var statearr_39439_39462 = state_39430__$1;
(statearr_39439_39462[(2)] = inst_39420);

(statearr_39439_39462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39431 === (9))){
var state_39430__$1 = state_39430;
var statearr_39440_39463 = state_39430__$1;
(statearr_39440_39463[(2)] = null);

(statearr_39440_39463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39431 === (5))){
var inst_39415 = cljs.core.async.close_BANG_.call(null,out);
var state_39430__$1 = state_39430;
var statearr_39441_39464 = state_39430__$1;
(statearr_39441_39464[(2)] = inst_39415);

(statearr_39441_39464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39431 === (10))){
var inst_39423 = (state_39430[(2)]);
var state_39430__$1 = (function (){var statearr_39442 = state_39430;
(statearr_39442[(8)] = inst_39423);

return statearr_39442;
})();
var statearr_39443_39465 = state_39430__$1;
(statearr_39443_39465[(2)] = null);

(statearr_39443_39465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39431 === (8))){
var inst_39412 = (state_39430[(7)]);
var state_39430__$1 = state_39430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39430__$1,(11),out,inst_39412);
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
});})(c__26497__auto___39455,out))
;
return ((function (switch__26385__auto__,c__26497__auto___39455,out){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_39447 = [null,null,null,null,null,null,null,null,null];
(statearr_39447[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_39447[(1)] = (1));

return statearr_39447;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_39430){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_39430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e39448){if((e39448 instanceof Object)){
var ex__26389__auto__ = e39448;
var statearr_39449_39466 = state_39430;
(statearr_39449_39466[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39467 = state_39430;
state_39430 = G__39467;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_39430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_39430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___39455,out))
})();
var state__26499__auto__ = (function (){var statearr_39450 = f__26498__auto__.call(null);
(statearr_39450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___39455);

return statearr_39450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___39455,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39468 = [];
var len__22809__auto___39471 = arguments.length;
var i__22810__auto___39472 = (0);
while(true){
if((i__22810__auto___39472 < len__22809__auto___39471)){
args39468.push((arguments[i__22810__auto___39472]));

var G__39473 = (i__22810__auto___39472 + (1));
i__22810__auto___39472 = G__39473;
continue;
} else {
}
break;
}

var G__39470 = args39468.length;
switch (G__39470) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39468.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto__){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto__){
return (function (state_39640){
var state_val_39641 = (state_39640[(1)]);
if((state_val_39641 === (7))){
var inst_39636 = (state_39640[(2)]);
var state_39640__$1 = state_39640;
var statearr_39642_39683 = state_39640__$1;
(statearr_39642_39683[(2)] = inst_39636);

(statearr_39642_39683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (20))){
var inst_39606 = (state_39640[(7)]);
var inst_39617 = (state_39640[(2)]);
var inst_39618 = cljs.core.next.call(null,inst_39606);
var inst_39592 = inst_39618;
var inst_39593 = null;
var inst_39594 = (0);
var inst_39595 = (0);
var state_39640__$1 = (function (){var statearr_39643 = state_39640;
(statearr_39643[(8)] = inst_39592);

(statearr_39643[(9)] = inst_39594);

(statearr_39643[(10)] = inst_39617);

(statearr_39643[(11)] = inst_39595);

(statearr_39643[(12)] = inst_39593);

return statearr_39643;
})();
var statearr_39644_39684 = state_39640__$1;
(statearr_39644_39684[(2)] = null);

(statearr_39644_39684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (1))){
var state_39640__$1 = state_39640;
var statearr_39645_39685 = state_39640__$1;
(statearr_39645_39685[(2)] = null);

(statearr_39645_39685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (4))){
var inst_39581 = (state_39640[(13)]);
var inst_39581__$1 = (state_39640[(2)]);
var inst_39582 = (inst_39581__$1 == null);
var state_39640__$1 = (function (){var statearr_39646 = state_39640;
(statearr_39646[(13)] = inst_39581__$1);

return statearr_39646;
})();
if(cljs.core.truth_(inst_39582)){
var statearr_39647_39686 = state_39640__$1;
(statearr_39647_39686[(1)] = (5));

} else {
var statearr_39648_39687 = state_39640__$1;
(statearr_39648_39687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (15))){
var state_39640__$1 = state_39640;
var statearr_39652_39688 = state_39640__$1;
(statearr_39652_39688[(2)] = null);

(statearr_39652_39688[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (21))){
var state_39640__$1 = state_39640;
var statearr_39653_39689 = state_39640__$1;
(statearr_39653_39689[(2)] = null);

(statearr_39653_39689[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (13))){
var inst_39592 = (state_39640[(8)]);
var inst_39594 = (state_39640[(9)]);
var inst_39595 = (state_39640[(11)]);
var inst_39593 = (state_39640[(12)]);
var inst_39602 = (state_39640[(2)]);
var inst_39603 = (inst_39595 + (1));
var tmp39649 = inst_39592;
var tmp39650 = inst_39594;
var tmp39651 = inst_39593;
var inst_39592__$1 = tmp39649;
var inst_39593__$1 = tmp39651;
var inst_39594__$1 = tmp39650;
var inst_39595__$1 = inst_39603;
var state_39640__$1 = (function (){var statearr_39654 = state_39640;
(statearr_39654[(8)] = inst_39592__$1);

(statearr_39654[(9)] = inst_39594__$1);

(statearr_39654[(14)] = inst_39602);

(statearr_39654[(11)] = inst_39595__$1);

(statearr_39654[(12)] = inst_39593__$1);

return statearr_39654;
})();
var statearr_39655_39690 = state_39640__$1;
(statearr_39655_39690[(2)] = null);

(statearr_39655_39690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (22))){
var state_39640__$1 = state_39640;
var statearr_39656_39691 = state_39640__$1;
(statearr_39656_39691[(2)] = null);

(statearr_39656_39691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (6))){
var inst_39581 = (state_39640[(13)]);
var inst_39590 = f.call(null,inst_39581);
var inst_39591 = cljs.core.seq.call(null,inst_39590);
var inst_39592 = inst_39591;
var inst_39593 = null;
var inst_39594 = (0);
var inst_39595 = (0);
var state_39640__$1 = (function (){var statearr_39657 = state_39640;
(statearr_39657[(8)] = inst_39592);

(statearr_39657[(9)] = inst_39594);

(statearr_39657[(11)] = inst_39595);

(statearr_39657[(12)] = inst_39593);

return statearr_39657;
})();
var statearr_39658_39692 = state_39640__$1;
(statearr_39658_39692[(2)] = null);

(statearr_39658_39692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (17))){
var inst_39606 = (state_39640[(7)]);
var inst_39610 = cljs.core.chunk_first.call(null,inst_39606);
var inst_39611 = cljs.core.chunk_rest.call(null,inst_39606);
var inst_39612 = cljs.core.count.call(null,inst_39610);
var inst_39592 = inst_39611;
var inst_39593 = inst_39610;
var inst_39594 = inst_39612;
var inst_39595 = (0);
var state_39640__$1 = (function (){var statearr_39659 = state_39640;
(statearr_39659[(8)] = inst_39592);

(statearr_39659[(9)] = inst_39594);

(statearr_39659[(11)] = inst_39595);

(statearr_39659[(12)] = inst_39593);

return statearr_39659;
})();
var statearr_39660_39693 = state_39640__$1;
(statearr_39660_39693[(2)] = null);

(statearr_39660_39693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (3))){
var inst_39638 = (state_39640[(2)]);
var state_39640__$1 = state_39640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39640__$1,inst_39638);
} else {
if((state_val_39641 === (12))){
var inst_39626 = (state_39640[(2)]);
var state_39640__$1 = state_39640;
var statearr_39661_39694 = state_39640__$1;
(statearr_39661_39694[(2)] = inst_39626);

(statearr_39661_39694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (2))){
var state_39640__$1 = state_39640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39640__$1,(4),in$);
} else {
if((state_val_39641 === (23))){
var inst_39634 = (state_39640[(2)]);
var state_39640__$1 = state_39640;
var statearr_39662_39695 = state_39640__$1;
(statearr_39662_39695[(2)] = inst_39634);

(statearr_39662_39695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (19))){
var inst_39621 = (state_39640[(2)]);
var state_39640__$1 = state_39640;
var statearr_39663_39696 = state_39640__$1;
(statearr_39663_39696[(2)] = inst_39621);

(statearr_39663_39696[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (11))){
var inst_39592 = (state_39640[(8)]);
var inst_39606 = (state_39640[(7)]);
var inst_39606__$1 = cljs.core.seq.call(null,inst_39592);
var state_39640__$1 = (function (){var statearr_39664 = state_39640;
(statearr_39664[(7)] = inst_39606__$1);

return statearr_39664;
})();
if(inst_39606__$1){
var statearr_39665_39697 = state_39640__$1;
(statearr_39665_39697[(1)] = (14));

} else {
var statearr_39666_39698 = state_39640__$1;
(statearr_39666_39698[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (9))){
var inst_39628 = (state_39640[(2)]);
var inst_39629 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39640__$1 = (function (){var statearr_39667 = state_39640;
(statearr_39667[(15)] = inst_39628);

return statearr_39667;
})();
if(cljs.core.truth_(inst_39629)){
var statearr_39668_39699 = state_39640__$1;
(statearr_39668_39699[(1)] = (21));

} else {
var statearr_39669_39700 = state_39640__$1;
(statearr_39669_39700[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (5))){
var inst_39584 = cljs.core.async.close_BANG_.call(null,out);
var state_39640__$1 = state_39640;
var statearr_39670_39701 = state_39640__$1;
(statearr_39670_39701[(2)] = inst_39584);

(statearr_39670_39701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (14))){
var inst_39606 = (state_39640[(7)]);
var inst_39608 = cljs.core.chunked_seq_QMARK_.call(null,inst_39606);
var state_39640__$1 = state_39640;
if(inst_39608){
var statearr_39671_39702 = state_39640__$1;
(statearr_39671_39702[(1)] = (17));

} else {
var statearr_39672_39703 = state_39640__$1;
(statearr_39672_39703[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (16))){
var inst_39624 = (state_39640[(2)]);
var state_39640__$1 = state_39640;
var statearr_39673_39704 = state_39640__$1;
(statearr_39673_39704[(2)] = inst_39624);

(statearr_39673_39704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39641 === (10))){
var inst_39595 = (state_39640[(11)]);
var inst_39593 = (state_39640[(12)]);
var inst_39600 = cljs.core._nth.call(null,inst_39593,inst_39595);
var state_39640__$1 = state_39640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39640__$1,(13),out,inst_39600);
} else {
if((state_val_39641 === (18))){
var inst_39606 = (state_39640[(7)]);
var inst_39615 = cljs.core.first.call(null,inst_39606);
var state_39640__$1 = state_39640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39640__$1,(20),out,inst_39615);
} else {
if((state_val_39641 === (8))){
var inst_39594 = (state_39640[(9)]);
var inst_39595 = (state_39640[(11)]);
var inst_39597 = (inst_39595 < inst_39594);
var inst_39598 = inst_39597;
var state_39640__$1 = state_39640;
if(cljs.core.truth_(inst_39598)){
var statearr_39674_39705 = state_39640__$1;
(statearr_39674_39705[(1)] = (10));

} else {
var statearr_39675_39706 = state_39640__$1;
(statearr_39675_39706[(1)] = (11));

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
});})(c__26497__auto__))
;
return ((function (switch__26385__auto__,c__26497__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26386__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26386__auto____0 = (function (){
var statearr_39679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39679[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26386__auto__);

(statearr_39679[(1)] = (1));

return statearr_39679;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26386__auto____1 = (function (state_39640){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_39640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e39680){if((e39680 instanceof Object)){
var ex__26389__auto__ = e39680;
var statearr_39681_39707 = state_39640;
(statearr_39681_39707[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39708 = state_39640;
state_39640 = G__39708;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26386__auto__ = function(state_39640){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26386__auto____1.call(this,state_39640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26386__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26386__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto__))
})();
var state__26499__auto__ = (function (){var statearr_39682 = f__26498__auto__.call(null);
(statearr_39682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto__);

return statearr_39682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto__))
);

return c__26497__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39709 = [];
var len__22809__auto___39712 = arguments.length;
var i__22810__auto___39713 = (0);
while(true){
if((i__22810__auto___39713 < len__22809__auto___39712)){
args39709.push((arguments[i__22810__auto___39713]));

var G__39714 = (i__22810__auto___39713 + (1));
i__22810__auto___39713 = G__39714;
continue;
} else {
}
break;
}

var G__39711 = args39709.length;
switch (G__39711) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39709.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args39716 = [];
var len__22809__auto___39719 = arguments.length;
var i__22810__auto___39720 = (0);
while(true){
if((i__22810__auto___39720 < len__22809__auto___39719)){
args39716.push((arguments[i__22810__auto___39720]));

var G__39721 = (i__22810__auto___39720 + (1));
i__22810__auto___39720 = G__39721;
continue;
} else {
}
break;
}

var G__39718 = args39716.length;
switch (G__39718) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39716.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args39723 = [];
var len__22809__auto___39774 = arguments.length;
var i__22810__auto___39775 = (0);
while(true){
if((i__22810__auto___39775 < len__22809__auto___39774)){
args39723.push((arguments[i__22810__auto___39775]));

var G__39776 = (i__22810__auto___39775 + (1));
i__22810__auto___39775 = G__39776;
continue;
} else {
}
break;
}

var G__39725 = args39723.length;
switch (G__39725) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39723.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26497__auto___39778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___39778,out){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___39778,out){
return (function (state_39749){
var state_val_39750 = (state_39749[(1)]);
if((state_val_39750 === (7))){
var inst_39744 = (state_39749[(2)]);
var state_39749__$1 = state_39749;
var statearr_39751_39779 = state_39749__$1;
(statearr_39751_39779[(2)] = inst_39744);

(statearr_39751_39779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (1))){
var inst_39726 = null;
var state_39749__$1 = (function (){var statearr_39752 = state_39749;
(statearr_39752[(7)] = inst_39726);

return statearr_39752;
})();
var statearr_39753_39780 = state_39749__$1;
(statearr_39753_39780[(2)] = null);

(statearr_39753_39780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (4))){
var inst_39729 = (state_39749[(8)]);
var inst_39729__$1 = (state_39749[(2)]);
var inst_39730 = (inst_39729__$1 == null);
var inst_39731 = cljs.core.not.call(null,inst_39730);
var state_39749__$1 = (function (){var statearr_39754 = state_39749;
(statearr_39754[(8)] = inst_39729__$1);

return statearr_39754;
})();
if(inst_39731){
var statearr_39755_39781 = state_39749__$1;
(statearr_39755_39781[(1)] = (5));

} else {
var statearr_39756_39782 = state_39749__$1;
(statearr_39756_39782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (6))){
var state_39749__$1 = state_39749;
var statearr_39757_39783 = state_39749__$1;
(statearr_39757_39783[(2)] = null);

(statearr_39757_39783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (3))){
var inst_39746 = (state_39749[(2)]);
var inst_39747 = cljs.core.async.close_BANG_.call(null,out);
var state_39749__$1 = (function (){var statearr_39758 = state_39749;
(statearr_39758[(9)] = inst_39746);

return statearr_39758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39749__$1,inst_39747);
} else {
if((state_val_39750 === (2))){
var state_39749__$1 = state_39749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39749__$1,(4),ch);
} else {
if((state_val_39750 === (11))){
var inst_39729 = (state_39749[(8)]);
var inst_39738 = (state_39749[(2)]);
var inst_39726 = inst_39729;
var state_39749__$1 = (function (){var statearr_39759 = state_39749;
(statearr_39759[(10)] = inst_39738);

(statearr_39759[(7)] = inst_39726);

return statearr_39759;
})();
var statearr_39760_39784 = state_39749__$1;
(statearr_39760_39784[(2)] = null);

(statearr_39760_39784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (9))){
var inst_39729 = (state_39749[(8)]);
var state_39749__$1 = state_39749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39749__$1,(11),out,inst_39729);
} else {
if((state_val_39750 === (5))){
var inst_39729 = (state_39749[(8)]);
var inst_39726 = (state_39749[(7)]);
var inst_39733 = cljs.core._EQ_.call(null,inst_39729,inst_39726);
var state_39749__$1 = state_39749;
if(inst_39733){
var statearr_39762_39785 = state_39749__$1;
(statearr_39762_39785[(1)] = (8));

} else {
var statearr_39763_39786 = state_39749__$1;
(statearr_39763_39786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (10))){
var inst_39741 = (state_39749[(2)]);
var state_39749__$1 = state_39749;
var statearr_39764_39787 = state_39749__$1;
(statearr_39764_39787[(2)] = inst_39741);

(statearr_39764_39787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (8))){
var inst_39726 = (state_39749[(7)]);
var tmp39761 = inst_39726;
var inst_39726__$1 = tmp39761;
var state_39749__$1 = (function (){var statearr_39765 = state_39749;
(statearr_39765[(7)] = inst_39726__$1);

return statearr_39765;
})();
var statearr_39766_39788 = state_39749__$1;
(statearr_39766_39788[(2)] = null);

(statearr_39766_39788[(1)] = (2));


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
});})(c__26497__auto___39778,out))
;
return ((function (switch__26385__auto__,c__26497__auto___39778,out){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_39770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39770[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_39770[(1)] = (1));

return statearr_39770;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_39749){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_39749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e39771){if((e39771 instanceof Object)){
var ex__26389__auto__ = e39771;
var statearr_39772_39789 = state_39749;
(statearr_39772_39789[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39790 = state_39749;
state_39749 = G__39790;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_39749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_39749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___39778,out))
})();
var state__26499__auto__ = (function (){var statearr_39773 = f__26498__auto__.call(null);
(statearr_39773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___39778);

return statearr_39773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___39778,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39791 = [];
var len__22809__auto___39861 = arguments.length;
var i__22810__auto___39862 = (0);
while(true){
if((i__22810__auto___39862 < len__22809__auto___39861)){
args39791.push((arguments[i__22810__auto___39862]));

var G__39863 = (i__22810__auto___39862 + (1));
i__22810__auto___39862 = G__39863;
continue;
} else {
}
break;
}

var G__39793 = args39791.length;
switch (G__39793) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39791.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26497__auto___39865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___39865,out){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___39865,out){
return (function (state_39831){
var state_val_39832 = (state_39831[(1)]);
if((state_val_39832 === (7))){
var inst_39827 = (state_39831[(2)]);
var state_39831__$1 = state_39831;
var statearr_39833_39866 = state_39831__$1;
(statearr_39833_39866[(2)] = inst_39827);

(statearr_39833_39866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39832 === (1))){
var inst_39794 = (new Array(n));
var inst_39795 = inst_39794;
var inst_39796 = (0);
var state_39831__$1 = (function (){var statearr_39834 = state_39831;
(statearr_39834[(7)] = inst_39795);

(statearr_39834[(8)] = inst_39796);

return statearr_39834;
})();
var statearr_39835_39867 = state_39831__$1;
(statearr_39835_39867[(2)] = null);

(statearr_39835_39867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39832 === (4))){
var inst_39799 = (state_39831[(9)]);
var inst_39799__$1 = (state_39831[(2)]);
var inst_39800 = (inst_39799__$1 == null);
var inst_39801 = cljs.core.not.call(null,inst_39800);
var state_39831__$1 = (function (){var statearr_39836 = state_39831;
(statearr_39836[(9)] = inst_39799__$1);

return statearr_39836;
})();
if(inst_39801){
var statearr_39837_39868 = state_39831__$1;
(statearr_39837_39868[(1)] = (5));

} else {
var statearr_39838_39869 = state_39831__$1;
(statearr_39838_39869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39832 === (15))){
var inst_39821 = (state_39831[(2)]);
var state_39831__$1 = state_39831;
var statearr_39839_39870 = state_39831__$1;
(statearr_39839_39870[(2)] = inst_39821);

(statearr_39839_39870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39832 === (13))){
var state_39831__$1 = state_39831;
var statearr_39840_39871 = state_39831__$1;
(statearr_39840_39871[(2)] = null);

(statearr_39840_39871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39832 === (6))){
var inst_39796 = (state_39831[(8)]);
var inst_39817 = (inst_39796 > (0));
var state_39831__$1 = state_39831;
if(cljs.core.truth_(inst_39817)){
var statearr_39841_39872 = state_39831__$1;
(statearr_39841_39872[(1)] = (12));

} else {
var statearr_39842_39873 = state_39831__$1;
(statearr_39842_39873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39832 === (3))){
var inst_39829 = (state_39831[(2)]);
var state_39831__$1 = state_39831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39831__$1,inst_39829);
} else {
if((state_val_39832 === (12))){
var inst_39795 = (state_39831[(7)]);
var inst_39819 = cljs.core.vec.call(null,inst_39795);
var state_39831__$1 = state_39831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39831__$1,(15),out,inst_39819);
} else {
if((state_val_39832 === (2))){
var state_39831__$1 = state_39831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39831__$1,(4),ch);
} else {
if((state_val_39832 === (11))){
var inst_39811 = (state_39831[(2)]);
var inst_39812 = (new Array(n));
var inst_39795 = inst_39812;
var inst_39796 = (0);
var state_39831__$1 = (function (){var statearr_39843 = state_39831;
(statearr_39843[(10)] = inst_39811);

(statearr_39843[(7)] = inst_39795);

(statearr_39843[(8)] = inst_39796);

return statearr_39843;
})();
var statearr_39844_39874 = state_39831__$1;
(statearr_39844_39874[(2)] = null);

(statearr_39844_39874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39832 === (9))){
var inst_39795 = (state_39831[(7)]);
var inst_39809 = cljs.core.vec.call(null,inst_39795);
var state_39831__$1 = state_39831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39831__$1,(11),out,inst_39809);
} else {
if((state_val_39832 === (5))){
var inst_39799 = (state_39831[(9)]);
var inst_39804 = (state_39831[(11)]);
var inst_39795 = (state_39831[(7)]);
var inst_39796 = (state_39831[(8)]);
var inst_39803 = (inst_39795[inst_39796] = inst_39799);
var inst_39804__$1 = (inst_39796 + (1));
var inst_39805 = (inst_39804__$1 < n);
var state_39831__$1 = (function (){var statearr_39845 = state_39831;
(statearr_39845[(12)] = inst_39803);

(statearr_39845[(11)] = inst_39804__$1);

return statearr_39845;
})();
if(cljs.core.truth_(inst_39805)){
var statearr_39846_39875 = state_39831__$1;
(statearr_39846_39875[(1)] = (8));

} else {
var statearr_39847_39876 = state_39831__$1;
(statearr_39847_39876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39832 === (14))){
var inst_39824 = (state_39831[(2)]);
var inst_39825 = cljs.core.async.close_BANG_.call(null,out);
var state_39831__$1 = (function (){var statearr_39849 = state_39831;
(statearr_39849[(13)] = inst_39824);

return statearr_39849;
})();
var statearr_39850_39877 = state_39831__$1;
(statearr_39850_39877[(2)] = inst_39825);

(statearr_39850_39877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39832 === (10))){
var inst_39815 = (state_39831[(2)]);
var state_39831__$1 = state_39831;
var statearr_39851_39878 = state_39831__$1;
(statearr_39851_39878[(2)] = inst_39815);

(statearr_39851_39878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39832 === (8))){
var inst_39804 = (state_39831[(11)]);
var inst_39795 = (state_39831[(7)]);
var tmp39848 = inst_39795;
var inst_39795__$1 = tmp39848;
var inst_39796 = inst_39804;
var state_39831__$1 = (function (){var statearr_39852 = state_39831;
(statearr_39852[(7)] = inst_39795__$1);

(statearr_39852[(8)] = inst_39796);

return statearr_39852;
})();
var statearr_39853_39879 = state_39831__$1;
(statearr_39853_39879[(2)] = null);

(statearr_39853_39879[(1)] = (2));


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
});})(c__26497__auto___39865,out))
;
return ((function (switch__26385__auto__,c__26497__auto___39865,out){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_39857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39857[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_39857[(1)] = (1));

return statearr_39857;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_39831){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_39831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e39858){if((e39858 instanceof Object)){
var ex__26389__auto__ = e39858;
var statearr_39859_39880 = state_39831;
(statearr_39859_39880[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39881 = state_39831;
state_39831 = G__39881;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_39831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_39831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___39865,out))
})();
var state__26499__auto__ = (function (){var statearr_39860 = f__26498__auto__.call(null);
(statearr_39860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___39865);

return statearr_39860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___39865,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39882 = [];
var len__22809__auto___39956 = arguments.length;
var i__22810__auto___39957 = (0);
while(true){
if((i__22810__auto___39957 < len__22809__auto___39956)){
args39882.push((arguments[i__22810__auto___39957]));

var G__39958 = (i__22810__auto___39957 + (1));
i__22810__auto___39957 = G__39958;
continue;
} else {
}
break;
}

var G__39884 = args39882.length;
switch (G__39884) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39882.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26497__auto___39960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26497__auto___39960,out){
return (function (){
var f__26498__auto__ = (function (){var switch__26385__auto__ = ((function (c__26497__auto___39960,out){
return (function (state_39926){
var state_val_39927 = (state_39926[(1)]);
if((state_val_39927 === (7))){
var inst_39922 = (state_39926[(2)]);
var state_39926__$1 = state_39926;
var statearr_39928_39961 = state_39926__$1;
(statearr_39928_39961[(2)] = inst_39922);

(statearr_39928_39961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39927 === (1))){
var inst_39885 = [];
var inst_39886 = inst_39885;
var inst_39887 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39926__$1 = (function (){var statearr_39929 = state_39926;
(statearr_39929[(7)] = inst_39886);

(statearr_39929[(8)] = inst_39887);

return statearr_39929;
})();
var statearr_39930_39962 = state_39926__$1;
(statearr_39930_39962[(2)] = null);

(statearr_39930_39962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39927 === (4))){
var inst_39890 = (state_39926[(9)]);
var inst_39890__$1 = (state_39926[(2)]);
var inst_39891 = (inst_39890__$1 == null);
var inst_39892 = cljs.core.not.call(null,inst_39891);
var state_39926__$1 = (function (){var statearr_39931 = state_39926;
(statearr_39931[(9)] = inst_39890__$1);

return statearr_39931;
})();
if(inst_39892){
var statearr_39932_39963 = state_39926__$1;
(statearr_39932_39963[(1)] = (5));

} else {
var statearr_39933_39964 = state_39926__$1;
(statearr_39933_39964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39927 === (15))){
var inst_39916 = (state_39926[(2)]);
var state_39926__$1 = state_39926;
var statearr_39934_39965 = state_39926__$1;
(statearr_39934_39965[(2)] = inst_39916);

(statearr_39934_39965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39927 === (13))){
var state_39926__$1 = state_39926;
var statearr_39935_39966 = state_39926__$1;
(statearr_39935_39966[(2)] = null);

(statearr_39935_39966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39927 === (6))){
var inst_39886 = (state_39926[(7)]);
var inst_39911 = inst_39886.length;
var inst_39912 = (inst_39911 > (0));
var state_39926__$1 = state_39926;
if(cljs.core.truth_(inst_39912)){
var statearr_39936_39967 = state_39926__$1;
(statearr_39936_39967[(1)] = (12));

} else {
var statearr_39937_39968 = state_39926__$1;
(statearr_39937_39968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39927 === (3))){
var inst_39924 = (state_39926[(2)]);
var state_39926__$1 = state_39926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39926__$1,inst_39924);
} else {
if((state_val_39927 === (12))){
var inst_39886 = (state_39926[(7)]);
var inst_39914 = cljs.core.vec.call(null,inst_39886);
var state_39926__$1 = state_39926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39926__$1,(15),out,inst_39914);
} else {
if((state_val_39927 === (2))){
var state_39926__$1 = state_39926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39926__$1,(4),ch);
} else {
if((state_val_39927 === (11))){
var inst_39894 = (state_39926[(10)]);
var inst_39890 = (state_39926[(9)]);
var inst_39904 = (state_39926[(2)]);
var inst_39905 = [];
var inst_39906 = inst_39905.push(inst_39890);
var inst_39886 = inst_39905;
var inst_39887 = inst_39894;
var state_39926__$1 = (function (){var statearr_39938 = state_39926;
(statearr_39938[(11)] = inst_39906);

(statearr_39938[(12)] = inst_39904);

(statearr_39938[(7)] = inst_39886);

(statearr_39938[(8)] = inst_39887);

return statearr_39938;
})();
var statearr_39939_39969 = state_39926__$1;
(statearr_39939_39969[(2)] = null);

(statearr_39939_39969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39927 === (9))){
var inst_39886 = (state_39926[(7)]);
var inst_39902 = cljs.core.vec.call(null,inst_39886);
var state_39926__$1 = state_39926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39926__$1,(11),out,inst_39902);
} else {
if((state_val_39927 === (5))){
var inst_39894 = (state_39926[(10)]);
var inst_39890 = (state_39926[(9)]);
var inst_39887 = (state_39926[(8)]);
var inst_39894__$1 = f.call(null,inst_39890);
var inst_39895 = cljs.core._EQ_.call(null,inst_39894__$1,inst_39887);
var inst_39896 = cljs.core.keyword_identical_QMARK_.call(null,inst_39887,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39897 = (inst_39895) || (inst_39896);
var state_39926__$1 = (function (){var statearr_39940 = state_39926;
(statearr_39940[(10)] = inst_39894__$1);

return statearr_39940;
})();
if(cljs.core.truth_(inst_39897)){
var statearr_39941_39970 = state_39926__$1;
(statearr_39941_39970[(1)] = (8));

} else {
var statearr_39942_39971 = state_39926__$1;
(statearr_39942_39971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39927 === (14))){
var inst_39919 = (state_39926[(2)]);
var inst_39920 = cljs.core.async.close_BANG_.call(null,out);
var state_39926__$1 = (function (){var statearr_39944 = state_39926;
(statearr_39944[(13)] = inst_39919);

return statearr_39944;
})();
var statearr_39945_39972 = state_39926__$1;
(statearr_39945_39972[(2)] = inst_39920);

(statearr_39945_39972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39927 === (10))){
var inst_39909 = (state_39926[(2)]);
var state_39926__$1 = state_39926;
var statearr_39946_39973 = state_39926__$1;
(statearr_39946_39973[(2)] = inst_39909);

(statearr_39946_39973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39927 === (8))){
var inst_39894 = (state_39926[(10)]);
var inst_39890 = (state_39926[(9)]);
var inst_39886 = (state_39926[(7)]);
var inst_39899 = inst_39886.push(inst_39890);
var tmp39943 = inst_39886;
var inst_39886__$1 = tmp39943;
var inst_39887 = inst_39894;
var state_39926__$1 = (function (){var statearr_39947 = state_39926;
(statearr_39947[(14)] = inst_39899);

(statearr_39947[(7)] = inst_39886__$1);

(statearr_39947[(8)] = inst_39887);

return statearr_39947;
})();
var statearr_39948_39974 = state_39926__$1;
(statearr_39948_39974[(2)] = null);

(statearr_39948_39974[(1)] = (2));


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
});})(c__26497__auto___39960,out))
;
return ((function (switch__26385__auto__,c__26497__auto___39960,out){
return (function() {
var cljs$core$async$state_machine__26386__auto__ = null;
var cljs$core$async$state_machine__26386__auto____0 = (function (){
var statearr_39952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39952[(0)] = cljs$core$async$state_machine__26386__auto__);

(statearr_39952[(1)] = (1));

return statearr_39952;
});
var cljs$core$async$state_machine__26386__auto____1 = (function (state_39926){
while(true){
var ret_value__26387__auto__ = (function (){try{while(true){
var result__26388__auto__ = switch__26385__auto__.call(null,state_39926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26388__auto__;
}
break;
}
}catch (e39953){if((e39953 instanceof Object)){
var ex__26389__auto__ = e39953;
var statearr_39954_39975 = state_39926;
(statearr_39954_39975[(5)] = ex__26389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39976 = state_39926;
state_39926 = G__39976;
continue;
} else {
return ret_value__26387__auto__;
}
break;
}
});
cljs$core$async$state_machine__26386__auto__ = function(state_39926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26386__auto____1.call(this,state_39926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26386__auto____0;
cljs$core$async$state_machine__26386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26386__auto____1;
return cljs$core$async$state_machine__26386__auto__;
})()
;})(switch__26385__auto__,c__26497__auto___39960,out))
})();
var state__26499__auto__ = (function (){var statearr_39955 = f__26498__auto__.call(null);
(statearr_39955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26497__auto___39960);

return statearr_39955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26499__auto__);
});})(c__26497__auto___39960,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1469933700331