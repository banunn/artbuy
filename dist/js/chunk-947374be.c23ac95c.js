(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-947374be"],{"0226":function(t,e,a){"use strict";var s=a("d0d7"),i=a.n(s);i.a},"0304":function(t,e,a){"use strict";var s=a("0d63"),i=a.n(s);i.a},"0d63":function(t,e,a){},"110a":function(t,e,a){},"2b94":function(t,e,a){},"2d46":function(t,e,a){"use strict";var s=a("110a"),i=a.n(s);i.a},3325:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("art-widget",{attrs:{title:"Sales Overview"}},[a("template",{slot:"body"},[a("div",{staticClass:"sales-list"},t._l(t.sales,function(t,e){return a("art-sale",{key:e,attrs:{sale:t}})}),1)]),a("template",{slot:"footer"},[a("footer",{staticClass:"foot"},[a("div",{staticClass:"label"},[t._v("\n                Total Sales\n            ")]),a("div",{staticClass:"total-price"},[t._v("\n                "+t._s(t._f("currency")(t.totalPrice))+"\n            ")])])])],2)},i=[],o=(a("ac6a"),a("8940")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sale"},[a("div",{staticClass:"detail"},[a("figure",{staticClass:"img"},[a("img",{attrs:{src:t.sale.photoUrl,alt:""}})]),a("div",{staticClass:"meta"},[a("header",{staticClass:"title"},[t._v(t._s(t.sale.name))]),a("span",[t._v(t._s("by "+t.sale.artist))])])]),a("div",{staticClass:"price"},[a("span",[t._v(t._s(t._f("currency")(t.sale.price)))])])])},n=[],l={name:"sales_widget_sale",props:{sale:Object}},c=l,p=(a("6690"),a("2877")),d=Object(p["a"])(c,r,n,!1,null,null,null);d.options.__file="sale.vue";var m=d.exports,u={name:"sales_widget",components:{artWidget:o["a"],artSale:m},data:function(){return{sales:[{photoUrl:"https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80",name:"Moon Fever",artist:"West Street Studios",price:3800},{photoUrl:"https://images.unsplash.com/photo-1531489956451-20957fab52f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80",name:"The Amazing Hubble",artist:"West Street Studios",price:1200},{photoUrl:"https://images.unsplash.com/photo-1533568024501-de28de1280c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=180&w=180&q=80",name:"Asteroids",artist:"West Street Studios",price:2600}]}},computed:{totalPrice:function(){var t=this,e=0;return t.sales.forEach(function(t){e+=t.price}),e}}},f=u,h=(a("7dfe"),Object(p["a"])(f,s,i,!1,null,"34a352fb",null));h.options.__file="sales-widget.vue";e["a"]=h.exports},"3c0c":function(t,e,a){"use strict";var s=a("6a1b"),i=a.n(s);i.a},4883:function(t,e,a){},6690:function(t,e,a){"use strict";var s=a("2b94"),i=a.n(s);i.a},"6a1b":function(t,e,a){},"7dfe":function(t,e,a){"use strict";var s=a("4883"),i=a.n(s);i.a},"81a6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-wrap"},[a("div",{staticClass:"main"},t._l(t.posts,function(t,e){return a("art-post",{key:e,attrs:{post:t}})}),1),a("aside",{staticClass:"sidebar"},[a("recent-followers"),a("art-sales")],1)])},i=[],o=a("3325"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("art-widget",{attrs:{title:"Recent Followers"}},[a("template",{slot:"body"},t._l(t.followers,function(t,e){return a("art-follower",{key:e,attrs:{follower:t}})}),1),a("template",{slot:"footer"},[a("button",{staticClass:" btn btn-txt icon-btn"},[t._v("View All Followers "),a("i",{staticClass:"material-icons"},[t._v("chevron_right")])])])],2)},n=[],l=a("8940"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"follower-item"},[a("figure",{staticClass:"img"},[a("img",{attrs:{src:t.follower.photoUrl,alt:""}})]),a("div",{staticClass:"detail"},[a("header",[a("span",{staticClass:"name"},[t._v(t._s(t.follower.name))]),t._v(" started following you")]),a("span",[t._v(t._s(t.follower.date))])])])},p=[],d={name:"follower",props:{follower:Object}},m=d,u=(a("3c0c"),a("2877")),f=Object(u["a"])(m,c,p,!1,null,"e5653b4e",null);f.options.__file="follower-item.vue";var h=f.exports,v={name:"followers_widget",components:{artWidget:l["a"],artFollower:h},data:function(){return{followers:[{name:"Jacob Harrison",photoUrl:"https://randomuser.me/api/portraits/men/87.jpg",date:"Today at 12:46 PM"},{name:"Hailey Hilson",photoUrl:"https://randomuser.me/api/portraits/women/77.jpg",date:"Today at 9:18 AM"},{name:"West Street",photoUrl:"https://randomuser.me/api/portraits/men/18.jpg",date:"Yesterday at 11:32 AM"},{name:"Jason Sterling",photoUrl:"https://randomuser.me/api/portraits/men/15.jpg",date:"October 25 at 11:24 PM"},{name:"Alex Owens",photoUrl:"https://randomuser.me/api/portraits/women/88.jpg",date:"October 25 at 10:03 AM"}]}}},_=v,b=(a("ffe6"),Object(u["a"])(_,r,n,!1,null,"873dc3ec",null));b.options.__file="widget.vue";var C=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post"},[a("post-header",{attrs:{meta:t.post.meta,type:t.post.type}}),"event"==t.post.type?a("event-post",{attrs:{post:t.post}}):t._e(),"work"==t.post.type?a("work-post",{attrs:{post:t.post}}):t._e()],1)},g=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"post-header"},[a("figure",{staticClass:"user-img"},[a("img",{attrs:{src:t.meta.author.photoUrl,alt:""}})]),"work"==t.type?a("div",{staticClass:"detail"},[a("header",[a("span",{staticClass:"bold"},[t._v(t._s(t.meta.author.name))]),t._v(" commented on "),a("span",{staticClass:"bold"},[t._v(" "+t._s(t.meta.targetUser.name+"'s'"))]),t._v(" work\n        ")]),a("span",{staticClass:"time"},[t._v(t._s(t.meta.date))])]):t._e(),"event"==t.type?a("div",{staticClass:"detail"},[a("header",[a("span",{staticClass:"bold"},[t._v(t._s(t.meta.author.name))]),t._v(" created an event\n        ")]),a("span",{staticClass:"time"},[t._v(t._s(t.meta.date))])]):t._e()])},S=[],j={name:"post_header",props:{meta:Object,type:String}},M=j,T=(a("0304"),Object(u["a"])(M,y,S,!1,null,"592754ec",null));T.options.__file="post-header.vue";var O=T.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"event"},[a("div",{staticClass:"cal"},[a("div",{staticClass:"cal-head"},[t._v("\n            "+t._s(t.cal.month)+"\n        ")]),a("div",{staticClass:"cal-body"},[t._v("\n            "+t._s(t.cal.day)+"\n        ")])]),a("div",{staticClass:"detail"},[a("h2",[t._v(t._s(t.post.content.eventTitle))]),a("span",[t._v(t._s(t.dateString))]),a("div",{staticClass:"time"},[a("span",[t._v(t._s(t.startTime+" - "+t.endTime))])])])])},x=[],k=(a("cadf"),a("551c"),a("097d"),{name:"event-post",props:{post:Object},computed:{date:function(){return this.post.content.date?this.post.content.date:null},startTime:function(){var t=this.post.content.startTime;return this.$moment(t).format("hh:mm A")},endTime:function(){var t=this.post.content.endTime;return this.$moment(t).format("hh:mm A")},cal:function(){var t=this.date,e=this.$moment(t).format("MMM"),a=this.$moment(t).format("D");return{month:e,day:a}},dateString:function(){var t=this;return this.$moment(t.date).format("dddd, MMMM Do, YYYY")}}}),U=k,E=(a("2d46"),Object(u["a"])(U,L,x,!1,null,"44460e5c",null));E.options.__file="event.vue";var A=E.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-body"},[a("figure",{staticClass:"post-img"},[a("img",{attrs:{src:t.post.content.photoUrl,alt:""}}),a("footer",{staticClass:"work-meta"},[t._m(0),a("div",{staticClass:"social"},[a("button",{staticClass:"social-action"},[a("i",{staticClass:"material-icons"},[t._v("thumb_up")]),a("span",[t._v(t._s(t.post.social.likes))])]),a("button",{staticClass:"social-action"},[a("i",{staticClass:"material-icons"},[t._v("mode_comment")]),a("span",[t._v(t._s(t.post.social.comments))])])])])])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cta"},[a("button",{staticClass:"btn-primary"},[a("i",{staticClass:"material-icons"},[t._v("thumb_up")]),a("span",[t._v("Appreciate")])])])}],H={name:"work-post",props:{post:Object}},W=H,P=(a("b3a4"),Object(u["a"])(W,$,D,!1,null,"0a8c55cb",null));P.options.__file="work.vue";var J=P.exports,V={name:"timeline-post",components:{postHeader:O,eventPost:A,workPost:J},props:{post:Object}},B=V,F=(a("e3e0"),Object(u["a"])(B,w,g,!1,null,"742bc988",null));F.options.__file="post.vue";var q=F.exports,G=[{id:162347,type:"work",meta:{date:"Today at 9:18 AM",author:{id:34215,name:"Dylan Campbell",photoUrl:"https://randomuser.me/api/portraits/men/15.jpg"},targetUser:{id:5489,name:"Byron Jones",photoUrl:"https://randomuser.me/api/portraits/men/5.jpg"}},social:{likes:23,comments:43},content:{photoUrl:"https://images.unsplash.com/photo-1534522903854-3b9314fc12f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",copy:""}},{id:162347,type:"event",meta:{date:"Today at 9:18 AM",author:{id:34215,name:"West Street Studios",photoUrl:"https://randomuser.me/api/portraits/women/18.jpg"}},social:{likes:3,comments:4},content:{eventTitle:"Winter Wonderland Show",date:1545354e6,startTime:1545354e6,endTime:15453648e5}},{id:162347,type:"work",meta:{date:"Yesterday at 6:22 AM",author:{id:34215,name:"Dylan Campbell",photoUrl:"https://randomuser.me/api/portraits/men/15.jpg"},targetUser:{id:2133,name:"Samantha Rhett",photoUrl:"https://randomuser.me/api/portraits/women/7.jpg"}},social:{likes:13,comments:3},content:{photoUrl:"https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",copy:""}}],R={name:"User_Dashboard",data:function(){return{posts:G}},components:{artSales:o["a"],recentFollowers:C,artPost:q}},Y=R,Q=(a("0226"),Object(u["a"])(Y,s,i,!1,null,"469627c2",null));Q.options.__file="dashboard.vue";e["default"]=Q.exports},8940:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widget-wrap"},[a("div",{staticClass:"widget"},[t.title?a("header",{staticClass:"w-head"},[a("h3",{staticClass:"label"},[t._v(t._s(t.title))])]):t._e(),a("div",{staticClass:"w-body"},[t._t("body")],2),a("footer",{staticClass:"w-foot"},[t._t("footer")],2)]),t.help?a("div",{staticClass:"widget-help"},[t._m(0),a("div",{staticClass:"help-body"},[a("header",[t._v(t._s(t.help.title))]),a("p",[t._v(t._s(t.help.text))])])]):t._e()])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"icon"},[a("i",{staticClass:"material-icons"},[t._v("help_outline")])])}],o={name:"widget",props:{title:String,help:Object}},r=o,n=(a("f18d"),a("2877")),l=Object(n["a"])(r,s,i,!1,null,"01a55dd6",null);l.options.__file="widget.vue";e["a"]=l.exports},a9c6:function(t,e,a){},ac6a:function(t,e,a){for(var s=a("cadf"),i=a("0d58"),o=a("2aba"),r=a("7726"),n=a("32e9"),l=a("84f2"),c=a("2b4c"),p=c("iterator"),d=c("toStringTag"),m=l.Array,u={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(u),h=0;h<f.length;h++){var v,_=f[h],b=u[_],C=r[_],w=C&&C.prototype;if(w&&(w[p]||n(w,p,m),w[d]||n(w,d,_),l[_]=m,b))for(v in s)w[v]||o(w,v,s[v],!0)}},b3a4:function(t,e,a){"use strict";var s=a("ff8c"),i=a.n(s);i.a},d0d7:function(t,e,a){},e3e0:function(t,e,a){"use strict";var s=a("e6d2"),i=a.n(s);i.a},e428:function(t,e,a){},e6d2:function(t,e,a){},f18d:function(t,e,a){"use strict";var s=a("a9c6"),i=a.n(s);i.a},ff8c:function(t,e,a){},ffe6:function(t,e,a){"use strict";var s=a("e428"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-947374be.c23ac95c.js.map