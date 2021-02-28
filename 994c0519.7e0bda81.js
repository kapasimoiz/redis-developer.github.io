(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{104:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return t?o.a.createElement(f,c(c({ref:r},s),{},{components:t})):o.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},105:function(e,r,t){"use strict";t.d(r,"b",(function(){return i})),t.d(r,"a",(function(){return a}));var n=t(22),o=t(110);function i(){var e=Object(n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,l=i.absolute,s=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return r+t;var u=t.startsWith(r)?t:r+t.replace(/^\//,"");return s?e+u:u}(i,t,e,r)}}}function a(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},110:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return o}))},90:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),i=(t(0),t(104)),a=t(105),c={id:"index-explore",title:"Explore Your Data",sidebar_label:"Explore",slug:"/explore/"},l={unversionedId:"explore/index-explore",id:"explore/index-explore",isDocsHomePage:!1,title:"Explore Your Data",description:"The following links provides you with the available options to explore a new Redis database either on the Cloud or using local software.i",source:"@site/docs/explore/index-explore.mdx",slug:"/explore/",permalink:"/explore/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/index-explore.mdx",version:"current",sidebar_label:"Explore"},s=[],u={toc:s};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following links provides you with the available options to explore a new Redis database either on the Cloud or using local software.i"),Object(i.b)("div",{className:"row text--center"},Object(i.b)("div",{className:"col"},Object(i.b)("div",{className:"ri-container ri-link"},Object(i.b)("div",{className:"ri-description-short"},Object(i.b)("div",{className:"ri-detail"},Object(i.b)("h4",{className:"ri-title"},"RedisInsight"),Object(i.b)("div",{className:"ri-description"},Object(i.b)("img",{src:Object(a.a)("/img/logos/cloud.png"),width:"100"})))),Object(i.b)("a",{href:Object(a.a)("/explore/redisinsight/"),className:"ri-card-link"},"Read More"))),Object(i.b)("div",{className:"col"},Object(i.b)("div",{className:"ri-container ri-link"},Object(i.b)("div",{className:"ri-description-short"},Object(i.b)("div",{className:"ri-detail "},Object(i.b)("h4",{className:"ri-title"},"Redis Datasource for Grafana"),Object(i.b)("div",{className:"ri-description"},Object(i.b)("img",{src:Object(a.a)("/img/logos/docker.png"),width:"100"})))),Object(i.b)("a",{href:Object(a.a)("/explore/redisdatasource"),className:"ri-card-link"},"Read More")))))}d.isMDXComponent=!0}}]);