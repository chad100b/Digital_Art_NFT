(()=>{"use strict";var e={479:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a,enableDebugMode:()=>o});var n=null;function o(e=window){var t=function(e){try{return new URL(e)}catch(s){var t=document.createElement("a");t.href=e;var{host:r="",hostname:n="",pathname:o="",port:a="",protocol:i="",search:c=""}=t,l={};return(0===t.search.indexOf("?")?t.search.substring(1):t.search).split("&").forEach((e=>{var t=e.split("=");2===t.length&&(l[t[0]]=t[1])})),{host:r,hostname:n,pathname:o,port:a,protocol:i,search:c,searchParams:{get:e=>l[e]}}}}(e.location.href).searchParams.get("cneDebug");return n="true"===t||e._CNE_DEV_MODE_}function a(...e){null===n&&o(),n&&console.warn("cneLog: ",...e)}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function e(e,t){for(var r,n=[],o=[],a=arguments.length;a-- >2;)n.push(arguments[a]);for(;n.length;)if(Array.isArray(r=n.pop()))for(a=r.length;a--;)n.push(r[a]);else null!=r&&!0!==r&&!1!==r&&o.push(r);return"function"==typeof e?e(t||{},o):{name:e,props:t||{},children:o}}var t=({embedTarget:t,scriptSrc:r})=>e("div",{class:"cne-interlude-player-container",id:t},e("div",{class:"cne-player-placeholder"}),e("script",{oncreate:!1,async:!0,type:"text/javascript",src:r})),n=({text:t})=>e("h3",{class:"cne-interlude-header"},t),o=({title:t,url:r})=>e("a",{class:"cne-interlude-title-link",href:r,target:"_blank"},e("h3",{class:"cne-interlude-title"},t)),a=({category:t})=>e("div",{class:"cne-interlude-category"},t),i=({style:t,wrapperClass:r},n)=>e("div",{class:r},t&&e("style",null,t),e("figure",{class:"cne-interlude-container"},n));function c({base:e,firstValid:t=3,insertionBlockSelector:r=this.insertionBlockSelector}){var n=e.querySelector(r);if(!n)return!1;for(var o,a=n.parentElement.firstElementChild,i=0;a;){var c=a.nextElementSibling;if(l(o=a)&&function(e){return e&&e.textContent&&e.textContent.length>80}(o)&&(i++,l(c)&&i>=t))return a;a=c}return!1}function l(e){return e&&"P"===e.nodeName}function s(e,{escape:t=!0,removeNull:r=!0}={}){var n=t?encodeURIComponent:e=>e;return Object.keys(e).map((t=>r&&null==e[t]?null:"".concat(n(t),"=").concat(n(e[t])))).filter(Boolean).join("&")}var u=((e=((e=document.cookie)=>e.split(/;\s*/).reduce(((e,t)=>{var r,[n,o]=t.split("=");try{return Object.assign(e,{[n]:decodeURIComponent(o)})}catch(t){return Object.assign(e,{[n]:(r=o,r?decodeURIComponent(r.replace(/%(?![0-9][0-9a-fA-F]+)/g,"%25")):r)})}}),{}))())=>{var{pID:t="",sID:r="",CN_sp:n="",CN_xid:o=""}=e,a={baseUrl:"".concat("//capture.condenastdigital.com/track","?_o=").concat("cne"),params:{app:"playerservice",cCh:"videos/show",pHr:window.location.href,pID:t,sID:r,uId:n,xid:o}};return()=>a})(),p=e=>{var t;try{t=JSON.stringify(e)}catch(e){t=""}return t};function d({type:e,category:t,message:r},n={}){var[o,a]=(e=>{var{guid:t,canAutoplay:r,interludeFailure:n,pageTemplate:o,url:a,errorData:i}=e,{videoId:c,iu:l,playerType:s}=e.initialPlayerConfig||{};return[c,{canAutoplay:r,guid:t,iu:l,playerType:s,interludeFailure:n,pageTemplate:o,url:a,errorData:i}]})(n);return{_ts:(new Date).toISOString(),_c:t,_t:e,cId:o,dim1:p(a),dim3:r}}var f=({type:e,category:t,message:r=""},n={})=>{var{baseUrl:o,params:a}=u();return((e,t=Image)=>(new t).src=e)([o,s(a),s(d({type:e,category:t,message:r},n))].join("&"))},g=e=>{var{message:t,data:r={},type:n="GenericError"}=e,{embedParams:o}=r;return f({type:n,category:"error",message:t},o)};var b=/_sensitivecontent|_sponsored/;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={fallbackContent:{"id":"5abbb85adbc85873ff00000b","type":"video"},copilotTagMapping:{"open door":{"type":"video","id":"601c5426cc196a74db394104"},"celebrity":{"type":"video","id":"601c5426cc196a74db394104"},"architectural digest":{"type":"video","id":"601c5426cc196a74db394104"},"celebrity home":{"type":"video","id":"601c5426cc196a74db394104"},"serena williams":{"type":"video","id":"601c5426cc196a74db394104"},"design":{"type":"video","id":"601c5426cc196a74db394104"},"decor":{"type":"video","id":"601c5426cc196a74db394104"}},recommendationsLanguage:'en-US',sitewideInterludeVideoOverride:window._SITEWIDE_INTERLUDE_VIDEO_OVERRIDE_,fetchRelated:!1,headerText:"Trending Now",showCategory:!1,titleAbovePlayer:!0},h={hasExcludedTags:()=>!1,supportedPages:[],templateSupported:function({pageTemplate:e,supportedPages:t=this.supportedPages}){return e||g({type:"InterludeError",message:"Page Type Not Found"}),!!e&&t.indexOf(e)>-1},waitForDfpOverride:window._WAIT_FOR_DFP_OVERRIDE_},w=(O(O(O({},v),h),{},{editorialVideoSelector:"",getPrecedingEl:c,insertAfter:!0,insertionBlockSelector:"",isSPA:!1,view:({category:r,embedTarget:c,headerText:l,interludeTitleUrlOverride:s,scriptSrc:u,showCategory:p,style:d,title:f,titleAbovePlayer:g,url:b,wrapperClass:y})=>e(i,{style:d,wrapperClass:y},e(n,{text:l}),g&&e(o,{title:f,url:s||b}),e(t,{embedTarget:c,scriptSrc:u}),p&&e(a,{category:r}),!g&&e(o,{title:f,url:s||b}))}),O(O(O({},v),h),{},{templateSupported:()=>!0}));O(O({},v),{},{view:({embedTarget:r,headerText:a,scriptSrc:c,title:l,url:s,interludeTitleUrlOverride:u,wrapperClass:p})=>e(i,{wrapperClass:p},e(n,{text:a}),e(o,{title:l,url:u||s}),e(t,{embedTarget:r,scriptSrc:c}))});function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x={brand:"architecturaldigest",headerText:"Trending Video",recommendedVideoQuery({base:e}){if(!e)return{};var t=!!e.getElementsByClassName("page-clever")[0];return this.titleAbovePlayer=!t,{}}};j(j({},x),{},{style:e=>"#".concat(e," .cne-interlude-container {\n      background-color: #f5f5f5;\n      clear: both;\n      color: #2b2b2b;\n      margin: 40px auto;\n      padding: 0 25px;\n      text-align: center;\n    }\n    #").concat(e," .cne-interlude-header {\n      font-family: lato-bold,Helvetica Neue,helvetica,arial,sans-serif;\n      font-size: 10px;\n      font-weight: 400;\n      letter-spacing: 2px;\n      margin: 0;\n      padding-top: 24px;\n      text-transform: uppercase;\n    }\n    #").concat(e," .cne-interlude-title {\n      font-family: lato-light,Helvetica Neue,helvetica,arial,sans-serif;\n      font-size: 28px;\n      font-weight: 400;\n      letter-spacing: -0.3px;\n      line-height: 30px;\n      margin: 9px auto 25px auto;\n      max-width: 500px;\n    }\n    #").concat(e," .cne-player-placeholder:first-of-type:last-of-type {\n      background-color: black;\n      padding-top: 56.25%;\n      width: 100%;\n    }\n    #").concat(e," .cne-interlude-player-container {\n      margin: 0 -25px;\n    }\n    #").concat(e," #awesome-container > div {\n      background-color: #333;\n    }\n    .listicle-wrapper #").concat(e," {\n      width: 100%;\n    }\n    .page-clever #").concat(e," {\n      margin: 133px 0 83px;\n      padding: 0;\n    }\n    .page-clever #").concat(e," .cne-interlude-container {\n      background-color: transparent;\n      border: 3px solid #333;\n      line-height: 1.21;\n      margin: 0;\n      padding: 0;\n      position: relative;\n    }\n    .page-clever #").concat(e," .cne-interlude-header,\n    .page-clever #").concat(e," .cne-interlude-title {\n      color: #2b2b2b;\n      font-family: work-sans-medium,Helvetica Neue,helvetica,arial,sans-serif;\n      font-weight: normal;\n      letter-spacing: -0.4px;\n      max-width: 100%;\n      text-align: left;\n    }\n    .page-clever #").concat(e," .cne-interlude-header {\n      display: block;\n      font-size: 20px;\n      line-height: 1.2em;\n      padding: 0 0 0 40px;\n      position: absolute;\n      text-transform: none;\n      top: -48px;\n      width: 100%;\n    }\n    .page-clever #").concat(e," .cne-interlude-title {\n      display: block;\n      font-size: 30px;\n      font-weight: 500;\n      letter-spacing: -0.4px;\n      margin: 0;\n      max-width: 100%;\n      padding: 20px 40px 43px;\n      text-align: left;\n    }\n    .page-clever #").concat(e," .cne-interlude-player-container {\n      margin: 0;\n      padding: 0;\n      background-color: #333;\n    }\n    .page-clever #").concat(e,' .cne-interlude-container::after {\n      background-color: #ff9900;\n      border-top: 3px solid #000;\n      content: "";\n      display: block;\n      height: 60px;\n    }\n    .page-clever #').concat(e," .cne-interlude-header::before,\n    .page-clever #").concat(e,' .cne-interlude-header::after {\n      border-bottom: 18px solid black;\n      border-left: 9px solid transparent;\n      border-right: 9px solid transparent;\n      content: "";\n      display: inline-block;\n      height: 0;\n      margin: -10px 0 0 0;\n      position: absolute;\n      transform: translateY(10px);\n      width: 0;\n    }\n    .page-clever #').concat(e," .cne-interlude-header::before {\n      top: 0;\n      left: 0;\n    }\n    .page-clever #").concat(e," .cne-interlude-header::after {\n      top: 4px;\n      left: 9px;\n    }\n\n    @media (max-width: 768px) {\n      #").concat(e," .cne-interlude-container {\n        margin: 30px auto;\n      }\n      #").concat(e," .cne-interlude-header {\n        padding-top: 20px;\n      }\n      #").concat(e," .cne-interlude-title {\n        font-size: 20px;\n        letter-spacing: 0.2px;\n        line-height: 24px;\n        margin-bottom: 20px;\n      }\n      .page-clever #").concat(e," {\n        margin: 85px 0;\n        padding: 0;\n      }\n      .page-clever #").concat(e," .cne-interlude-container {\n        padding: 0;\n        margin: 0;\n      }\n      .page-clever #").concat(e," .cne-interlude-header {\n        font-size: 15px;\n        display: block;\n        width: unset;\n        left: 50%;\n        transform: translateX(-50%);\n        padding: 0 0 0 30px;\n      }\n      .page-clever #").concat(e," .cne-interlude-title {\n        font-size: 17px;\n        padding: 15px 20px 33px;\n      }\n      #").concat(e," .cne-interlude-header span {\n        padding-left: 5px;\n      }\n      .page-clever #").concat(e," .cne-interlude-header::before,\n      .page-clever #").concat(e," .cne-interlude-header::after {\n        border-left: 7px solid transparent;\n        border-right: 7px solid transparent;\n        border-bottom: 14px solid black;\n      }\n      .page-clever #").concat(e," .cne-interlude-header::after {\n        top: 3px;\n        left: 6px;\n      }\n      .page-clever #").concat(e," .cne-interlude-container::after {\n        height: 30px;\n      }\n    }\n  "),getPrecedingEl({base:e,pageTemplate:t}){if("listicle"===t){var r=e.querySelectorAll(".listicle-wrapper .listicle-item");return r[r.length-1]}return c({base:e,insertionBlockSelector:this.insertionBlockSelector})},supportedPages:["article","longform","listicle"],insertionBlockSelector:".article-content p:nth-of-type(3)",editorialVideoSelector:'.article-content [data-type^="cne"]:not(:last-child)'});var E=/(?:http[s]?:)?(?:\/\/)?[a-z]+\.(?:[a-z]+\.)?[^\/]+\/?|^\/|\/$|\/?\?.*$/;function S(e){var[t,r]=e.split(E);return r||t}function T(e,t){return"string"==typeof e&&"string"==typeof t&&S(e)===S(t)}function I(e){return e&&"object"==typeof e}function k(e,t){return I(e)&&I(t)&&T(e.canonical,t.canonical)}class C{constructor(e,t){this._current=e,this._prev=null,this._compare=t}push(e){this._prev=this._current,this._current=e}curr(){return this._current}prev(){return this._prev}matchesCurrent(e){return!!this._current&&this._compare(this._current,e)}}function R(e,t){var r=e.digitalData;return Object.defineProperty(e,"digitalData",{configurable:true,get:()=>r,set(e){r=e,t(e)}}),()=>Object.defineProperty(e,"digitalData",{writable:true,configurable:true,value:r})}function _(e,t=document.body){var r=new MutationObserver((t=>e(t)));return r.observe(t,{childList:!0,subtree:!0}),()=>r.disconnect()}function A(e,t,r){var n=e[t];if("function"==typeof n)return e[t]=function(){return r.apply(null,arguments),n.apply(e,arguments)},()=>e[t]=n}function M(e,t=window.history){var r=A(t,"pushState",e),n=A(t,"replaceState",e);return()=>{r(),n()}}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U({ddQueue:e,happenings:t,urlQueue:r},n){if(3===t.size&&null!=r.prev()&&e.prev()&&r.matchesCurrent(e.curr().canonical)){var o=function(e){var t={};for(var[r,n]of e)t[r]=n;return t}(t);t.clear(),n(o)}}function F({ddQueue:e,happenings:t,monitorDigitalData:r,urlQueue:n,win:o},a){return r(o,(r=>{n.matchesCurrent(r.canonical)&&null!=n.prev()&&(e.push(r),t.set("digitalData",r),a())}))}function B({happenings:e,monitorHistoryState:t,urlQueue:r},n){return t(((t,o,a)=>{a=S(a),r.matchesCurrent(a)||(r.push(a),e.set("url",a),n())}))}function Q({happenings:e,monitorDOMMutations:t,parseDOMMutation:r},n){return t((t=>{t.forEach((t=>{if(function({addedNodes:e}){var t=(e||[])[0];return t&&1===t.nodeType}(t)){var o=r(t);o&&(e.set("base",o),n())}}))}))}function z(e,t,{win:r=window,monitorDOMMutations:n=_,monitorDigitalData:o=R,monitorHistoryState:a=M}={}){var i=new Map,c=V(V({},e),{},{monitorDOMMutations:n,monitorDigitalData:o,monitorHistoryState:a,happenings:i,win:r}),l=U.bind(null,c,t),s=[Q(c,l),B(c,l),F(c,l)];return()=>s.forEach((e=>e&&e()))}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var W="cne-interlude",$="setupInterlude";function J(e){var t,r=new Map,n=(t=1,()=>t++),o=(t,r,n)=>q(q({},r),{},{url:t,player:n===e?r.player:null});return{CoordinatorBase:class{nextParams(){var e=n();return{interludeId:"".concat(W,"-").concat(e),onPlayerReady:"".concat($).concat(e)}}registerAttempt({error:e,message:t,player:n,success:o,tries:a=1,url:i}){r.set(i,{tries:a,error:e,player:n,message:t,success:!!o||!e&&!!n})}getAttempt(e,t){var n=r.get(S(e));if(n)return o(e,n,t)}getAttempts(e){return[...r].map((([t,r])=>o(t,r,e)))}disposePlayer(e){r.forEach(((t,n)=>{if(t.player===e)return r.set(n,q(q({},t),{},{disposed:!0,player:null}))}))}dispose(){r.clear()}},attempts:r}}function K(e){var{CoordinatorBase:t,attempts:r}=J(e);return{InterludeCoordinator:class extends t{},attempts:r}}function X(e,{win:t=window,insertOnPageChange:r=z}={}){var{CoordinatorBase:n,attempts:o}=J(e),{ddQueue:a,urlQueue:i}=function(e,t){var r=new C(e,T);return{ddQueue:new C(t,k),urlQueue:r}}(S(t.location.href),t.digitalData);return{InterludeCoordinator:class extends n{constructor(e,t){super(),this.disposePageChange=e.isSPA?r({parseDOMMutation:e.parseDOMMutation,urlQueue:i,ddQueue:a},t):()=>{}}dispose(){super.dispose(),this.disposePageChange()}},attempts:o}}function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function te(e,t=(e.VERSO?K:X)){return function(e,t){var{config:r,insert:n,secret:o,windowCne:a}=e;if(!a.interludeCoordinator){var{InterludeCoordinator:i,attempts:c}=t(o),l=new i(r,n);a.interludeCoordinator=l,a.playerCoordinator&&a.playerCoordinator.setInterludeCoordinator(l)}return Z(Z({},e),{},{coordinator:a.interludeCoordinator})}(e,t)}var re="processed";function ne(e,t){return"".concat(t,'script[src*="').concat(e,'"]:not(.').concat(re,")")}function oe({fallbackMatcher:e,matcher:t,node:r=document,tester:n},o){for(var a=ne(t,o)+(e?", ".concat(ne(e,o)):""),i=r.querySelectorAll(a),c=0,l=i.length;c<l;c++){var s=i[c];if(n.test(s.src))return s}return null}function ae(e,t="processed"){return e.classList.add(t),e}var ie=r(479).default;function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e,t={},r=g){!function(e,t,r=g){r(t),console.error("CNE Player: ".concat(e),t,"errorData =>",t.data)}(e,t,r)}function pe(e){return le(le({},e),{},{secret:null,player:null})}function de(e){return le(le({},e),{},{win:null})}class fe extends Error{constructor(e,{originalError:t={},params:r={},render:n=!1}){super(e),this.message=e,this.data=le({displayMessage:void 0,embedParams:de(r),originalError:t,render:n},t.data),this.type=t.type||"EmbedError"}}Error;Error;class ge extends Error{constructor(e,{originalError:t={},params:r}){super(e),this.message=e,this.data=le(le(le({},r),t.data),{},{originalError:t}),this.type=t.type||"InterludeError"}}Error;class be extends Error{constructor(e,t={}){super(e),this.message=e,this.data=pe(t),this.type="InterludeRejectedError"}}Error;Error;function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){me(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e,{findNextAvailableScriptTag:t=oe,markProcessed:r=ae,track:n=f}={}){return function(e,{findNextAvailableScriptTag:t,markProcessed:r,track:n}={}){var o=e.SCRIPT_EMBED?"body ":"";return new Promise(((r,a)=>{var i=t(e,o);i?r(i):setTimeout((()=>{var i=t(e,o);i?(n({category:"sanity",message:"Player script found on second attempt.",type:"findScript"},e),r(i)):a(new Error("Unable to locate player script tag."))}),0)})).then(r)}(e,{findNextAvailableScriptTag:t,markProcessed:r,track:n}).then((t=>Oe(Oe({},e),{},{script:t,src:t.src}))).catch((t=>{throw new fe(t.message,{params:e,originalError:t})}))}class he{constructor(e="",t={}){this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.url=t.url||"",this._bodyText=e}text(){return Promise.resolve(this._bodyText)}json(){return this.text().then(JSON.parse)}}function we(e,t={}){var{timeout:r,onTimeout:n}=t;return new Promise(((t,o)=>{var a=new XMLHttpRequest,i=()=>o(new TypeError("Network request failed"));a.timeout=r||0,a.onload=()=>{var e={status:a.status,statusText:a.statusText,url:a.responseURL},r="response"in a?a.response:a.responseText;t(new he(r,e))},a.onerror=i,a.ontimeout=n?n(o):i,a.open("GET",e),a.send()}))}function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){De(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function De(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var xe=/^[\da-f]{24}$/i,Ee=/[\da-f]{24}/i;function Se({contentType:e,cneID:t,title:r}){return("VIDEO"===e||"CNEVIDEO"===e)&&xe.test(t)&&"string"==typeof r}var Te=e=>{if(!e.ok)throw new Error("Rec engine: failure");return e.json()},Ie=e=>{var t,r,n=e["SIMILAR"===e[0].strategy?0:Math.floor(Math.random()*e.length)];return je(je({},n),{},{id:n.cneID,category:n.section,algorithm:(t=n.url,r=/intcid=([^&]+)/.exec(t),r?r[1]:"Rec algorithm not found")})};function ke(e,{customParams:t,embeddedVideos:r,pageTemplate:n,pageURL:o,windowCne:a,fetch:i=window.fetch||we,track:c=f}={}){var l=function({config:e,customParams:t,pageURL:r}){var{brand:n,fetchRelated:o,recommendationsLanguage:a}=e,i=je({applicationID:"cne-interlude-".concat(n),brand:n,url:r,"filter[strategy]":o?"SIMILAR":"POPULAR","filter[contentType]":"CNEVIDEO","filter[language]":a||"en-US","page[size]":5},t);return"https://api.condenast.io/v1/recommendations?".concat(s(i))}({config:e,customParams:t,pageURL:o}),u=r||function(e){var{playerCoordinator:t}=e||{};if(t)return t.currentVideoIds();var r=document.querySelectorAll('[data-type^="cne"]');return[].slice.call(r).map((e=>{var t=e.getAttribute("data-src")||e.getAttribute("data-url")||"",[r]=t.match(Ee)||[];return r})).filter(Boolean)}(a),p=((e,t,r)=>({message:n})=>(e({category:"error",message:n,type:"Interlude Insertion Failure"},{pageTemplate:r,url:t,interludeFailure:"rec engine"}),null))(c,l,n);return i(l).catch((()=>p({message:"Rec engine failure"}))).then(Te).then((({config:e,track:t})=>({data:r})=>{if(0===r.length)throw new Error("Rec engine: no videos");var n=r.filter(Se);if(n.length<r.length&&(console.warn("PLAYER recieved invalid videos from recommendation API"),t({category:"Recommendation Event",message:"Rec engine: invalid video",type:"Interlude Insertion Warning"})),0===n.length)throw new Error("Rec engine: invalid videos");var[o]=n;return e.fetchRelated&&"POPULAR"===o.strategy&&t({category:"Recommendation Event",message:"Rec engine: fallback to trending",type:"Interlude Insertion Warning"}),n})({config:e,track:c})).then((({excludeVideos:e})=>t=>{var r=t.filter((t=>t&&e.indexOf(t.cneID)<0));if(0===r.length)throw new Error("Rec engine: all filtered");return r})({config:e,excludeVideos:u})).then(Ie).catch(p)}function Ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(r),!0).forEach((function(t){_e(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ae(e){return Re({algorithm:"override",category:" ",strategy:"override",title:" ",type:"video"},e)}function Me({fallbackContent:e}){return e&&e.id&&e.id.match(xe)?Ae(Re(Re({},e),{},{algorithm:"fallback",strategy:"fallback"})):null}function Ne({config:e,tags:t=[]}){for(var{copilotTagMapping:r={}}=e,n=null,o=0;o<t.length;o++){var a=t[o],i=r[a.toLowerCase()];if(i)return Ae(Re(Re({},i),{},{algorithm:"copilotTagOverride",strategy:"copilotTagOverride"}));if(a.indexOf("_overrideInterlude")>=0){var[,c]=a.split(":");c&&c.match(xe)&&(n={id:c,algorithm:"copilotTagOverride",strategy:"copilotTagOverride"})}}return n?Ae(n):null}var Ve=e=>Ae({id:e,algorithm:"copilotIdOverride",strategy:"copilotIdOverride"});function Le({waitForDfpOverride:e,windowCne:t},r=5e3){return new Promise((n=>{if(!e)return n(null);setTimeout((()=>n(null)),r);var o=t.interludeOverrideIds;if(o&&o.length){var a=o.pop(),i=a.match(xe)?Ae({id:a,algorithm:"dfpOverride",strategy:"dfpOverride"}):null;return n(i)}t.interludeOverrideIds={push(e){var t=e.match(xe)?Ae({id:e,algorithm:"dfpOverride",strategy:"dfpOverride"}):null;return n(t)}}}))}function Ue(e){var t,{sitewideInterludeVideoOverride:r}=e,n=(t=r)&&t.length?t[Math.floor(Math.random()*t.length)]:null;return n?Ae({id:n,algorithm:"sitewideInterludeVideoOverride",strategy:"sitewideInterludeVideoOverride"}):null}function Fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(r),!0).forEach((function(t){Qe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ze({config:e,base:t,digitalData:r,section:n}){var o={};"function"==typeof e.recommendedVideoQuery&&(o=e.recommendedVideoQuery({base:t,digitalData:r,section:n}));var a=(()=>{var e=document.cookie.split(";").filter((e=>" CN_xid="===e.slice(0,8)));return e.length?e[0].slice(8):null})();return a&&"false"!==a?Be(Be({},o),{},{xid:a}):Be({},o)}function He(e){var{protocol:t,hostname:r,pathname:n}=e.location;return"".concat(t,"//").concat(r).concat(n)}const qe=function(e,{getCopilotTagOverride:t=Ne,getCopilotIdOverride:r=Ve,getDfpOverride:n=Le,getFallbackContent:o=Me,getRecommendedVideo:a=ke,getSitewideInterludeVideoOverride:i=Ue,win:c=window}={}){var{config:l,embeddedVideos:s,pageURL:u,windowCne:p,pageTemplate:d,interludeOverrideId:f}=e;if(f)return Promise.resolve(r(f));var g=t(e);if(g)return Promise.resolve(g);var b=i(l);if(b)return Promise.resolve(b);var{waitForDfpOverride:y}=l,O={customParams:ze(e),embeddedVideos:s,pageURL:u||He(c),windowCne:p};return Promise.all([n({waitForDfpOverride:y,windowCne:p}),a(l,O,d)]).then((([t,r])=>{var n=t||r||o(l);if(!n)throw new be("No videos found from recommendations, fallback, or page tags",e);return n}))};function Ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function We(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(r),!0).forEach((function(t){$e(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Je(e,{getInterludeContent:t=qe}={}){return t(e).then((t=>We(We({},e),{},{content:t}))).catch((t=>{throw new ge(t.message,{params:e,originalError:t})}))}function Ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Xe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(r),!0).forEach((function(t){Ye(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ze=/[,|]/,et=()=>{var[e]=window.dataLayer||[];return e||{}},tt=({content:e={}})=>{var{contentSource:t,functionalTags:r="",tags:n=""}=e;return[...r.split(Ze),...n.split(Ze),"branded"===t?"_sponsored":""]},rt=e=>{var{keywords:t={display:""},contentSource:r}=e;return[...("string"==typeof t?t:t.display).split(Ze),"branded"===r?"_sponsored":""]},nt=e=>e.tags||[],ot=(e,t,r)=>e&&r.indexOf(e)===t;function at(e){var{copilot:t=window.copilot||{},dataLayer:r=et(),digitalData:n=window.digitalData||{}}=e,o=[...tt(r),...rt(n),...nt(t)].filter(ot),a=(({dataLayer:e,digitalData:t})=>{var{pageType:r,page:n}=t;if(r)return r;if(n){var{cns:{pageType:o}={}}=n;if(o)return o}var{content:a={}}=e;return a.pageType})({dataLayer:r,digitalData:n}),{content:{section:i,subsection:c}={}}=r;return Xe(Xe({},e),{},{digitalData:n,pageTemplate:a,section:i,subsection:c,tags:o})}function it({forceMin:e=!1,win:t=window}={}){var{document:r}=t,n=e||!r.body?0:r.body.scrollHeight,o=Math.max(n,100);t.parent.postMessage({sentinel:"amp",type:"embed-size",height:o},"*")}function ct(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function lt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ct(Object(r),!0).forEach((function(t){st(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ct(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function st(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ut=e=>e&&"function"==typeof e.registerAttempt;function pt(e,{logEmbedError:t=ue,requestAmpResize:r=it}={}){var{message:n}=e,{attempt:o,coordinator:a,onInterludeReadyFn:i,pageType:c,pageTemplate:l,player:s,url:u}=e.data||{};switch("amp-article"===c&&r({forceMin:!0}),"function"==typeof i&&i({},e),e.type){case"InterludeRejectedError":ut(a)&&a.registerAttempt({error:e,message:n,player:s,url:u});break;case"PreviousAttemptError":ut(a)&&a.registerAttempt(lt(lt({},o),{},{url:u,tries:(o.tries||1)+1}));break;default:return ut(a)&&a.registerAttempt({error:e,message:n,player:s,url:u}),t(n,e)}!function({message:e,url:t,pageTemplate:r,error:n},o=f){var a=e.split(":")[1];o({category:"error",message:e,type:"Interlude Insertion Error"},{pageTemplate:r,url:t,interludeFailure:a?a.trim():null}),ie('no interlude for "'.concat(t,'" ("').concat(e,'")'),n)}({message:n,url:u,pageTemplate:l,error:e})}function dt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ft(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?dt(Object(r),!0).forEach((function(t){gt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function gt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bt(e){return new Promise(((t,r)=>{var{initialState:n,onPlayerReady:o,onInterludeReadyFn:a,windowCne:i}=e;i[o]=r=>t(ft(ft({},e),{},{player:r})),i["".concat(o,"_error")]=t=>r(new ge("Interlude Embed Failed.",{originalError:t,params:e})),a(n)}))}function yt(e){var{coordinator:t,player:r,url:n}=e;t.registerAttempt({player:r,url:n})}function Ot(e){var{config:t,tags:r}=e;if(e.hasExcludedEmbed)throw new be("Availability: excluded embed",e);if(function({config:e,tags:t}){return b.test(t)||e.hasExcludedTags(t)}({config:t,tags:r.join()}))throw new be("Availability: excluded tags",e);if(!t.templateSupported(e))throw new be("Availability: unsupported template",e);return e}var mt=()=>Math.floor(65536*Math.random()).toString(16);function vt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ht(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?vt(Object(r),!0).forEach((function(t){wt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function wt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Pt=({src:e})=>function(e=""){return e.split("&").reduce(((e,t)=>{var[r,n=""]=t.split("=");return r?Object.assign(e,{[decodeURIComponent(r)]:decodeURIComponent(n)}):e}),{})}(e.split(/\?|#/)[1]),jt=["tags","embeddedVideos"],Dt=(e,t)=>(e=>-1!==jt.indexOf(e))(e)?(e=>e?e.split(","):[])(t):function(e){switch(e){case"1":case"true":return!0;case"0":case"false":return!1;default:return e}}(t),xt=(e,t=!1)=>{var r=t?{queryParams:e}:{};return Object.keys(e).reduce(((t,r)=>ht(ht({},t),{},{[r]:Dt(r,e[r])})),r)};function Et(e){var t=Pt(e),{onReady:r}=t,n=window[r];if("string"!=typeof r||"function"!=typeof n)throw new be("No onReady callback",ht(ht({},e),{},{onReady:r}));return ht(ht(ht({},e),xt(((e,...t)=>t.reduce(((t,r)=>ht(ht({},t),{},{[r]:e[r]})),{}))(t,"embeddedVideos","hasExcludedEmbed","isRightRail","cntPlatform","interludeOverrideId"))),{},{onInterludeReadyFn:n})}function St(e,t,{embedTarget:r,embedType:n="script",playerBase:o="//player.cnevids.com",queryParams:a={}}={}){var{id:i,type:c="video",algorithm:l,strategy:u}=e,{pageType:p,section:d,subSection:f,pageURL:g,ampTargeting:b,isStickyType:y,stickyPosition:O,videoEmbedPosition:m,hasTeaser:v}=a,h={analyticsUrl:g,autoplay:1,hasCompanion:!1,videoEmbedPosition:m,hideHoverTitle:1,hidePosterTitle:1,muted:1,interludeOverride:["override","copilotIdOverride","copilotTagOverride","dfpOverride","fallback","sitewideInterludeVideoOverride"].indexOf(l)>-1||null,isStickyType:y,stickyPosition:O,hasTeaser:v,onReady:t,pageType:p,playerType:"interlude",recAlgorithm:l,recStrategy:u,section:d,subSection:f,showPlaylistBar:!1,target:r,ampTargeting:b};return"".concat(o,"/").concat(n,"/").concat(c,"/").concat(i,".js?").concat(s(h))}function Tt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function It(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Tt(Object(r),!0).forEach((function(t){kt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Tt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function kt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ct(e){var{interludeId:t=W,onPlayerReady:r=$}=e&&e.nextParams()||{};return{interludeId:t,onPlayerReady:r}}function Rt(e){var{config:t,coordinator:r,content:n}=e,{headerText:o}=t,{onPlayerReady:a}=Ct(r),i={headerText:o,scriptSrc:St(n,a),video:n};return It(It({},e),{},{initialState:i,onPlayerReady:a})}var _t=/cnevids/;function At(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Mt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?At(Object(r),!0).forEach((function(t){Nt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):At(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Nt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Vt={templateSupported:({section:e})=>"ad pro"!==e};!function(e){Promise.resolve({VERSO:!0,config:e,matcher:"interlude/",secret:mt(),tester:_t,url:S(window.location.href),windowCne:(window._cne=window._cne||{},window._cne)}).then(ve).then(Et).then(at).then(te).then(Ot).then(Je).then(Rt).then(bt).then(yt).catch(pt)}(Mt(Mt(Mt({},w),x),Vt))})()})();