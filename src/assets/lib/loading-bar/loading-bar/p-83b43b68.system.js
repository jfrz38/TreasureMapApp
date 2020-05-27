var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{u(n.next(e))}catch(r){o(r)}}function s(e){try{u(n["throw"](e))}catch(r){o(r)}}function u(e){e.done?t(e.value):a(e.value).then(i,s)}u((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(r){return u([e,r])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(o=i[0]&2?a["return"]:i[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,i[1])).done)return o;if(a=0,o)i=[i[0]&2,o.value];switch(i[0]){case 0:case 1:o=i;break;case 4:t.label++;return{value:i[1],done:false};case 5:t.label++;a=i[1];i=[0];continue;case 7:i=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){t.label=i[1];break}if(i[0]===6&&t.label<o[1]){t.label=o[1];o=i;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(i);break}if(o[2])t.ops.pop();t.trys.pop();continue}i=r.call(e,t)}catch(s){i=[6,s];a=0}finally{n=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var o=arguments[r],i=0,s=o.length;i<s;i++,a++)n[a]=o[i];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="loading-bar";var a;var o;var i=false;var s=typeof window!=="undefined"?window:{};var u=s.CSS;var c=s.document||{head:{}};var l={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var f=function(){return(c.head.attachShadow+"").indexOf("[native")>-1}();var $=function(e){return Promise.resolve(e)};var v=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var h="{visibility:hidden}.hydrated{visibility:inherit}";var p=function(e,r){if(r===void 0){r=""}{return function(){return}}};var d=function(e,r){{return function(){return}}};var m=new WeakMap;var g=function(e,r,t){var n=oe.get(e);if(v&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}oe.set(e,n)};var y=function(e,r,t,n){var a=b(r.$tagName$);var o=oe.get(a);e=e.nodeType===11?e:c;if(o){if(typeof o==="string"){e=e.head||e;var i=m.get(e);var s=void 0;if(!i){m.set(e,i=new Set)}if(!i.has(a)){{if(l.$cssShim$){s=l.$cssShim$.createHostStyle(n,a,o,!!(r.$flags$&10));var u=s["s-sc"];if(u){a=u;i=null}}else{s=c.createElement("style");s.innerHTML=o}e.insertBefore(s,e.querySelector("link"))}if(i){i.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[o])}}return a};var w=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=p("attachStyles",r.$tagName$);var o=y(f&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=o;t.classList.add(o+"-h")}a()};var b=function(e,r){return"sc-"+e};var _={};var S=function(e){return e!=null};var R=function(e){e=typeof e;return e==="object"||e==="function"};var E=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var N=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var o=false;var i=false;var s=[];var u=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!R(a)){a=String(a)}if(o&&i){s[s.length-1].$text$+=a}else{s.push(o?j(null,a):a)}i=o}}};u(t);if(r){{var c=r.className||r.class;if(c){r.class=typeof c!=="object"?c:Object.keys(c).filter((function(e){return c[e]})).join(" ")}}}var l=j(e,null);l.$attrs$=r;if(s.length>0){l.$children$=s}return l}));var j=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}return t};var C={};var M=function(e){return e&&e.$tag$===C};var L=function(e,r,t,n,a,o){if(t!==n){var i=r.toLowerCase();if(r==="class"){var s=e.classList;var u=U(t);var c=U(n);s.remove.apply(s,u.filter((function(e){return e&&!c.includes(e)})));s.add.apply(s,c.filter((function(e){return e&&!u.includes(e)})))}}};var x=/\s/;var U=function(e){return!e?[]:e.split(x)};var k=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var o=e&&e.$attrs$||_;var i=r.$attrs$||_;for(n in i){L(a,n,o[n],i[n])}};var A=function(e,r,t,n){var o=r.$children$[t];var i=0;var s;var u;{s=o.$elm$=c.createElement(o.$tag$);{k(null,o)}if(S(a)&&s["s-si"]!==a){s.classList.add(s["s-si"]=a)}if(o.$children$){for(i=0;i<o.$children$.length;++i){u=A(e,o,i);if(u){s.appendChild(u)}}}}return s};var O=function(e,r,t,n,a,i){var s=e;var u;if(s.shadowRoot&&s.tagName===o){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){u=A(null,t,a);if(u){n[a].$elm$=u;s.insertBefore(u,r)}}}};var P=function(e,r){var t=r.$elm$=e.$elm$;var n=r.$children$;{{{k(e,r)}}if(n!==null){O(t,null,r,n,0,n.length-1)}}};var T=function(e,r){var t=e.$hostElement$;var n=e.$vnode$||j(null,null);var i=M(r)?r:N(null,null,r);o=t.tagName;i.$tag$=null;i.$flags$|=4;e.$vnode$=i;i.$elm$=n.$elm$=t.shadowRoot||t;{a=t["s-sc"]}P(n,i)};var B=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var H=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var I=function(e,r){if(e.$flags$&4){e.$flags$|=512;return}var t=p("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var o=function(){return q(e,a,r)};H(e,n);var i;t();return G(i,(function(){return $e(o)}))};var q=function(e,r,t){var n=e.$hostElement$;var a=p("update",e.$cmpMeta$.$tagName$);var o=n["s-rc"];if(t){w(e)}var i=p("render",e.$cmpMeta$.$tagName$);{{T(e,z(r))}}if(l.$cssShim$){l.$cssShim$.updateHost(n)}{e.$flags$|=2}if(o){o.map((function(e){return e()}));n["s-rc"]=undefined}i();a();{var s=n["s-p"];var u=function(){return F(e)};if(s.length===0){u()}else{Promise.all(s).then(u);e.$flags$|=4;s.length=0}}};var z=function(e){try{e=e.render()}catch(r){te(r)}return e};var F=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=p("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{V(t)}n();{e.$onReadyResolve$(t);if(!a){W()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){fe((function(){return I(e,false)}))}e.$flags$&=~(4|512)}};var W=function(e){{V(c.documentElement)}fe((function(){return B(s,"appload",{detail:{namespace:n}})}))};var G=function(e,r){return e&&e.then?e.then(r):r()};var V=function(e){return e.classList.add("hydrated")};var D=function(e,r,t){return e};var J=function(e,n,a,o,i){return __awaiter(t,void 0,void 0,(function(){var e,t,o,s,u,c,l;return __generator(this,(function(f){switch(f.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;i=ae(a);if(!i.then)return[3,2];e=d();return[4,i];case 1:i=f.sent();e();f.label=2;case 2:t=p("createInstance",a.$tagName$);try{new i(n)}catch($){te($)}t();o=b(a.$tagName$);if(!(!oe.has(o)&&i.style))return[3,5];s=p("registerStyles",a.$tagName$);u=i.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ac6f021f.system.js").then((function(e){return e.scopeCss(u,o,false)}))];case 3:u=f.sent();f.label=4;case 4:g(o,u,!!(a.$flags$&1));s();f.label=5;case 5:c=n.$ancestorComponent$;l=function(){return I(n,true)};if(c&&c["s-rc"]){c["s-rc"].push(l)}else{l()}return[2]}}))}))};var K=function(e){if((l.$flags$&1)===0){var r=Z(e);var t=r.$cmpMeta$;var n=p("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){H(r,r.$ancestorComponent$=a);break}}}{J(e,r,t)}}n()}};var Q=function(e){if((l.$flags$&1)===0){var r=Z(e);if(l.$cssShim$){l.$cssShim$.removeHost(e)}}};var X=e("b",(function(e,r){if(r===void 0){r={}}var t=p();var n=[];var a=r.exclude||[];var o=s.customElements;var i=c.head;var u=i.querySelector("meta[charset]");var $=c.createElement("style");var v=[];var d;var m=true;Object.assign(l,r);l.$resourcesUrl$=new URL(r.resourcesUrl||"./",c.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};if(!f&&t.$flags$&1){t.$flags$|=8}var i=t.$tagName$;var s=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;re(r,t);if(t.$flags$&1){if(f){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(d){clearTimeout(d);d=null}if(m){v.push(this)}else{l.jmp((function(){return K(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;l.jmp((function(){return Q(e)}))};r.prototype.forceUpdate=function(){};r.prototype.componentOnReady=function(){return Z(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!o.get(i)){n.push(i);o.define(i,D(s))}}))}));{$.innerHTML=n+h;$.setAttribute("data-styles","");i.insertBefore($,u?u.nextSibling:i.firstChild)}m=false;if(v.length){v.map((function(e){return e.connectedCallback()}))}else{{l.jmp((function(){return d=setTimeout(W,30)}))}}t()}));var Y=new WeakMap;var Z=function(e){return Y.get(e)};var ee=e("r",(function(e,r){return Y.set(r.$lazyInstance$=e,r)}));var re=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Y.set(e,t)};var te=function(e){return console.error(e)};var ne=new Map;var ae=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var o=e.$lazyBundleIds$;var i=ne.get(o);if(i){return i[a]}return r.import("./"+o+".entry.js"+"").then((function(e){{ne.set(o,e)}return e[a]}),te)};var oe=new Map;var ie=[];var se=[];var ue=function(e,r){return function(t){e.push(t);if(!i){i=true;if(r&&l.$flags$&4){fe(le)}else{l.raf(le)}}}};var ce=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){te(t)}}e.length=0};var le=function(){ce(ie);{ce(se);if(i=ie.length>0){l.raf(le)}}};var fe=function(e){return $().then(e)};var $e=ue(se,true);var ve=e("a",(function(){if(!(u&&u.supports&&u.supports("color","var(--c)"))){return r.import("./p-2f8c282d.system.js").then((function(){if(l.$cssShim$=s.__cssshim){return l.$cssShim$.i()}else{return 0}}))}return $()}));var he=e("p",(function(){{l.$cssShim$=s.__cssshim}var e=Array.from(c.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,s.location.href)).href;{pe(t.resourcesUrl,e)}if(!s.customElements){return r.import("./p-c6833af0.system.js").then((function(){return t}))}}return $(t)}));var pe=function(e,r){var t=E(n);try{s[t]=new Function("w","return import(w);//"+Math.random())}catch(o){var a=new Map;s[t]=function(n){var o=new URL(n,e).href;var i=a.get(o);if(!i){var u=c.createElement("script");u.type="module";u.crossOrigin=r.crossOrigin;u.src=URL.createObjectURL(new Blob(["import * as m from '"+o+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){u.onload=function(){e(s[t].m);u.remove()}}));a.set(o,i);c.head.appendChild(u)}return i}}}}}}));