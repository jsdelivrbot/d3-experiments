// Compiled by ClojureScript 1.7.228 {}
goog.provide('d3.moving_voronoi');
goog.require('cljs.core');
goog.require('cljsjs.d3');
goog.require('d3.utils');
goog.require('d3.prob');
goog.require('d3.palettes');
d3.moving_voronoi.voronoi = (function d3$moving_voronoi$voronoi(width,height){
return d3.utils.voronoi.call(null).clipExtent(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null)], null)));
});
d3.moving_voronoi.svg = (function d3$moving_voronoi$svg(parent_selector,p__31742){
var vec__31744 = p__31742;
var width = cljs.core.nth.call(null,vec__31744,(0),null);
var height = cljs.core.nth.call(null,vec__31744,(1),null);
return d3.select(parent_selector).append("svg").attr("width",width).attr("height",(function (){var or__18158__auto__ = height;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return width;
}
})());
});
d3.moving_voronoi.moving_particles = (function d3$moving_voronoi$moving_particles(p__31745){
var map__31751 = p__31745;
var map__31751__$1 = ((((!((map__31751 == null)))?((((map__31751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31751):map__31751);
var width = cljs.core.get.call(null,map__31751__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31751__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var n = cljs.core.get.call(null,map__31751__$1,new cljs.core.Keyword(null,"n","n",562130025));
var speed = cljs.core.get.call(null,map__31751__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var radius = cljs.core.get.call(null,map__31751__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var max_rad = ((typeof radius === 'number')?radius:cljs.core.apply.call(null,cljs.core.max,radius));
var points = cljs.core.atom.call(null,cljs.core.mapv.call(null,((function (max_rad,map__31751,map__31751__$1,width,height,n,speed,radius){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),d3.prob.realize.call(null,d3.prob._GT_i_GT_.call(null,max_rad,(width - max_rad))),new cljs.core.Keyword(null,"y","y",-1757859776),d3.prob.realize.call(null,d3.prob._GT_i_GT_.call(null,max_rad,(height - max_rad))),new cljs.core.Keyword(null,"vx","vx",-1685168462),d3.prob.realize.call(null,speed),new cljs.core.Keyword(null,"vy","vy",-2018509997),d3.prob.realize.call(null,speed),new cljs.core.Keyword(null,"rad","rad",-833983012),d3.prob.realize.call(null,radius)], null);
});})(max_rad,map__31751,map__31751__$1,width,height,n,speed,radius))
,cljs.core.range.call(null,d3.prob.realize.call(null,n))));
var _ = d3.utils.timer.call(null,((function (max_rad,points,map__31751,map__31751__$1,width,height,n,speed,radius){
return (function (_){
cljs.core.reset_BANG_.call(null,points,cljs.core.mapv.call(null,((function (max_rad,points,map__31751,map__31751__$1,width,height,n,speed,radius){
return (function (p__31753){
var map__31754 = p__31753;
var map__31754__$1 = ((((!((map__31754 == null)))?((((map__31754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31754):map__31754);
var x = cljs.core.get.call(null,map__31754__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31754__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vx = cljs.core.get.call(null,map__31754__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__31754__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var rad = cljs.core.get.call(null,map__31754__$1,new cljs.core.Keyword(null,"rad","rad",-833983012));
var vx__$1 = (((((x + vx) > (width - rad))) || (((x + vx) < rad)))?(- vx):vx);
var vy__$1 = (((((y + vy) > (height - rad))) || (((y + vy) < rad)))?(- vy):vy);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(x + vx__$1),new cljs.core.Keyword(null,"y","y",-1757859776),(y + vy__$1),new cljs.core.Keyword(null,"vx","vx",-1685168462),vx__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997),vy__$1,new cljs.core.Keyword(null,"rad","rad",-833983012),rad], null);
});})(max_rad,points,map__31751,map__31751__$1,width,height,n,speed,radius))
,cljs.core.deref.call(null,points)));

return false;
});})(max_rad,points,map__31751,map__31751__$1,width,height,n,speed,radius))
);
return points;
});
d3.moving_voronoi.moving_circles = (function d3$moving_voronoi$moving_circles(p__31763){
var map__31766 = p__31763;
var map__31766__$1 = ((((!((map__31766 == null)))?((((map__31766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31766):map__31766);
var opts = map__31766__$1;
var selector = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var width = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var radius = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var n = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"n","n",562130025));
var speed = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var points = d3.moving_voronoi.moving_particles.call(null,opts);
var pts = d3.moving_voronoi.svg.call(null,selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null)).append("g").selectAll("circle").data(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,points))).enter().append("circle").attr("r",((function (points,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed){
return (function (p1__31756_SHARP_){
return p1__31756_SHARP_.rad;
});})(points,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed))
).attr("cx",((function (points,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed){
return (function (p1__31757_SHARP_){
return p1__31757_SHARP_.x;
});})(points,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed))
).attr("cy",((function (points,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed){
return (function (p1__31758_SHARP_){
return p1__31758_SHARP_.y;
});})(points,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed))
);
return d3.utils.timer.call(null,((function (points,pts,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed){
return (function (_){
var ps = cljs.core.deref.call(null,points);
pts.attr("cx",((function (ps,points,pts,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed){
return (function (p1__31760_SHARP_,p2__31759_SHARP_){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,ps,p2__31759_SHARP_));
});})(ps,points,pts,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed))
).attr("cy",((function (ps,points,pts,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed){
return (function (p1__31762_SHARP_,p2__31761_SHARP_){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,ps,p2__31761_SHARP_));
});})(ps,points,pts,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed))
);

return false;
});})(points,pts,map__31766,map__31766__$1,opts,selector,width,height,radius,n,speed))
);
});
d3.moving_voronoi.shrinked_pol = (function d3$moving_voronoi$shrinked_pol(pol){
var vec__31769 = cljs.core.js__GT_clj.call(null,pol.centroid());
var cx = cljs.core.nth.call(null,vec__31769,(0),null);
var cy = cljs.core.nth.call(null,vec__31769,(1),null);
var centroid = vec__31769;
var line = d3.svg.line().interpolate("basis-closed");
var pd = line.call(null,cljs.core.clj__GT_js.call(null,d3.moving_voronoi.points));
d3.moving_voronoi._GT__GT_.call(null,d3.moving_voronoi.svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"path"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),pd], null)),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null)));

return d3.moving_voronoi._GT__GT_.call(null,d3.moving_voronoi.svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"path"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),pd,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(cx),cljs.core.str(" "),cljs.core.str(cy),cljs.core.str(") scale(0.5,0.5) translate("),cljs.core.str((- cx)),cljs.core.str(" "),cljs.core.str((- cy)),cljs.core.str(")")].join('')], null)),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"blue"], null)));
});
d3.moving_voronoi.moving_voronoi = (function d3$moving_voronoi$moving_voronoi(p__31770){
var map__31777 = p__31770;
var map__31777__$1 = ((((!((map__31777 == null)))?((((map__31777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31777):map__31777);
var opts = map__31777__$1;
var selector = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var width = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var radius = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var n = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"n","n",562130025));
var speed = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var palette = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"palette","palette",-456203511));
var points = d3.moving_voronoi.moving_particles.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"radius","radius",-2073122258),(1)));
var color = d3.prob.one_of.call(null,(function (){var or__18158__auto__ = palette;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return cljs.core.val.call(null,cljs.core.first.call(null,cljs.core.shuffle.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d3.palettes.color_lovers))))));
}
})());
var vor_obj = d3.moving_voronoi.voronoi.call(null,width,height);
var svg = d3.moving_voronoi.svg.call(null,selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var pts = svg.append("g").selectAll("path").data(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,points))).enter().append("path").style("fill",((function (points,color,vor_obj,svg,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette){
return (function (){
return d3.prob.realize.call(null,color);
});})(points,color,vor_obj,svg,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette))
);
var pts2 = svg.append("g").selectAll("path").data(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,points))).enter().append("path").style("fill",((function (points,color,vor_obj,svg,pts,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette){
return (function (){
return d3.prob.realize.call(null,color);
});})(points,color,vor_obj,svg,pts,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette))
);
var line = d3.svg.line().interpolate("basis-closed");
var three_polate = ((function (points,color,vor_obj,svg,pts,pts2,line,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette){
return (function (p__31779){
var vec__31780 = p__31779;
var vec__31781 = cljs.core.nth.call(null,vec__31780,(0),null);
var x0 = cljs.core.nth.call(null,vec__31781,(0),null);
var y0 = cljs.core.nth.call(null,vec__31781,(1),null);
var vec__31782 = cljs.core.nth.call(null,vec__31780,(1),null);
var x1 = cljs.core.nth.call(null,vec__31782,(0),null);
var y1 = cljs.core.nth.call(null,vec__31782,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,y0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((2) * x0) + x1) / (3)),((((2) * y0) + y1) / (3))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((2) * x1) + x0) / (3)),((((2) * y1) + y0) / (3))], null)], null);
});})(points,color,vor_obj,svg,pts,pts2,line,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette))
;
var resample = ((function (points,color,vor_obj,svg,pts,pts2,line,three_polate,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette){
return (function (pts__$1){
var pairs = cljs.core.map.call(null,cljs.core.vector,cljs.core.cons.call(null,cljs.core.last.call(null,pts__$1),pts__$1),pts__$1);
return cljs.core.mapcat.call(null,three_polate,pairs);
});})(points,color,vor_obj,svg,pts,pts2,line,three_polate,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette))
;
return d3.utils.timer.call(null,((function (points,color,vor_obj,svg,pts,pts2,line,three_polate,resample,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette){
return (function (_){
var ps = cljs.core.deref.call(null,points);
var vnoi = vor_obj.call(null,cljs.core.clj__GT_js.call(null,cljs.core.mapv.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),ps)));
pts.attr("d",((function (ps,vnoi,points,color,vor_obj,svg,pts,pts2,line,three_polate,resample,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette){
return (function (pt,i){
return line.call(null,cljs.core.clj__GT_js.call(null,resample.call(null,cljs.core.nth.call(null,vnoi,i))));
});})(ps,vnoi,points,color,vor_obj,svg,pts,pts2,line,three_polate,resample,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette))
);

pts2.attr("d",((function (ps,vnoi,points,color,vor_obj,svg,pts,pts2,line,three_polate,resample,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette){
return (function (pt,i){
return line.call(null,cljs.core.clj__GT_js.call(null,resample.call(null,cljs.core.nth.call(null,vnoi,i))));
});})(ps,vnoi,points,color,vor_obj,svg,pts,pts2,line,three_polate,resample,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette))
).attr("transform","scale(0.5 0.5)");

return false;
});})(points,color,vor_obj,svg,pts,pts2,line,three_polate,resample,map__31777,map__31777__$1,opts,selector,width,height,radius,n,speed,palette))
);
});
d3.moving_voronoi.vec2 = (function d3$moving_voronoi$vec2(var_args){
var args31783 = [];
var len__19216__auto___31788 = arguments.length;
var i__19217__auto___31789 = (0);
while(true){
if((i__19217__auto___31789 < len__19216__auto___31788)){
args31783.push((arguments[i__19217__auto___31789]));

var G__31790 = (i__19217__auto___31789 + (1));
i__19217__auto___31789 = G__31790;
continue;
} else {
}
break;
}

var G__31785 = args31783.length;
switch (G__31785) {
case 1:
return d3.moving_voronoi.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return d3.moving_voronoi.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31783.length)].join('')));

}
});

d3.moving_voronoi.vec2.cljs$core$IFn$_invoke$arity$1 = (function (p__31786){
var vec__31787 = p__31786;
var a = cljs.core.nth.call(null,vec__31787,(0),null);
var b = cljs.core.nth.call(null,vec__31787,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),a,new cljs.core.Keyword(null,"y","y",-1757859776),b], null);
});

d3.moving_voronoi.vec2.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),a,new cljs.core.Keyword(null,"y","y",-1757859776),b], null);
});

d3.moving_voronoi.vec2.cljs$lang$maxFixedArity = 2;
d3.moving_voronoi.regular_polygon = (function d3$moving_voronoi$regular_polygon(p__31792,n,r){
var map__31795 = p__31792;
var map__31795__$1 = ((((!((map__31795 == null)))?((((map__31795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31795):map__31795);
var x = cljs.core.get.call(null,map__31795__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31795__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var τ = ((2) * Math.PI);
return cljs.core.mapv.call(null,((function (τ,map__31795,map__31795__$1,x,y){
return (function (θ){
return d3.moving_voronoi.vec2.call(null,(x + (r * Math.cos(θ))),(y + (r * Math.sin(θ))));
});})(τ,map__31795,map__31795__$1,x,y))
,cljs.core.range.call(null,1.0E-6,τ,(τ / n)));
});
d3.moving_voronoi.v2_dist = (function d3$moving_voronoi$v2_dist(p__31799,p__31800){
var map__31805 = p__31799;
var map__31805__$1 = ((((!((map__31805 == null)))?((((map__31805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31805):map__31805);
var x1 = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__31806 = p__31800;
var map__31806__$1 = ((((!((map__31806 == null)))?((((map__31806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31806):map__31806);
var x2 = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return Math.sqrt((Math.pow((x2 - x1),(2)) + Math.pow((y2 - y1),(2))));
});
d3.moving_voronoi.rotate = (function d3$moving_voronoi$rotate(p__31809,p__31810,angle){
var map__31815 = p__31809;
var map__31815__$1 = ((((!((map__31815 == null)))?((((map__31815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31815):map__31815);
var ox = cljs.core.get.call(null,map__31815__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var oy = cljs.core.get.call(null,map__31815__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__31816 = p__31810;
var map__31816__$1 = ((((!((map__31816 == null)))?((((map__31816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31816):map__31816);
var t = map__31816__$1;
var tx = cljs.core.get.call(null,map__31816__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ty = cljs.core.get.call(null,map__31816__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var c = Math.cos(angle);
var s = Math.sin(angle);
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),(((c * (tx - ox)) + (- (s * (ty - oy)))) + ox),new cljs.core.Keyword(null,"y","y",-1757859776),(((s * (tx - ox)) + (c * (ty - oy))) + oy));
});
d3.moving_voronoi.rotating_points = (function d3$moving_voronoi$rotating_points(o,dθ,points){
var ps = cljs.core.atom.call(null,points);
d3.utils.timer.call(null,((function (ps){
return (function (_){
cljs.core.reset_BANG_.call(null,ps,cljs.core.mapv.call(null,((function (ps){
return (function (p1__31819_SHARP_){
return d3.moving_voronoi.rotate.call(null,o,p1__31819_SHARP_,dθ);
});})(ps))
,cljs.core.deref.call(null,ps)));

return false;
});})(ps))
);

return ps;
});
d3.moving_voronoi.flower_points = (function d3$moving_voronoi$flower_points(p__31825){
var map__31828 = p__31825;
var map__31828__$1 = ((((!((map__31828 == null)))?((((map__31828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31828):map__31828);
var origin = cljs.core.get.call(null,map__31828__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var lrs = cljs.core.get.call(null,map__31828__$1,new cljs.core.Keyword(null,"lrs","lrs",-803883461));
return cljs.core.mapv.call(null,((function (map__31828,map__31828__$1,origin,lrs){
return (function (x){
var r = cljs.core.rand.call(null,Math.PI);
return cljs.core.mapv.call(null,((function (r,map__31828,map__31828__$1,origin,lrs){
return (function (p1__31824_SHARP_){
return d3.moving_voronoi.rotate.call(null,origin,p1__31824_SHARP_,r);
});})(r,map__31828,map__31828__$1,origin,lrs))
,d3.moving_voronoi.regular_polygon.call(null,origin,new cljs.core.Keyword(null,"petals","petals",-1788727604).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(x)));
});})(map__31828,map__31828__$1,origin,lrs))
,lrs);
});
d3.moving_voronoi.flower_lr = (function d3$moving_voronoi$flower_lr(petals,radius){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"petals","petals",-1788727604),petals,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius], null);
});
d3.moving_voronoi.n_polate = (function d3$moving_voronoi$n_polate(n){
return (function (p__31836,p__31837){
var map__31838 = p__31836;
var map__31838__$1 = ((((!((map__31838 == null)))?((((map__31838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31838):map__31838);
var x0 = cljs.core.get.call(null,map__31838__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__31838__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__31839 = p__31837;
var map__31839__$1 = ((((!((map__31839 == null)))?((((map__31839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31839):map__31839);
var x1 = cljs.core.get.call(null,map__31839__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__31839__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.mapv.call(null,((function (map__31838,map__31838__$1,x0,y0,map__31839,map__31839__$1,x1,y1){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((n - x) * x0) + (x * x1)) / n),((((n - x) * y0) + (x * y1)) / n)], null);
});})(map__31838,map__31838__$1,x0,y0,map__31839,map__31839__$1,x1,y1))
,cljs.core.range.call(null,n));
});
});
d3.moving_voronoi.polygon__GT_line = (function d3$moving_voronoi$polygon__GT_line(pts){
var line = d3.svg.line().interpolate("basis-closed");
var pairs = cljs.core.map.call(null,cljs.core.vector,cljs.core.cons.call(null,cljs.core.last.call(null,pts),pts),pts);
var points = cljs.core.mapcat.call(null,((function (line,pairs){
return (function (p__31844){
var vec__31845 = p__31844;
var a = cljs.core.nth.call(null,vec__31845,(0),null);
var b = cljs.core.nth.call(null,vec__31845,(1),null);
return d3.moving_voronoi.n_polate.call(null,(2)).call(null,a,b);
});})(line,pairs))
,pairs);
return line.call(null,cljs.core.clj__GT_js.call(null,points));
});
d3.moving_voronoi.each_STAR_ = (function d3$moving_voronoi$each_STAR_(x,f){
return x.each((function (e){
var p = this;
return ((cljs.core.fn_QMARK_.call(null,f))?f.call(null,e):f).call(null,d3.select(p));
}));
});
d3.moving_voronoi.voronoi_STAR_ = (function d3$moving_voronoi$voronoi_STAR_(p__31851,points){
var vec__31853 = p__31851;
var width = cljs.core.nth.call(null,vec__31853,(0),null);
var height = cljs.core.nth.call(null,vec__31853,(1),null);
var v = d3.utils.voronoi.call(null).clipExtent(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null)], null)));
var polygons = v.call(null,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),points)));
return cljs.core.map.call(null,((function (v,polygons,vec__31853,width,height){
return (function (point,polygon){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"polygon","polygon",837053759),polygon,new cljs.core.Keyword(null,"point","point",1813198264),point], null);
});})(v,polygons,vec__31853,width,height))
,points,polygons);
});
d3.moving_voronoi.flower_points_STAR_ = (function d3$moving_voronoi$flower_points_STAR_(p__31855){
var map__31858 = p__31855;
var map__31858__$1 = ((((!((map__31858 == null)))?((((map__31858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31858):map__31858);
var origin = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var lrs = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"lrs","lrs",-803883461));
return cljs.core.mapv.call(null,((function (map__31858,map__31858__$1,origin,lrs){
return (function (lr){
var r = cljs.core.rand.call(null,Math.PI);
return cljs.core.mapv.call(null,((function (r,map__31858,map__31858__$1,origin,lrs){
return (function (p1__31854_SHARP_){
return cljs.core.assoc.call(null,d3.moving_voronoi.rotate.call(null,origin,p1__31854_SHARP_,r),new cljs.core.Keyword(null,"lr","lr",445647393),lr);
});})(r,map__31858,map__31858__$1,origin,lrs))
,d3.moving_voronoi.regular_polygon.call(null,origin,new cljs.core.Keyword(null,"petals","petals",-1788727604).cljs$core$IFn$_invoke$arity$1(lr),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(lr)));
});})(map__31858,map__31858__$1,origin,lrs))
,lrs);
});
d3.moving_voronoi.__GT_array = (function d3$moving_voronoi$__GT_array(x){
return cljs.core.apply.call(null,cljs.core.array,x);
});

//# sourceMappingURL=moving_voronoi.js.map