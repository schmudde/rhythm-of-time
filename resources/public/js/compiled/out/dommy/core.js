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
var or__21995__auto__ = elem.textContent;
if(cljs.core.truth_(or__21995__auto__)){
return or__21995__auto__;
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
var args24808 = [];
var len__23070__auto___24811 = arguments.length;
var i__23071__auto___24812 = (0);
while(true){
if((i__23071__auto___24812 < len__23070__auto___24811)){
args24808.push((arguments[i__23071__auto___24812]));

var G__24813 = (i__23071__auto___24812 + (1));
i__23071__auto___24812 = G__24813;
continue;
} else {
}
break;
}

var G__24810 = args24808.length;
switch (G__24810) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24808.length)].join('')));

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
var args24815 = [];
var len__23070__auto___24818 = arguments.length;
var i__23071__auto___24819 = (0);
while(true){
if((i__23071__auto___24819 < len__23070__auto___24818)){
args24815.push((arguments[i__23071__auto___24819]));

var G__24820 = (i__23071__auto___24819 + (1));
i__23071__auto___24819 = G__24820;
continue;
} else {
}
break;
}

var G__24817 = args24815.length;
switch (G__24817) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24815.length)].join('')));

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
var args24823 = [];
var len__23070__auto___24826 = arguments.length;
var i__23071__auto___24827 = (0);
while(true){
if((i__23071__auto___24827 < len__23070__auto___24826)){
args24823.push((arguments[i__23071__auto___24827]));

var G__24828 = (i__23071__auto___24827 + (1));
i__23071__auto___24827 = G__24828;
continue;
} else {
}
break;
}

var G__24825 = args24823.length;
switch (G__24825) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24823.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__24822_SHARP_){
return !((p1__24822_SHARP_ === base));
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
var args__23077__auto__ = [];
var len__23070__auto___24842 = arguments.length;
var i__23071__auto___24843 = (0);
while(true){
if((i__23071__auto___24843 < len__23070__auto___24842)){
args__23077__auto__.push((arguments[i__23071__auto___24843]));

var G__24844 = (i__23071__auto___24843 + (1));
i__23071__auto___24843 = G__24844;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((1) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23078__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__24832_24845 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__24833_24846 = null;
var count__24834_24847 = (0);
var i__24835_24848 = (0);
while(true){
if((i__24835_24848 < count__24834_24847)){
var vec__24836_24849 = cljs.core._nth.call(null,chunk__24833_24846,i__24835_24848);
var k_24850 = cljs.core.nth.call(null,vec__24836_24849,(0),null);
var v_24851 = cljs.core.nth.call(null,vec__24836_24849,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_24850),v_24851);

var G__24852 = seq__24832_24845;
var G__24853 = chunk__24833_24846;
var G__24854 = count__24834_24847;
var G__24855 = (i__24835_24848 + (1));
seq__24832_24845 = G__24852;
chunk__24833_24846 = G__24853;
count__24834_24847 = G__24854;
i__24835_24848 = G__24855;
continue;
} else {
var temp__4657__auto___24856 = cljs.core.seq.call(null,seq__24832_24845);
if(temp__4657__auto___24856){
var seq__24832_24857__$1 = temp__4657__auto___24856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24832_24857__$1)){
var c__22806__auto___24858 = cljs.core.chunk_first.call(null,seq__24832_24857__$1);
var G__24859 = cljs.core.chunk_rest.call(null,seq__24832_24857__$1);
var G__24860 = c__22806__auto___24858;
var G__24861 = cljs.core.count.call(null,c__22806__auto___24858);
var G__24862 = (0);
seq__24832_24845 = G__24859;
chunk__24833_24846 = G__24860;
count__24834_24847 = G__24861;
i__24835_24848 = G__24862;
continue;
} else {
var vec__24839_24863 = cljs.core.first.call(null,seq__24832_24857__$1);
var k_24864 = cljs.core.nth.call(null,vec__24839_24863,(0),null);
var v_24865 = cljs.core.nth.call(null,vec__24839_24863,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_24864),v_24865);

var G__24866 = cljs.core.next.call(null,seq__24832_24857__$1);
var G__24867 = null;
var G__24868 = (0);
var G__24869 = (0);
seq__24832_24845 = G__24866;
chunk__24833_24846 = G__24867;
count__24834_24847 = G__24868;
i__24835_24848 = G__24869;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq24830){
var G__24831 = cljs.core.first.call(null,seq24830);
var seq24830__$1 = cljs.core.next.call(null,seq24830);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24831,seq24830__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__23077__auto__ = [];
var len__23070__auto___24876 = arguments.length;
var i__23071__auto___24877 = (0);
while(true){
if((i__23071__auto___24877 < len__23070__auto___24876)){
args__23077__auto__.push((arguments[i__23071__auto___24877]));

var G__24878 = (i__23071__auto___24877 + (1));
i__23071__auto___24877 = G__24878;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((1) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23078__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__24872_24879 = cljs.core.seq.call(null,keywords);
var chunk__24873_24880 = null;
var count__24874_24881 = (0);
var i__24875_24882 = (0);
while(true){
if((i__24875_24882 < count__24874_24881)){
var kw_24883 = cljs.core._nth.call(null,chunk__24873_24880,i__24875_24882);
style.removeProperty(dommy.utils.as_str.call(null,kw_24883));

var G__24884 = seq__24872_24879;
var G__24885 = chunk__24873_24880;
var G__24886 = count__24874_24881;
var G__24887 = (i__24875_24882 + (1));
seq__24872_24879 = G__24884;
chunk__24873_24880 = G__24885;
count__24874_24881 = G__24886;
i__24875_24882 = G__24887;
continue;
} else {
var temp__4657__auto___24888 = cljs.core.seq.call(null,seq__24872_24879);
if(temp__4657__auto___24888){
var seq__24872_24889__$1 = temp__4657__auto___24888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24872_24889__$1)){
var c__22806__auto___24890 = cljs.core.chunk_first.call(null,seq__24872_24889__$1);
var G__24891 = cljs.core.chunk_rest.call(null,seq__24872_24889__$1);
var G__24892 = c__22806__auto___24890;
var G__24893 = cljs.core.count.call(null,c__22806__auto___24890);
var G__24894 = (0);
seq__24872_24879 = G__24891;
chunk__24873_24880 = G__24892;
count__24874_24881 = G__24893;
i__24875_24882 = G__24894;
continue;
} else {
var kw_24895 = cljs.core.first.call(null,seq__24872_24889__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_24895));

var G__24896 = cljs.core.next.call(null,seq__24872_24889__$1);
var G__24897 = null;
var G__24898 = (0);
var G__24899 = (0);
seq__24872_24879 = G__24896;
chunk__24873_24880 = G__24897;
count__24874_24881 = G__24898;
i__24875_24882 = G__24899;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq24870){
var G__24871 = cljs.core.first.call(null,seq24870);
var seq24870__$1 = cljs.core.next.call(null,seq24870);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24871,seq24870__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__23077__auto__ = [];
var len__23070__auto___24912 = arguments.length;
var i__23071__auto___24913 = (0);
while(true){
if((i__23071__auto___24913 < len__23070__auto___24912)){
args__23077__auto__.push((arguments[i__23071__auto___24913]));

var G__24914 = (i__23071__auto___24913 + (1));
i__23071__auto___24913 = G__24914;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((1) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23078__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__24902_24915 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__24903_24916 = null;
var count__24904_24917 = (0);
var i__24905_24918 = (0);
while(true){
if((i__24905_24918 < count__24904_24917)){
var vec__24906_24919 = cljs.core._nth.call(null,chunk__24903_24916,i__24905_24918);
var k_24920 = cljs.core.nth.call(null,vec__24906_24919,(0),null);
var v_24921 = cljs.core.nth.call(null,vec__24906_24919,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_24920,[cljs.core.str(v_24921),cljs.core.str("px")].join(''));

var G__24922 = seq__24902_24915;
var G__24923 = chunk__24903_24916;
var G__24924 = count__24904_24917;
var G__24925 = (i__24905_24918 + (1));
seq__24902_24915 = G__24922;
chunk__24903_24916 = G__24923;
count__24904_24917 = G__24924;
i__24905_24918 = G__24925;
continue;
} else {
var temp__4657__auto___24926 = cljs.core.seq.call(null,seq__24902_24915);
if(temp__4657__auto___24926){
var seq__24902_24927__$1 = temp__4657__auto___24926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24902_24927__$1)){
var c__22806__auto___24928 = cljs.core.chunk_first.call(null,seq__24902_24927__$1);
var G__24929 = cljs.core.chunk_rest.call(null,seq__24902_24927__$1);
var G__24930 = c__22806__auto___24928;
var G__24931 = cljs.core.count.call(null,c__22806__auto___24928);
var G__24932 = (0);
seq__24902_24915 = G__24929;
chunk__24903_24916 = G__24930;
count__24904_24917 = G__24931;
i__24905_24918 = G__24932;
continue;
} else {
var vec__24909_24933 = cljs.core.first.call(null,seq__24902_24927__$1);
var k_24934 = cljs.core.nth.call(null,vec__24909_24933,(0),null);
var v_24935 = cljs.core.nth.call(null,vec__24909_24933,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_24934,[cljs.core.str(v_24935),cljs.core.str("px")].join(''));

var G__24936 = cljs.core.next.call(null,seq__24902_24927__$1);
var G__24937 = null;
var G__24938 = (0);
var G__24939 = (0);
seq__24902_24915 = G__24936;
chunk__24903_24916 = G__24937;
count__24904_24917 = G__24938;
i__24905_24918 = G__24939;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq24900){
var G__24901 = cljs.core.first.call(null,seq24900);
var seq24900__$1 = cljs.core.next.call(null,seq24900);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24901,seq24900__$1);
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
var args24940 = [];
var len__23070__auto___24959 = arguments.length;
var i__23071__auto___24960 = (0);
while(true){
if((i__23071__auto___24960 < len__23070__auto___24959)){
args24940.push((arguments[i__23071__auto___24960]));

var G__24961 = (i__23071__auto___24960 + (1));
i__23071__auto___24960 = G__24961;
continue;
} else {
}
break;
}

var G__24946 = args24940.length;
switch (G__24946) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__23089__auto__ = (new cljs.core.IndexedSeq(args24940.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23089__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__24947 = elem;
(G__24947[k__$1] = v);

return G__24947;
} else {
var G__24948 = elem;
G__24948.setAttribute(k__$1,v);

return G__24948;
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

var seq__24949_24963 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__24950_24964 = null;
var count__24951_24965 = (0);
var i__24952_24966 = (0);
while(true){
if((i__24952_24966 < count__24951_24965)){
var vec__24953_24967 = cljs.core._nth.call(null,chunk__24950_24964,i__24952_24966);
var k_24968__$1 = cljs.core.nth.call(null,vec__24953_24967,(0),null);
var v_24969__$1 = cljs.core.nth.call(null,vec__24953_24967,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_24968__$1,v_24969__$1);

var G__24970 = seq__24949_24963;
var G__24971 = chunk__24950_24964;
var G__24972 = count__24951_24965;
var G__24973 = (i__24952_24966 + (1));
seq__24949_24963 = G__24970;
chunk__24950_24964 = G__24971;
count__24951_24965 = G__24972;
i__24952_24966 = G__24973;
continue;
} else {
var temp__4657__auto___24974 = cljs.core.seq.call(null,seq__24949_24963);
if(temp__4657__auto___24974){
var seq__24949_24975__$1 = temp__4657__auto___24974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24949_24975__$1)){
var c__22806__auto___24976 = cljs.core.chunk_first.call(null,seq__24949_24975__$1);
var G__24977 = cljs.core.chunk_rest.call(null,seq__24949_24975__$1);
var G__24978 = c__22806__auto___24976;
var G__24979 = cljs.core.count.call(null,c__22806__auto___24976);
var G__24980 = (0);
seq__24949_24963 = G__24977;
chunk__24950_24964 = G__24978;
count__24951_24965 = G__24979;
i__24952_24966 = G__24980;
continue;
} else {
var vec__24956_24981 = cljs.core.first.call(null,seq__24949_24975__$1);
var k_24982__$1 = cljs.core.nth.call(null,vec__24956_24981,(0),null);
var v_24983__$1 = cljs.core.nth.call(null,vec__24956_24981,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_24982__$1,v_24983__$1);

var G__24984 = cljs.core.next.call(null,seq__24949_24975__$1);
var G__24985 = null;
var G__24986 = (0);
var G__24987 = (0);
seq__24949_24963 = G__24984;
chunk__24950_24964 = G__24985;
count__24951_24965 = G__24986;
i__24952_24966 = G__24987;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq24941){
var G__24942 = cljs.core.first.call(null,seq24941);
var seq24941__$1 = cljs.core.next.call(null,seq24941);
var G__24943 = cljs.core.first.call(null,seq24941__$1);
var seq24941__$2 = cljs.core.next.call(null,seq24941__$1);
var G__24944 = cljs.core.first.call(null,seq24941__$2);
var seq24941__$3 = cljs.core.next.call(null,seq24941__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24942,G__24943,G__24944,seq24941__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args24988 = [];
var len__23070__auto___24998 = arguments.length;
var i__23071__auto___24999 = (0);
while(true){
if((i__23071__auto___24999 < len__23070__auto___24998)){
args24988.push((arguments[i__23071__auto___24999]));

var G__25000 = (i__23071__auto___24999 + (1));
i__23071__auto___24999 = G__25000;
continue;
} else {
}
break;
}

var G__24993 = args24988.length;
switch (G__24993) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23089__auto__ = (new cljs.core.IndexedSeq(args24988.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23089__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_25002__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_25002__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_25002__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__24994_25003 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__24995_25004 = null;
var count__24996_25005 = (0);
var i__24997_25006 = (0);
while(true){
if((i__24997_25006 < count__24996_25005)){
var k_25007__$1 = cljs.core._nth.call(null,chunk__24995_25004,i__24997_25006);
dommy.core.remove_attr_BANG_.call(null,elem,k_25007__$1);

var G__25008 = seq__24994_25003;
var G__25009 = chunk__24995_25004;
var G__25010 = count__24996_25005;
var G__25011 = (i__24997_25006 + (1));
seq__24994_25003 = G__25008;
chunk__24995_25004 = G__25009;
count__24996_25005 = G__25010;
i__24997_25006 = G__25011;
continue;
} else {
var temp__4657__auto___25012 = cljs.core.seq.call(null,seq__24994_25003);
if(temp__4657__auto___25012){
var seq__24994_25013__$1 = temp__4657__auto___25012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24994_25013__$1)){
var c__22806__auto___25014 = cljs.core.chunk_first.call(null,seq__24994_25013__$1);
var G__25015 = cljs.core.chunk_rest.call(null,seq__24994_25013__$1);
var G__25016 = c__22806__auto___25014;
var G__25017 = cljs.core.count.call(null,c__22806__auto___25014);
var G__25018 = (0);
seq__24994_25003 = G__25015;
chunk__24995_25004 = G__25016;
count__24996_25005 = G__25017;
i__24997_25006 = G__25018;
continue;
} else {
var k_25019__$1 = cljs.core.first.call(null,seq__24994_25013__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_25019__$1);

var G__25020 = cljs.core.next.call(null,seq__24994_25013__$1);
var G__25021 = null;
var G__25022 = (0);
var G__25023 = (0);
seq__24994_25003 = G__25020;
chunk__24995_25004 = G__25021;
count__24996_25005 = G__25022;
i__24997_25006 = G__25023;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq24989){
var G__24990 = cljs.core.first.call(null,seq24989);
var seq24989__$1 = cljs.core.next.call(null,seq24989);
var G__24991 = cljs.core.first.call(null,seq24989__$1);
var seq24989__$2 = cljs.core.next.call(null,seq24989__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24990,G__24991,seq24989__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args25024 = [];
var len__23070__auto___25027 = arguments.length;
var i__23071__auto___25028 = (0);
while(true){
if((i__23071__auto___25028 < len__23070__auto___25027)){
args25024.push((arguments[i__23071__auto___25028]));

var G__25029 = (i__23071__auto___25028 + (1));
i__23071__auto___25028 = G__25029;
continue;
} else {
}
break;
}

var G__25026 = args25024.length;
switch (G__25026) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25024.length)].join('')));

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
var args25031 = [];
var len__23070__auto___25049 = arguments.length;
var i__23071__auto___25050 = (0);
while(true){
if((i__23071__auto___25050 < len__23070__auto___25049)){
args25031.push((arguments[i__23071__auto___25050]));

var G__25051 = (i__23071__auto___25050 + (1));
i__23071__auto___25050 = G__25051;
continue;
} else {
}
break;
}

var G__25036 = args25031.length;
switch (G__25036) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23089__auto__ = (new cljs.core.IndexedSeq(args25031.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23089__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___25053 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___25053)){
var class_list_25054 = temp__4655__auto___25053;
var seq__25037_25055 = cljs.core.seq.call(null,classes__$1);
var chunk__25038_25056 = null;
var count__25039_25057 = (0);
var i__25040_25058 = (0);
while(true){
if((i__25040_25058 < count__25039_25057)){
var c_25059 = cljs.core._nth.call(null,chunk__25038_25056,i__25040_25058);
class_list_25054.add(c_25059);

var G__25060 = seq__25037_25055;
var G__25061 = chunk__25038_25056;
var G__25062 = count__25039_25057;
var G__25063 = (i__25040_25058 + (1));
seq__25037_25055 = G__25060;
chunk__25038_25056 = G__25061;
count__25039_25057 = G__25062;
i__25040_25058 = G__25063;
continue;
} else {
var temp__4657__auto___25064 = cljs.core.seq.call(null,seq__25037_25055);
if(temp__4657__auto___25064){
var seq__25037_25065__$1 = temp__4657__auto___25064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25037_25065__$1)){
var c__22806__auto___25066 = cljs.core.chunk_first.call(null,seq__25037_25065__$1);
var G__25067 = cljs.core.chunk_rest.call(null,seq__25037_25065__$1);
var G__25068 = c__22806__auto___25066;
var G__25069 = cljs.core.count.call(null,c__22806__auto___25066);
var G__25070 = (0);
seq__25037_25055 = G__25067;
chunk__25038_25056 = G__25068;
count__25039_25057 = G__25069;
i__25040_25058 = G__25070;
continue;
} else {
var c_25071 = cljs.core.first.call(null,seq__25037_25065__$1);
class_list_25054.add(c_25071);

var G__25072 = cljs.core.next.call(null,seq__25037_25065__$1);
var G__25073 = null;
var G__25074 = (0);
var G__25075 = (0);
seq__25037_25055 = G__25072;
chunk__25038_25056 = G__25073;
count__25039_25057 = G__25074;
i__25040_25058 = G__25075;
continue;
}
} else {
}
}
break;
}
} else {
var seq__25041_25076 = cljs.core.seq.call(null,classes__$1);
var chunk__25042_25077 = null;
var count__25043_25078 = (0);
var i__25044_25079 = (0);
while(true){
if((i__25044_25079 < count__25043_25078)){
var c_25080 = cljs.core._nth.call(null,chunk__25042_25077,i__25044_25079);
var class_name_25081 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_25081,c_25080))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_25081 === ""))?c_25080:[cljs.core.str(class_name_25081),cljs.core.str(" "),cljs.core.str(c_25080)].join('')));
}

var G__25082 = seq__25041_25076;
var G__25083 = chunk__25042_25077;
var G__25084 = count__25043_25078;
var G__25085 = (i__25044_25079 + (1));
seq__25041_25076 = G__25082;
chunk__25042_25077 = G__25083;
count__25043_25078 = G__25084;
i__25044_25079 = G__25085;
continue;
} else {
var temp__4657__auto___25086 = cljs.core.seq.call(null,seq__25041_25076);
if(temp__4657__auto___25086){
var seq__25041_25087__$1 = temp__4657__auto___25086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25041_25087__$1)){
var c__22806__auto___25088 = cljs.core.chunk_first.call(null,seq__25041_25087__$1);
var G__25089 = cljs.core.chunk_rest.call(null,seq__25041_25087__$1);
var G__25090 = c__22806__auto___25088;
var G__25091 = cljs.core.count.call(null,c__22806__auto___25088);
var G__25092 = (0);
seq__25041_25076 = G__25089;
chunk__25042_25077 = G__25090;
count__25043_25078 = G__25091;
i__25044_25079 = G__25092;
continue;
} else {
var c_25093 = cljs.core.first.call(null,seq__25041_25087__$1);
var class_name_25094 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_25094,c_25093))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_25094 === ""))?c_25093:[cljs.core.str(class_name_25094),cljs.core.str(" "),cljs.core.str(c_25093)].join('')));
}

var G__25095 = cljs.core.next.call(null,seq__25041_25087__$1);
var G__25096 = null;
var G__25097 = (0);
var G__25098 = (0);
seq__25041_25076 = G__25095;
chunk__25042_25077 = G__25096;
count__25043_25078 = G__25097;
i__25044_25079 = G__25098;
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
var seq__25045_25099 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__25046_25100 = null;
var count__25047_25101 = (0);
var i__25048_25102 = (0);
while(true){
if((i__25048_25102 < count__25047_25101)){
var c_25103 = cljs.core._nth.call(null,chunk__25046_25100,i__25048_25102);
dommy.core.add_class_BANG_.call(null,elem,c_25103);

var G__25104 = seq__25045_25099;
var G__25105 = chunk__25046_25100;
var G__25106 = count__25047_25101;
var G__25107 = (i__25048_25102 + (1));
seq__25045_25099 = G__25104;
chunk__25046_25100 = G__25105;
count__25047_25101 = G__25106;
i__25048_25102 = G__25107;
continue;
} else {
var temp__4657__auto___25108 = cljs.core.seq.call(null,seq__25045_25099);
if(temp__4657__auto___25108){
var seq__25045_25109__$1 = temp__4657__auto___25108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25045_25109__$1)){
var c__22806__auto___25110 = cljs.core.chunk_first.call(null,seq__25045_25109__$1);
var G__25111 = cljs.core.chunk_rest.call(null,seq__25045_25109__$1);
var G__25112 = c__22806__auto___25110;
var G__25113 = cljs.core.count.call(null,c__22806__auto___25110);
var G__25114 = (0);
seq__25045_25099 = G__25111;
chunk__25046_25100 = G__25112;
count__25047_25101 = G__25113;
i__25048_25102 = G__25114;
continue;
} else {
var c_25115 = cljs.core.first.call(null,seq__25045_25109__$1);
dommy.core.add_class_BANG_.call(null,elem,c_25115);

var G__25116 = cljs.core.next.call(null,seq__25045_25109__$1);
var G__25117 = null;
var G__25118 = (0);
var G__25119 = (0);
seq__25045_25099 = G__25116;
chunk__25046_25100 = G__25117;
count__25047_25101 = G__25118;
i__25048_25102 = G__25119;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq25032){
var G__25033 = cljs.core.first.call(null,seq25032);
var seq25032__$1 = cljs.core.next.call(null,seq25032);
var G__25034 = cljs.core.first.call(null,seq25032__$1);
var seq25032__$2 = cljs.core.next.call(null,seq25032__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25033,G__25034,seq25032__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args25120 = [];
var len__23070__auto___25130 = arguments.length;
var i__23071__auto___25131 = (0);
while(true){
if((i__23071__auto___25131 < len__23070__auto___25130)){
args25120.push((arguments[i__23071__auto___25131]));

var G__25132 = (i__23071__auto___25131 + (1));
i__23071__auto___25131 = G__25132;
continue;
} else {
}
break;
}

var G__25125 = args25120.length;
switch (G__25125) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23089__auto__ = (new cljs.core.IndexedSeq(args25120.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23089__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___25134 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___25134)){
var class_list_25135 = temp__4655__auto___25134;
class_list_25135.remove(c__$1);
} else {
var class_name_25136 = dommy.core.class$.call(null,elem);
var new_class_name_25137 = dommy.utils.remove_class_str.call(null,class_name_25136,c__$1);
if((class_name_25136 === new_class_name_25137)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_25137);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__25126 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__25127 = null;
var count__25128 = (0);
var i__25129 = (0);
while(true){
if((i__25129 < count__25128)){
var c = cljs.core._nth.call(null,chunk__25127,i__25129);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__25138 = seq__25126;
var G__25139 = chunk__25127;
var G__25140 = count__25128;
var G__25141 = (i__25129 + (1));
seq__25126 = G__25138;
chunk__25127 = G__25139;
count__25128 = G__25140;
i__25129 = G__25141;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25126);
if(temp__4657__auto__){
var seq__25126__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25126__$1)){
var c__22806__auto__ = cljs.core.chunk_first.call(null,seq__25126__$1);
var G__25142 = cljs.core.chunk_rest.call(null,seq__25126__$1);
var G__25143 = c__22806__auto__;
var G__25144 = cljs.core.count.call(null,c__22806__auto__);
var G__25145 = (0);
seq__25126 = G__25142;
chunk__25127 = G__25143;
count__25128 = G__25144;
i__25129 = G__25145;
continue;
} else {
var c = cljs.core.first.call(null,seq__25126__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__25146 = cljs.core.next.call(null,seq__25126__$1);
var G__25147 = null;
var G__25148 = (0);
var G__25149 = (0);
seq__25126 = G__25146;
chunk__25127 = G__25147;
count__25128 = G__25148;
i__25129 = G__25149;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq25121){
var G__25122 = cljs.core.first.call(null,seq25121);
var seq25121__$1 = cljs.core.next.call(null,seq25121);
var G__25123 = cljs.core.first.call(null,seq25121__$1);
var seq25121__$2 = cljs.core.next.call(null,seq25121__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25122,G__25123,seq25121__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args25150 = [];
var len__23070__auto___25153 = arguments.length;
var i__23071__auto___25154 = (0);
while(true){
if((i__23071__auto___25154 < len__23070__auto___25153)){
args25150.push((arguments[i__23071__auto___25154]));

var G__25155 = (i__23071__auto___25154 + (1));
i__23071__auto___25154 = G__25155;
continue;
} else {
}
break;
}

var G__25152 = args25150.length;
switch (G__25152) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25150.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___25157 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___25157)){
var class_list_25158 = temp__4655__auto___25157;
class_list_25158.toggle(c__$1);
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
var args25159 = [];
var len__23070__auto___25162 = arguments.length;
var i__23071__auto___25163 = (0);
while(true){
if((i__23071__auto___25163 < len__23070__auto___25162)){
args25159.push((arguments[i__23071__auto___25163]));

var G__25164 = (i__23071__auto___25163 + (1));
i__23071__auto___25163 = G__25164;
continue;
} else {
}
break;
}

var G__25161 = args25159.length;
switch (G__25161) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25159.length)].join('')));

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
var args25166 = [];
var len__23070__auto___25169 = arguments.length;
var i__23071__auto___25170 = (0);
while(true){
if((i__23071__auto___25170 < len__23070__auto___25169)){
args25166.push((arguments[i__23071__auto___25170]));

var G__25171 = (i__23071__auto___25170 + (1));
i__23071__auto___25170 = G__25171;
continue;
} else {
}
break;
}

var G__25168 = args25166.length;
switch (G__25168) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25166.length)].join('')));

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
var args25173 = [];
var len__23070__auto___25184 = arguments.length;
var i__23071__auto___25185 = (0);
while(true){
if((i__23071__auto___25185 < len__23070__auto___25184)){
args25173.push((arguments[i__23071__auto___25185]));

var G__25186 = (i__23071__auto___25185 + (1));
i__23071__auto___25185 = G__25186;
continue;
} else {
}
break;
}

var G__25178 = args25173.length;
switch (G__25178) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23089__auto__ = (new cljs.core.IndexedSeq(args25173.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23089__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__25179 = parent;
G__25179.appendChild(child);

return G__25179;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__25180_25188 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__25181_25189 = null;
var count__25182_25190 = (0);
var i__25183_25191 = (0);
while(true){
if((i__25183_25191 < count__25182_25190)){
var c_25192 = cljs.core._nth.call(null,chunk__25181_25189,i__25183_25191);
dommy.core.append_BANG_.call(null,parent,c_25192);

var G__25193 = seq__25180_25188;
var G__25194 = chunk__25181_25189;
var G__25195 = count__25182_25190;
var G__25196 = (i__25183_25191 + (1));
seq__25180_25188 = G__25193;
chunk__25181_25189 = G__25194;
count__25182_25190 = G__25195;
i__25183_25191 = G__25196;
continue;
} else {
var temp__4657__auto___25197 = cljs.core.seq.call(null,seq__25180_25188);
if(temp__4657__auto___25197){
var seq__25180_25198__$1 = temp__4657__auto___25197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25180_25198__$1)){
var c__22806__auto___25199 = cljs.core.chunk_first.call(null,seq__25180_25198__$1);
var G__25200 = cljs.core.chunk_rest.call(null,seq__25180_25198__$1);
var G__25201 = c__22806__auto___25199;
var G__25202 = cljs.core.count.call(null,c__22806__auto___25199);
var G__25203 = (0);
seq__25180_25188 = G__25200;
chunk__25181_25189 = G__25201;
count__25182_25190 = G__25202;
i__25183_25191 = G__25203;
continue;
} else {
var c_25204 = cljs.core.first.call(null,seq__25180_25198__$1);
dommy.core.append_BANG_.call(null,parent,c_25204);

var G__25205 = cljs.core.next.call(null,seq__25180_25198__$1);
var G__25206 = null;
var G__25207 = (0);
var G__25208 = (0);
seq__25180_25188 = G__25205;
chunk__25181_25189 = G__25206;
count__25182_25190 = G__25207;
i__25183_25191 = G__25208;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq25174){
var G__25175 = cljs.core.first.call(null,seq25174);
var seq25174__$1 = cljs.core.next.call(null,seq25174);
var G__25176 = cljs.core.first.call(null,seq25174__$1);
var seq25174__$2 = cljs.core.next.call(null,seq25174__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25175,G__25176,seq25174__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args25209 = [];
var len__23070__auto___25220 = arguments.length;
var i__23071__auto___25221 = (0);
while(true){
if((i__23071__auto___25221 < len__23070__auto___25220)){
args25209.push((arguments[i__23071__auto___25221]));

var G__25222 = (i__23071__auto___25221 + (1));
i__23071__auto___25221 = G__25222;
continue;
} else {
}
break;
}

var G__25214 = args25209.length;
switch (G__25214) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23089__auto__ = (new cljs.core.IndexedSeq(args25209.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23089__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__25215 = parent;
G__25215.insertBefore(child,parent.firstChild);

return G__25215;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__25216_25224 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__25217_25225 = null;
var count__25218_25226 = (0);
var i__25219_25227 = (0);
while(true){
if((i__25219_25227 < count__25218_25226)){
var c_25228 = cljs.core._nth.call(null,chunk__25217_25225,i__25219_25227);
dommy.core.prepend_BANG_.call(null,parent,c_25228);

var G__25229 = seq__25216_25224;
var G__25230 = chunk__25217_25225;
var G__25231 = count__25218_25226;
var G__25232 = (i__25219_25227 + (1));
seq__25216_25224 = G__25229;
chunk__25217_25225 = G__25230;
count__25218_25226 = G__25231;
i__25219_25227 = G__25232;
continue;
} else {
var temp__4657__auto___25233 = cljs.core.seq.call(null,seq__25216_25224);
if(temp__4657__auto___25233){
var seq__25216_25234__$1 = temp__4657__auto___25233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25216_25234__$1)){
var c__22806__auto___25235 = cljs.core.chunk_first.call(null,seq__25216_25234__$1);
var G__25236 = cljs.core.chunk_rest.call(null,seq__25216_25234__$1);
var G__25237 = c__22806__auto___25235;
var G__25238 = cljs.core.count.call(null,c__22806__auto___25235);
var G__25239 = (0);
seq__25216_25224 = G__25236;
chunk__25217_25225 = G__25237;
count__25218_25226 = G__25238;
i__25219_25227 = G__25239;
continue;
} else {
var c_25240 = cljs.core.first.call(null,seq__25216_25234__$1);
dommy.core.prepend_BANG_.call(null,parent,c_25240);

var G__25241 = cljs.core.next.call(null,seq__25216_25234__$1);
var G__25242 = null;
var G__25243 = (0);
var G__25244 = (0);
seq__25216_25224 = G__25241;
chunk__25217_25225 = G__25242;
count__25218_25226 = G__25243;
i__25219_25227 = G__25244;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq25210){
var G__25211 = cljs.core.first.call(null,seq25210);
var seq25210__$1 = cljs.core.next.call(null,seq25210);
var G__25212 = cljs.core.first.call(null,seq25210__$1);
var seq25210__$2 = cljs.core.next.call(null,seq25210__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25211,G__25212,seq25210__$2);
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
var temp__4655__auto___25245 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___25245)){
var next_25246 = temp__4655__auto___25245;
dommy.core.insert_before_BANG_.call(null,elem,next_25246);
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
var args25247 = [];
var len__23070__auto___25251 = arguments.length;
var i__23071__auto___25252 = (0);
while(true){
if((i__23071__auto___25252 < len__23070__auto___25251)){
args25247.push((arguments[i__23071__auto___25252]));

var G__25253 = (i__23071__auto___25252 + (1));
i__23071__auto___25252 = G__25253;
continue;
} else {
}
break;
}

var G__25249 = args25247.length;
switch (G__25249) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25247.length)].join('')));

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
var G__25250 = p;
G__25250.removeChild(elem);

return G__25250;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25255){
var vec__25256 = p__25255;
var special_mouse_event = cljs.core.nth.call(null,vec__25256,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__25256,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__25256,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__25256,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__21995__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__21995__auto__)){
return or__21995__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__21983__auto__ = related_target;
if(cljs.core.truth_(and__21983__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__21983__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__25256,special_mouse_event,real_mouse_event))
});})(vec__25256,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__21983__auto__ = selected_target;
if(cljs.core.truth_(and__21983__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__21983__auto__;
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
var or__21995__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__21995__auto__)){
return or__21995__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__23077__auto__ = [];
var len__23070__auto___25262 = arguments.length;
var i__23071__auto___25263 = (0);
while(true){
if((i__23071__auto___25263 < len__23070__auto___25262)){
args__23077__auto__.push((arguments[i__23071__auto___25263]));

var G__25264 = (i__23071__auto___25263 + (1));
i__23071__auto___25263 = G__25264;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((2) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23078__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq25259){
var G__25260 = cljs.core.first.call(null,seq25259);
var seq25259__$1 = cljs.core.next.call(null,seq25259);
var G__25261 = cljs.core.first.call(null,seq25259__$1);
var seq25259__$2 = cljs.core.next.call(null,seq25259__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25260,G__25261,seq25259__$2);
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
var args__23077__auto__ = [];
var len__23070__auto___25304 = arguments.length;
var i__23071__auto___25305 = (0);
while(true){
if((i__23071__auto___25305 < len__23070__auto___25304)){
args__23077__auto__.push((arguments[i__23071__auto___25305]));

var G__25306 = (i__23071__auto___25305 + (1));
i__23071__auto___25305 = G__25306;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((1) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23078__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__25267_25307 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25308 = cljs.core.nth.call(null,vec__25267_25307,(0),null);
var selector_25309 = cljs.core.nth.call(null,vec__25267_25307,(1),null);
var seq__25270_25310 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25277_25311 = null;
var count__25278_25312 = (0);
var i__25279_25313 = (0);
while(true){
if((i__25279_25313 < count__25278_25312)){
var vec__25286_25314 = cljs.core._nth.call(null,chunk__25277_25311,i__25279_25313);
var orig_type_25315 = cljs.core.nth.call(null,vec__25286_25314,(0),null);
var f_25316 = cljs.core.nth.call(null,vec__25286_25314,(1),null);
var seq__25280_25317 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25315,cljs.core.PersistentArrayMap.fromArray([orig_type_25315,cljs.core.identity], true, false)));
var chunk__25282_25318 = null;
var count__25283_25319 = (0);
var i__25284_25320 = (0);
while(true){
if((i__25284_25320 < count__25283_25319)){
var vec__25289_25321 = cljs.core._nth.call(null,chunk__25282_25318,i__25284_25320);
var actual_type_25322 = cljs.core.nth.call(null,vec__25289_25321,(0),null);
var factory_25323 = cljs.core.nth.call(null,vec__25289_25321,(1),null);
var canonical_f_25324 = (cljs.core.truth_(selector_25309)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25308,selector_25309):cljs.core.identity).call(null,factory_25323.call(null,f_25316));
dommy.core.update_event_listeners_BANG_.call(null,elem_25308,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25309,actual_type_25322,f_25316], null),canonical_f_25324);

if(cljs.core.truth_(elem_25308.addEventListener)){
elem_25308.addEventListener(cljs.core.name.call(null,actual_type_25322),canonical_f_25324);
} else {
elem_25308.attachEvent(cljs.core.name.call(null,actual_type_25322),canonical_f_25324);
}

var G__25325 = seq__25280_25317;
var G__25326 = chunk__25282_25318;
var G__25327 = count__25283_25319;
var G__25328 = (i__25284_25320 + (1));
seq__25280_25317 = G__25325;
chunk__25282_25318 = G__25326;
count__25283_25319 = G__25327;
i__25284_25320 = G__25328;
continue;
} else {
var temp__4657__auto___25329 = cljs.core.seq.call(null,seq__25280_25317);
if(temp__4657__auto___25329){
var seq__25280_25330__$1 = temp__4657__auto___25329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25280_25330__$1)){
var c__22806__auto___25331 = cljs.core.chunk_first.call(null,seq__25280_25330__$1);
var G__25332 = cljs.core.chunk_rest.call(null,seq__25280_25330__$1);
var G__25333 = c__22806__auto___25331;
var G__25334 = cljs.core.count.call(null,c__22806__auto___25331);
var G__25335 = (0);
seq__25280_25317 = G__25332;
chunk__25282_25318 = G__25333;
count__25283_25319 = G__25334;
i__25284_25320 = G__25335;
continue;
} else {
var vec__25292_25336 = cljs.core.first.call(null,seq__25280_25330__$1);
var actual_type_25337 = cljs.core.nth.call(null,vec__25292_25336,(0),null);
var factory_25338 = cljs.core.nth.call(null,vec__25292_25336,(1),null);
var canonical_f_25339 = (cljs.core.truth_(selector_25309)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25308,selector_25309):cljs.core.identity).call(null,factory_25338.call(null,f_25316));
dommy.core.update_event_listeners_BANG_.call(null,elem_25308,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25309,actual_type_25337,f_25316], null),canonical_f_25339);

if(cljs.core.truth_(elem_25308.addEventListener)){
elem_25308.addEventListener(cljs.core.name.call(null,actual_type_25337),canonical_f_25339);
} else {
elem_25308.attachEvent(cljs.core.name.call(null,actual_type_25337),canonical_f_25339);
}

var G__25340 = cljs.core.next.call(null,seq__25280_25330__$1);
var G__25341 = null;
var G__25342 = (0);
var G__25343 = (0);
seq__25280_25317 = G__25340;
chunk__25282_25318 = G__25341;
count__25283_25319 = G__25342;
i__25284_25320 = G__25343;
continue;
}
} else {
}
}
break;
}

var G__25344 = seq__25270_25310;
var G__25345 = chunk__25277_25311;
var G__25346 = count__25278_25312;
var G__25347 = (i__25279_25313 + (1));
seq__25270_25310 = G__25344;
chunk__25277_25311 = G__25345;
count__25278_25312 = G__25346;
i__25279_25313 = G__25347;
continue;
} else {
var temp__4657__auto___25348 = cljs.core.seq.call(null,seq__25270_25310);
if(temp__4657__auto___25348){
var seq__25270_25349__$1 = temp__4657__auto___25348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25270_25349__$1)){
var c__22806__auto___25350 = cljs.core.chunk_first.call(null,seq__25270_25349__$1);
var G__25351 = cljs.core.chunk_rest.call(null,seq__25270_25349__$1);
var G__25352 = c__22806__auto___25350;
var G__25353 = cljs.core.count.call(null,c__22806__auto___25350);
var G__25354 = (0);
seq__25270_25310 = G__25351;
chunk__25277_25311 = G__25352;
count__25278_25312 = G__25353;
i__25279_25313 = G__25354;
continue;
} else {
var vec__25295_25355 = cljs.core.first.call(null,seq__25270_25349__$1);
var orig_type_25356 = cljs.core.nth.call(null,vec__25295_25355,(0),null);
var f_25357 = cljs.core.nth.call(null,vec__25295_25355,(1),null);
var seq__25271_25358 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25356,cljs.core.PersistentArrayMap.fromArray([orig_type_25356,cljs.core.identity], true, false)));
var chunk__25273_25359 = null;
var count__25274_25360 = (0);
var i__25275_25361 = (0);
while(true){
if((i__25275_25361 < count__25274_25360)){
var vec__25298_25362 = cljs.core._nth.call(null,chunk__25273_25359,i__25275_25361);
var actual_type_25363 = cljs.core.nth.call(null,vec__25298_25362,(0),null);
var factory_25364 = cljs.core.nth.call(null,vec__25298_25362,(1),null);
var canonical_f_25365 = (cljs.core.truth_(selector_25309)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25308,selector_25309):cljs.core.identity).call(null,factory_25364.call(null,f_25357));
dommy.core.update_event_listeners_BANG_.call(null,elem_25308,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25309,actual_type_25363,f_25357], null),canonical_f_25365);

if(cljs.core.truth_(elem_25308.addEventListener)){
elem_25308.addEventListener(cljs.core.name.call(null,actual_type_25363),canonical_f_25365);
} else {
elem_25308.attachEvent(cljs.core.name.call(null,actual_type_25363),canonical_f_25365);
}

var G__25366 = seq__25271_25358;
var G__25367 = chunk__25273_25359;
var G__25368 = count__25274_25360;
var G__25369 = (i__25275_25361 + (1));
seq__25271_25358 = G__25366;
chunk__25273_25359 = G__25367;
count__25274_25360 = G__25368;
i__25275_25361 = G__25369;
continue;
} else {
var temp__4657__auto___25370__$1 = cljs.core.seq.call(null,seq__25271_25358);
if(temp__4657__auto___25370__$1){
var seq__25271_25371__$1 = temp__4657__auto___25370__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25271_25371__$1)){
var c__22806__auto___25372 = cljs.core.chunk_first.call(null,seq__25271_25371__$1);
var G__25373 = cljs.core.chunk_rest.call(null,seq__25271_25371__$1);
var G__25374 = c__22806__auto___25372;
var G__25375 = cljs.core.count.call(null,c__22806__auto___25372);
var G__25376 = (0);
seq__25271_25358 = G__25373;
chunk__25273_25359 = G__25374;
count__25274_25360 = G__25375;
i__25275_25361 = G__25376;
continue;
} else {
var vec__25301_25377 = cljs.core.first.call(null,seq__25271_25371__$1);
var actual_type_25378 = cljs.core.nth.call(null,vec__25301_25377,(0),null);
var factory_25379 = cljs.core.nth.call(null,vec__25301_25377,(1),null);
var canonical_f_25380 = (cljs.core.truth_(selector_25309)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25308,selector_25309):cljs.core.identity).call(null,factory_25379.call(null,f_25357));
dommy.core.update_event_listeners_BANG_.call(null,elem_25308,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25309,actual_type_25378,f_25357], null),canonical_f_25380);

if(cljs.core.truth_(elem_25308.addEventListener)){
elem_25308.addEventListener(cljs.core.name.call(null,actual_type_25378),canonical_f_25380);
} else {
elem_25308.attachEvent(cljs.core.name.call(null,actual_type_25378),canonical_f_25380);
}

var G__25381 = cljs.core.next.call(null,seq__25271_25371__$1);
var G__25382 = null;
var G__25383 = (0);
var G__25384 = (0);
seq__25271_25358 = G__25381;
chunk__25273_25359 = G__25382;
count__25274_25360 = G__25383;
i__25275_25361 = G__25384;
continue;
}
} else {
}
}
break;
}

var G__25385 = cljs.core.next.call(null,seq__25270_25349__$1);
var G__25386 = null;
var G__25387 = (0);
var G__25388 = (0);
seq__25270_25310 = G__25385;
chunk__25277_25311 = G__25386;
count__25278_25312 = G__25387;
i__25279_25313 = G__25388;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq25265){
var G__25266 = cljs.core.first.call(null,seq25265);
var seq25265__$1 = cljs.core.next.call(null,seq25265);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25266,seq25265__$1);
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
var args__23077__auto__ = [];
var len__23070__auto___25428 = arguments.length;
var i__23071__auto___25429 = (0);
while(true){
if((i__23071__auto___25429 < len__23070__auto___25428)){
args__23077__auto__.push((arguments[i__23071__auto___25429]));

var G__25430 = (i__23071__auto___25429 + (1));
i__23071__auto___25429 = G__25430;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((1) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23078__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__25391_25431 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25432 = cljs.core.nth.call(null,vec__25391_25431,(0),null);
var selector_25433 = cljs.core.nth.call(null,vec__25391_25431,(1),null);
var seq__25394_25434 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25401_25435 = null;
var count__25402_25436 = (0);
var i__25403_25437 = (0);
while(true){
if((i__25403_25437 < count__25402_25436)){
var vec__25410_25438 = cljs.core._nth.call(null,chunk__25401_25435,i__25403_25437);
var orig_type_25439 = cljs.core.nth.call(null,vec__25410_25438,(0),null);
var f_25440 = cljs.core.nth.call(null,vec__25410_25438,(1),null);
var seq__25404_25441 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25439,cljs.core.PersistentArrayMap.fromArray([orig_type_25439,cljs.core.identity], true, false)));
var chunk__25406_25442 = null;
var count__25407_25443 = (0);
var i__25408_25444 = (0);
while(true){
if((i__25408_25444 < count__25407_25443)){
var vec__25413_25445 = cljs.core._nth.call(null,chunk__25406_25442,i__25408_25444);
var actual_type_25446 = cljs.core.nth.call(null,vec__25413_25445,(0),null);
var __25447 = cljs.core.nth.call(null,vec__25413_25445,(1),null);
var keys_25448 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25433,actual_type_25446,f_25440], null);
var canonical_f_25449 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25432),keys_25448);
dommy.core.update_event_listeners_BANG_.call(null,elem_25432,dommy.utils.dissoc_in,keys_25448);

if(cljs.core.truth_(elem_25432.removeEventListener)){
elem_25432.removeEventListener(cljs.core.name.call(null,actual_type_25446),canonical_f_25449);
} else {
elem_25432.detachEvent(cljs.core.name.call(null,actual_type_25446),canonical_f_25449);
}

var G__25450 = seq__25404_25441;
var G__25451 = chunk__25406_25442;
var G__25452 = count__25407_25443;
var G__25453 = (i__25408_25444 + (1));
seq__25404_25441 = G__25450;
chunk__25406_25442 = G__25451;
count__25407_25443 = G__25452;
i__25408_25444 = G__25453;
continue;
} else {
var temp__4657__auto___25454 = cljs.core.seq.call(null,seq__25404_25441);
if(temp__4657__auto___25454){
var seq__25404_25455__$1 = temp__4657__auto___25454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25404_25455__$1)){
var c__22806__auto___25456 = cljs.core.chunk_first.call(null,seq__25404_25455__$1);
var G__25457 = cljs.core.chunk_rest.call(null,seq__25404_25455__$1);
var G__25458 = c__22806__auto___25456;
var G__25459 = cljs.core.count.call(null,c__22806__auto___25456);
var G__25460 = (0);
seq__25404_25441 = G__25457;
chunk__25406_25442 = G__25458;
count__25407_25443 = G__25459;
i__25408_25444 = G__25460;
continue;
} else {
var vec__25416_25461 = cljs.core.first.call(null,seq__25404_25455__$1);
var actual_type_25462 = cljs.core.nth.call(null,vec__25416_25461,(0),null);
var __25463 = cljs.core.nth.call(null,vec__25416_25461,(1),null);
var keys_25464 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25433,actual_type_25462,f_25440], null);
var canonical_f_25465 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25432),keys_25464);
dommy.core.update_event_listeners_BANG_.call(null,elem_25432,dommy.utils.dissoc_in,keys_25464);

if(cljs.core.truth_(elem_25432.removeEventListener)){
elem_25432.removeEventListener(cljs.core.name.call(null,actual_type_25462),canonical_f_25465);
} else {
elem_25432.detachEvent(cljs.core.name.call(null,actual_type_25462),canonical_f_25465);
}

var G__25466 = cljs.core.next.call(null,seq__25404_25455__$1);
var G__25467 = null;
var G__25468 = (0);
var G__25469 = (0);
seq__25404_25441 = G__25466;
chunk__25406_25442 = G__25467;
count__25407_25443 = G__25468;
i__25408_25444 = G__25469;
continue;
}
} else {
}
}
break;
}

var G__25470 = seq__25394_25434;
var G__25471 = chunk__25401_25435;
var G__25472 = count__25402_25436;
var G__25473 = (i__25403_25437 + (1));
seq__25394_25434 = G__25470;
chunk__25401_25435 = G__25471;
count__25402_25436 = G__25472;
i__25403_25437 = G__25473;
continue;
} else {
var temp__4657__auto___25474 = cljs.core.seq.call(null,seq__25394_25434);
if(temp__4657__auto___25474){
var seq__25394_25475__$1 = temp__4657__auto___25474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25394_25475__$1)){
var c__22806__auto___25476 = cljs.core.chunk_first.call(null,seq__25394_25475__$1);
var G__25477 = cljs.core.chunk_rest.call(null,seq__25394_25475__$1);
var G__25478 = c__22806__auto___25476;
var G__25479 = cljs.core.count.call(null,c__22806__auto___25476);
var G__25480 = (0);
seq__25394_25434 = G__25477;
chunk__25401_25435 = G__25478;
count__25402_25436 = G__25479;
i__25403_25437 = G__25480;
continue;
} else {
var vec__25419_25481 = cljs.core.first.call(null,seq__25394_25475__$1);
var orig_type_25482 = cljs.core.nth.call(null,vec__25419_25481,(0),null);
var f_25483 = cljs.core.nth.call(null,vec__25419_25481,(1),null);
var seq__25395_25484 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25482,cljs.core.PersistentArrayMap.fromArray([orig_type_25482,cljs.core.identity], true, false)));
var chunk__25397_25485 = null;
var count__25398_25486 = (0);
var i__25399_25487 = (0);
while(true){
if((i__25399_25487 < count__25398_25486)){
var vec__25422_25488 = cljs.core._nth.call(null,chunk__25397_25485,i__25399_25487);
var actual_type_25489 = cljs.core.nth.call(null,vec__25422_25488,(0),null);
var __25490 = cljs.core.nth.call(null,vec__25422_25488,(1),null);
var keys_25491 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25433,actual_type_25489,f_25483], null);
var canonical_f_25492 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25432),keys_25491);
dommy.core.update_event_listeners_BANG_.call(null,elem_25432,dommy.utils.dissoc_in,keys_25491);

if(cljs.core.truth_(elem_25432.removeEventListener)){
elem_25432.removeEventListener(cljs.core.name.call(null,actual_type_25489),canonical_f_25492);
} else {
elem_25432.detachEvent(cljs.core.name.call(null,actual_type_25489),canonical_f_25492);
}

var G__25493 = seq__25395_25484;
var G__25494 = chunk__25397_25485;
var G__25495 = count__25398_25486;
var G__25496 = (i__25399_25487 + (1));
seq__25395_25484 = G__25493;
chunk__25397_25485 = G__25494;
count__25398_25486 = G__25495;
i__25399_25487 = G__25496;
continue;
} else {
var temp__4657__auto___25497__$1 = cljs.core.seq.call(null,seq__25395_25484);
if(temp__4657__auto___25497__$1){
var seq__25395_25498__$1 = temp__4657__auto___25497__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25395_25498__$1)){
var c__22806__auto___25499 = cljs.core.chunk_first.call(null,seq__25395_25498__$1);
var G__25500 = cljs.core.chunk_rest.call(null,seq__25395_25498__$1);
var G__25501 = c__22806__auto___25499;
var G__25502 = cljs.core.count.call(null,c__22806__auto___25499);
var G__25503 = (0);
seq__25395_25484 = G__25500;
chunk__25397_25485 = G__25501;
count__25398_25486 = G__25502;
i__25399_25487 = G__25503;
continue;
} else {
var vec__25425_25504 = cljs.core.first.call(null,seq__25395_25498__$1);
var actual_type_25505 = cljs.core.nth.call(null,vec__25425_25504,(0),null);
var __25506 = cljs.core.nth.call(null,vec__25425_25504,(1),null);
var keys_25507 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25433,actual_type_25505,f_25483], null);
var canonical_f_25508 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25432),keys_25507);
dommy.core.update_event_listeners_BANG_.call(null,elem_25432,dommy.utils.dissoc_in,keys_25507);

if(cljs.core.truth_(elem_25432.removeEventListener)){
elem_25432.removeEventListener(cljs.core.name.call(null,actual_type_25505),canonical_f_25508);
} else {
elem_25432.detachEvent(cljs.core.name.call(null,actual_type_25505),canonical_f_25508);
}

var G__25509 = cljs.core.next.call(null,seq__25395_25498__$1);
var G__25510 = null;
var G__25511 = (0);
var G__25512 = (0);
seq__25395_25484 = G__25509;
chunk__25397_25485 = G__25510;
count__25398_25486 = G__25511;
i__25399_25487 = G__25512;
continue;
}
} else {
}
}
break;
}

var G__25513 = cljs.core.next.call(null,seq__25394_25475__$1);
var G__25514 = null;
var G__25515 = (0);
var G__25516 = (0);
seq__25394_25434 = G__25513;
chunk__25401_25435 = G__25514;
count__25402_25436 = G__25515;
i__25403_25437 = G__25516;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq25389){
var G__25390 = cljs.core.first.call(null,seq25389);
var seq25389__$1 = cljs.core.next.call(null,seq25389);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25390,seq25389__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__23077__auto__ = [];
var len__23070__auto___25532 = arguments.length;
var i__23071__auto___25533 = (0);
while(true){
if((i__23071__auto___25533 < len__23070__auto___25532)){
args__23077__auto__.push((arguments[i__23071__auto___25533]));

var G__25534 = (i__23071__auto___25533 + (1));
i__23071__auto___25533 = G__25534;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((1) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23078__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__25519_25535 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25536 = cljs.core.nth.call(null,vec__25519_25535,(0),null);
var selector_25537 = cljs.core.nth.call(null,vec__25519_25535,(1),null);
var seq__25522_25538 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25523_25539 = null;
var count__25524_25540 = (0);
var i__25525_25541 = (0);
while(true){
if((i__25525_25541 < count__25524_25540)){
var vec__25526_25542 = cljs.core._nth.call(null,chunk__25523_25539,i__25525_25541);
var type_25543 = cljs.core.nth.call(null,vec__25526_25542,(0),null);
var f_25544 = cljs.core.nth.call(null,vec__25526_25542,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_25543,((function (seq__25522_25538,chunk__25523_25539,count__25524_25540,i__25525_25541,vec__25526_25542,type_25543,f_25544,vec__25519_25535,elem_25536,selector_25537){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_25543,dommy$core$this_fn);

return f_25544.call(null,e);
});})(seq__25522_25538,chunk__25523_25539,count__25524_25540,i__25525_25541,vec__25526_25542,type_25543,f_25544,vec__25519_25535,elem_25536,selector_25537))
);

var G__25545 = seq__25522_25538;
var G__25546 = chunk__25523_25539;
var G__25547 = count__25524_25540;
var G__25548 = (i__25525_25541 + (1));
seq__25522_25538 = G__25545;
chunk__25523_25539 = G__25546;
count__25524_25540 = G__25547;
i__25525_25541 = G__25548;
continue;
} else {
var temp__4657__auto___25549 = cljs.core.seq.call(null,seq__25522_25538);
if(temp__4657__auto___25549){
var seq__25522_25550__$1 = temp__4657__auto___25549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25522_25550__$1)){
var c__22806__auto___25551 = cljs.core.chunk_first.call(null,seq__25522_25550__$1);
var G__25552 = cljs.core.chunk_rest.call(null,seq__25522_25550__$1);
var G__25553 = c__22806__auto___25551;
var G__25554 = cljs.core.count.call(null,c__22806__auto___25551);
var G__25555 = (0);
seq__25522_25538 = G__25552;
chunk__25523_25539 = G__25553;
count__25524_25540 = G__25554;
i__25525_25541 = G__25555;
continue;
} else {
var vec__25529_25556 = cljs.core.first.call(null,seq__25522_25550__$1);
var type_25557 = cljs.core.nth.call(null,vec__25529_25556,(0),null);
var f_25558 = cljs.core.nth.call(null,vec__25529_25556,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_25557,((function (seq__25522_25538,chunk__25523_25539,count__25524_25540,i__25525_25541,vec__25529_25556,type_25557,f_25558,seq__25522_25550__$1,temp__4657__auto___25549,vec__25519_25535,elem_25536,selector_25537){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_25557,dommy$core$this_fn);

return f_25558.call(null,e);
});})(seq__25522_25538,chunk__25523_25539,count__25524_25540,i__25525_25541,vec__25529_25556,type_25557,f_25558,seq__25522_25550__$1,temp__4657__auto___25549,vec__25519_25535,elem_25536,selector_25537))
);

var G__25559 = cljs.core.next.call(null,seq__25522_25550__$1);
var G__25560 = null;
var G__25561 = (0);
var G__25562 = (0);
seq__25522_25538 = G__25559;
chunk__25523_25539 = G__25560;
count__25524_25540 = G__25561;
i__25525_25541 = G__25562;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq25517){
var G__25518 = cljs.core.first.call(null,seq25517);
var seq25517__$1 = cljs.core.next.call(null,seq25517);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25518,seq25517__$1);
});


//# sourceMappingURL=core.js.map?rel=1468519957256