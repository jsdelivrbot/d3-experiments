// Compiled by ClojureScript 1.7.228 {}
goog.provide('generics.core');
goog.require('cljs.core');
generics.core.generics = (function generics$core$generics(x){
var temp__4425__auto__ = new cljs.core.Keyword(null,"generics","generics",425178200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(temp__4425__auto__)){
var gs = temp__4425__auto__;
return gs.call(null,x);
} else {
return null;
}
});
generics.core.add_methods = (function generics$core$add_methods(x,impl_map){
var gs = (function (){var or__18158__auto__ = generics.core.generics.call(null,x);
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})();
return cljs.core.vary_meta.call(null,x,((function (gs){
return (function (p1__62910_SHARP_){
return cljs.core.assoc.call(null,p1__62910_SHARP_,new cljs.core.Keyword(null,"generics","generics",425178200),((function (gs){
return (function (x__$1){
return cljs.core.apply.call(null,cljs.core.assoc,gs.call(null,x__$1),cljs.core.mapcat.call(null,((function (gs){
return (function (p__62913){
var vec__62914 = p__62913;
var k = cljs.core.nth.call(null,vec__62914,(0),null);
var v = cljs.core.nth.call(null,vec__62914,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.call(null,v,x__$1)], null);
});})(gs))
,impl_map));
});})(gs))
);
});})(gs))
);
});
generics.core.add_method = (function generics$core$add_method(x,name,impl){
return generics.core.add_methods.call(null,x,cljs.core.PersistentArrayMap.fromArray([name,impl], true, false));
});
generics.core.get_method = (function generics$core$get_method(x,name){
var temp__4425__auto__ = new cljs.core.Keyword(null,"generics","generics",425178200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(temp__4425__auto__)){
var gf = temp__4425__auto__;
return ((function (gf,temp__4425__auto__){
return (function (p1__62915_SHARP_){
return name.call(null,gf.call(null,p1__62915_SHARP_));
});
;})(gf,temp__4425__auto__))
} else {
return null;
}
});
generics.core.default_dispatch_fn = (function generics$core$default_dispatch_fn(x){
var or__18158__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return cljs.core.type.call(null,x);
}
});

//# sourceMappingURL=core.js.map