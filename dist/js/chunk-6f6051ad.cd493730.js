(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f6051ad"],{"73ed":function(e,t,n){},b517:function(e,t,n){"use strict";var s=n("73ed"),l=n.n(s);l.a},f44d:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome-page"},[n("div",{staticClass:"wrap"},[e._m(0),n("div",{staticClass:"form-row"},[n("header",{staticClass:"label"},[e._v("\n                I am here to\n            ")]),n("div",{staticClass:"form-row flex"},e._l(e.intention,function(t){return n("button",{key:t.id,staticClass:"select-btn btn",class:{selected:e.selectedIntention.id==t.id},on:{click:function(n){e.selectIntention(t)}}},[e._v(e._s(t.name))])}),0)]),n("div",{staticClass:"form-row"},[n("header",{staticClass:"label"},[e._v("\n                I Am\n            ")]),n("div",{staticClass:"form-row flex"},e._l(e.role,function(t){return n("button",{key:t.id,staticClass:"select-btn btn",class:{selected:e.selectedRole.id==t.id},on:{click:function(n){e.selectRole(t)}}},[e._v(e._s(t.name))])}),0)]),n("footer",{staticClass:"form-foot"},[n("button",{staticClass:"btn-primary",on:{click:e.next}},[e._v("next")])])])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"head"},[n("h1",[e._v("Welcome to ArtBuy")]),n("p",[e._v("Tell us a little about yourself")])])}],i=(n("cadf"),n("551c"),n("097d"),{name:"welcome",data:function(){return{selectedIntention:"",selectedRole:"",intention:[{name:"Buy Art",id:1,selected:!1},{name:"Sell Art",id:2,selected:!1},{name:"Both",id:3,selected:!1}],role:[{name:"An Artist",id:1,selected:!1},{name:"A Collector",id:2,selected:!1},{name:"A Gallery",id:3,selected:!1}]}},methods:{selectIntention:function(e){console.log(e),this.selectedIntention=e},selectRole:function(e){this.selectedRole=e},next:function(){2==this.selectedIntention.id||3==this.selectedIntention.id?this.$router.push({name:"onboarding plan"}):this.$store.dispatch("confirmAccountModal")}}}),c=i,o=(n("b517"),n("2877")),a=Object(o["a"])(c,s,l,!1,null,"41423689",null);a.options.__file="welcome.vue";t["default"]=a.exports}}]);
//# sourceMappingURL=chunk-6f6051ad.cd493730.js.map