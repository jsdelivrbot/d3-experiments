// Compiled by ClojureScript 1.7.228 {}
goog.provide('d3.prob');
goog.require('cljs.core');
/**
 * build a function that return a float between a and b
 */
d3.prob._GT_f_GT_ = (function d3$prob$_GT_f_GT_(a,b){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"realize","realize",-616265855),(function (){
return (cljs.core.rand.call(null,(b - a)) + a);
})], null));
});
/**
 * build a function that return an int between a and b
 */
d3.prob._GT_i_GT_ = (function d3$prob$_GT_i_GT_(a,b){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"realize","realize",-616265855),(function (){
return Math.round(d3.prob.realize.call(null,d3.prob._GT_f_GT_.call(null,a,b)));
})], null));
});
/**
 * build a function that return a random element of x
 */
d3.prob.one_of = (function d3$prob$one_of(x){
return cljs.core.with_meta.call(null,x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"realize","realize",-616265855),(function (){
return cljs.core.rand_nth.call(null,x);
})], null));
});
d3.prob.realize1 = (function d3$prob$realize1(x){
var temp__4423__auto__ = new cljs.core.Keyword(null,"realize","realize",-616265855).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(temp__4423__auto__)){
var rf = temp__4423__auto__;
return rf.call(null,x);
} else {
return x;
}
});
d3.prob.realize = (function d3$prob$realize(x){
var temp__4423__auto__ = new cljs.core.Keyword(null,"realize","realize",-616265855).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(temp__4423__auto__)){
var rf = temp__4423__auto__;
return d3$prob$realize.call(null,rf.call(null,x));
} else {
return x;
}
});
d3.prob.realize.call(null,d3.prob._GT_f_GT_.call(null,(0),(3)));

//# sourceMappingURL=prob.js.map