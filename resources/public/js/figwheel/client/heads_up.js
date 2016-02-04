// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19223__auto__ = [];
var len__19216__auto___25020 = arguments.length;
var i__19217__auto___25021 = (0);
while(true){
if((i__19217__auto___25021 < len__19216__auto___25020)){
args__19223__auto__.push((arguments[i__19217__auto___25021]));

var G__25022 = (i__19217__auto___25021 + (1));
i__19217__auto___25021 = G__25022;
continue;
} else {
}
break;
}

var argseq__19224__auto__ = ((((2) < args__19223__auto__.length))?(new cljs.core.IndexedSeq(args__19223__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19224__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25012_25023 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25013_25024 = null;
var count__25014_25025 = (0);
var i__25015_25026 = (0);
while(true){
if((i__25015_25026 < count__25014_25025)){
var k_25027 = cljs.core._nth.call(null,chunk__25013_25024,i__25015_25026);
e.setAttribute(cljs.core.name.call(null,k_25027),cljs.core.get.call(null,attrs,k_25027));

var G__25028 = seq__25012_25023;
var G__25029 = chunk__25013_25024;
var G__25030 = count__25014_25025;
var G__25031 = (i__25015_25026 + (1));
seq__25012_25023 = G__25028;
chunk__25013_25024 = G__25029;
count__25014_25025 = G__25030;
i__25015_25026 = G__25031;
continue;
} else {
var temp__4425__auto___25032 = cljs.core.seq.call(null,seq__25012_25023);
if(temp__4425__auto___25032){
var seq__25012_25033__$1 = temp__4425__auto___25032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25012_25033__$1)){
var c__18961__auto___25034 = cljs.core.chunk_first.call(null,seq__25012_25033__$1);
var G__25035 = cljs.core.chunk_rest.call(null,seq__25012_25033__$1);
var G__25036 = c__18961__auto___25034;
var G__25037 = cljs.core.count.call(null,c__18961__auto___25034);
var G__25038 = (0);
seq__25012_25023 = G__25035;
chunk__25013_25024 = G__25036;
count__25014_25025 = G__25037;
i__25015_25026 = G__25038;
continue;
} else {
var k_25039 = cljs.core.first.call(null,seq__25012_25033__$1);
e.setAttribute(cljs.core.name.call(null,k_25039),cljs.core.get.call(null,attrs,k_25039));

var G__25040 = cljs.core.next.call(null,seq__25012_25033__$1);
var G__25041 = null;
var G__25042 = (0);
var G__25043 = (0);
seq__25012_25023 = G__25040;
chunk__25013_25024 = G__25041;
count__25014_25025 = G__25042;
i__25015_25026 = G__25043;
continue;
}
} else {
}
}
break;
}

var seq__25016_25044 = cljs.core.seq.call(null,children);
var chunk__25017_25045 = null;
var count__25018_25046 = (0);
var i__25019_25047 = (0);
while(true){
if((i__25019_25047 < count__25018_25046)){
var ch_25048 = cljs.core._nth.call(null,chunk__25017_25045,i__25019_25047);
e.appendChild(ch_25048);

var G__25049 = seq__25016_25044;
var G__25050 = chunk__25017_25045;
var G__25051 = count__25018_25046;
var G__25052 = (i__25019_25047 + (1));
seq__25016_25044 = G__25049;
chunk__25017_25045 = G__25050;
count__25018_25046 = G__25051;
i__25019_25047 = G__25052;
continue;
} else {
var temp__4425__auto___25053 = cljs.core.seq.call(null,seq__25016_25044);
if(temp__4425__auto___25053){
var seq__25016_25054__$1 = temp__4425__auto___25053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25016_25054__$1)){
var c__18961__auto___25055 = cljs.core.chunk_first.call(null,seq__25016_25054__$1);
var G__25056 = cljs.core.chunk_rest.call(null,seq__25016_25054__$1);
var G__25057 = c__18961__auto___25055;
var G__25058 = cljs.core.count.call(null,c__18961__auto___25055);
var G__25059 = (0);
seq__25016_25044 = G__25056;
chunk__25017_25045 = G__25057;
count__25018_25046 = G__25058;
i__25019_25047 = G__25059;
continue;
} else {
var ch_25060 = cljs.core.first.call(null,seq__25016_25054__$1);
e.appendChild(ch_25060);

var G__25061 = cljs.core.next.call(null,seq__25016_25054__$1);
var G__25062 = null;
var G__25063 = (0);
var G__25064 = (0);
seq__25016_25044 = G__25061;
chunk__25017_25045 = G__25062;
count__25018_25046 = G__25063;
i__25019_25047 = G__25064;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25009){
var G__25010 = cljs.core.first.call(null,seq25009);
var seq25009__$1 = cljs.core.next.call(null,seq25009);
var G__25011 = cljs.core.first.call(null,seq25009__$1);
var seq25009__$2 = cljs.core.next.call(null,seq25009__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25010,G__25011,seq25009__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19072__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19073__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19074__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19075__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19071__auto__,prefer_table__19072__auto__,method_cache__19073__auto__,cached_hierarchy__19074__auto__,hierarchy__19075__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19071__auto__,prefer_table__19072__auto__,method_cache__19073__auto__,cached_hierarchy__19074__auto__,hierarchy__19075__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19075__auto__,method_table__19071__auto__,prefer_table__19072__auto__,method_cache__19073__auto__,cached_hierarchy__19074__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25065 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25065.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25065.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25065.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25065);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25066,st_map){
var map__25071 = p__25066;
var map__25071__$1 = ((((!((map__25071 == null)))?((((map__25071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25071):map__25071);
var container_el = cljs.core.get.call(null,map__25071__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25071,map__25071__$1,container_el){
return (function (p__25073){
var vec__25074 = p__25073;
var k = cljs.core.nth.call(null,vec__25074,(0),null);
var v = cljs.core.nth.call(null,vec__25074,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25071,map__25071__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25075,dom_str){
var map__25078 = p__25075;
var map__25078__$1 = ((((!((map__25078 == null)))?((((map__25078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25078):map__25078);
var c = map__25078__$1;
var content_area_el = cljs.core.get.call(null,map__25078__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25080){
var map__25083 = p__25080;
var map__25083__$1 = ((((!((map__25083 == null)))?((((map__25083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25083):map__25083);
var content_area_el = cljs.core.get.call(null,map__25083__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__){
return (function (state_25126){
var state_val_25127 = (state_25126[(1)]);
if((state_val_25127 === (1))){
var inst_25111 = (state_25126[(7)]);
var inst_25111__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25112 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25113 = ["10px","10px","100%","68px","1.0"];
var inst_25114 = cljs.core.PersistentHashMap.fromArrays(inst_25112,inst_25113);
var inst_25115 = cljs.core.merge.call(null,inst_25114,style);
var inst_25116 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25111__$1,inst_25115);
var inst_25117 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25111__$1,msg);
var inst_25118 = cljs.core.async.timeout.call(null,(300));
var state_25126__$1 = (function (){var statearr_25128 = state_25126;
(statearr_25128[(8)] = inst_25116);

(statearr_25128[(9)] = inst_25117);

(statearr_25128[(7)] = inst_25111__$1);

return statearr_25128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25126__$1,(2),inst_25118);
} else {
if((state_val_25127 === (2))){
var inst_25111 = (state_25126[(7)]);
var inst_25120 = (state_25126[(2)]);
var inst_25121 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25122 = ["auto"];
var inst_25123 = cljs.core.PersistentHashMap.fromArrays(inst_25121,inst_25122);
var inst_25124 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25111,inst_25123);
var state_25126__$1 = (function (){var statearr_25129 = state_25126;
(statearr_25129[(10)] = inst_25120);

return statearr_25129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25126__$1,inst_25124);
} else {
return null;
}
}
});})(c__20718__auto__))
;
return ((function (switch__20606__auto__,c__20718__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto____0 = (function (){
var statearr_25133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25133[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto__);

(statearr_25133[(1)] = (1));

return statearr_25133;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto____1 = (function (state_25126){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_25126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e25134){if((e25134 instanceof Object)){
var ex__20610__auto__ = e25134;
var statearr_25135_25137 = state_25126;
(statearr_25135_25137[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25138 = state_25126;
state_25126 = G__25138;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto__ = function(state_25126){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto____1.call(this,state_25126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__))
})();
var state__20720__auto__ = (function (){var statearr_25136 = f__20719__auto__.call(null);
(statearr_25136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_25136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__))
);

return c__20718__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25140 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25140,(0),null);
var ln = cljs.core.nth.call(null,vec__25140,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25143 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25143,(0),null);
var file_line = cljs.core.nth.call(null,vec__25143,(1),null);
var file_column = cljs.core.nth.call(null,vec__25143,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25143,file_name,file_line,file_column){
return (function (p1__25141_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25141_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25143,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18158__auto__ = file_line;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
var and__18146__auto__ = cause;
if(cljs.core.truth_(and__18146__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18146__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25146 = figwheel.client.heads_up.ensure_container.call(null);
var map__25146__$1 = ((((!((map__25146 == null)))?((((map__25146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25146):map__25146);
var content_area_el = cljs.core.get.call(null,map__25146__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__){
return (function (state_25194){
var state_val_25195 = (state_25194[(1)]);
if((state_val_25195 === (1))){
var inst_25177 = (state_25194[(7)]);
var inst_25177__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25178 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25179 = ["0.0"];
var inst_25180 = cljs.core.PersistentHashMap.fromArrays(inst_25178,inst_25179);
var inst_25181 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25177__$1,inst_25180);
var inst_25182 = cljs.core.async.timeout.call(null,(300));
var state_25194__$1 = (function (){var statearr_25196 = state_25194;
(statearr_25196[(8)] = inst_25181);

(statearr_25196[(7)] = inst_25177__$1);

return statearr_25196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25194__$1,(2),inst_25182);
} else {
if((state_val_25195 === (2))){
var inst_25177 = (state_25194[(7)]);
var inst_25184 = (state_25194[(2)]);
var inst_25185 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25186 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25187 = cljs.core.PersistentHashMap.fromArrays(inst_25185,inst_25186);
var inst_25188 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25177,inst_25187);
var inst_25189 = cljs.core.async.timeout.call(null,(200));
var state_25194__$1 = (function (){var statearr_25197 = state_25194;
(statearr_25197[(9)] = inst_25184);

(statearr_25197[(10)] = inst_25188);

return statearr_25197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25194__$1,(3),inst_25189);
} else {
if((state_val_25195 === (3))){
var inst_25177 = (state_25194[(7)]);
var inst_25191 = (state_25194[(2)]);
var inst_25192 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25177,"");
var state_25194__$1 = (function (){var statearr_25198 = state_25194;
(statearr_25198[(11)] = inst_25191);

return statearr_25198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25194__$1,inst_25192);
} else {
return null;
}
}
}
});})(c__20718__auto__))
;
return ((function (switch__20606__auto__,c__20718__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20607__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20607__auto____0 = (function (){
var statearr_25202 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25202[(0)] = figwheel$client$heads_up$clear_$_state_machine__20607__auto__);

(statearr_25202[(1)] = (1));

return statearr_25202;
});
var figwheel$client$heads_up$clear_$_state_machine__20607__auto____1 = (function (state_25194){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_25194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e25203){if((e25203 instanceof Object)){
var ex__20610__auto__ = e25203;
var statearr_25204_25206 = state_25194;
(statearr_25204_25206[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25207 = state_25194;
state_25194 = G__25207;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20607__auto__ = function(state_25194){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20607__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20607__auto____1.call(this,state_25194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20607__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20607__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__))
})();
var state__20720__auto__ = (function (){var statearr_25205 = f__20719__auto__.call(null);
(statearr_25205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_25205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__))
);

return c__20718__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__){
return (function (state_25239){
var state_val_25240 = (state_25239[(1)]);
if((state_val_25240 === (1))){
var inst_25229 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25239__$1 = state_25239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25239__$1,(2),inst_25229);
} else {
if((state_val_25240 === (2))){
var inst_25231 = (state_25239[(2)]);
var inst_25232 = cljs.core.async.timeout.call(null,(400));
var state_25239__$1 = (function (){var statearr_25241 = state_25239;
(statearr_25241[(7)] = inst_25231);

return statearr_25241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25239__$1,(3),inst_25232);
} else {
if((state_val_25240 === (3))){
var inst_25234 = (state_25239[(2)]);
var inst_25235 = figwheel.client.heads_up.clear.call(null);
var state_25239__$1 = (function (){var statearr_25242 = state_25239;
(statearr_25242[(8)] = inst_25234);

return statearr_25242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25239__$1,(4),inst_25235);
} else {
if((state_val_25240 === (4))){
var inst_25237 = (state_25239[(2)]);
var state_25239__$1 = state_25239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25239__$1,inst_25237);
} else {
return null;
}
}
}
}
});})(c__20718__auto__))
;
return ((function (switch__20606__auto__,c__20718__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto____0 = (function (){
var statearr_25246 = [null,null,null,null,null,null,null,null,null];
(statearr_25246[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto__);

(statearr_25246[(1)] = (1));

return statearr_25246;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto____1 = (function (state_25239){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_25239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e25247){if((e25247 instanceof Object)){
var ex__20610__auto__ = e25247;
var statearr_25248_25250 = state_25239;
(statearr_25248_25250[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25251 = state_25239;
state_25239 = G__25251;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto__ = function(state_25239){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto____1.call(this,state_25239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__))
})();
var state__20720__auto__ = (function (){var statearr_25249 = f__20719__auto__.call(null);
(statearr_25249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_25249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__))
);

return c__20718__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map