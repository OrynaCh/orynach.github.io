(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5],{326:function(t,e,r){t.exports=r.p+"img/pz.946f5ce.svg"},327:function(t,e,r){},328:function(t,e,r){},329:function(t,e,r){},330:function(t,e,r){},331:function(t,e,r){var map={"./2022-09-dmytro.webp":332,"./2022-09-oleksandr.webp":333,"./2022-09-serhiy.webp":334,"./2022-09-svitlana.webp":335,"./2022-09-taras.webp":336,"./2022-09-yuri.webp":337,"./stub.webp":338};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=331},332:function(t,e,r){t.exports=r.p+"img/2022-09-dmytro.6afabc7.webp"},333:function(t,e,r){t.exports=r.p+"img/2022-09-oleksandr.89865c9.webp"},334:function(t,e,r){t.exports=r.p+"img/2022-09-serhiy.61c9523.webp"},335:function(t,e,r){t.exports=r.p+"img/2022-09-svitlana.5e4ed57.webp"},336:function(t,e,r){t.exports=r.p+"img/2022-09-taras.c19f12b.webp"},337:function(t,e,r){t.exports=r.p+"img/2022-09-yuri.4c4b703.webp"},338:function(t,e,r){t.exports=r.p+"img/stub.534d5e5.webp"},339:function(t,e,r){"use strict";r(327)},340:function(t,e,r){"use strict";r(328)},341:function(t,e,r){"use strict";r(329)},342:function(t,e,r){"use strict";r(330)},343:function(t,e,r){},345:function(t,e,r){"use strict";r.r(e);var o={name:"Button",props:{url:{type:String},link_text:{type:String,required:!0}}},n=(r(339),r(40)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("a",{staticClass:"action-button",attrs:{href:t.url}},[t._v(t._s(t.link_text))])])}),[],!1,null,"27c98134",null);e.default=component.exports},346:function(t,e,r){"use strict";r.r(e);var o={name:"ActionCard",props:{title:{type:String,required:!0},image:{type:String,required:!0}}},n=(r(340),r(40)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"root"},[r("img",{staticClass:"action-image",attrs:{src:t.image,alt:""}}),t._v(" "),r("h3",{staticClass:"action-title"},[t._v(t._s(t.title))])])}),[],!1,null,"98732230",null);e.default=component.exports},347:function(t,e,r){"use strict";r.r(e);var o={name:"Badge",props:{brief:{type:String,required:!0},details:{type:String,required:!0}}},n=(r(341),r(40)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("img",{staticClass:"icon",attrs:{src:r(326)}}),t._v(" "),o("h3",{staticClass:"brief"},[t._v(t._s(t.brief))]),t._v(" "),o("p",{staticClass:"details"},[t._v(t._s(t.details))])])}),[],!1,null,"7d2c6323",null);e.default=component.exports},348:function(t,e,r){"use strict";r.r(e);var o={name:"ProjectCard",props:{id:{type:String,required:!0},image:{type:String,required:!0},title:{type:String,required:!0},details:{type:String,required:!0}}},n=(r(342),r(40)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"project-link",attrs:{to:t.localePath("/case/"+t.id)}},[r("div",{staticClass:"root"},[r("div",{staticClass:"image-with-subtitle"},[r("div",{staticClass:"project-image-container"},[r("img",{staticClass:"project-image",attrs:{src:t.image,alt:""}})]),t._v(" "),r("h3",{staticClass:"project-title"},[t._v(t._s(t.title))])]),t._v(" "),r("p",{staticClass:"details"},[t._v(t._s(t.details))])])])}),[],!1,null,"01a11d72",null);e.default=component.exports},349:function(t,e,r){t.exports=r.p+"img/diagnostics.d00fb84.webp"},350:function(t,e,r){t.exports=r.p+"img/treatment-conditions.ce170d5.webp"},351:function(t,e,r){t.exports=r.p+"img/rehab.a1a7b4b.webp"},352:function(t,e,r){"use strict";r(343)},355:function(t,e,r){"use strict";r.r(e);r(34);var o=r(0),n=r(148),c=o.a.extend({name:"IndexPage",asyncData:function(t){return{allProjects:t.app.i18n.t("projects",{returnObjects:!0}),showAll:!1,PATRON_FORM_LINK:n.d,COSSACK_FORM_LINK:n.b}},computed:{projects:function(){return this.$data.showAll?this.$data.allProjects:this.$data.allProjects.slice(0,3)}},methods:{toggleShowAll:function(){this.$data.showAll=!0}}}),l=(r(352),r(40)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("div",{staticClass:"slogan"},[o("h1",{staticStyle:{color:"white"}},[t._v(t._s(t.$t("slogan")))])]),t._v(" "),o("div",{staticClass:"about-us"},[o("div",{staticClass:"block"},[o("h1",[t._v(t._s(t.$t("about_us")))]),t._v(" "),t._l(t.$t("about_us_text",{returnObjects:!0}),(function(text){return o("p",{staticClass:"patron-paragraph"},[t._v(t._s(text))])})),t._v(" "),o("div",{staticClass:"equal-col-stack"},[o("Button",{attrs:{link_text:t.$t("wanna_be_a_patron"),url:"#become-a-patron"}}),t._v(" "),o("Button",{attrs:{link_text:t.$t("help_needed"),url:"#help-needed"}})],1)],2)]),t._v(" "),o("div",{staticClass:"block",attrs:{id:"become-a-patron"}},[o("img",{staticClass:"action-logo",attrs:{src:r(326),alt:"become a patron"}}),t._v(" "),o("h3",[t._v(t._s(t.$t("become_a_patron")))]),t._v(" "),o("p",{staticClass:"patron-paragraph"},[t._v(t._s(t.$t("become_a_patron_body.pre")))]),t._v(" "),o("h3",[t._v(t._s(t.$t("become_a_patron_body.your-contribution")))])]),t._v(" "),o("div",{staticClass:"equal-col-stack fullwidth"},[o("ActionCard",{attrs:{title:t.$t("patron_cards.diag"),image:r(349)}}),t._v(" "),o("ActionCard",{attrs:{title:t.$t("patron_cards.cond"),image:r(350)}}),t._v(" "),o("ActionCard",{attrs:{title:t.$t("patron_cards.rehab"),image:r(351)}})],1),t._v(" "),o("div",{staticClass:"block"},[o("h3",[t._v(t._s(t.$t("become_a_patron_badges.header")))]),t._v(" "),o("Badge",{attrs:{details:t.$t("become_a_patron_badges.option1.details"),brief:t.$t("become_a_patron_badges.option1.brief")}}),t._v(" "),o("Badge",{attrs:{details:t.$t("become_a_patron_badges.option2.details"),brief:t.$t("become_a_patron_badges.option2.brief")}}),t._v(" "),o("Badge",{attrs:{details:t.$t("become_a_patron_badges.option3.details"),brief:t.$t("become_a_patron_badges.option3.brief")}}),t._v(" "),o("p",{staticClass:"patron-paragraph"},[t._v(t._s(t.$t("become_a_patron_body.post")))]),t._v(" "),o("p",{staticClass:"patron-paragraph"},[o("span",[t._v(t._s(t.$t("become_a_patron_footer.contact_us")))]),t._v(" "),o("NuxtLink",{attrs:{to:{path:t.localePath("index"),hash:"#contacts"}}},[t._v("\n        "+t._s(t.$t("become_a_patron_footer.directly"))+"\n      ")]),t._v(" "),o("span",[t._v(t._s(t.$t("become_a_patron_footer.or_fill")))]),t._v(" "),o("a",{attrs:{href:t.PATRON_FORM_LINK}},[t._v(t._s(t.$t("become_a_patron_footer.patron_form")))])],1),t._v(" "),o("Button",{staticClass:"right-button",attrs:{link_text:t.$t("become_a_patron_button"),url:t.PATRON_FORM_LINK}})],1),t._v(" "),o("div",{staticClass:"block",attrs:{id:"help-needed"}},[o("img",{staticClass:"action-logo",attrs:{src:r(326),alt:"become a patron"}}),t._v(" "),o("h3",[t._v(t._s(t.$t("help_needed")))]),t._v(" "),o("p",{staticClass:"patron-paragraph"},[t._v("\n      "+t._s(t.$t("help_needed_block.contact_us_if"))+"\n    ")]),t._v(" "),o("ul",[o("li",[t._v(t._s(t.$t("help_needed_block.option1")))]),t._v(" "),o("li",[t._v(t._s(t.$t("help_needed_block.option2")))])]),t._v(" "),o("p",{staticClass:"patron-paragraph"},[t._v("\n      "+t._s(t.$t("help_needed_block.extra"))+"\n    ")]),t._v(" "),o("Button",{staticClass:"right-button",attrs:{link_text:t.$t("help_needed_button"),url:t.COSSACK_FORM_LINK}})],1),t._v(" "),o("div",{staticClass:"block",attrs:{id:"what-we-do"}},[o("h3",[t._v(t._s(t.$t("project-cards-title")))])]),t._v(" "),o("div",{staticClass:"fullwidth flex-column",attrs:{id:"what-we-do"}},[o("div",{staticClass:"project-cards-container"},t._l(t.projects,(function(text){return o("ProjectCard",{key:text.id,attrs:{id:text.id,image:r(331)("./"+text.image),title:text.title,details:text.details}})})),1),t._v(" "),t.showAll?t._e():o("a",{staticClass:"show-more-link",on:{click:t.toggleShowAll}},[t._v(t._s(t.$t("more"))+"...")])])])}),[],!1,null,"00080733",null);e.default=component.exports;installComponents(component,{Button:r(345).default,ActionCard:r(346).default,Badge:r(347).default,ProjectCard:r(348).default})}}]);