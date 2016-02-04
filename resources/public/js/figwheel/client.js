// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25254 = cljs.core._EQ_;
var expr__25255 = (function (){var or__18158__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25254.call(null,"true",expr__25255))){
return true;
} else {
if(cljs.core.truth_(pred__25254.call(null,"false",expr__25255))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25255)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25257__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25258__i = 0, G__25258__a = new Array(arguments.length -  0);
while (G__25258__i < G__25258__a.length) {G__25258__a[G__25258__i] = arguments[G__25258__i + 0]; ++G__25258__i;}
  args = new cljs.core.IndexedSeq(G__25258__a,0);
} 
return G__25257__delegate.call(this,args);};
G__25257.cljs$lang$maxFixedArity = 0;
G__25257.cljs$lang$applyTo = (function (arglist__25259){
var args = cljs.core.seq(arglist__25259);
return G__25257__delegate(args);
});
G__25257.cljs$core$IFn$_invoke$arity$variadic = G__25257__delegate;
return G__25257;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25260){
var map__25263 = p__25260;
var map__25263__$1 = ((((!((map__25263 == null)))?((((map__25263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25263):map__25263);
var message = cljs.core.get.call(null,map__25263__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25263__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18158__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18146__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18146__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18146__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20718__auto___25425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___25425,ch){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___25425,ch){
return (function (state_25394){
var state_val_25395 = (state_25394[(1)]);
if((state_val_25395 === (7))){
var inst_25390 = (state_25394[(2)]);
var state_25394__$1 = state_25394;
var statearr_25396_25426 = state_25394__$1;
(statearr_25396_25426[(2)] = inst_25390);

(statearr_25396_25426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (1))){
var state_25394__$1 = state_25394;
var statearr_25397_25427 = state_25394__$1;
(statearr_25397_25427[(2)] = null);

(statearr_25397_25427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (4))){
var inst_25347 = (state_25394[(7)]);
var inst_25347__$1 = (state_25394[(2)]);
var state_25394__$1 = (function (){var statearr_25398 = state_25394;
(statearr_25398[(7)] = inst_25347__$1);

return statearr_25398;
})();
if(cljs.core.truth_(inst_25347__$1)){
var statearr_25399_25428 = state_25394__$1;
(statearr_25399_25428[(1)] = (5));

} else {
var statearr_25400_25429 = state_25394__$1;
(statearr_25400_25429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (15))){
var inst_25354 = (state_25394[(8)]);
var inst_25369 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25354);
var inst_25370 = cljs.core.first.call(null,inst_25369);
var inst_25371 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25370);
var inst_25372 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25371)].join('');
var inst_25373 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25372);
var state_25394__$1 = state_25394;
var statearr_25401_25430 = state_25394__$1;
(statearr_25401_25430[(2)] = inst_25373);

(statearr_25401_25430[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (13))){
var inst_25378 = (state_25394[(2)]);
var state_25394__$1 = state_25394;
var statearr_25402_25431 = state_25394__$1;
(statearr_25402_25431[(2)] = inst_25378);

(statearr_25402_25431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (6))){
var state_25394__$1 = state_25394;
var statearr_25403_25432 = state_25394__$1;
(statearr_25403_25432[(2)] = null);

(statearr_25403_25432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (17))){
var inst_25376 = (state_25394[(2)]);
var state_25394__$1 = state_25394;
var statearr_25404_25433 = state_25394__$1;
(statearr_25404_25433[(2)] = inst_25376);

(statearr_25404_25433[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (3))){
var inst_25392 = (state_25394[(2)]);
var state_25394__$1 = state_25394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25394__$1,inst_25392);
} else {
if((state_val_25395 === (12))){
var inst_25353 = (state_25394[(9)]);
var inst_25367 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25353,opts);
var state_25394__$1 = state_25394;
if(cljs.core.truth_(inst_25367)){
var statearr_25405_25434 = state_25394__$1;
(statearr_25405_25434[(1)] = (15));

} else {
var statearr_25406_25435 = state_25394__$1;
(statearr_25406_25435[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (2))){
var state_25394__$1 = state_25394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25394__$1,(4),ch);
} else {
if((state_val_25395 === (11))){
var inst_25354 = (state_25394[(8)]);
var inst_25359 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25360 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25354);
var inst_25361 = cljs.core.async.timeout.call(null,(1000));
var inst_25362 = [inst_25360,inst_25361];
var inst_25363 = (new cljs.core.PersistentVector(null,2,(5),inst_25359,inst_25362,null));
var state_25394__$1 = state_25394;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25394__$1,(14),inst_25363);
} else {
if((state_val_25395 === (9))){
var inst_25354 = (state_25394[(8)]);
var inst_25380 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25381 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25354);
var inst_25382 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25381);
var inst_25383 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25382)].join('');
var inst_25384 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25383);
var state_25394__$1 = (function (){var statearr_25407 = state_25394;
(statearr_25407[(10)] = inst_25380);

return statearr_25407;
})();
var statearr_25408_25436 = state_25394__$1;
(statearr_25408_25436[(2)] = inst_25384);

(statearr_25408_25436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (5))){
var inst_25347 = (state_25394[(7)]);
var inst_25349 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25350 = (new cljs.core.PersistentArrayMap(null,2,inst_25349,null));
var inst_25351 = (new cljs.core.PersistentHashSet(null,inst_25350,null));
var inst_25352 = figwheel.client.focus_msgs.call(null,inst_25351,inst_25347);
var inst_25353 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25352);
var inst_25354 = cljs.core.first.call(null,inst_25352);
var inst_25355 = figwheel.client.autoload_QMARK_.call(null);
var state_25394__$1 = (function (){var statearr_25409 = state_25394;
(statearr_25409[(9)] = inst_25353);

(statearr_25409[(8)] = inst_25354);

return statearr_25409;
})();
if(cljs.core.truth_(inst_25355)){
var statearr_25410_25437 = state_25394__$1;
(statearr_25410_25437[(1)] = (8));

} else {
var statearr_25411_25438 = state_25394__$1;
(statearr_25411_25438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (14))){
var inst_25365 = (state_25394[(2)]);
var state_25394__$1 = state_25394;
var statearr_25412_25439 = state_25394__$1;
(statearr_25412_25439[(2)] = inst_25365);

(statearr_25412_25439[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (16))){
var state_25394__$1 = state_25394;
var statearr_25413_25440 = state_25394__$1;
(statearr_25413_25440[(2)] = null);

(statearr_25413_25440[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (10))){
var inst_25386 = (state_25394[(2)]);
var state_25394__$1 = (function (){var statearr_25414 = state_25394;
(statearr_25414[(11)] = inst_25386);

return statearr_25414;
})();
var statearr_25415_25441 = state_25394__$1;
(statearr_25415_25441[(2)] = null);

(statearr_25415_25441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25395 === (8))){
var inst_25353 = (state_25394[(9)]);
var inst_25357 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25353,opts);
var state_25394__$1 = state_25394;
if(cljs.core.truth_(inst_25357)){
var statearr_25416_25442 = state_25394__$1;
(statearr_25416_25442[(1)] = (11));

} else {
var statearr_25417_25443 = state_25394__$1;
(statearr_25417_25443[(1)] = (12));

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
});})(c__20718__auto___25425,ch))
;
return ((function (switch__20606__auto__,c__20718__auto___25425,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20607__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20607__auto____0 = (function (){
var statearr_25421 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25421[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20607__auto__);

(statearr_25421[(1)] = (1));

return statearr_25421;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20607__auto____1 = (function (state_25394){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_25394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e25422){if((e25422 instanceof Object)){
var ex__20610__auto__ = e25422;
var statearr_25423_25444 = state_25394;
(statearr_25423_25444[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25445 = state_25394;
state_25394 = G__25445;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20607__auto__ = function(state_25394){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20607__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20607__auto____1.call(this,state_25394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20607__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20607__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___25425,ch))
})();
var state__20720__auto__ = (function (){var statearr_25424 = f__20719__auto__.call(null);
(statearr_25424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___25425);

return statearr_25424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___25425,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25446_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25446_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25453 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25453){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25451 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25452 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25451,_STAR_print_newline_STAR_25452,base_path_25453){
return (function() { 
var G__25454__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25455__i = 0, G__25455__a = new Array(arguments.length -  0);
while (G__25455__i < G__25455__a.length) {G__25455__a[G__25455__i] = arguments[G__25455__i + 0]; ++G__25455__i;}
  args = new cljs.core.IndexedSeq(G__25455__a,0);
} 
return G__25454__delegate.call(this,args);};
G__25454.cljs$lang$maxFixedArity = 0;
G__25454.cljs$lang$applyTo = (function (arglist__25456){
var args = cljs.core.seq(arglist__25456);
return G__25454__delegate(args);
});
G__25454.cljs$core$IFn$_invoke$arity$variadic = G__25454__delegate;
return G__25454;
})()
;})(_STAR_print_fn_STAR_25451,_STAR_print_newline_STAR_25452,base_path_25453))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25452;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25451;
}}catch (e25450){if((e25450 instanceof Error)){
var e = e25450;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25453], null));
} else {
var e = e25450;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25453))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25457){
var map__25464 = p__25457;
var map__25464__$1 = ((((!((map__25464 == null)))?((((map__25464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25464):map__25464);
var opts = map__25464__$1;
var build_id = cljs.core.get.call(null,map__25464__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25464,map__25464__$1,opts,build_id){
return (function (p__25466){
var vec__25467 = p__25466;
var map__25468 = cljs.core.nth.call(null,vec__25467,(0),null);
var map__25468__$1 = ((((!((map__25468 == null)))?((((map__25468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25468):map__25468);
var msg = map__25468__$1;
var msg_name = cljs.core.get.call(null,map__25468__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25467,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25467,map__25468,map__25468__$1,msg,msg_name,_,map__25464,map__25464__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25467,map__25468,map__25468__$1,msg,msg_name,_,map__25464,map__25464__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25464,map__25464__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25474){
var vec__25475 = p__25474;
var map__25476 = cljs.core.nth.call(null,vec__25475,(0),null);
var map__25476__$1 = ((((!((map__25476 == null)))?((((map__25476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25476):map__25476);
var msg = map__25476__$1;
var msg_name = cljs.core.get.call(null,map__25476__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25475,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25478){
var map__25488 = p__25478;
var map__25488__$1 = ((((!((map__25488 == null)))?((((map__25488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25488):map__25488);
var on_compile_warning = cljs.core.get.call(null,map__25488__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25488__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25488,map__25488__$1,on_compile_warning,on_compile_fail){
return (function (p__25490){
var vec__25491 = p__25490;
var map__25492 = cljs.core.nth.call(null,vec__25491,(0),null);
var map__25492__$1 = ((((!((map__25492 == null)))?((((map__25492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25492):map__25492);
var msg = map__25492__$1;
var msg_name = cljs.core.get.call(null,map__25492__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25491,(1));
var pred__25494 = cljs.core._EQ_;
var expr__25495 = msg_name;
if(cljs.core.truth_(pred__25494.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25495))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25494.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25495))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25488,map__25488__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__,msg_hist,msg_names,msg){
return (function (state_25711){
var state_val_25712 = (state_25711[(1)]);
if((state_val_25712 === (7))){
var inst_25635 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
if(cljs.core.truth_(inst_25635)){
var statearr_25713_25759 = state_25711__$1;
(statearr_25713_25759[(1)] = (8));

} else {
var statearr_25714_25760 = state_25711__$1;
(statearr_25714_25760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (20))){
var inst_25705 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25715_25761 = state_25711__$1;
(statearr_25715_25761[(2)] = inst_25705);

(statearr_25715_25761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (27))){
var inst_25701 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25716_25762 = state_25711__$1;
(statearr_25716_25762[(2)] = inst_25701);

(statearr_25716_25762[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (1))){
var inst_25628 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25711__$1 = state_25711;
if(cljs.core.truth_(inst_25628)){
var statearr_25717_25763 = state_25711__$1;
(statearr_25717_25763[(1)] = (2));

} else {
var statearr_25718_25764 = state_25711__$1;
(statearr_25718_25764[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (24))){
var inst_25703 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25719_25765 = state_25711__$1;
(statearr_25719_25765[(2)] = inst_25703);

(statearr_25719_25765[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (4))){
var inst_25709 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25711__$1,inst_25709);
} else {
if((state_val_25712 === (15))){
var inst_25707 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25720_25766 = state_25711__$1;
(statearr_25720_25766[(2)] = inst_25707);

(statearr_25720_25766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (21))){
var inst_25666 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25721_25767 = state_25711__$1;
(statearr_25721_25767[(2)] = inst_25666);

(statearr_25721_25767[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (31))){
var inst_25690 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25711__$1 = state_25711;
if(cljs.core.truth_(inst_25690)){
var statearr_25722_25768 = state_25711__$1;
(statearr_25722_25768[(1)] = (34));

} else {
var statearr_25723_25769 = state_25711__$1;
(statearr_25723_25769[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (32))){
var inst_25699 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25724_25770 = state_25711__$1;
(statearr_25724_25770[(2)] = inst_25699);

(statearr_25724_25770[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (33))){
var inst_25688 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25725_25771 = state_25711__$1;
(statearr_25725_25771[(2)] = inst_25688);

(statearr_25725_25771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (13))){
var inst_25649 = figwheel.client.heads_up.clear.call(null);
var state_25711__$1 = state_25711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25711__$1,(16),inst_25649);
} else {
if((state_val_25712 === (22))){
var inst_25670 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25671 = figwheel.client.heads_up.append_message.call(null,inst_25670);
var state_25711__$1 = state_25711;
var statearr_25726_25772 = state_25711__$1;
(statearr_25726_25772[(2)] = inst_25671);

(statearr_25726_25772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (36))){
var inst_25697 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25727_25773 = state_25711__$1;
(statearr_25727_25773[(2)] = inst_25697);

(statearr_25727_25773[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (29))){
var inst_25681 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25728_25774 = state_25711__$1;
(statearr_25728_25774[(2)] = inst_25681);

(statearr_25728_25774[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (6))){
var inst_25630 = (state_25711[(7)]);
var state_25711__$1 = state_25711;
var statearr_25729_25775 = state_25711__$1;
(statearr_25729_25775[(2)] = inst_25630);

(statearr_25729_25775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (28))){
var inst_25677 = (state_25711[(2)]);
var inst_25678 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25679 = figwheel.client.heads_up.display_warning.call(null,inst_25678);
var state_25711__$1 = (function (){var statearr_25730 = state_25711;
(statearr_25730[(8)] = inst_25677);

return statearr_25730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25711__$1,(29),inst_25679);
} else {
if((state_val_25712 === (25))){
var inst_25675 = figwheel.client.heads_up.clear.call(null);
var state_25711__$1 = state_25711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25711__$1,(28),inst_25675);
} else {
if((state_val_25712 === (34))){
var inst_25692 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25711__$1 = state_25711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25711__$1,(37),inst_25692);
} else {
if((state_val_25712 === (17))){
var inst_25657 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25731_25776 = state_25711__$1;
(statearr_25731_25776[(2)] = inst_25657);

(statearr_25731_25776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (3))){
var inst_25647 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25711__$1 = state_25711;
if(cljs.core.truth_(inst_25647)){
var statearr_25732_25777 = state_25711__$1;
(statearr_25732_25777[(1)] = (13));

} else {
var statearr_25733_25778 = state_25711__$1;
(statearr_25733_25778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (12))){
var inst_25643 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25734_25779 = state_25711__$1;
(statearr_25734_25779[(2)] = inst_25643);

(statearr_25734_25779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (2))){
var inst_25630 = (state_25711[(7)]);
var inst_25630__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25711__$1 = (function (){var statearr_25735 = state_25711;
(statearr_25735[(7)] = inst_25630__$1);

return statearr_25735;
})();
if(cljs.core.truth_(inst_25630__$1)){
var statearr_25736_25780 = state_25711__$1;
(statearr_25736_25780[(1)] = (5));

} else {
var statearr_25737_25781 = state_25711__$1;
(statearr_25737_25781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (23))){
var inst_25673 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25711__$1 = state_25711;
if(cljs.core.truth_(inst_25673)){
var statearr_25738_25782 = state_25711__$1;
(statearr_25738_25782[(1)] = (25));

} else {
var statearr_25739_25783 = state_25711__$1;
(statearr_25739_25783[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (35))){
var state_25711__$1 = state_25711;
var statearr_25740_25784 = state_25711__$1;
(statearr_25740_25784[(2)] = null);

(statearr_25740_25784[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (19))){
var inst_25668 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25711__$1 = state_25711;
if(cljs.core.truth_(inst_25668)){
var statearr_25741_25785 = state_25711__$1;
(statearr_25741_25785[(1)] = (22));

} else {
var statearr_25742_25786 = state_25711__$1;
(statearr_25742_25786[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (11))){
var inst_25639 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25743_25787 = state_25711__$1;
(statearr_25743_25787[(2)] = inst_25639);

(statearr_25743_25787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (9))){
var inst_25641 = figwheel.client.heads_up.clear.call(null);
var state_25711__$1 = state_25711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25711__$1,(12),inst_25641);
} else {
if((state_val_25712 === (5))){
var inst_25632 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25711__$1 = state_25711;
var statearr_25744_25788 = state_25711__$1;
(statearr_25744_25788[(2)] = inst_25632);

(statearr_25744_25788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (14))){
var inst_25659 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25711__$1 = state_25711;
if(cljs.core.truth_(inst_25659)){
var statearr_25745_25789 = state_25711__$1;
(statearr_25745_25789[(1)] = (18));

} else {
var statearr_25746_25790 = state_25711__$1;
(statearr_25746_25790[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (26))){
var inst_25683 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25711__$1 = state_25711;
if(cljs.core.truth_(inst_25683)){
var statearr_25747_25791 = state_25711__$1;
(statearr_25747_25791[(1)] = (30));

} else {
var statearr_25748_25792 = state_25711__$1;
(statearr_25748_25792[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (16))){
var inst_25651 = (state_25711[(2)]);
var inst_25652 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25653 = figwheel.client.format_messages.call(null,inst_25652);
var inst_25654 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25655 = figwheel.client.heads_up.display_error.call(null,inst_25653,inst_25654);
var state_25711__$1 = (function (){var statearr_25749 = state_25711;
(statearr_25749[(9)] = inst_25651);

return statearr_25749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25711__$1,(17),inst_25655);
} else {
if((state_val_25712 === (30))){
var inst_25685 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25686 = figwheel.client.heads_up.display_warning.call(null,inst_25685);
var state_25711__$1 = state_25711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25711__$1,(33),inst_25686);
} else {
if((state_val_25712 === (10))){
var inst_25645 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25750_25793 = state_25711__$1;
(statearr_25750_25793[(2)] = inst_25645);

(statearr_25750_25793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (18))){
var inst_25661 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25662 = figwheel.client.format_messages.call(null,inst_25661);
var inst_25663 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25664 = figwheel.client.heads_up.display_error.call(null,inst_25662,inst_25663);
var state_25711__$1 = state_25711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25711__$1,(21),inst_25664);
} else {
if((state_val_25712 === (37))){
var inst_25694 = (state_25711[(2)]);
var state_25711__$1 = state_25711;
var statearr_25751_25794 = state_25711__$1;
(statearr_25751_25794[(2)] = inst_25694);

(statearr_25751_25794[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25712 === (8))){
var inst_25637 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25711__$1 = state_25711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25711__$1,(11),inst_25637);
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
});})(c__20718__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20606__auto__,c__20718__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto____0 = (function (){
var statearr_25755 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25755[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto__);

(statearr_25755[(1)] = (1));

return statearr_25755;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto____1 = (function (state_25711){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_25711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e25756){if((e25756 instanceof Object)){
var ex__20610__auto__ = e25756;
var statearr_25757_25795 = state_25711;
(statearr_25757_25795[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25796 = state_25711;
state_25711 = G__25796;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto__ = function(state_25711){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto____1.call(this,state_25711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__,msg_hist,msg_names,msg))
})();
var state__20720__auto__ = (function (){var statearr_25758 = f__20719__auto__.call(null);
(statearr_25758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_25758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__,msg_hist,msg_names,msg))
);

return c__20718__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20718__auto___25859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___25859,ch){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___25859,ch){
return (function (state_25842){
var state_val_25843 = (state_25842[(1)]);
if((state_val_25843 === (1))){
var state_25842__$1 = state_25842;
var statearr_25844_25860 = state_25842__$1;
(statearr_25844_25860[(2)] = null);

(statearr_25844_25860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25843 === (2))){
var state_25842__$1 = state_25842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25842__$1,(4),ch);
} else {
if((state_val_25843 === (3))){
var inst_25840 = (state_25842[(2)]);
var state_25842__$1 = state_25842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25842__$1,inst_25840);
} else {
if((state_val_25843 === (4))){
var inst_25830 = (state_25842[(7)]);
var inst_25830__$1 = (state_25842[(2)]);
var state_25842__$1 = (function (){var statearr_25845 = state_25842;
(statearr_25845[(7)] = inst_25830__$1);

return statearr_25845;
})();
if(cljs.core.truth_(inst_25830__$1)){
var statearr_25846_25861 = state_25842__$1;
(statearr_25846_25861[(1)] = (5));

} else {
var statearr_25847_25862 = state_25842__$1;
(statearr_25847_25862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25843 === (5))){
var inst_25830 = (state_25842[(7)]);
var inst_25832 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25830);
var state_25842__$1 = state_25842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25842__$1,(8),inst_25832);
} else {
if((state_val_25843 === (6))){
var state_25842__$1 = state_25842;
var statearr_25848_25863 = state_25842__$1;
(statearr_25848_25863[(2)] = null);

(statearr_25848_25863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25843 === (7))){
var inst_25838 = (state_25842[(2)]);
var state_25842__$1 = state_25842;
var statearr_25849_25864 = state_25842__$1;
(statearr_25849_25864[(2)] = inst_25838);

(statearr_25849_25864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25843 === (8))){
var inst_25834 = (state_25842[(2)]);
var state_25842__$1 = (function (){var statearr_25850 = state_25842;
(statearr_25850[(8)] = inst_25834);

return statearr_25850;
})();
var statearr_25851_25865 = state_25842__$1;
(statearr_25851_25865[(2)] = null);

(statearr_25851_25865[(1)] = (2));


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
});})(c__20718__auto___25859,ch))
;
return ((function (switch__20606__auto__,c__20718__auto___25859,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20607__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20607__auto____0 = (function (){
var statearr_25855 = [null,null,null,null,null,null,null,null,null];
(statearr_25855[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20607__auto__);

(statearr_25855[(1)] = (1));

return statearr_25855;
});
var figwheel$client$heads_up_plugin_$_state_machine__20607__auto____1 = (function (state_25842){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_25842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e25856){if((e25856 instanceof Object)){
var ex__20610__auto__ = e25856;
var statearr_25857_25866 = state_25842;
(statearr_25857_25866[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25867 = state_25842;
state_25842 = G__25867;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20607__auto__ = function(state_25842){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20607__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20607__auto____1.call(this,state_25842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20607__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20607__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___25859,ch))
})();
var state__20720__auto__ = (function (){var statearr_25858 = f__20719__auto__.call(null);
(statearr_25858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___25859);

return statearr_25858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___25859,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__){
return (function (state_25888){
var state_val_25889 = (state_25888[(1)]);
if((state_val_25889 === (1))){
var inst_25883 = cljs.core.async.timeout.call(null,(3000));
var state_25888__$1 = state_25888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25888__$1,(2),inst_25883);
} else {
if((state_val_25889 === (2))){
var inst_25885 = (state_25888[(2)]);
var inst_25886 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25888__$1 = (function (){var statearr_25890 = state_25888;
(statearr_25890[(7)] = inst_25885);

return statearr_25890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25888__$1,inst_25886);
} else {
return null;
}
}
});})(c__20718__auto__))
;
return ((function (switch__20606__auto__,c__20718__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20607__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20607__auto____0 = (function (){
var statearr_25894 = [null,null,null,null,null,null,null,null];
(statearr_25894[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20607__auto__);

(statearr_25894[(1)] = (1));

return statearr_25894;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20607__auto____1 = (function (state_25888){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_25888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e25895){if((e25895 instanceof Object)){
var ex__20610__auto__ = e25895;
var statearr_25896_25898 = state_25888;
(statearr_25896_25898[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25899 = state_25888;
state_25888 = G__25899;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20607__auto__ = function(state_25888){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20607__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20607__auto____1.call(this,state_25888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20607__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20607__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__))
})();
var state__20720__auto__ = (function (){var statearr_25897 = f__20719__auto__.call(null);
(statearr_25897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_25897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__))
);

return c__20718__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25900){
var map__25907 = p__25900;
var map__25907__$1 = ((((!((map__25907 == null)))?((((map__25907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25907):map__25907);
var ed = map__25907__$1;
var formatted_exception = cljs.core.get.call(null,map__25907__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25907__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25907__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25909_25913 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25910_25914 = null;
var count__25911_25915 = (0);
var i__25912_25916 = (0);
while(true){
if((i__25912_25916 < count__25911_25915)){
var msg_25917 = cljs.core._nth.call(null,chunk__25910_25914,i__25912_25916);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25917);

var G__25918 = seq__25909_25913;
var G__25919 = chunk__25910_25914;
var G__25920 = count__25911_25915;
var G__25921 = (i__25912_25916 + (1));
seq__25909_25913 = G__25918;
chunk__25910_25914 = G__25919;
count__25911_25915 = G__25920;
i__25912_25916 = G__25921;
continue;
} else {
var temp__4425__auto___25922 = cljs.core.seq.call(null,seq__25909_25913);
if(temp__4425__auto___25922){
var seq__25909_25923__$1 = temp__4425__auto___25922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25909_25923__$1)){
var c__18961__auto___25924 = cljs.core.chunk_first.call(null,seq__25909_25923__$1);
var G__25925 = cljs.core.chunk_rest.call(null,seq__25909_25923__$1);
var G__25926 = c__18961__auto___25924;
var G__25927 = cljs.core.count.call(null,c__18961__auto___25924);
var G__25928 = (0);
seq__25909_25913 = G__25925;
chunk__25910_25914 = G__25926;
count__25911_25915 = G__25927;
i__25912_25916 = G__25928;
continue;
} else {
var msg_25929 = cljs.core.first.call(null,seq__25909_25923__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25929);

var G__25930 = cljs.core.next.call(null,seq__25909_25923__$1);
var G__25931 = null;
var G__25932 = (0);
var G__25933 = (0);
seq__25909_25913 = G__25930;
chunk__25910_25914 = G__25931;
count__25911_25915 = G__25932;
i__25912_25916 = G__25933;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25934){
var map__25937 = p__25934;
var map__25937__$1 = ((((!((map__25937 == null)))?((((map__25937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25937):map__25937);
var w = map__25937__$1;
var message = cljs.core.get.call(null,map__25937__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18146__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18146__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18146__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25945 = cljs.core.seq.call(null,plugins);
var chunk__25946 = null;
var count__25947 = (0);
var i__25948 = (0);
while(true){
if((i__25948 < count__25947)){
var vec__25949 = cljs.core._nth.call(null,chunk__25946,i__25948);
var k = cljs.core.nth.call(null,vec__25949,(0),null);
var plugin = cljs.core.nth.call(null,vec__25949,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25951 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25945,chunk__25946,count__25947,i__25948,pl_25951,vec__25949,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25951.call(null,msg_hist);
});})(seq__25945,chunk__25946,count__25947,i__25948,pl_25951,vec__25949,k,plugin))
);
} else {
}

var G__25952 = seq__25945;
var G__25953 = chunk__25946;
var G__25954 = count__25947;
var G__25955 = (i__25948 + (1));
seq__25945 = G__25952;
chunk__25946 = G__25953;
count__25947 = G__25954;
i__25948 = G__25955;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25945);
if(temp__4425__auto__){
var seq__25945__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25945__$1)){
var c__18961__auto__ = cljs.core.chunk_first.call(null,seq__25945__$1);
var G__25956 = cljs.core.chunk_rest.call(null,seq__25945__$1);
var G__25957 = c__18961__auto__;
var G__25958 = cljs.core.count.call(null,c__18961__auto__);
var G__25959 = (0);
seq__25945 = G__25956;
chunk__25946 = G__25957;
count__25947 = G__25958;
i__25948 = G__25959;
continue;
} else {
var vec__25950 = cljs.core.first.call(null,seq__25945__$1);
var k = cljs.core.nth.call(null,vec__25950,(0),null);
var plugin = cljs.core.nth.call(null,vec__25950,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25960 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25945,chunk__25946,count__25947,i__25948,pl_25960,vec__25950,k,plugin,seq__25945__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25960.call(null,msg_hist);
});})(seq__25945,chunk__25946,count__25947,i__25948,pl_25960,vec__25950,k,plugin,seq__25945__$1,temp__4425__auto__))
);
} else {
}

var G__25961 = cljs.core.next.call(null,seq__25945__$1);
var G__25962 = null;
var G__25963 = (0);
var G__25964 = (0);
seq__25945 = G__25961;
chunk__25946 = G__25962;
count__25947 = G__25963;
i__25948 = G__25964;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25965 = [];
var len__19216__auto___25968 = arguments.length;
var i__19217__auto___25969 = (0);
while(true){
if((i__19217__auto___25969 < len__19216__auto___25968)){
args25965.push((arguments[i__19217__auto___25969]));

var G__25970 = (i__19217__auto___25969 + (1));
i__19217__auto___25969 = G__25970;
continue;
} else {
}
break;
}

var G__25967 = args25965.length;
switch (G__25967) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25965.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19223__auto__ = [];
var len__19216__auto___25976 = arguments.length;
var i__19217__auto___25977 = (0);
while(true){
if((i__19217__auto___25977 < len__19216__auto___25976)){
args__19223__auto__.push((arguments[i__19217__auto___25977]));

var G__25978 = (i__19217__auto___25977 + (1));
i__19217__auto___25977 = G__25978;
continue;
} else {
}
break;
}

var argseq__19224__auto__ = ((((0) < args__19223__auto__.length))?(new cljs.core.IndexedSeq(args__19223__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19224__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25973){
var map__25974 = p__25973;
var map__25974__$1 = ((((!((map__25974 == null)))?((((map__25974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25974):map__25974);
var opts = map__25974__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25972){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25972));
});

//# sourceMappingURL=client.js.map