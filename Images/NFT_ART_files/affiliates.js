!function(e,t){"use strict";function r(t){var r=e.createElement("a");return r.href=decodeURIComponent(t),r}function n(e,t){for(var r=0;r<e.length;r++){var n=t(e[r],r,e);if(n)return n}}function o(e){var t=n(m,function(t){return e.href.match(t)});if(t){console.log("is skimlinks",e.href);var o=r(t[1]);e.href=o.href,e.hostname=o.hostname,e.vendor="skimlinks",e.product=o.href}return e}function a(e){var t=n(p,function(t){return e.href.match(t)});if(t){console.log("is amazon",e.href);var o=r(t[1]);e.href=o.href,e.hostname=o.hostname,e.vendor="amazon",e.product=t[0].split("?")}return e}function i(e){function t(t){for(var r=e.tracker,n=0;n<v.length;n++){var o=v[n],a=e[v[n]];a&&(r+=o+":"+a+"/")}return r+"destination:"+t}function r(t){return n(e.targetHostnames,function(e){return e===t})}return function(e){return r(e.hostname)&&(e.href=t(e.href),e.vendor="performancehorizon",e.redirect=!0),e}}function c(e,t){for(var r=0;r<t.length;r++)if(e.match(t[r]))return!0;return!1}function f(e,t,r){for(var n=0;n<e.length;n++)if(e[n][t].test(r))return e[n]}function u(e,t,r){for(var n=Object.keys(e),o=[],a=0,i=0;i<n.length;i++){var c=n[i],f=c+":"+e[c];if(!(a+f.length<r))break;o.push(f),a+=f.length}return o.join(t)}function s(t,r,n){for(var o=e.links,a={total:0},i=0,f=Object.keys(r),u=0;u<f.length;u++)a[r[f[u]]]=0;for(var s=0;s<o.length;s++){var h=n.reduce(function(e,t){return t(e)},{hostname:o[s].hostname,href:o[s].href}),l=h.href,d=h.hostname;if(l&&d&&function(e){return!c(e,t)}(l)){i++;var m=r[d]||d;a[m]=(a[m]||0)+1}}return a.total=i,a}function h(e,r,n,o){if(t.s){var a=t.s,i=n.url,c=n.product,f=n.vendor,u=n.linkCount,s=n.name,h=[a[i],a[c],a[f],a[u]];a[i]=r.href,a[c]=r.product,a[f]=r.vendor,a[u]=r.linkCount,a.linkTrackVars=[i,c,f,u].join(","),a.linkTrackEvents="none",a.tl(e,"e",s,null,o),a[i]=h[0],a[c]=h[1],a[f]=h[2],a[u]=h[3]}}function l(){!function(e,t,r,n,o,a,i){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(a=t.createElement(r)).async=!0,a.src="https://connect.facebook.net/en_US/fbevents.js",(i=t.getElementsByTagName(r)[0]).parentNode.insertBefore(a,i))}(t,e,"script")}function d(e){l();var r=t.fbq&&t.fbq.__fbeventsModules;r&&r.fbevents().getState().pixels.map(function(e){return e.id}).indexOf(e)>-1||t.fbq("init",e)}var m=[/go\.redirectingat\.com\/.*url=([^\&]+)/,/go\.skimresources\.com\/.*url=([^\&]+)/],p=[/^https?:\/\/(www\.)?amazon\..*/],v=["camref","creativeref","pubref","adref"],g=1,b=["A"];!function(r){function n(e,t){return t.redirect&&t.href!==e.href?t:e}function o(e,r,o){var a=n(e,r);console.log("open window",{initial:e.href,redirected:r.href,go:a.href}),t.open(a.href,o)||(t.location.href=a.href)}function a(e,t,r){n(t,r)===r&&(console.log("shuffled href",{initial:t.href,redirected:r.href}),e.setAttribute("href",r.href),setTimeout(function(){e.setAttribute("href",t.href)},0))}function i(e){if(e&&e.nodeType===g){if(b.indexOf(e.nodeName)>-1)return e;if(e.parentNode)return i(e.parentNode)}return null}var l=f(r.targetList,"targetLocation",location.href);l&&(r.facebookPixel&&r.facebookPixel.enabled&&r.facebookPixel.id&&d(r.facebookPixel.id),e.addEventListener("click",function(e){var n=i(e.target),f=l.elReducers,d=l.destinationReducers;if(n){var m={hostname:n.hostname,href:n.href},p=f.reduce(function(e,t){return t(e)},{hostname:m.hostname,href:m.href,product:"",vendor:""});if(!c(p.href,r.notExternal)){console.log("is external",p.href);var v=d.reduce(function(e,t){return t(e)},{href:p.href,hostname:p.hostname,vendor:p.vendor});if(r.facebookPixel&&r.facebookPixel.enabled&&r.facebookPixel.targetLinkRegEx.test(n.textContent)&&"function"==typeof t.fbq&&t.fbq("track","AddToCart",{content_type:"product",content_name:p.href}),r.omniture&&r.omniture.enableExitLinkTracking){e.preventDefault();var g=r.shortNames,b=u(s(r.notExternal,g,f),"|",100);h(n,Object.assign({linkCount:b},m,p,v),r.omniture,function(){var e=n.target||"_self";o(m,v,e)})}a(n,m,v)}}},!0))}({targetList:[{targetLocation:/www\.architecturaldigest\.com/,elReducers:[o,a],destinationReducers:[i({tracker:"http://prf.hn/click/",camref:"1011l3dMu",pubref:"Architecturaldigest",targetHostnames:["www.farfetch.com"]})]},{targetLocation:/.*/,elReducers:[o,a],destinationReducers:[i({tracker:"http://demo.prf.hn/click/",camref:"111111l5Vt",pubref:"Architecturaldigest",targetHostnames:["www.farfetch.com"]})]}],notExternal:[/^https?:\/\/[^\/]*\.architecturaldigest\.[^\/]*(\/|$)/m,/^https?:\/\/architecturaldigest\.[^\/]*(\/|$)/m,/^https?:\/\/[^\/]*condenast\.com(\/|$)/m,/^https?:\/\/www\.condenaststore\.com(\/|$)/m,/^https?:\/\/www\.youtube\.com\/user\/architecturaldigest\//m,/^https?:\/\/www\.outbrain\.com\/what-is\/default\/en/m,/^https?:\/\/www\.facebook\.com\//m,/^https?:\/\/twitter\.com\/share/m,/^mailto:/m,/^https?:\/\/www\.pinterest\.com\/pin\/create\/button/m,/^https?:\/\/localhost/m]})}(document,window);
