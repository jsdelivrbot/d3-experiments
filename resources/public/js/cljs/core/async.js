// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async20766 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20766 = (function (fn_handler,f,meta20767){
this.fn_handler = fn_handler;
this.f = f;
this.meta20767 = meta20767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20768,meta20767__$1){
var self__ = this;
var _20768__$1 = this;
return (new cljs.core.async.t_cljs$core$async20766(self__.fn_handler,self__.f,meta20767__$1));
});

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20768){
var self__ = this;
var _20768__$1 = this;
return self__.meta20767;
});

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta20767","meta20767",378789664,null)], null);
});

cljs.core.async.t_cljs$core$async20766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20766";

cljs.core.async.t_cljs$core$async20766.cljs$lang$ctorPrWriter = (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"cljs.core.async/t_cljs$core$async20766");
});

cljs.core.async.__GT_t_cljs$core$async20766 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async20766(fn_handler__$1,f__$1,meta20767){
return (new cljs.core.async.t_cljs$core$async20766(fn_handler__$1,f__$1,meta20767));
});

}

return (new cljs.core.async.t_cljs$core$async20766(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20771 = [];
var len__19216__auto___20774 = arguments.length;
var i__19217__auto___20775 = (0);
while(true){
if((i__19217__auto___20775 < len__19216__auto___20774)){
args20771.push((arguments[i__19217__auto___20775]));

var G__20776 = (i__19217__auto___20775 + (1));
i__19217__auto___20775 = G__20776;
continue;
} else {
}
break;
}

var G__20773 = args20771.length;
switch (G__20773) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20771.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20778 = [];
var len__19216__auto___20781 = arguments.length;
var i__19217__auto___20782 = (0);
while(true){
if((i__19217__auto___20782 < len__19216__auto___20781)){
args20778.push((arguments[i__19217__auto___20782]));

var G__20783 = (i__19217__auto___20782 + (1));
i__19217__auto___20782 = G__20783;
continue;
} else {
}
break;
}

var G__20780 = args20778.length;
switch (G__20780) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20778.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20785 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20785);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20785,ret){
return (function (){
return fn1.call(null,val_20785);
});})(val_20785,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20786 = [];
var len__19216__auto___20789 = arguments.length;
var i__19217__auto___20790 = (0);
while(true){
if((i__19217__auto___20790 < len__19216__auto___20789)){
args20786.push((arguments[i__19217__auto___20790]));

var G__20791 = (i__19217__auto___20790 + (1));
i__19217__auto___20790 = G__20791;
continue;
} else {
}
break;
}

var G__20788 = args20786.length;
switch (G__20788) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20786.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19061__auto___20793 = n;
var x_20794 = (0);
while(true){
if((x_20794 < n__19061__auto___20793)){
(a[x_20794] = (0));

var G__20795 = (x_20794 + (1));
x_20794 = G__20795;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20796 = (i + (1));
i = G__20796;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20800 = (function (alt_flag,flag,meta20801){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20801 = meta20801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20802,meta20801__$1){
var self__ = this;
var _20802__$1 = this;
return (new cljs.core.async.t_cljs$core$async20800(self__.alt_flag,self__.flag,meta20801__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20802){
var self__ = this;
var _20802__$1 = this;
return self__.meta20801;
});})(flag))
;

cljs.core.async.t_cljs$core$async20800.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20800.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20801","meta20801",-633698252,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20800";

cljs.core.async.t_cljs$core$async20800.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"cljs.core.async/t_cljs$core$async20800");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20800 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20800(alt_flag__$1,flag__$1,meta20801){
return (new cljs.core.async.t_cljs$core$async20800(alt_flag__$1,flag__$1,meta20801));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20800(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20806 = (function (alt_handler,flag,cb,meta20807){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20807 = meta20807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20808,meta20807__$1){
var self__ = this;
var _20808__$1 = this;
return (new cljs.core.async.t_cljs$core$async20806(self__.alt_handler,self__.flag,self__.cb,meta20807__$1));
});

cljs.core.async.t_cljs$core$async20806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20808){
var self__ = this;
var _20808__$1 = this;
return self__.meta20807;
});

cljs.core.async.t_cljs$core$async20806.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20807","meta20807",1150901440,null)], null);
});

cljs.core.async.t_cljs$core$async20806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20806";

cljs.core.async.t_cljs$core$async20806.cljs$lang$ctorPrWriter = (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"cljs.core.async/t_cljs$core$async20806");
});

cljs.core.async.__GT_t_cljs$core$async20806 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20806(alt_handler__$1,flag__$1,cb__$1,meta20807){
return (new cljs.core.async.t_cljs$core$async20806(alt_handler__$1,flag__$1,cb__$1,meta20807));
});

}

return (new cljs.core.async.t_cljs$core$async20806(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20809_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20809_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20810_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20810_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18158__auto__ = wport;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20811 = (i + (1));
i = G__20811;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18158__auto__ = ret;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18146__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18146__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18146__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19223__auto__ = [];
var len__19216__auto___20817 = arguments.length;
var i__19217__auto___20818 = (0);
while(true){
if((i__19217__auto___20818 < len__19216__auto___20817)){
args__19223__auto__.push((arguments[i__19217__auto___20818]));

var G__20819 = (i__19217__auto___20818 + (1));
i__19217__auto___20818 = G__20819;
continue;
} else {
}
break;
}

var argseq__19224__auto__ = ((((1) < args__19223__auto__.length))?(new cljs.core.IndexedSeq(args__19223__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19224__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20814){
var map__20815 = p__20814;
var map__20815__$1 = ((((!((map__20815 == null)))?((((map__20815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20815):map__20815);
var opts = map__20815__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20812){
var G__20813 = cljs.core.first.call(null,seq20812);
var seq20812__$1 = cljs.core.next.call(null,seq20812);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20813,seq20812__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20820 = [];
var len__19216__auto___20870 = arguments.length;
var i__19217__auto___20871 = (0);
while(true){
if((i__19217__auto___20871 < len__19216__auto___20870)){
args20820.push((arguments[i__19217__auto___20871]));

var G__20872 = (i__19217__auto___20871 + (1));
i__19217__auto___20871 = G__20872;
continue;
} else {
}
break;
}

var G__20822 = args20820.length;
switch (G__20822) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20820.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20718__auto___20874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___20874){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___20874){
return (function (state_20846){
var state_val_20847 = (state_20846[(1)]);
if((state_val_20847 === (7))){
var inst_20842 = (state_20846[(2)]);
var state_20846__$1 = state_20846;
var statearr_20848_20875 = state_20846__$1;
(statearr_20848_20875[(2)] = inst_20842);

(statearr_20848_20875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (1))){
var state_20846__$1 = state_20846;
var statearr_20849_20876 = state_20846__$1;
(statearr_20849_20876[(2)] = null);

(statearr_20849_20876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (4))){
var inst_20825 = (state_20846[(7)]);
var inst_20825__$1 = (state_20846[(2)]);
var inst_20826 = (inst_20825__$1 == null);
var state_20846__$1 = (function (){var statearr_20850 = state_20846;
(statearr_20850[(7)] = inst_20825__$1);

return statearr_20850;
})();
if(cljs.core.truth_(inst_20826)){
var statearr_20851_20877 = state_20846__$1;
(statearr_20851_20877[(1)] = (5));

} else {
var statearr_20852_20878 = state_20846__$1;
(statearr_20852_20878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (13))){
var state_20846__$1 = state_20846;
var statearr_20853_20879 = state_20846__$1;
(statearr_20853_20879[(2)] = null);

(statearr_20853_20879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (6))){
var inst_20825 = (state_20846[(7)]);
var state_20846__$1 = state_20846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20846__$1,(11),to,inst_20825);
} else {
if((state_val_20847 === (3))){
var inst_20844 = (state_20846[(2)]);
var state_20846__$1 = state_20846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20846__$1,inst_20844);
} else {
if((state_val_20847 === (12))){
var state_20846__$1 = state_20846;
var statearr_20854_20880 = state_20846__$1;
(statearr_20854_20880[(2)] = null);

(statearr_20854_20880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (2))){
var state_20846__$1 = state_20846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20846__$1,(4),from);
} else {
if((state_val_20847 === (11))){
var inst_20835 = (state_20846[(2)]);
var state_20846__$1 = state_20846;
if(cljs.core.truth_(inst_20835)){
var statearr_20855_20881 = state_20846__$1;
(statearr_20855_20881[(1)] = (12));

} else {
var statearr_20856_20882 = state_20846__$1;
(statearr_20856_20882[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (9))){
var state_20846__$1 = state_20846;
var statearr_20857_20883 = state_20846__$1;
(statearr_20857_20883[(2)] = null);

(statearr_20857_20883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (5))){
var state_20846__$1 = state_20846;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20858_20884 = state_20846__$1;
(statearr_20858_20884[(1)] = (8));

} else {
var statearr_20859_20885 = state_20846__$1;
(statearr_20859_20885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (14))){
var inst_20840 = (state_20846[(2)]);
var state_20846__$1 = state_20846;
var statearr_20860_20886 = state_20846__$1;
(statearr_20860_20886[(2)] = inst_20840);

(statearr_20860_20886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (10))){
var inst_20832 = (state_20846[(2)]);
var state_20846__$1 = state_20846;
var statearr_20861_20887 = state_20846__$1;
(statearr_20861_20887[(2)] = inst_20832);

(statearr_20861_20887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (8))){
var inst_20829 = cljs.core.async.close_BANG_.call(null,to);
var state_20846__$1 = state_20846;
var statearr_20862_20888 = state_20846__$1;
(statearr_20862_20888[(2)] = inst_20829);

(statearr_20862_20888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___20874))
;
return ((function (switch__20606__auto__,c__20718__auto___20874){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_20866 = [null,null,null,null,null,null,null,null];
(statearr_20866[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_20866[(1)] = (1));

return statearr_20866;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_20846){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_20846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e20867){if((e20867 instanceof Object)){
var ex__20610__auto__ = e20867;
var statearr_20868_20889 = state_20846;
(statearr_20868_20889[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20890 = state_20846;
state_20846 = G__20890;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_20846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_20846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___20874))
})();
var state__20720__auto__ = (function (){var statearr_20869 = f__20719__auto__.call(null);
(statearr_20869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___20874);

return statearr_20869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___20874))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21074){
var vec__21075 = p__21074;
var v = cljs.core.nth.call(null,vec__21075,(0),null);
var p = cljs.core.nth.call(null,vec__21075,(1),null);
var job = vec__21075;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20718__auto___21257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___21257,res,vec__21075,v,p,job,jobs,results){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___21257,res,vec__21075,v,p,job,jobs,results){
return (function (state_21080){
var state_val_21081 = (state_21080[(1)]);
if((state_val_21081 === (1))){
var state_21080__$1 = state_21080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21080__$1,(2),res,v);
} else {
if((state_val_21081 === (2))){
var inst_21077 = (state_21080[(2)]);
var inst_21078 = cljs.core.async.close_BANG_.call(null,res);
var state_21080__$1 = (function (){var statearr_21082 = state_21080;
(statearr_21082[(7)] = inst_21077);

return statearr_21082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21080__$1,inst_21078);
} else {
return null;
}
}
});})(c__20718__auto___21257,res,vec__21075,v,p,job,jobs,results))
;
return ((function (switch__20606__auto__,c__20718__auto___21257,res,vec__21075,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0 = (function (){
var statearr_21086 = [null,null,null,null,null,null,null,null];
(statearr_21086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__);

(statearr_21086[(1)] = (1));

return statearr_21086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1 = (function (state_21080){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_21080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e21087){if((e21087 instanceof Object)){
var ex__20610__auto__ = e21087;
var statearr_21088_21258 = state_21080;
(statearr_21088_21258[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21259 = state_21080;
state_21080 = G__21259;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__ = function(state_21080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1.call(this,state_21080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___21257,res,vec__21075,v,p,job,jobs,results))
})();
var state__20720__auto__ = (function (){var statearr_21089 = f__20719__auto__.call(null);
(statearr_21089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___21257);

return statearr_21089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___21257,res,vec__21075,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21090){
var vec__21091 = p__21090;
var v = cljs.core.nth.call(null,vec__21091,(0),null);
var p = cljs.core.nth.call(null,vec__21091,(1),null);
var job = vec__21091;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19061__auto___21260 = n;
var __21261 = (0);
while(true){
if((__21261 < n__19061__auto___21260)){
var G__21092_21262 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21092_21262) {
case "compute":
var c__20718__auto___21264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21261,c__20718__auto___21264,G__21092_21262,n__19061__auto___21260,jobs,results,process,async){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (__21261,c__20718__auto___21264,G__21092_21262,n__19061__auto___21260,jobs,results,process,async){
return (function (state_21105){
var state_val_21106 = (state_21105[(1)]);
if((state_val_21106 === (1))){
var state_21105__$1 = state_21105;
var statearr_21107_21265 = state_21105__$1;
(statearr_21107_21265[(2)] = null);

(statearr_21107_21265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21106 === (2))){
var state_21105__$1 = state_21105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21105__$1,(4),jobs);
} else {
if((state_val_21106 === (3))){
var inst_21103 = (state_21105[(2)]);
var state_21105__$1 = state_21105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21105__$1,inst_21103);
} else {
if((state_val_21106 === (4))){
var inst_21095 = (state_21105[(2)]);
var inst_21096 = process.call(null,inst_21095);
var state_21105__$1 = state_21105;
if(cljs.core.truth_(inst_21096)){
var statearr_21108_21266 = state_21105__$1;
(statearr_21108_21266[(1)] = (5));

} else {
var statearr_21109_21267 = state_21105__$1;
(statearr_21109_21267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21106 === (5))){
var state_21105__$1 = state_21105;
var statearr_21110_21268 = state_21105__$1;
(statearr_21110_21268[(2)] = null);

(statearr_21110_21268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21106 === (6))){
var state_21105__$1 = state_21105;
var statearr_21111_21269 = state_21105__$1;
(statearr_21111_21269[(2)] = null);

(statearr_21111_21269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21106 === (7))){
var inst_21101 = (state_21105[(2)]);
var state_21105__$1 = state_21105;
var statearr_21112_21270 = state_21105__$1;
(statearr_21112_21270[(2)] = inst_21101);

(statearr_21112_21270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21261,c__20718__auto___21264,G__21092_21262,n__19061__auto___21260,jobs,results,process,async))
;
return ((function (__21261,switch__20606__auto__,c__20718__auto___21264,G__21092_21262,n__19061__auto___21260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0 = (function (){
var statearr_21116 = [null,null,null,null,null,null,null];
(statearr_21116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__);

(statearr_21116[(1)] = (1));

return statearr_21116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1 = (function (state_21105){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_21105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e21117){if((e21117 instanceof Object)){
var ex__20610__auto__ = e21117;
var statearr_21118_21271 = state_21105;
(statearr_21118_21271[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21272 = state_21105;
state_21105 = G__21272;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__ = function(state_21105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1.call(this,state_21105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__;
})()
;})(__21261,switch__20606__auto__,c__20718__auto___21264,G__21092_21262,n__19061__auto___21260,jobs,results,process,async))
})();
var state__20720__auto__ = (function (){var statearr_21119 = f__20719__auto__.call(null);
(statearr_21119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___21264);

return statearr_21119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(__21261,c__20718__auto___21264,G__21092_21262,n__19061__auto___21260,jobs,results,process,async))
);


break;
case "async":
var c__20718__auto___21273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21261,c__20718__auto___21273,G__21092_21262,n__19061__auto___21260,jobs,results,process,async){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (__21261,c__20718__auto___21273,G__21092_21262,n__19061__auto___21260,jobs,results,process,async){
return (function (state_21132){
var state_val_21133 = (state_21132[(1)]);
if((state_val_21133 === (1))){
var state_21132__$1 = state_21132;
var statearr_21134_21274 = state_21132__$1;
(statearr_21134_21274[(2)] = null);

(statearr_21134_21274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (2))){
var state_21132__$1 = state_21132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21132__$1,(4),jobs);
} else {
if((state_val_21133 === (3))){
var inst_21130 = (state_21132[(2)]);
var state_21132__$1 = state_21132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21132__$1,inst_21130);
} else {
if((state_val_21133 === (4))){
var inst_21122 = (state_21132[(2)]);
var inst_21123 = async.call(null,inst_21122);
var state_21132__$1 = state_21132;
if(cljs.core.truth_(inst_21123)){
var statearr_21135_21275 = state_21132__$1;
(statearr_21135_21275[(1)] = (5));

} else {
var statearr_21136_21276 = state_21132__$1;
(statearr_21136_21276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (5))){
var state_21132__$1 = state_21132;
var statearr_21137_21277 = state_21132__$1;
(statearr_21137_21277[(2)] = null);

(statearr_21137_21277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (6))){
var state_21132__$1 = state_21132;
var statearr_21138_21278 = state_21132__$1;
(statearr_21138_21278[(2)] = null);

(statearr_21138_21278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (7))){
var inst_21128 = (state_21132[(2)]);
var state_21132__$1 = state_21132;
var statearr_21139_21279 = state_21132__$1;
(statearr_21139_21279[(2)] = inst_21128);

(statearr_21139_21279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21261,c__20718__auto___21273,G__21092_21262,n__19061__auto___21260,jobs,results,process,async))
;
return ((function (__21261,switch__20606__auto__,c__20718__auto___21273,G__21092_21262,n__19061__auto___21260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0 = (function (){
var statearr_21143 = [null,null,null,null,null,null,null];
(statearr_21143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__);

(statearr_21143[(1)] = (1));

return statearr_21143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1 = (function (state_21132){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_21132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e21144){if((e21144 instanceof Object)){
var ex__20610__auto__ = e21144;
var statearr_21145_21280 = state_21132;
(statearr_21145_21280[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21281 = state_21132;
state_21132 = G__21281;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__ = function(state_21132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1.call(this,state_21132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__;
})()
;})(__21261,switch__20606__auto__,c__20718__auto___21273,G__21092_21262,n__19061__auto___21260,jobs,results,process,async))
})();
var state__20720__auto__ = (function (){var statearr_21146 = f__20719__auto__.call(null);
(statearr_21146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___21273);

return statearr_21146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(__21261,c__20718__auto___21273,G__21092_21262,n__19061__auto___21260,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21282 = (__21261 + (1));
__21261 = G__21282;
continue;
} else {
}
break;
}

var c__20718__auto___21283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___21283,jobs,results,process,async){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___21283,jobs,results,process,async){
return (function (state_21168){
var state_val_21169 = (state_21168[(1)]);
if((state_val_21169 === (1))){
var state_21168__$1 = state_21168;
var statearr_21170_21284 = state_21168__$1;
(statearr_21170_21284[(2)] = null);

(statearr_21170_21284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21169 === (2))){
var state_21168__$1 = state_21168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21168__$1,(4),from);
} else {
if((state_val_21169 === (3))){
var inst_21166 = (state_21168[(2)]);
var state_21168__$1 = state_21168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21168__$1,inst_21166);
} else {
if((state_val_21169 === (4))){
var inst_21149 = (state_21168[(7)]);
var inst_21149__$1 = (state_21168[(2)]);
var inst_21150 = (inst_21149__$1 == null);
var state_21168__$1 = (function (){var statearr_21171 = state_21168;
(statearr_21171[(7)] = inst_21149__$1);

return statearr_21171;
})();
if(cljs.core.truth_(inst_21150)){
var statearr_21172_21285 = state_21168__$1;
(statearr_21172_21285[(1)] = (5));

} else {
var statearr_21173_21286 = state_21168__$1;
(statearr_21173_21286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21169 === (5))){
var inst_21152 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21168__$1 = state_21168;
var statearr_21174_21287 = state_21168__$1;
(statearr_21174_21287[(2)] = inst_21152);

(statearr_21174_21287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21169 === (6))){
var inst_21149 = (state_21168[(7)]);
var inst_21154 = (state_21168[(8)]);
var inst_21154__$1 = cljs.core.async.chan.call(null,(1));
var inst_21155 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21156 = [inst_21149,inst_21154__$1];
var inst_21157 = (new cljs.core.PersistentVector(null,2,(5),inst_21155,inst_21156,null));
var state_21168__$1 = (function (){var statearr_21175 = state_21168;
(statearr_21175[(8)] = inst_21154__$1);

return statearr_21175;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21168__$1,(8),jobs,inst_21157);
} else {
if((state_val_21169 === (7))){
var inst_21164 = (state_21168[(2)]);
var state_21168__$1 = state_21168;
var statearr_21176_21288 = state_21168__$1;
(statearr_21176_21288[(2)] = inst_21164);

(statearr_21176_21288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21169 === (8))){
var inst_21154 = (state_21168[(8)]);
var inst_21159 = (state_21168[(2)]);
var state_21168__$1 = (function (){var statearr_21177 = state_21168;
(statearr_21177[(9)] = inst_21159);

return statearr_21177;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21168__$1,(9),results,inst_21154);
} else {
if((state_val_21169 === (9))){
var inst_21161 = (state_21168[(2)]);
var state_21168__$1 = (function (){var statearr_21178 = state_21168;
(statearr_21178[(10)] = inst_21161);

return statearr_21178;
})();
var statearr_21179_21289 = state_21168__$1;
(statearr_21179_21289[(2)] = null);

(statearr_21179_21289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___21283,jobs,results,process,async))
;
return ((function (switch__20606__auto__,c__20718__auto___21283,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0 = (function (){
var statearr_21183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__);

(statearr_21183[(1)] = (1));

return statearr_21183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1 = (function (state_21168){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_21168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e21184){if((e21184 instanceof Object)){
var ex__20610__auto__ = e21184;
var statearr_21185_21290 = state_21168;
(statearr_21185_21290[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21291 = state_21168;
state_21168 = G__21291;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__ = function(state_21168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1.call(this,state_21168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___21283,jobs,results,process,async))
})();
var state__20720__auto__ = (function (){var statearr_21186 = f__20719__auto__.call(null);
(statearr_21186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___21283);

return statearr_21186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___21283,jobs,results,process,async))
);


var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__,jobs,results,process,async){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__,jobs,results,process,async){
return (function (state_21224){
var state_val_21225 = (state_21224[(1)]);
if((state_val_21225 === (7))){
var inst_21220 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
var statearr_21226_21292 = state_21224__$1;
(statearr_21226_21292[(2)] = inst_21220);

(statearr_21226_21292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (20))){
var state_21224__$1 = state_21224;
var statearr_21227_21293 = state_21224__$1;
(statearr_21227_21293[(2)] = null);

(statearr_21227_21293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (1))){
var state_21224__$1 = state_21224;
var statearr_21228_21294 = state_21224__$1;
(statearr_21228_21294[(2)] = null);

(statearr_21228_21294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (4))){
var inst_21189 = (state_21224[(7)]);
var inst_21189__$1 = (state_21224[(2)]);
var inst_21190 = (inst_21189__$1 == null);
var state_21224__$1 = (function (){var statearr_21229 = state_21224;
(statearr_21229[(7)] = inst_21189__$1);

return statearr_21229;
})();
if(cljs.core.truth_(inst_21190)){
var statearr_21230_21295 = state_21224__$1;
(statearr_21230_21295[(1)] = (5));

} else {
var statearr_21231_21296 = state_21224__$1;
(statearr_21231_21296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (15))){
var inst_21202 = (state_21224[(8)]);
var state_21224__$1 = state_21224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21224__$1,(18),to,inst_21202);
} else {
if((state_val_21225 === (21))){
var inst_21215 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
var statearr_21232_21297 = state_21224__$1;
(statearr_21232_21297[(2)] = inst_21215);

(statearr_21232_21297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (13))){
var inst_21217 = (state_21224[(2)]);
var state_21224__$1 = (function (){var statearr_21233 = state_21224;
(statearr_21233[(9)] = inst_21217);

return statearr_21233;
})();
var statearr_21234_21298 = state_21224__$1;
(statearr_21234_21298[(2)] = null);

(statearr_21234_21298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (6))){
var inst_21189 = (state_21224[(7)]);
var state_21224__$1 = state_21224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21224__$1,(11),inst_21189);
} else {
if((state_val_21225 === (17))){
var inst_21210 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
if(cljs.core.truth_(inst_21210)){
var statearr_21235_21299 = state_21224__$1;
(statearr_21235_21299[(1)] = (19));

} else {
var statearr_21236_21300 = state_21224__$1;
(statearr_21236_21300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (3))){
var inst_21222 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21224__$1,inst_21222);
} else {
if((state_val_21225 === (12))){
var inst_21199 = (state_21224[(10)]);
var state_21224__$1 = state_21224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21224__$1,(14),inst_21199);
} else {
if((state_val_21225 === (2))){
var state_21224__$1 = state_21224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21224__$1,(4),results);
} else {
if((state_val_21225 === (19))){
var state_21224__$1 = state_21224;
var statearr_21237_21301 = state_21224__$1;
(statearr_21237_21301[(2)] = null);

(statearr_21237_21301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (11))){
var inst_21199 = (state_21224[(2)]);
var state_21224__$1 = (function (){var statearr_21238 = state_21224;
(statearr_21238[(10)] = inst_21199);

return statearr_21238;
})();
var statearr_21239_21302 = state_21224__$1;
(statearr_21239_21302[(2)] = null);

(statearr_21239_21302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (9))){
var state_21224__$1 = state_21224;
var statearr_21240_21303 = state_21224__$1;
(statearr_21240_21303[(2)] = null);

(statearr_21240_21303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (5))){
var state_21224__$1 = state_21224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21241_21304 = state_21224__$1;
(statearr_21241_21304[(1)] = (8));

} else {
var statearr_21242_21305 = state_21224__$1;
(statearr_21242_21305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (14))){
var inst_21202 = (state_21224[(8)]);
var inst_21204 = (state_21224[(11)]);
var inst_21202__$1 = (state_21224[(2)]);
var inst_21203 = (inst_21202__$1 == null);
var inst_21204__$1 = cljs.core.not.call(null,inst_21203);
var state_21224__$1 = (function (){var statearr_21243 = state_21224;
(statearr_21243[(8)] = inst_21202__$1);

(statearr_21243[(11)] = inst_21204__$1);

return statearr_21243;
})();
if(inst_21204__$1){
var statearr_21244_21306 = state_21224__$1;
(statearr_21244_21306[(1)] = (15));

} else {
var statearr_21245_21307 = state_21224__$1;
(statearr_21245_21307[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (16))){
var inst_21204 = (state_21224[(11)]);
var state_21224__$1 = state_21224;
var statearr_21246_21308 = state_21224__$1;
(statearr_21246_21308[(2)] = inst_21204);

(statearr_21246_21308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (10))){
var inst_21196 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
var statearr_21247_21309 = state_21224__$1;
(statearr_21247_21309[(2)] = inst_21196);

(statearr_21247_21309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (18))){
var inst_21207 = (state_21224[(2)]);
var state_21224__$1 = state_21224;
var statearr_21248_21310 = state_21224__$1;
(statearr_21248_21310[(2)] = inst_21207);

(statearr_21248_21310[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21225 === (8))){
var inst_21193 = cljs.core.async.close_BANG_.call(null,to);
var state_21224__$1 = state_21224;
var statearr_21249_21311 = state_21224__$1;
(statearr_21249_21311[(2)] = inst_21193);

(statearr_21249_21311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto__,jobs,results,process,async))
;
return ((function (switch__20606__auto__,c__20718__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0 = (function (){
var statearr_21253 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__);

(statearr_21253[(1)] = (1));

return statearr_21253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1 = (function (state_21224){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_21224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e21254){if((e21254 instanceof Object)){
var ex__20610__auto__ = e21254;
var statearr_21255_21312 = state_21224;
(statearr_21255_21312[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21313 = state_21224;
state_21224 = G__21313;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__ = function(state_21224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1.call(this,state_21224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20607__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__,jobs,results,process,async))
})();
var state__20720__auto__ = (function (){var statearr_21256 = f__20719__auto__.call(null);
(statearr_21256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_21256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__,jobs,results,process,async))
);

return c__20718__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21314 = [];
var len__19216__auto___21317 = arguments.length;
var i__19217__auto___21318 = (0);
while(true){
if((i__19217__auto___21318 < len__19216__auto___21317)){
args21314.push((arguments[i__19217__auto___21318]));

var G__21319 = (i__19217__auto___21318 + (1));
i__19217__auto___21318 = G__21319;
continue;
} else {
}
break;
}

var G__21316 = args21314.length;
switch (G__21316) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21314.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21321 = [];
var len__19216__auto___21324 = arguments.length;
var i__19217__auto___21325 = (0);
while(true){
if((i__19217__auto___21325 < len__19216__auto___21324)){
args21321.push((arguments[i__19217__auto___21325]));

var G__21326 = (i__19217__auto___21325 + (1));
i__19217__auto___21325 = G__21326;
continue;
} else {
}
break;
}

var G__21323 = args21321.length;
switch (G__21323) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21321.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21328 = [];
var len__19216__auto___21381 = arguments.length;
var i__19217__auto___21382 = (0);
while(true){
if((i__19217__auto___21382 < len__19216__auto___21381)){
args21328.push((arguments[i__19217__auto___21382]));

var G__21383 = (i__19217__auto___21382 + (1));
i__19217__auto___21382 = G__21383;
continue;
} else {
}
break;
}

var G__21330 = args21328.length;
switch (G__21330) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21328.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20718__auto___21385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___21385,tc,fc){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___21385,tc,fc){
return (function (state_21356){
var state_val_21357 = (state_21356[(1)]);
if((state_val_21357 === (7))){
var inst_21352 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
var statearr_21358_21386 = state_21356__$1;
(statearr_21358_21386[(2)] = inst_21352);

(statearr_21358_21386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (1))){
var state_21356__$1 = state_21356;
var statearr_21359_21387 = state_21356__$1;
(statearr_21359_21387[(2)] = null);

(statearr_21359_21387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (4))){
var inst_21333 = (state_21356[(7)]);
var inst_21333__$1 = (state_21356[(2)]);
var inst_21334 = (inst_21333__$1 == null);
var state_21356__$1 = (function (){var statearr_21360 = state_21356;
(statearr_21360[(7)] = inst_21333__$1);

return statearr_21360;
})();
if(cljs.core.truth_(inst_21334)){
var statearr_21361_21388 = state_21356__$1;
(statearr_21361_21388[(1)] = (5));

} else {
var statearr_21362_21389 = state_21356__$1;
(statearr_21362_21389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (13))){
var state_21356__$1 = state_21356;
var statearr_21363_21390 = state_21356__$1;
(statearr_21363_21390[(2)] = null);

(statearr_21363_21390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (6))){
var inst_21333 = (state_21356[(7)]);
var inst_21339 = p.call(null,inst_21333);
var state_21356__$1 = state_21356;
if(cljs.core.truth_(inst_21339)){
var statearr_21364_21391 = state_21356__$1;
(statearr_21364_21391[(1)] = (9));

} else {
var statearr_21365_21392 = state_21356__$1;
(statearr_21365_21392[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (3))){
var inst_21354 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21356__$1,inst_21354);
} else {
if((state_val_21357 === (12))){
var state_21356__$1 = state_21356;
var statearr_21366_21393 = state_21356__$1;
(statearr_21366_21393[(2)] = null);

(statearr_21366_21393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (2))){
var state_21356__$1 = state_21356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21356__$1,(4),ch);
} else {
if((state_val_21357 === (11))){
var inst_21333 = (state_21356[(7)]);
var inst_21343 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21356__$1,(8),inst_21343,inst_21333);
} else {
if((state_val_21357 === (9))){
var state_21356__$1 = state_21356;
var statearr_21367_21394 = state_21356__$1;
(statearr_21367_21394[(2)] = tc);

(statearr_21367_21394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (5))){
var inst_21336 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21337 = cljs.core.async.close_BANG_.call(null,fc);
var state_21356__$1 = (function (){var statearr_21368 = state_21356;
(statearr_21368[(8)] = inst_21336);

return statearr_21368;
})();
var statearr_21369_21395 = state_21356__$1;
(statearr_21369_21395[(2)] = inst_21337);

(statearr_21369_21395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (14))){
var inst_21350 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
var statearr_21370_21396 = state_21356__$1;
(statearr_21370_21396[(2)] = inst_21350);

(statearr_21370_21396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (10))){
var state_21356__$1 = state_21356;
var statearr_21371_21397 = state_21356__$1;
(statearr_21371_21397[(2)] = fc);

(statearr_21371_21397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (8))){
var inst_21345 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
if(cljs.core.truth_(inst_21345)){
var statearr_21372_21398 = state_21356__$1;
(statearr_21372_21398[(1)] = (12));

} else {
var statearr_21373_21399 = state_21356__$1;
(statearr_21373_21399[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___21385,tc,fc))
;
return ((function (switch__20606__auto__,c__20718__auto___21385,tc,fc){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_21377 = [null,null,null,null,null,null,null,null,null];
(statearr_21377[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_21377[(1)] = (1));

return statearr_21377;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_21356){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_21356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e21378){if((e21378 instanceof Object)){
var ex__20610__auto__ = e21378;
var statearr_21379_21400 = state_21356;
(statearr_21379_21400[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21401 = state_21356;
state_21356 = G__21401;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_21356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_21356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___21385,tc,fc))
})();
var state__20720__auto__ = (function (){var statearr_21380 = f__20719__auto__.call(null);
(statearr_21380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___21385);

return statearr_21380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___21385,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__){
return (function (state_21448){
var state_val_21449 = (state_21448[(1)]);
if((state_val_21449 === (1))){
var inst_21434 = init;
var state_21448__$1 = (function (){var statearr_21450 = state_21448;
(statearr_21450[(7)] = inst_21434);

return statearr_21450;
})();
var statearr_21451_21466 = state_21448__$1;
(statearr_21451_21466[(2)] = null);

(statearr_21451_21466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21449 === (2))){
var state_21448__$1 = state_21448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21448__$1,(4),ch);
} else {
if((state_val_21449 === (3))){
var inst_21446 = (state_21448[(2)]);
var state_21448__$1 = state_21448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21448__$1,inst_21446);
} else {
if((state_val_21449 === (4))){
var inst_21437 = (state_21448[(8)]);
var inst_21437__$1 = (state_21448[(2)]);
var inst_21438 = (inst_21437__$1 == null);
var state_21448__$1 = (function (){var statearr_21452 = state_21448;
(statearr_21452[(8)] = inst_21437__$1);

return statearr_21452;
})();
if(cljs.core.truth_(inst_21438)){
var statearr_21453_21467 = state_21448__$1;
(statearr_21453_21467[(1)] = (5));

} else {
var statearr_21454_21468 = state_21448__$1;
(statearr_21454_21468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21449 === (5))){
var inst_21434 = (state_21448[(7)]);
var state_21448__$1 = state_21448;
var statearr_21455_21469 = state_21448__$1;
(statearr_21455_21469[(2)] = inst_21434);

(statearr_21455_21469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21449 === (6))){
var inst_21434 = (state_21448[(7)]);
var inst_21437 = (state_21448[(8)]);
var inst_21441 = f.call(null,inst_21434,inst_21437);
var inst_21434__$1 = inst_21441;
var state_21448__$1 = (function (){var statearr_21456 = state_21448;
(statearr_21456[(7)] = inst_21434__$1);

return statearr_21456;
})();
var statearr_21457_21470 = state_21448__$1;
(statearr_21457_21470[(2)] = null);

(statearr_21457_21470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21449 === (7))){
var inst_21444 = (state_21448[(2)]);
var state_21448__$1 = state_21448;
var statearr_21458_21471 = state_21448__$1;
(statearr_21458_21471[(2)] = inst_21444);

(statearr_21458_21471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20718__auto__))
;
return ((function (switch__20606__auto__,c__20718__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20607__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20607__auto____0 = (function (){
var statearr_21462 = [null,null,null,null,null,null,null,null,null];
(statearr_21462[(0)] = cljs$core$async$reduce_$_state_machine__20607__auto__);

(statearr_21462[(1)] = (1));

return statearr_21462;
});
var cljs$core$async$reduce_$_state_machine__20607__auto____1 = (function (state_21448){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_21448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e21463){if((e21463 instanceof Object)){
var ex__20610__auto__ = e21463;
var statearr_21464_21472 = state_21448;
(statearr_21464_21472[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21473 = state_21448;
state_21448 = G__21473;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20607__auto__ = function(state_21448){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20607__auto____1.call(this,state_21448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20607__auto____0;
cljs$core$async$reduce_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20607__auto____1;
return cljs$core$async$reduce_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__))
})();
var state__20720__auto__ = (function (){var statearr_21465 = f__20719__auto__.call(null);
(statearr_21465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_21465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__))
);

return c__20718__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21474 = [];
var len__19216__auto___21526 = arguments.length;
var i__19217__auto___21527 = (0);
while(true){
if((i__19217__auto___21527 < len__19216__auto___21526)){
args21474.push((arguments[i__19217__auto___21527]));

var G__21528 = (i__19217__auto___21527 + (1));
i__19217__auto___21527 = G__21528;
continue;
} else {
}
break;
}

var G__21476 = args21474.length;
switch (G__21476) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21474.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__){
return (function (state_21501){
var state_val_21502 = (state_21501[(1)]);
if((state_val_21502 === (7))){
var inst_21483 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21503_21530 = state_21501__$1;
(statearr_21503_21530[(2)] = inst_21483);

(statearr_21503_21530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (1))){
var inst_21477 = cljs.core.seq.call(null,coll);
var inst_21478 = inst_21477;
var state_21501__$1 = (function (){var statearr_21504 = state_21501;
(statearr_21504[(7)] = inst_21478);

return statearr_21504;
})();
var statearr_21505_21531 = state_21501__$1;
(statearr_21505_21531[(2)] = null);

(statearr_21505_21531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (4))){
var inst_21478 = (state_21501[(7)]);
var inst_21481 = cljs.core.first.call(null,inst_21478);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21501__$1,(7),ch,inst_21481);
} else {
if((state_val_21502 === (13))){
var inst_21495 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21506_21532 = state_21501__$1;
(statearr_21506_21532[(2)] = inst_21495);

(statearr_21506_21532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (6))){
var inst_21486 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
if(cljs.core.truth_(inst_21486)){
var statearr_21507_21533 = state_21501__$1;
(statearr_21507_21533[(1)] = (8));

} else {
var statearr_21508_21534 = state_21501__$1;
(statearr_21508_21534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (3))){
var inst_21499 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21501__$1,inst_21499);
} else {
if((state_val_21502 === (12))){
var state_21501__$1 = state_21501;
var statearr_21509_21535 = state_21501__$1;
(statearr_21509_21535[(2)] = null);

(statearr_21509_21535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (2))){
var inst_21478 = (state_21501[(7)]);
var state_21501__$1 = state_21501;
if(cljs.core.truth_(inst_21478)){
var statearr_21510_21536 = state_21501__$1;
(statearr_21510_21536[(1)] = (4));

} else {
var statearr_21511_21537 = state_21501__$1;
(statearr_21511_21537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (11))){
var inst_21492 = cljs.core.async.close_BANG_.call(null,ch);
var state_21501__$1 = state_21501;
var statearr_21512_21538 = state_21501__$1;
(statearr_21512_21538[(2)] = inst_21492);

(statearr_21512_21538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (9))){
var state_21501__$1 = state_21501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21513_21539 = state_21501__$1;
(statearr_21513_21539[(1)] = (11));

} else {
var statearr_21514_21540 = state_21501__$1;
(statearr_21514_21540[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (5))){
var inst_21478 = (state_21501[(7)]);
var state_21501__$1 = state_21501;
var statearr_21515_21541 = state_21501__$1;
(statearr_21515_21541[(2)] = inst_21478);

(statearr_21515_21541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (10))){
var inst_21497 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21516_21542 = state_21501__$1;
(statearr_21516_21542[(2)] = inst_21497);

(statearr_21516_21542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (8))){
var inst_21478 = (state_21501[(7)]);
var inst_21488 = cljs.core.next.call(null,inst_21478);
var inst_21478__$1 = inst_21488;
var state_21501__$1 = (function (){var statearr_21517 = state_21501;
(statearr_21517[(7)] = inst_21478__$1);

return statearr_21517;
})();
var statearr_21518_21543 = state_21501__$1;
(statearr_21518_21543[(2)] = null);

(statearr_21518_21543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto__))
;
return ((function (switch__20606__auto__,c__20718__auto__){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_21522 = [null,null,null,null,null,null,null,null];
(statearr_21522[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_21522[(1)] = (1));

return statearr_21522;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_21501){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_21501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e21523){if((e21523 instanceof Object)){
var ex__20610__auto__ = e21523;
var statearr_21524_21544 = state_21501;
(statearr_21524_21544[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21545 = state_21501;
state_21501 = G__21545;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_21501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_21501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__))
})();
var state__20720__auto__ = (function (){var statearr_21525 = f__20719__auto__.call(null);
(statearr_21525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_21525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__))
);

return c__20718__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18813__auto__ = (((_ == null))?null:_);
var m__18814__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,_);
} else {
var m__18814__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18813__auto__ = (((m == null))?null:m);
var m__18814__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18814__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18813__auto__ = (((m == null))?null:m);
var m__18814__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,m,ch);
} else {
var m__18814__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18813__auto__ = (((m == null))?null:m);
var m__18814__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,m);
} else {
var m__18814__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21767 = (function (mult,ch,cs,meta21768){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21768 = meta21768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21769,meta21768__$1){
var self__ = this;
var _21769__$1 = this;
return (new cljs.core.async.t_cljs$core$async21767(self__.mult,self__.ch,self__.cs,meta21768__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21769){
var self__ = this;
var _21769__$1 = this;
return self__.meta21768;
});})(cs))
;

cljs.core.async.t_cljs$core$async21767.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21767.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21767.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21768","meta21768",1655209001,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21767";

cljs.core.async.t_cljs$core$async21767.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"cljs.core.async/t_cljs$core$async21767");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21767 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21767(mult__$1,ch__$1,cs__$1,meta21768){
return (new cljs.core.async.t_cljs$core$async21767(mult__$1,ch__$1,cs__$1,meta21768));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21767(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20718__auto___21988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___21988,cs,m,dchan,dctr,done){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___21988,cs,m,dchan,dctr,done){
return (function (state_21900){
var state_val_21901 = (state_21900[(1)]);
if((state_val_21901 === (7))){
var inst_21896 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21902_21989 = state_21900__$1;
(statearr_21902_21989[(2)] = inst_21896);

(statearr_21902_21989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (20))){
var inst_21801 = (state_21900[(7)]);
var inst_21811 = cljs.core.first.call(null,inst_21801);
var inst_21812 = cljs.core.nth.call(null,inst_21811,(0),null);
var inst_21813 = cljs.core.nth.call(null,inst_21811,(1),null);
var state_21900__$1 = (function (){var statearr_21903 = state_21900;
(statearr_21903[(8)] = inst_21812);

return statearr_21903;
})();
if(cljs.core.truth_(inst_21813)){
var statearr_21904_21990 = state_21900__$1;
(statearr_21904_21990[(1)] = (22));

} else {
var statearr_21905_21991 = state_21900__$1;
(statearr_21905_21991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (27))){
var inst_21772 = (state_21900[(9)]);
var inst_21841 = (state_21900[(10)]);
var inst_21848 = (state_21900[(11)]);
var inst_21843 = (state_21900[(12)]);
var inst_21848__$1 = cljs.core._nth.call(null,inst_21841,inst_21843);
var inst_21849 = cljs.core.async.put_BANG_.call(null,inst_21848__$1,inst_21772,done);
var state_21900__$1 = (function (){var statearr_21906 = state_21900;
(statearr_21906[(11)] = inst_21848__$1);

return statearr_21906;
})();
if(cljs.core.truth_(inst_21849)){
var statearr_21907_21992 = state_21900__$1;
(statearr_21907_21992[(1)] = (30));

} else {
var statearr_21908_21993 = state_21900__$1;
(statearr_21908_21993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (1))){
var state_21900__$1 = state_21900;
var statearr_21909_21994 = state_21900__$1;
(statearr_21909_21994[(2)] = null);

(statearr_21909_21994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (24))){
var inst_21801 = (state_21900[(7)]);
var inst_21818 = (state_21900[(2)]);
var inst_21819 = cljs.core.next.call(null,inst_21801);
var inst_21781 = inst_21819;
var inst_21782 = null;
var inst_21783 = (0);
var inst_21784 = (0);
var state_21900__$1 = (function (){var statearr_21910 = state_21900;
(statearr_21910[(13)] = inst_21784);

(statearr_21910[(14)] = inst_21781);

(statearr_21910[(15)] = inst_21818);

(statearr_21910[(16)] = inst_21782);

(statearr_21910[(17)] = inst_21783);

return statearr_21910;
})();
var statearr_21911_21995 = state_21900__$1;
(statearr_21911_21995[(2)] = null);

(statearr_21911_21995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (39))){
var state_21900__$1 = state_21900;
var statearr_21915_21996 = state_21900__$1;
(statearr_21915_21996[(2)] = null);

(statearr_21915_21996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (4))){
var inst_21772 = (state_21900[(9)]);
var inst_21772__$1 = (state_21900[(2)]);
var inst_21773 = (inst_21772__$1 == null);
var state_21900__$1 = (function (){var statearr_21916 = state_21900;
(statearr_21916[(9)] = inst_21772__$1);

return statearr_21916;
})();
if(cljs.core.truth_(inst_21773)){
var statearr_21917_21997 = state_21900__$1;
(statearr_21917_21997[(1)] = (5));

} else {
var statearr_21918_21998 = state_21900__$1;
(statearr_21918_21998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (15))){
var inst_21784 = (state_21900[(13)]);
var inst_21781 = (state_21900[(14)]);
var inst_21782 = (state_21900[(16)]);
var inst_21783 = (state_21900[(17)]);
var inst_21797 = (state_21900[(2)]);
var inst_21798 = (inst_21784 + (1));
var tmp21912 = inst_21781;
var tmp21913 = inst_21782;
var tmp21914 = inst_21783;
var inst_21781__$1 = tmp21912;
var inst_21782__$1 = tmp21913;
var inst_21783__$1 = tmp21914;
var inst_21784__$1 = inst_21798;
var state_21900__$1 = (function (){var statearr_21919 = state_21900;
(statearr_21919[(13)] = inst_21784__$1);

(statearr_21919[(14)] = inst_21781__$1);

(statearr_21919[(18)] = inst_21797);

(statearr_21919[(16)] = inst_21782__$1);

(statearr_21919[(17)] = inst_21783__$1);

return statearr_21919;
})();
var statearr_21920_21999 = state_21900__$1;
(statearr_21920_21999[(2)] = null);

(statearr_21920_21999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (21))){
var inst_21822 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21924_22000 = state_21900__$1;
(statearr_21924_22000[(2)] = inst_21822);

(statearr_21924_22000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (31))){
var inst_21848 = (state_21900[(11)]);
var inst_21852 = done.call(null,null);
var inst_21853 = cljs.core.async.untap_STAR_.call(null,m,inst_21848);
var state_21900__$1 = (function (){var statearr_21925 = state_21900;
(statearr_21925[(19)] = inst_21852);

return statearr_21925;
})();
var statearr_21926_22001 = state_21900__$1;
(statearr_21926_22001[(2)] = inst_21853);

(statearr_21926_22001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (32))){
var inst_21842 = (state_21900[(20)]);
var inst_21840 = (state_21900[(21)]);
var inst_21841 = (state_21900[(10)]);
var inst_21843 = (state_21900[(12)]);
var inst_21855 = (state_21900[(2)]);
var inst_21856 = (inst_21843 + (1));
var tmp21921 = inst_21842;
var tmp21922 = inst_21840;
var tmp21923 = inst_21841;
var inst_21840__$1 = tmp21922;
var inst_21841__$1 = tmp21923;
var inst_21842__$1 = tmp21921;
var inst_21843__$1 = inst_21856;
var state_21900__$1 = (function (){var statearr_21927 = state_21900;
(statearr_21927[(20)] = inst_21842__$1);

(statearr_21927[(21)] = inst_21840__$1);

(statearr_21927[(10)] = inst_21841__$1);

(statearr_21927[(22)] = inst_21855);

(statearr_21927[(12)] = inst_21843__$1);

return statearr_21927;
})();
var statearr_21928_22002 = state_21900__$1;
(statearr_21928_22002[(2)] = null);

(statearr_21928_22002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (40))){
var inst_21868 = (state_21900[(23)]);
var inst_21872 = done.call(null,null);
var inst_21873 = cljs.core.async.untap_STAR_.call(null,m,inst_21868);
var state_21900__$1 = (function (){var statearr_21929 = state_21900;
(statearr_21929[(24)] = inst_21872);

return statearr_21929;
})();
var statearr_21930_22003 = state_21900__$1;
(statearr_21930_22003[(2)] = inst_21873);

(statearr_21930_22003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (33))){
var inst_21859 = (state_21900[(25)]);
var inst_21861 = cljs.core.chunked_seq_QMARK_.call(null,inst_21859);
var state_21900__$1 = state_21900;
if(inst_21861){
var statearr_21931_22004 = state_21900__$1;
(statearr_21931_22004[(1)] = (36));

} else {
var statearr_21932_22005 = state_21900__$1;
(statearr_21932_22005[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (13))){
var inst_21791 = (state_21900[(26)]);
var inst_21794 = cljs.core.async.close_BANG_.call(null,inst_21791);
var state_21900__$1 = state_21900;
var statearr_21933_22006 = state_21900__$1;
(statearr_21933_22006[(2)] = inst_21794);

(statearr_21933_22006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (22))){
var inst_21812 = (state_21900[(8)]);
var inst_21815 = cljs.core.async.close_BANG_.call(null,inst_21812);
var state_21900__$1 = state_21900;
var statearr_21934_22007 = state_21900__$1;
(statearr_21934_22007[(2)] = inst_21815);

(statearr_21934_22007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (36))){
var inst_21859 = (state_21900[(25)]);
var inst_21863 = cljs.core.chunk_first.call(null,inst_21859);
var inst_21864 = cljs.core.chunk_rest.call(null,inst_21859);
var inst_21865 = cljs.core.count.call(null,inst_21863);
var inst_21840 = inst_21864;
var inst_21841 = inst_21863;
var inst_21842 = inst_21865;
var inst_21843 = (0);
var state_21900__$1 = (function (){var statearr_21935 = state_21900;
(statearr_21935[(20)] = inst_21842);

(statearr_21935[(21)] = inst_21840);

(statearr_21935[(10)] = inst_21841);

(statearr_21935[(12)] = inst_21843);

return statearr_21935;
})();
var statearr_21936_22008 = state_21900__$1;
(statearr_21936_22008[(2)] = null);

(statearr_21936_22008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (41))){
var inst_21859 = (state_21900[(25)]);
var inst_21875 = (state_21900[(2)]);
var inst_21876 = cljs.core.next.call(null,inst_21859);
var inst_21840 = inst_21876;
var inst_21841 = null;
var inst_21842 = (0);
var inst_21843 = (0);
var state_21900__$1 = (function (){var statearr_21937 = state_21900;
(statearr_21937[(20)] = inst_21842);

(statearr_21937[(21)] = inst_21840);

(statearr_21937[(27)] = inst_21875);

(statearr_21937[(10)] = inst_21841);

(statearr_21937[(12)] = inst_21843);

return statearr_21937;
})();
var statearr_21938_22009 = state_21900__$1;
(statearr_21938_22009[(2)] = null);

(statearr_21938_22009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (43))){
var state_21900__$1 = state_21900;
var statearr_21939_22010 = state_21900__$1;
(statearr_21939_22010[(2)] = null);

(statearr_21939_22010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (29))){
var inst_21884 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21940_22011 = state_21900__$1;
(statearr_21940_22011[(2)] = inst_21884);

(statearr_21940_22011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (44))){
var inst_21893 = (state_21900[(2)]);
var state_21900__$1 = (function (){var statearr_21941 = state_21900;
(statearr_21941[(28)] = inst_21893);

return statearr_21941;
})();
var statearr_21942_22012 = state_21900__$1;
(statearr_21942_22012[(2)] = null);

(statearr_21942_22012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (6))){
var inst_21832 = (state_21900[(29)]);
var inst_21831 = cljs.core.deref.call(null,cs);
var inst_21832__$1 = cljs.core.keys.call(null,inst_21831);
var inst_21833 = cljs.core.count.call(null,inst_21832__$1);
var inst_21834 = cljs.core.reset_BANG_.call(null,dctr,inst_21833);
var inst_21839 = cljs.core.seq.call(null,inst_21832__$1);
var inst_21840 = inst_21839;
var inst_21841 = null;
var inst_21842 = (0);
var inst_21843 = (0);
var state_21900__$1 = (function (){var statearr_21943 = state_21900;
(statearr_21943[(20)] = inst_21842);

(statearr_21943[(29)] = inst_21832__$1);

(statearr_21943[(21)] = inst_21840);

(statearr_21943[(10)] = inst_21841);

(statearr_21943[(30)] = inst_21834);

(statearr_21943[(12)] = inst_21843);

return statearr_21943;
})();
var statearr_21944_22013 = state_21900__$1;
(statearr_21944_22013[(2)] = null);

(statearr_21944_22013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (28))){
var inst_21840 = (state_21900[(21)]);
var inst_21859 = (state_21900[(25)]);
var inst_21859__$1 = cljs.core.seq.call(null,inst_21840);
var state_21900__$1 = (function (){var statearr_21945 = state_21900;
(statearr_21945[(25)] = inst_21859__$1);

return statearr_21945;
})();
if(inst_21859__$1){
var statearr_21946_22014 = state_21900__$1;
(statearr_21946_22014[(1)] = (33));

} else {
var statearr_21947_22015 = state_21900__$1;
(statearr_21947_22015[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (25))){
var inst_21842 = (state_21900[(20)]);
var inst_21843 = (state_21900[(12)]);
var inst_21845 = (inst_21843 < inst_21842);
var inst_21846 = inst_21845;
var state_21900__$1 = state_21900;
if(cljs.core.truth_(inst_21846)){
var statearr_21948_22016 = state_21900__$1;
(statearr_21948_22016[(1)] = (27));

} else {
var statearr_21949_22017 = state_21900__$1;
(statearr_21949_22017[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (34))){
var state_21900__$1 = state_21900;
var statearr_21950_22018 = state_21900__$1;
(statearr_21950_22018[(2)] = null);

(statearr_21950_22018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (17))){
var state_21900__$1 = state_21900;
var statearr_21951_22019 = state_21900__$1;
(statearr_21951_22019[(2)] = null);

(statearr_21951_22019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (3))){
var inst_21898 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21900__$1,inst_21898);
} else {
if((state_val_21901 === (12))){
var inst_21827 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21952_22020 = state_21900__$1;
(statearr_21952_22020[(2)] = inst_21827);

(statearr_21952_22020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (2))){
var state_21900__$1 = state_21900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21900__$1,(4),ch);
} else {
if((state_val_21901 === (23))){
var state_21900__$1 = state_21900;
var statearr_21953_22021 = state_21900__$1;
(statearr_21953_22021[(2)] = null);

(statearr_21953_22021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (35))){
var inst_21882 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21954_22022 = state_21900__$1;
(statearr_21954_22022[(2)] = inst_21882);

(statearr_21954_22022[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (19))){
var inst_21801 = (state_21900[(7)]);
var inst_21805 = cljs.core.chunk_first.call(null,inst_21801);
var inst_21806 = cljs.core.chunk_rest.call(null,inst_21801);
var inst_21807 = cljs.core.count.call(null,inst_21805);
var inst_21781 = inst_21806;
var inst_21782 = inst_21805;
var inst_21783 = inst_21807;
var inst_21784 = (0);
var state_21900__$1 = (function (){var statearr_21955 = state_21900;
(statearr_21955[(13)] = inst_21784);

(statearr_21955[(14)] = inst_21781);

(statearr_21955[(16)] = inst_21782);

(statearr_21955[(17)] = inst_21783);

return statearr_21955;
})();
var statearr_21956_22023 = state_21900__$1;
(statearr_21956_22023[(2)] = null);

(statearr_21956_22023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (11))){
var inst_21781 = (state_21900[(14)]);
var inst_21801 = (state_21900[(7)]);
var inst_21801__$1 = cljs.core.seq.call(null,inst_21781);
var state_21900__$1 = (function (){var statearr_21957 = state_21900;
(statearr_21957[(7)] = inst_21801__$1);

return statearr_21957;
})();
if(inst_21801__$1){
var statearr_21958_22024 = state_21900__$1;
(statearr_21958_22024[(1)] = (16));

} else {
var statearr_21959_22025 = state_21900__$1;
(statearr_21959_22025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (9))){
var inst_21829 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21960_22026 = state_21900__$1;
(statearr_21960_22026[(2)] = inst_21829);

(statearr_21960_22026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (5))){
var inst_21779 = cljs.core.deref.call(null,cs);
var inst_21780 = cljs.core.seq.call(null,inst_21779);
var inst_21781 = inst_21780;
var inst_21782 = null;
var inst_21783 = (0);
var inst_21784 = (0);
var state_21900__$1 = (function (){var statearr_21961 = state_21900;
(statearr_21961[(13)] = inst_21784);

(statearr_21961[(14)] = inst_21781);

(statearr_21961[(16)] = inst_21782);

(statearr_21961[(17)] = inst_21783);

return statearr_21961;
})();
var statearr_21962_22027 = state_21900__$1;
(statearr_21962_22027[(2)] = null);

(statearr_21962_22027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (14))){
var state_21900__$1 = state_21900;
var statearr_21963_22028 = state_21900__$1;
(statearr_21963_22028[(2)] = null);

(statearr_21963_22028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (45))){
var inst_21890 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21964_22029 = state_21900__$1;
(statearr_21964_22029[(2)] = inst_21890);

(statearr_21964_22029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (26))){
var inst_21832 = (state_21900[(29)]);
var inst_21886 = (state_21900[(2)]);
var inst_21887 = cljs.core.seq.call(null,inst_21832);
var state_21900__$1 = (function (){var statearr_21965 = state_21900;
(statearr_21965[(31)] = inst_21886);

return statearr_21965;
})();
if(inst_21887){
var statearr_21966_22030 = state_21900__$1;
(statearr_21966_22030[(1)] = (42));

} else {
var statearr_21967_22031 = state_21900__$1;
(statearr_21967_22031[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (16))){
var inst_21801 = (state_21900[(7)]);
var inst_21803 = cljs.core.chunked_seq_QMARK_.call(null,inst_21801);
var state_21900__$1 = state_21900;
if(inst_21803){
var statearr_21968_22032 = state_21900__$1;
(statearr_21968_22032[(1)] = (19));

} else {
var statearr_21969_22033 = state_21900__$1;
(statearr_21969_22033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (38))){
var inst_21879 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21970_22034 = state_21900__$1;
(statearr_21970_22034[(2)] = inst_21879);

(statearr_21970_22034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (30))){
var state_21900__$1 = state_21900;
var statearr_21971_22035 = state_21900__$1;
(statearr_21971_22035[(2)] = null);

(statearr_21971_22035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (10))){
var inst_21784 = (state_21900[(13)]);
var inst_21782 = (state_21900[(16)]);
var inst_21790 = cljs.core._nth.call(null,inst_21782,inst_21784);
var inst_21791 = cljs.core.nth.call(null,inst_21790,(0),null);
var inst_21792 = cljs.core.nth.call(null,inst_21790,(1),null);
var state_21900__$1 = (function (){var statearr_21972 = state_21900;
(statearr_21972[(26)] = inst_21791);

return statearr_21972;
})();
if(cljs.core.truth_(inst_21792)){
var statearr_21973_22036 = state_21900__$1;
(statearr_21973_22036[(1)] = (13));

} else {
var statearr_21974_22037 = state_21900__$1;
(statearr_21974_22037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (18))){
var inst_21825 = (state_21900[(2)]);
var state_21900__$1 = state_21900;
var statearr_21975_22038 = state_21900__$1;
(statearr_21975_22038[(2)] = inst_21825);

(statearr_21975_22038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (42))){
var state_21900__$1 = state_21900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21900__$1,(45),dchan);
} else {
if((state_val_21901 === (37))){
var inst_21772 = (state_21900[(9)]);
var inst_21868 = (state_21900[(23)]);
var inst_21859 = (state_21900[(25)]);
var inst_21868__$1 = cljs.core.first.call(null,inst_21859);
var inst_21869 = cljs.core.async.put_BANG_.call(null,inst_21868__$1,inst_21772,done);
var state_21900__$1 = (function (){var statearr_21976 = state_21900;
(statearr_21976[(23)] = inst_21868__$1);

return statearr_21976;
})();
if(cljs.core.truth_(inst_21869)){
var statearr_21977_22039 = state_21900__$1;
(statearr_21977_22039[(1)] = (39));

} else {
var statearr_21978_22040 = state_21900__$1;
(statearr_21978_22040[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21901 === (8))){
var inst_21784 = (state_21900[(13)]);
var inst_21783 = (state_21900[(17)]);
var inst_21786 = (inst_21784 < inst_21783);
var inst_21787 = inst_21786;
var state_21900__$1 = state_21900;
if(cljs.core.truth_(inst_21787)){
var statearr_21979_22041 = state_21900__$1;
(statearr_21979_22041[(1)] = (10));

} else {
var statearr_21980_22042 = state_21900__$1;
(statearr_21980_22042[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___21988,cs,m,dchan,dctr,done))
;
return ((function (switch__20606__auto__,c__20718__auto___21988,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20607__auto__ = null;
var cljs$core$async$mult_$_state_machine__20607__auto____0 = (function (){
var statearr_21984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21984[(0)] = cljs$core$async$mult_$_state_machine__20607__auto__);

(statearr_21984[(1)] = (1));

return statearr_21984;
});
var cljs$core$async$mult_$_state_machine__20607__auto____1 = (function (state_21900){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_21900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e21985){if((e21985 instanceof Object)){
var ex__20610__auto__ = e21985;
var statearr_21986_22043 = state_21900;
(statearr_21986_22043[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22044 = state_21900;
state_21900 = G__22044;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20607__auto__ = function(state_21900){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20607__auto____1.call(this,state_21900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20607__auto____0;
cljs$core$async$mult_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20607__auto____1;
return cljs$core$async$mult_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___21988,cs,m,dchan,dctr,done))
})();
var state__20720__auto__ = (function (){var statearr_21987 = f__20719__auto__.call(null);
(statearr_21987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___21988);

return statearr_21987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___21988,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22045 = [];
var len__19216__auto___22048 = arguments.length;
var i__19217__auto___22049 = (0);
while(true){
if((i__19217__auto___22049 < len__19216__auto___22048)){
args22045.push((arguments[i__19217__auto___22049]));

var G__22050 = (i__19217__auto___22049 + (1));
i__19217__auto___22049 = G__22050;
continue;
} else {
}
break;
}

var G__22047 = args22045.length;
switch (G__22047) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22045.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18813__auto__ = (((m == null))?null:m);
var m__18814__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,m,ch);
} else {
var m__18814__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18813__auto__ = (((m == null))?null:m);
var m__18814__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,m,ch);
} else {
var m__18814__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18813__auto__ = (((m == null))?null:m);
var m__18814__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,m);
} else {
var m__18814__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18813__auto__ = (((m == null))?null:m);
var m__18814__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,m,state_map);
} else {
var m__18814__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18813__auto__ = (((m == null))?null:m);
var m__18814__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,m,mode);
} else {
var m__18814__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19223__auto__ = [];
var len__19216__auto___22062 = arguments.length;
var i__19217__auto___22063 = (0);
while(true){
if((i__19217__auto___22063 < len__19216__auto___22062)){
args__19223__auto__.push((arguments[i__19217__auto___22063]));

var G__22064 = (i__19217__auto___22063 + (1));
i__19217__auto___22063 = G__22064;
continue;
} else {
}
break;
}

var argseq__19224__auto__ = ((((3) < args__19223__auto__.length))?(new cljs.core.IndexedSeq(args__19223__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19224__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22056){
var map__22057 = p__22056;
var map__22057__$1 = ((((!((map__22057 == null)))?((((map__22057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22057):map__22057);
var opts = map__22057__$1;
var statearr_22059_22065 = state;
(statearr_22059_22065[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22057,map__22057__$1,opts){
return (function (val){
var statearr_22060_22066 = state;
(statearr_22060_22066[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22057,map__22057__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22061_22067 = state;
(statearr_22061_22067[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22052){
var G__22053 = cljs.core.first.call(null,seq22052);
var seq22052__$1 = cljs.core.next.call(null,seq22052);
var G__22054 = cljs.core.first.call(null,seq22052__$1);
var seq22052__$2 = cljs.core.next.call(null,seq22052__$1);
var G__22055 = cljs.core.first.call(null,seq22052__$2);
var seq22052__$3 = cljs.core.next.call(null,seq22052__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22053,G__22054,G__22055,seq22052__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22231 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22232){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22232 = meta22232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22233,meta22232__$1){
var self__ = this;
var _22233__$1 = this;
return (new cljs.core.async.t_cljs$core$async22231(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22232__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22233){
var self__ = this;
var _22233__$1 = this;
return self__.meta22232;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22231.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22232","meta22232",-899738929,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22231";

cljs.core.async.t_cljs$core$async22231.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"cljs.core.async/t_cljs$core$async22231");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22231 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22231(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22232){
return (new cljs.core.async.t_cljs$core$async22231(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22232));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22231(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20718__auto___22394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___22394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___22394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22331){
var state_val_22332 = (state_22331[(1)]);
if((state_val_22332 === (7))){
var inst_22249 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22333_22395 = state_22331__$1;
(statearr_22333_22395[(2)] = inst_22249);

(statearr_22333_22395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (20))){
var inst_22261 = (state_22331[(7)]);
var state_22331__$1 = state_22331;
var statearr_22334_22396 = state_22331__$1;
(statearr_22334_22396[(2)] = inst_22261);

(statearr_22334_22396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (27))){
var state_22331__$1 = state_22331;
var statearr_22335_22397 = state_22331__$1;
(statearr_22335_22397[(2)] = null);

(statearr_22335_22397[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (1))){
var inst_22237 = (state_22331[(8)]);
var inst_22237__$1 = calc_state.call(null);
var inst_22239 = (inst_22237__$1 == null);
var inst_22240 = cljs.core.not.call(null,inst_22239);
var state_22331__$1 = (function (){var statearr_22336 = state_22331;
(statearr_22336[(8)] = inst_22237__$1);

return statearr_22336;
})();
if(inst_22240){
var statearr_22337_22398 = state_22331__$1;
(statearr_22337_22398[(1)] = (2));

} else {
var statearr_22338_22399 = state_22331__$1;
(statearr_22338_22399[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (24))){
var inst_22305 = (state_22331[(9)]);
var inst_22284 = (state_22331[(10)]);
var inst_22291 = (state_22331[(11)]);
var inst_22305__$1 = inst_22284.call(null,inst_22291);
var state_22331__$1 = (function (){var statearr_22339 = state_22331;
(statearr_22339[(9)] = inst_22305__$1);

return statearr_22339;
})();
if(cljs.core.truth_(inst_22305__$1)){
var statearr_22340_22400 = state_22331__$1;
(statearr_22340_22400[(1)] = (29));

} else {
var statearr_22341_22401 = state_22331__$1;
(statearr_22341_22401[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (4))){
var inst_22252 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
if(cljs.core.truth_(inst_22252)){
var statearr_22342_22402 = state_22331__$1;
(statearr_22342_22402[(1)] = (8));

} else {
var statearr_22343_22403 = state_22331__$1;
(statearr_22343_22403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (15))){
var inst_22278 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
if(cljs.core.truth_(inst_22278)){
var statearr_22344_22404 = state_22331__$1;
(statearr_22344_22404[(1)] = (19));

} else {
var statearr_22345_22405 = state_22331__$1;
(statearr_22345_22405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (21))){
var inst_22283 = (state_22331[(12)]);
var inst_22283__$1 = (state_22331[(2)]);
var inst_22284 = cljs.core.get.call(null,inst_22283__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22285 = cljs.core.get.call(null,inst_22283__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22286 = cljs.core.get.call(null,inst_22283__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22331__$1 = (function (){var statearr_22346 = state_22331;
(statearr_22346[(12)] = inst_22283__$1);

(statearr_22346[(13)] = inst_22285);

(statearr_22346[(10)] = inst_22284);

return statearr_22346;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22331__$1,(22),inst_22286);
} else {
if((state_val_22332 === (31))){
var inst_22313 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
if(cljs.core.truth_(inst_22313)){
var statearr_22347_22406 = state_22331__$1;
(statearr_22347_22406[(1)] = (32));

} else {
var statearr_22348_22407 = state_22331__$1;
(statearr_22348_22407[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (32))){
var inst_22290 = (state_22331[(14)]);
var state_22331__$1 = state_22331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22331__$1,(35),out,inst_22290);
} else {
if((state_val_22332 === (33))){
var inst_22283 = (state_22331[(12)]);
var inst_22261 = inst_22283;
var state_22331__$1 = (function (){var statearr_22349 = state_22331;
(statearr_22349[(7)] = inst_22261);

return statearr_22349;
})();
var statearr_22350_22408 = state_22331__$1;
(statearr_22350_22408[(2)] = null);

(statearr_22350_22408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (13))){
var inst_22261 = (state_22331[(7)]);
var inst_22268 = inst_22261.cljs$lang$protocol_mask$partition0$;
var inst_22269 = (inst_22268 & (64));
var inst_22270 = inst_22261.cljs$core$ISeq$;
var inst_22271 = (inst_22269) || (inst_22270);
var state_22331__$1 = state_22331;
if(cljs.core.truth_(inst_22271)){
var statearr_22351_22409 = state_22331__$1;
(statearr_22351_22409[(1)] = (16));

} else {
var statearr_22352_22410 = state_22331__$1;
(statearr_22352_22410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (22))){
var inst_22290 = (state_22331[(14)]);
var inst_22291 = (state_22331[(11)]);
var inst_22289 = (state_22331[(2)]);
var inst_22290__$1 = cljs.core.nth.call(null,inst_22289,(0),null);
var inst_22291__$1 = cljs.core.nth.call(null,inst_22289,(1),null);
var inst_22292 = (inst_22290__$1 == null);
var inst_22293 = cljs.core._EQ_.call(null,inst_22291__$1,change);
var inst_22294 = (inst_22292) || (inst_22293);
var state_22331__$1 = (function (){var statearr_22353 = state_22331;
(statearr_22353[(14)] = inst_22290__$1);

(statearr_22353[(11)] = inst_22291__$1);

return statearr_22353;
})();
if(cljs.core.truth_(inst_22294)){
var statearr_22354_22411 = state_22331__$1;
(statearr_22354_22411[(1)] = (23));

} else {
var statearr_22355_22412 = state_22331__$1;
(statearr_22355_22412[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (36))){
var inst_22283 = (state_22331[(12)]);
var inst_22261 = inst_22283;
var state_22331__$1 = (function (){var statearr_22356 = state_22331;
(statearr_22356[(7)] = inst_22261);

return statearr_22356;
})();
var statearr_22357_22413 = state_22331__$1;
(statearr_22357_22413[(2)] = null);

(statearr_22357_22413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (29))){
var inst_22305 = (state_22331[(9)]);
var state_22331__$1 = state_22331;
var statearr_22358_22414 = state_22331__$1;
(statearr_22358_22414[(2)] = inst_22305);

(statearr_22358_22414[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (6))){
var state_22331__$1 = state_22331;
var statearr_22359_22415 = state_22331__$1;
(statearr_22359_22415[(2)] = false);

(statearr_22359_22415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (28))){
var inst_22301 = (state_22331[(2)]);
var inst_22302 = calc_state.call(null);
var inst_22261 = inst_22302;
var state_22331__$1 = (function (){var statearr_22360 = state_22331;
(statearr_22360[(7)] = inst_22261);

(statearr_22360[(15)] = inst_22301);

return statearr_22360;
})();
var statearr_22361_22416 = state_22331__$1;
(statearr_22361_22416[(2)] = null);

(statearr_22361_22416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (25))){
var inst_22327 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22362_22417 = state_22331__$1;
(statearr_22362_22417[(2)] = inst_22327);

(statearr_22362_22417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (34))){
var inst_22325 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22363_22418 = state_22331__$1;
(statearr_22363_22418[(2)] = inst_22325);

(statearr_22363_22418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (17))){
var state_22331__$1 = state_22331;
var statearr_22364_22419 = state_22331__$1;
(statearr_22364_22419[(2)] = false);

(statearr_22364_22419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (3))){
var state_22331__$1 = state_22331;
var statearr_22365_22420 = state_22331__$1;
(statearr_22365_22420[(2)] = false);

(statearr_22365_22420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (12))){
var inst_22329 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22331__$1,inst_22329);
} else {
if((state_val_22332 === (2))){
var inst_22237 = (state_22331[(8)]);
var inst_22242 = inst_22237.cljs$lang$protocol_mask$partition0$;
var inst_22243 = (inst_22242 & (64));
var inst_22244 = inst_22237.cljs$core$ISeq$;
var inst_22245 = (inst_22243) || (inst_22244);
var state_22331__$1 = state_22331;
if(cljs.core.truth_(inst_22245)){
var statearr_22366_22421 = state_22331__$1;
(statearr_22366_22421[(1)] = (5));

} else {
var statearr_22367_22422 = state_22331__$1;
(statearr_22367_22422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (23))){
var inst_22290 = (state_22331[(14)]);
var inst_22296 = (inst_22290 == null);
var state_22331__$1 = state_22331;
if(cljs.core.truth_(inst_22296)){
var statearr_22368_22423 = state_22331__$1;
(statearr_22368_22423[(1)] = (26));

} else {
var statearr_22369_22424 = state_22331__$1;
(statearr_22369_22424[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (35))){
var inst_22316 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
if(cljs.core.truth_(inst_22316)){
var statearr_22370_22425 = state_22331__$1;
(statearr_22370_22425[(1)] = (36));

} else {
var statearr_22371_22426 = state_22331__$1;
(statearr_22371_22426[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (19))){
var inst_22261 = (state_22331[(7)]);
var inst_22280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22261);
var state_22331__$1 = state_22331;
var statearr_22372_22427 = state_22331__$1;
(statearr_22372_22427[(2)] = inst_22280);

(statearr_22372_22427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (11))){
var inst_22261 = (state_22331[(7)]);
var inst_22265 = (inst_22261 == null);
var inst_22266 = cljs.core.not.call(null,inst_22265);
var state_22331__$1 = state_22331;
if(inst_22266){
var statearr_22373_22428 = state_22331__$1;
(statearr_22373_22428[(1)] = (13));

} else {
var statearr_22374_22429 = state_22331__$1;
(statearr_22374_22429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (9))){
var inst_22237 = (state_22331[(8)]);
var state_22331__$1 = state_22331;
var statearr_22375_22430 = state_22331__$1;
(statearr_22375_22430[(2)] = inst_22237);

(statearr_22375_22430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (5))){
var state_22331__$1 = state_22331;
var statearr_22376_22431 = state_22331__$1;
(statearr_22376_22431[(2)] = true);

(statearr_22376_22431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (14))){
var state_22331__$1 = state_22331;
var statearr_22377_22432 = state_22331__$1;
(statearr_22377_22432[(2)] = false);

(statearr_22377_22432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (26))){
var inst_22291 = (state_22331[(11)]);
var inst_22298 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22291);
var state_22331__$1 = state_22331;
var statearr_22378_22433 = state_22331__$1;
(statearr_22378_22433[(2)] = inst_22298);

(statearr_22378_22433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (16))){
var state_22331__$1 = state_22331;
var statearr_22379_22434 = state_22331__$1;
(statearr_22379_22434[(2)] = true);

(statearr_22379_22434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (38))){
var inst_22321 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22380_22435 = state_22331__$1;
(statearr_22380_22435[(2)] = inst_22321);

(statearr_22380_22435[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (30))){
var inst_22285 = (state_22331[(13)]);
var inst_22284 = (state_22331[(10)]);
var inst_22291 = (state_22331[(11)]);
var inst_22308 = cljs.core.empty_QMARK_.call(null,inst_22284);
var inst_22309 = inst_22285.call(null,inst_22291);
var inst_22310 = cljs.core.not.call(null,inst_22309);
var inst_22311 = (inst_22308) && (inst_22310);
var state_22331__$1 = state_22331;
var statearr_22381_22436 = state_22331__$1;
(statearr_22381_22436[(2)] = inst_22311);

(statearr_22381_22436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (10))){
var inst_22237 = (state_22331[(8)]);
var inst_22257 = (state_22331[(2)]);
var inst_22258 = cljs.core.get.call(null,inst_22257,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22259 = cljs.core.get.call(null,inst_22257,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22260 = cljs.core.get.call(null,inst_22257,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22261 = inst_22237;
var state_22331__$1 = (function (){var statearr_22382 = state_22331;
(statearr_22382[(7)] = inst_22261);

(statearr_22382[(16)] = inst_22259);

(statearr_22382[(17)] = inst_22260);

(statearr_22382[(18)] = inst_22258);

return statearr_22382;
})();
var statearr_22383_22437 = state_22331__$1;
(statearr_22383_22437[(2)] = null);

(statearr_22383_22437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (18))){
var inst_22275 = (state_22331[(2)]);
var state_22331__$1 = state_22331;
var statearr_22384_22438 = state_22331__$1;
(statearr_22384_22438[(2)] = inst_22275);

(statearr_22384_22438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (37))){
var state_22331__$1 = state_22331;
var statearr_22385_22439 = state_22331__$1;
(statearr_22385_22439[(2)] = null);

(statearr_22385_22439[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22332 === (8))){
var inst_22237 = (state_22331[(8)]);
var inst_22254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22237);
var state_22331__$1 = state_22331;
var statearr_22386_22440 = state_22331__$1;
(statearr_22386_22440[(2)] = inst_22254);

(statearr_22386_22440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___22394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20606__auto__,c__20718__auto___22394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20607__auto__ = null;
var cljs$core$async$mix_$_state_machine__20607__auto____0 = (function (){
var statearr_22390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22390[(0)] = cljs$core$async$mix_$_state_machine__20607__auto__);

(statearr_22390[(1)] = (1));

return statearr_22390;
});
var cljs$core$async$mix_$_state_machine__20607__auto____1 = (function (state_22331){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_22331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e22391){if((e22391 instanceof Object)){
var ex__20610__auto__ = e22391;
var statearr_22392_22441 = state_22331;
(statearr_22392_22441[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22442 = state_22331;
state_22331 = G__22442;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20607__auto__ = function(state_22331){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20607__auto____1.call(this,state_22331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20607__auto____0;
cljs$core$async$mix_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20607__auto____1;
return cljs$core$async$mix_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___22394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20720__auto__ = (function (){var statearr_22393 = f__20719__auto__.call(null);
(statearr_22393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___22394);

return statearr_22393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___22394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18813__auto__ = (((p == null))?null:p);
var m__18814__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18814__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18813__auto__ = (((p == null))?null:p);
var m__18814__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,p,v,ch);
} else {
var m__18814__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22443 = [];
var len__19216__auto___22446 = arguments.length;
var i__19217__auto___22447 = (0);
while(true){
if((i__19217__auto___22447 < len__19216__auto___22446)){
args22443.push((arguments[i__19217__auto___22447]));

var G__22448 = (i__19217__auto___22447 + (1));
i__19217__auto___22447 = G__22448;
continue;
} else {
}
break;
}

var G__22445 = args22443.length;
switch (G__22445) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22443.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18813__auto__ = (((p == null))?null:p);
var m__18814__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,p);
} else {
var m__18814__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18813__auto__ = (((p == null))?null:p);
var m__18814__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18813__auto__)]);
if(!((m__18814__auto__ == null))){
return m__18814__auto__.call(null,p,v);
} else {
var m__18814__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18814__auto____$1 == null))){
return m__18814__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22451 = [];
var len__19216__auto___22576 = arguments.length;
var i__19217__auto___22577 = (0);
while(true){
if((i__19217__auto___22577 < len__19216__auto___22576)){
args22451.push((arguments[i__19217__auto___22577]));

var G__22578 = (i__19217__auto___22577 + (1));
i__19217__auto___22577 = G__22578;
continue;
} else {
}
break;
}

var G__22453 = args22451.length;
switch (G__22453) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22451.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18158__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18158__auto__,mults){
return (function (p1__22450_SHARP_){
if(cljs.core.truth_(p1__22450_SHARP_.call(null,topic))){
return p1__22450_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22450_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18158__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22454 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22455){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22455 = meta22455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22456,meta22455__$1){
var self__ = this;
var _22456__$1 = this;
return (new cljs.core.async.t_cljs$core$async22454(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22455__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22456){
var self__ = this;
var _22456__$1 = this;
return self__.meta22455;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22454.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22454.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22454.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22454.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22454.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22455","meta22455",-1810367562,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22454";

cljs.core.async.t_cljs$core$async22454.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"cljs.core.async/t_cljs$core$async22454");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22454 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22454(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22455){
return (new cljs.core.async.t_cljs$core$async22454(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22455));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22454(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20718__auto___22580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___22580,mults,ensure_mult,p){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___22580,mults,ensure_mult,p){
return (function (state_22528){
var state_val_22529 = (state_22528[(1)]);
if((state_val_22529 === (7))){
var inst_22524 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22530_22581 = state_22528__$1;
(statearr_22530_22581[(2)] = inst_22524);

(statearr_22530_22581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (20))){
var state_22528__$1 = state_22528;
var statearr_22531_22582 = state_22528__$1;
(statearr_22531_22582[(2)] = null);

(statearr_22531_22582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (1))){
var state_22528__$1 = state_22528;
var statearr_22532_22583 = state_22528__$1;
(statearr_22532_22583[(2)] = null);

(statearr_22532_22583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (24))){
var inst_22507 = (state_22528[(7)]);
var inst_22516 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22507);
var state_22528__$1 = state_22528;
var statearr_22533_22584 = state_22528__$1;
(statearr_22533_22584[(2)] = inst_22516);

(statearr_22533_22584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (4))){
var inst_22459 = (state_22528[(8)]);
var inst_22459__$1 = (state_22528[(2)]);
var inst_22460 = (inst_22459__$1 == null);
var state_22528__$1 = (function (){var statearr_22534 = state_22528;
(statearr_22534[(8)] = inst_22459__$1);

return statearr_22534;
})();
if(cljs.core.truth_(inst_22460)){
var statearr_22535_22585 = state_22528__$1;
(statearr_22535_22585[(1)] = (5));

} else {
var statearr_22536_22586 = state_22528__$1;
(statearr_22536_22586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (15))){
var inst_22501 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22537_22587 = state_22528__$1;
(statearr_22537_22587[(2)] = inst_22501);

(statearr_22537_22587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (21))){
var inst_22521 = (state_22528[(2)]);
var state_22528__$1 = (function (){var statearr_22538 = state_22528;
(statearr_22538[(9)] = inst_22521);

return statearr_22538;
})();
var statearr_22539_22588 = state_22528__$1;
(statearr_22539_22588[(2)] = null);

(statearr_22539_22588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (13))){
var inst_22483 = (state_22528[(10)]);
var inst_22485 = cljs.core.chunked_seq_QMARK_.call(null,inst_22483);
var state_22528__$1 = state_22528;
if(inst_22485){
var statearr_22540_22589 = state_22528__$1;
(statearr_22540_22589[(1)] = (16));

} else {
var statearr_22541_22590 = state_22528__$1;
(statearr_22541_22590[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (22))){
var inst_22513 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
if(cljs.core.truth_(inst_22513)){
var statearr_22542_22591 = state_22528__$1;
(statearr_22542_22591[(1)] = (23));

} else {
var statearr_22543_22592 = state_22528__$1;
(statearr_22543_22592[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (6))){
var inst_22459 = (state_22528[(8)]);
var inst_22507 = (state_22528[(7)]);
var inst_22509 = (state_22528[(11)]);
var inst_22507__$1 = topic_fn.call(null,inst_22459);
var inst_22508 = cljs.core.deref.call(null,mults);
var inst_22509__$1 = cljs.core.get.call(null,inst_22508,inst_22507__$1);
var state_22528__$1 = (function (){var statearr_22544 = state_22528;
(statearr_22544[(7)] = inst_22507__$1);

(statearr_22544[(11)] = inst_22509__$1);

return statearr_22544;
})();
if(cljs.core.truth_(inst_22509__$1)){
var statearr_22545_22593 = state_22528__$1;
(statearr_22545_22593[(1)] = (19));

} else {
var statearr_22546_22594 = state_22528__$1;
(statearr_22546_22594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (25))){
var inst_22518 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22547_22595 = state_22528__$1;
(statearr_22547_22595[(2)] = inst_22518);

(statearr_22547_22595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (17))){
var inst_22483 = (state_22528[(10)]);
var inst_22492 = cljs.core.first.call(null,inst_22483);
var inst_22493 = cljs.core.async.muxch_STAR_.call(null,inst_22492);
var inst_22494 = cljs.core.async.close_BANG_.call(null,inst_22493);
var inst_22495 = cljs.core.next.call(null,inst_22483);
var inst_22469 = inst_22495;
var inst_22470 = null;
var inst_22471 = (0);
var inst_22472 = (0);
var state_22528__$1 = (function (){var statearr_22548 = state_22528;
(statearr_22548[(12)] = inst_22471);

(statearr_22548[(13)] = inst_22469);

(statearr_22548[(14)] = inst_22470);

(statearr_22548[(15)] = inst_22494);

(statearr_22548[(16)] = inst_22472);

return statearr_22548;
})();
var statearr_22549_22596 = state_22528__$1;
(statearr_22549_22596[(2)] = null);

(statearr_22549_22596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (3))){
var inst_22526 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22528__$1,inst_22526);
} else {
if((state_val_22529 === (12))){
var inst_22503 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22550_22597 = state_22528__$1;
(statearr_22550_22597[(2)] = inst_22503);

(statearr_22550_22597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (2))){
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22528__$1,(4),ch);
} else {
if((state_val_22529 === (23))){
var state_22528__$1 = state_22528;
var statearr_22551_22598 = state_22528__$1;
(statearr_22551_22598[(2)] = null);

(statearr_22551_22598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (19))){
var inst_22459 = (state_22528[(8)]);
var inst_22509 = (state_22528[(11)]);
var inst_22511 = cljs.core.async.muxch_STAR_.call(null,inst_22509);
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22528__$1,(22),inst_22511,inst_22459);
} else {
if((state_val_22529 === (11))){
var inst_22483 = (state_22528[(10)]);
var inst_22469 = (state_22528[(13)]);
var inst_22483__$1 = cljs.core.seq.call(null,inst_22469);
var state_22528__$1 = (function (){var statearr_22552 = state_22528;
(statearr_22552[(10)] = inst_22483__$1);

return statearr_22552;
})();
if(inst_22483__$1){
var statearr_22553_22599 = state_22528__$1;
(statearr_22553_22599[(1)] = (13));

} else {
var statearr_22554_22600 = state_22528__$1;
(statearr_22554_22600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (9))){
var inst_22505 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22555_22601 = state_22528__$1;
(statearr_22555_22601[(2)] = inst_22505);

(statearr_22555_22601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (5))){
var inst_22466 = cljs.core.deref.call(null,mults);
var inst_22467 = cljs.core.vals.call(null,inst_22466);
var inst_22468 = cljs.core.seq.call(null,inst_22467);
var inst_22469 = inst_22468;
var inst_22470 = null;
var inst_22471 = (0);
var inst_22472 = (0);
var state_22528__$1 = (function (){var statearr_22556 = state_22528;
(statearr_22556[(12)] = inst_22471);

(statearr_22556[(13)] = inst_22469);

(statearr_22556[(14)] = inst_22470);

(statearr_22556[(16)] = inst_22472);

return statearr_22556;
})();
var statearr_22557_22602 = state_22528__$1;
(statearr_22557_22602[(2)] = null);

(statearr_22557_22602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (14))){
var state_22528__$1 = state_22528;
var statearr_22561_22603 = state_22528__$1;
(statearr_22561_22603[(2)] = null);

(statearr_22561_22603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (16))){
var inst_22483 = (state_22528[(10)]);
var inst_22487 = cljs.core.chunk_first.call(null,inst_22483);
var inst_22488 = cljs.core.chunk_rest.call(null,inst_22483);
var inst_22489 = cljs.core.count.call(null,inst_22487);
var inst_22469 = inst_22488;
var inst_22470 = inst_22487;
var inst_22471 = inst_22489;
var inst_22472 = (0);
var state_22528__$1 = (function (){var statearr_22562 = state_22528;
(statearr_22562[(12)] = inst_22471);

(statearr_22562[(13)] = inst_22469);

(statearr_22562[(14)] = inst_22470);

(statearr_22562[(16)] = inst_22472);

return statearr_22562;
})();
var statearr_22563_22604 = state_22528__$1;
(statearr_22563_22604[(2)] = null);

(statearr_22563_22604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (10))){
var inst_22471 = (state_22528[(12)]);
var inst_22469 = (state_22528[(13)]);
var inst_22470 = (state_22528[(14)]);
var inst_22472 = (state_22528[(16)]);
var inst_22477 = cljs.core._nth.call(null,inst_22470,inst_22472);
var inst_22478 = cljs.core.async.muxch_STAR_.call(null,inst_22477);
var inst_22479 = cljs.core.async.close_BANG_.call(null,inst_22478);
var inst_22480 = (inst_22472 + (1));
var tmp22558 = inst_22471;
var tmp22559 = inst_22469;
var tmp22560 = inst_22470;
var inst_22469__$1 = tmp22559;
var inst_22470__$1 = tmp22560;
var inst_22471__$1 = tmp22558;
var inst_22472__$1 = inst_22480;
var state_22528__$1 = (function (){var statearr_22564 = state_22528;
(statearr_22564[(12)] = inst_22471__$1);

(statearr_22564[(17)] = inst_22479);

(statearr_22564[(13)] = inst_22469__$1);

(statearr_22564[(14)] = inst_22470__$1);

(statearr_22564[(16)] = inst_22472__$1);

return statearr_22564;
})();
var statearr_22565_22605 = state_22528__$1;
(statearr_22565_22605[(2)] = null);

(statearr_22565_22605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (18))){
var inst_22498 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22566_22606 = state_22528__$1;
(statearr_22566_22606[(2)] = inst_22498);

(statearr_22566_22606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (8))){
var inst_22471 = (state_22528[(12)]);
var inst_22472 = (state_22528[(16)]);
var inst_22474 = (inst_22472 < inst_22471);
var inst_22475 = inst_22474;
var state_22528__$1 = state_22528;
if(cljs.core.truth_(inst_22475)){
var statearr_22567_22607 = state_22528__$1;
(statearr_22567_22607[(1)] = (10));

} else {
var statearr_22568_22608 = state_22528__$1;
(statearr_22568_22608[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___22580,mults,ensure_mult,p))
;
return ((function (switch__20606__auto__,c__20718__auto___22580,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_22572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22572[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_22572[(1)] = (1));

return statearr_22572;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_22528){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_22528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e22573){if((e22573 instanceof Object)){
var ex__20610__auto__ = e22573;
var statearr_22574_22609 = state_22528;
(statearr_22574_22609[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22610 = state_22528;
state_22528 = G__22610;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_22528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_22528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___22580,mults,ensure_mult,p))
})();
var state__20720__auto__ = (function (){var statearr_22575 = f__20719__auto__.call(null);
(statearr_22575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___22580);

return statearr_22575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___22580,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22611 = [];
var len__19216__auto___22614 = arguments.length;
var i__19217__auto___22615 = (0);
while(true){
if((i__19217__auto___22615 < len__19216__auto___22614)){
args22611.push((arguments[i__19217__auto___22615]));

var G__22616 = (i__19217__auto___22615 + (1));
i__19217__auto___22615 = G__22616;
continue;
} else {
}
break;
}

var G__22613 = args22611.length;
switch (G__22613) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22611.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22618 = [];
var len__19216__auto___22621 = arguments.length;
var i__19217__auto___22622 = (0);
while(true){
if((i__19217__auto___22622 < len__19216__auto___22621)){
args22618.push((arguments[i__19217__auto___22622]));

var G__22623 = (i__19217__auto___22622 + (1));
i__19217__auto___22622 = G__22623;
continue;
} else {
}
break;
}

var G__22620 = args22618.length;
switch (G__22620) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22618.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22625 = [];
var len__19216__auto___22696 = arguments.length;
var i__19217__auto___22697 = (0);
while(true){
if((i__19217__auto___22697 < len__19216__auto___22696)){
args22625.push((arguments[i__19217__auto___22697]));

var G__22698 = (i__19217__auto___22697 + (1));
i__19217__auto___22697 = G__22698;
continue;
} else {
}
break;
}

var G__22627 = args22625.length;
switch (G__22627) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22625.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20718__auto___22700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___22700,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___22700,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22666){
var state_val_22667 = (state_22666[(1)]);
if((state_val_22667 === (7))){
var state_22666__$1 = state_22666;
var statearr_22668_22701 = state_22666__$1;
(statearr_22668_22701[(2)] = null);

(statearr_22668_22701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (1))){
var state_22666__$1 = state_22666;
var statearr_22669_22702 = state_22666__$1;
(statearr_22669_22702[(2)] = null);

(statearr_22669_22702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (4))){
var inst_22630 = (state_22666[(7)]);
var inst_22632 = (inst_22630 < cnt);
var state_22666__$1 = state_22666;
if(cljs.core.truth_(inst_22632)){
var statearr_22670_22703 = state_22666__$1;
(statearr_22670_22703[(1)] = (6));

} else {
var statearr_22671_22704 = state_22666__$1;
(statearr_22671_22704[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (15))){
var inst_22662 = (state_22666[(2)]);
var state_22666__$1 = state_22666;
var statearr_22672_22705 = state_22666__$1;
(statearr_22672_22705[(2)] = inst_22662);

(statearr_22672_22705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (13))){
var inst_22655 = cljs.core.async.close_BANG_.call(null,out);
var state_22666__$1 = state_22666;
var statearr_22673_22706 = state_22666__$1;
(statearr_22673_22706[(2)] = inst_22655);

(statearr_22673_22706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (6))){
var state_22666__$1 = state_22666;
var statearr_22674_22707 = state_22666__$1;
(statearr_22674_22707[(2)] = null);

(statearr_22674_22707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (3))){
var inst_22664 = (state_22666[(2)]);
var state_22666__$1 = state_22666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22666__$1,inst_22664);
} else {
if((state_val_22667 === (12))){
var inst_22652 = (state_22666[(8)]);
var inst_22652__$1 = (state_22666[(2)]);
var inst_22653 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22652__$1);
var state_22666__$1 = (function (){var statearr_22675 = state_22666;
(statearr_22675[(8)] = inst_22652__$1);

return statearr_22675;
})();
if(cljs.core.truth_(inst_22653)){
var statearr_22676_22708 = state_22666__$1;
(statearr_22676_22708[(1)] = (13));

} else {
var statearr_22677_22709 = state_22666__$1;
(statearr_22677_22709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (2))){
var inst_22629 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22630 = (0);
var state_22666__$1 = (function (){var statearr_22678 = state_22666;
(statearr_22678[(9)] = inst_22629);

(statearr_22678[(7)] = inst_22630);

return statearr_22678;
})();
var statearr_22679_22710 = state_22666__$1;
(statearr_22679_22710[(2)] = null);

(statearr_22679_22710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (11))){
var inst_22630 = (state_22666[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22666,(10),Object,null,(9));
var inst_22639 = chs__$1.call(null,inst_22630);
var inst_22640 = done.call(null,inst_22630);
var inst_22641 = cljs.core.async.take_BANG_.call(null,inst_22639,inst_22640);
var state_22666__$1 = state_22666;
var statearr_22680_22711 = state_22666__$1;
(statearr_22680_22711[(2)] = inst_22641);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22666__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (9))){
var inst_22630 = (state_22666[(7)]);
var inst_22643 = (state_22666[(2)]);
var inst_22644 = (inst_22630 + (1));
var inst_22630__$1 = inst_22644;
var state_22666__$1 = (function (){var statearr_22681 = state_22666;
(statearr_22681[(10)] = inst_22643);

(statearr_22681[(7)] = inst_22630__$1);

return statearr_22681;
})();
var statearr_22682_22712 = state_22666__$1;
(statearr_22682_22712[(2)] = null);

(statearr_22682_22712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (5))){
var inst_22650 = (state_22666[(2)]);
var state_22666__$1 = (function (){var statearr_22683 = state_22666;
(statearr_22683[(11)] = inst_22650);

return statearr_22683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22666__$1,(12),dchan);
} else {
if((state_val_22667 === (14))){
var inst_22652 = (state_22666[(8)]);
var inst_22657 = cljs.core.apply.call(null,f,inst_22652);
var state_22666__$1 = state_22666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22666__$1,(16),out,inst_22657);
} else {
if((state_val_22667 === (16))){
var inst_22659 = (state_22666[(2)]);
var state_22666__$1 = (function (){var statearr_22684 = state_22666;
(statearr_22684[(12)] = inst_22659);

return statearr_22684;
})();
var statearr_22685_22713 = state_22666__$1;
(statearr_22685_22713[(2)] = null);

(statearr_22685_22713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (10))){
var inst_22634 = (state_22666[(2)]);
var inst_22635 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22666__$1 = (function (){var statearr_22686 = state_22666;
(statearr_22686[(13)] = inst_22634);

return statearr_22686;
})();
var statearr_22687_22714 = state_22666__$1;
(statearr_22687_22714[(2)] = inst_22635);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22666__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22667 === (8))){
var inst_22648 = (state_22666[(2)]);
var state_22666__$1 = state_22666;
var statearr_22688_22715 = state_22666__$1;
(statearr_22688_22715[(2)] = inst_22648);

(statearr_22688_22715[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___22700,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20606__auto__,c__20718__auto___22700,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_22692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22692[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_22692[(1)] = (1));

return statearr_22692;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_22666){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_22666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e22693){if((e22693 instanceof Object)){
var ex__20610__auto__ = e22693;
var statearr_22694_22716 = state_22666;
(statearr_22694_22716[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22717 = state_22666;
state_22666 = G__22717;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_22666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_22666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___22700,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20720__auto__ = (function (){var statearr_22695 = f__20719__auto__.call(null);
(statearr_22695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___22700);

return statearr_22695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___22700,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22719 = [];
var len__19216__auto___22775 = arguments.length;
var i__19217__auto___22776 = (0);
while(true){
if((i__19217__auto___22776 < len__19216__auto___22775)){
args22719.push((arguments[i__19217__auto___22776]));

var G__22777 = (i__19217__auto___22776 + (1));
i__19217__auto___22776 = G__22777;
continue;
} else {
}
break;
}

var G__22721 = args22719.length;
switch (G__22721) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22719.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20718__auto___22779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___22779,out){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___22779,out){
return (function (state_22751){
var state_val_22752 = (state_22751[(1)]);
if((state_val_22752 === (7))){
var inst_22730 = (state_22751[(7)]);
var inst_22731 = (state_22751[(8)]);
var inst_22730__$1 = (state_22751[(2)]);
var inst_22731__$1 = cljs.core.nth.call(null,inst_22730__$1,(0),null);
var inst_22732 = cljs.core.nth.call(null,inst_22730__$1,(1),null);
var inst_22733 = (inst_22731__$1 == null);
var state_22751__$1 = (function (){var statearr_22753 = state_22751;
(statearr_22753[(7)] = inst_22730__$1);

(statearr_22753[(9)] = inst_22732);

(statearr_22753[(8)] = inst_22731__$1);

return statearr_22753;
})();
if(cljs.core.truth_(inst_22733)){
var statearr_22754_22780 = state_22751__$1;
(statearr_22754_22780[(1)] = (8));

} else {
var statearr_22755_22781 = state_22751__$1;
(statearr_22755_22781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22752 === (1))){
var inst_22722 = cljs.core.vec.call(null,chs);
var inst_22723 = inst_22722;
var state_22751__$1 = (function (){var statearr_22756 = state_22751;
(statearr_22756[(10)] = inst_22723);

return statearr_22756;
})();
var statearr_22757_22782 = state_22751__$1;
(statearr_22757_22782[(2)] = null);

(statearr_22757_22782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22752 === (4))){
var inst_22723 = (state_22751[(10)]);
var state_22751__$1 = state_22751;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22751__$1,(7),inst_22723);
} else {
if((state_val_22752 === (6))){
var inst_22747 = (state_22751[(2)]);
var state_22751__$1 = state_22751;
var statearr_22758_22783 = state_22751__$1;
(statearr_22758_22783[(2)] = inst_22747);

(statearr_22758_22783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22752 === (3))){
var inst_22749 = (state_22751[(2)]);
var state_22751__$1 = state_22751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22751__$1,inst_22749);
} else {
if((state_val_22752 === (2))){
var inst_22723 = (state_22751[(10)]);
var inst_22725 = cljs.core.count.call(null,inst_22723);
var inst_22726 = (inst_22725 > (0));
var state_22751__$1 = state_22751;
if(cljs.core.truth_(inst_22726)){
var statearr_22760_22784 = state_22751__$1;
(statearr_22760_22784[(1)] = (4));

} else {
var statearr_22761_22785 = state_22751__$1;
(statearr_22761_22785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22752 === (11))){
var inst_22723 = (state_22751[(10)]);
var inst_22740 = (state_22751[(2)]);
var tmp22759 = inst_22723;
var inst_22723__$1 = tmp22759;
var state_22751__$1 = (function (){var statearr_22762 = state_22751;
(statearr_22762[(11)] = inst_22740);

(statearr_22762[(10)] = inst_22723__$1);

return statearr_22762;
})();
var statearr_22763_22786 = state_22751__$1;
(statearr_22763_22786[(2)] = null);

(statearr_22763_22786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22752 === (9))){
var inst_22731 = (state_22751[(8)]);
var state_22751__$1 = state_22751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22751__$1,(11),out,inst_22731);
} else {
if((state_val_22752 === (5))){
var inst_22745 = cljs.core.async.close_BANG_.call(null,out);
var state_22751__$1 = state_22751;
var statearr_22764_22787 = state_22751__$1;
(statearr_22764_22787[(2)] = inst_22745);

(statearr_22764_22787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22752 === (10))){
var inst_22743 = (state_22751[(2)]);
var state_22751__$1 = state_22751;
var statearr_22765_22788 = state_22751__$1;
(statearr_22765_22788[(2)] = inst_22743);

(statearr_22765_22788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22752 === (8))){
var inst_22730 = (state_22751[(7)]);
var inst_22723 = (state_22751[(10)]);
var inst_22732 = (state_22751[(9)]);
var inst_22731 = (state_22751[(8)]);
var inst_22735 = (function (){var cs = inst_22723;
var vec__22728 = inst_22730;
var v = inst_22731;
var c = inst_22732;
return ((function (cs,vec__22728,v,c,inst_22730,inst_22723,inst_22732,inst_22731,state_val_22752,c__20718__auto___22779,out){
return (function (p1__22718_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22718_SHARP_);
});
;})(cs,vec__22728,v,c,inst_22730,inst_22723,inst_22732,inst_22731,state_val_22752,c__20718__auto___22779,out))
})();
var inst_22736 = cljs.core.filterv.call(null,inst_22735,inst_22723);
var inst_22723__$1 = inst_22736;
var state_22751__$1 = (function (){var statearr_22766 = state_22751;
(statearr_22766[(10)] = inst_22723__$1);

return statearr_22766;
})();
var statearr_22767_22789 = state_22751__$1;
(statearr_22767_22789[(2)] = null);

(statearr_22767_22789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___22779,out))
;
return ((function (switch__20606__auto__,c__20718__auto___22779,out){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_22771 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22771[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_22771[(1)] = (1));

return statearr_22771;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_22751){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_22751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e22772){if((e22772 instanceof Object)){
var ex__20610__auto__ = e22772;
var statearr_22773_22790 = state_22751;
(statearr_22773_22790[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22791 = state_22751;
state_22751 = G__22791;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_22751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_22751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___22779,out))
})();
var state__20720__auto__ = (function (){var statearr_22774 = f__20719__auto__.call(null);
(statearr_22774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___22779);

return statearr_22774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___22779,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22792 = [];
var len__19216__auto___22841 = arguments.length;
var i__19217__auto___22842 = (0);
while(true){
if((i__19217__auto___22842 < len__19216__auto___22841)){
args22792.push((arguments[i__19217__auto___22842]));

var G__22843 = (i__19217__auto___22842 + (1));
i__19217__auto___22842 = G__22843;
continue;
} else {
}
break;
}

var G__22794 = args22792.length;
switch (G__22794) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22792.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20718__auto___22845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___22845,out){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___22845,out){
return (function (state_22818){
var state_val_22819 = (state_22818[(1)]);
if((state_val_22819 === (7))){
var inst_22800 = (state_22818[(7)]);
var inst_22800__$1 = (state_22818[(2)]);
var inst_22801 = (inst_22800__$1 == null);
var inst_22802 = cljs.core.not.call(null,inst_22801);
var state_22818__$1 = (function (){var statearr_22820 = state_22818;
(statearr_22820[(7)] = inst_22800__$1);

return statearr_22820;
})();
if(inst_22802){
var statearr_22821_22846 = state_22818__$1;
(statearr_22821_22846[(1)] = (8));

} else {
var statearr_22822_22847 = state_22818__$1;
(statearr_22822_22847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (1))){
var inst_22795 = (0);
var state_22818__$1 = (function (){var statearr_22823 = state_22818;
(statearr_22823[(8)] = inst_22795);

return statearr_22823;
})();
var statearr_22824_22848 = state_22818__$1;
(statearr_22824_22848[(2)] = null);

(statearr_22824_22848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (4))){
var state_22818__$1 = state_22818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22818__$1,(7),ch);
} else {
if((state_val_22819 === (6))){
var inst_22813 = (state_22818[(2)]);
var state_22818__$1 = state_22818;
var statearr_22825_22849 = state_22818__$1;
(statearr_22825_22849[(2)] = inst_22813);

(statearr_22825_22849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (3))){
var inst_22815 = (state_22818[(2)]);
var inst_22816 = cljs.core.async.close_BANG_.call(null,out);
var state_22818__$1 = (function (){var statearr_22826 = state_22818;
(statearr_22826[(9)] = inst_22815);

return statearr_22826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22818__$1,inst_22816);
} else {
if((state_val_22819 === (2))){
var inst_22795 = (state_22818[(8)]);
var inst_22797 = (inst_22795 < n);
var state_22818__$1 = state_22818;
if(cljs.core.truth_(inst_22797)){
var statearr_22827_22850 = state_22818__$1;
(statearr_22827_22850[(1)] = (4));

} else {
var statearr_22828_22851 = state_22818__$1;
(statearr_22828_22851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (11))){
var inst_22795 = (state_22818[(8)]);
var inst_22805 = (state_22818[(2)]);
var inst_22806 = (inst_22795 + (1));
var inst_22795__$1 = inst_22806;
var state_22818__$1 = (function (){var statearr_22829 = state_22818;
(statearr_22829[(10)] = inst_22805);

(statearr_22829[(8)] = inst_22795__$1);

return statearr_22829;
})();
var statearr_22830_22852 = state_22818__$1;
(statearr_22830_22852[(2)] = null);

(statearr_22830_22852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (9))){
var state_22818__$1 = state_22818;
var statearr_22831_22853 = state_22818__$1;
(statearr_22831_22853[(2)] = null);

(statearr_22831_22853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (5))){
var state_22818__$1 = state_22818;
var statearr_22832_22854 = state_22818__$1;
(statearr_22832_22854[(2)] = null);

(statearr_22832_22854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (10))){
var inst_22810 = (state_22818[(2)]);
var state_22818__$1 = state_22818;
var statearr_22833_22855 = state_22818__$1;
(statearr_22833_22855[(2)] = inst_22810);

(statearr_22833_22855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (8))){
var inst_22800 = (state_22818[(7)]);
var state_22818__$1 = state_22818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22818__$1,(11),out,inst_22800);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___22845,out))
;
return ((function (switch__20606__auto__,c__20718__auto___22845,out){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_22837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22837[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_22837[(1)] = (1));

return statearr_22837;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_22818){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_22818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e22838){if((e22838 instanceof Object)){
var ex__20610__auto__ = e22838;
var statearr_22839_22856 = state_22818;
(statearr_22839_22856[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22857 = state_22818;
state_22818 = G__22857;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_22818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_22818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___22845,out))
})();
var state__20720__auto__ = (function (){var statearr_22840 = f__20719__auto__.call(null);
(statearr_22840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___22845);

return statearr_22840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___22845,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22865 = (function (map_LT_,f,ch,meta22866){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22866 = meta22866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22867,meta22866__$1){
var self__ = this;
var _22867__$1 = this;
return (new cljs.core.async.t_cljs$core$async22865(self__.map_LT_,self__.f,self__.ch,meta22866__$1));
});

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22867){
var self__ = this;
var _22867__$1 = this;
return self__.meta22866;
});

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22868 = (function (map_LT_,f,ch,meta22866,_,fn1,meta22869){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22866 = meta22866;
this._ = _;
this.fn1 = fn1;
this.meta22869 = meta22869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22870,meta22869__$1){
var self__ = this;
var _22870__$1 = this;
return (new cljs.core.async.t_cljs$core$async22868(self__.map_LT_,self__.f,self__.ch,self__.meta22866,self__._,self__.fn1,meta22869__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22870){
var self__ = this;
var _22870__$1 = this;
return self__.meta22869;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22868.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22858_SHARP_){
return f1.call(null,(((p1__22858_SHARP_ == null))?null:self__.f.call(null,p1__22858_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22868.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22866","meta22866",-1512447142,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22865","cljs.core.async/t_cljs$core$async22865",502043859,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22869","meta22869",386955146,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22868";

cljs.core.async.t_cljs$core$async22868.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"cljs.core.async/t_cljs$core$async22868");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22868 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22868(map_LT___$1,f__$1,ch__$1,meta22866__$1,___$2,fn1__$1,meta22869){
return (new cljs.core.async.t_cljs$core$async22868(map_LT___$1,f__$1,ch__$1,meta22866__$1,___$2,fn1__$1,meta22869));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22868(self__.map_LT_,self__.f,self__.ch,self__.meta22866,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18146__auto__ = ret;
if(cljs.core.truth_(and__18146__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18146__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22866","meta22866",-1512447142,null)], null);
});

cljs.core.async.t_cljs$core$async22865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22865";

cljs.core.async.t_cljs$core$async22865.cljs$lang$ctorPrWriter = (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"cljs.core.async/t_cljs$core$async22865");
});

cljs.core.async.__GT_t_cljs$core$async22865 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22865(map_LT___$1,f__$1,ch__$1,meta22866){
return (new cljs.core.async.t_cljs$core$async22865(map_LT___$1,f__$1,ch__$1,meta22866));
});

}

return (new cljs.core.async.t_cljs$core$async22865(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22874 = (function (map_GT_,f,ch,meta22875){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22875 = meta22875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22876,meta22875__$1){
var self__ = this;
var _22876__$1 = this;
return (new cljs.core.async.t_cljs$core$async22874(self__.map_GT_,self__.f,self__.ch,meta22875__$1));
});

cljs.core.async.t_cljs$core$async22874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22876){
var self__ = this;
var _22876__$1 = this;
return self__.meta22875;
});

cljs.core.async.t_cljs$core$async22874.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22874.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22874.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22875","meta22875",1294839854,null)], null);
});

cljs.core.async.t_cljs$core$async22874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22874";

cljs.core.async.t_cljs$core$async22874.cljs$lang$ctorPrWriter = (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"cljs.core.async/t_cljs$core$async22874");
});

cljs.core.async.__GT_t_cljs$core$async22874 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22874(map_GT___$1,f__$1,ch__$1,meta22875){
return (new cljs.core.async.t_cljs$core$async22874(map_GT___$1,f__$1,ch__$1,meta22875));
});

}

return (new cljs.core.async.t_cljs$core$async22874(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22880 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22880 = (function (filter_GT_,p,ch,meta22881){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22881 = meta22881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22882,meta22881__$1){
var self__ = this;
var _22882__$1 = this;
return (new cljs.core.async.t_cljs$core$async22880(self__.filter_GT_,self__.p,self__.ch,meta22881__$1));
});

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22882){
var self__ = this;
var _22882__$1 = this;
return self__.meta22881;
});

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22880.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22881","meta22881",776231834,null)], null);
});

cljs.core.async.t_cljs$core$async22880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22880";

cljs.core.async.t_cljs$core$async22880.cljs$lang$ctorPrWriter = (function (this__18756__auto__,writer__18757__auto__,opt__18758__auto__){
return cljs.core._write.call(null,writer__18757__auto__,"cljs.core.async/t_cljs$core$async22880");
});

cljs.core.async.__GT_t_cljs$core$async22880 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22880(filter_GT___$1,p__$1,ch__$1,meta22881){
return (new cljs.core.async.t_cljs$core$async22880(filter_GT___$1,p__$1,ch__$1,meta22881));
});

}

return (new cljs.core.async.t_cljs$core$async22880(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22883 = [];
var len__19216__auto___22927 = arguments.length;
var i__19217__auto___22928 = (0);
while(true){
if((i__19217__auto___22928 < len__19216__auto___22927)){
args22883.push((arguments[i__19217__auto___22928]));

var G__22929 = (i__19217__auto___22928 + (1));
i__19217__auto___22928 = G__22929;
continue;
} else {
}
break;
}

var G__22885 = args22883.length;
switch (G__22885) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22883.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20718__auto___22931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___22931,out){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___22931,out){
return (function (state_22906){
var state_val_22907 = (state_22906[(1)]);
if((state_val_22907 === (7))){
var inst_22902 = (state_22906[(2)]);
var state_22906__$1 = state_22906;
var statearr_22908_22932 = state_22906__$1;
(statearr_22908_22932[(2)] = inst_22902);

(statearr_22908_22932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22907 === (1))){
var state_22906__$1 = state_22906;
var statearr_22909_22933 = state_22906__$1;
(statearr_22909_22933[(2)] = null);

(statearr_22909_22933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22907 === (4))){
var inst_22888 = (state_22906[(7)]);
var inst_22888__$1 = (state_22906[(2)]);
var inst_22889 = (inst_22888__$1 == null);
var state_22906__$1 = (function (){var statearr_22910 = state_22906;
(statearr_22910[(7)] = inst_22888__$1);

return statearr_22910;
})();
if(cljs.core.truth_(inst_22889)){
var statearr_22911_22934 = state_22906__$1;
(statearr_22911_22934[(1)] = (5));

} else {
var statearr_22912_22935 = state_22906__$1;
(statearr_22912_22935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22907 === (6))){
var inst_22888 = (state_22906[(7)]);
var inst_22893 = p.call(null,inst_22888);
var state_22906__$1 = state_22906;
if(cljs.core.truth_(inst_22893)){
var statearr_22913_22936 = state_22906__$1;
(statearr_22913_22936[(1)] = (8));

} else {
var statearr_22914_22937 = state_22906__$1;
(statearr_22914_22937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22907 === (3))){
var inst_22904 = (state_22906[(2)]);
var state_22906__$1 = state_22906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22906__$1,inst_22904);
} else {
if((state_val_22907 === (2))){
var state_22906__$1 = state_22906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22906__$1,(4),ch);
} else {
if((state_val_22907 === (11))){
var inst_22896 = (state_22906[(2)]);
var state_22906__$1 = state_22906;
var statearr_22915_22938 = state_22906__$1;
(statearr_22915_22938[(2)] = inst_22896);

(statearr_22915_22938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22907 === (9))){
var state_22906__$1 = state_22906;
var statearr_22916_22939 = state_22906__$1;
(statearr_22916_22939[(2)] = null);

(statearr_22916_22939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22907 === (5))){
var inst_22891 = cljs.core.async.close_BANG_.call(null,out);
var state_22906__$1 = state_22906;
var statearr_22917_22940 = state_22906__$1;
(statearr_22917_22940[(2)] = inst_22891);

(statearr_22917_22940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22907 === (10))){
var inst_22899 = (state_22906[(2)]);
var state_22906__$1 = (function (){var statearr_22918 = state_22906;
(statearr_22918[(8)] = inst_22899);

return statearr_22918;
})();
var statearr_22919_22941 = state_22906__$1;
(statearr_22919_22941[(2)] = null);

(statearr_22919_22941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22907 === (8))){
var inst_22888 = (state_22906[(7)]);
var state_22906__$1 = state_22906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22906__$1,(11),out,inst_22888);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___22931,out))
;
return ((function (switch__20606__auto__,c__20718__auto___22931,out){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_22923 = [null,null,null,null,null,null,null,null,null];
(statearr_22923[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_22923[(1)] = (1));

return statearr_22923;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_22906){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_22906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e22924){if((e22924 instanceof Object)){
var ex__20610__auto__ = e22924;
var statearr_22925_22942 = state_22906;
(statearr_22925_22942[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22943 = state_22906;
state_22906 = G__22943;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_22906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_22906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___22931,out))
})();
var state__20720__auto__ = (function (){var statearr_22926 = f__20719__auto__.call(null);
(statearr_22926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___22931);

return statearr_22926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___22931,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22944 = [];
var len__19216__auto___22947 = arguments.length;
var i__19217__auto___22948 = (0);
while(true){
if((i__19217__auto___22948 < len__19216__auto___22947)){
args22944.push((arguments[i__19217__auto___22948]));

var G__22949 = (i__19217__auto___22948 + (1));
i__19217__auto___22948 = G__22949;
continue;
} else {
}
break;
}

var G__22946 = args22944.length;
switch (G__22946) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22944.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__){
return (function (state_23116){
var state_val_23117 = (state_23116[(1)]);
if((state_val_23117 === (7))){
var inst_23112 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23118_23159 = state_23116__$1;
(statearr_23118_23159[(2)] = inst_23112);

(statearr_23118_23159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (20))){
var inst_23082 = (state_23116[(7)]);
var inst_23093 = (state_23116[(2)]);
var inst_23094 = cljs.core.next.call(null,inst_23082);
var inst_23068 = inst_23094;
var inst_23069 = null;
var inst_23070 = (0);
var inst_23071 = (0);
var state_23116__$1 = (function (){var statearr_23119 = state_23116;
(statearr_23119[(8)] = inst_23069);

(statearr_23119[(9)] = inst_23070);

(statearr_23119[(10)] = inst_23068);

(statearr_23119[(11)] = inst_23093);

(statearr_23119[(12)] = inst_23071);

return statearr_23119;
})();
var statearr_23120_23160 = state_23116__$1;
(statearr_23120_23160[(2)] = null);

(statearr_23120_23160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (1))){
var state_23116__$1 = state_23116;
var statearr_23121_23161 = state_23116__$1;
(statearr_23121_23161[(2)] = null);

(statearr_23121_23161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (4))){
var inst_23057 = (state_23116[(13)]);
var inst_23057__$1 = (state_23116[(2)]);
var inst_23058 = (inst_23057__$1 == null);
var state_23116__$1 = (function (){var statearr_23122 = state_23116;
(statearr_23122[(13)] = inst_23057__$1);

return statearr_23122;
})();
if(cljs.core.truth_(inst_23058)){
var statearr_23123_23162 = state_23116__$1;
(statearr_23123_23162[(1)] = (5));

} else {
var statearr_23124_23163 = state_23116__$1;
(statearr_23124_23163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (15))){
var state_23116__$1 = state_23116;
var statearr_23128_23164 = state_23116__$1;
(statearr_23128_23164[(2)] = null);

(statearr_23128_23164[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (21))){
var state_23116__$1 = state_23116;
var statearr_23129_23165 = state_23116__$1;
(statearr_23129_23165[(2)] = null);

(statearr_23129_23165[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (13))){
var inst_23069 = (state_23116[(8)]);
var inst_23070 = (state_23116[(9)]);
var inst_23068 = (state_23116[(10)]);
var inst_23071 = (state_23116[(12)]);
var inst_23078 = (state_23116[(2)]);
var inst_23079 = (inst_23071 + (1));
var tmp23125 = inst_23069;
var tmp23126 = inst_23070;
var tmp23127 = inst_23068;
var inst_23068__$1 = tmp23127;
var inst_23069__$1 = tmp23125;
var inst_23070__$1 = tmp23126;
var inst_23071__$1 = inst_23079;
var state_23116__$1 = (function (){var statearr_23130 = state_23116;
(statearr_23130[(8)] = inst_23069__$1);

(statearr_23130[(9)] = inst_23070__$1);

(statearr_23130[(14)] = inst_23078);

(statearr_23130[(10)] = inst_23068__$1);

(statearr_23130[(12)] = inst_23071__$1);

return statearr_23130;
})();
var statearr_23131_23166 = state_23116__$1;
(statearr_23131_23166[(2)] = null);

(statearr_23131_23166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (22))){
var state_23116__$1 = state_23116;
var statearr_23132_23167 = state_23116__$1;
(statearr_23132_23167[(2)] = null);

(statearr_23132_23167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (6))){
var inst_23057 = (state_23116[(13)]);
var inst_23066 = f.call(null,inst_23057);
var inst_23067 = cljs.core.seq.call(null,inst_23066);
var inst_23068 = inst_23067;
var inst_23069 = null;
var inst_23070 = (0);
var inst_23071 = (0);
var state_23116__$1 = (function (){var statearr_23133 = state_23116;
(statearr_23133[(8)] = inst_23069);

(statearr_23133[(9)] = inst_23070);

(statearr_23133[(10)] = inst_23068);

(statearr_23133[(12)] = inst_23071);

return statearr_23133;
})();
var statearr_23134_23168 = state_23116__$1;
(statearr_23134_23168[(2)] = null);

(statearr_23134_23168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (17))){
var inst_23082 = (state_23116[(7)]);
var inst_23086 = cljs.core.chunk_first.call(null,inst_23082);
var inst_23087 = cljs.core.chunk_rest.call(null,inst_23082);
var inst_23088 = cljs.core.count.call(null,inst_23086);
var inst_23068 = inst_23087;
var inst_23069 = inst_23086;
var inst_23070 = inst_23088;
var inst_23071 = (0);
var state_23116__$1 = (function (){var statearr_23135 = state_23116;
(statearr_23135[(8)] = inst_23069);

(statearr_23135[(9)] = inst_23070);

(statearr_23135[(10)] = inst_23068);

(statearr_23135[(12)] = inst_23071);

return statearr_23135;
})();
var statearr_23136_23169 = state_23116__$1;
(statearr_23136_23169[(2)] = null);

(statearr_23136_23169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (3))){
var inst_23114 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23116__$1,inst_23114);
} else {
if((state_val_23117 === (12))){
var inst_23102 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23137_23170 = state_23116__$1;
(statearr_23137_23170[(2)] = inst_23102);

(statearr_23137_23170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (2))){
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23116__$1,(4),in$);
} else {
if((state_val_23117 === (23))){
var inst_23110 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23138_23171 = state_23116__$1;
(statearr_23138_23171[(2)] = inst_23110);

(statearr_23138_23171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (19))){
var inst_23097 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23139_23172 = state_23116__$1;
(statearr_23139_23172[(2)] = inst_23097);

(statearr_23139_23172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (11))){
var inst_23068 = (state_23116[(10)]);
var inst_23082 = (state_23116[(7)]);
var inst_23082__$1 = cljs.core.seq.call(null,inst_23068);
var state_23116__$1 = (function (){var statearr_23140 = state_23116;
(statearr_23140[(7)] = inst_23082__$1);

return statearr_23140;
})();
if(inst_23082__$1){
var statearr_23141_23173 = state_23116__$1;
(statearr_23141_23173[(1)] = (14));

} else {
var statearr_23142_23174 = state_23116__$1;
(statearr_23142_23174[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (9))){
var inst_23104 = (state_23116[(2)]);
var inst_23105 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23116__$1 = (function (){var statearr_23143 = state_23116;
(statearr_23143[(15)] = inst_23104);

return statearr_23143;
})();
if(cljs.core.truth_(inst_23105)){
var statearr_23144_23175 = state_23116__$1;
(statearr_23144_23175[(1)] = (21));

} else {
var statearr_23145_23176 = state_23116__$1;
(statearr_23145_23176[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (5))){
var inst_23060 = cljs.core.async.close_BANG_.call(null,out);
var state_23116__$1 = state_23116;
var statearr_23146_23177 = state_23116__$1;
(statearr_23146_23177[(2)] = inst_23060);

(statearr_23146_23177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (14))){
var inst_23082 = (state_23116[(7)]);
var inst_23084 = cljs.core.chunked_seq_QMARK_.call(null,inst_23082);
var state_23116__$1 = state_23116;
if(inst_23084){
var statearr_23147_23178 = state_23116__$1;
(statearr_23147_23178[(1)] = (17));

} else {
var statearr_23148_23179 = state_23116__$1;
(statearr_23148_23179[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (16))){
var inst_23100 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23149_23180 = state_23116__$1;
(statearr_23149_23180[(2)] = inst_23100);

(statearr_23149_23180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (10))){
var inst_23069 = (state_23116[(8)]);
var inst_23071 = (state_23116[(12)]);
var inst_23076 = cljs.core._nth.call(null,inst_23069,inst_23071);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23116__$1,(13),out,inst_23076);
} else {
if((state_val_23117 === (18))){
var inst_23082 = (state_23116[(7)]);
var inst_23091 = cljs.core.first.call(null,inst_23082);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23116__$1,(20),out,inst_23091);
} else {
if((state_val_23117 === (8))){
var inst_23070 = (state_23116[(9)]);
var inst_23071 = (state_23116[(12)]);
var inst_23073 = (inst_23071 < inst_23070);
var inst_23074 = inst_23073;
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23074)){
var statearr_23150_23181 = state_23116__$1;
(statearr_23150_23181[(1)] = (10));

} else {
var statearr_23151_23182 = state_23116__$1;
(statearr_23151_23182[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto__))
;
return ((function (switch__20606__auto__,c__20718__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20607__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20607__auto____0 = (function (){
var statearr_23155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23155[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20607__auto__);

(statearr_23155[(1)] = (1));

return statearr_23155;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20607__auto____1 = (function (state_23116){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_23116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e23156){if((e23156 instanceof Object)){
var ex__20610__auto__ = e23156;
var statearr_23157_23183 = state_23116;
(statearr_23157_23183[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23184 = state_23116;
state_23116 = G__23184;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20607__auto__ = function(state_23116){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20607__auto____1.call(this,state_23116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20607__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20607__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__))
})();
var state__20720__auto__ = (function (){var statearr_23158 = f__20719__auto__.call(null);
(statearr_23158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_23158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__))
);

return c__20718__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23185 = [];
var len__19216__auto___23188 = arguments.length;
var i__19217__auto___23189 = (0);
while(true){
if((i__19217__auto___23189 < len__19216__auto___23188)){
args23185.push((arguments[i__19217__auto___23189]));

var G__23190 = (i__19217__auto___23189 + (1));
i__19217__auto___23189 = G__23190;
continue;
} else {
}
break;
}

var G__23187 = args23185.length;
switch (G__23187) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23185.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23192 = [];
var len__19216__auto___23195 = arguments.length;
var i__19217__auto___23196 = (0);
while(true){
if((i__19217__auto___23196 < len__19216__auto___23195)){
args23192.push((arguments[i__19217__auto___23196]));

var G__23197 = (i__19217__auto___23196 + (1));
i__19217__auto___23196 = G__23197;
continue;
} else {
}
break;
}

var G__23194 = args23192.length;
switch (G__23194) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23192.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23199 = [];
var len__19216__auto___23250 = arguments.length;
var i__19217__auto___23251 = (0);
while(true){
if((i__19217__auto___23251 < len__19216__auto___23250)){
args23199.push((arguments[i__19217__auto___23251]));

var G__23252 = (i__19217__auto___23251 + (1));
i__19217__auto___23251 = G__23252;
continue;
} else {
}
break;
}

var G__23201 = args23199.length;
switch (G__23201) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23199.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20718__auto___23254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___23254,out){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___23254,out){
return (function (state_23225){
var state_val_23226 = (state_23225[(1)]);
if((state_val_23226 === (7))){
var inst_23220 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
var statearr_23227_23255 = state_23225__$1;
(statearr_23227_23255[(2)] = inst_23220);

(statearr_23227_23255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (1))){
var inst_23202 = null;
var state_23225__$1 = (function (){var statearr_23228 = state_23225;
(statearr_23228[(7)] = inst_23202);

return statearr_23228;
})();
var statearr_23229_23256 = state_23225__$1;
(statearr_23229_23256[(2)] = null);

(statearr_23229_23256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (4))){
var inst_23205 = (state_23225[(8)]);
var inst_23205__$1 = (state_23225[(2)]);
var inst_23206 = (inst_23205__$1 == null);
var inst_23207 = cljs.core.not.call(null,inst_23206);
var state_23225__$1 = (function (){var statearr_23230 = state_23225;
(statearr_23230[(8)] = inst_23205__$1);

return statearr_23230;
})();
if(inst_23207){
var statearr_23231_23257 = state_23225__$1;
(statearr_23231_23257[(1)] = (5));

} else {
var statearr_23232_23258 = state_23225__$1;
(statearr_23232_23258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (6))){
var state_23225__$1 = state_23225;
var statearr_23233_23259 = state_23225__$1;
(statearr_23233_23259[(2)] = null);

(statearr_23233_23259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (3))){
var inst_23222 = (state_23225[(2)]);
var inst_23223 = cljs.core.async.close_BANG_.call(null,out);
var state_23225__$1 = (function (){var statearr_23234 = state_23225;
(statearr_23234[(9)] = inst_23222);

return statearr_23234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23225__$1,inst_23223);
} else {
if((state_val_23226 === (2))){
var state_23225__$1 = state_23225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23225__$1,(4),ch);
} else {
if((state_val_23226 === (11))){
var inst_23205 = (state_23225[(8)]);
var inst_23214 = (state_23225[(2)]);
var inst_23202 = inst_23205;
var state_23225__$1 = (function (){var statearr_23235 = state_23225;
(statearr_23235[(7)] = inst_23202);

(statearr_23235[(10)] = inst_23214);

return statearr_23235;
})();
var statearr_23236_23260 = state_23225__$1;
(statearr_23236_23260[(2)] = null);

(statearr_23236_23260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (9))){
var inst_23205 = (state_23225[(8)]);
var state_23225__$1 = state_23225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23225__$1,(11),out,inst_23205);
} else {
if((state_val_23226 === (5))){
var inst_23202 = (state_23225[(7)]);
var inst_23205 = (state_23225[(8)]);
var inst_23209 = cljs.core._EQ_.call(null,inst_23205,inst_23202);
var state_23225__$1 = state_23225;
if(inst_23209){
var statearr_23238_23261 = state_23225__$1;
(statearr_23238_23261[(1)] = (8));

} else {
var statearr_23239_23262 = state_23225__$1;
(statearr_23239_23262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (10))){
var inst_23217 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
var statearr_23240_23263 = state_23225__$1;
(statearr_23240_23263[(2)] = inst_23217);

(statearr_23240_23263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (8))){
var inst_23202 = (state_23225[(7)]);
var tmp23237 = inst_23202;
var inst_23202__$1 = tmp23237;
var state_23225__$1 = (function (){var statearr_23241 = state_23225;
(statearr_23241[(7)] = inst_23202__$1);

return statearr_23241;
})();
var statearr_23242_23264 = state_23225__$1;
(statearr_23242_23264[(2)] = null);

(statearr_23242_23264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___23254,out))
;
return ((function (switch__20606__auto__,c__20718__auto___23254,out){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_23246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23246[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_23246[(1)] = (1));

return statearr_23246;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_23225){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_23225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e23247){if((e23247 instanceof Object)){
var ex__20610__auto__ = e23247;
var statearr_23248_23265 = state_23225;
(statearr_23248_23265[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23266 = state_23225;
state_23225 = G__23266;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_23225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_23225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___23254,out))
})();
var state__20720__auto__ = (function (){var statearr_23249 = f__20719__auto__.call(null);
(statearr_23249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___23254);

return statearr_23249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___23254,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23267 = [];
var len__19216__auto___23337 = arguments.length;
var i__19217__auto___23338 = (0);
while(true){
if((i__19217__auto___23338 < len__19216__auto___23337)){
args23267.push((arguments[i__19217__auto___23338]));

var G__23339 = (i__19217__auto___23338 + (1));
i__19217__auto___23338 = G__23339;
continue;
} else {
}
break;
}

var G__23269 = args23267.length;
switch (G__23269) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23267.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20718__auto___23341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___23341,out){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___23341,out){
return (function (state_23307){
var state_val_23308 = (state_23307[(1)]);
if((state_val_23308 === (7))){
var inst_23303 = (state_23307[(2)]);
var state_23307__$1 = state_23307;
var statearr_23309_23342 = state_23307__$1;
(statearr_23309_23342[(2)] = inst_23303);

(statearr_23309_23342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23308 === (1))){
var inst_23270 = (new Array(n));
var inst_23271 = inst_23270;
var inst_23272 = (0);
var state_23307__$1 = (function (){var statearr_23310 = state_23307;
(statearr_23310[(7)] = inst_23272);

(statearr_23310[(8)] = inst_23271);

return statearr_23310;
})();
var statearr_23311_23343 = state_23307__$1;
(statearr_23311_23343[(2)] = null);

(statearr_23311_23343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23308 === (4))){
var inst_23275 = (state_23307[(9)]);
var inst_23275__$1 = (state_23307[(2)]);
var inst_23276 = (inst_23275__$1 == null);
var inst_23277 = cljs.core.not.call(null,inst_23276);
var state_23307__$1 = (function (){var statearr_23312 = state_23307;
(statearr_23312[(9)] = inst_23275__$1);

return statearr_23312;
})();
if(inst_23277){
var statearr_23313_23344 = state_23307__$1;
(statearr_23313_23344[(1)] = (5));

} else {
var statearr_23314_23345 = state_23307__$1;
(statearr_23314_23345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23308 === (15))){
var inst_23297 = (state_23307[(2)]);
var state_23307__$1 = state_23307;
var statearr_23315_23346 = state_23307__$1;
(statearr_23315_23346[(2)] = inst_23297);

(statearr_23315_23346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23308 === (13))){
var state_23307__$1 = state_23307;
var statearr_23316_23347 = state_23307__$1;
(statearr_23316_23347[(2)] = null);

(statearr_23316_23347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23308 === (6))){
var inst_23272 = (state_23307[(7)]);
var inst_23293 = (inst_23272 > (0));
var state_23307__$1 = state_23307;
if(cljs.core.truth_(inst_23293)){
var statearr_23317_23348 = state_23307__$1;
(statearr_23317_23348[(1)] = (12));

} else {
var statearr_23318_23349 = state_23307__$1;
(statearr_23318_23349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23308 === (3))){
var inst_23305 = (state_23307[(2)]);
var state_23307__$1 = state_23307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23307__$1,inst_23305);
} else {
if((state_val_23308 === (12))){
var inst_23271 = (state_23307[(8)]);
var inst_23295 = cljs.core.vec.call(null,inst_23271);
var state_23307__$1 = state_23307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23307__$1,(15),out,inst_23295);
} else {
if((state_val_23308 === (2))){
var state_23307__$1 = state_23307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23307__$1,(4),ch);
} else {
if((state_val_23308 === (11))){
var inst_23287 = (state_23307[(2)]);
var inst_23288 = (new Array(n));
var inst_23271 = inst_23288;
var inst_23272 = (0);
var state_23307__$1 = (function (){var statearr_23319 = state_23307;
(statearr_23319[(10)] = inst_23287);

(statearr_23319[(7)] = inst_23272);

(statearr_23319[(8)] = inst_23271);

return statearr_23319;
})();
var statearr_23320_23350 = state_23307__$1;
(statearr_23320_23350[(2)] = null);

(statearr_23320_23350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23308 === (9))){
var inst_23271 = (state_23307[(8)]);
var inst_23285 = cljs.core.vec.call(null,inst_23271);
var state_23307__$1 = state_23307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23307__$1,(11),out,inst_23285);
} else {
if((state_val_23308 === (5))){
var inst_23280 = (state_23307[(11)]);
var inst_23275 = (state_23307[(9)]);
var inst_23272 = (state_23307[(7)]);
var inst_23271 = (state_23307[(8)]);
var inst_23279 = (inst_23271[inst_23272] = inst_23275);
var inst_23280__$1 = (inst_23272 + (1));
var inst_23281 = (inst_23280__$1 < n);
var state_23307__$1 = (function (){var statearr_23321 = state_23307;
(statearr_23321[(11)] = inst_23280__$1);

(statearr_23321[(12)] = inst_23279);

return statearr_23321;
})();
if(cljs.core.truth_(inst_23281)){
var statearr_23322_23351 = state_23307__$1;
(statearr_23322_23351[(1)] = (8));

} else {
var statearr_23323_23352 = state_23307__$1;
(statearr_23323_23352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23308 === (14))){
var inst_23300 = (state_23307[(2)]);
var inst_23301 = cljs.core.async.close_BANG_.call(null,out);
var state_23307__$1 = (function (){var statearr_23325 = state_23307;
(statearr_23325[(13)] = inst_23300);

return statearr_23325;
})();
var statearr_23326_23353 = state_23307__$1;
(statearr_23326_23353[(2)] = inst_23301);

(statearr_23326_23353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23308 === (10))){
var inst_23291 = (state_23307[(2)]);
var state_23307__$1 = state_23307;
var statearr_23327_23354 = state_23307__$1;
(statearr_23327_23354[(2)] = inst_23291);

(statearr_23327_23354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23308 === (8))){
var inst_23280 = (state_23307[(11)]);
var inst_23271 = (state_23307[(8)]);
var tmp23324 = inst_23271;
var inst_23271__$1 = tmp23324;
var inst_23272 = inst_23280;
var state_23307__$1 = (function (){var statearr_23328 = state_23307;
(statearr_23328[(7)] = inst_23272);

(statearr_23328[(8)] = inst_23271__$1);

return statearr_23328;
})();
var statearr_23329_23355 = state_23307__$1;
(statearr_23329_23355[(2)] = null);

(statearr_23329_23355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___23341,out))
;
return ((function (switch__20606__auto__,c__20718__auto___23341,out){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_23333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23333[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_23333[(1)] = (1));

return statearr_23333;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_23307){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_23307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e23334){if((e23334 instanceof Object)){
var ex__20610__auto__ = e23334;
var statearr_23335_23356 = state_23307;
(statearr_23335_23356[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23357 = state_23307;
state_23307 = G__23357;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_23307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_23307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___23341,out))
})();
var state__20720__auto__ = (function (){var statearr_23336 = f__20719__auto__.call(null);
(statearr_23336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___23341);

return statearr_23336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___23341,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23358 = [];
var len__19216__auto___23432 = arguments.length;
var i__19217__auto___23433 = (0);
while(true){
if((i__19217__auto___23433 < len__19216__auto___23432)){
args23358.push((arguments[i__19217__auto___23433]));

var G__23434 = (i__19217__auto___23433 + (1));
i__19217__auto___23433 = G__23434;
continue;
} else {
}
break;
}

var G__23360 = args23358.length;
switch (G__23360) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23358.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20718__auto___23436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___23436,out){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___23436,out){
return (function (state_23402){
var state_val_23403 = (state_23402[(1)]);
if((state_val_23403 === (7))){
var inst_23398 = (state_23402[(2)]);
var state_23402__$1 = state_23402;
var statearr_23404_23437 = state_23402__$1;
(statearr_23404_23437[(2)] = inst_23398);

(statearr_23404_23437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (1))){
var inst_23361 = [];
var inst_23362 = inst_23361;
var inst_23363 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23402__$1 = (function (){var statearr_23405 = state_23402;
(statearr_23405[(7)] = inst_23363);

(statearr_23405[(8)] = inst_23362);

return statearr_23405;
})();
var statearr_23406_23438 = state_23402__$1;
(statearr_23406_23438[(2)] = null);

(statearr_23406_23438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (4))){
var inst_23366 = (state_23402[(9)]);
var inst_23366__$1 = (state_23402[(2)]);
var inst_23367 = (inst_23366__$1 == null);
var inst_23368 = cljs.core.not.call(null,inst_23367);
var state_23402__$1 = (function (){var statearr_23407 = state_23402;
(statearr_23407[(9)] = inst_23366__$1);

return statearr_23407;
})();
if(inst_23368){
var statearr_23408_23439 = state_23402__$1;
(statearr_23408_23439[(1)] = (5));

} else {
var statearr_23409_23440 = state_23402__$1;
(statearr_23409_23440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (15))){
var inst_23392 = (state_23402[(2)]);
var state_23402__$1 = state_23402;
var statearr_23410_23441 = state_23402__$1;
(statearr_23410_23441[(2)] = inst_23392);

(statearr_23410_23441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (13))){
var state_23402__$1 = state_23402;
var statearr_23411_23442 = state_23402__$1;
(statearr_23411_23442[(2)] = null);

(statearr_23411_23442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (6))){
var inst_23362 = (state_23402[(8)]);
var inst_23387 = inst_23362.length;
var inst_23388 = (inst_23387 > (0));
var state_23402__$1 = state_23402;
if(cljs.core.truth_(inst_23388)){
var statearr_23412_23443 = state_23402__$1;
(statearr_23412_23443[(1)] = (12));

} else {
var statearr_23413_23444 = state_23402__$1;
(statearr_23413_23444[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (3))){
var inst_23400 = (state_23402[(2)]);
var state_23402__$1 = state_23402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23402__$1,inst_23400);
} else {
if((state_val_23403 === (12))){
var inst_23362 = (state_23402[(8)]);
var inst_23390 = cljs.core.vec.call(null,inst_23362);
var state_23402__$1 = state_23402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23402__$1,(15),out,inst_23390);
} else {
if((state_val_23403 === (2))){
var state_23402__$1 = state_23402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23402__$1,(4),ch);
} else {
if((state_val_23403 === (11))){
var inst_23366 = (state_23402[(9)]);
var inst_23370 = (state_23402[(10)]);
var inst_23380 = (state_23402[(2)]);
var inst_23381 = [];
var inst_23382 = inst_23381.push(inst_23366);
var inst_23362 = inst_23381;
var inst_23363 = inst_23370;
var state_23402__$1 = (function (){var statearr_23414 = state_23402;
(statearr_23414[(7)] = inst_23363);

(statearr_23414[(11)] = inst_23382);

(statearr_23414[(8)] = inst_23362);

(statearr_23414[(12)] = inst_23380);

return statearr_23414;
})();
var statearr_23415_23445 = state_23402__$1;
(statearr_23415_23445[(2)] = null);

(statearr_23415_23445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (9))){
var inst_23362 = (state_23402[(8)]);
var inst_23378 = cljs.core.vec.call(null,inst_23362);
var state_23402__$1 = state_23402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23402__$1,(11),out,inst_23378);
} else {
if((state_val_23403 === (5))){
var inst_23363 = (state_23402[(7)]);
var inst_23366 = (state_23402[(9)]);
var inst_23370 = (state_23402[(10)]);
var inst_23370__$1 = f.call(null,inst_23366);
var inst_23371 = cljs.core._EQ_.call(null,inst_23370__$1,inst_23363);
var inst_23372 = cljs.core.keyword_identical_QMARK_.call(null,inst_23363,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23373 = (inst_23371) || (inst_23372);
var state_23402__$1 = (function (){var statearr_23416 = state_23402;
(statearr_23416[(10)] = inst_23370__$1);

return statearr_23416;
})();
if(cljs.core.truth_(inst_23373)){
var statearr_23417_23446 = state_23402__$1;
(statearr_23417_23446[(1)] = (8));

} else {
var statearr_23418_23447 = state_23402__$1;
(statearr_23418_23447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (14))){
var inst_23395 = (state_23402[(2)]);
var inst_23396 = cljs.core.async.close_BANG_.call(null,out);
var state_23402__$1 = (function (){var statearr_23420 = state_23402;
(statearr_23420[(13)] = inst_23395);

return statearr_23420;
})();
var statearr_23421_23448 = state_23402__$1;
(statearr_23421_23448[(2)] = inst_23396);

(statearr_23421_23448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (10))){
var inst_23385 = (state_23402[(2)]);
var state_23402__$1 = state_23402;
var statearr_23422_23449 = state_23402__$1;
(statearr_23422_23449[(2)] = inst_23385);

(statearr_23422_23449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23403 === (8))){
var inst_23362 = (state_23402[(8)]);
var inst_23366 = (state_23402[(9)]);
var inst_23370 = (state_23402[(10)]);
var inst_23375 = inst_23362.push(inst_23366);
var tmp23419 = inst_23362;
var inst_23362__$1 = tmp23419;
var inst_23363 = inst_23370;
var state_23402__$1 = (function (){var statearr_23423 = state_23402;
(statearr_23423[(14)] = inst_23375);

(statearr_23423[(7)] = inst_23363);

(statearr_23423[(8)] = inst_23362__$1);

return statearr_23423;
})();
var statearr_23424_23450 = state_23402__$1;
(statearr_23424_23450[(2)] = null);

(statearr_23424_23450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20718__auto___23436,out))
;
return ((function (switch__20606__auto__,c__20718__auto___23436,out){
return (function() {
var cljs$core$async$state_machine__20607__auto__ = null;
var cljs$core$async$state_machine__20607__auto____0 = (function (){
var statearr_23428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23428[(0)] = cljs$core$async$state_machine__20607__auto__);

(statearr_23428[(1)] = (1));

return statearr_23428;
});
var cljs$core$async$state_machine__20607__auto____1 = (function (state_23402){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_23402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e23429){if((e23429 instanceof Object)){
var ex__20610__auto__ = e23429;
var statearr_23430_23451 = state_23402;
(statearr_23430_23451[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23452 = state_23402;
state_23402 = G__23452;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
cljs$core$async$state_machine__20607__auto__ = function(state_23402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20607__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20607__auto____1.call(this,state_23402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20607__auto____0;
cljs$core$async$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20607__auto____1;
return cljs$core$async$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___23436,out))
})();
var state__20720__auto__ = (function (){var statearr_23431 = f__20719__auto__.call(null);
(statearr_23431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___23436);

return statearr_23431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___23436,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map