// Compiled by ClojureScript 1.7.228 {}
goog.provide('plotter.core');
goog.require('cljs.core');
plotter.core.chain = (function plotter$core$chain(e){
return (function() {
var G__23749 = null;
var G__23749__1 = (function (k){
return (e[cljs.core.name.call(null,k)]);
});
var G__23749__2 = (function (k,d){
return (d[cljs.core.name.call(null,k)]).bind(d);
});
G__23749 = function(k,d){
switch(arguments.length){
case 1:
return G__23749__1.call(this,k);
case 2:
return G__23749__2.call(this,k,d);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23749.cljs$core$IFn$_invoke$arity$1 = G__23749__1;
G__23749.cljs$core$IFn$_invoke$arity$2 = G__23749__2;
return G__23749;
})()
});

/**
 * @interface
 */
plotter.core.IRealize = function(){};

plotter.core.realize = (function plotter$core$realize(this$){
if((!((this$ == null))) && (!((this$.plotter$core$IRealize$realize$arity$1 == null)))){
return this$.plotter$core$IRealize$realize$arity$1(this$);
} else {
var x__18813__auto__ = (((this$ == null))?null:this$);
var m__18814__auto__ = (plotter.core.realize[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,this$);
} else {
var m__18814__auto____$1 = (plotter.core.realize["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRealize.realize",this$);
}
}
}
});


/**
* @constructor
 * @implements {plotter.core.IRealize}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ILookup}
*/
plotter.core.Grapher = (function (obj,res){
this.obj = obj;
this.res = res;
this.cljs$lang$protocol_mask$partition0$ = 257;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
plotter.core.Grapher.prototype.plotter$core$IRealize$ = true;

plotter.core.Grapher.prototype.plotter$core$IRealize$realize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});

plotter.core.Grapher.prototype.call = (function() {
var G__23751 = null;
var G__23751__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new plotter.core.Grapher(self__.obj,self__.res.call(null)));
});
var G__23751__2 = (function (self__,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
if((self__.res == null)){
return null;
} else {
var m = ((cljs.core.vector_QMARK_.call(null,n))?cljs.core.apply.call(null,self__.res,cljs.core.map.call(null,cljs.core.clj__GT_js,n)):self__.res.call(null,cljs.core.clj__GT_js.call(null,n)));
return (new plotter.core.Grapher(self__.obj,m));
}
});
G__23751 = function(self__,n){
switch(arguments.length){
case 1:
return G__23751__1.call(this,self__);
case 2:
return G__23751__2.call(this,self__,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23751.cljs$core$IFn$_invoke$arity$1 = G__23751__1;
G__23751.cljs$core$IFn$_invoke$arity$2 = G__23751__2;
return G__23751;
})()
;

plotter.core.Grapher.prototype.apply = (function (self__,args23750){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args23750)));
});

plotter.core.Grapher.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (new plotter.core.Grapher(self__.obj,self__.res.call(null)));
});

plotter.core.Grapher.prototype.cljs$core$IFn$_invoke$arity$1 = (function (n){
var self__ = this;
var this$ = this;
if((self__.res == null)){
return null;
} else {
var m = ((cljs.core.vector_QMARK_.call(null,n))?cljs.core.apply.call(null,self__.res,cljs.core.map.call(null,cljs.core.clj__GT_js,n)):self__.res.call(null,cljs.core.clj__GT_js.call(null,n)));
return (new plotter.core.Grapher(self__.obj,m));
}
});

plotter.core.Grapher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,n,null);
});

plotter.core.Grapher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((self__.res == null)){
var o = plotter.core.chain.call(null,self__.obj);
return (new plotter.core.Grapher(o,o.call(null,n)));
} else {
return (new plotter.core.Grapher(self__.obj,self__.obj.call(null,n,self__.res)));
}
});

plotter.core.Grapher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"res","res",245523648,null)], null);
});

plotter.core.Grapher.cljs$lang$type = true;

plotter.core.Grapher.cljs$lang$ctorStr = "plotter.core/Grapher";

plotter.core.Grapher.cljs$lang$ctorPrWriter = (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"plotter.core/Grapher");
});

plotter.core.__GT_Grapher = (function plotter$core$__GT_Grapher(obj,res){
return (new plotter.core.Grapher(obj,res));
});

plotter.core.make_plotter = (function plotter$core$make_plotter(obj){
return (new plotter.core.Grapher(obj,null));
});
plotter.core.plot = (function plotter$core$plot(plotter__$1,p__23752){
var vec__23754 = p__23752;
var k = cljs.core.nth.call(null,vec__23754,(0),null);
var vs = cljs.core.nth.call(null,vec__23754,(1),null);
if((vs == null)){
return k.call(null,plotter__$1).call(null);
} else {
return k.call(null,plotter__$1).call(null,vs);
}
});
plotter.core.plot_ = (function plotter$core$plot_(plotter__$1,p__23755){
var vec__23757 = p__23755;
var k = cljs.core.nth.call(null,vec__23757,(0),null);
var vs = cljs.core.nth.call(null,vec__23757,(1),null);
if((vs == null)){
return plotter__$1.call(null,k).call(null);
} else {
return plotter__$1.call(null,k).call(null,vs);
}
});
plotter.core._EQ__GT_ = (function plotter$core$_EQ__GT_(plotter__$1,props){
return cljs.core.reduce.call(null,plotter.core.plot,plotter__$1,props);
});

//# sourceMappingURL=core.js.map