(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17364eb2"],{ad8f:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("b775");function i(t){return Object(a["a"])({url:"/vue-admin-template/table/list",method:"get",params:t})}},e349:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("p",[t._v("敬请期待...")])])}],s=n("ad8f"),r={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(s["a"])().then((function(e){t.list=e.data.items,t.listLoading=!1}))}}},u=r,c=n("b29b"),l=Object(c["a"])(u,a,i,!1,null,null,null);e["default"]=l.exports}}]);