(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6],{397:function(t,e,n){},398:function(t,e,n){var map={"./2022-09-dmytro.webp":399,"./2022-09-oleksandr.webp":400,"./2022-09-serhiy.webp":401,"./2022-09-stepan.webp":402,"./2022-09-svitlana.webp":403,"./2022-09-yuri.webp":404,"./2023-05-beg.webp":405,"./stub.webp":406};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=398},399:function(t,e,n){t.exports=n.p+"img/2022-09-dmytro.6afabc7.webp"},400:function(t,e,n){t.exports=n.p+"img/2022-09-oleksandr.89865c9.webp"},401:function(t,e,n){t.exports=n.p+"img/2022-09-serhiy.61c9523.webp"},402:function(t,e,n){t.exports=n.p+"img/2022-09-stepan.c19f12b.webp"},403:function(t,e,n){t.exports=n.p+"img/2022-09-svitlana.5e4ed57.webp"},404:function(t,e,n){t.exports=n.p+"img/2022-09-yuri.4c4b703.webp"},405:function(t,e,n){t.exports=n.p+"img/2023-05-beg.1db5938.webp"},406:function(t,e,n){t.exports=n.p+"img/stub.534d5e5.webp"},409:function(t,e,n){"use strict";n(397)},415:function(t,e,n){"use strict";n.r(e);var r={name:"Button",props:{url:{type:Object|String},external:{type:Boolean,default:!1},link_text:{type:String,required:!0}}},o=(n(409),n(41)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t.external?t._e():n("NuxtLink",{staticClass:"action-button",attrs:{to:t.url}},[t._v(t._s(t.link_text))]),t._v(" "),t.external?n("a",{staticClass:"action-button",attrs:{href:t.url}},[t._v(t._s(t.link_text))]):t._e()],1)}),[],!1,null,"b0b49c52",null);e.default=component.exports},422:function(t,e,n){},433:function(t,e,n){"use strict";n(422)},438:function(t,e,n){"use strict";n.r(e);n(36),n(13);var r=n(0).a.extend({name:"CasePage",asyncData:function(t){var e=t.params,n=t.app,r=t.payload;if(!r){var o=n.i18n.t("projects",{returnObjects:!0}).filter((function(t){return t.id===e.id}));return 0===o.length?{title:"",details:"",image:""}:{title:o[0].title,details:o[0].details,image:o[0].image}}return{title:r.title,details:r.details,image:r.image}}}),o=(n(433),n(41)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-grid"},[r("img",{staticClass:"illustration",attrs:{src:n(398)("./"+t.image),alt:""}}),t._v(" "),r("div",{staticClass:"content"},[r("h1",[t._v(t._s(t.title))]),t._v(" "),Array.isArray(t.details)?r("div",{staticClass:"paragraphs"},t._l(t.details,(function(e){return r("p",[t._v("\n        "+t._s(e)+"\n      ")])})),0):t._e(),t._v(" "),Array.isArray(t.details)?t._e():r("p",[t._v("\n      "+t._s(t.details)+"\n    ")]),t._v(" "),r("Button",{staticClass:"back-button",attrs:{url:{path:t.localePath("index"),hash:"#what-we-do"},link_text:t.$t("back")}})],1)])}),[],!1,null,"bb4e7052",null);e.default=component.exports;installComponents(component,{Button:n(415).default})}}]);