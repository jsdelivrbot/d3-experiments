// Compiled by ClojureScript 1.7.228 {}
goog.provide('d3.color_lovers');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
d3.color_lovers.get_json = (function d3$color_lovers$get_json(url,success){
return goog.net.XhrIo.send(url,(function (r){
return success.call(null,r.target.getResponseJson());
}));
});
d3.color_lovers.palettes__GT_map = (function d3$color_lovers$palettes__GT_map(x){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (x__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1.title,cljs.core.js__GT_clj.call(null,x__$1.colors)], null);
}),x));
});
d3.color_lovers.palettes_req = (function d3$color_lovers$palettes_req(w){
return (function (cb){
return d3.color_lovers.get_json.call(null,[cljs.core.str("https://crossorigin.me/http://www.colourlovers.com/api/palettes/"),cljs.core.str(w),cljs.core.str("?format=json")].join(''),cljs.core.comp.call(null,cb,d3.color_lovers.palettes__GT_map));
});
});
d3.color_lovers.top_palettes = d3.color_lovers.palettes_req.call(null,"top");
d3.color_lovers.new_palettes = d3.color_lovers.palettes_req.call(null,"new");
d3.color_lovers.rand_palette = d3.color_lovers.palettes_req.call(null,"random");
d3.color_lovers.colors__GT_map = (function d3$color_lovers$colors__GT_map(x){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (x__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1.title,x__$1.hex], null);
}),x));
});
d3.color_lovers.colors_req = (function d3$color_lovers$colors_req(w){
return (function (cb){
return d3.color_lovers.get_json.call(null,[cljs.core.str("https://crossorigin.me/http://www.colourlovers.com/api/colors/"),cljs.core.str(w),cljs.core.str("?format=json")].join(''),cljs.core.comp.call(null,cb,d3.color_lovers.colors__GT_map));
});
});
d3.color_lovers.top_colors = d3.color_lovers.colors_req.call(null,"top");
d3.color_lovers.new_colors = d3.color_lovers.colors_req.call(null,"new");
d3.color_lovers.rand_color = d3.color_lovers.colors_req.call(null,"random");

//# sourceMappingURL=color_lovers.js.map