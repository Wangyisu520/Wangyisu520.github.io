(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-143cff91"],{"141c":function(t,a,r){},"19f9":function(t,a,r){"use strict";var s=r("141c"),e=r.n(s);e.a},cf2a:function(t,a,r){"use strict";r.r(a);var s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"order"},t._l(t.orderlist,(function(a,s){return r("div",{key:s,staticClass:"order-card-body"},[a.orderInfo?r("div",{staticClass:"order-card-wrap",on:{click:function(r){return t.$router.push({name:"orderInfo",params:a})}}},[r("img",{attrs:{src:a.orderInfo.shopInfo.image_path,alt:""}}),r("div",{staticClass:"order-card-content"},[r("div",{staticClass:"order-card-head"},[r("div",{staticClass:"title"},[r("a",[r("span",[t._v(t._s(a.orderInfo.shopInfo.name))]),r("i",{staticClass:"fa fa-angle-right"})]),r("p",[t._v("订单已完成")])]),r("p",{staticClass:"date-time"},[t._v(t._s(a.date))])]),r("div",{staticClass:"order-card-detail"},[r("p",{staticClass:"detail"},[t._v(t._s(a.orderInfo.selectFoods[0].name))]),r("p",{staticClass:"price"},[t._v("¥"+t._s(a.totalPrice))])])])]):t._e(),r("div",{staticClass:"order-card-bottom"},[r("button",{staticClass:"cardbutton",on:{click:function(a){return t.$router.push("/shop")}}},[t._v("再来一单")])])])})),0)},e=[],o={name:"order",data:function(){return{orderlist:[]}},beforeRouteEnter:function(t,a,r){r((function(t){t.getData()}))},methods:{getData:function(){var t=this;this.$axios("/api/user/orders/".concat(localStorage.ele_login)).then((function(a){t.orderlist=a.data.orderlist}))}}},n=o,i=(r("19f9"),r("4023")),c=Object(i["a"])(n,s,e,!1,null,"7478517b",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-143cff91.6cbfb3d4.js.map