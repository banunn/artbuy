(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47678e14"],{1534:function(t,e,s){},"18db":function(t,e,s){},5490:function(t,e,s){},"54cd":function(t,e,s){},"595a":function(t,e,s){},"63a6":function(t,e,s){"use strict";var a=s("1534"),i=s.n(a);i.a},"664a":function(t,e,s){"use strict";var a=s("9207"),i=s.n(a);i.a},"6fb0":function(t,e,s){"use strict";var a=s("54cd"),i=s.n(a);i.a},"7ceb":function(t,e,s){"use strict";var a=s("595a"),i=s.n(a);i.a},"855c":function(t,e,s){"use strict";var a=s("f3af"),i=s.n(a);i.a},"8a30":function(t,e,s){"use strict";var a=s("fa24"),i=s.n(a);i.a},9207:function(t,e,s){},"94d3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-settings"},[s("main",{staticClass:"main"},[s("user-detail"),s("subscription-non-member"),s("subscription"),s("payment-methods")],1),s("aside",{staticClass:"sidebar"},[s("manage-password"),s("order-history"),s("video-link"),s("artist-donate")],1)])},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("art-widget",{attrs:{title:"Custom URL",help:t.help}},[s("template",{slot:"body"},[s("header",{staticClass:"url"},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"input sm",attrs:{type:"text",placeholder:t.user.firstName+"-"+t.user.lastName}}),s("aside",{staticClass:"context"},[t._v(".artbuy.com")])])])]),s("template",{slot:"footer"},[s("button",{staticClass:"btn-block-primary"},[t._v("\n            URL Saved\n        ")])])],2)},n=[],r=s("8940"),c={name:"manage-password-widget",components:{artWidget:r["a"]},data:function(){return{help:{title:"Give people a direct link to your profile",text:"Custom URL’s allow you to create a unique link that takes users directly to your ArtBuy profile. Set up your custom URL and share it across your social media accounts to promote your work!"}}},computed:{user:function(){return this.$store.getters.userInfo}}},l=c,u=(s("fdd1"),s("2877")),d=Object(u["a"])(l,o,n,!1,null,"3b0d0cb4",null);d.options.__file="custom-url.vue";var p=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("art-widget",{attrs:{title:"Change Password"}},[s("template",{slot:"body"},[s("input",{staticClass:"input",attrs:{type:"password",placeholder:"Current password"}}),s("input",{staticClass:"input",attrs:{type:"password",placeholder:"New password"}}),s("input",{staticClass:"input",attrs:{type:"password",placeholder:"Confirm new password"}})]),s("template",{slot:"footer"},[s("button",{staticClass:"btn-block-primary"},[t._v("\n            Update Password\n        ")])])],2)},f=[],h={name:"manage-password-widget",components:{artWidget:r["a"]}},v=h,b=(s("af1d"),Object(u["a"])(v,m,f,!1,null,"1d2708e3",null));b.options.__file="manage-password.vue";var _=b.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("art-widget",{attrs:{title:"Order History"}},[s("ul",{staticClass:"order-list",attrs:{slot:"body"},slot:"body"},t._l(t.orders,function(e,a){return s("li",{key:a},[s("div",{staticClass:"detail"},[s("figure",{staticClass:"img"},[s("img",{attrs:{src:e.photoUrl,alt:""}})]),s("div",{staticClass:"meta"},[s("header",[t._v(t._s(e.name))]),s("footer",[t._v(t._s("by "+e.artistName))])])]),s("div",{staticClass:"price"},[s("span",[t._v(t._s(t._f("currency")(e.price)))])])])}),0)])},y=[],g={name:"order-history-widget",components:{artWidget:r["a"]},data:function(){return{orders:[{name:"Look Up In The Sky",artistName:"West Street Studios",price:3800,photoUrl:"https://images.unsplash.com/photo-1529157366686-70612f8b5fc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80"},{name:"Telescopes 101",artistName:"West Street Studios",price:1250,photoUrl:"https://images.unsplash.com/photo-1533653118617-72f0b4cc9933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80"},{name:"The Universe Through…",artistName:"West Street Studios",price:1800,photoUrl:"https://images.unsplash.com/photo-1518715058720-e56f02e77fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80"},{name:"Space The Final Frontier",artistName:"West Street Studios",price:6620,photoUrl:"https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80"},{name:"Astronomy Or Astrology",artistName:"West Street Studios",price:3217,photoUrl:"https://images.unsplash.com/photo-1531489956451-20957fab52f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80"}]}}},w=g,k=(s("7ceb"),Object(u["a"])(w,C,y,!1,null,"54694291",null));k.options.__file="order-history.vue";var x=k.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ab-widget",{attrs:{title:"Payment Methods"}},[s("template",{slot:"body"},[t._l(t.methods,function(t,e){return s("p-method",{key:e,attrs:{method:t,editable:!0}})}),s("div",{staticClass:"foot",on:{click:t.openModal}},[s("div",{staticClass:"icon"},[s("i",{staticClass:"material-icons"},[t._v("credit_card")])]),s("div",{staticClass:"detail"},[s("header",{staticClass:"head"},[t._v("Add New Payment Method")])]),s("div",{staticClass:"ctrl"},[s("i",{staticClass:"material-icons"},[t._v("keyboard_arrow_right")])])])],2)],2)},S=[],$=s("0366"),M={name:"payment_methods_widget",computed:{methods:function(){return this.$store.getters.userPaymentMethods}},components:{pMethod:$["a"]},methods:{openModal:function(){this.$store.dispatch("openPaymentModal")}}},O=M,U=(s("855c"),Object(u["a"])(O,E,S,!1,null,"07347d50",null));U.options.__file="payment-widget.vue";var j=U.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-subscription"},[s("header",{staticClass:"label"},[t._v("subscription")]),s("div",{staticClass:"tier-list"},t._l(t.tiers,function(e,a){return s("div",{key:a,staticClass:"tier",class:{selected:e.selected}},[s("div",{staticClass:"detail"},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.selected?"radio_button_checked":"radio_button_unchecked"))]),s("span",[t._v(t._s(e.name))])]),s("div",{staticClass:"meta"},[s("span",[t._v(t._s("$"+e.price+"/"+e.frequency))])])])}),0),s("footer",{staticClass:"foot"},[t._m(0),s("div",{staticClass:"ctrl"},[s("button",{staticClass:"btn-light"},[t._v("Cancel")]),s("button",{staticClass:"btn-dark",on:{click:t.viewSubs}},[t._v("Change Plan")])])])])},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"link"},[s("a",[t._v("View Billing History")])])}],B={name:"user_subscription",data:function(){return{tiers:[{name:"Individual",price:"0",frequency:"month",selected:!0},{name:"Team",price:"9.95",frequency:"month",selected:!1},{name:"Enterprise",price:"49.96",frequency:"month",selected:!1}]}},methods:{viewSubs:function(){return this.$store.dispatch("openSubscriptionModal")}}},W=B,L=(s("664a"),Object(u["a"])(W,N,q,!1,null,"4f8dba6b",null));L.options.__file="subscription.vue";var D=L.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-subscription"},[s("header",{staticClass:"label"},[t._v("subscription")]),s("div",{staticClass:"us-content"},[s("p",[t._v(t._s(t.msg))])]),t._m(0)])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"foot"},[s("button",{staticClass:"btn-primary btn-dark"},[t._v("\n            Choose Plan\n        ")])])}],H={name:"non_member_subscription",data:function(){return{msg:"Choose a subscription and start selling your work for as little as $9.95/month!"}},methods:{viewSubs:function(){return this.$store.dispatch("openSubscriptionModal")}}},F=H,J=(s("b7dd"),Object(u["a"])(F,P,A,!1,null,"7df80239",null));J.options.__file="subscription-non-member.vue";var R=J.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-detail form"},[s("div",{staticClass:"form-row flex"},[s("div",{staticClass:"form-group"},[s("header",{staticClass:"label"},[t._v("\n                First Name\n            ")]),s("input",{staticClass:"input sm",attrs:{type:"text",placeholder:"First Name"}})]),s("div",{staticClass:"form-group"},[s("header",{staticClass:"label"},[t._v("\n                Last Name\n            ")]),s("input",{staticClass:"input sm",attrs:{type:"text",placeholder:"Last Name"}})])]),s("div",{staticClass:"form-row"},[s("header",{staticClass:"label"},[t._v("\n            Email\n        ")]),s("input",{staticClass:"input sm",attrs:{type:"email",placeholder:"mail@address.com"}})]),s("div",{staticClass:"form-row"},[s("header",{staticClass:"label"},[t._v("About Me")]),s("textarea",{staticClass:"textarea",attrs:{placeholder:"just some text about me..."}})]),s("header",{staticClass:"label"},[t._v("Location")]),s("div",{staticClass:"form-row flex"},[s("div",[s("input",{staticClass:"input sm",attrs:{type:"text",placeholder:"city"}})]),s("div",[s("select",{staticClass:"select"},[s("option",{attrs:{value:"United States"}},[t._v("United States")])])]),s("div",[s("select",{staticClass:"select"},[s("option",{attrs:{value:"California"}},[t._v("California")])])])])])}],I={name:"user_detail_form"},V=I,Y=(s("8a30"),Object(u["a"])(V,T,Q,!1,null,"f2b492f6",null));Y.options.__file="user-detail.vue";var G=Y.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"donate-widget"},[t._m(0),s("div",{staticClass:"w-content"},[s("p",{domProps:{textContent:t._s(t.summary)}}),s("a",{staticClass:"link",attrs:{href:"#"}},[t._v("Learn More")])]),s("footer",{staticClass:"w-foot"},[s("button",{staticClass:"hero-btn",on:{click:function(e){t.$store.dispatch("openDonationModal")}}},[t._v("\n            Donate Now\n        ")])])])},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"head"},[a("i",{staticClass:"icon"},[a("img",{attrs:{src:s("4ca5"),alt:""}})]),a("span",[t._v("Donate to ARTBUY Artist Fund")])])}],X={name:"donate-widget",data:function(){return{summary:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quidem a fugiat quis aliquid odit qui culpa sed non, temporibus obcaecati saepe perspiciatis earum numquam."}}},Z=X,tt=(s("6fb0"),Object(u["a"])(Z,z,K,!1,null,"09af342c",null));tt.options.__file="donate-widget.vue";var et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ab-widget",{attrs:{title:"Video Link"}},[s("template",{slot:"body"},[s("header",{staticClass:"link"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],attrs:{type:"text"},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}}),s("button",{staticClass:"btn"},[t._v("Save")])]),s("div",{staticClass:"video"},[s("video",{attrs:{width:"282",height:"167",poster:t.video.thumb,controls:""}},[s("source",{attrs:{src:t.video.sources[0],type:"video/mp4"}}),t._v("\n        Your browser does not support the video tag.\n      ")]),s("div",{staticClass:"video-detail"},[s("h4",[t._v(t._s(t.video.title))]),s("span",[t._v(t._s(t.video.subtitle))])])])])],2)},at=[],it={name:"video-link-widget",data:function(){return{link:"https://bit.ly/2FRlfkd",video:{description:"Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",sources:["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"],subtitle:"Uploaded on February 1, 2019",thumb:"https://images.unsplash.com/photo-1551076192-487813ceb8dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80",title:"Ellie Figueroa 2019 Art Reel"}}}},ot=it,nt=(s("63a6"),Object(u["a"])(ot,st,at,!1,null,"77c24b2f",null));nt.options.__file="video-link-widget.vue";var rt=nt.exports,ct={name:"account-settings",components:{customUrl:p,managePassword:_,orderHistory:x,paymentMethods:j,subscription:D,userDetail:G,subscriptionNonMember:R,artistDonate:et,videoLink:rt}},lt=ct,ut=(s("fba9"),Object(u["a"])(lt,a,i,!1,null,"122e88f6",null));ut.options.__file="account-settings.vue";e["default"]=ut.exports},ae45:function(t,e,s){},af1d:function(t,e,s){"use strict";var a=s("ae45"),i=s.n(a);i.a},b7dd:function(t,e,s){"use strict";var a=s("5490"),i=s.n(a);i.a},f355:function(t,e,s){},f3af:function(t,e,s){},fa24:function(t,e,s){},fba9:function(t,e,s){"use strict";var a=s("18db"),i=s.n(a);i.a},fdd1:function(t,e,s){"use strict";var a=s("f355"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-47678e14.3ca7680a.js.map