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
var args35173 = [];
var len__22809__auto___35176 = arguments.length;
var i__22810__auto___35177 = (0);
while(true){
if((i__22810__auto___35177 < len__22809__auto___35176)){
args35173.push((arguments[i__22810__auto___35177]));

var G__35178 = (i__22810__auto___35177 + (1));
i__22810__auto___35177 = G__35178;
continue;
} else {
}
break;
}

var G__35175 = args35173.length;
switch (G__35175) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35173.length)].join('')));

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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__35181 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__35181.gain,level,context,at,duration);

return G__35181;
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
var args__22816__auto__ = [];
var len__22809__auto___35189 = arguments.length;
var i__22810__auto___35190 = (0);
while(true){
if((i__22810__auto___35190 < len__22809__auto___35189)){
args__22816__auto__.push((arguments[i__22810__auto___35190]));

var G__35191 = (i__22810__auto___35190 + (1));
i__22810__auto___35190 = G__35191;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((0) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__22817__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_35192 = at;
var coordinates_35193 = corners;
while(true){
var temp__4657__auto___35194 = coordinates_35193;
if(cljs.core.truth_(temp__4657__auto___35194)){
var vec__35183_35195 = temp__4657__auto___35194;
var seq__35184_35196 = cljs.core.seq.call(null,vec__35183_35195);
var first__35185_35197 = cljs.core.first.call(null,seq__35184_35196);
var seq__35184_35198__$1 = cljs.core.next.call(null,seq__35184_35196);
var vec__35186_35199 = first__35185_35197;
var dx_35200 = cljs.core.nth.call(null,vec__35186_35199,(0),null);
var y_35201 = cljs.core.nth.call(null,vec__35186_35199,(1),null);
var remaining_35202 = seq__35184_35198__$1;
audio_node.gain.linearRampToValueAtTime(y_35201,(x_35192 + dx_35200));

var G__35203 = (dx_35200 + x_35192);
var G__35204 = remaining_35202;
x_35192 = G__35203;
coordinates_35193 = G__35204;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq35182){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35182));
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
var hold = (function (){var x__22065__auto__ = 0.0;
var y__22066__auto__ = remainder;
return ((x__22065__auto__ > y__22066__auto__) ? x__22065__auto__ : y__22066__auto__);
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
var args__22816__auto__ = [];
var len__22809__auto___35208 = arguments.length;
var i__22810__auto___35209 = (0);
while(true){
if((i__22810__auto___35209 < len__22809__auto___35208)){
args__22816__auto__.push((arguments[i__22810__auto___35209]));

var G__35210 = (i__22810__auto___35209 + (1));
i__22810__auto___35209 = G__35210;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((1) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22817__auto__);
});

cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__35205_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__35205_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq35206){
var G__35207 = cljs.core.first.call(null,seq35206);
var seq35206__$1 = cljs.core.next.call(null,seq35206);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic(G__35207,seq35206__$1);
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
var args__22816__auto__ = [];
var len__22809__auto___35212 = arguments.length;
var i__22810__auto___35213 = (0);
while(true){
if((i__22810__auto___35213 < len__22809__auto___35212)){
args__22816__auto__.push((arguments[i__22810__auto___35213]));

var G__35214 = (i__22810__auto___35213 + (1));
i__22810__auto___35213 = G__35214;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((0) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__22817__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq35211){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35211));
});

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__22816__auto__ = [];
var len__22809__auto___35222 = arguments.length;
var i__22810__auto___35223 = (0);
while(true){
if((i__22810__auto___35223 < len__22809__auto___35222)){
args__22816__auto__.push((arguments[i__22810__auto___35223]));

var G__35224 = (i__22810__auto___35223 + (1));
i__22810__auto___35223 = G__35224;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((2) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22817__auto__);
});

cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__35218_35225 = cljs.core.seq.call(null,graphs);
var chunk__35219_35226 = null;
var count__35220_35227 = (0);
var i__35221_35228 = (0);
while(true){
if((i__35221_35228 < count__35220_35227)){
var graph_35229 = cljs.core._nth.call(null,chunk__35219_35226,i__35221_35228);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_35229).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_35229))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_35229));
} else {
}

var G__35230 = seq__35218_35225;
var G__35231 = chunk__35219_35226;
var G__35232 = count__35220_35227;
var G__35233 = (i__35221_35228 + (1));
seq__35218_35225 = G__35230;
chunk__35219_35226 = G__35231;
count__35220_35227 = G__35232;
i__35221_35228 = G__35233;
continue;
} else {
var temp__4657__auto___35234 = cljs.core.seq.call(null,seq__35218_35225);
if(temp__4657__auto___35234){
var seq__35218_35235__$1 = temp__4657__auto___35234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35218_35235__$1)){
var c__22545__auto___35236 = cljs.core.chunk_first.call(null,seq__35218_35235__$1);
var G__35237 = cljs.core.chunk_rest.call(null,seq__35218_35235__$1);
var G__35238 = c__22545__auto___35236;
var G__35239 = cljs.core.count.call(null,c__22545__auto___35236);
var G__35240 = (0);
seq__35218_35225 = G__35237;
chunk__35219_35226 = G__35238;
count__35220_35227 = G__35239;
i__35221_35228 = G__35240;
continue;
} else {
var graph_35241 = cljs.core.first.call(null,seq__35218_35235__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_35241).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_35241))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_35241));
} else {
}

var G__35242 = cljs.core.next.call(null,seq__35218_35235__$1);
var G__35243 = null;
var G__35244 = (0);
var G__35245 = (0);
seq__35218_35225 = G__35242;
chunk__35219_35226 = G__35243;
count__35220_35227 = G__35244;
i__35221_35228 = G__35245;
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

cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq35215){
var G__35216 = cljs.core.first.call(null,seq35215);
var seq35215__$1 = cljs.core.next.call(null,seq35215);
var G__35217 = cljs.core.first.call(null,seq35215__$1);
var seq35215__$2 = cljs.core.next.call(null,seq35215__$1);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic(G__35216,G__35217,seq35215__$2);
});

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__22816__auto__ = [];
var len__22809__auto___35247 = arguments.length;
var i__22810__auto___35248 = (0);
while(true){
if((i__22810__auto___35248 < len__22809__auto___35247)){
args__22816__auto__.push((arguments[i__22810__auto___35248]));

var G__35249 = (i__22810__auto___35248 + (1));
i__22810__auto___35248 = G__35249;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((0) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__22817__auto__);
});

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.call(null,cljs_bach.synthesis.update_graph,cljs_bach.synthesis.join,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq35246){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35246));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__35254_35258 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__35255_35259 = null;
var count__35256_35260 = (0);
var i__35257_35261 = (0);
while(true){
if((i__35257_35261 < count__35256_35260)){
var i_35262 = cljs.core._nth.call(null,chunk__35255_35259,i__35257_35261);
(data[i_35262] = generate_bit_BANG_.call(null,i_35262));

var G__35263 = seq__35254_35258;
var G__35264 = chunk__35255_35259;
var G__35265 = count__35256_35260;
var G__35266 = (i__35257_35261 + (1));
seq__35254_35258 = G__35263;
chunk__35255_35259 = G__35264;
count__35256_35260 = G__35265;
i__35257_35261 = G__35266;
continue;
} else {
var temp__4657__auto___35267 = cljs.core.seq.call(null,seq__35254_35258);
if(temp__4657__auto___35267){
var seq__35254_35268__$1 = temp__4657__auto___35267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35254_35268__$1)){
var c__22545__auto___35269 = cljs.core.chunk_first.call(null,seq__35254_35268__$1);
var G__35270 = cljs.core.chunk_rest.call(null,seq__35254_35268__$1);
var G__35271 = c__22545__auto___35269;
var G__35272 = cljs.core.count.call(null,c__22545__auto___35269);
var G__35273 = (0);
seq__35254_35258 = G__35270;
chunk__35255_35259 = G__35271;
count__35256_35260 = G__35272;
i__35257_35261 = G__35273;
continue;
} else {
var i_35274 = cljs.core.first.call(null,seq__35254_35268__$1);
(data[i_35274] = generate_bit_BANG_.call(null,i_35274));

var G__35275 = cljs.core.next.call(null,seq__35254_35268__$1);
var G__35276 = null;
var G__35277 = (0);
var G__35278 = (0);
seq__35254_35258 = G__35275;
chunk__35255_35259 = G__35276;
count__35256_35260 = G__35277;
i__35257_35261 = G__35278;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__35280 = context.createBufferSource();
G__35280.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__35280.start(at);

return G__35280;
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
return cljs_bach.synthesis.source.call(null,(function (){var G__35282 = context.createOscillator();
G__35282.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__35282.frequency,freq,context,at,duration);

G__35282.type = type;

G__35282.start(at);

G__35282.stop(((at + duration) + 1.0));

return G__35282;
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
var args35283 = [];
var len__22809__auto___35287 = arguments.length;
var i__22810__auto___35288 = (0);
while(true){
if((i__22810__auto___35288 < len__22809__auto___35287)){
args35283.push((arguments[i__22810__auto___35288]));

var G__35289 = (i__22810__auto___35288 + (1));
i__22810__auto___35288 = G__35289;
continue;
} else {
}
break;
}

var G__35285 = args35283.length;
switch (G__35285) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35283.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__35286 = context.createBiquadFilter();
G__35286.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__35286.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__35286.Q,q,context,at,duration);

G__35286.type = type;

return G__35286;
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
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__35292 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__35292.pan,pan,context,at,duration);

return G__35292;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__35294 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__35294.delayTime,seconds,context,at,duration);

return G__35294;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__35296 = context.createConvolver();
G__35296.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__35296;
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

//# sourceMappingURL=synthesis.js.map?rel=1469933692889