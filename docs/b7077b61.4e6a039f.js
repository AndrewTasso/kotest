(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return i}));var r=a(3),n=a(7),o=(a(0),a(163)),c={title:"Matchers",slug:"matchers.html"},s={unversionedId:"assertions/matchers",id:"assertions/matchers",isDocsHomePage:!1,title:"Matchers",description:"A Matcher is the Kotest term for an assertion that performs a specific test. For example, a matcher may test that a double is greater than zero.",source:"@site/docs/assertions/matchers.md",slug:"/assertions/matchers.html",permalink:"/docs/assertions/matchers.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/matchers.md",version:"current",sidebar:"assertions",previous:{title:"Assertions",permalink:"/docs/assertions/assertions.html"},next:{title:"Exceptions",permalink:"/docs/assertions/exceptions.html"}},l=[{value:"Kotest Matcher Modules",id:"kotest-matcher-modules",children:[]},{value:"Kotest External Matcher Modules",id:"kotest-external-matcher-modules",children:[]},{value:"Community Provided Matchers",id:"community-provided-matchers",children:[]}],b={rightToc:l};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"Matcher")," is the Kotest term for an assertion that performs a specific test. For example, a matcher may test that a double is greater than zero.\nOr it it may test that a file is not empty."),Object(o.b)("p",null,"Kotest currently has approximately 325 matchers split across several modules. Most of these matchers are for standard library types.\nOthers are project specific. Additionally, there are matchers provided by third party libraries."),Object(o.b)("p",null,"Kotest matchers are ",Object(o.b)("em",{parentName:"p"},"framework agnostic"),". You can use them with the Kotest framework, or with any other framework. If you are happy with JUnit,\nyou can still use the powerful matchers provided by the kotest assertion modules."),Object(o.b)("p",null,"Matchers can be used in two styles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Extension functions like ",Object(o.b)("inlineCode",{parentName:"li"},"a.shouldBe(b)")," or ",Object(o.b)("inlineCode",{parentName:"li"},'a.shouldStartWith("foo")')),Object(o.b)("li",{parentName:"ul"},"Infix functions like ",Object(o.b)("inlineCode",{parentName:"li"},"a shouldBe b")," or ",Object(o.b)("inlineCode",{parentName:"li"},'a should startWith("foo")'))),Object(o.b)("p",null,"Both styles are supported. The advantage of the extension function style is that the IDE can autocomplete for you,\nbut some people may prefer the infix style as it is slightly cleaner."),Object(o.b)("p",null,"Matchers can be negated by using ",Object(o.b)("inlineCode",{parentName:"p"},"shouldNot")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"should")," for the infix style. For example, ",Object(o.b)("inlineCode",{parentName:"p"},'a shouldNot startWith("boo")'),".\nFor the extension function style, each function has an equivalent negated version, for example, ",Object(o.b)("inlineCode",{parentName:"p"},'a.shouldNotStartWith("boo")'),"."),Object(o.b)("h3",{id:"kotest-matcher-modules"},"Kotest Matcher Modules"),Object(o.b)("p",null,"These modules provide the core matcher experience. They are hosted in the main Kotest repo, and are released on the same cadence as the\nKotest framework."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Module"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/assertions/core-matchers.html"}),"kotest-assertions-core")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides matchers for standard libary types."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Multiplatform")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/assertions/json-matchers.html"}),"kotest-assertions-json")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides matchers for testing json objects."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JVM")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/assertions/kotlinx-datetime-matchers.html"}),"kotest-assertions-kotlinx-time")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides matchers for Kotlin's date / time library."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Multiplatform")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/assertions/sql-matchers.html"}),"kotest-assertions-sql")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides matchers for JDBC."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JVM")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/assertions/ktor-matchers.html"}),"kotest-assertions-ktor")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides matchers for Ktor server test and client libraries."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Multiplatform")))),Object(o.b)("h3",{id:"kotest-external-matcher-modules"},"Kotest External Matcher Modules"),Object(o.b)("p",null,"These modules are hosted in the kotest organization but in separate repositories from the main kotest project. They are released on an independent\ncadence from the Kotest framework. They provide matchers for third party libraries."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Module"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/assertions/arrow.html"}),"kotest-assertions-arrow")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides matchers for the Arrow functional programming library."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JVM")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/assertions/compiler-matchers.html"}),"kotest-assertions-compiler")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides matchers that test for compilable code."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JVM")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/assertions/klock-matchers.html"}),"kotest-assertions-klock")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Providers matchers for Klock."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Multiplatform")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/assertions/konform-matchers.html"}),"kotest-assertions-konform")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides matchers for Konform."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Multiplatform")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/assertions/jsoup-matchers.html"}),"kotest-assertions-jsoup")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides matchers JSoup."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JVM")))),Object(o.b)("h3",{id:"community-provided-matchers"},"Community Provided Matchers"),Object(o.b)("p",null,"This is a list of projects that provide Kotest matchers. They are maintained outside of the Kotest organization."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Library"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/http4k/http4k/tree/master/http4k-testing/kotest"}),"Http4k")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Functional toolkit for Kotlin HTTP applications")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/micronaut-projects/micronaut-test"}),"Micronaut")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JVM-based, full-stack framework for building modular, easily testable microservice")))))}i.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),i=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=i(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,u=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return a?n.a.createElement(u,s(s({ref:t},b),{},{components:a})):n.a.createElement(u,s({ref:t},b))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var b=2;b<o;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);