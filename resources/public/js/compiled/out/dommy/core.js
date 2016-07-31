// Compiled by ClojureScript 1.9.36 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__21734__auto__ = elem.textContent;
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args36373 = [];
var len__22809__auto___36376 = arguments.length;
var i__22810__auto___36377 = (0);
while(true){
if((i__22810__auto___36377 < len__22809__auto___36376)){
args36373.push((arguments[i__22810__auto___36377]));

var G__36378 = (i__22810__auto___36377 + (1));
i__22810__auto___36377 = G__36378;
continue;
} else {
}
break;
}

var G__36375 = args36373.length;
switch (G__36375) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36373.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args36380 = [];
var len__22809__auto___36383 = arguments.length;
var i__22810__auto___36384 = (0);
while(true){
if((i__22810__auto___36384 < len__22809__auto___36383)){
args36380.push((arguments[i__22810__auto___36384]));

var G__36385 = (i__22810__auto___36384 + (1));
i__22810__auto___36384 = G__36385;
continue;
} else {
}
break;
}

var G__36382 = args36380.length;
switch (G__36382) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36380.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args36388 = [];
var len__22809__auto___36391 = arguments.length;
var i__22810__auto___36392 = (0);
while(true){
if((i__22810__auto___36392 < len__22809__auto___36391)){
args36388.push((arguments[i__22810__auto___36392]));

var G__36393 = (i__22810__auto___36392 + (1));
i__22810__auto___36392 = G__36393;
continue;
} else {
}
break;
}

var G__36390 = args36388.length;
switch (G__36390) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36388.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__36387_SHARP_){
return !((p1__36387_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__22816__auto__ = [];
var len__22809__auto___36407 = arguments.length;
var i__22810__auto___36408 = (0);
while(true){
if((i__22810__auto___36408 < len__22809__auto___36407)){
args__22816__auto__.push((arguments[i__22810__auto___36408]));

var G__36409 = (i__22810__auto___36408 + (1));
i__22810__auto___36408 = G__36409;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((1) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22817__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__36397_36410 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__36398_36411 = null;
var count__36399_36412 = (0);
var i__36400_36413 = (0);
while(true){
if((i__36400_36413 < count__36399_36412)){
var vec__36401_36414 = cljs.core._nth.call(null,chunk__36398_36411,i__36400_36413);
var k_36415 = cljs.core.nth.call(null,vec__36401_36414,(0),null);
var v_36416 = cljs.core.nth.call(null,vec__36401_36414,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_36415),v_36416);

var G__36417 = seq__36397_36410;
var G__36418 = chunk__36398_36411;
var G__36419 = count__36399_36412;
var G__36420 = (i__36400_36413 + (1));
seq__36397_36410 = G__36417;
chunk__36398_36411 = G__36418;
count__36399_36412 = G__36419;
i__36400_36413 = G__36420;
continue;
} else {
var temp__4657__auto___36421 = cljs.core.seq.call(null,seq__36397_36410);
if(temp__4657__auto___36421){
var seq__36397_36422__$1 = temp__4657__auto___36421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36397_36422__$1)){
var c__22545__auto___36423 = cljs.core.chunk_first.call(null,seq__36397_36422__$1);
var G__36424 = cljs.core.chunk_rest.call(null,seq__36397_36422__$1);
var G__36425 = c__22545__auto___36423;
var G__36426 = cljs.core.count.call(null,c__22545__auto___36423);
var G__36427 = (0);
seq__36397_36410 = G__36424;
chunk__36398_36411 = G__36425;
count__36399_36412 = G__36426;
i__36400_36413 = G__36427;
continue;
} else {
var vec__36404_36428 = cljs.core.first.call(null,seq__36397_36422__$1);
var k_36429 = cljs.core.nth.call(null,vec__36404_36428,(0),null);
var v_36430 = cljs.core.nth.call(null,vec__36404_36428,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_36429),v_36430);

var G__36431 = cljs.core.next.call(null,seq__36397_36422__$1);
var G__36432 = null;
var G__36433 = (0);
var G__36434 = (0);
seq__36397_36410 = G__36431;
chunk__36398_36411 = G__36432;
count__36399_36412 = G__36433;
i__36400_36413 = G__36434;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq36395){
var G__36396 = cljs.core.first.call(null,seq36395);
var seq36395__$1 = cljs.core.next.call(null,seq36395);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36396,seq36395__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__22816__auto__ = [];
var len__22809__auto___36441 = arguments.length;
var i__22810__auto___36442 = (0);
while(true){
if((i__22810__auto___36442 < len__22809__auto___36441)){
args__22816__auto__.push((arguments[i__22810__auto___36442]));

var G__36443 = (i__22810__auto___36442 + (1));
i__22810__auto___36442 = G__36443;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((1) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22817__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__36437_36444 = cljs.core.seq.call(null,keywords);
var chunk__36438_36445 = null;
var count__36439_36446 = (0);
var i__36440_36447 = (0);
while(true){
if((i__36440_36447 < count__36439_36446)){
var kw_36448 = cljs.core._nth.call(null,chunk__36438_36445,i__36440_36447);
style.removeProperty(dommy.utils.as_str.call(null,kw_36448));

var G__36449 = seq__36437_36444;
var G__36450 = chunk__36438_36445;
var G__36451 = count__36439_36446;
var G__36452 = (i__36440_36447 + (1));
seq__36437_36444 = G__36449;
chunk__36438_36445 = G__36450;
count__36439_36446 = G__36451;
i__36440_36447 = G__36452;
continue;
} else {
var temp__4657__auto___36453 = cljs.core.seq.call(null,seq__36437_36444);
if(temp__4657__auto___36453){
var seq__36437_36454__$1 = temp__4657__auto___36453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36437_36454__$1)){
var c__22545__auto___36455 = cljs.core.chunk_first.call(null,seq__36437_36454__$1);
var G__36456 = cljs.core.chunk_rest.call(null,seq__36437_36454__$1);
var G__36457 = c__22545__auto___36455;
var G__36458 = cljs.core.count.call(null,c__22545__auto___36455);
var G__36459 = (0);
seq__36437_36444 = G__36456;
chunk__36438_36445 = G__36457;
count__36439_36446 = G__36458;
i__36440_36447 = G__36459;
continue;
} else {
var kw_36460 = cljs.core.first.call(null,seq__36437_36454__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_36460));

var G__36461 = cljs.core.next.call(null,seq__36437_36454__$1);
var G__36462 = null;
var G__36463 = (0);
var G__36464 = (0);
seq__36437_36444 = G__36461;
chunk__36438_36445 = G__36462;
count__36439_36446 = G__36463;
i__36440_36447 = G__36464;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq36435){
var G__36436 = cljs.core.first.call(null,seq36435);
var seq36435__$1 = cljs.core.next.call(null,seq36435);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36436,seq36435__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__22816__auto__ = [];
var len__22809__auto___36477 = arguments.length;
var i__22810__auto___36478 = (0);
while(true){
if((i__22810__auto___36478 < len__22809__auto___36477)){
args__22816__auto__.push((arguments[i__22810__auto___36478]));

var G__36479 = (i__22810__auto___36478 + (1));
i__22810__auto___36478 = G__36479;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((1) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22817__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36467_36480 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__36468_36481 = null;
var count__36469_36482 = (0);
var i__36470_36483 = (0);
while(true){
if((i__36470_36483 < count__36469_36482)){
var vec__36471_36484 = cljs.core._nth.call(null,chunk__36468_36481,i__36470_36483);
var k_36485 = cljs.core.nth.call(null,vec__36471_36484,(0),null);
var v_36486 = cljs.core.nth.call(null,vec__36471_36484,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_36485,[cljs.core.str(v_36486),cljs.core.str("px")].join(''));

var G__36487 = seq__36467_36480;
var G__36488 = chunk__36468_36481;
var G__36489 = count__36469_36482;
var G__36490 = (i__36470_36483 + (1));
seq__36467_36480 = G__36487;
chunk__36468_36481 = G__36488;
count__36469_36482 = G__36489;
i__36470_36483 = G__36490;
continue;
} else {
var temp__4657__auto___36491 = cljs.core.seq.call(null,seq__36467_36480);
if(temp__4657__auto___36491){
var seq__36467_36492__$1 = temp__4657__auto___36491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36467_36492__$1)){
var c__22545__auto___36493 = cljs.core.chunk_first.call(null,seq__36467_36492__$1);
var G__36494 = cljs.core.chunk_rest.call(null,seq__36467_36492__$1);
var G__36495 = c__22545__auto___36493;
var G__36496 = cljs.core.count.call(null,c__22545__auto___36493);
var G__36497 = (0);
seq__36467_36480 = G__36494;
chunk__36468_36481 = G__36495;
count__36469_36482 = G__36496;
i__36470_36483 = G__36497;
continue;
} else {
var vec__36474_36498 = cljs.core.first.call(null,seq__36467_36492__$1);
var k_36499 = cljs.core.nth.call(null,vec__36474_36498,(0),null);
var v_36500 = cljs.core.nth.call(null,vec__36474_36498,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_36499,[cljs.core.str(v_36500),cljs.core.str("px")].join(''));

var G__36501 = cljs.core.next.call(null,seq__36467_36492__$1);
var G__36502 = null;
var G__36503 = (0);
var G__36504 = (0);
seq__36467_36480 = G__36501;
chunk__36468_36481 = G__36502;
count__36469_36482 = G__36503;
i__36470_36483 = G__36504;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq36465){
var G__36466 = cljs.core.first.call(null,seq36465);
var seq36465__$1 = cljs.core.next.call(null,seq36465);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36466,seq36465__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args36505 = [];
var len__22809__auto___36524 = arguments.length;
var i__22810__auto___36525 = (0);
while(true){
if((i__22810__auto___36525 < len__22809__auto___36524)){
args36505.push((arguments[i__22810__auto___36525]));

var G__36526 = (i__22810__auto___36525 + (1));
i__22810__auto___36525 = G__36526;
continue;
} else {
}
break;
}

var G__36511 = args36505.length;
switch (G__36511) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__22828__auto__ = (new cljs.core.IndexedSeq(args36505.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22828__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__36512 = elem;
(G__36512[k__$1] = v);

return G__36512;
} else {
var G__36513 = elem;
G__36513.setAttribute(k__$1,v);

return G__36513;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36514_36528 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__36515_36529 = null;
var count__36516_36530 = (0);
var i__36517_36531 = (0);
while(true){
if((i__36517_36531 < count__36516_36530)){
var vec__36518_36532 = cljs.core._nth.call(null,chunk__36515_36529,i__36517_36531);
var k_36533__$1 = cljs.core.nth.call(null,vec__36518_36532,(0),null);
var v_36534__$1 = cljs.core.nth.call(null,vec__36518_36532,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_36533__$1,v_36534__$1);

var G__36535 = seq__36514_36528;
var G__36536 = chunk__36515_36529;
var G__36537 = count__36516_36530;
var G__36538 = (i__36517_36531 + (1));
seq__36514_36528 = G__36535;
chunk__36515_36529 = G__36536;
count__36516_36530 = G__36537;
i__36517_36531 = G__36538;
continue;
} else {
var temp__4657__auto___36539 = cljs.core.seq.call(null,seq__36514_36528);
if(temp__4657__auto___36539){
var seq__36514_36540__$1 = temp__4657__auto___36539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36514_36540__$1)){
var c__22545__auto___36541 = cljs.core.chunk_first.call(null,seq__36514_36540__$1);
var G__36542 = cljs.core.chunk_rest.call(null,seq__36514_36540__$1);
var G__36543 = c__22545__auto___36541;
var G__36544 = cljs.core.count.call(null,c__22545__auto___36541);
var G__36545 = (0);
seq__36514_36528 = G__36542;
chunk__36515_36529 = G__36543;
count__36516_36530 = G__36544;
i__36517_36531 = G__36545;
continue;
} else {
var vec__36521_36546 = cljs.core.first.call(null,seq__36514_36540__$1);
var k_36547__$1 = cljs.core.nth.call(null,vec__36521_36546,(0),null);
var v_36548__$1 = cljs.core.nth.call(null,vec__36521_36546,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_36547__$1,v_36548__$1);

var G__36549 = cljs.core.next.call(null,seq__36514_36540__$1);
var G__36550 = null;
var G__36551 = (0);
var G__36552 = (0);
seq__36514_36528 = G__36549;
chunk__36515_36529 = G__36550;
count__36516_36530 = G__36551;
i__36517_36531 = G__36552;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq36506){
var G__36507 = cljs.core.first.call(null,seq36506);
var seq36506__$1 = cljs.core.next.call(null,seq36506);
var G__36508 = cljs.core.first.call(null,seq36506__$1);
var seq36506__$2 = cljs.core.next.call(null,seq36506__$1);
var G__36509 = cljs.core.first.call(null,seq36506__$2);
var seq36506__$3 = cljs.core.next.call(null,seq36506__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36507,G__36508,G__36509,seq36506__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args36553 = [];
var len__22809__auto___36563 = arguments.length;
var i__22810__auto___36564 = (0);
while(true){
if((i__22810__auto___36564 < len__22809__auto___36563)){
args36553.push((arguments[i__22810__auto___36564]));

var G__36565 = (i__22810__auto___36564 + (1));
i__22810__auto___36564 = G__36565;
continue;
} else {
}
break;
}

var G__36558 = args36553.length;
switch (G__36558) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22828__auto__ = (new cljs.core.IndexedSeq(args36553.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22828__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_36567__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_36567__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_36567__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__36559_36568 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__36560_36569 = null;
var count__36561_36570 = (0);
var i__36562_36571 = (0);
while(true){
if((i__36562_36571 < count__36561_36570)){
var k_36572__$1 = cljs.core._nth.call(null,chunk__36560_36569,i__36562_36571);
dommy.core.remove_attr_BANG_.call(null,elem,k_36572__$1);

var G__36573 = seq__36559_36568;
var G__36574 = chunk__36560_36569;
var G__36575 = count__36561_36570;
var G__36576 = (i__36562_36571 + (1));
seq__36559_36568 = G__36573;
chunk__36560_36569 = G__36574;
count__36561_36570 = G__36575;
i__36562_36571 = G__36576;
continue;
} else {
var temp__4657__auto___36577 = cljs.core.seq.call(null,seq__36559_36568);
if(temp__4657__auto___36577){
var seq__36559_36578__$1 = temp__4657__auto___36577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36559_36578__$1)){
var c__22545__auto___36579 = cljs.core.chunk_first.call(null,seq__36559_36578__$1);
var G__36580 = cljs.core.chunk_rest.call(null,seq__36559_36578__$1);
var G__36581 = c__22545__auto___36579;
var G__36582 = cljs.core.count.call(null,c__22545__auto___36579);
var G__36583 = (0);
seq__36559_36568 = G__36580;
chunk__36560_36569 = G__36581;
count__36561_36570 = G__36582;
i__36562_36571 = G__36583;
continue;
} else {
var k_36584__$1 = cljs.core.first.call(null,seq__36559_36578__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_36584__$1);

var G__36585 = cljs.core.next.call(null,seq__36559_36578__$1);
var G__36586 = null;
var G__36587 = (0);
var G__36588 = (0);
seq__36559_36568 = G__36585;
chunk__36560_36569 = G__36586;
count__36561_36570 = G__36587;
i__36562_36571 = G__36588;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq36554){
var G__36555 = cljs.core.first.call(null,seq36554);
var seq36554__$1 = cljs.core.next.call(null,seq36554);
var G__36556 = cljs.core.first.call(null,seq36554__$1);
var seq36554__$2 = cljs.core.next.call(null,seq36554__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36555,G__36556,seq36554__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args36589 = [];
var len__22809__auto___36592 = arguments.length;
var i__22810__auto___36593 = (0);
while(true){
if((i__22810__auto___36593 < len__22809__auto___36592)){
args36589.push((arguments[i__22810__auto___36593]));

var G__36594 = (i__22810__auto___36593 + (1));
i__22810__auto___36593 = G__36594;
continue;
} else {
}
break;
}

var G__36591 = args36589.length;
switch (G__36591) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36589.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args36596 = [];
var len__22809__auto___36614 = arguments.length;
var i__22810__auto___36615 = (0);
while(true){
if((i__22810__auto___36615 < len__22809__auto___36614)){
args36596.push((arguments[i__22810__auto___36615]));

var G__36616 = (i__22810__auto___36615 + (1));
i__22810__auto___36615 = G__36616;
continue;
} else {
}
break;
}

var G__36601 = args36596.length;
switch (G__36601) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22828__auto__ = (new cljs.core.IndexedSeq(args36596.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22828__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___36618 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___36618)){
var class_list_36619 = temp__4655__auto___36618;
var seq__36602_36620 = cljs.core.seq.call(null,classes__$1);
var chunk__36603_36621 = null;
var count__36604_36622 = (0);
var i__36605_36623 = (0);
while(true){
if((i__36605_36623 < count__36604_36622)){
var c_36624 = cljs.core._nth.call(null,chunk__36603_36621,i__36605_36623);
class_list_36619.add(c_36624);

var G__36625 = seq__36602_36620;
var G__36626 = chunk__36603_36621;
var G__36627 = count__36604_36622;
var G__36628 = (i__36605_36623 + (1));
seq__36602_36620 = G__36625;
chunk__36603_36621 = G__36626;
count__36604_36622 = G__36627;
i__36605_36623 = G__36628;
continue;
} else {
var temp__4657__auto___36629 = cljs.core.seq.call(null,seq__36602_36620);
if(temp__4657__auto___36629){
var seq__36602_36630__$1 = temp__4657__auto___36629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36602_36630__$1)){
var c__22545__auto___36631 = cljs.core.chunk_first.call(null,seq__36602_36630__$1);
var G__36632 = cljs.core.chunk_rest.call(null,seq__36602_36630__$1);
var G__36633 = c__22545__auto___36631;
var G__36634 = cljs.core.count.call(null,c__22545__auto___36631);
var G__36635 = (0);
seq__36602_36620 = G__36632;
chunk__36603_36621 = G__36633;
count__36604_36622 = G__36634;
i__36605_36623 = G__36635;
continue;
} else {
var c_36636 = cljs.core.first.call(null,seq__36602_36630__$1);
class_list_36619.add(c_36636);

var G__36637 = cljs.core.next.call(null,seq__36602_36630__$1);
var G__36638 = null;
var G__36639 = (0);
var G__36640 = (0);
seq__36602_36620 = G__36637;
chunk__36603_36621 = G__36638;
count__36604_36622 = G__36639;
i__36605_36623 = G__36640;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36606_36641 = cljs.core.seq.call(null,classes__$1);
var chunk__36607_36642 = null;
var count__36608_36643 = (0);
var i__36609_36644 = (0);
while(true){
if((i__36609_36644 < count__36608_36643)){
var c_36645 = cljs.core._nth.call(null,chunk__36607_36642,i__36609_36644);
var class_name_36646 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_36646,c_36645))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_36646 === ""))?c_36645:[cljs.core.str(class_name_36646),cljs.core.str(" "),cljs.core.str(c_36645)].join('')));
}

var G__36647 = seq__36606_36641;
var G__36648 = chunk__36607_36642;
var G__36649 = count__36608_36643;
var G__36650 = (i__36609_36644 + (1));
seq__36606_36641 = G__36647;
chunk__36607_36642 = G__36648;
count__36608_36643 = G__36649;
i__36609_36644 = G__36650;
continue;
} else {
var temp__4657__auto___36651 = cljs.core.seq.call(null,seq__36606_36641);
if(temp__4657__auto___36651){
var seq__36606_36652__$1 = temp__4657__auto___36651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36606_36652__$1)){
var c__22545__auto___36653 = cljs.core.chunk_first.call(null,seq__36606_36652__$1);
var G__36654 = cljs.core.chunk_rest.call(null,seq__36606_36652__$1);
var G__36655 = c__22545__auto___36653;
var G__36656 = cljs.core.count.call(null,c__22545__auto___36653);
var G__36657 = (0);
seq__36606_36641 = G__36654;
chunk__36607_36642 = G__36655;
count__36608_36643 = G__36656;
i__36609_36644 = G__36657;
continue;
} else {
var c_36658 = cljs.core.first.call(null,seq__36606_36652__$1);
var class_name_36659 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_36659,c_36658))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_36659 === ""))?c_36658:[cljs.core.str(class_name_36659),cljs.core.str(" "),cljs.core.str(c_36658)].join('')));
}

var G__36660 = cljs.core.next.call(null,seq__36606_36652__$1);
var G__36661 = null;
var G__36662 = (0);
var G__36663 = (0);
seq__36606_36641 = G__36660;
chunk__36607_36642 = G__36661;
count__36608_36643 = G__36662;
i__36609_36644 = G__36663;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__36610_36664 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__36611_36665 = null;
var count__36612_36666 = (0);
var i__36613_36667 = (0);
while(true){
if((i__36613_36667 < count__36612_36666)){
var c_36668 = cljs.core._nth.call(null,chunk__36611_36665,i__36613_36667);
dommy.core.add_class_BANG_.call(null,elem,c_36668);

var G__36669 = seq__36610_36664;
var G__36670 = chunk__36611_36665;
var G__36671 = count__36612_36666;
var G__36672 = (i__36613_36667 + (1));
seq__36610_36664 = G__36669;
chunk__36611_36665 = G__36670;
count__36612_36666 = G__36671;
i__36613_36667 = G__36672;
continue;
} else {
var temp__4657__auto___36673 = cljs.core.seq.call(null,seq__36610_36664);
if(temp__4657__auto___36673){
var seq__36610_36674__$1 = temp__4657__auto___36673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36610_36674__$1)){
var c__22545__auto___36675 = cljs.core.chunk_first.call(null,seq__36610_36674__$1);
var G__36676 = cljs.core.chunk_rest.call(null,seq__36610_36674__$1);
var G__36677 = c__22545__auto___36675;
var G__36678 = cljs.core.count.call(null,c__22545__auto___36675);
var G__36679 = (0);
seq__36610_36664 = G__36676;
chunk__36611_36665 = G__36677;
count__36612_36666 = G__36678;
i__36613_36667 = G__36679;
continue;
} else {
var c_36680 = cljs.core.first.call(null,seq__36610_36674__$1);
dommy.core.add_class_BANG_.call(null,elem,c_36680);

var G__36681 = cljs.core.next.call(null,seq__36610_36674__$1);
var G__36682 = null;
var G__36683 = (0);
var G__36684 = (0);
seq__36610_36664 = G__36681;
chunk__36611_36665 = G__36682;
count__36612_36666 = G__36683;
i__36613_36667 = G__36684;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq36597){
var G__36598 = cljs.core.first.call(null,seq36597);
var seq36597__$1 = cljs.core.next.call(null,seq36597);
var G__36599 = cljs.core.first.call(null,seq36597__$1);
var seq36597__$2 = cljs.core.next.call(null,seq36597__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36598,G__36599,seq36597__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args36685 = [];
var len__22809__auto___36695 = arguments.length;
var i__22810__auto___36696 = (0);
while(true){
if((i__22810__auto___36696 < len__22809__auto___36695)){
args36685.push((arguments[i__22810__auto___36696]));

var G__36697 = (i__22810__auto___36696 + (1));
i__22810__auto___36696 = G__36697;
continue;
} else {
}
break;
}

var G__36690 = args36685.length;
switch (G__36690) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22828__auto__ = (new cljs.core.IndexedSeq(args36685.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22828__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___36699 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___36699)){
var class_list_36700 = temp__4655__auto___36699;
class_list_36700.remove(c__$1);
} else {
var class_name_36701 = dommy.core.class$.call(null,elem);
var new_class_name_36702 = dommy.utils.remove_class_str.call(null,class_name_36701,c__$1);
if((class_name_36701 === new_class_name_36702)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_36702);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__36691 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__36692 = null;
var count__36693 = (0);
var i__36694 = (0);
while(true){
if((i__36694 < count__36693)){
var c = cljs.core._nth.call(null,chunk__36692,i__36694);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__36703 = seq__36691;
var G__36704 = chunk__36692;
var G__36705 = count__36693;
var G__36706 = (i__36694 + (1));
seq__36691 = G__36703;
chunk__36692 = G__36704;
count__36693 = G__36705;
i__36694 = G__36706;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36691);
if(temp__4657__auto__){
var seq__36691__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36691__$1)){
var c__22545__auto__ = cljs.core.chunk_first.call(null,seq__36691__$1);
var G__36707 = cljs.core.chunk_rest.call(null,seq__36691__$1);
var G__36708 = c__22545__auto__;
var G__36709 = cljs.core.count.call(null,c__22545__auto__);
var G__36710 = (0);
seq__36691 = G__36707;
chunk__36692 = G__36708;
count__36693 = G__36709;
i__36694 = G__36710;
continue;
} else {
var c = cljs.core.first.call(null,seq__36691__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__36711 = cljs.core.next.call(null,seq__36691__$1);
var G__36712 = null;
var G__36713 = (0);
var G__36714 = (0);
seq__36691 = G__36711;
chunk__36692 = G__36712;
count__36693 = G__36713;
i__36694 = G__36714;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq36686){
var G__36687 = cljs.core.first.call(null,seq36686);
var seq36686__$1 = cljs.core.next.call(null,seq36686);
var G__36688 = cljs.core.first.call(null,seq36686__$1);
var seq36686__$2 = cljs.core.next.call(null,seq36686__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36687,G__36688,seq36686__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args36715 = [];
var len__22809__auto___36718 = arguments.length;
var i__22810__auto___36719 = (0);
while(true){
if((i__22810__auto___36719 < len__22809__auto___36718)){
args36715.push((arguments[i__22810__auto___36719]));

var G__36720 = (i__22810__auto___36719 + (1));
i__22810__auto___36719 = G__36720;
continue;
} else {
}
break;
}

var G__36717 = args36715.length;
switch (G__36717) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36715.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___36722 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___36722)){
var class_list_36723 = temp__4655__auto___36722;
class_list_36723.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args36724 = [];
var len__22809__auto___36727 = arguments.length;
var i__22810__auto___36728 = (0);
while(true){
if((i__22810__auto___36728 < len__22809__auto___36727)){
args36724.push((arguments[i__22810__auto___36728]));

var G__36729 = (i__22810__auto___36728 + (1));
i__22810__auto___36728 = G__36729;
continue;
} else {
}
break;
}

var G__36726 = args36724.length;
switch (G__36726) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36724.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args36731 = [];
var len__22809__auto___36734 = arguments.length;
var i__22810__auto___36735 = (0);
while(true){
if((i__22810__auto___36735 < len__22809__auto___36734)){
args36731.push((arguments[i__22810__auto___36735]));

var G__36736 = (i__22810__auto___36735 + (1));
i__22810__auto___36735 = G__36736;
continue;
} else {
}
break;
}

var G__36733 = args36731.length;
switch (G__36733) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36731.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args36738 = [];
var len__22809__auto___36749 = arguments.length;
var i__22810__auto___36750 = (0);
while(true){
if((i__22810__auto___36750 < len__22809__auto___36749)){
args36738.push((arguments[i__22810__auto___36750]));

var G__36751 = (i__22810__auto___36750 + (1));
i__22810__auto___36750 = G__36751;
continue;
} else {
}
break;
}

var G__36743 = args36738.length;
switch (G__36743) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22828__auto__ = (new cljs.core.IndexedSeq(args36738.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22828__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36744 = parent;
G__36744.appendChild(child);

return G__36744;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36745_36753 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__36746_36754 = null;
var count__36747_36755 = (0);
var i__36748_36756 = (0);
while(true){
if((i__36748_36756 < count__36747_36755)){
var c_36757 = cljs.core._nth.call(null,chunk__36746_36754,i__36748_36756);
dommy.core.append_BANG_.call(null,parent,c_36757);

var G__36758 = seq__36745_36753;
var G__36759 = chunk__36746_36754;
var G__36760 = count__36747_36755;
var G__36761 = (i__36748_36756 + (1));
seq__36745_36753 = G__36758;
chunk__36746_36754 = G__36759;
count__36747_36755 = G__36760;
i__36748_36756 = G__36761;
continue;
} else {
var temp__4657__auto___36762 = cljs.core.seq.call(null,seq__36745_36753);
if(temp__4657__auto___36762){
var seq__36745_36763__$1 = temp__4657__auto___36762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36745_36763__$1)){
var c__22545__auto___36764 = cljs.core.chunk_first.call(null,seq__36745_36763__$1);
var G__36765 = cljs.core.chunk_rest.call(null,seq__36745_36763__$1);
var G__36766 = c__22545__auto___36764;
var G__36767 = cljs.core.count.call(null,c__22545__auto___36764);
var G__36768 = (0);
seq__36745_36753 = G__36765;
chunk__36746_36754 = G__36766;
count__36747_36755 = G__36767;
i__36748_36756 = G__36768;
continue;
} else {
var c_36769 = cljs.core.first.call(null,seq__36745_36763__$1);
dommy.core.append_BANG_.call(null,parent,c_36769);

var G__36770 = cljs.core.next.call(null,seq__36745_36763__$1);
var G__36771 = null;
var G__36772 = (0);
var G__36773 = (0);
seq__36745_36753 = G__36770;
chunk__36746_36754 = G__36771;
count__36747_36755 = G__36772;
i__36748_36756 = G__36773;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq36739){
var G__36740 = cljs.core.first.call(null,seq36739);
var seq36739__$1 = cljs.core.next.call(null,seq36739);
var G__36741 = cljs.core.first.call(null,seq36739__$1);
var seq36739__$2 = cljs.core.next.call(null,seq36739__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36740,G__36741,seq36739__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args36774 = [];
var len__22809__auto___36785 = arguments.length;
var i__22810__auto___36786 = (0);
while(true){
if((i__22810__auto___36786 < len__22809__auto___36785)){
args36774.push((arguments[i__22810__auto___36786]));

var G__36787 = (i__22810__auto___36786 + (1));
i__22810__auto___36786 = G__36787;
continue;
} else {
}
break;
}

var G__36779 = args36774.length;
switch (G__36779) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__22828__auto__ = (new cljs.core.IndexedSeq(args36774.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22828__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36780 = parent;
G__36780.insertBefore(child,parent.firstChild);

return G__36780;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36781_36789 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__36782_36790 = null;
var count__36783_36791 = (0);
var i__36784_36792 = (0);
while(true){
if((i__36784_36792 < count__36783_36791)){
var c_36793 = cljs.core._nth.call(null,chunk__36782_36790,i__36784_36792);
dommy.core.prepend_BANG_.call(null,parent,c_36793);

var G__36794 = seq__36781_36789;
var G__36795 = chunk__36782_36790;
var G__36796 = count__36783_36791;
var G__36797 = (i__36784_36792 + (1));
seq__36781_36789 = G__36794;
chunk__36782_36790 = G__36795;
count__36783_36791 = G__36796;
i__36784_36792 = G__36797;
continue;
} else {
var temp__4657__auto___36798 = cljs.core.seq.call(null,seq__36781_36789);
if(temp__4657__auto___36798){
var seq__36781_36799__$1 = temp__4657__auto___36798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36781_36799__$1)){
var c__22545__auto___36800 = cljs.core.chunk_first.call(null,seq__36781_36799__$1);
var G__36801 = cljs.core.chunk_rest.call(null,seq__36781_36799__$1);
var G__36802 = c__22545__auto___36800;
var G__36803 = cljs.core.count.call(null,c__22545__auto___36800);
var G__36804 = (0);
seq__36781_36789 = G__36801;
chunk__36782_36790 = G__36802;
count__36783_36791 = G__36803;
i__36784_36792 = G__36804;
continue;
} else {
var c_36805 = cljs.core.first.call(null,seq__36781_36799__$1);
dommy.core.prepend_BANG_.call(null,parent,c_36805);

var G__36806 = cljs.core.next.call(null,seq__36781_36799__$1);
var G__36807 = null;
var G__36808 = (0);
var G__36809 = (0);
seq__36781_36789 = G__36806;
chunk__36782_36790 = G__36807;
count__36783_36791 = G__36808;
i__36784_36792 = G__36809;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq36775){
var G__36776 = cljs.core.first.call(null,seq36775);
var seq36775__$1 = cljs.core.next.call(null,seq36775);
var G__36777 = cljs.core.first.call(null,seq36775__$1);
var seq36775__$2 = cljs.core.next.call(null,seq36775__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36776,G__36777,seq36775__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___36810 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___36810)){
var next_36811 = temp__4655__auto___36810;
dommy.core.insert_before_BANG_.call(null,elem,next_36811);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args36812 = [];
var len__22809__auto___36816 = arguments.length;
var i__22810__auto___36817 = (0);
while(true){
if((i__22810__auto___36817 < len__22809__auto___36816)){
args36812.push((arguments[i__22810__auto___36817]));

var G__36818 = (i__22810__auto___36817 + (1));
i__22810__auto___36817 = G__36818;
continue;
} else {
}
break;
}

var G__36814 = args36812.length;
switch (G__36814) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36812.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__36815 = p;
G__36815.removeChild(elem);

return G__36815;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__36820){
var vec__36821 = p__36820;
var special_mouse_event = cljs.core.nth.call(null,vec__36821,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__36821,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__36821,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__36821,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__21734__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__21722__auto__ = related_target;
if(cljs.core.truth_(and__21722__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__21722__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__36821,special_mouse_event,real_mouse_event))
});})(vec__36821,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__21722__auto__ = selected_target;
if(cljs.core.truth_(and__21722__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__21722__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__21734__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__21734__auto__)){
return or__21734__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__22816__auto__ = [];
var len__22809__auto___36827 = arguments.length;
var i__22810__auto___36828 = (0);
while(true){
if((i__22810__auto___36828 < len__22809__auto___36827)){
args__22816__auto__.push((arguments[i__22810__auto___36828]));

var G__36829 = (i__22810__auto___36828 + (1));
i__22810__auto___36828 = G__36829;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((2) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22817__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq36824){
var G__36825 = cljs.core.first.call(null,seq36824);
var seq36824__$1 = cljs.core.next.call(null,seq36824);
var G__36826 = cljs.core.first.call(null,seq36824__$1);
var seq36824__$2 = cljs.core.next.call(null,seq36824__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36825,G__36826,seq36824__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__22816__auto__ = [];
var len__22809__auto___36869 = arguments.length;
var i__22810__auto___36870 = (0);
while(true){
if((i__22810__auto___36870 < len__22809__auto___36869)){
args__22816__auto__.push((arguments[i__22810__auto___36870]));

var G__36871 = (i__22810__auto___36870 + (1));
i__22810__auto___36870 = G__36871;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((1) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22817__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36832_36872 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_36873 = cljs.core.nth.call(null,vec__36832_36872,(0),null);
var selector_36874 = cljs.core.nth.call(null,vec__36832_36872,(1),null);
var seq__36835_36875 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__36842_36876 = null;
var count__36843_36877 = (0);
var i__36844_36878 = (0);
while(true){
if((i__36844_36878 < count__36843_36877)){
var vec__36851_36879 = cljs.core._nth.call(null,chunk__36842_36876,i__36844_36878);
var orig_type_36880 = cljs.core.nth.call(null,vec__36851_36879,(0),null);
var f_36881 = cljs.core.nth.call(null,vec__36851_36879,(1),null);
var seq__36845_36882 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_36880,cljs.core.PersistentArrayMap.fromArray([orig_type_36880,cljs.core.identity], true, false)));
var chunk__36847_36883 = null;
var count__36848_36884 = (0);
var i__36849_36885 = (0);
while(true){
if((i__36849_36885 < count__36848_36884)){
var vec__36854_36886 = cljs.core._nth.call(null,chunk__36847_36883,i__36849_36885);
var actual_type_36887 = cljs.core.nth.call(null,vec__36854_36886,(0),null);
var factory_36888 = cljs.core.nth.call(null,vec__36854_36886,(1),null);
var canonical_f_36889 = (cljs.core.truth_(selector_36874)?cljs.core.partial.call(null,dommy.core.live_listener,elem_36873,selector_36874):cljs.core.identity).call(null,factory_36888.call(null,f_36881));
dommy.core.update_event_listeners_BANG_.call(null,elem_36873,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36874,actual_type_36887,f_36881], null),canonical_f_36889);

if(cljs.core.truth_(elem_36873.addEventListener)){
elem_36873.addEventListener(cljs.core.name.call(null,actual_type_36887),canonical_f_36889);
} else {
elem_36873.attachEvent(cljs.core.name.call(null,actual_type_36887),canonical_f_36889);
}

var G__36890 = seq__36845_36882;
var G__36891 = chunk__36847_36883;
var G__36892 = count__36848_36884;
var G__36893 = (i__36849_36885 + (1));
seq__36845_36882 = G__36890;
chunk__36847_36883 = G__36891;
count__36848_36884 = G__36892;
i__36849_36885 = G__36893;
continue;
} else {
var temp__4657__auto___36894 = cljs.core.seq.call(null,seq__36845_36882);
if(temp__4657__auto___36894){
var seq__36845_36895__$1 = temp__4657__auto___36894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36845_36895__$1)){
var c__22545__auto___36896 = cljs.core.chunk_first.call(null,seq__36845_36895__$1);
var G__36897 = cljs.core.chunk_rest.call(null,seq__36845_36895__$1);
var G__36898 = c__22545__auto___36896;
var G__36899 = cljs.core.count.call(null,c__22545__auto___36896);
var G__36900 = (0);
seq__36845_36882 = G__36897;
chunk__36847_36883 = G__36898;
count__36848_36884 = G__36899;
i__36849_36885 = G__36900;
continue;
} else {
var vec__36857_36901 = cljs.core.first.call(null,seq__36845_36895__$1);
var actual_type_36902 = cljs.core.nth.call(null,vec__36857_36901,(0),null);
var factory_36903 = cljs.core.nth.call(null,vec__36857_36901,(1),null);
var canonical_f_36904 = (cljs.core.truth_(selector_36874)?cljs.core.partial.call(null,dommy.core.live_listener,elem_36873,selector_36874):cljs.core.identity).call(null,factory_36903.call(null,f_36881));
dommy.core.update_event_listeners_BANG_.call(null,elem_36873,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36874,actual_type_36902,f_36881], null),canonical_f_36904);

if(cljs.core.truth_(elem_36873.addEventListener)){
elem_36873.addEventListener(cljs.core.name.call(null,actual_type_36902),canonical_f_36904);
} else {
elem_36873.attachEvent(cljs.core.name.call(null,actual_type_36902),canonical_f_36904);
}

var G__36905 = cljs.core.next.call(null,seq__36845_36895__$1);
var G__36906 = null;
var G__36907 = (0);
var G__36908 = (0);
seq__36845_36882 = G__36905;
chunk__36847_36883 = G__36906;
count__36848_36884 = G__36907;
i__36849_36885 = G__36908;
continue;
}
} else {
}
}
break;
}

var G__36909 = seq__36835_36875;
var G__36910 = chunk__36842_36876;
var G__36911 = count__36843_36877;
var G__36912 = (i__36844_36878 + (1));
seq__36835_36875 = G__36909;
chunk__36842_36876 = G__36910;
count__36843_36877 = G__36911;
i__36844_36878 = G__36912;
continue;
} else {
var temp__4657__auto___36913 = cljs.core.seq.call(null,seq__36835_36875);
if(temp__4657__auto___36913){
var seq__36835_36914__$1 = temp__4657__auto___36913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36835_36914__$1)){
var c__22545__auto___36915 = cljs.core.chunk_first.call(null,seq__36835_36914__$1);
var G__36916 = cljs.core.chunk_rest.call(null,seq__36835_36914__$1);
var G__36917 = c__22545__auto___36915;
var G__36918 = cljs.core.count.call(null,c__22545__auto___36915);
var G__36919 = (0);
seq__36835_36875 = G__36916;
chunk__36842_36876 = G__36917;
count__36843_36877 = G__36918;
i__36844_36878 = G__36919;
continue;
} else {
var vec__36860_36920 = cljs.core.first.call(null,seq__36835_36914__$1);
var orig_type_36921 = cljs.core.nth.call(null,vec__36860_36920,(0),null);
var f_36922 = cljs.core.nth.call(null,vec__36860_36920,(1),null);
var seq__36836_36923 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_36921,cljs.core.PersistentArrayMap.fromArray([orig_type_36921,cljs.core.identity], true, false)));
var chunk__36838_36924 = null;
var count__36839_36925 = (0);
var i__36840_36926 = (0);
while(true){
if((i__36840_36926 < count__36839_36925)){
var vec__36863_36927 = cljs.core._nth.call(null,chunk__36838_36924,i__36840_36926);
var actual_type_36928 = cljs.core.nth.call(null,vec__36863_36927,(0),null);
var factory_36929 = cljs.core.nth.call(null,vec__36863_36927,(1),null);
var canonical_f_36930 = (cljs.core.truth_(selector_36874)?cljs.core.partial.call(null,dommy.core.live_listener,elem_36873,selector_36874):cljs.core.identity).call(null,factory_36929.call(null,f_36922));
dommy.core.update_event_listeners_BANG_.call(null,elem_36873,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36874,actual_type_36928,f_36922], null),canonical_f_36930);

if(cljs.core.truth_(elem_36873.addEventListener)){
elem_36873.addEventListener(cljs.core.name.call(null,actual_type_36928),canonical_f_36930);
} else {
elem_36873.attachEvent(cljs.core.name.call(null,actual_type_36928),canonical_f_36930);
}

var G__36931 = seq__36836_36923;
var G__36932 = chunk__36838_36924;
var G__36933 = count__36839_36925;
var G__36934 = (i__36840_36926 + (1));
seq__36836_36923 = G__36931;
chunk__36838_36924 = G__36932;
count__36839_36925 = G__36933;
i__36840_36926 = G__36934;
continue;
} else {
var temp__4657__auto___36935__$1 = cljs.core.seq.call(null,seq__36836_36923);
if(temp__4657__auto___36935__$1){
var seq__36836_36936__$1 = temp__4657__auto___36935__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36836_36936__$1)){
var c__22545__auto___36937 = cljs.core.chunk_first.call(null,seq__36836_36936__$1);
var G__36938 = cljs.core.chunk_rest.call(null,seq__36836_36936__$1);
var G__36939 = c__22545__auto___36937;
var G__36940 = cljs.core.count.call(null,c__22545__auto___36937);
var G__36941 = (0);
seq__36836_36923 = G__36938;
chunk__36838_36924 = G__36939;
count__36839_36925 = G__36940;
i__36840_36926 = G__36941;
continue;
} else {
var vec__36866_36942 = cljs.core.first.call(null,seq__36836_36936__$1);
var actual_type_36943 = cljs.core.nth.call(null,vec__36866_36942,(0),null);
var factory_36944 = cljs.core.nth.call(null,vec__36866_36942,(1),null);
var canonical_f_36945 = (cljs.core.truth_(selector_36874)?cljs.core.partial.call(null,dommy.core.live_listener,elem_36873,selector_36874):cljs.core.identity).call(null,factory_36944.call(null,f_36922));
dommy.core.update_event_listeners_BANG_.call(null,elem_36873,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36874,actual_type_36943,f_36922], null),canonical_f_36945);

if(cljs.core.truth_(elem_36873.addEventListener)){
elem_36873.addEventListener(cljs.core.name.call(null,actual_type_36943),canonical_f_36945);
} else {
elem_36873.attachEvent(cljs.core.name.call(null,actual_type_36943),canonical_f_36945);
}

var G__36946 = cljs.core.next.call(null,seq__36836_36936__$1);
var G__36947 = null;
var G__36948 = (0);
var G__36949 = (0);
seq__36836_36923 = G__36946;
chunk__36838_36924 = G__36947;
count__36839_36925 = G__36948;
i__36840_36926 = G__36949;
continue;
}
} else {
}
}
break;
}

var G__36950 = cljs.core.next.call(null,seq__36835_36914__$1);
var G__36951 = null;
var G__36952 = (0);
var G__36953 = (0);
seq__36835_36875 = G__36950;
chunk__36842_36876 = G__36951;
count__36843_36877 = G__36952;
i__36844_36878 = G__36953;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq36830){
var G__36831 = cljs.core.first.call(null,seq36830);
var seq36830__$1 = cljs.core.next.call(null,seq36830);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36831,seq36830__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__22816__auto__ = [];
var len__22809__auto___36993 = arguments.length;
var i__22810__auto___36994 = (0);
while(true){
if((i__22810__auto___36994 < len__22809__auto___36993)){
args__22816__auto__.push((arguments[i__22810__auto___36994]));

var G__36995 = (i__22810__auto___36994 + (1));
i__22810__auto___36994 = G__36995;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((1) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22817__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36956_36996 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_36997 = cljs.core.nth.call(null,vec__36956_36996,(0),null);
var selector_36998 = cljs.core.nth.call(null,vec__36956_36996,(1),null);
var seq__36959_36999 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__36966_37000 = null;
var count__36967_37001 = (0);
var i__36968_37002 = (0);
while(true){
if((i__36968_37002 < count__36967_37001)){
var vec__36975_37003 = cljs.core._nth.call(null,chunk__36966_37000,i__36968_37002);
var orig_type_37004 = cljs.core.nth.call(null,vec__36975_37003,(0),null);
var f_37005 = cljs.core.nth.call(null,vec__36975_37003,(1),null);
var seq__36969_37006 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37004,cljs.core.PersistentArrayMap.fromArray([orig_type_37004,cljs.core.identity], true, false)));
var chunk__36971_37007 = null;
var count__36972_37008 = (0);
var i__36973_37009 = (0);
while(true){
if((i__36973_37009 < count__36972_37008)){
var vec__36978_37010 = cljs.core._nth.call(null,chunk__36971_37007,i__36973_37009);
var actual_type_37011 = cljs.core.nth.call(null,vec__36978_37010,(0),null);
var __37012 = cljs.core.nth.call(null,vec__36978_37010,(1),null);
var keys_37013 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36998,actual_type_37011,f_37005], null);
var canonical_f_37014 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_36997),keys_37013);
dommy.core.update_event_listeners_BANG_.call(null,elem_36997,dommy.utils.dissoc_in,keys_37013);

if(cljs.core.truth_(elem_36997.removeEventListener)){
elem_36997.removeEventListener(cljs.core.name.call(null,actual_type_37011),canonical_f_37014);
} else {
elem_36997.detachEvent(cljs.core.name.call(null,actual_type_37011),canonical_f_37014);
}

var G__37015 = seq__36969_37006;
var G__37016 = chunk__36971_37007;
var G__37017 = count__36972_37008;
var G__37018 = (i__36973_37009 + (1));
seq__36969_37006 = G__37015;
chunk__36971_37007 = G__37016;
count__36972_37008 = G__37017;
i__36973_37009 = G__37018;
continue;
} else {
var temp__4657__auto___37019 = cljs.core.seq.call(null,seq__36969_37006);
if(temp__4657__auto___37019){
var seq__36969_37020__$1 = temp__4657__auto___37019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36969_37020__$1)){
var c__22545__auto___37021 = cljs.core.chunk_first.call(null,seq__36969_37020__$1);
var G__37022 = cljs.core.chunk_rest.call(null,seq__36969_37020__$1);
var G__37023 = c__22545__auto___37021;
var G__37024 = cljs.core.count.call(null,c__22545__auto___37021);
var G__37025 = (0);
seq__36969_37006 = G__37022;
chunk__36971_37007 = G__37023;
count__36972_37008 = G__37024;
i__36973_37009 = G__37025;
continue;
} else {
var vec__36981_37026 = cljs.core.first.call(null,seq__36969_37020__$1);
var actual_type_37027 = cljs.core.nth.call(null,vec__36981_37026,(0),null);
var __37028 = cljs.core.nth.call(null,vec__36981_37026,(1),null);
var keys_37029 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36998,actual_type_37027,f_37005], null);
var canonical_f_37030 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_36997),keys_37029);
dommy.core.update_event_listeners_BANG_.call(null,elem_36997,dommy.utils.dissoc_in,keys_37029);

if(cljs.core.truth_(elem_36997.removeEventListener)){
elem_36997.removeEventListener(cljs.core.name.call(null,actual_type_37027),canonical_f_37030);
} else {
elem_36997.detachEvent(cljs.core.name.call(null,actual_type_37027),canonical_f_37030);
}

var G__37031 = cljs.core.next.call(null,seq__36969_37020__$1);
var G__37032 = null;
var G__37033 = (0);
var G__37034 = (0);
seq__36969_37006 = G__37031;
chunk__36971_37007 = G__37032;
count__36972_37008 = G__37033;
i__36973_37009 = G__37034;
continue;
}
} else {
}
}
break;
}

var G__37035 = seq__36959_36999;
var G__37036 = chunk__36966_37000;
var G__37037 = count__36967_37001;
var G__37038 = (i__36968_37002 + (1));
seq__36959_36999 = G__37035;
chunk__36966_37000 = G__37036;
count__36967_37001 = G__37037;
i__36968_37002 = G__37038;
continue;
} else {
var temp__4657__auto___37039 = cljs.core.seq.call(null,seq__36959_36999);
if(temp__4657__auto___37039){
var seq__36959_37040__$1 = temp__4657__auto___37039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36959_37040__$1)){
var c__22545__auto___37041 = cljs.core.chunk_first.call(null,seq__36959_37040__$1);
var G__37042 = cljs.core.chunk_rest.call(null,seq__36959_37040__$1);
var G__37043 = c__22545__auto___37041;
var G__37044 = cljs.core.count.call(null,c__22545__auto___37041);
var G__37045 = (0);
seq__36959_36999 = G__37042;
chunk__36966_37000 = G__37043;
count__36967_37001 = G__37044;
i__36968_37002 = G__37045;
continue;
} else {
var vec__36984_37046 = cljs.core.first.call(null,seq__36959_37040__$1);
var orig_type_37047 = cljs.core.nth.call(null,vec__36984_37046,(0),null);
var f_37048 = cljs.core.nth.call(null,vec__36984_37046,(1),null);
var seq__36960_37049 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37047,cljs.core.PersistentArrayMap.fromArray([orig_type_37047,cljs.core.identity], true, false)));
var chunk__36962_37050 = null;
var count__36963_37051 = (0);
var i__36964_37052 = (0);
while(true){
if((i__36964_37052 < count__36963_37051)){
var vec__36987_37053 = cljs.core._nth.call(null,chunk__36962_37050,i__36964_37052);
var actual_type_37054 = cljs.core.nth.call(null,vec__36987_37053,(0),null);
var __37055 = cljs.core.nth.call(null,vec__36987_37053,(1),null);
var keys_37056 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36998,actual_type_37054,f_37048], null);
var canonical_f_37057 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_36997),keys_37056);
dommy.core.update_event_listeners_BANG_.call(null,elem_36997,dommy.utils.dissoc_in,keys_37056);

if(cljs.core.truth_(elem_36997.removeEventListener)){
elem_36997.removeEventListener(cljs.core.name.call(null,actual_type_37054),canonical_f_37057);
} else {
elem_36997.detachEvent(cljs.core.name.call(null,actual_type_37054),canonical_f_37057);
}

var G__37058 = seq__36960_37049;
var G__37059 = chunk__36962_37050;
var G__37060 = count__36963_37051;
var G__37061 = (i__36964_37052 + (1));
seq__36960_37049 = G__37058;
chunk__36962_37050 = G__37059;
count__36963_37051 = G__37060;
i__36964_37052 = G__37061;
continue;
} else {
var temp__4657__auto___37062__$1 = cljs.core.seq.call(null,seq__36960_37049);
if(temp__4657__auto___37062__$1){
var seq__36960_37063__$1 = temp__4657__auto___37062__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36960_37063__$1)){
var c__22545__auto___37064 = cljs.core.chunk_first.call(null,seq__36960_37063__$1);
var G__37065 = cljs.core.chunk_rest.call(null,seq__36960_37063__$1);
var G__37066 = c__22545__auto___37064;
var G__37067 = cljs.core.count.call(null,c__22545__auto___37064);
var G__37068 = (0);
seq__36960_37049 = G__37065;
chunk__36962_37050 = G__37066;
count__36963_37051 = G__37067;
i__36964_37052 = G__37068;
continue;
} else {
var vec__36990_37069 = cljs.core.first.call(null,seq__36960_37063__$1);
var actual_type_37070 = cljs.core.nth.call(null,vec__36990_37069,(0),null);
var __37071 = cljs.core.nth.call(null,vec__36990_37069,(1),null);
var keys_37072 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_36998,actual_type_37070,f_37048], null);
var canonical_f_37073 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_36997),keys_37072);
dommy.core.update_event_listeners_BANG_.call(null,elem_36997,dommy.utils.dissoc_in,keys_37072);

if(cljs.core.truth_(elem_36997.removeEventListener)){
elem_36997.removeEventListener(cljs.core.name.call(null,actual_type_37070),canonical_f_37073);
} else {
elem_36997.detachEvent(cljs.core.name.call(null,actual_type_37070),canonical_f_37073);
}

var G__37074 = cljs.core.next.call(null,seq__36960_37063__$1);
var G__37075 = null;
var G__37076 = (0);
var G__37077 = (0);
seq__36960_37049 = G__37074;
chunk__36962_37050 = G__37075;
count__36963_37051 = G__37076;
i__36964_37052 = G__37077;
continue;
}
} else {
}
}
break;
}

var G__37078 = cljs.core.next.call(null,seq__36959_37040__$1);
var G__37079 = null;
var G__37080 = (0);
var G__37081 = (0);
seq__36959_36999 = G__37078;
chunk__36966_37000 = G__37079;
count__36967_37001 = G__37080;
i__36968_37002 = G__37081;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36954){
var G__36955 = cljs.core.first.call(null,seq36954);
var seq36954__$1 = cljs.core.next.call(null,seq36954);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36955,seq36954__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__22816__auto__ = [];
var len__22809__auto___37097 = arguments.length;
var i__22810__auto___37098 = (0);
while(true){
if((i__22810__auto___37098 < len__22809__auto___37097)){
args__22816__auto__.push((arguments[i__22810__auto___37098]));

var G__37099 = (i__22810__auto___37098 + (1));
i__22810__auto___37098 = G__37099;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((1) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22817__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__37084_37100 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_37101 = cljs.core.nth.call(null,vec__37084_37100,(0),null);
var selector_37102 = cljs.core.nth.call(null,vec__37084_37100,(1),null);
var seq__37087_37103 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__37088_37104 = null;
var count__37089_37105 = (0);
var i__37090_37106 = (0);
while(true){
if((i__37090_37106 < count__37089_37105)){
var vec__37091_37107 = cljs.core._nth.call(null,chunk__37088_37104,i__37090_37106);
var type_37108 = cljs.core.nth.call(null,vec__37091_37107,(0),null);
var f_37109 = cljs.core.nth.call(null,vec__37091_37107,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_37108,((function (seq__37087_37103,chunk__37088_37104,count__37089_37105,i__37090_37106,vec__37091_37107,type_37108,f_37109,vec__37084_37100,elem_37101,selector_37102){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_37108,dommy$core$this_fn);

return f_37109.call(null,e);
});})(seq__37087_37103,chunk__37088_37104,count__37089_37105,i__37090_37106,vec__37091_37107,type_37108,f_37109,vec__37084_37100,elem_37101,selector_37102))
);

var G__37110 = seq__37087_37103;
var G__37111 = chunk__37088_37104;
var G__37112 = count__37089_37105;
var G__37113 = (i__37090_37106 + (1));
seq__37087_37103 = G__37110;
chunk__37088_37104 = G__37111;
count__37089_37105 = G__37112;
i__37090_37106 = G__37113;
continue;
} else {
var temp__4657__auto___37114 = cljs.core.seq.call(null,seq__37087_37103);
if(temp__4657__auto___37114){
var seq__37087_37115__$1 = temp__4657__auto___37114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37087_37115__$1)){
var c__22545__auto___37116 = cljs.core.chunk_first.call(null,seq__37087_37115__$1);
var G__37117 = cljs.core.chunk_rest.call(null,seq__37087_37115__$1);
var G__37118 = c__22545__auto___37116;
var G__37119 = cljs.core.count.call(null,c__22545__auto___37116);
var G__37120 = (0);
seq__37087_37103 = G__37117;
chunk__37088_37104 = G__37118;
count__37089_37105 = G__37119;
i__37090_37106 = G__37120;
continue;
} else {
var vec__37094_37121 = cljs.core.first.call(null,seq__37087_37115__$1);
var type_37122 = cljs.core.nth.call(null,vec__37094_37121,(0),null);
var f_37123 = cljs.core.nth.call(null,vec__37094_37121,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_37122,((function (seq__37087_37103,chunk__37088_37104,count__37089_37105,i__37090_37106,vec__37094_37121,type_37122,f_37123,seq__37087_37115__$1,temp__4657__auto___37114,vec__37084_37100,elem_37101,selector_37102){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_37122,dommy$core$this_fn);

return f_37123.call(null,e);
});})(seq__37087_37103,chunk__37088_37104,count__37089_37105,i__37090_37106,vec__37094_37121,type_37122,f_37123,seq__37087_37115__$1,temp__4657__auto___37114,vec__37084_37100,elem_37101,selector_37102))
);

var G__37124 = cljs.core.next.call(null,seq__37087_37115__$1);
var G__37125 = null;
var G__37126 = (0);
var G__37127 = (0);
seq__37087_37103 = G__37124;
chunk__37088_37104 = G__37125;
count__37089_37105 = G__37126;
i__37090_37106 = G__37127;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq37082){
var G__37083 = cljs.core.first.call(null,seq37082);
var seq37082__$1 = cljs.core.next.call(null,seq37082);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37083,seq37082__$1);
});


//# sourceMappingURL=core.js.map?rel=1469933697266