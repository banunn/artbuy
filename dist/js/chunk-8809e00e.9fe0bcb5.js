(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8809e00e"],{"5e83":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"onboarding-plans"},[t._m(0),e("div",{staticClass:"list"},t._l(t.types,function(s,n){return e("div",{key:n,staticClass:"type",on:{click:function(e){t.selectPlan(s)}}},[e("header",[t._v(t._s(s.name))]),e("div",{staticClass:"type-wrap"},[e("section",{staticClass:"type-body"},[e("ul",t._l(s.benefits,function(s,n){return e("li",{key:n},[t._v(t._s(s))])}),0)]),e("footer",[e("div",{staticClass:"price"},[e("h1",[t._v(t._s("$"+s.price))]),e("div",{staticClass:"freq"},[e("span",[t._v("per")]),e("span",[t._v(t._s(s.frequency))])])]),t.selectedPlan&&s.id===t.selectedPlan.id?e("div",{staticClass:"is-selected"},[e("i",{staticClass:"material-icons"},[t._v("check_circle_outline")])]):t._e()])])])}),0),e("div",{staticClass:"plan-foot"},[e("div",{staticClass:"left"},[e("button",{staticClass:"btn text-btn",on:{click:t.back}},[e("i",{staticClass:"material-icons"},[t._v("chevron_left")]),t._v("Back\n      ")])]),e("div",{staticClass:"right"},[e("button",{staticClass:"btn btn-secondary",on:{click:t.skip}},[t._v("Skip for Now")]),e("button",{staticClass:"btn btn-primary",on:{click:t.next}},[t._v("Next")])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"plan-head"},[e("h1",[t._v("We’ve got just the plan for you")]),e("p",[t._v("Choose a subsciption and you’ll be up and selling in no time. You can upgrade, downgrade, or cancel anytime – no strings attached.")])])}],a={name:"onboarding-plans",data:function(){return{selectedPlan:null}},methods:{selectPlan:function(t){this.selectedPlan=t},skip:function(){this.selectedPlan=null,this.$router.push("/")},back:function(){this.selectedPlan=null,this.$router.go(-1)},next:function(){this.$router.push({name:"onboarding payment"})}},computed:{types:function(){return this.$store.state.subscription.subscriptions}}},c=a,l=(e("ff91"),e("2877")),o=Object(l["a"])(c,n,i,!1,null,"1705ede4",null);o.options.__file="plan.vue";s["default"]=o.exports},d018:function(t,s,e){},ff91:function(t,s,e){"use strict";var n=e("d018"),i=e.n(n);i.a}}]);
//# sourceMappingURL=chunk-8809e00e.9fe0bcb5.js.map