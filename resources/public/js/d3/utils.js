// Compiled by ClojureScript 1.7.228 {}
goog.provide('d3.utils');
goog.require('cljs.core');
goog.require('cljsjs.d3');
goog.require('plotter.core');
d3.utils.js_GT_ = cljs.core.clj__GT_js;
d3.utils.p = plotter.core.make_plotter;
d3.utils.styles = (function d3$utils$styles(m){
return cljs.core.map.call(null,(function (p__19270){
var vec__19271 = p__19270;
var k = cljs.core.nth.call(null,vec__19271,(0),null);
var v = cljs.core.nth.call(null,vec__19271,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null)], null);
}),m);
});
d3.utils.attrs = (function d3$utils$attrs(m){
return cljs.core.map.call(null,(function (p__19274){
var vec__19275 = p__19274;
var k = cljs.core.nth.call(null,vec__19275,(0),null);
var v = cljs.core.nth.call(null,vec__19275,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null)], null);
}),m);
});
d3.utils.prop_QMARK_ = (function d3$utils$prop_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Keyword));
});
d3.utils.flat_props = (function d3$utils$flat_props(xs){
return cljs.core.mapcat.call(null,(function (p1__19276_SHARP_){
if(cljs.core.truth_(d3.utils.prop_QMARK_.call(null,p1__19276_SHARP_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19276_SHARP_], null);
} else {
return d3$utils$flat_props.call(null,p1__19276_SHARP_);
}
}),xs);
});
d3.utils._GT__GT_ = (function d3$utils$_GT__GT_(var_args){
var args__19223__auto__ = [];
var len__19216__auto___19279 = arguments.length;
var i__19217__auto___19280 = (0);
while(true){
if((i__19217__auto___19280 < len__19216__auto___19279)){
args__19223__auto__.push((arguments[i__19217__auto___19280]));

var G__19281 = (i__19217__auto___19280 + (1));
i__19217__auto___19280 = G__19281;
continue;
} else {
}
break;
}

var argseq__19224__auto__ = ((((1) < args__19223__auto__.length))?(new cljs.core.IndexedSeq(args__19223__auto__.slice((1)),(0))):null);
return d3.utils._GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19224__auto__);
});

d3.utils._GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
return plotter.core._EQ__GT_.call(null,x,d3.utils.flat_props.call(null,xs));
});

d3.utils._GT__GT_.cljs$lang$maxFixedArity = (1);

d3.utils._GT__GT_.cljs$lang$applyTo = (function (seq19277){
var G__19278 = cljs.core.first.call(null,seq19277);
var seq19277__$1 = cljs.core.next.call(null,seq19277);
return d3.utils._GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19278,seq19277__$1);
});
d3.utils._STAR__GT_ = (function d3$utils$_STAR__GT_(var_args){
var args__19223__auto__ = [];
var len__19216__auto___19283 = arguments.length;
var i__19217__auto___19284 = (0);
while(true){
if((i__19217__auto___19284 < len__19216__auto___19283)){
args__19223__auto__.push((arguments[i__19217__auto___19284]));

var G__19285 = (i__19217__auto___19284 + (1));
i__19217__auto___19284 = G__19285;
continue;
} else {
}
break;
}

var argseq__19224__auto__ = ((((0) < args__19223__auto__.length))?(new cljs.core.IndexedSeq(args__19223__auto__.slice((0)),(0))):null);
return d3.utils._STAR__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__19224__auto__);
});

d3.utils._STAR__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return d3.utils._GT__GT_.call(null,plotter.core.make_plotter.call(null,d3),xs);
});

d3.utils._STAR__GT_.cljs$lang$maxFixedArity = (0);

d3.utils._STAR__GT_.cljs$lang$applyTo = (function (seq19282){
return d3.utils._STAR__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19282));
});
d3.utils.translate = (function d3$utils$translate(a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transform",[cljs.core.str("translate("),cljs.core.str(a),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('')], null)], null);
});
d3.utils.translate_rotate = (function d3$utils$translate_rotate(a,b,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transform",[cljs.core.str("translate("),cljs.core.str(a),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")rotate("),cljs.core.str(c),cljs.core.str(")")].join('')], null)], null);
});
d3.utils.lscale = (function d3$utils$lscale(d,r){
return d3.scale.linear().domain(d3.utils.js_GT_.call(null,d)).range(d3.utils.js_GT_.call(null,r));
});
d3.utils.svg = d3.svg;
d3.utils.arc = d3.svg.arc;
d3.utils.polygon = d3.geom.polygon;
d3.utils.voronoi = d3.geom.voronoi;
d3.utils.scale = d3.scale;
d3.utils.category10 = d3.scale.category10;
d3.utils.category20 = d3.scale.category20;
d3.utils.category20b = d3.scale.category20b;
d3.utils.category20c = d3.scale.category20c;
d3.utils.layout = d3.layout;
d3.utils.pack = (function d3$utils$pack(){
return d3.utils.layout.pack();
});
d3.utils.json = d3.json;
d3.utils.timer = d3.timer;

//# sourceMappingURL=utils.js.map