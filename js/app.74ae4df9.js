(function(e){function n(n){for(var c,a,d=n[0],o=n[1],s=n[2],b=0,f=[];b<d.length;b++)a=d[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);i&&i(n);while(f.length)f.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,a=1;a<t.length;a++){var d=t[a];0!==r[d]&&(c=!1)}c&&(u.splice(n--,1),e=o(o.s=t[0]))}return e}var c={},a={app:0},r={app:0},u=[];function d(e){return o.p+"js/"+({dashboard:"dashboard",login:"login",register:"register"}[e]||e)+"."+{"chunk-2d0b2e8a":"44e0d32b","chunk-2d0ea106":"bfcea033","chunk-2d0f09b2":"d07a29b0","chunk-2d2138ad":"7f902586","chunk-2d21ee8c":"44329ccf","chunk-2d222406":"7ac42d33","chunk-6897b103":"f9feefc0","chunk-0f986eae":"c5bb3d17","chunk-10ac5378":"7f5a622b","chunk-112ed313":"cbb175b5","chunk-2a95be42":"d75110de","chunk-3f72f40b":"97fd6e00","chunk-4a82f572":"3a709323","chunk-52e3ef31":"d07a8c8b","chunk-2d0a30bf":"52bdd42e","chunk-36817fea":"f0576fc5","chunk-62c06cd7":"5abdd8bb","chunk-6fc2f8f8":"de05cacc","chunk-89c166de":"e49b7929","chunk-b71df892":"af0fa1b2","chunk-2567c08b":"d0239c3f","chunk-2d0ba881":"61e081f2","chunk-c5ed8f98":"bbb74049","chunk-72d0faf8":"23b820f3",dashboard:"661db295",login:"07148fe8",register:"7f34db04"}[e]+".js"}function o(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var n=[],t={"chunk-10ac5378":1,"chunk-112ed313":1,"chunk-2a95be42":1,"chunk-3f72f40b":1,"chunk-4a82f572":1,"chunk-36817fea":1,"chunk-62c06cd7":1,"chunk-89c166de":1,"chunk-2567c08b":1,"chunk-c5ed8f98":1,"chunk-72d0faf8":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({dashboard:"dashboard",login:"login",register:"register"}[e]||e)+"."+{"chunk-2d0b2e8a":"31d6cfe0","chunk-2d0ea106":"31d6cfe0","chunk-2d0f09b2":"31d6cfe0","chunk-2d2138ad":"31d6cfe0","chunk-2d21ee8c":"31d6cfe0","chunk-2d222406":"31d6cfe0","chunk-6897b103":"31d6cfe0","chunk-0f986eae":"31d6cfe0","chunk-10ac5378":"ede90c05","chunk-112ed313":"253c4d05","chunk-2a95be42":"3188d972","chunk-3f72f40b":"8bedead0","chunk-4a82f572":"47acbd74","chunk-52e3ef31":"31d6cfe0","chunk-2d0a30bf":"31d6cfe0","chunk-36817fea":"7f20222a","chunk-62c06cd7":"b6f0406c","chunk-6fc2f8f8":"31d6cfe0","chunk-89c166de":"13b08812","chunk-b71df892":"31d6cfe0","chunk-2567c08b":"6b1c39b1","chunk-2d0ba881":"31d6cfe0","chunk-c5ed8f98":"854eeb0d","chunk-72d0faf8":"c7b2c323",dashboard:"31d6cfe0",login:"31d6cfe0",register:"31d6cfe0"}[e]+".css",r=o.p+c,u=document.getElementsByTagName("link"),d=0;d<u.length;d++){var s=u[d],b=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(b===c||b===r))return n()}var f=document.getElementsByTagName("style");for(d=0;d<f.length;d++){s=f[d],b=s.getAttribute("data-href");if(b===c||b===r)return n()}var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onload=n,i.onerror=function(n){var c=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete a[e],i.parentNode.removeChild(i),t(u)},i.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(i)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=u);var s,b=document.createElement("script");b.charset="utf-8",b.timeout=120,o.nc&&b.setAttribute("nonce",o.nc),b.src=d(e);var f=new Error;s=function(n){b.onerror=b.onload=null,clearTimeout(i);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",f.name="ChunkLoadError",f.type=c,f.request=a,t[1](f)}r[e]=void 0}};var i=setTimeout((function(){s({type:"timeout",target:b})}),12e4);b.onerror=b.onload=s,document.head.appendChild(b)}return Promise.all(n)},o.m=e,o.c=c,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)o.d(t,c,function(n){return e[n]}.bind(null,c));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],b=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var i=b;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"37d1":function(e,n,t){},4678:function(e,n,t){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var n=r(e);return t(n)}function r(e){if(!t.o(c,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("260b"),a={apiKey:"AIzaSyA0Bp0iHNdtSLNe-Jnr9pXIohl_MuvoMfs",authDomain:"bstrang-vn.firebaseapp.com",projectId:"bstrang-vn",storageBucket:"bstrang-vn.appspot.com",messagingSenderId:"195870625919",appId:"1:195870625919:web:e76a190a0c1f03639d6f4a",measurementId:"G-7JZXHCLFCR"},r=(Object(c["a"])(a),t("7a23")),u=t("f23d");t("202f"),t("9c9e"),t("c860"),t("d3b7"),t("3ca3"),t("ddb0");function d(e){e.component("auth-layout",Object(r["p"])((function(){return t.e("chunk-2d0b2e8a").then(t.bind(null,"25b3"))}))),e.component("default-layout",Object(r["p"])((function(){return t.e("chunk-72d0faf8").then(t.bind(null,"f051"))})))}function o(e){e.directive("click-outside",{beforeMount:function(e,n,t){e.clickOutsideEvent=function(t){e===t.target||e.contains(t.target)||n.value(t,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}})}var s=t("ea7b"),b=t("6c02"),f=[{path:"warehouse",name:"Warehouse",meta:{breadcrumbName:"Warehouse"},component:function(){return t.e("chunk-2d0ea106").then(t.bind(null,"8fce"))},children:[{path:"",name:"Goods List",meta:{breadcrumbName:"Goods List"},component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-2a95be42")]).then(t.bind(null,"afe2"))}},{path:"details/:id",name:"Goods Details",meta:{breadcrumbName:"Details"},component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-10ac5378")]).then(t.bind(null,"2bc5"))}}]},{path:"customer",name:"Customer",meta:{breadcrumbName:"Customer"},component:function(){return t.e("chunk-2d0f09b2").then(t.bind(null,"9ca3"))},children:[{path:"",name:"Customer List",meta:{breadcrumbName:"List"},component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-3f72f40b")]).then(t.bind(null,"f31f"))}},{path:"details/:id",name:"Customer Details",meta:{breadcrumbName:"Details"},component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-0f986eae")]).then(t.bind(null,"d8c5"))}}]},{path:"provider",name:"Provider",meta:{breadcrumbName:"Provider"},component:function(){return t.e("chunk-2d222406").then(t.bind(null,"ce8f"))},children:[{path:"",name:"Provider List",meta:{breadcrumbName:"List"},component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-112ed313")]).then(t.bind(null,"05c7"))}},{path:"details/:id",name:"Provider Details",meta:{breadcrumbName:"Details"},component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-89c166de")]).then(t.bind(null,"7d34"))}}]},{path:"import-note",name:"ImportNote",meta:{breadcrumbName:"ImportNote"},component:function(){return t.e("chunk-2d2138ad").then(t.bind(null,"acb7"))},children:[{path:"",name:"ImportNote List",meta:{breadcrumbName:"List"},component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-4a82f572")]).then(t.bind(null,"bdc2"))}},{path:"create-modify/:id?",meta:{breadcrumbName:"Create Modify"},name:"ImportNote Create Modify",component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-b71df892"),t.e("chunk-2567c08b")]).then(t.bind(null,"fbb2"))}},{path:"details/:id",meta:{breadcrumbName:"Details"},name:"ImportNote Details",component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-b71df892"),t.e("chunk-2d0ba881")]).then(t.bind(null,"3839"))}}]},{path:"export-note",name:"ExportNote",meta:{breadcrumbName:"ExportNote"},component:function(){return t.e("chunk-2d21ee8c").then(t.bind(null,"d824"))},children:[{path:"",name:"ExportNote List",meta:{breadcrumbName:"List"},component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-62c06cd7")]).then(t.bind(null,"df82"))}},{path:"create-modify/:id?",meta:{breadcrumbName:"Create Modify"},name:"ExportNote Create Modify",component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-52e3ef31"),t.e("chunk-36817fea")]).then(t.bind(null,"2e6d"))}},{path:"details/:id",meta:{breadcrumbName:"Details"},name:"ExportNote Details",component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-52e3ef31"),t.e("chunk-2d0a30bf")]).then(t.bind(null,"0108"))}}]},{path:"statistics",name:"Statistics",meta:{breadcrumbName:"Statistics"},component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-c5ed8f98")]).then(t.bind(null,"93c5"))}},{path:"setting",name:"Setting",meta:{breadcrumbName:"Setting"},component:function(){return Promise.all([t.e("chunk-6897b103"),t.e("chunk-6fc2f8f8")]).then(t.bind(null,"060e"))}}],i=f,h=Object(s["b"])(),l=function(e,n,t){Object(s["c"])(h,(function(e){e?t():t({name:"Login",params:{}})}))},m=[{path:"/",name:"Home",redirect:{name:"Goods List"}},{path:"/dashboard",name:"Dashboard",meta:{breadcrumbName:"Dashboard"},component:function(){return t.e("dashboard").then(t.bind(null,"3ec7"))},beforeEnter:l,children:i},{path:"/store",name:"Store",meta:{breadcrumbName:"Store"},component:function(){return t.e("dashboard").then(t.bind(null,"3ec7"))}},{path:"/register",name:"Register",meta:{layout:"auth-layout"},component:function(){return t.e("register").then(t.bind(null,"73cf"))}},{path:"/login",name:"Login",meta:{layout:"auth-layout"},component:function(){return t.e("login").then(t.bind(null,"a55b"))}}],j=Object(b["a"])({history:Object(b["b"])("/"),routes:m}),p=j;function k(e,n,t,c,a,u){var d=Object(r["R"])("router-view");return Object(r["I"])(),Object(r["j"])(Object(r["T"])(c.layout),null,{default:Object(r["cb"])((function(){return[Object(r["o"])(d)]})),_:1})}var g={setup:function(){var e=Object(b["c"])();return{layout:Object(r["h"])((function(){return e.meta.layout||"default-layout"}))}}},v=(t("660a"),t("6b0d")),y=t.n(v);const N=y()(g,[["render",k]]);var O=N,P=Object(r["i"])(O);P.config.productionTip=!1,d(P),o(P),P.use(u["a"]),P.use(p),P.mount("#app")},"660a":function(e,n,t){"use strict";t("37d1")},"9c9e":function(e,n,t){},c860:function(e,n,t){}});
//# sourceMappingURL=app.74ae4df9.js.map