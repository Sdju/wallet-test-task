(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function s(e){return u.p+"js/"+({"diff-viewer-page":"diff-viewer-page","order-book-page":"order-book-page"}[e]||e)+"."+{"diff-viewer-page":"ee8d3b69","order-book-page":"b2c0a07d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"diff-viewer-page":1,"order-book-page":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"diff-viewer-page":"diff-viewer-page","order-book-page":"order-book-page"}[e]||e)+"."+{"diff-viewer-page":"40def1c8","order-book-page":"eedc1f0c"}[e]+".css",i=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/wallet-test-task/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0104":function(e,t,n){},"054b":function(e,t,n){},"055d":function(e,t,n){"use strict";n("054b")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("TheHeader",{staticClass:"app__header"}),n("router-view",{staticClass:"app__body"})],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("router-link",{staticClass:"header__link",attrs:{to:"/"}},[e._v(" Биржевой стакан ")]),n("router-link",{staticClass:"header__link",attrs:{to:"/diff-viewer/"}},[e._v(" Отслеживание изменений ")])],1)},s=[],u={},c=u,l=(n("055d"),n("2877")),f=Object(l["a"])(c,o,s,!1,null,"5acd171a",null),p=f.exports,d={components:{TheHeader:p},created:function(){this.$core.init()}},v=d,h=(n("5c0b"),Object(l["a"])(v,a,i,!1,null,null,null)),b=h.exports,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(m["a"]);var g=[{path:"/",name:"Home",component:function(){return n.e("order-book-page").then(n.bind(null,"4be0"))}},{path:"/diff-viewer/",name:"About",component:function(){return n.e("diff-viewer-page").then(n.bind(null,"a7cc"))}}],y=new m["a"]({base:"/wallet-test-task/",routes:g}),E=y,w=n("d4ec"),O=n("bee2"),S=(n("b0c0"),n("d9e2"),n("99af"),n("159b"),n("07ac"),function(){function e(){Object(w["a"])(this,e),this.plugins={}}return Object(O["a"])(e,[{key:"use",value:function(e){if(e.name in this.plugins){var t=this.plugins[e.name];if(e.version!==t)throw new Error('PluginSystem[PLUGIN_VERSION_COLLISION]: "'.concat(e.name,'" plugin [').concat(e.version,"] and [").concat(t.version,"]"))}else this.plugins[e.name]=e,e.install(this)}},{key:"vueInstall",value:function(e){e.prototype.$core=this,Object.values(this.plugins).forEach((function(t){var n;null===(n=t.vueInstall)||void 0===n||n.call(t,e)}))}},{key:"init",value:function(){Object.values(this.plugins).forEach((function(e){var t;null===(t=e.init)||void 0===t||t.call(e)}))}},{key:"vuePlugin",get:function(){return{install:this.vueInstall.bind(this)}}}],[{key:"instance",get:function(){if(window.$WALLET_CORE)return window.$WALLET_CORE;var t=new e;return window.$WALLET_CORE=t,t}}]),e}()),_=n("262e"),B=n("2caf"),k=function(){function e(t){Object(w["a"])(this,e),this.core=null,this.name=t.name,this.version=t.version}return Object(O["a"])(e,[{key:"install",value:function(e){this.core=e}},{key:"getPlugin",value:function(e){var t,n=null===(t=this.core)||void 0===t?void 0:t.plugins[e];if(!n)throw new Error('PluginSystem[PLUGIN_ACCESS_ERROR]: "'.concat(this.name,'" trying to access to unavailable plugin "').concat(e,'"'));return n}}]),e}(),T=n("68f8"),j=function(e){Object(_["a"])(n,e);var t=Object(B["a"])(n);function n(){var e;return Object(w["a"])(this,n),e=t.call(this,{name:T["a"].EVENT_BUS,version:"1.0.0"}),e.emitter=new r["a"],e.emitter.Events={},e}return Object(O["a"])(n,[{key:"vueInstall",value:function(e){e.prototype.$eventBus=this.emitter}}]),n}(k),C=n("2909"),A=n("3835"),N=n("1da1"),$=n("ade3"),L=(n("fb6a"),n("4de4"),n("a9e3"),n("96cf"),n("e9c4"),function(){function e(){Object(w["a"])(this,e)}return Object(O["a"])(e,null,[{key:"getBySymbol",value:function(e){return fetch("https://api.binance.com/api/v3/depth?symbol=".concat(e,"&limit=500")).then((function(e){return e.json()}))}},{key:"subscribeBySymbol",value:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new WebSocket("wss://stream.binance.com:9443/ws/".concat(t.toLowerCase())),e.next=3,new Promise((function(e,t){r.addEventListener("open",(function(){return e(r)})),r.addEventListener("error",t)}));case 3:return r.send(JSON.stringify({method:"SUBSCRIBE",params:["".concat(t.toLowerCase(),"@depth")],id:1})),r.addEventListener("message",(function(e){var t=JSON.parse(e.data);"depthUpdate"===t.e&&n(t)})),e.abrupt("return",(function(){r.close()}));case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}()),D=function(e){Object(_["a"])(n,e);var t=Object(B["a"])(n);function n(){var e;return Object(w["a"])(this,n),e=t.call(this,{name:T["a"].TRADE_API,version:"1.0.0"}),e.$eventBus=null,e.symbol="BTCUSDT",e.SupportSymbols=["BTCUSDT","BNBBTC","ETHBTC"],e.DiffTypes=n.DiffTypes,e}return Object(O["a"])(n,[{key:"init",value:function(){var e=this.getPlugin(T["a"].EVENT_BUS);this.$eventBus=e.emitter,this.$eventBus.Events[T["a"].TRADE_API]=n.Events,this.$eventBus.$on(n.Events.SUBSCRIBE,this.subscribe.bind(this)),this.$eventBus.$on(n.Events.CHANGE_SYMBOL,this.changeSymbol.bind(this))}},{key:"subscribe",value:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){var t,r,a,i,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=null,r=null,e.next=4,L.subscribeBySymbol(this.symbol,function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,L.getBySymbol(o.symbol);case 3:t=e.sent,r=t.lastUpdateId,o.$eventBus.$emit(n.Events.SET_DATA,t);case 6:if(!(a.u<=r)){e.next=8;break}return e.abrupt("return");case 8:o.$eventBus.$emit(n.Events.CHANGE_DATA,{asks:a.a,bids:a.b});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:a=e.sent,i=function e(){a(),o.$eventBus.$off(n.Events.UNSUBSCRIBE,e)},this.$eventBus.$on(n.Events.UNSUBSCRIBE,i);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"changeSymbol",value:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.symbol=t,this.$eventBus.$emit(n.Events.SYMBOL_CHANGED);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"applyDiffToData",value:function(e,t,r){var a=this,i=0,o=0,s=[],u=r?"ask":"bid",c=function(){if(!(s.length>=500)){var t=500-s.length,r=e.slice(i).filter((function(e){var t=Object(A["a"])(e,2),n=t[1];return 0!==Number(n)})).slice(0,t);r.forEach((function(e){a.$eventBus.$emit(n.Events.DIFF_LOG,{type:n.DiffTypes.NEW,name:u,price:e[0],amount:e[1]})})),s.push.apply(s,Object(C["a"])(r))}};while(i!==e.length){var l=e[i],f=t[o],p=Number(f[0]),d=Number(l[0]),v=l[1];if(d===p){if(0!==Number(v)?(s.push(l),this.$eventBus.$emit(n.Events.DIFF_LOG,{type:n.DiffTypes.CHANGE,name:u,price:d,old:f[1],actual:v})):this.$eventBus.$emit(n.Events.DIFF_LOG,{type:n.DiffTypes.DELETE,name:u,price:d}),o+=1,o===t.length){i+=1,c();break}}else{if(d<p!==r){if(s.push(f),o+=1,o===t.length){c();break}continue}0!==Number(v)&&(s.push(l),this.$eventBus.$emit(n.Events.DIFF_LOG,{type:n.DiffTypes.NEW,name:u,price:d,amount:v}))}i+=1}return o!==t.length&&s.push.apply(s,Object(C["a"])(t.slice(o))),s.slice(0,500)}}]),n}(k);Object($["a"])(D,"DiffTypes",{CHANGE:"change",DELETE:"delete",NEW:"new"}),Object($["a"])(D,"Events",{SUBSCRIBE:"trade-api:subscribe",UNSUBSCRIBE:"trade-api:unsubscribe",SET_DATA:"trade-api:set-data",CHANGE_DATA:"trade-api:change-data",SYMBOL_CHANGED:"trade-api:symbol-changed",DIFF_LOG:"trade-api:diff-log",CHANGE_SYMBOL:"trade-api:change-symbol"});n("0104");r["a"].config.productionTip=!1;var I=S.instance;I.use(new j),I.use(new D),r["a"].use(I.vuePlugin),new r["a"]({router:E,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"68f8":function(e,t,n){"use strict";t["a"]={EVENT_BUS:"EventBus",TRADE_API:"TradeApi"}},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.53a75499.js.map