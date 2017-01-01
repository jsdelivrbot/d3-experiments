// Compiled by ClojureScript 1.7.228 {}
goog.provide('d3.flocks');
goog.require('cljs.core');
goog.require('cljsjs.d3');
d3.flocks.rand_STAR_ = (function d3$flocks$rand_STAR_(a,b){
return (cljs.core.rand.call(null,(b - a)) + a);
});
var cs_24974 = d3.scale.category10();
var boids_24975 = cljs.core.map.call(null,((function (cs_24974){
return (function (_){
return d3.flocks.rand_STAR_.call(null,0.8,1.2);
});})(cs_24974))
,cljs.core.range.call(null,(100)));

//# sourceMappingURL=flocks.js.map