// Compiled by ClojureScript 1.7.228 {}
goog.provide('d3.rotating_voronoi');
goog.require('cljs.core');
goog.require('d3.utils');
goog.require('clojure.string');
d3.rotating_voronoi.rvoronoi = (function d3$rotating_voronoi$rvoronoi(p__22800){
var map__22811 = p__22800;
var map__22811__$1 = ((((!((map__22811 == null)))?((((map__22811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22811):map__22811);
var selector = cljs.core.get.call(null,map__22811__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var width = cljs.core.get.call(null,map__22811__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__22811__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var data = cljs.core.get.call(null,map__22811__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var default_style = cljs.core.get.call(null,map__22811__$1,new cljs.core.Keyword(null,"default-style","default-style",-1833236324));
var points = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var get_points = ((function (points,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function() { 
var G__22821__delegate = function (args){
return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.deref,cljs.core.deref.call(null,points)));
};
var G__22821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22822__i = 0, G__22822__a = new Array(arguments.length -  0);
while (G__22822__i < G__22822__a.length) {G__22822__a[G__22822__i] = arguments[G__22822__i + 0]; ++G__22822__i;}
  args = new cljs.core.IndexedSeq(G__22822__a,0);
} 
return G__22821__delegate.call(this,args);};
G__22821.cljs$lang$maxFixedArity = 0;
G__22821.cljs$lang$applyTo = (function (arglist__22823){
var args = cljs.core.seq(arglist__22823);
return G__22821__delegate(args);
});
G__22821.cljs$core$IFn$_invoke$arity$variadic = G__22821__delegate;
return G__22821;
})()
;})(points,map__22811,map__22811__$1,selector,width,height,data,default_style))
;
var vor_obj = d3.utils.voronoi.call(null).clipExtent(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- width) / (2)),((- height) / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width / (2)),(height / (2))], null)], null)));
var τ = ((2) * Math.PI);
var round_d2 = ((function (points,get_points,vor_obj,τ,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (p1__22799_SHARP_){
return (((p1__22799_SHARP_ * (100)) | (0)) / (100));
});})(points,get_points,vor_obj,τ,map__22811,map__22811__$1,selector,width,height,data,default_style))
;
var styles_vec = cljs.core.reduce.call(null,((function (points,get_points,vor_obj,τ,round_d2,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (acc,p__22813){
var vec__22814 = p__22813;
var _ = cljs.core.nth.call(null,vec__22814,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22814,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__22814,(2),null);
var n = cljs.core.nth.call(null,vec__22814,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__22814,(4),null);
var x = cljs.core.nth.call(null,vec__22814,(5),null);
return cljs.core.concat.call(null,acc,cljs.core.repeat.call(null,n,(function (){var or__18158__auto__ = x;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return default_style;
}
})()));
});})(points,get_points,vor_obj,τ,round_d2,map__22811,map__22811__$1,selector,width,height,data,default_style))
,cljs.core.PersistentVector.EMPTY,data);
var launch_circle = ((function (points,get_points,vor_obj,τ,round_d2,styles_vec,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (p__22815){
var vec__22816 = p__22815;
var cx = cljs.core.nth.call(null,vec__22816,(0),null);
var cy = cljs.core.nth.call(null,vec__22816,(1),null);
var r = cljs.core.nth.call(null,vec__22816,(2),null);
var n = cljs.core.nth.call(null,vec__22816,(3),null);
var δθ = cljs.core.nth.call(null,vec__22816,(4),null);
var launch_pt = ((function (vec__22816,cx,cy,r,n,δθ,points,get_points,vor_obj,τ,round_d2,styles_vec,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (θ){
var init_pt = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (r * Math.cos(θ))),(cy + (r * Math.sin(θ)))], null);
var cur_pt = cljs.core.atom.call(null,init_pt);
var cur_θ = cljs.core.atom.call(null,θ);
d3.utils.timer.call(null,((function (init_pt,cur_pt,cur_θ,vec__22816,cx,cy,r,n,δθ,points,get_points,vor_obj,τ,round_d2,styles_vec,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (){
cljs.core.swap_BANG_.call(null,cur_θ,cljs.core._PLUS_,δθ);

cljs.core.reset_BANG_.call(null,cur_pt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [round_d2.call(null,(cx + (r * Math.cos(cljs.core.deref.call(null,cur_θ))))),round_d2.call(null,(cy + (r * Math.sin(cljs.core.deref.call(null,cur_θ)))))], null));

return false;
});})(init_pt,cur_pt,cur_θ,vec__22816,cx,cy,r,n,δθ,points,get_points,vor_obj,τ,round_d2,styles_vec,map__22811,map__22811__$1,selector,width,height,data,default_style))
);

return cljs.core.swap_BANG_.call(null,points,cljs.core.conj,cur_pt);
});})(vec__22816,cx,cy,r,n,δθ,points,get_points,vor_obj,τ,round_d2,styles_vec,map__22811,map__22811__$1,selector,width,height,data,default_style))
;
return cljs.core.dorun.call(null,cljs.core.map.call(null,launch_pt,cljs.core.range.call(null,1.0E-6,τ,(τ / n))));
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,map__22811,map__22811__$1,selector,width,height,data,default_style))
;
var _ = cljs.core.dorun.call(null,cljs.core.map.call(null,launch_circle,data));
var line = d3.svg.line().interpolate("basis-closed");
var svg = d3.select(selector).append("svg").attr("width",width).attr("height",height).append("g").attr("transform",((function (points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (){
return [cljs.core.str("translate("),cljs.core.str((width / (2))),cljs.core.str(","),cljs.core.str((height / (2))),cljs.core.str(")")].join('');
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,map__22811,map__22811__$1,selector,width,height,data,default_style))
);
var path = svg.selectAll("path").data(get_points).enter().append("path");
var path__$1 = path.each(((function (points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (___$1,i){
var p = this;
return cljs.core.nth.call(null,styles_vec,i).call(null,d3.select(p));
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,map__22811,map__22811__$1,selector,width,height,data,default_style))
);
var three_polate = ((function (points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,path__$1,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (p__22817){
var vec__22818 = p__22817;
var vec__22819 = cljs.core.nth.call(null,vec__22818,(0),null);
var x0 = cljs.core.nth.call(null,vec__22819,(0),null);
var y0 = cljs.core.nth.call(null,vec__22819,(1),null);
var vec__22820 = cljs.core.nth.call(null,vec__22818,(1),null);
var x1 = cljs.core.nth.call(null,vec__22820,(0),null);
var y1 = cljs.core.nth.call(null,vec__22820,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,y0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((2) * x0) + x1) / (3)),((((2) * y0) + y1) / (3))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((2) * x1) + x0) / (3)),((((2) * y1) + y0) / (3))], null)], null);
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,path__$1,map__22811,map__22811__$1,selector,width,height,data,default_style))
;
var resample = ((function (points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,path__$1,three_polate,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (pts){
var pairs = cljs.core.map.call(null,cljs.core.vector,cljs.core.cons.call(null,cljs.core.last.call(null,pts),pts),pts);
return cljs.core.mapcat.call(null,three_polate,pairs);
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,path__$1,three_polate,map__22811,map__22811__$1,selector,width,height,data,default_style))
;
return d3.utils.timer.call(null,((function (points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,path__$1,three_polate,resample,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (){
var pts_22824 = get_points.call(null);
var vnoi_22825 = vor_obj.call(null,pts_22824);
path__$1.attr("d",((function (pts_22824,vnoi_22825,points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,path__$1,three_polate,resample,map__22811,map__22811__$1,selector,width,height,data,default_style){
return (function (pt,i){
return line.call(null,cljs.core.clj__GT_js.call(null,resample.call(null,cljs.core.nth.call(null,vnoi_22825,i))));
});})(pts_22824,vnoi_22825,points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,path__$1,three_polate,resample,map__22811,map__22811__$1,selector,width,height,data,default_style))
);

return false;
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,path__$1,three_polate,resample,map__22811,map__22811__$1,selector,width,height,data,default_style))
);
});
d3.rotating_voronoi.rand_STAR_ = (function d3$rotating_voronoi$rand_STAR_(a,b){
return (cljs.core.rand.call(null,(b - a)) + a);
});
d3.rotating_voronoi.ex1 = (function d3$rotating_voronoi$ex1(){
var cs = d3.scale.linear().domain([(0),(10)]).range(["tomato","#FAFAFA"]);
var data = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100),(120),(40),(- 0.001)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100),(30),(10),0.03], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100),(60),(3),(- 0.05)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100),(15),(4),(- 0.02)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100),(0),(1),(- 0.02)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(- (120)),(80),(4),(- 0.02)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(- (120)),(0),(1),(- 0.02)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(280),(120),(40),(8),0.02], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(280),(120),(20),(8),(- 0.02)], null)], null);
var data__$1 = cljs.core.mapv.call(null,((function (cs,data){
return (function (p1__22826_SHARP_,p2__22827_SHARP_){
return cljs.core.conj.call(null,p1__22826_SHARP_,((function (cs,data){
return (function (x){
return x.style("fill",cs.call(null,p2__22827_SHARP_));
});})(cs,data))
);
});})(cs,data))
,data,cljs.core.range.call(null));
return d3.rotating_voronoi.rvoronoi.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"selector","selector",762528866),"#app",new cljs.core.Keyword(null,"data","data",-232669377),data__$1,new cljs.core.Keyword(null,"default-style","default-style",-1833236324),((function (cs,data,data__$1){
return (function (x__19276__auto__){
return x__19276__auto__.style("stroke","white").style("stroke-width","2px").style("fill",((function (cs,data,data__$1){
return (function (){
return cs.call(null,d3.rotating_voronoi.rand_STAR_.call(null,(0),(6)));
});})(cs,data,data__$1))
);
});})(cs,data,data__$1))
], null));
});
d3.rotating_voronoi.rand_rot = (function d3$rotating_voronoi$rand_rot(var_args){
var args__19223__auto__ = [];
var len__19216__auto___22829 = arguments.length;
var i__19217__auto___22830 = (0);
while(true){
if((i__19217__auto___22830 < len__19216__auto___22829)){
args__19223__auto__.push((arguments[i__19217__auto___22830]));

var G__22831 = (i__19217__auto___22830 + (1));
i__19217__auto___22830 = G__22831;
continue;
} else {
}
break;
}

var argseq__19224__auto__ = ((((0) < args__19223__auto__.length))?(new cljs.core.IndexedSeq(args__19223__auto__.slice((0)),(0))):null);
return d3.rotating_voronoi.rand_rot.cljs$core$IFn$_invoke$arity$variadic(argseq__19224__auto__);
});

d3.rotating_voronoi.rand_rot.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var cx = d3.rotating_voronoi.rand_STAR_.call(null,(-400),(400));
var cy = d3.rotating_voronoi.rand_STAR_.call(null,(-400),(400));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy,d3.rotating_voronoi.rand_STAR_.call(null,(10),(25)),d3.rotating_voronoi.rand_STAR_.call(null,(3),(10)),d3.rotating_voronoi.rand_STAR_.call(null,(- 0.03),0.03)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy,d3.rotating_voronoi.rand_STAR_.call(null,(25),(60)),d3.rotating_voronoi.rand_STAR_.call(null,(3),(10)),d3.rotating_voronoi.rand_STAR_.call(null,(- 0.03),0.03)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy,d3.rotating_voronoi.rand_STAR_.call(null,(60),(90)),d3.rotating_voronoi.rand_STAR_.call(null,(3),(10)),d3.rotating_voronoi.rand_STAR_.call(null,(- 0.03),0.03)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy,d3.rotating_voronoi.rand_STAR_.call(null,(90),(120)),d3.rotating_voronoi.rand_STAR_.call(null,(3),(10)),d3.rotating_voronoi.rand_STAR_.call(null,(- 0.03),0.03)], null)], null);
});

d3.rotating_voronoi.rand_rot.cljs$lang$maxFixedArity = (0);

d3.rotating_voronoi.rand_rot.cljs$lang$applyTo = (function (seq22828){
return d3.rotating_voronoi.rand_rot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22828));
});
d3.rotating_voronoi.ex2 = (function d3$rotating_voronoi$ex2(){
var cs = d3.scale.linear().domain([(0),(10)]).range(["tomato","#FAFAFA"]);
var data2 = cljs.core.vec.call(null,cljs.core.mapcat.call(null,d3.rotating_voronoi.rand_rot,cljs.core.range.call(null,(4))));
return d3.rotating_voronoi.rvoronoi.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"selector","selector",762528866),"#app",new cljs.core.Keyword(null,"data","data",-232669377),data2,new cljs.core.Keyword(null,"default-style","default-style",-1833236324),((function (cs,data2){
return (function (x__19276__auto__){
return x__19276__auto__.style("stroke","white").style("stroke-width","2px").style("fill",((function (cs,data2){
return (function (){
return cs.call(null,d3.rotating_voronoi.rand_STAR_.call(null,(0),(6)));
});})(cs,data2))
);
});})(cs,data2))
], null));
});
d3.rotating_voronoi.flower = (function d3$rotating_voronoi$flower(p__22832){
var map__22837 = p__22832;
var map__22837__$1 = ((((!((map__22837 == null)))?((((map__22837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22837):map__22837);
var x = cljs.core.get.call(null,map__22837__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__22837__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__22837__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var depth = cljs.core.get.call(null,map__22837__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var petals = cljs.core.get.call(null,map__22837__$1,new cljs.core.Keyword(null,"petals","petals",-1788727604));
var speed = cljs.core.get.call(null,map__22837__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var rad_inc = (r / depth);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,d3.rotating_voronoi.rand_STAR_.call(null,(0),rad_inc),cljs.core.apply.call(null,d3.rotating_voronoi.rand_STAR_,petals),cljs.core.apply.call(null,d3.rotating_voronoi.rand_STAR_,speed)], null),cljs.core.map.call(null,((function (rad_inc,map__22837,map__22837__$1,x,y,r,depth,petals,speed){
return (function (p__22839){
var vec__22840 = p__22839;
var a = cljs.core.nth.call(null,vec__22840,(0),null);
var b = cljs.core.nth.call(null,vec__22840,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,d3.rotating_voronoi.rand_STAR_.call(null,a,b),cljs.core.apply.call(null,d3.rotating_voronoi.rand_STAR_,petals),cljs.core.apply.call(null,d3.rotating_voronoi.rand_STAR_,speed)], null);
});})(rad_inc,map__22837,map__22837__$1,x,y,r,depth,petals,speed))
,cljs.core.partition.call(null,(2),(1),cljs.core.reductions.call(null,cljs.core._PLUS_,rad_inc,cljs.core.repeat.call(null,depth,rad_inc)))));
});
d3.rotating_voronoi.ex3 = (function d3$rotating_voronoi$ex3(){
var cs = d3.scale.linear().domain([(0),(10)]).range(["tomato","#FAFAFA"]);
return d3.rotating_voronoi.rvoronoi.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"selector","selector",762528866),"#app",new cljs.core.Keyword(null,"data","data",-232669377),d3.rotating_voronoi.flower.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"depth","depth",1768663640),(5),new cljs.core.Keyword(null,"r","r",-471384190),(400),new cljs.core.Keyword(null,"petals","petals",-1788727604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(40)], null),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.01,0.01], null)], null)),new cljs.core.Keyword(null,"default-style","default-style",-1833236324),((function (cs){
return (function (x__19276__auto__){
return x__19276__auto__.style("stroke","white").style("stroke-width","2px").style("fill",((function (cs){
return (function (){
return cs.call(null,d3.rotating_voronoi.rand_STAR_.call(null,(0),(6)));
});})(cs))
);
});})(cs))
], null));
});

//# sourceMappingURL=rotating_voronoi.js.map