!function(){"use strict";var t="/doctorwang/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"doctor","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.44b91813.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.763132da.async.js",65],["85.e8c51481.chunk.css",85],["85.26d996f0.async.js",85],["docs__a__index.md.8b609e3f.async.js",336],["nm__dumi__theme-default__layouts__DocLayout__index.a95aef03.async.js",519],["docs__b__index.md.26741da3.async.js",905],["dumi__tmp-production__dumi__theme__ContextWrapper.70827605.async.js",923],["docs__index.md.57be9c04.async.js",935]],"r":{"/*":[2,3,4,5,7,9],"/":[10,4,5,7,9],"/a":[6,4,5,7,9],"/b":[8,4,5,7,9],"/~demos/:id":[0,1,9]}},{publicPath:"/doctorwang/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();