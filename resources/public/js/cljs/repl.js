// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24950_24964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24951_24965 = null;
var count__24952_24966 = (0);
var i__24953_24967 = (0);
while(true){
if((i__24953_24967 < count__24952_24966)){
var f_24968 = cljs.core._nth.call(null,chunk__24951_24965,i__24953_24967);
cljs.core.println.call(null,"  ",f_24968);

var G__24969 = seq__24950_24964;
var G__24970 = chunk__24951_24965;
var G__24971 = count__24952_24966;
var G__24972 = (i__24953_24967 + (1));
seq__24950_24964 = G__24969;
chunk__24951_24965 = G__24970;
count__24952_24966 = G__24971;
i__24953_24967 = G__24972;
continue;
} else {
var temp__4425__auto___24973 = cljs.core.seq.call(null,seq__24950_24964);
if(temp__4425__auto___24973){
var seq__24950_24974__$1 = temp__4425__auto___24973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24950_24974__$1)){
var c__18961__auto___24975 = cljs.core.chunk_first.call(null,seq__24950_24974__$1);
var G__24976 = cljs.core.chunk_rest.call(null,seq__24950_24974__$1);
var G__24977 = c__18961__auto___24975;
var G__24978 = cljs.core.count.call(null,c__18961__auto___24975);
var G__24979 = (0);
seq__24950_24964 = G__24976;
chunk__24951_24965 = G__24977;
count__24952_24966 = G__24978;
i__24953_24967 = G__24979;
continue;
} else {
var f_24980 = cljs.core.first.call(null,seq__24950_24974__$1);
cljs.core.println.call(null,"  ",f_24980);

var G__24981 = cljs.core.next.call(null,seq__24950_24974__$1);
var G__24982 = null;
var G__24983 = (0);
var G__24984 = (0);
seq__24950_24964 = G__24981;
chunk__24951_24965 = G__24982;
count__24952_24966 = G__24983;
i__24953_24967 = G__24984;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24985 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18158__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24985);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24985)))?cljs.core.second.call(null,arglists_24985):arglists_24985));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24954 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24955 = null;
var count__24956 = (0);
var i__24957 = (0);
while(true){
if((i__24957 < count__24956)){
var vec__24958 = cljs.core._nth.call(null,chunk__24955,i__24957);
var name = cljs.core.nth.call(null,vec__24958,(0),null);
var map__24959 = cljs.core.nth.call(null,vec__24958,(1),null);
var map__24959__$1 = ((((!((map__24959 == null)))?((((map__24959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24959):map__24959);
var doc = cljs.core.get.call(null,map__24959__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24959__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24986 = seq__24954;
var G__24987 = chunk__24955;
var G__24988 = count__24956;
var G__24989 = (i__24957 + (1));
seq__24954 = G__24986;
chunk__24955 = G__24987;
count__24956 = G__24988;
i__24957 = G__24989;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24954);
if(temp__4425__auto__){
var seq__24954__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24954__$1)){
var c__18961__auto__ = cljs.core.chunk_first.call(null,seq__24954__$1);
var G__24990 = cljs.core.chunk_rest.call(null,seq__24954__$1);
var G__24991 = c__18961__auto__;
var G__24992 = cljs.core.count.call(null,c__18961__auto__);
var G__24993 = (0);
seq__24954 = G__24990;
chunk__24955 = G__24991;
count__24956 = G__24992;
i__24957 = G__24993;
continue;
} else {
var vec__24961 = cljs.core.first.call(null,seq__24954__$1);
var name = cljs.core.nth.call(null,vec__24961,(0),null);
var map__24962 = cljs.core.nth.call(null,vec__24961,(1),null);
var map__24962__$1 = ((((!((map__24962 == null)))?((((map__24962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24962):map__24962);
var doc = cljs.core.get.call(null,map__24962__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24962__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24994 = cljs.core.next.call(null,seq__24954__$1);
var G__24995 = null;
var G__24996 = (0);
var G__24997 = (0);
seq__24954 = G__24994;
chunk__24955 = G__24995;
count__24956 = G__24996;
i__24957 = G__24997;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map