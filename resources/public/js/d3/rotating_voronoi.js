// Compiled by ClojureScript 1.7.228 {}
goog.provide('d3.rotating_voronoi');
goog.require('cljs.core');
goog.require('d3.utils');
goog.require('clojure.string');
d3.rotating_voronoi.rvoronoi = (function d3$rotating_voronoi$rvoronoi(p__58428){
var map__58439 = p__58428;
var map__58439__$1 = ((((!((map__58439 == null)))?((((map__58439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58439):map__58439);
var selector = cljs.core.get.call(null,map__58439__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var width = cljs.core.get.call(null,map__58439__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__58439__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var data = cljs.core.get.call(null,map__58439__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var default_style = cljs.core.get.call(null,map__58439__$1,new cljs.core.Keyword(null,"default-style","default-style",-1833236324));
var points = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var get_points = ((function (points,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function() { 
var G__58449__delegate = function (args){
return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.deref,cljs.core.deref.call(null,points)));
};
var G__58449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58450__i = 0, G__58450__a = new Array(arguments.length -  0);
while (G__58450__i < G__58450__a.length) {G__58450__a[G__58450__i] = arguments[G__58450__i + 0]; ++G__58450__i;}
  args = new cljs.core.IndexedSeq(G__58450__a,0);
} 
return G__58449__delegate.call(this,args);};
G__58449.cljs$lang$maxFixedArity = 0;
G__58449.cljs$lang$applyTo = (function (arglist__58451){
var args = cljs.core.seq(arglist__58451);
return G__58449__delegate(args);
});
G__58449.cljs$core$IFn$_invoke$arity$variadic = G__58449__delegate;
return G__58449;
})()
;})(points,map__58439,map__58439__$1,selector,width,height,data,default_style))
;
var vor_obj = d3.utils.voronoi.call(null).clipExtent(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- width) / (2)),((- height) / (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width / (2)),(height / (2))], null)], null)));
var τ = ((2) * Math.PI);
var round_d2 = ((function (points,get_points,vor_obj,τ,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (p1__58427_SHARP_){
return (((p1__58427_SHARP_ * (100)) | (0)) / (100));
});})(points,get_points,vor_obj,τ,map__58439,map__58439__$1,selector,width,height,data,default_style))
;
var styles_vec = cljs.core.reduce.call(null,((function (points,get_points,vor_obj,τ,round_d2,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (acc,p__58441){
var vec__58442 = p__58441;
var _ = cljs.core.nth.call(null,vec__58442,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__58442,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__58442,(2),null);
var n = cljs.core.nth.call(null,vec__58442,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__58442,(4),null);
var x = cljs.core.nth.call(null,vec__58442,(5),null);
return cljs.core.concat.call(null,acc,cljs.core.repeat.call(null,n,(function (){var or__18158__auto__ = x;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return default_style;
}
})()));
});})(points,get_points,vor_obj,τ,round_d2,map__58439,map__58439__$1,selector,width,height,data,default_style))
,cljs.core.PersistentVector.EMPTY,data);
var launch_circle = ((function (points,get_points,vor_obj,τ,round_d2,styles_vec,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (p__58443){
var vec__58444 = p__58443;
var cx = cljs.core.nth.call(null,vec__58444,(0),null);
var cy = cljs.core.nth.call(null,vec__58444,(1),null);
var r = cljs.core.nth.call(null,vec__58444,(2),null);
var n = cljs.core.nth.call(null,vec__58444,(3),null);
var δθ = cljs.core.nth.call(null,vec__58444,(4),null);
var launch_pt = ((function (vec__58444,cx,cy,r,n,δθ,points,get_points,vor_obj,τ,round_d2,styles_vec,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (θ){
var init_pt = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (r * Math.cos(θ))),(cy + (r * Math.sin(θ)))], null);
var cur_pt = cljs.core.atom.call(null,init_pt);
var cur_θ = cljs.core.atom.call(null,θ);
d3.utils.timer.call(null,((function (init_pt,cur_pt,cur_θ,vec__58444,cx,cy,r,n,δθ,points,get_points,vor_obj,τ,round_d2,styles_vec,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (){
cljs.core.swap_BANG_.call(null,cur_θ,cljs.core._PLUS_,δθ);

cljs.core.reset_BANG_.call(null,cur_pt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [round_d2.call(null,(cx + (r * Math.cos(cljs.core.deref.call(null,cur_θ))))),round_d2.call(null,(cy + (r * Math.sin(cljs.core.deref.call(null,cur_θ)))))], null));

return false;
});})(init_pt,cur_pt,cur_θ,vec__58444,cx,cy,r,n,δθ,points,get_points,vor_obj,τ,round_d2,styles_vec,map__58439,map__58439__$1,selector,width,height,data,default_style))
);

return cljs.core.swap_BANG_.call(null,points,cljs.core.conj,cur_pt);
});})(vec__58444,cx,cy,r,n,δθ,points,get_points,vor_obj,τ,round_d2,styles_vec,map__58439,map__58439__$1,selector,width,height,data,default_style))
;
return cljs.core.dorun.call(null,cljs.core.map.call(null,launch_pt,cljs.core.range.call(null,1.0E-6,τ,(τ / n))));
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,map__58439,map__58439__$1,selector,width,height,data,default_style))
;
var _ = cljs.core.dorun.call(null,cljs.core.map.call(null,launch_circle,data));
var line = d3.svg.line().interpolate("basis-closed");
var svg = d3.select(selector).append("svg").attr("width",width).attr("height",height).append("g").attr("transform",((function (points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (){
return [cljs.core.str("translate("),cljs.core.str((width / (2))),cljs.core.str(","),cljs.core.str((height / (2))),cljs.core.str(")")].join('');
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,map__58439,map__58439__$1,selector,width,height,data,default_style))
);
var path = svg.selectAll("path").data(get_points).enter().append("path").each(((function (points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (___$1,i){
var p = this;
return cljs.core.nth.call(null,styles_vec,i).call(null,d3.select(p));
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,map__58439,map__58439__$1,selector,width,height,data,default_style))
);
var three_polate = ((function (points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (p__58445){
var vec__58446 = p__58445;
var vec__58447 = cljs.core.nth.call(null,vec__58446,(0),null);
var x0 = cljs.core.nth.call(null,vec__58447,(0),null);
var y0 = cljs.core.nth.call(null,vec__58447,(1),null);
var vec__58448 = cljs.core.nth.call(null,vec__58446,(1),null);
var x1 = cljs.core.nth.call(null,vec__58448,(0),null);
var y1 = cljs.core.nth.call(null,vec__58448,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0,y0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((2) * x0) + x1) / (3)),((((2) * y0) + y1) / (3))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((2) * x1) + x0) / (3)),((((2) * y1) + y0) / (3))], null)], null);
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,map__58439,map__58439__$1,selector,width,height,data,default_style))
;
var resample = ((function (points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,three_polate,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (pts){
var pairs = cljs.core.map.call(null,cljs.core.vector,cljs.core.cons.call(null,cljs.core.last.call(null,pts),pts),pts);
return cljs.core.mapcat.call(null,three_polate,pairs);
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,three_polate,map__58439,map__58439__$1,selector,width,height,data,default_style))
;
return d3.utils.timer.call(null,((function (points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,three_polate,resample,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (){
var pts_58452 = get_points.call(null);
var vnoi_58453 = vor_obj.call(null,pts_58452);
path.attr("d",((function (pts_58452,vnoi_58453,points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,three_polate,resample,map__58439,map__58439__$1,selector,width,height,data,default_style){
return (function (pt,i){
return line.call(null,cljs.core.clj__GT_js.call(null,resample.call(null,cljs.core.nth.call(null,vnoi_58453,i))));
});})(pts_58452,vnoi_58453,points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,three_polate,resample,map__58439,map__58439__$1,selector,width,height,data,default_style))
);

return false;
});})(points,get_points,vor_obj,τ,round_d2,styles_vec,launch_circle,_,line,svg,path,three_polate,resample,map__58439,map__58439__$1,selector,width,height,data,default_style))
);
});
d3.rotating_voronoi.rand_STAR_ = (function d3$rotating_voronoi$rand_STAR_(a,b){
return (cljs.core.rand.call(null,(b - a)) + a);
});
d3.rotating_voronoi.ex1 = (function d3$rotating_voronoi$ex1(){
var cs = d3.scale.linear().domain([(0),(10)]).range(["tomato","#FAFAFA"]);
var data = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100),(120),(40),(- 0.001)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100),(30),(10),0.03], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100),(60),(3),(- 0.05)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100),(15),(4),(- 0.02)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100),(0),(1),(- 0.02)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(- (120)),(80),(4),(- 0.02)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(- (120)),(0),(1),(- 0.02)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(280),(120),(40),(8),0.02], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(280),(120),(20),(8),(- 0.02)], null)], null);
var data__$1 = cljs.core.mapv.call(null,((function (cs,data){
return (function (p1__58454_SHARP_,p2__58455_SHARP_){
return cljs.core.conj.call(null,p1__58454_SHARP_,((function (cs,data){
return (function (x){
return x.style("fill",cs.call(null,p2__58455_SHARP_));
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
var len__19216__auto___58457 = arguments.length;
var i__19217__auto___58458 = (0);
while(true){
if((i__19217__auto___58458 < len__19216__auto___58457)){
args__19223__auto__.push((arguments[i__19217__auto___58458]));

var G__58459 = (i__19217__auto___58458 + (1));
i__19217__auto___58458 = G__58459;
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

d3.rotating_voronoi.rand_rot.cljs$lang$applyTo = (function (seq58456){
return d3.rotating_voronoi.rand_rot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58456));
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
d3.rotating_voronoi.flower = (function d3$rotating_voronoi$flower(p__58460){
var map__58465 = p__58460;
var map__58465__$1 = ((((!((map__58465 == null)))?((((map__58465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58465):map__58465);
var x = cljs.core.get.call(null,map__58465__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__58465__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__58465__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var depth = cljs.core.get.call(null,map__58465__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var petals = cljs.core.get.call(null,map__58465__$1,new cljs.core.Keyword(null,"petals","petals",-1788727604));
var speed = cljs.core.get.call(null,map__58465__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var rad_inc = (r / depth);
return cljs.core.map.call(null,((function (rad_inc,map__58465,map__58465__$1,x,y,r,depth,petals,speed){
return (function (p__58467){
var vec__58468 = p__58467;
var a = cljs.core.nth.call(null,vec__58468,(0),null);
var b = cljs.core.nth.call(null,vec__58468,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,d3.rotating_voronoi.rand_STAR_.call(null,a,b),cljs.core.apply.call(null,d3.rotating_voronoi.rand_STAR_,petals),cljs.core.apply.call(null,d3.rotating_voronoi.rand_STAR_,speed)], null);
});})(rad_inc,map__58465,map__58465__$1,x,y,r,depth,petals,speed))
,cljs.core.partition.call(null,(2),(1),cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.repeat.call(null,depth,rad_inc))));
});
d3.rotating_voronoi.ex3 = (function d3$rotating_voronoi$ex3(){
var cs = d3.scale.linear().domain([(0),(10)]).range(["tomato","#FAFAFA"]);
return d3.rotating_voronoi.rvoronoi.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"selector","selector",762528866),"#app",new cljs.core.Keyword(null,"data","data",-232669377),d3.rotating_voronoi.flower.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"depth","depth",1768663640),(10),new cljs.core.Keyword(null,"r","r",-471384190),(600),new cljs.core.Keyword(null,"petals","petals",-1788727604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(21)], null),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.01,0.01], null)], null)),new cljs.core.Keyword(null,"default-style","default-style",-1833236324),((function (cs){
return (function (x__19276__auto__){
return x__19276__auto__.style("stroke","white").style("stroke-width","2px").style("fill",((function (cs){
return (function (){
return cs.call(null,d3.rotating_voronoi.rand_STAR_.call(null,(0),(6)));
});})(cs))
);
});})(cs))
], null));
});
d3.rotating_voronoi.__GT_num = (function d3$rotating_voronoi$__GT_num(x){
if(typeof x === 'number'){
return x;
} else {
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,x)))){
return cljs.core.apply.call(null,d3.rotating_voronoi.rand_STAR_,x);
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return cljs.core.rand_nth.call(null,x);
} else {
return null;
}
}
}
});
d3.rotating_voronoi.flower2 = (function d3$rotating_voronoi$flower2(p__58469){
var map__58474 = p__58469;
var map__58474__$1 = ((((!((map__58474 == null)))?((((map__58474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58474):map__58474);
var x = cljs.core.get.call(null,map__58474__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__58474__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var layers = cljs.core.get.call(null,map__58474__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var petals = cljs.core.get.call(null,map__58474__$1,new cljs.core.Keyword(null,"petals","petals",-1788727604));
var speed = cljs.core.get.call(null,map__58474__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
return cljs.core.map.call(null,((function (map__58474,map__58474__$1,x,y,layers,petals,speed){
return (function (p__58476){
var vec__58477 = p__58476;
var r = cljs.core.nth.call(null,vec__58477,(0),null);
var pets = cljs.core.nth.call(null,vec__58477,(1),null);
var spd = cljs.core.nth.call(null,vec__58477,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,d3.rotating_voronoi.__GT_num.call(null,r),d3.rotating_voronoi.__GT_num.call(null,(function (){var or__18158__auto__ = pets;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return petals;
}
})()),d3.rotating_voronoi.__GT_num.call(null,(function (){var or__18158__auto__ = spd;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return speed;
}
})())], null);
});})(map__58474,map__58474__$1,x,y,layers,petals,speed))
,layers);
});
d3.rotating_voronoi.ex4 = (function d3$rotating_voronoi$ex4(){
var cs = d3.scale.linear().domain([(0),(10)]).range(["tomato","#FAFAFA"]);
return d3.rotating_voronoi.rvoronoi.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"selector","selector",762528866),"#app",new cljs.core.Keyword(null,"data","data",-232669377),d3.rotating_voronoi.flower2.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(3),0.001], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(6),0.005], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(12),-0.01], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(120),(3),0.01], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(220),(20),0.002], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(30),-0.005], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(310),(10),-0.002], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(22),0.002], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(420),(42),-0.002], null)], null)], null)),new cljs.core.Keyword(null,"default-style","default-style",-1833236324),((function (cs){
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