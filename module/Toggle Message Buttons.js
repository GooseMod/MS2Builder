parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,r){return a(e)||o(e,r)||n(e,r)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var u,s=e[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}}function a(e){if(Array.isArray(e))return e}function u(e,t,n,r,o,a,u){try{var s=e[a](u),c=s.value}catch(i){return void n(i)}s.done?t(c):Promise.resolve(c).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function s(e){u(a,r,o,s,c,"next",e)}function c(e){u(a,r,o,s,c,"throw",e)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var c,i="1.1.0",l={buttonsToggled:!0},g="body.gm-toggle-messages-buttons .buttons-3JBrkn {\n  display: none;\n}",d=function(){var e=s(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,goosemod.patcher.contextMenu.remove("toggle-message-buttons");case 3:goosemod.patcher.contextMenu.add("textarea-context",{id:"toggle-message-buttons",label:"".concat(t?"Disable":"Enable"," Buttons"),action:function(){l.buttonsToggled=!l.buttonsToggled,d(l.buttonsToggled),document.body.classList[t?"add":"remove"]("gm-toggle-messages-buttons")}}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),goosemodScope.showToast("An error has ocurred!",{type:"error"}),goosemodScope.logger.debug(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),m={goosemodHandlers:{onImport:function(){var e=s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(c=document.createElement("style")).appendChild(document.createTextNode(g)),document.head.appendChild(c),d(l.buttonsToggled);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:goosemodScope.patcher.contextMenu.remove("toggle-message-buttons"),document.body.classList.remove("gm-toggle-messages-buttons"),c.remove();case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[l]},loadSettings:function(t){var n=e(t,1)[0];d((l=n).buttonsToggled),document.body.classList[l.buttonsToggled?"remove":"add"]("gm-toggle-messages-buttons")}}};exports.default=m;
},{}]},{},["index.js"], null);parcelRequire('index.js').default