parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=t.apply(n,r);function u(t){e(i,o,a,u,c,"next",t)}function c(t){e(i,o,a,u,c,"throw",t)}u(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n,r="1.0.1",o='.buttons-3JBrkn > button, .channel-2QD9_O[href="/store"], .item-PXvHYJ[aria-controls="Discord Nitro-tab"], .wrapper-3nSjSv, .giftAction-yhDLaW, .upsellFooter-3coAfO, .buttons-3JBrkn > .buttonContainer-28fw2U > [aria-label="Open sticker picker"], .navItem-3Wp_oJ[aria-controls="sticker-picker-tab-panel"] {\n  display: none;\n}',a={goosemodHandlers:{onImport:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode(o));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.remove();case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=a;
},{}]},{},["index.js"], null);parcelRequire('index.js').default