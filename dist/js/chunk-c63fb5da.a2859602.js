(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c63fb5da"],{"5c35":function(t,s,n){},"5e83":function(t,s,n){"use strict";n.r(s);var e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"onboarding-plans"},[t._m(0),n("div",{staticClass:"list"},t._l(t.types,function(s,e){return n("div",{key:e,staticClass:"type",on:{click:function(n){t.selectPlan(s)}}},[n("header",[t._v(t._s(s.name))]),n("div",{staticClass:"type-wrap"},[n("section",{staticClass:"type-body"},[n("ul",t._l(s.benefits,function(s,e){return n("li",{key:e},[t._v(t._s(s))])}),0)]),n("footer",[n("div",{staticClass:"price"},[n("h1",[t._v(t._s("$"+s.price))]),n("div",{staticClass:"freq"},[n("span",[t._v("per")]),n("span",[t._v(t._s(s.frequency))])])]),t.selectedPlan&&s.id===t.selectedPlan.id?n("div",{staticClass:"is-selected"},[n("i",{staticClass:"material-icons"},[t._v("check_circle_outline")])]):t._e()])])])}),0),n("div",{staticClass:"plan-foot"},[n("div",{staticClass:"left"},[n("button",{staticClass:"btn text-btn",on:{click:t.back}},[n("i",{staticClass:"material-icons"},[t._v("chevron_left")]),t._v("Back\n      ")])]),n("div",{staticClass:"right"},[n("button",{staticClass:"btn btn-secondary",on:{click:t.skip}},[t._v("Skip for Now")]),n("button",{staticClass:"btn btn-primary",on:{click:t.next}},[t._v("Next")])])])])},i=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"plan-head"},[n("h1",[t._v("We’ve got just the plan for you")]),n("p",[t._v("Choose a subsciption and you’ll be up and selling in no time. You can upgrade, downgrade, or cancel anytime – no strings attached.")])])}],a=(n("cadf"),n("551c"),n("097d"),{name:"onboarding-plans",data:function(){return{selectedPlan:null}},methods:{selectPlan:function(t){this.selectedPlan=t},skip:function(){this.selectedPlan=null,this.$router.push("/")},back:function(){this.selectedPlan=null,this.$router.go(-1)},next:function(){this.$router.push({name:"onboarding payment"})}},computed:{types:function(){return this.$store.state.subscription.subscriptions}}}),c=a,l=(n("b07d"),n("2877")),o=Object(l["a"])(c,e,i,!1,null,"605e3422",null);o.options.__file="plan.vue";s["default"]=o.exports},b07d:function(t,s,n){"use strict";var e=n("5c35"),i=n.n(e);i.a}}]);
//# sourceMappingURL=chunk-c63fb5da.a2859602.js.map