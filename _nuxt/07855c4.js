(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{396:function(t,e,n){},398:function(t,e,n){var map={"./2022-09-dmytro.webp":399,"./2022-09-oleksandr.webp":400,"./2022-09-serhiy.webp":401,"./2022-09-stepan.webp":402,"./2022-09-svitlana.webp":403,"./2022-09-yuri.webp":404,"./2023-05-andrij-r.webp":405,"./2023-05-andrij.webp":406,"./2023-05-artem.webp":407,"./2023-05-beg.webp":408,"./2023-05-gylun.webp":409,"./2023-05-ivan.webp":410,"./2023-05-mykhailo.webp":411,"./2023-05-vasyl.webp":412,"./2023-05-vitaly.webp":413,"./stub.webp":414};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=398},399:function(t,e,n){t.exports=n.p+"img/2022-09-dmytro.6afabc7.webp"},400:function(t,e,n){t.exports=n.p+"img/2022-09-oleksandr.89865c9.webp"},401:function(t,e,n){t.exports=n.p+"img/2022-09-serhiy.61c9523.webp"},402:function(t,e,n){t.exports=n.p+"img/2022-09-stepan.c19f12b.webp"},403:function(t,e,n){t.exports=n.p+"img/2022-09-svitlana.5e4ed57.webp"},404:function(t,e,n){t.exports=n.p+"img/2022-09-yuri.4c4b703.webp"},405:function(t,e,n){t.exports=n.p+"img/2023-05-andrij-r.e1fbfd6.webp"},406:function(t,e,n){t.exports=n.p+"img/2023-05-andrij.96c9096.webp"},407:function(t,e,n){t.exports=n.p+"img/2023-05-artem.0c54862.webp"},408:function(t,e,n){t.exports=n.p+"img/2023-05-beg.1db5938.webp"},409:function(t,e,n){t.exports=n.p+"img/2023-05-gylun.a7312b0.webp"},410:function(t,e,n){t.exports=n.p+"img/2023-05-ivan.37a133b.webp"},411:function(t,e,n){t.exports=n.p+"img/2023-05-mykhailo.5100a24.webp"},412:function(t,e,n){t.exports=n.p+"img/2023-05-vasyl.6c02094.webp"},413:function(t,e,n){t.exports=n.p+"img/2023-05-vitaly.3132c58.webp"},414:function(t,e,n){t.exports=n.p+"img/stub.534d5e5.webp"},415:function(t,e,n){"use strict";n(396)},422:function(t,e,n){"use strict";n.r(e);var r={name:"ActiveCaseCard",props:{id:{type:String,required:!0},name:{type:String,required:!0},tldr:{type:String,required:!0},amount_literal:{type:String,required:!0},details:{type:String|Array,required:!0}}},o=(n(415),n(41)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("h1",[t._v(t._s(t.name))]),t._v(" "),n("p",[t._v(t._s(t.tldr))]),t._v(" "),n("div",{attrs:{id:"amounts"}},[n("p",{attrs:{id:"amount-label"}},[t._v(t._s(t.$t("active_case_card.amount"))+":")]),t._v(" "),n("p",{attrs:{id:"amount-value"}},[t._v(t._s(t.amount_literal))])]),t._v(" "),n("p",{attrs:{id:"details"}},[t._v(t._s(Array.isArray(t.details)?t.details.join(" "):t.details))])])}),[],!1,null,"e0d9d678",null);e.default=component.exports},428:function(t,e,n){},436:function(t,e,n){"use strict";n(428)},444:function(t,e,n){"use strict";n.r(e);var r={name:"CasesPage",asyncData:function(t){t.app}},o=(n(436),n(41)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"container"}},[r("NuxtLink",{staticClass:"left",attrs:{to:{path:t.localePath("index")}}},[t._v("\n    < "+t._s(t.$t("to_the_main_page"))+"\n  ")]),t._v(" "),r("h1",[t._v(t._s(t.$t("cases_page.active_header")))]),t._v(" "),t._l(t.$t("active_cases",{returnObjects:!0}),(function(text){return r("ActiveCaseCard",{key:text.id,attrs:{id:text.id,name:text.name,tldr:text.tldr,amount_literal:text.amount_literal,details:text.details}})})),t._v(" "),r("h1",[t._v(t._s(t.$t("cases_page.inactive_header")))]),t._v(" "),t._l(t.$t("projects",{returnObjects:!0}),(function(e){return r("div",{staticClass:"content-grid"},[r("img",{staticClass:"illustration",attrs:{src:n(398)("./"+e.image),alt:"photo"}}),t._v(" "),r("div",{staticClass:"content"},[r("h2",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.details))])])])}))],2)}),[],!1,null,"3ad29cb0",null);e.default=component.exports;installComponents(component,{ActiveCaseCard:n(422).default})}}]);