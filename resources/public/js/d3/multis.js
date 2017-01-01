// Compiled by ClojureScript 1.7.228 {}
goog.provide('d3.multis');
goog.require('cljs.core');
d3.multis.t1 = (function d3$multis$t1(var_args){
var args__19223__auto__ = [];
var len__19216__auto___63184 = arguments.length;
var i__19217__auto___63185 = (0);
while(true){
if((i__19217__auto___63185 < len__19216__auto___63184)){
args__19223__auto__.push((arguments[i__19217__auto___63185]));

var G__63186 = (i__19217__auto___63185 + (1));
i__19217__auto___63185 = G__63186;
continue;
} else {
}
break;
}

var argseq__19224__auto__ = ((((1) < args__19223__auto__.length))?(new cljs.core.IndexedSeq(args__19223__auto__.slice((1)),(0))):null);
return d3.multis.t1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19224__auto__);
});

d3.multis.t1.cljs$core$IFn$_invoke$arity$variadic = (function (x,_){
var or__18158__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return cljs.core.type.call(null,x);
}
});

d3.multis.t1.cljs$lang$maxFixedArity = (1);

d3.multis.t1.cljs$lang$applyTo = (function (seq63182){
var G__63183 = cljs.core.first.call(null,seq63182);
var seq63182__$1 = cljs.core.next.call(null,seq63182);
return d3.multis.t1.cljs$core$IFn$_invoke$arity$variadic(G__63183,seq63182__$1);
});
if(typeof d3.multis.draw !== 'undefined'){
} else {
d3.multis.draw = (function (){var method_table__19071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19073__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19074__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19075__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"d3.multis","draw"),d3.multis.t1,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19075__auto__,method_table__19071__auto__,prefer_table__19072__auto__,method_cache__19073__auto__,cached_hierarchy__19074__auto__));
})();
}
if(typeof d3.multis.animate !== 'undefined'){
} else {
d3.multis.animate = (function (){var method_table__19071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19073__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19074__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19075__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"d3.multis","animate"),d3.multis.t1,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19075__auto__,method_table__19071__auto__,prefer_table__19072__auto__,method_cache__19073__auto__,cached_hierarchy__19074__auto__));
})();
}

//# sourceMappingURL=multis.js.map