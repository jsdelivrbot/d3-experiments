// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18158__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18158__auto__){
return or__18158__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18158__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23926_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23926_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23931 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23932 = null;
var count__23933 = (0);
var i__23934 = (0);
while(true){
if((i__23934 < count__23933)){
var n = cljs.core._nth.call(null,chunk__23932,i__23934);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23935 = seq__23931;
var G__23936 = chunk__23932;
var G__23937 = count__23933;
var G__23938 = (i__23934 + (1));
seq__23931 = G__23935;
chunk__23932 = G__23936;
count__23933 = G__23937;
i__23934 = G__23938;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23931);
if(temp__4425__auto__){
var seq__23931__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23931__$1)){
var c__18961__auto__ = cljs.core.chunk_first.call(null,seq__23931__$1);
var G__23939 = cljs.core.chunk_rest.call(null,seq__23931__$1);
var G__23940 = c__18961__auto__;
var G__23941 = cljs.core.count.call(null,c__18961__auto__);
var G__23942 = (0);
seq__23931 = G__23939;
chunk__23932 = G__23940;
count__23933 = G__23941;
i__23934 = G__23942;
continue;
} else {
var n = cljs.core.first.call(null,seq__23931__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23943 = cljs.core.next.call(null,seq__23931__$1);
var G__23944 = null;
var G__23945 = (0);
var G__23946 = (0);
seq__23931 = G__23943;
chunk__23932 = G__23944;
count__23933 = G__23945;
i__23934 = G__23946;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23985_23992 = cljs.core.seq.call(null,deps);
var chunk__23986_23993 = null;
var count__23987_23994 = (0);
var i__23988_23995 = (0);
while(true){
if((i__23988_23995 < count__23987_23994)){
var dep_23996 = cljs.core._nth.call(null,chunk__23986_23993,i__23988_23995);
topo_sort_helper_STAR_.call(null,dep_23996,(depth + (1)),state);

var G__23997 = seq__23985_23992;
var G__23998 = chunk__23986_23993;
var G__23999 = count__23987_23994;
var G__24000 = (i__23988_23995 + (1));
seq__23985_23992 = G__23997;
chunk__23986_23993 = G__23998;
count__23987_23994 = G__23999;
i__23988_23995 = G__24000;
continue;
} else {
var temp__4425__auto___24001 = cljs.core.seq.call(null,seq__23985_23992);
if(temp__4425__auto___24001){
var seq__23985_24002__$1 = temp__4425__auto___24001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23985_24002__$1)){
var c__18961__auto___24003 = cljs.core.chunk_first.call(null,seq__23985_24002__$1);
var G__24004 = cljs.core.chunk_rest.call(null,seq__23985_24002__$1);
var G__24005 = c__18961__auto___24003;
var G__24006 = cljs.core.count.call(null,c__18961__auto___24003);
var G__24007 = (0);
seq__23985_23992 = G__24004;
chunk__23986_23993 = G__24005;
count__23987_23994 = G__24006;
i__23988_23995 = G__24007;
continue;
} else {
var dep_24008 = cljs.core.first.call(null,seq__23985_24002__$1);
topo_sort_helper_STAR_.call(null,dep_24008,(depth + (1)),state);

var G__24009 = cljs.core.next.call(null,seq__23985_24002__$1);
var G__24010 = null;
var G__24011 = (0);
var G__24012 = (0);
seq__23985_23992 = G__24009;
chunk__23986_23993 = G__24010;
count__23987_23994 = G__24011;
i__23988_23995 = G__24012;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23989){
var vec__23991 = p__23989;
var x = cljs.core.nth.call(null,vec__23991,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23991,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23991,x,xs,get_deps__$1){
return (function (p1__23947_SHARP_){
return clojure.set.difference.call(null,p1__23947_SHARP_,x);
});})(vec__23991,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24025 = cljs.core.seq.call(null,provides);
var chunk__24026 = null;
var count__24027 = (0);
var i__24028 = (0);
while(true){
if((i__24028 < count__24027)){
var prov = cljs.core._nth.call(null,chunk__24026,i__24028);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24029_24037 = cljs.core.seq.call(null,requires);
var chunk__24030_24038 = null;
var count__24031_24039 = (0);
var i__24032_24040 = (0);
while(true){
if((i__24032_24040 < count__24031_24039)){
var req_24041 = cljs.core._nth.call(null,chunk__24030_24038,i__24032_24040);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24041,prov);

var G__24042 = seq__24029_24037;
var G__24043 = chunk__24030_24038;
var G__24044 = count__24031_24039;
var G__24045 = (i__24032_24040 + (1));
seq__24029_24037 = G__24042;
chunk__24030_24038 = G__24043;
count__24031_24039 = G__24044;
i__24032_24040 = G__24045;
continue;
} else {
var temp__4425__auto___24046 = cljs.core.seq.call(null,seq__24029_24037);
if(temp__4425__auto___24046){
var seq__24029_24047__$1 = temp__4425__auto___24046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24029_24047__$1)){
var c__18961__auto___24048 = cljs.core.chunk_first.call(null,seq__24029_24047__$1);
var G__24049 = cljs.core.chunk_rest.call(null,seq__24029_24047__$1);
var G__24050 = c__18961__auto___24048;
var G__24051 = cljs.core.count.call(null,c__18961__auto___24048);
var G__24052 = (0);
seq__24029_24037 = G__24049;
chunk__24030_24038 = G__24050;
count__24031_24039 = G__24051;
i__24032_24040 = G__24052;
continue;
} else {
var req_24053 = cljs.core.first.call(null,seq__24029_24047__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24053,prov);

var G__24054 = cljs.core.next.call(null,seq__24029_24047__$1);
var G__24055 = null;
var G__24056 = (0);
var G__24057 = (0);
seq__24029_24037 = G__24054;
chunk__24030_24038 = G__24055;
count__24031_24039 = G__24056;
i__24032_24040 = G__24057;
continue;
}
} else {
}
}
break;
}

var G__24058 = seq__24025;
var G__24059 = chunk__24026;
var G__24060 = count__24027;
var G__24061 = (i__24028 + (1));
seq__24025 = G__24058;
chunk__24026 = G__24059;
count__24027 = G__24060;
i__24028 = G__24061;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24025);
if(temp__4425__auto__){
var seq__24025__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24025__$1)){
var c__18961__auto__ = cljs.core.chunk_first.call(null,seq__24025__$1);
var G__24062 = cljs.core.chunk_rest.call(null,seq__24025__$1);
var G__24063 = c__18961__auto__;
var G__24064 = cljs.core.count.call(null,c__18961__auto__);
var G__24065 = (0);
seq__24025 = G__24062;
chunk__24026 = G__24063;
count__24027 = G__24064;
i__24028 = G__24065;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24025__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24033_24066 = cljs.core.seq.call(null,requires);
var chunk__24034_24067 = null;
var count__24035_24068 = (0);
var i__24036_24069 = (0);
while(true){
if((i__24036_24069 < count__24035_24068)){
var req_24070 = cljs.core._nth.call(null,chunk__24034_24067,i__24036_24069);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24070,prov);

var G__24071 = seq__24033_24066;
var G__24072 = chunk__24034_24067;
var G__24073 = count__24035_24068;
var G__24074 = (i__24036_24069 + (1));
seq__24033_24066 = G__24071;
chunk__24034_24067 = G__24072;
count__24035_24068 = G__24073;
i__24036_24069 = G__24074;
continue;
} else {
var temp__4425__auto___24075__$1 = cljs.core.seq.call(null,seq__24033_24066);
if(temp__4425__auto___24075__$1){
var seq__24033_24076__$1 = temp__4425__auto___24075__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24033_24076__$1)){
var c__18961__auto___24077 = cljs.core.chunk_first.call(null,seq__24033_24076__$1);
var G__24078 = cljs.core.chunk_rest.call(null,seq__24033_24076__$1);
var G__24079 = c__18961__auto___24077;
var G__24080 = cljs.core.count.call(null,c__18961__auto___24077);
var G__24081 = (0);
seq__24033_24066 = G__24078;
chunk__24034_24067 = G__24079;
count__24035_24068 = G__24080;
i__24036_24069 = G__24081;
continue;
} else {
var req_24082 = cljs.core.first.call(null,seq__24033_24076__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24082,prov);

var G__24083 = cljs.core.next.call(null,seq__24033_24076__$1);
var G__24084 = null;
var G__24085 = (0);
var G__24086 = (0);
seq__24033_24066 = G__24083;
chunk__24034_24067 = G__24084;
count__24035_24068 = G__24085;
i__24036_24069 = G__24086;
continue;
}
} else {
}
}
break;
}

var G__24087 = cljs.core.next.call(null,seq__24025__$1);
var G__24088 = null;
var G__24089 = (0);
var G__24090 = (0);
seq__24025 = G__24087;
chunk__24026 = G__24088;
count__24027 = G__24089;
i__24028 = G__24090;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24095_24099 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24096_24100 = null;
var count__24097_24101 = (0);
var i__24098_24102 = (0);
while(true){
if((i__24098_24102 < count__24097_24101)){
var ns_24103 = cljs.core._nth.call(null,chunk__24096_24100,i__24098_24102);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24103);

var G__24104 = seq__24095_24099;
var G__24105 = chunk__24096_24100;
var G__24106 = count__24097_24101;
var G__24107 = (i__24098_24102 + (1));
seq__24095_24099 = G__24104;
chunk__24096_24100 = G__24105;
count__24097_24101 = G__24106;
i__24098_24102 = G__24107;
continue;
} else {
var temp__4425__auto___24108 = cljs.core.seq.call(null,seq__24095_24099);
if(temp__4425__auto___24108){
var seq__24095_24109__$1 = temp__4425__auto___24108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24095_24109__$1)){
var c__18961__auto___24110 = cljs.core.chunk_first.call(null,seq__24095_24109__$1);
var G__24111 = cljs.core.chunk_rest.call(null,seq__24095_24109__$1);
var G__24112 = c__18961__auto___24110;
var G__24113 = cljs.core.count.call(null,c__18961__auto___24110);
var G__24114 = (0);
seq__24095_24099 = G__24111;
chunk__24096_24100 = G__24112;
count__24097_24101 = G__24113;
i__24098_24102 = G__24114;
continue;
} else {
var ns_24115 = cljs.core.first.call(null,seq__24095_24109__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24115);

var G__24116 = cljs.core.next.call(null,seq__24095_24109__$1);
var G__24117 = null;
var G__24118 = (0);
var G__24119 = (0);
seq__24095_24099 = G__24116;
chunk__24096_24100 = G__24117;
count__24097_24101 = G__24118;
i__24098_24102 = G__24119;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18158__auto__ = goog.require__;
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24120__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24121__i = 0, G__24121__a = new Array(arguments.length -  0);
while (G__24121__i < G__24121__a.length) {G__24121__a[G__24121__i] = arguments[G__24121__i + 0]; ++G__24121__i;}
  args = new cljs.core.IndexedSeq(G__24121__a,0);
} 
return G__24120__delegate.call(this,args);};
G__24120.cljs$lang$maxFixedArity = 0;
G__24120.cljs$lang$applyTo = (function (arglist__24122){
var args = cljs.core.seq(arglist__24122);
return G__24120__delegate(args);
});
G__24120.cljs$core$IFn$_invoke$arity$variadic = G__24120__delegate;
return G__24120;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24124 = cljs.core._EQ_;
var expr__24125 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24124.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24125))){
var path_parts = ((function (pred__24124,expr__24125){
return (function (p1__24123_SHARP_){
return clojure.string.split.call(null,p1__24123_SHARP_,/[\/\\]/);
});})(pred__24124,expr__24125))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24124,expr__24125){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24127){if((e24127 instanceof Error)){
var e = e24127;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24127;

}
}})());
});
;})(path_parts,sep,root,pred__24124,expr__24125))
} else {
if(cljs.core.truth_(pred__24124.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24125))){
return ((function (pred__24124,expr__24125){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24124,expr__24125){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24124,expr__24125))
);

return deferred.addErrback(((function (deferred,pred__24124,expr__24125){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24124,expr__24125))
);
});
;})(pred__24124,expr__24125))
} else {
return ((function (pred__24124,expr__24125){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24124,expr__24125))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24128,callback){
var map__24131 = p__24128;
var map__24131__$1 = ((((!((map__24131 == null)))?((((map__24131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24131):map__24131);
var file_msg = map__24131__$1;
var request_url = cljs.core.get.call(null,map__24131__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24131,map__24131__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24131,map__24131__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__){
return (function (state_24155){
var state_val_24156 = (state_24155[(1)]);
if((state_val_24156 === (7))){
var inst_24151 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
var statearr_24157_24177 = state_24155__$1;
(statearr_24157_24177[(2)] = inst_24151);

(statearr_24157_24177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (1))){
var state_24155__$1 = state_24155;
var statearr_24158_24178 = state_24155__$1;
(statearr_24158_24178[(2)] = null);

(statearr_24158_24178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (4))){
var inst_24135 = (state_24155[(7)]);
var inst_24135__$1 = (state_24155[(2)]);
var state_24155__$1 = (function (){var statearr_24159 = state_24155;
(statearr_24159[(7)] = inst_24135__$1);

return statearr_24159;
})();
if(cljs.core.truth_(inst_24135__$1)){
var statearr_24160_24179 = state_24155__$1;
(statearr_24160_24179[(1)] = (5));

} else {
var statearr_24161_24180 = state_24155__$1;
(statearr_24161_24180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (6))){
var state_24155__$1 = state_24155;
var statearr_24162_24181 = state_24155__$1;
(statearr_24162_24181[(2)] = null);

(statearr_24162_24181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (3))){
var inst_24153 = (state_24155[(2)]);
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24155__$1,inst_24153);
} else {
if((state_val_24156 === (2))){
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24155__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24156 === (11))){
var inst_24147 = (state_24155[(2)]);
var state_24155__$1 = (function (){var statearr_24163 = state_24155;
(statearr_24163[(8)] = inst_24147);

return statearr_24163;
})();
var statearr_24164_24182 = state_24155__$1;
(statearr_24164_24182[(2)] = null);

(statearr_24164_24182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (9))){
var inst_24139 = (state_24155[(9)]);
var inst_24141 = (state_24155[(10)]);
var inst_24143 = inst_24141.call(null,inst_24139);
var state_24155__$1 = state_24155;
var statearr_24165_24183 = state_24155__$1;
(statearr_24165_24183[(2)] = inst_24143);

(statearr_24165_24183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (5))){
var inst_24135 = (state_24155[(7)]);
var inst_24137 = figwheel.client.file_reloading.blocking_load.call(null,inst_24135);
var state_24155__$1 = state_24155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24155__$1,(8),inst_24137);
} else {
if((state_val_24156 === (10))){
var inst_24139 = (state_24155[(9)]);
var inst_24145 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24139);
var state_24155__$1 = state_24155;
var statearr_24166_24184 = state_24155__$1;
(statearr_24166_24184[(2)] = inst_24145);

(statearr_24166_24184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24156 === (8))){
var inst_24135 = (state_24155[(7)]);
var inst_24141 = (state_24155[(10)]);
var inst_24139 = (state_24155[(2)]);
var inst_24140 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24141__$1 = cljs.core.get.call(null,inst_24140,inst_24135);
var state_24155__$1 = (function (){var statearr_24167 = state_24155;
(statearr_24167[(9)] = inst_24139);

(statearr_24167[(10)] = inst_24141__$1);

return statearr_24167;
})();
if(cljs.core.truth_(inst_24141__$1)){
var statearr_24168_24185 = state_24155__$1;
(statearr_24168_24185[(1)] = (9));

} else {
var statearr_24169_24186 = state_24155__$1;
(statearr_24169_24186[(1)] = (10));

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
});})(c__20718__auto__))
;
return ((function (switch__20606__auto__,c__20718__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20607__auto__ = null;
var figwheel$client$file_reloading$state_machine__20607__auto____0 = (function (){
var statearr_24173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24173[(0)] = figwheel$client$file_reloading$state_machine__20607__auto__);

(statearr_24173[(1)] = (1));

return statearr_24173;
});
var figwheel$client$file_reloading$state_machine__20607__auto____1 = (function (state_24155){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_24155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e24174){if((e24174 instanceof Object)){
var ex__20610__auto__ = e24174;
var statearr_24175_24187 = state_24155;
(statearr_24175_24187[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24188 = state_24155;
state_24155 = G__24188;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20607__auto__ = function(state_24155){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20607__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20607__auto____1.call(this,state_24155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20607__auto____0;
figwheel$client$file_reloading$state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20607__auto____1;
return figwheel$client$file_reloading$state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__))
})();
var state__20720__auto__ = (function (){var statearr_24176 = f__20719__auto__.call(null);
(statearr_24176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_24176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__))
);

return c__20718__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24189,callback){
var map__24192 = p__24189;
var map__24192__$1 = ((((!((map__24192 == null)))?((((map__24192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24192):map__24192);
var file_msg = map__24192__$1;
var namespace = cljs.core.get.call(null,map__24192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24192,map__24192__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24192,map__24192__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24194){
var map__24197 = p__24194;
var map__24197__$1 = ((((!((map__24197 == null)))?((((map__24197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24197):map__24197);
var file_msg = map__24197__$1;
var namespace = cljs.core.get.call(null,map__24197__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18146__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18146__auto__){
var or__18158__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18158__auto__)){
return or__18158__auto__;
} else {
var or__18158__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18158__auto____$1)){
return or__18158__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18146__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24199,callback){
var map__24202 = p__24199;
var map__24202__$1 = ((((!((map__24202 == null)))?((((map__24202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24202):map__24202);
var file_msg = map__24202__$1;
var request_url = cljs.core.get.call(null,map__24202__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20718__auto___24290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto___24290,out){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto___24290,out){
return (function (state_24272){
var state_val_24273 = (state_24272[(1)]);
if((state_val_24273 === (1))){
var inst_24250 = cljs.core.nth.call(null,files,(0),null);
var inst_24251 = cljs.core.nthnext.call(null,files,(1));
var inst_24252 = files;
var state_24272__$1 = (function (){var statearr_24274 = state_24272;
(statearr_24274[(7)] = inst_24252);

(statearr_24274[(8)] = inst_24250);

(statearr_24274[(9)] = inst_24251);

return statearr_24274;
})();
var statearr_24275_24291 = state_24272__$1;
(statearr_24275_24291[(2)] = null);

(statearr_24275_24291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (2))){
var inst_24252 = (state_24272[(7)]);
var inst_24255 = (state_24272[(10)]);
var inst_24255__$1 = cljs.core.nth.call(null,inst_24252,(0),null);
var inst_24256 = cljs.core.nthnext.call(null,inst_24252,(1));
var inst_24257 = (inst_24255__$1 == null);
var inst_24258 = cljs.core.not.call(null,inst_24257);
var state_24272__$1 = (function (){var statearr_24276 = state_24272;
(statearr_24276[(10)] = inst_24255__$1);

(statearr_24276[(11)] = inst_24256);

return statearr_24276;
})();
if(inst_24258){
var statearr_24277_24292 = state_24272__$1;
(statearr_24277_24292[(1)] = (4));

} else {
var statearr_24278_24293 = state_24272__$1;
(statearr_24278_24293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (3))){
var inst_24270 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24272__$1,inst_24270);
} else {
if((state_val_24273 === (4))){
var inst_24255 = (state_24272[(10)]);
var inst_24260 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24255);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24272__$1,(7),inst_24260);
} else {
if((state_val_24273 === (5))){
var inst_24266 = cljs.core.async.close_BANG_.call(null,out);
var state_24272__$1 = state_24272;
var statearr_24279_24294 = state_24272__$1;
(statearr_24279_24294[(2)] = inst_24266);

(statearr_24279_24294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (6))){
var inst_24268 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
var statearr_24280_24295 = state_24272__$1;
(statearr_24280_24295[(2)] = inst_24268);

(statearr_24280_24295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (7))){
var inst_24256 = (state_24272[(11)]);
var inst_24262 = (state_24272[(2)]);
var inst_24263 = cljs.core.async.put_BANG_.call(null,out,inst_24262);
var inst_24252 = inst_24256;
var state_24272__$1 = (function (){var statearr_24281 = state_24272;
(statearr_24281[(7)] = inst_24252);

(statearr_24281[(12)] = inst_24263);

return statearr_24281;
})();
var statearr_24282_24296 = state_24272__$1;
(statearr_24282_24296[(2)] = null);

(statearr_24282_24296[(1)] = (2));


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
});})(c__20718__auto___24290,out))
;
return ((function (switch__20606__auto__,c__20718__auto___24290,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto____0 = (function (){
var statearr_24286 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24286[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto__);

(statearr_24286[(1)] = (1));

return statearr_24286;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto____1 = (function (state_24272){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_24272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e24287){if((e24287 instanceof Object)){
var ex__20610__auto__ = e24287;
var statearr_24288_24297 = state_24272;
(statearr_24288_24297[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24298 = state_24272;
state_24272 = G__24298;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto__ = function(state_24272){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto____1.call(this,state_24272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto___24290,out))
})();
var state__20720__auto__ = (function (){var statearr_24289 = f__20719__auto__.call(null);
(statearr_24289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto___24290);

return statearr_24289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto___24290,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24299,opts){
var map__24303 = p__24299;
var map__24303__$1 = ((((!((map__24303 == null)))?((((map__24303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24303):map__24303);
var eval_body__$1 = cljs.core.get.call(null,map__24303__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24303__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18146__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18146__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18146__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24305){var e = e24305;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24306_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24306_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24311){
var vec__24312 = p__24311;
var k = cljs.core.nth.call(null,vec__24312,(0),null);
var v = cljs.core.nth.call(null,vec__24312,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24313){
var vec__24314 = p__24313;
var k = cljs.core.nth.call(null,vec__24314,(0),null);
var v = cljs.core.nth.call(null,vec__24314,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24318,p__24319){
var map__24566 = p__24318;
var map__24566__$1 = ((((!((map__24566 == null)))?((((map__24566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24566):map__24566);
var opts = map__24566__$1;
var before_jsload = cljs.core.get.call(null,map__24566__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24566__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24566__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24567 = p__24319;
var map__24567__$1 = ((((!((map__24567 == null)))?((((map__24567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24567):map__24567);
var msg = map__24567__$1;
var files = cljs.core.get.call(null,map__24567__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24567__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24567__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20718__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20719__auto__ = (function (){var switch__20606__auto__ = ((function (c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24720){
var state_val_24721 = (state_24720[(1)]);
if((state_val_24721 === (7))){
var inst_24581 = (state_24720[(7)]);
var inst_24583 = (state_24720[(8)]);
var inst_24582 = (state_24720[(9)]);
var inst_24584 = (state_24720[(10)]);
var inst_24589 = cljs.core._nth.call(null,inst_24582,inst_24584);
var inst_24590 = figwheel.client.file_reloading.eval_body.call(null,inst_24589,opts);
var inst_24591 = (inst_24584 + (1));
var tmp24722 = inst_24581;
var tmp24723 = inst_24583;
var tmp24724 = inst_24582;
var inst_24581__$1 = tmp24722;
var inst_24582__$1 = tmp24724;
var inst_24583__$1 = tmp24723;
var inst_24584__$1 = inst_24591;
var state_24720__$1 = (function (){var statearr_24725 = state_24720;
(statearr_24725[(7)] = inst_24581__$1);

(statearr_24725[(11)] = inst_24590);

(statearr_24725[(8)] = inst_24583__$1);

(statearr_24725[(9)] = inst_24582__$1);

(statearr_24725[(10)] = inst_24584__$1);

return statearr_24725;
})();
var statearr_24726_24812 = state_24720__$1;
(statearr_24726_24812[(2)] = null);

(statearr_24726_24812[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (20))){
var inst_24624 = (state_24720[(12)]);
var inst_24632 = figwheel.client.file_reloading.sort_files.call(null,inst_24624);
var state_24720__$1 = state_24720;
var statearr_24727_24813 = state_24720__$1;
(statearr_24727_24813[(2)] = inst_24632);

(statearr_24727_24813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (27))){
var state_24720__$1 = state_24720;
var statearr_24728_24814 = state_24720__$1;
(statearr_24728_24814[(2)] = null);

(statearr_24728_24814[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (1))){
var inst_24573 = (state_24720[(13)]);
var inst_24570 = before_jsload.call(null,files);
var inst_24571 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24572 = (function (){return ((function (inst_24573,inst_24570,inst_24571,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24315_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24315_SHARP_);
});
;})(inst_24573,inst_24570,inst_24571,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24573__$1 = cljs.core.filter.call(null,inst_24572,files);
var inst_24574 = cljs.core.not_empty.call(null,inst_24573__$1);
var state_24720__$1 = (function (){var statearr_24729 = state_24720;
(statearr_24729[(14)] = inst_24571);

(statearr_24729[(15)] = inst_24570);

(statearr_24729[(13)] = inst_24573__$1);

return statearr_24729;
})();
if(cljs.core.truth_(inst_24574)){
var statearr_24730_24815 = state_24720__$1;
(statearr_24730_24815[(1)] = (2));

} else {
var statearr_24731_24816 = state_24720__$1;
(statearr_24731_24816[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (24))){
var state_24720__$1 = state_24720;
var statearr_24732_24817 = state_24720__$1;
(statearr_24732_24817[(2)] = null);

(statearr_24732_24817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (39))){
var inst_24674 = (state_24720[(16)]);
var state_24720__$1 = state_24720;
var statearr_24733_24818 = state_24720__$1;
(statearr_24733_24818[(2)] = inst_24674);

(statearr_24733_24818[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (46))){
var inst_24715 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
var statearr_24734_24819 = state_24720__$1;
(statearr_24734_24819[(2)] = inst_24715);

(statearr_24734_24819[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (4))){
var inst_24618 = (state_24720[(2)]);
var inst_24619 = cljs.core.List.EMPTY;
var inst_24620 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24619);
var inst_24621 = (function (){return ((function (inst_24618,inst_24619,inst_24620,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24316_SHARP_){
var and__18146__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24316_SHARP_);
if(cljs.core.truth_(and__18146__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24316_SHARP_));
} else {
return and__18146__auto__;
}
});
;})(inst_24618,inst_24619,inst_24620,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24622 = cljs.core.filter.call(null,inst_24621,files);
var inst_24623 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24624 = cljs.core.concat.call(null,inst_24622,inst_24623);
var state_24720__$1 = (function (){var statearr_24735 = state_24720;
(statearr_24735[(17)] = inst_24618);

(statearr_24735[(12)] = inst_24624);

(statearr_24735[(18)] = inst_24620);

return statearr_24735;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24736_24820 = state_24720__$1;
(statearr_24736_24820[(1)] = (16));

} else {
var statearr_24737_24821 = state_24720__$1;
(statearr_24737_24821[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (15))){
var inst_24608 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
var statearr_24738_24822 = state_24720__$1;
(statearr_24738_24822[(2)] = inst_24608);

(statearr_24738_24822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (21))){
var inst_24634 = (state_24720[(19)]);
var inst_24634__$1 = (state_24720[(2)]);
var inst_24635 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24634__$1);
var state_24720__$1 = (function (){var statearr_24739 = state_24720;
(statearr_24739[(19)] = inst_24634__$1);

return statearr_24739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24720__$1,(22),inst_24635);
} else {
if((state_val_24721 === (31))){
var inst_24718 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24720__$1,inst_24718);
} else {
if((state_val_24721 === (32))){
var inst_24674 = (state_24720[(16)]);
var inst_24679 = inst_24674.cljs$lang$protocol_mask$partition0$;
var inst_24680 = (inst_24679 & (64));
var inst_24681 = inst_24674.cljs$core$ISeq$;
var inst_24682 = (inst_24680) || (inst_24681);
var state_24720__$1 = state_24720;
if(cljs.core.truth_(inst_24682)){
var statearr_24740_24823 = state_24720__$1;
(statearr_24740_24823[(1)] = (35));

} else {
var statearr_24741_24824 = state_24720__$1;
(statearr_24741_24824[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (40))){
var inst_24695 = (state_24720[(20)]);
var inst_24694 = (state_24720[(2)]);
var inst_24695__$1 = cljs.core.get.call(null,inst_24694,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24696 = cljs.core.get.call(null,inst_24694,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24697 = cljs.core.not_empty.call(null,inst_24695__$1);
var state_24720__$1 = (function (){var statearr_24742 = state_24720;
(statearr_24742[(21)] = inst_24696);

(statearr_24742[(20)] = inst_24695__$1);

return statearr_24742;
})();
if(cljs.core.truth_(inst_24697)){
var statearr_24743_24825 = state_24720__$1;
(statearr_24743_24825[(1)] = (41));

} else {
var statearr_24744_24826 = state_24720__$1;
(statearr_24744_24826[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (33))){
var state_24720__$1 = state_24720;
var statearr_24745_24827 = state_24720__$1;
(statearr_24745_24827[(2)] = false);

(statearr_24745_24827[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (13))){
var inst_24594 = (state_24720[(22)]);
var inst_24598 = cljs.core.chunk_first.call(null,inst_24594);
var inst_24599 = cljs.core.chunk_rest.call(null,inst_24594);
var inst_24600 = cljs.core.count.call(null,inst_24598);
var inst_24581 = inst_24599;
var inst_24582 = inst_24598;
var inst_24583 = inst_24600;
var inst_24584 = (0);
var state_24720__$1 = (function (){var statearr_24746 = state_24720;
(statearr_24746[(7)] = inst_24581);

(statearr_24746[(8)] = inst_24583);

(statearr_24746[(9)] = inst_24582);

(statearr_24746[(10)] = inst_24584);

return statearr_24746;
})();
var statearr_24747_24828 = state_24720__$1;
(statearr_24747_24828[(2)] = null);

(statearr_24747_24828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (22))){
var inst_24634 = (state_24720[(19)]);
var inst_24637 = (state_24720[(23)]);
var inst_24638 = (state_24720[(24)]);
var inst_24642 = (state_24720[(25)]);
var inst_24637__$1 = (state_24720[(2)]);
var inst_24638__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24637__$1);
var inst_24639 = (function (){var all_files = inst_24634;
var res_SINGLEQUOTE_ = inst_24637__$1;
var res = inst_24638__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24634,inst_24637,inst_24638,inst_24642,inst_24637__$1,inst_24638__$1,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24317_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24317_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24634,inst_24637,inst_24638,inst_24642,inst_24637__$1,inst_24638__$1,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24640 = cljs.core.filter.call(null,inst_24639,inst_24637__$1);
var inst_24641 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24642__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24641);
var inst_24643 = cljs.core.not_empty.call(null,inst_24642__$1);
var state_24720__$1 = (function (){var statearr_24748 = state_24720;
(statearr_24748[(26)] = inst_24640);

(statearr_24748[(23)] = inst_24637__$1);

(statearr_24748[(24)] = inst_24638__$1);

(statearr_24748[(25)] = inst_24642__$1);

return statearr_24748;
})();
if(cljs.core.truth_(inst_24643)){
var statearr_24749_24829 = state_24720__$1;
(statearr_24749_24829[(1)] = (23));

} else {
var statearr_24750_24830 = state_24720__$1;
(statearr_24750_24830[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (36))){
var state_24720__$1 = state_24720;
var statearr_24751_24831 = state_24720__$1;
(statearr_24751_24831[(2)] = false);

(statearr_24751_24831[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (41))){
var inst_24695 = (state_24720[(20)]);
var inst_24699 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24700 = cljs.core.map.call(null,inst_24699,inst_24695);
var inst_24701 = cljs.core.pr_str.call(null,inst_24700);
var inst_24702 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24701)].join('');
var inst_24703 = figwheel.client.utils.log.call(null,inst_24702);
var state_24720__$1 = state_24720;
var statearr_24752_24832 = state_24720__$1;
(statearr_24752_24832[(2)] = inst_24703);

(statearr_24752_24832[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (43))){
var inst_24696 = (state_24720[(21)]);
var inst_24706 = (state_24720[(2)]);
var inst_24707 = cljs.core.not_empty.call(null,inst_24696);
var state_24720__$1 = (function (){var statearr_24753 = state_24720;
(statearr_24753[(27)] = inst_24706);

return statearr_24753;
})();
if(cljs.core.truth_(inst_24707)){
var statearr_24754_24833 = state_24720__$1;
(statearr_24754_24833[(1)] = (44));

} else {
var statearr_24755_24834 = state_24720__$1;
(statearr_24755_24834[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (29))){
var inst_24640 = (state_24720[(26)]);
var inst_24634 = (state_24720[(19)]);
var inst_24637 = (state_24720[(23)]);
var inst_24638 = (state_24720[(24)]);
var inst_24674 = (state_24720[(16)]);
var inst_24642 = (state_24720[(25)]);
var inst_24670 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24673 = (function (){var all_files = inst_24634;
var res_SINGLEQUOTE_ = inst_24637;
var res = inst_24638;
var files_not_loaded = inst_24640;
var dependencies_that_loaded = inst_24642;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24640,inst_24634,inst_24637,inst_24638,inst_24674,inst_24642,inst_24670,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24672){
var map__24756 = p__24672;
var map__24756__$1 = ((((!((map__24756 == null)))?((((map__24756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24756):map__24756);
var namespace = cljs.core.get.call(null,map__24756__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24640,inst_24634,inst_24637,inst_24638,inst_24674,inst_24642,inst_24670,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24674__$1 = cljs.core.group_by.call(null,inst_24673,inst_24640);
var inst_24676 = (inst_24674__$1 == null);
var inst_24677 = cljs.core.not.call(null,inst_24676);
var state_24720__$1 = (function (){var statearr_24758 = state_24720;
(statearr_24758[(28)] = inst_24670);

(statearr_24758[(16)] = inst_24674__$1);

return statearr_24758;
})();
if(inst_24677){
var statearr_24759_24835 = state_24720__$1;
(statearr_24759_24835[(1)] = (32));

} else {
var statearr_24760_24836 = state_24720__$1;
(statearr_24760_24836[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (44))){
var inst_24696 = (state_24720[(21)]);
var inst_24709 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24696);
var inst_24710 = cljs.core.pr_str.call(null,inst_24709);
var inst_24711 = [cljs.core.str("not required: "),cljs.core.str(inst_24710)].join('');
var inst_24712 = figwheel.client.utils.log.call(null,inst_24711);
var state_24720__$1 = state_24720;
var statearr_24761_24837 = state_24720__$1;
(statearr_24761_24837[(2)] = inst_24712);

(statearr_24761_24837[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (6))){
var inst_24615 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
var statearr_24762_24838 = state_24720__$1;
(statearr_24762_24838[(2)] = inst_24615);

(statearr_24762_24838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (28))){
var inst_24640 = (state_24720[(26)]);
var inst_24667 = (state_24720[(2)]);
var inst_24668 = cljs.core.not_empty.call(null,inst_24640);
var state_24720__$1 = (function (){var statearr_24763 = state_24720;
(statearr_24763[(29)] = inst_24667);

return statearr_24763;
})();
if(cljs.core.truth_(inst_24668)){
var statearr_24764_24839 = state_24720__$1;
(statearr_24764_24839[(1)] = (29));

} else {
var statearr_24765_24840 = state_24720__$1;
(statearr_24765_24840[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (25))){
var inst_24638 = (state_24720[(24)]);
var inst_24654 = (state_24720[(2)]);
var inst_24655 = cljs.core.not_empty.call(null,inst_24638);
var state_24720__$1 = (function (){var statearr_24766 = state_24720;
(statearr_24766[(30)] = inst_24654);

return statearr_24766;
})();
if(cljs.core.truth_(inst_24655)){
var statearr_24767_24841 = state_24720__$1;
(statearr_24767_24841[(1)] = (26));

} else {
var statearr_24768_24842 = state_24720__$1;
(statearr_24768_24842[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (34))){
var inst_24689 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
if(cljs.core.truth_(inst_24689)){
var statearr_24769_24843 = state_24720__$1;
(statearr_24769_24843[(1)] = (38));

} else {
var statearr_24770_24844 = state_24720__$1;
(statearr_24770_24844[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (17))){
var state_24720__$1 = state_24720;
var statearr_24771_24845 = state_24720__$1;
(statearr_24771_24845[(2)] = recompile_dependents);

(statearr_24771_24845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (3))){
var state_24720__$1 = state_24720;
var statearr_24772_24846 = state_24720__$1;
(statearr_24772_24846[(2)] = null);

(statearr_24772_24846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (12))){
var inst_24611 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
var statearr_24773_24847 = state_24720__$1;
(statearr_24773_24847[(2)] = inst_24611);

(statearr_24773_24847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (2))){
var inst_24573 = (state_24720[(13)]);
var inst_24580 = cljs.core.seq.call(null,inst_24573);
var inst_24581 = inst_24580;
var inst_24582 = null;
var inst_24583 = (0);
var inst_24584 = (0);
var state_24720__$1 = (function (){var statearr_24774 = state_24720;
(statearr_24774[(7)] = inst_24581);

(statearr_24774[(8)] = inst_24583);

(statearr_24774[(9)] = inst_24582);

(statearr_24774[(10)] = inst_24584);

return statearr_24774;
})();
var statearr_24775_24848 = state_24720__$1;
(statearr_24775_24848[(2)] = null);

(statearr_24775_24848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (23))){
var inst_24640 = (state_24720[(26)]);
var inst_24634 = (state_24720[(19)]);
var inst_24637 = (state_24720[(23)]);
var inst_24638 = (state_24720[(24)]);
var inst_24642 = (state_24720[(25)]);
var inst_24645 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24647 = (function (){var all_files = inst_24634;
var res_SINGLEQUOTE_ = inst_24637;
var res = inst_24638;
var files_not_loaded = inst_24640;
var dependencies_that_loaded = inst_24642;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24640,inst_24634,inst_24637,inst_24638,inst_24642,inst_24645,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24646){
var map__24776 = p__24646;
var map__24776__$1 = ((((!((map__24776 == null)))?((((map__24776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24776):map__24776);
var request_url = cljs.core.get.call(null,map__24776__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24640,inst_24634,inst_24637,inst_24638,inst_24642,inst_24645,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24648 = cljs.core.reverse.call(null,inst_24642);
var inst_24649 = cljs.core.map.call(null,inst_24647,inst_24648);
var inst_24650 = cljs.core.pr_str.call(null,inst_24649);
var inst_24651 = figwheel.client.utils.log.call(null,inst_24650);
var state_24720__$1 = (function (){var statearr_24778 = state_24720;
(statearr_24778[(31)] = inst_24645);

return statearr_24778;
})();
var statearr_24779_24849 = state_24720__$1;
(statearr_24779_24849[(2)] = inst_24651);

(statearr_24779_24849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (35))){
var state_24720__$1 = state_24720;
var statearr_24780_24850 = state_24720__$1;
(statearr_24780_24850[(2)] = true);

(statearr_24780_24850[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (19))){
var inst_24624 = (state_24720[(12)]);
var inst_24630 = figwheel.client.file_reloading.expand_files.call(null,inst_24624);
var state_24720__$1 = state_24720;
var statearr_24781_24851 = state_24720__$1;
(statearr_24781_24851[(2)] = inst_24630);

(statearr_24781_24851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (11))){
var state_24720__$1 = state_24720;
var statearr_24782_24852 = state_24720__$1;
(statearr_24782_24852[(2)] = null);

(statearr_24782_24852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (9))){
var inst_24613 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
var statearr_24783_24853 = state_24720__$1;
(statearr_24783_24853[(2)] = inst_24613);

(statearr_24783_24853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (5))){
var inst_24583 = (state_24720[(8)]);
var inst_24584 = (state_24720[(10)]);
var inst_24586 = (inst_24584 < inst_24583);
var inst_24587 = inst_24586;
var state_24720__$1 = state_24720;
if(cljs.core.truth_(inst_24587)){
var statearr_24784_24854 = state_24720__$1;
(statearr_24784_24854[(1)] = (7));

} else {
var statearr_24785_24855 = state_24720__$1;
(statearr_24785_24855[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (14))){
var inst_24594 = (state_24720[(22)]);
var inst_24603 = cljs.core.first.call(null,inst_24594);
var inst_24604 = figwheel.client.file_reloading.eval_body.call(null,inst_24603,opts);
var inst_24605 = cljs.core.next.call(null,inst_24594);
var inst_24581 = inst_24605;
var inst_24582 = null;
var inst_24583 = (0);
var inst_24584 = (0);
var state_24720__$1 = (function (){var statearr_24786 = state_24720;
(statearr_24786[(7)] = inst_24581);

(statearr_24786[(32)] = inst_24604);

(statearr_24786[(8)] = inst_24583);

(statearr_24786[(9)] = inst_24582);

(statearr_24786[(10)] = inst_24584);

return statearr_24786;
})();
var statearr_24787_24856 = state_24720__$1;
(statearr_24787_24856[(2)] = null);

(statearr_24787_24856[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (45))){
var state_24720__$1 = state_24720;
var statearr_24788_24857 = state_24720__$1;
(statearr_24788_24857[(2)] = null);

(statearr_24788_24857[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (26))){
var inst_24640 = (state_24720[(26)]);
var inst_24634 = (state_24720[(19)]);
var inst_24637 = (state_24720[(23)]);
var inst_24638 = (state_24720[(24)]);
var inst_24642 = (state_24720[(25)]);
var inst_24657 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24659 = (function (){var all_files = inst_24634;
var res_SINGLEQUOTE_ = inst_24637;
var res = inst_24638;
var files_not_loaded = inst_24640;
var dependencies_that_loaded = inst_24642;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24640,inst_24634,inst_24637,inst_24638,inst_24642,inst_24657,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24658){
var map__24789 = p__24658;
var map__24789__$1 = ((((!((map__24789 == null)))?((((map__24789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24789):map__24789);
var namespace = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24640,inst_24634,inst_24637,inst_24638,inst_24642,inst_24657,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24660 = cljs.core.map.call(null,inst_24659,inst_24638);
var inst_24661 = cljs.core.pr_str.call(null,inst_24660);
var inst_24662 = figwheel.client.utils.log.call(null,inst_24661);
var inst_24663 = (function (){var all_files = inst_24634;
var res_SINGLEQUOTE_ = inst_24637;
var res = inst_24638;
var files_not_loaded = inst_24640;
var dependencies_that_loaded = inst_24642;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24640,inst_24634,inst_24637,inst_24638,inst_24642,inst_24657,inst_24659,inst_24660,inst_24661,inst_24662,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24640,inst_24634,inst_24637,inst_24638,inst_24642,inst_24657,inst_24659,inst_24660,inst_24661,inst_24662,state_val_24721,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24664 = setTimeout(inst_24663,(10));
var state_24720__$1 = (function (){var statearr_24791 = state_24720;
(statearr_24791[(33)] = inst_24657);

(statearr_24791[(34)] = inst_24662);

return statearr_24791;
})();
var statearr_24792_24858 = state_24720__$1;
(statearr_24792_24858[(2)] = inst_24664);

(statearr_24792_24858[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (16))){
var state_24720__$1 = state_24720;
var statearr_24793_24859 = state_24720__$1;
(statearr_24793_24859[(2)] = reload_dependents);

(statearr_24793_24859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (38))){
var inst_24674 = (state_24720[(16)]);
var inst_24691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24674);
var state_24720__$1 = state_24720;
var statearr_24794_24860 = state_24720__$1;
(statearr_24794_24860[(2)] = inst_24691);

(statearr_24794_24860[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (30))){
var state_24720__$1 = state_24720;
var statearr_24795_24861 = state_24720__$1;
(statearr_24795_24861[(2)] = null);

(statearr_24795_24861[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (10))){
var inst_24594 = (state_24720[(22)]);
var inst_24596 = cljs.core.chunked_seq_QMARK_.call(null,inst_24594);
var state_24720__$1 = state_24720;
if(inst_24596){
var statearr_24796_24862 = state_24720__$1;
(statearr_24796_24862[(1)] = (13));

} else {
var statearr_24797_24863 = state_24720__$1;
(statearr_24797_24863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (18))){
var inst_24628 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
if(cljs.core.truth_(inst_24628)){
var statearr_24798_24864 = state_24720__$1;
(statearr_24798_24864[(1)] = (19));

} else {
var statearr_24799_24865 = state_24720__$1;
(statearr_24799_24865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (42))){
var state_24720__$1 = state_24720;
var statearr_24800_24866 = state_24720__$1;
(statearr_24800_24866[(2)] = null);

(statearr_24800_24866[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (37))){
var inst_24686 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
var statearr_24801_24867 = state_24720__$1;
(statearr_24801_24867[(2)] = inst_24686);

(statearr_24801_24867[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (8))){
var inst_24581 = (state_24720[(7)]);
var inst_24594 = (state_24720[(22)]);
var inst_24594__$1 = cljs.core.seq.call(null,inst_24581);
var state_24720__$1 = (function (){var statearr_24802 = state_24720;
(statearr_24802[(22)] = inst_24594__$1);

return statearr_24802;
})();
if(inst_24594__$1){
var statearr_24803_24868 = state_24720__$1;
(statearr_24803_24868[(1)] = (10));

} else {
var statearr_24804_24869 = state_24720__$1;
(statearr_24804_24869[(1)] = (11));

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
}
});})(c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20606__auto__,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto____0 = (function (){
var statearr_24808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24808[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto__);

(statearr_24808[(1)] = (1));

return statearr_24808;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto____1 = (function (state_24720){
while(true){
var ret_value__20608__auto__ = (function (){try{while(true){
var result__20609__auto__ = switch__20606__auto__.call(null,state_24720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20609__auto__;
}
break;
}
}catch (e24809){if((e24809 instanceof Object)){
var ex__20610__auto__ = e24809;
var statearr_24810_24870 = state_24720;
(statearr_24810_24870[(5)] = ex__20610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24871 = state_24720;
state_24720 = G__24871;
continue;
} else {
return ret_value__20608__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto__ = function(state_24720){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto____1.call(this,state_24720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20607__auto__;
})()
;})(switch__20606__auto__,c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20720__auto__ = (function (){var statearr_24811 = f__20719__auto__.call(null);
(statearr_24811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20718__auto__);

return statearr_24811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20720__auto__);
});})(c__20718__auto__,map__24566,map__24566__$1,opts,before_jsload,on_jsload,reload_dependents,map__24567,map__24567__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20718__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24874,link){
var map__24877 = p__24874;
var map__24877__$1 = ((((!((map__24877 == null)))?((((map__24877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24877):map__24877);
var file = cljs.core.get.call(null,map__24877__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24877,map__24877__$1,file){
return (function (p1__24872_SHARP_,p2__24873_SHARP_){
if(cljs.core._EQ_.call(null,p1__24872_SHARP_,p2__24873_SHARP_)){
return p1__24872_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24877,map__24877__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24883){
var map__24884 = p__24883;
var map__24884__$1 = ((((!((map__24884 == null)))?((((map__24884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24884):map__24884);
var match_length = cljs.core.get.call(null,map__24884__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24884__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24879_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24879_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24886 = [];
var len__19216__auto___24889 = arguments.length;
var i__19217__auto___24890 = (0);
while(true){
if((i__19217__auto___24890 < len__19216__auto___24889)){
args24886.push((arguments[i__19217__auto___24890]));

var G__24891 = (i__19217__auto___24890 + (1));
i__19217__auto___24890 = G__24891;
continue;
} else {
}
break;
}

var G__24888 = args24886.length;
switch (G__24888) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24886.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24893_SHARP_,p2__24894_SHARP_){
return cljs.core.assoc.call(null,p1__24893_SHARP_,cljs.core.get.call(null,p2__24894_SHARP_,key),p2__24894_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24895){
var map__24898 = p__24895;
var map__24898__$1 = ((((!((map__24898 == null)))?((((map__24898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24898):map__24898);
var f_data = map__24898__$1;
var file = cljs.core.get.call(null,map__24898__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24900,files_msg){
var map__24907 = p__24900;
var map__24907__$1 = ((((!((map__24907 == null)))?((((map__24907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24907):map__24907);
var opts = map__24907__$1;
var on_cssload = cljs.core.get.call(null,map__24907__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24909_24913 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24910_24914 = null;
var count__24911_24915 = (0);
var i__24912_24916 = (0);
while(true){
if((i__24912_24916 < count__24911_24915)){
var f_24917 = cljs.core._nth.call(null,chunk__24910_24914,i__24912_24916);
figwheel.client.file_reloading.reload_css_file.call(null,f_24917);

var G__24918 = seq__24909_24913;
var G__24919 = chunk__24910_24914;
var G__24920 = count__24911_24915;
var G__24921 = (i__24912_24916 + (1));
seq__24909_24913 = G__24918;
chunk__24910_24914 = G__24919;
count__24911_24915 = G__24920;
i__24912_24916 = G__24921;
continue;
} else {
var temp__4425__auto___24922 = cljs.core.seq.call(null,seq__24909_24913);
if(temp__4425__auto___24922){
var seq__24909_24923__$1 = temp__4425__auto___24922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24909_24923__$1)){
var c__18961__auto___24924 = cljs.core.chunk_first.call(null,seq__24909_24923__$1);
var G__24925 = cljs.core.chunk_rest.call(null,seq__24909_24923__$1);
var G__24926 = c__18961__auto___24924;
var G__24927 = cljs.core.count.call(null,c__18961__auto___24924);
var G__24928 = (0);
seq__24909_24913 = G__24925;
chunk__24910_24914 = G__24926;
count__24911_24915 = G__24927;
i__24912_24916 = G__24928;
continue;
} else {
var f_24929 = cljs.core.first.call(null,seq__24909_24923__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24929);

var G__24930 = cljs.core.next.call(null,seq__24909_24923__$1);
var G__24931 = null;
var G__24932 = (0);
var G__24933 = (0);
seq__24909_24913 = G__24930;
chunk__24910_24914 = G__24931;
count__24911_24915 = G__24932;
i__24912_24916 = G__24933;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24907,map__24907__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24907,map__24907__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map