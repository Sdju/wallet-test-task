(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order-book-page"],{"1ccb":function(t,e,n){"use strict";n("87b8")},"4b70":function(t,e,n){(function(e,n){t.exports=n()})("undefined"!==typeof self&&self,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"3ae1":function(t,e,n){"use strict";n("e386")},8875:function(t,e,n){var i,r,o;(function(n,l){r=[],i=l,o="function"===typeof i?i.apply(e,r):i,void 0===o||(t.exports=o)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(f){var n,i,r,o=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,l=/@([^@]*):(\d+):(\d+)\s*$/gi,s=o.exec(f.stack)||l.exec(f.stack),a=s&&s[1]||!1,c=s&&s[2]||!1,h=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");a===h&&(n=document.documentElement.outerHTML,i=new RegExp("(?:[^\\n]+?\\n){0,"+(c-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=n.replace(i,"$1").trim());for(var d=0;d<u.length;d++){if("interactive"===u[d].readyState)return u[d];if(u[d].src===a)return u[d];if(a===h&&u[d].innerHTML&&u[d].innerHTML.trim()===r)return u[d]}return null}}return t}))},e386:function(t,e,n){},fb15:function(t,e,n){"use strict";if(n.r(e),"undefined"!==typeof window){var i=window.document.currentScript,r=n("8875");i=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r});var o=i&&i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.$props.tagname,{tag:"section",staticClass:"ps-container",on:{"ps-scroll-y":t.scrollHandle,"ps-scroll-x":t.scrollHandle,"ps-scroll-up":t.scrollHandle,"ps-scroll-down":t.scrollHandle,"ps-scroll-left":t.scrollHandle,"ps-scroll-right":t.scrollHandle,"ps-y-reach-start":t.scrollHandle,"ps-y-reach-end":t.scrollHandle,"ps-x-reach-start":t.scrollHandle,"ps-x-reach-end":t.scrollHandle}},[t._t("default")],2)},s=[];
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function a(t){return getComputedStyle(t)}function c(t,e){for(var n in e){var i=e[n];"number"===typeof i&&(i+="px"),t.style[n]=i}return t}function h(t){var e=document.createElement("div");return e.className=t,e}var u="undefined"!==typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function d(t,e){if(!u)throw new Error("No element matching method supported");return u.call(t,e)}function f(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function p(t,e){return Array.prototype.filter.call(t.children,(function(t){return d(t,e)}))}var b={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},v={x:null,y:null};function g(t,e){var n=t.element.classList,i=b.state.scrolling(e);n.contains(i)?clearTimeout(v[e]):n.add(i)}function m(t,e){v[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(b.state.scrolling(e))}),t.settings.scrollingThreshold)}function y(t,e){g(t,e),m(t,e)}var w=function(t){this.element=t,this.handlers={}},_={isEmpty:{configurable:!0}};w.prototype.bind=function(t,e){"undefined"===typeof this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},w.prototype.unbind=function(t,e){var n=this;this.handlers[t]=this.handlers[t].filter((function(i){return!(!e||i===e)||(n.element.removeEventListener(t,i,!1),!1)}))},w.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},_.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(w.prototype,_);var Y=function(){this.eventElements=[]};function X(t){if("function"===typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function S(t,e,n,i,r){var o;if(void 0===i&&(i=!0),void 0===r&&(r=!1),"top"===e)o=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");o=["contentWidth","containerWidth","scrollLeft","x","left","right"]}T(t,n,o,i,r)}function T(t,e,n,i,r){var o=n[0],l=n[1],s=n[2],a=n[3],c=n[4],h=n[5];void 0===i&&(i=!0),void 0===r&&(r=!1);var u=t.element;t.reach[a]=null,u[s]<1&&(t.reach[a]="start"),u[s]>t[o]-t[l]-1&&(t.reach[a]="end"),e&&(u.dispatchEvent(X("ps-scroll-"+a)),e<0?u.dispatchEvent(X("ps-scroll-"+c)):e>0&&u.dispatchEvent(X("ps-scroll-"+h)),i&&y(t,a)),t.reach[a]&&(e||r)&&u.dispatchEvent(X("ps-"+a+"-reach-"+t.reach[a]))}function R(t){return parseInt(t,10)||0}function W(t){return d(t,"input,[contenteditable]")||d(t,"select,[contenteditable]")||d(t,"textarea,[contenteditable]")||d(t,"button,[contenteditable]")}function E(t){var e=a(t);return R(e.width)+R(e.paddingLeft)+R(e.paddingRight)+R(e.borderLeftWidth)+R(e.borderRightWidth)}Y.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0];return e||(e=new w(t),this.eventElements.push(e)),e},Y.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},Y.prototype.unbind=function(t,e,n){var i=this.eventElement(t);i.unbind(e,n),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1)},Y.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},Y.prototype.once=function(t,e,n){var i=this.eventElement(t),r=function(t){i.unbind(e,r),n(t)};i.bind(e,r)};var L={isWebKit:"undefined"!==typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!==typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!==typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!==typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function H(t){var e=t.element,n=Math.floor(e.scrollTop),i=e.getBoundingClientRect();t.containerWidth=Math.round(i.width),t.containerHeight=Math.round(i.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(p(e,b.element.rail("x")).forEach((function(t){return f(t)})),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(p(e,b.element.rail("y")).forEach((function(t){return f(t)})),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=A(t,R(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=R((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=A(t,R(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=R(n*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),k(e,t),t.scrollbarXActive?e.classList.add(b.state.active("x")):(e.classList.remove(b.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?e.classList.add(b.state.active("y")):(e.classList.remove(b.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function A(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function k(t,e){var n={width:e.railXWidth},i=Math.floor(t.scrollTop);e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-i:n.top=e.scrollbarXTop+i,c(e.scrollbarXRail,n);var r={top:i,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,c(e.scrollbarYRail,r),c(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),c(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function M(t){t.element,t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var n=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,i=n>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,H(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var n=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,i=n>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,H(t),e.stopPropagation()}))}function C(t){x(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),x(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function x(t,e){var n=e[0],i=e[1],r=e[2],o=e[3],l=e[4],s=e[5],a=e[6],c=e[7],h=e[8],u=t.element,d=null,f=null,p=null;function v(e){e.touches&&e.touches[0]&&(e[r]=e.touches[0].pageY),u[a]=d+p*(e[r]-f),g(t,c),H(t),e.stopPropagation(),e.type.startsWith("touch")&&e.changedTouches.length>1&&e.preventDefault()}function y(){m(t,c),t[h].classList.remove(b.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",v)}function w(e,l){d=u[a],l&&e.touches&&(e[r]=e.touches[0].pageY),f=e[r],p=(t[i]-t[n])/(t[o]-t[s]),l?t.event.bind(t.ownerDocument,"touchmove",v):(t.event.bind(t.ownerDocument,"mousemove",v),t.event.once(t.ownerDocument,"mouseup",y),e.preventDefault()),t[h].classList.add(b.state.clicking),e.stopPropagation()}t.event.bind(t[l],"mousedown",(function(t){w(t)})),t.event.bind(t[l],"touchstart",(function(t){w(t,!0)}))}function D(t){var e=t.element,n=function(){return d(e,":hover")},i=function(){return d(t.scrollbarX,":focus")||d(t.scrollbarY,":focus")};function r(n,i){var r=Math.floor(e.scrollTop);if(0===n){if(!t.scrollbarYActive)return!1;if(0===r&&i>0||r>=t.contentHeight-t.containerHeight&&i<0)return!t.settings.wheelPropagation}var o=e.scrollLeft;if(0===i){if(!t.scrollbarXActive)return!1;if(0===o&&n<0||o>=t.contentWidth-t.containerWidth&&n>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",(function(o){if(!(o.isDefaultPrevented&&o.isDefaultPrevented()||o.defaultPrevented)&&(n()||i())){var l=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(l){if("IFRAME"===l.tagName)l=l.contentDocument.activeElement;else while(l.shadowRoot)l=l.shadowRoot.activeElement;if(W(l))return}var s=0,a=0;switch(o.which){case 37:s=o.metaKey?-t.contentWidth:o.altKey?-t.containerWidth:-30;break;case 38:a=o.metaKey?t.contentHeight:o.altKey?t.containerHeight:30;break;case 39:s=o.metaKey?t.contentWidth:o.altKey?t.containerWidth:30;break;case 40:a=o.metaKey?-t.contentHeight:o.altKey?-t.containerHeight:-30;break;case 32:a=o.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(e.scrollTop-=a,e.scrollLeft+=s,H(t),r(s,a)&&o.preventDefault())}}))}function B(t){var e=t.element;function n(n,i){var r,o=Math.floor(e.scrollTop),l=0===e.scrollTop,s=o+e.offsetHeight===e.scrollHeight,a=0===e.scrollLeft,c=e.scrollLeft+e.offsetWidth===e.scrollWidth;return r=Math.abs(i)>Math.abs(n)?l||s:a||c,!r||!t.settings.wheelPropagation}function i(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!==typeof e&&"undefined"!==typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),t.shiftKey?[-n,-e]:[e,n]}function r(t,n,i){if(!L.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(t))return!1;var r=t;while(r&&r!==e){if(r.classList.contains(b.element.consuming))return!0;var o=a(r);if(i&&o.overflowY.match(/(scroll|auto)/)){var l=r.scrollHeight-r.clientHeight;if(l>0&&(r.scrollTop>0&&i<0||r.scrollTop<l&&i>0))return!0}if(n&&o.overflowX.match(/(scroll|auto)/)){var s=r.scrollWidth-r.clientWidth;if(s>0&&(r.scrollLeft>0&&n<0||r.scrollLeft<s&&n>0))return!0}r=r.parentNode}return!1}function o(o){var l=i(o),s=l[0],a=l[1];if(!r(o.target,s,a)){var c=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(a?e.scrollTop-=a*t.settings.wheelSpeed:e.scrollTop+=s*t.settings.wheelSpeed,c=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(s?e.scrollLeft+=s*t.settings.wheelSpeed:e.scrollLeft-=a*t.settings.wheelSpeed,c=!0):(e.scrollTop-=a*t.settings.wheelSpeed,e.scrollLeft+=s*t.settings.wheelSpeed),H(t),c=c||n(s,a),c&&!o.ctrlKey&&(o.stopPropagation(),o.preventDefault())}}"undefined"!==typeof window.onwheel?t.event.bind(e,"wheel",o):"undefined"!==typeof window.onmousewheel&&t.event.bind(e,"mousewheel",o)}function $(t){if(L.supportsTouch||L.supportsIePointer){var e=t.element,n={},i=0,r={},o=null;L.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",f),t.event.bind(e,"touchend",p)):L.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",f),t.event.bind(e,"pointerup",p)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",f),t.event.bind(e,"MSPointerUp",p)))}function l(n,i){var r=Math.floor(e.scrollTop),o=e.scrollLeft,l=Math.abs(n),s=Math.abs(i);if(s>l){if(i<0&&r===t.contentHeight-t.containerHeight||i>0&&0===r)return 0===window.scrollY&&i>0&&L.isChrome}else if(l>s&&(n<0&&o===t.contentWidth-t.containerWidth||n>0&&0===o))return!0;return!0}function s(n,i){e.scrollTop-=i,e.scrollLeft-=n,H(t)}function c(t){return t.targetTouches?t.targetTouches[0]:t}function h(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function u(t){if(h(t)){var e=c(t);n.pageX=e.pageX,n.pageY=e.pageY,i=(new Date).getTime(),null!==o&&clearInterval(o)}}function d(t,n,i){if(!e.contains(t))return!1;var r=t;while(r&&r!==e){if(r.classList.contains(b.element.consuming))return!0;var o=a(r);if(i&&o.overflowY.match(/(scroll|auto)/)){var l=r.scrollHeight-r.clientHeight;if(l>0&&(r.scrollTop>0&&i<0||r.scrollTop<l&&i>0))return!0}if(n&&o.overflowX.match(/(scroll|auto)/)){var s=r.scrollWidth-r.clientWidth;if(s>0&&(r.scrollLeft>0&&n<0||r.scrollLeft<s&&n>0))return!0}r=r.parentNode}return!1}function f(t){if(h(t)){var e=c(t),o={pageX:e.pageX,pageY:e.pageY},a=o.pageX-n.pageX,u=o.pageY-n.pageY;if(d(t.target,a,u))return;s(a,u),n=o;var f=(new Date).getTime(),p=f-i;p>0&&(r.x=a/p,r.y=u/p,i=f),l(a,u)&&t.preventDefault()}}function p(){t.settings.swipeEasing&&(clearInterval(o),o=setInterval((function(){t.isInitialized?clearInterval(o):r.x||r.y?Math.abs(r.x)<.01&&Math.abs(r.y)<.01?clearInterval(o):t.element?(s(30*r.x,30*r.y),r.x*=.8,r.y*=.8):clearInterval(o):clearInterval(o)}),10))}}var P=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},O={"click-rail":M,"drag-thumb":C,keyboard:D,wheel:B,touch:$},N=function(t,e){var n=this;if(void 0===e&&(e={}),"string"===typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var i in this.element=t,t.classList.add(b.main),this.settings=P(),e)this.settings[i]=e[i];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var r=function(){return t.classList.add(b.state.focus)},o=function(){return t.classList.remove(b.state.focus)};this.isRtl="rtl"===a(t).direction,!0===this.isRtl&&t.classList.add(b.rtl),this.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new Y,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=h(b.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=h(b.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",r),this.event.bind(this.scrollbarX,"blur",o),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var l=a(this.scrollbarXRail);this.scrollbarXBottom=parseInt(l.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=R(l.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=R(l.borderLeftWidth)+R(l.borderRightWidth),c(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=R(l.marginLeft)+R(l.marginRight),c(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=h(b.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=h(b.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",r),this.event.bind(this.scrollbarY,"blur",o),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var s=a(this.scrollbarYRail);this.scrollbarYRight=parseInt(s.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=R(s.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?E(this.scrollbarY):null,this.railBorderYWidth=R(s.borderTopWidth)+R(s.borderBottomWidth),c(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=R(s.marginTop)+R(s.marginBottom),c(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return O[t](n)})),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return n.onScroll(t)})),H(this)};N.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,c(this.scrollbarXRail,{display:"block"}),c(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=R(a(this.scrollbarXRail).marginLeft)+R(a(this.scrollbarXRail).marginRight),this.railYMarginHeight=R(a(this.scrollbarYRail).marginTop)+R(a(this.scrollbarYRail).marginBottom),c(this.scrollbarXRail,{display:"none"}),c(this.scrollbarYRail,{display:"none"}),H(this),S(this,"top",0,!1,!0),S(this,"left",0,!1,!0),c(this.scrollbarXRail,{display:""}),c(this.scrollbarYRail,{display:""}))},N.prototype.onScroll=function(t){this.isAlive&&(H(this),S(this,"top",this.element.scrollTop-this.lastScrollTop),S(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},N.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),f(this.scrollbarX),f(this.scrollbarY),f(this.scrollbarXRail),f(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},N.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")};var I=N,j={name:"vue-custom-scrollbar",props:{settings:{default:null},swicher:{type:Boolean,default:!0},tagname:{type:String,default:"section"}},data:function(){return{ps:null}},methods:{scrollHandle:function(t){this.$emit(t.type,t)},update:function(){this.ps&&this.ps.update()},__init:function(){this.swicher&&(this._ps_inited?this.ps.update():(this._ps_inited=!0,this.ps=new I(this.$el,this.settings)))},__uninit:function(){this.ps&&(this.ps.destroy(),this.ps=null,this._ps_inited=!1)}},watch:{swicher:function(t){t&&!this._ps_inited&&this.__init(),!t&&this._ps_inited&&this.__uninit()},settings:{deep:!0,handler:function(){this.__uninit(),this.__init()}},$route:function(){this.update()}},mounted:function(){this.$isServer||this.__init()},updated:function(){this.$nextTick(this.update)},activated:function(){this.__init()},deactivated:function(){this.__uninit()},beforeDestroy:function(){this.__uninit()}},U=j;function K(t,e,n,i,r,o,l,s){var a,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),l?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=a):r&&(a=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(c.functional){c._injectStyles=a;var h=c.render;c.render=function(t,e){return a.call(e),h(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,a):[a]}return{exports:t,options:c}}n("3ae1");var z=K(U,l,s,!1,null,null,null),G=z.exports;e["default"]=G}})["default"]}))},"4be0":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-book-page"},[n("OrderBook",{staticClass:"order-book-page__book"})],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-book"},[n("div",{staticClass:"order-book__bid"},[n("CustomScrollbar",{staticClass:"order-book__scroll"},[n("OrderBookTable",{staticClass:"order-book__table",attrs:{data:t.bids}})],1)],1),n("div",{staticClass:"order-book__ask"},[n("CustomScrollbar",{staticClass:"order-book__scroll"},[n("OrderBookTable",{staticClass:"order-book__table",attrs:{data:t.asks}})],1)],1)])},l=[],s=n("68f8"),a=n("4b70"),c=n.n(a),h=(n("e973"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"order-book-table"},[n("thead",[n("tr",[n("th",[t._v("Price")]),n("th",[t._v("Amount")]),t.isMobile?t._e():n("th",[t._v("Total")])])]),n("tbody",t._l(t.rows,(function(e){return n("tr",{key:""+e.price},[n("td",[t._v(t._s(e.price))]),n("td",[t._v(t._s(e.amount))]),t.isMobile?t._e():n("td",[t._v(t._s(e.total))])])})),0)])}),u=[],d=n("3835"),f=(n("d81d"),{props:{data:{type:Array,required:!0}},data:function(){return{isMobile:!1}},computed:{rows:function(){return this.data.map((function(t){var e=Object(d["a"])(t,2),n=e[0],i=e[1];return{price:n,amount:i,total:n*i}}))}},beforeMount:function(){this.isMobile=window.innerWidth<800,window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){this.isMobile=window.innerWidth<800}}}),p=f,b=(n("6728"),n("2877")),v=Object(b["a"])(p,h,u,!1,null,"61025880",null),g=v.exports,m={components:{OrderBookTable:g,CustomScrollbar:c.a},data:function(){return{asks:[],bids:[]}},created:function(){var t=this.$eventBus.Events[s["a"].TRADE_API];this.$eventBus.$emit(t.SUBSCRIBE),this.$eventBus.$on(t.SYMBOL_CHANGED,this.symbolChanged),this.$eventBus.$on(t.SET_DATA,this.setData),this.$eventBus.$on(t.CHANGE_DATA,this.updateData)},beforeDestroy:function(){var t=this.$eventBus.Events[s["a"].TRADE_API];this.$eventBus.$emit(t.UNSUBSCRIBE),this.$eventBus.$off(t.SYMBOL_CHANGED,this.symbolChanged),this.$eventBus.$off(t.SET_DATA,this.setData),this.$eventBus.$off(t.CHANGE_DATA,this.updateData)},methods:{setData:function(t){var e=t.asks,n=t.bids;this.asks=e,this.bids=n},updateData:function(t){var e=t.asks,n=t.bids,i=this.$core.plugins[s["a"].TRADE_API];this.asks=i.applyDiffToData(e,this.asks,!0),this.bids=i.applyDiffToData(n,this.bids,!1)},symbolChanged:function(){var t=this.$eventBus.Events[s["a"].TRADE_API];this.$eventBus.$emit(t.UNSUBSCRIBE),this.$eventBus.$emit(t.SUBSCRIBE)}}},y=m,w=(n("98fe"),Object(b["a"])(y,o,l,!1,null,"190146e4",null)),_=w.exports,Y={components:{OrderBook:_}},X=Y,S=(n("1ccb"),Object(b["a"])(X,i,r,!1,null,"7e6488e2",null));e["default"]=S.exports},6728:function(t,e,n){"use strict";n("d831")},"87b8":function(t,e,n){},"98fe":function(t,e,n){"use strict";n("cb80")},cb80:function(t,e,n){},d81d:function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").map,o=n("1dde"),l=o("map");i({target:"Array",proto:!0,forced:!l},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},d831:function(t,e,n){},e973:function(t,e,n){}}]);
//# sourceMappingURL=order-book-page.b2c0a07d.js.map