// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs_bach.synthesis');
goog.require('cljs.core');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
cljs_bach.synthesis.audio_context = (function cljs_bach$synthesis$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
/**
 * Return the current time as recorded by the audio context.
 */
cljs_bach.synthesis.current_time = (function cljs_bach$synthesis$current_time(context){
return context.currentTime;
});
cljs_bach.synthesis.subgraph = (function cljs_bach$synthesis$subgraph(var_args){
var args23995 = [];
var len__23070__auto___23998 = arguments.length;
var i__23071__auto___23999 = (0);
while(true){
if((i__23071__auto___23999 < len__23070__auto___23998)){
args23995.push((arguments[i__23071__auto___23999]));

var G__24000 = (i__23071__auto___23999 + (1));
i__23071__auto___23999 = G__24000;
continue;
} else {
}
break;
}

var G__23997 = args23995.length;
switch (G__23997) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23995.length)].join('')));

}
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.call(null,singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input, so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.call(null,null,node);
});
/**
 * A graph of synthesis nodes without an output, so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.call(null,node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return synth.call(null,context,at,duration);
});
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink.call(null,context.destination);
});
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with.call(null,input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__24003 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__24003.gain,level,context,at,duration);

return G__24003;
})());
});
});
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain.call(null,1.0);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__23077__auto__ = [];
var len__23070__auto___24011 = arguments.length;
var i__23071__auto___24012 = (0);
while(true){
if((i__23071__auto___24012 < len__23070__auto___24011)){
args__23077__auto__.push((arguments[i__23071__auto___24012]));

var G__24013 = (i__23071__auto___24012 + (1));
i__23071__auto___24012 = G__24013;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((0) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__23078__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_24014 = at;
var coordinates_24015 = corners;
while(true){
var temp__4657__auto___24016 = coordinates_24015;
if(cljs.core.truth_(temp__4657__auto___24016)){
var vec__24005_24017 = temp__4657__auto___24016;
var seq__24006_24018 = cljs.core.seq.call(null,vec__24005_24017);
var first__24007_24019 = cljs.core.first.call(null,seq__24006_24018);
var seq__24006_24020__$1 = cljs.core.next.call(null,seq__24006_24018);
var vec__24008_24021 = first__24007_24019;
var dx_24022 = cljs.core.nth.call(null,vec__24008_24021,(0),null);
var y_24023 = cljs.core.nth.call(null,vec__24008_24021,(1),null);
var remaining_24024 = seq__24006_24020__$1;
audio_node.gain.linearRampToValueAtTime(y_24023,(x_24014 + dx_24022));

var G__24025 = (dx_24022 + x_24014);
var G__24026 = remaining_24024;
x_24014 = G__24025;
coordinates_24015 = G__24026;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq24004){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24004));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null));
});
/**
 * A four-stage envelope.
 */
cljs_bach.synthesis.adsr = (function cljs_bach$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - sustain);
var hold = (function (){var x__22326__auto__ = 0.0;
var y__22327__auto__ = remainder;
return ((x__22326__auto__ > y__22327__auto__) ? x__22326__auto__ : y__22327__auto__);
})();
var node = cljs_bach.synthesis.adshr.call(null,attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with.call(null,node,context,at,duration);
});
});
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null));
});
/**
 * Like update-in, but for the node graph a synth will return (and variadic).
 */
cljs_bach.synthesis.update_graph = (function cljs_bach$synthesis$update_graph(var_args){
var args__23077__auto__ = [];
var len__23070__auto___24030 = arguments.length;
var i__23071__auto___24031 = (0);
while(true){
if((i__23071__auto___24031 < len__23070__auto___24030)){
args__23077__auto__.push((arguments[i__23071__auto___24031]));

var G__24032 = (i__23071__auto___24031 + (1));
i__23071__auto___24031 = G__24032;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((1) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23078__auto__);
});

cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__24027_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__24027_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq24028){
var G__24029 = cljs.core.first.call(null,seq24028);
var seq24028__$1 = cljs.core.next.call(null,seq24028);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic(G__24029,seq24028__$1);
});

/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.update_graph.call(null,(function (graph1,graph2){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph1).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph1),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph2));
}),upstream_synth,downstream_synth);
});
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__23077__auto__ = [];
var len__23070__auto___24034 = arguments.length;
var i__23071__auto___24035 = (0);
while(true){
if((i__23071__auto___24035 < len__23070__auto___24034)){
args__23077__auto__.push((arguments[i__23071__auto___24035]));

var G__24036 = (i__23071__auto___24035 + (1));
i__23071__auto___24035 = G__24036;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((0) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__23078__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq24033){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24033));
});

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__23077__auto__ = [];
var len__23070__auto___24044 = arguments.length;
var i__23071__auto___24045 = (0);
while(true){
if((i__23071__auto___24045 < len__23070__auto___24044)){
args__23077__auto__.push((arguments[i__23071__auto___24045]));

var G__24046 = (i__23071__auto___24045 + (1));
i__23071__auto___24045 = G__24046;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((2) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23078__auto__);
});

cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__24040_24047 = cljs.core.seq.call(null,graphs);
var chunk__24041_24048 = null;
var count__24042_24049 = (0);
var i__24043_24050 = (0);
while(true){
if((i__24043_24050 < count__24042_24049)){
var graph_24051 = cljs.core._nth.call(null,chunk__24041_24048,i__24043_24050);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_24051).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_24051))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_24051));
} else {
}

var G__24052 = seq__24040_24047;
var G__24053 = chunk__24041_24048;
var G__24054 = count__24042_24049;
var G__24055 = (i__24043_24050 + (1));
seq__24040_24047 = G__24052;
chunk__24041_24048 = G__24053;
count__24042_24049 = G__24054;
i__24043_24050 = G__24055;
continue;
} else {
var temp__4657__auto___24056 = cljs.core.seq.call(null,seq__24040_24047);
if(temp__4657__auto___24056){
var seq__24040_24057__$1 = temp__4657__auto___24056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24040_24057__$1)){
var c__22806__auto___24058 = cljs.core.chunk_first.call(null,seq__24040_24057__$1);
var G__24059 = cljs.core.chunk_rest.call(null,seq__24040_24057__$1);
var G__24060 = c__22806__auto___24058;
var G__24061 = cljs.core.count.call(null,c__22806__auto___24058);
var G__24062 = (0);
seq__24040_24047 = G__24059;
chunk__24041_24048 = G__24060;
count__24042_24049 = G__24061;
i__24043_24050 = G__24062;
continue;
} else {
var graph_24063 = cljs.core.first.call(null,seq__24040_24057__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_24063).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_24063))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_24063));
} else {
}

var G__24064 = cljs.core.next.call(null,seq__24040_24057__$1);
var G__24065 = null;
var G__24066 = (0);
var G__24067 = (0);
seq__24040_24047 = G__24064;
chunk__24041_24048 = G__24065;
count__24042_24049 = G__24066;
i__24043_24050 = G__24067;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(upstream),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join.cljs$lang$maxFixedArity = (2);

cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq24037){
var G__24038 = cljs.core.first.call(null,seq24037);
var seq24037__$1 = cljs.core.next.call(null,seq24037);
var G__24039 = cljs.core.first.call(null,seq24037__$1);
var seq24037__$2 = cljs.core.next.call(null,seq24037__$1);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic(G__24038,G__24039,seq24037__$2);
});

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__23077__auto__ = [];
var len__23070__auto___24069 = arguments.length;
var i__23071__auto___24070 = (0);
while(true){
if((i__23071__auto___24070 < len__23070__auto___24069)){
args__23077__auto__.push((arguments[i__23071__auto___24070]));

var G__24071 = (i__23071__auto___24070 + (1));
i__23071__auto___24070 = G__24071;
continue;
} else {
}
break;
}

var argseq__23078__auto__ = ((((0) < args__23077__auto__.length))?(new cljs.core.IndexedSeq(args__23077__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__23078__auto__);
});

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.call(null,cljs_bach.synthesis.update_graph,cljs_bach.synthesis.join,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq24068){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24068));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__24076_24080 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__24077_24081 = null;
var count__24078_24082 = (0);
var i__24079_24083 = (0);
while(true){
if((i__24079_24083 < count__24078_24082)){
var i_24084 = cljs.core._nth.call(null,chunk__24077_24081,i__24079_24083);
(data[i_24084] = generate_bit_BANG_.call(null,i_24084));

var G__24085 = seq__24076_24080;
var G__24086 = chunk__24077_24081;
var G__24087 = count__24078_24082;
var G__24088 = (i__24079_24083 + (1));
seq__24076_24080 = G__24085;
chunk__24077_24081 = G__24086;
count__24078_24082 = G__24087;
i__24079_24083 = G__24088;
continue;
} else {
var temp__4657__auto___24089 = cljs.core.seq.call(null,seq__24076_24080);
if(temp__4657__auto___24089){
var seq__24076_24090__$1 = temp__4657__auto___24089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24076_24090__$1)){
var c__22806__auto___24091 = cljs.core.chunk_first.call(null,seq__24076_24090__$1);
var G__24092 = cljs.core.chunk_rest.call(null,seq__24076_24090__$1);
var G__24093 = c__22806__auto___24091;
var G__24094 = cljs.core.count.call(null,c__22806__auto___24091);
var G__24095 = (0);
seq__24076_24080 = G__24092;
chunk__24077_24081 = G__24093;
count__24078_24082 = G__24094;
i__24079_24083 = G__24095;
continue;
} else {
var i_24096 = cljs.core.first.call(null,seq__24076_24090__$1);
(data[i_24096] = generate_bit_BANG_.call(null,i_24096));

var G__24097 = cljs.core.next.call(null,seq__24076_24090__$1);
var G__24098 = null;
var G__24099 = (0);
var G__24100 = (0);
seq__24076_24080 = G__24097;
chunk__24077_24081 = G__24098;
count__24078_24082 = G__24099;
i__24079_24083 = G__24100;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize.call(null,cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__24102 = context.createBufferSource();
G__24102.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__24102.start(at);

return G__24102;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise.call(null,white);
})();
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise.call(null,cljs.core.constantly.call(null,x));
});
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__24104 = context.createOscillator();
G__24104.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__24104.frequency,freq,context,at,duration);

G__24104.type = type;

G__24104.start(at);

G__24104.stop(((at + duration) + 1.0));

return G__24104;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sine");
cljs_bach.synthesis.sawtooth = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sawtooth");
cljs_bach.synthesis.square = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"square");
cljs_bach.synthesis.triangle = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"triangle");
/**
 * Attenuate frequencies beyond the cutoff, and intensify the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var args24105 = [];
var len__23070__auto___24109 = arguments.length;
var i__23071__auto___24110 = (0);
while(true){
if((i__23071__auto___24110 < len__23070__auto___24109)){
args24105.push((arguments[i__23071__auto___24110]));

var G__24111 = (i__23071__auto___24110 + (1));
i__23071__auto___24110 = G__24111;
continue;
} else {
}
break;
}

var G__24107 = args24105.length;
switch (G__24107) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24105.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__24108 = context.createBiquadFilter();
G__24108.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__24108.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__24108.Q,q,context,at,duration);

G__24108.type = type;

return G__24108;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"lowpass");
cljs_bach.synthesis.high_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"highpass");
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__24114 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__24114.pan,pan,context,at,duration);

return G__24114;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__24116 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__24116.delayTime,seconds,context,at,duration);

return G__24116;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__24118 = context.createConvolver();
G__24118.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__24118;
})());
});
});
/**
 * Crude reverb.
 */
cljs_bach.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * Math.pow(((1) - (i / length)),decay));
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver.call(null,logarithmic_decay);
})();
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.call(null,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.call(null,effect,cljs_bach.synthesis.gain.call(null,level)));
});

//# sourceMappingURL=synthesis.js.map?rel=1468519955387