(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75f39453"],{ac15:function(s,t,a){},be1b:function(s,t,a){"use strict";var o=a("ac15"),e=a.n(o);e.a},c8a4:function(s,t,a){"use strict";a.r(t);var o=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"password-page"},[a("div",{staticClass:"password-wrap"},[a("header",{staticClass:"head"},[a("h1",[s._v("Reset Password")]),a("h4",[s._v("Choose a new password for "+s._s(s.userEmail))])]),a("div",{staticClass:"form-wrap form"},[a("div",{staticClass:"form-row"},[a("header",{staticClass:"label"},[s._v("New Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}})]),a("div",{staticClass:"form-row"},[a("header",{staticClass:"label"},[s._v("Confirm Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.confirm,expression:"confirm"}],staticClass:"input",attrs:{type:"password"},domProps:{value:s.confirm},on:{input:function(t){t.target.composing||(s.confirm=t.target.value)}}})])]),a("footer",{staticClass:"foot"},[a("button",{staticClass:"btn txt-btn btn-secondary",on:{click:function(t){s.$router.push("/")}}},[s._v("Cancel")]),a("button",{staticClass:"btn txt-btn btn-primary",class:{disabled:!s.match},on:{click:function(t){s.$router.push({name:"password reset check"})}}},[s._v("Reset Password")])])])])},e=[],r={name:"welcome",data:function(){return{password:"",confirm:"",userEmail:"johnsmith@gmail.com"}},methods:{},computed:{match:function(){return!(!this.password.length||!this.confirm.length)&&this.password==this.confirm}}},n=r,i=(a("be1b"),a("2877")),c=Object(i["a"])(n,o,e,!1,null,"b841e70e",null);c.options.__file="forgot-password.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-75f39453.17d79c64.js.map