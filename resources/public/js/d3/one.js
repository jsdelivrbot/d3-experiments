// Compiled by ClojureScript 1.7.228 {}
goog.provide('d3.one');
goog.require('cljs.core');
goog.require('d3.rotating_voronoi');
goog.require('d3.utils');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljsjs.d3_cloud');
goog.require('goog.net.XhrIo');
goog.require('cljsjs.d3');
cljs.core.enable_console_print_BANG_.call(null);
d3.one.get_json = (function d3$one$get_json(url,success){
return goog.net.XhrIo.send(url,(function (r){
return success.call(null,r.target.getResponseJson());
}));
});
d3.one.clear_svg_BANG_ = (function d3$one$clear_svg_BANG_(){
return d3.utils._STAR__GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),"#app"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),"svg"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414)], null));
});
d3.one.svg = (function d3$one$svg(var_args){
var args__19223__auto__ = [];
var len__19216__auto___31496 = arguments.length;
var i__19217__auto___31497 = (0);
while(true){
if((i__19217__auto___31497 < len__19216__auto___31496)){
args__19223__auto__.push((arguments[i__19217__auto___31497]));

var G__31498 = (i__19217__auto___31497 + (1));
i__19217__auto___31497 = G__31498;
continue;
} else {
}
break;
}

var argseq__19224__auto__ = ((((0) < args__19223__auto__.length))?(new cljs.core.IndexedSeq(args__19223__auto__.slice((0)),(0))):null);
return d3.one.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__19224__auto__);
});

d3.one.svg.cljs$core$IFn$_invoke$arity$variadic = (function (p__31494){
var vec__31495 = p__31494;
var w = cljs.core.nth.call(null,vec__31495,(0),null);
var h = cljs.core.nth.call(null,vec__31495,(1),null);
return d3.utils._STAR__GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),"#app"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"svg"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__18158__auto__ = w;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return (500);
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__18158__auto__ = h;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return (500);
}
})()], null)));
});

d3.one.svg.cljs$lang$maxFixedArity = (0);

d3.one.svg.cljs$lang$applyTo = (function (seq31493){
return d3.one.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31493));
});
d3.one.moving_circle1 = (function d3$one$moving_circle1(){
return d3.utils._GT__GT_.call(null,d3.one.svg.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"circle"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(20),new cljs.core.Keyword(null,"cx","cx",1272694324),(20),new cljs.core.Keyword(null,"cy","cy",755331060),(20)], null)),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition","transition",765692007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delay","delay",-574225219),(1000)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068),(5000)], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(40),new cljs.core.Keyword(null,"cx","cx",1272694324),(140),new cljs.core.Keyword(null,"cy","cy",755331060),(140)], null)),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"blue"], null)));
});
var ramp_31499 = d3.utils.scale.linear().domain([(0),(10)]).range(["blue","red"]);
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ramp_31499.call(null,(10)),ramp_31499.call(null,(5)),ramp_31499.invert("#800080")], null);
var a_31500 = [(423),(124),(66),(424),(58),(10),(900),(44),(1)];
var q_scale1_31501 = d3.utils.scale.quantile().domain(a_31500).range([(0),(1),(2)]);
var q_scale2_31502 = d3.utils.scale.quantile().domain(a_31500).range(["a","b","c"]);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q_scale1_31501.call(null,(423)),q_scale1_31501.call(null,(20)),q_scale1_31501.call(null,(10000))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q_scale2_31502.call(null,(423)),q_scale2_31502.call(null,(20)),q_scale2_31502.call(null,(10000))], null)], null);
d3.one.scatter_data = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(5),new cljs.core.Keyword(null,"salary","salary",1283904063),(22000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(3),new cljs.core.Keyword(null,"salary","salary",1283904063),(18000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(10),new cljs.core.Keyword(null,"salary","salary",1283904063),(88000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(0),new cljs.core.Keyword(null,"salary","salary",1283904063),(180000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(27),new cljs.core.Keyword(null,"salary","salary",1283904063),(56000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friends","friends",-127631374),(8),new cljs.core.Keyword(null,"salary","salary",1283904063),(74000)], null)], null);
d3.one.plotting1 = (function d3$one$plotting1(){
return d3.utils._GT__GT_.call(null,d3.one.svg.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"circle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d3.one.scatter_data], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"circle"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(5),new cljs.core.Keyword(null,"cx","cx",1272694324),(function (p1__31505_SHARP_,p2__31504_SHARP_){
return ((10) * p2__31504_SHARP_);
}),new cljs.core.Keyword(null,"cy","cy",755331060),(function (p1__31506_SHARP_){
return p1__31506_SHARP_.friends;
})], null)));
});
d3.one.plotting2 = (function d3$one$plotting2(){
var x_extent = d3.extent(d3.utils.js_GT_.call(null,d3.one.scatter_data),(function (p1__31507_SHARP_){
return p1__31507_SHARP_.salary;
}));
var y_extent = d3.extent(d3.utils.js_GT_.call(null,d3.one.scatter_data),((function (x_extent){
return (function (p1__31508_SHARP_){
return p1__31508_SHARP_.friends;
});})(x_extent))
);
var xsc = d3.utils.scale.linear().domain(x_extent).range([(0),(500)]);
var ysc = d3.utils.scale.linear().domain(y_extent).range([(0),(500)]);
var x_axis = d3.svg.axis().scale(xsc).orient("bottom").ticks((4)).tickSize((500));
var y_axis = d3.svg.axis().scale(ysc).orient("right").ticks((16)).tickSize((500));
var svg = d3.one.svg.call(null,(600),(600));
d3.utils._GT__GT_.call(null,svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"circle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d3.one.scatter_data], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"circle"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(5),new cljs.core.Keyword(null,"cx","cx",1272694324),((function (x_extent,y_extent,xsc,ysc,x_axis,y_axis,svg){
return (function (p1__31509_SHARP_){
return xsc.call(null,p1__31509_SHARP_.salary);
});})(x_extent,y_extent,xsc,ysc,x_axis,y_axis,svg))
,new cljs.core.Keyword(null,"cy","cy",755331060),((function (x_extent,y_extent,xsc,ysc,x_axis,y_axis,svg){
return (function (p1__31510_SHARP_){
return ysc.call(null,p1__31510_SHARP_.friends);
});})(x_extent,y_extent,xsc,ysc,x_axis,y_axis,svg))
], null)));

d3.utils._GT__GT_.call(null,svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"g"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["id","yAxisG"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call","call",-519999866),y_axis], null));

d3.utils._GT__GT_.call(null,svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"g"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["id","xAxisG"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call","call",-519999866),x_axis], null));

d3.utils._STAR__GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"path.domain"], null),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)));

return d3.utils._STAR__GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"line"], null),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)));
});
d3.one.bounds = (function d3$one$bounds(num_coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.min,num_coll),cljs.core.apply.call(null,cljs.core.max,num_coll)], null);
});
/**
 * incomplete transition are bad
 */
d3.one.pie = (function d3$one$pie(data){
var pie_chart = d3.utils.layout.pie().sort(null);
var p1 = pie_chart.call(null,d3.utils.js_GT_.call(null,data));
var p2 = pie_chart.call(null,d3.utils.js_GT_.call(null,cljs.core.vec.call(null,cljs.core.shuffle.call(null,data))));
var new_arc = d3.utils.arc.call(null).outerRadius("100").innerRadius("70");
var color_scale = d3.utils.scale.linear().domain(d3.utils.js_GT_.call(null,d3.one.bounds.call(null,data))).range(["blue","red"]);
var arc_tween = ((function (pie_chart,p1,p2,new_arc,color_scale){
return (function (a){
var i = d3.interpolate(d3.utils.js_GT_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),a.previous], null)),a);
return ((function (i,pie_chart,p1,p2,new_arc,color_scale){
return (function (t){
return d3.utils.arc.call(null,i.call(null,t));
});
;})(i,pie_chart,p1,p2,new_arc,color_scale))
});})(pie_chart,p1,p2,new_arc,color_scale))
;
var svg = d3.one.svg.call(null);
d3.utils._GT__GT_.call(null,svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"g"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transform","translate(250,250)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"path"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),p1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"path"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d",new_arc], null)], null),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),((function (pie_chart,p1,p2,new_arc,color_scale,arc_tween,svg){
return (function (d){
return color_scale.call(null,d.data);
});})(pie_chart,p1,p2,new_arc,color_scale,arc_tween,svg))
,new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px"], null)));

return d3.utils._GT__GT_.call(null,svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"path"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),p2], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition","transition",765692007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrTween","attrTween",600256801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d",arc_tween], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fill",((function (pie_chart,p1,p2,new_arc,color_scale,arc_tween,svg){
return (function (d){
return color_scale.call(null,d.data);
});})(pie_chart,p1,p2,new_arc,color_scale,arc_tween,svg))
], null)], null));
});
d3.one.lscale = (function d3$one$lscale(d,r){
return d3.utils.scale.linear().domain(d3.utils.js_GT_.call(null,d)).range(d3.utils.js_GT_.call(null,r));
});
d3.one.word_cloud = (function d3$one$word_cloud(data){
var ws = d3.one.lscale.call(null,cljs.core.vals.call(null,data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(80)], null));
var rs = d3.one.lscale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(10)], null));
var data__$1 = cljs.core.mapv.call(null,((function (ws,rs){
return (function (p__31516){
var vec__31517 = p__31516;
var k = cljs.core.nth.call(null,vec__31517,(0),null);
var v = cljs.core.nth.call(null,vec__31517,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),k,new cljs.core.Keyword(null,"frequency","frequency",-1408891382),v], null);
});})(ws,rs))
,data);
var draw = ((function (ws,rs,data__$1){
return (function (words){
var svg = d3.utils._GT__GT_.call(null,d3.one.svg.call(null,(1000),(1000)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"g"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(500,500)"], null)], null));
return d3.utils._GT__GT_.call(null,svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"text"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [words], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"text"], null),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),((function (svg,ws,rs,data__$1){
return (function (p1__31512_SHARP_){
return [cljs.core.str(p1__31512_SHARP_.size),cljs.core.str("px")].join('');
});})(svg,ws,rs,data__$1))
,new cljs.core.Keyword(null,"opacity","opacity",397153780),0.75], null)),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"transform","transform",1381301764),((function (svg,ws,rs,data__$1){
return (function (p1__31513_SHARP_){
return [cljs.core.str("translate("),cljs.core.str(p1__31513_SHARP_.x),cljs.core.str(","),cljs.core.str(p1__31513_SHARP_.y),cljs.core.str(")rotate("),cljs.core.str(p1__31513_SHARP_.rotate),cljs.core.str(")")].join('');
});})(svg,ws,rs,data__$1))
], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),((function (svg,ws,rs,data__$1){
return (function (x){
return x.text;
});})(svg,ws,rs,data__$1))
], null));
});})(ws,rs,data__$1))
;
d3.layout.cloud().size(d3.utils.js_GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(1000)], null))).words(d3.utils.js_GT_.call(null,data__$1)).padding((5)).fontSize(((function (ws,rs,data__$1,draw){
return (function (d){
return ws.call(null,d.frequency);
});})(ws,rs,data__$1,draw))
).rotate(((function (ws,rs,data__$1,draw){
return (function (){
return rs.call(null,cljs.core.rand.call(null));
});})(ws,rs,data__$1,draw))
).on("end",draw).start();

return cljs.core.List.EMPTY;
});
d3.one.gen_words = (function d3$one$gen_words(n){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__31518_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str("word"),cljs.core.str(p1__31518_SHARP_)].join(''),cljs.core.rand_int.call(null,(10))],null));
}),cljs.core.range.call(null,n)));
});
d3.one.wc2 = (function d3$one$wc2(p__31525){
var map__31528 = p__31525;
var map__31528__$1 = ((((!((map__31528 == null)))?((((map__31528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31528):map__31528);
var selector = cljs.core.get.call(null,map__31528__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var width = cljs.core.get.call(null,map__31528__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31528__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var rotate = cljs.core.get.call(null,map__31528__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var fill = d3.utils.scale.category20();
var svg = d3.utils._STAR__GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),selector], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"svg"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"g"], null),d3.utils.translate.call(null,(width / (2)),(height / (2))));
var draw = ((function (fill,svg,map__31528,map__31528__$1,selector,width,height,rotate){
return (function (words){
var cl = d3.utils._GT__GT_.call(null,svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"g text"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [words,((function (fill,svg,map__31528,map__31528__$1,selector,width,height,rotate){
return (function (p1__31519_SHARP_){
return p1__31519_SHARP_.text;
});})(fill,svg,map__31528,map__31528__$1,selector,width,height,rotate))
], null)], null));
d3.utils._GT__GT_.call(null,cl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"text"], null),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Impact",new cljs.core.Keyword(null,"fill","fill",883462889),((function (cl,fill,svg,map__31528,map__31528__$1,selector,width,height,rotate){
return (function (p1__31521_SHARP_,p2__31520_SHARP_){
return fill.call(null,p2__31520_SHARP_);
});})(cl,fill,svg,map__31528,map__31528__$1,selector,width,height,rotate))
], null)),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),((function (cl,fill,svg,map__31528,map__31528__$1,selector,width,height,rotate){
return (function (p1__31522_SHARP_){
return p1__31522_SHARP_.text;
});})(cl,fill,svg,map__31528,map__31528__$1,selector,width,height,rotate))
], null));

d3.utils._GT__GT_.call(null,cl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition","transition",765692007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068),(600)], null),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),((function (cl,fill,svg,map__31528,map__31528__$1,selector,width,height,rotate){
return (function (p1__31523_SHARP_){
return [cljs.core.str(p1__31523_SHARP_.frequency),cljs.core.str("px")].join('');
});})(cl,fill,svg,map__31528,map__31528__$1,selector,width,height,rotate))
,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transform",((function (cl,fill,svg,map__31528,map__31528__$1,selector,width,height,rotate){
return (function (p1__31524_SHARP_){
return [cljs.core.str("translate("),cljs.core.str(p1__31524_SHARP_.x),cljs.core.str(","),cljs.core.str(p1__31524_SHARP_.y),cljs.core.str(") rotate("),cljs.core.str(p1__31524_SHARP_.rotate),cljs.core.str(")")].join('');
});})(cl,fill,svg,map__31528,map__31528__$1,selector,width,height,rotate))
], null)], null));

return d3.utils._GT__GT_.call(null,cl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit","exit",351849638)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition","transition",765692007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068),(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fill-opacity",1.0E-6], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-size",(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414)], null));
});})(fill,svg,map__31528,map__31528__$1,selector,width,height,rotate))
;
return ((function (fill,svg,draw,map__31528,map__31528__$1,selector,width,height,rotate){
return (function (ws){
return d3.layout.cloud().size(d3.utils.js_GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null))).words(d3.utils.js_GT_.call(null,ws)).padding((5)).rotate(rotate).font("Impact").fontSize(((function (fill,svg,draw,map__31528,map__31528__$1,selector,width,height,rotate){
return (function (d){
return d.frequency;
});})(fill,svg,draw,map__31528,map__31528__$1,selector,width,height,rotate))
).on("end",draw).start();
});
;})(fill,svg,draw,map__31528,map__31528__$1,selector,width,height,rotate))
});
d3.one.draw_pack = (function d3$one$draw_pack(var_args){
var args__19223__auto__ = [];
var len__19216__auto___31544 = arguments.length;
var i__19217__auto___31545 = (0);
while(true){
if((i__19217__auto___31545 < len__19216__auto___31544)){
args__19223__auto__.push((arguments[i__19217__auto___31545]));

var G__31546 = (i__19217__auto___31545 + (1));
i__19217__auto___31545 = G__31546;
continue;
} else {
}
break;
}

var argseq__19224__auto__ = ((((1) < args__19223__auto__.length))?(new cljs.core.IndexedSeq(args__19223__auto__.slice((1)),(0))):null);
return d3.one.draw_pack.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19224__auto__);
});

d3.one.draw_pack.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__31540){
var vec__31541 = p__31540;
var options = cljs.core.nth.call(null,vec__31541,(0),null);
var map__31542 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"color-scale","color-scale",-2117745622),d3.scale.category10(),new cljs.core.Keyword(null,"selector","selector",762528866),"#app",new cljs.core.Keyword(null,"children","children",-940561982),((function (vec__31541,options){
return (function (p1__31531_SHARP_){
return p1__31531_SHARP_.children;
});})(vec__31541,options))
,new cljs.core.Keyword(null,"value","value",305978217),((function (vec__31541,options){
return (function (p1__31532_SHARP_){
return p1__31532_SHARP_.value;
});})(vec__31541,options))
,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px"], null),options);
var map__31542__$1 = ((((!((map__31542 == null)))?((((map__31542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31542):map__31542);
var width = cljs.core.get.call(null,map__31542__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31542__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var color_scale = cljs.core.get.call(null,map__31542__$1,new cljs.core.Keyword(null,"color-scale","color-scale",-2117745622));
var selector = cljs.core.get.call(null,map__31542__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var children = cljs.core.get.call(null,map__31542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var value = cljs.core.get.call(null,map__31542__$1,new cljs.core.Keyword(null,"value","value",305978217));
var stroke_width = cljs.core.get.call(null,map__31542__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var packChart = d3.utils.layout.pack.call(null);
var svg = d3.utils._STAR__GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),selector], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"svg"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"g"], null));
packChart.size([width,height]).children(children).value(value);

return d3.utils._GT__GT_.call(null,svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"circle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [packChart.call(null,d3.utils.js_GT_.call(null,data))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"circle"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),((function (map__31542,map__31542__$1,width,height,color_scale,selector,children,value,stroke_width,packChart,svg,vec__31541,options){
return (function (p1__31533_SHARP_){
return p1__31533_SHARP_.r;
});})(map__31542,map__31542__$1,width,height,color_scale,selector,children,value,stroke_width,packChart,svg,vec__31541,options))
,new cljs.core.Keyword(null,"cx","cx",1272694324),((function (map__31542,map__31542__$1,width,height,color_scale,selector,children,value,stroke_width,packChart,svg,vec__31541,options){
return (function (p1__31534_SHARP_){
return p1__31534_SHARP_.x;
});})(map__31542,map__31542__$1,width,height,color_scale,selector,children,value,stroke_width,packChart,svg,vec__31541,options))
,new cljs.core.Keyword(null,"cy","cy",755331060),((function (map__31542,map__31542__$1,width,height,color_scale,selector,children,value,stroke_width,packChart,svg,vec__31541,options){
return (function (p1__31535_SHARP_){
return p1__31535_SHARP_.y;
});})(map__31542,map__31542__$1,width,height,color_scale,selector,children,value,stroke_width,packChart,svg,vec__31541,options))
], null)),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),((function (map__31542,map__31542__$1,width,height,color_scale,selector,children,value,stroke_width,packChart,svg,vec__31541,options){
return (function (p1__31536_SHARP_){
return color_scale.call(null,p1__31536_SHARP_.depth);
});})(map__31542,map__31542__$1,width,height,color_scale,selector,children,value,stroke_width,packChart,svg,vec__31541,options))
,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width,new cljs.core.Keyword(null,"stroke","stroke",1741823555),((function (map__31542,map__31542__$1,width,height,color_scale,selector,children,value,stroke_width,packChart,svg,vec__31541,options){
return (function (p1__31537_SHARP_){
return color_scale.call(null,(p1__31537_SHARP_.depth + (1)));
});})(map__31542,map__31542__$1,width,height,color_scale,selector,children,value,stroke_width,packChart,svg,vec__31541,options))
], null)));
});

d3.one.draw_pack.cljs$lang$maxFixedArity = (1);

d3.one.draw_pack.cljs$lang$applyTo = (function (seq31538){
var G__31539 = cljs.core.first.call(null,seq31538);
var seq31538__$1 = cljs.core.next.call(null,seq31538);
return d3.one.draw_pack.cljs$core$IFn$_invoke$arity$variadic(G__31539,seq31538__$1);
});
d3.one.voro1 = (function d3$one$voro1(p__31555){
var map__31558 = p__31555;
var map__31558__$1 = ((((!((map__31558 == null)))?((((map__31558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31558):map__31558);
var width = cljs.core.get.call(null,map__31558__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31558__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var selector = cljs.core.get.call(null,map__31558__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var n_polygon = cljs.core.get.call(null,map__31558__$1,new cljs.core.Keyword(null,"n-polygon","n-polygon",301039085));
var color_scale = cljs.core.get.call(null,map__31558__$1,new cljs.core.Keyword(null,"color-scale","color-scale",-2117745622));
var svg = d3.utils._STAR__GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),selector], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"svg"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"g"], null));
var path = d3.utils._GT__GT_.call(null,svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"path"], null));
var voronoi = d3.geom.voronoi().clipExtent(d3.utils.js_GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null)], null)));
var points = cljs.core.repeatedly.call(null,n_polygon,((function (svg,path,voronoi,map__31558,map__31558__$1,width,height,selector,n_polygon,color_scale){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,width),cljs.core.rand_int.call(null,height)], null);
});})(svg,path,voronoi,map__31558,map__31558__$1,width,height,selector,n_polygon,color_scale))
);
var paths_data = cljs.core.mapv.call(null,((function (svg,path,voronoi,points,map__31558,map__31558__$1,width,height,selector,n_polygon,color_scale){
return (function (d){
if(cljs.core.truth_(d)){
return [cljs.core.str("M"),cljs.core.str(d.join("L")),cljs.core.str("Z")].join('');
} else {
return null;
}
});})(svg,path,voronoi,points,map__31558,map__31558__$1,width,height,selector,n_polygon,color_scale))
,voronoi.call(null,d3.utils.js_GT_.call(null,points)));
var path__$1 = d3.utils._GT__GT_.call(null,path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d3.utils.js_GT_.call(null,paths_data)], null)], null));
d3.utils._GT__GT_.call(null,path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"path"], null),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),((function (svg,path,voronoi,points,paths_data,path__$1,map__31558,map__31558__$1,width,height,selector,n_polygon,color_scale){
return (function (p1__31552_SHARP_,p2__31551_SHARP_){
return color_scale.call(null,cljs.core.mod.call(null,p2__31551_SHARP_,(20)));
});})(svg,path,voronoi,points,paths_data,path__$1,map__31558,map__31558__$1,width,height,selector,n_polygon,color_scale))
,new cljs.core.Keyword(null,"stroke","stroke",1741823555),((function (svg,path,voronoi,points,paths_data,path__$1,map__31558,map__31558__$1,width,height,selector,n_polygon,color_scale){
return (function (p1__31554_SHARP_,p2__31553_SHARP_){
return color_scale.call(null,cljs.core.mod.call(null,p2__31553_SHARP_,(20)));
});})(svg,path,voronoi,points,paths_data,path__$1,map__31558,map__31558__$1,width,height,selector,n_polygon,color_scale))
], null)));

d3.utils._GT__GT_.call(null,path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d",cljs.core.str], null)], null));

return d3.utils._GT__GT_.call(null,path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit","exit",351849638)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414)], null));
});
d3.one.v2_dist = (function d3$one$v2_dist(p__31560,p__31561){
var vec__31564 = p__31560;
var x1 = cljs.core.nth.call(null,vec__31564,(0),null);
var y1 = cljs.core.nth.call(null,vec__31564,(1),null);
var vec__31565 = p__31561;
var x2 = cljs.core.nth.call(null,vec__31565,(0),null);
var y2 = cljs.core.nth.call(null,vec__31565,(1),null);
var dx = (x2 - x1);
var dy = (y2 - y1);
return Math.sqrt(((dx * dx) + (dy * dy)));
});
d3.one.voro2 = (function d3$one$voro2(p__31571){
var map__31574 = p__31571;
var map__31574__$1 = ((((!((map__31574 == null)))?((((map__31574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31574):map__31574);
var width = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var extra = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var selector = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var n_polygon = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword(null,"n-polygon","n-polygon",301039085));
var colors = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var svg = d3.utils._STAR__GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),selector], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"svg"], null),d3.utils.attrs.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)),d3.utils.translate.call(null,(- extra),(- extra)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"g"], null));
var voronoi = d3.geom.voronoi().clipExtent(d3.utils.js_GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- extra),(- extra)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width + extra),(height + extra)], null)], null)));
var rand_point = ((function (svg,voronoi,map__31574,map__31574__$1,width,height,extra,selector,n_polygon,colors){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int.call(null,(width + ((2) * extra))) - extra),(cljs.core.rand_int.call(null,(height + ((2) * extra))) - extra)], null);
});})(svg,voronoi,map__31574,map__31574__$1,width,height,extra,selector,n_polygon,colors))
;
var points = cljs.core.repeatedly.call(null,n_polygon,rand_point);
var data = cljs.core.mapv.call(null,d3.geom.polygon,voronoi.triangles(d3.utils.js_GT_.call(null,points)));
var dists = cljs.core.mapv.call(null,((function (svg,voronoi,rand_point,points,data,map__31574,map__31574__$1,width,height,extra,selector,n_polygon,colors){
return (function (points__$1){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.partial.call(null,d3.one.v2_dist,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width / (2)),(height / (2))], null)),points__$1));
});})(svg,voronoi,rand_point,points,data,map__31574,map__31574__$1,width,height,extra,selector,n_polygon,colors))
,data);
var cscale = d3.utils.scale.linear().domain(d3.utils.js_GT_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.min,dists),cljs.core.apply.call(null,cljs.core.max,dists)], null))).range(d3.utils.js_GT_.call(null,colors));
var colors__$1 = cljs.core.mapv.call(null,cscale,dists);
var path = d3.utils._GT__GT_.call(null,svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectAll","selectAll",869127842),"path"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d3.utils.js_GT_.call(null,cljs.core.mapv.call(null,d3.geom.polygon,voronoi.triangles(d3.utils.js_GT_.call(null,points))))], null)], null));
d3.utils._GT__GT_.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append","append",-291298229),"path"], null),d3.utils.styles.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),((function (svg,voronoi,rand_point,points,data,dists,cscale,colors__$1,path,map__31574,map__31574__$1,width,height,extra,selector,n_polygon,colors){
return (function (p1__31567_SHARP_,p2__31566_SHARP_){
return cljs.core.get.call(null,colors__$1,p2__31566_SHARP_);
});})(svg,voronoi,rand_point,points,data,dists,cscale,colors__$1,path,map__31574,map__31574__$1,width,height,extra,selector,n_polygon,colors))
,new cljs.core.Keyword(null,"stroke","stroke",1741823555),((function (svg,voronoi,rand_point,points,data,dists,cscale,colors__$1,path,map__31574,map__31574__$1,width,height,extra,selector,n_polygon,colors){
return (function (p1__31569_SHARP_,p2__31568_SHARP_){
return cljs.core.get.call(null,colors__$1,p2__31568_SHARP_);
});})(svg,voronoi,rand_point,points,data,dists,cscale,colors__$1,path,map__31574,map__31574__$1,width,height,extra,selector,n_polygon,colors))
], null)));

d3.utils._GT__GT_.call(null,path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["d",((function (svg,voronoi,rand_point,points,data,dists,cscale,colors__$1,path,map__31574,map__31574__$1,width,height,extra,selector,n_polygon,colors){
return (function (p1__31570_SHARP_){
return [cljs.core.str("M"),cljs.core.str(p1__31570_SHARP_.join("L")),cljs.core.str("Z")].join('');
});})(svg,voronoi,rand_point,points,data,dists,cscale,colors__$1,path,map__31574,map__31574__$1,width,height,extra,selector,n_polygon,colors))
], null)], null));

return d3.utils._GT__GT_.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit","exit",351849638)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414)], null));
});
d3.one.clear_svg_BANG_.call(null);

//# sourceMappingURL=one.js.map