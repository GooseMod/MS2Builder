parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../moduleWrappers/goosemod/settings.js":[function(require,module,exports) {
module.exports=goosemodScope.settings;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("@goosemod/webpack")),t=o(require("@goosemod/patcher")),r=require("@goosemod/settings");function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}function o(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}function i(e,t){return c(e)||u(e,t)||p(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}function c(e){if(Array.isArray(e))return e}function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=p(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function f(e){return m(e)||d(e)||p(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}function d(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function m(e){if(Array.isArray(e))return y(e)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,o)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){v(i,n,o,a,u,"next",e)}function u(e){v(i,n,o,a,u,"throw",e)}a(void 0)})}}function b(e){throw new TypeError('"'+e+'" is read-only')}var g={emojisize:"64"},j=e.findByProps("getDisambiguatedEmojiContext","search"),w=e.findByProps("parse","parsePreprocessor","unparse"),S=e.findByProps("useEmojiSelectHandler"),E={},P={goosemodHandlers:{onImport:function(){var e=h(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:E.emojisModule=t.patch(j,"search",function(e,t){var r;return(r=t.unlocked).push.apply(r,f(t.locked)),t.locked=[],t}),E.messageEmojiParserModule=t.patch(w,"parse",function(e,t){if(0!==t.invalidEmojis.length){var r,n=l(t.invalidEmojis);try{for(n.s();!(r=n.n()).done;){var o=r.value;t.content=t.content.replace("<".concat(o.animated?"a":"",":").concat(o.originalName||o.name,":").concat(o.id,">"),"".concat(o.url.split("?")[0],"?size=").concat(g.emojisize,"&width=16"))}}catch(i){n.e(i)}finally{n.f()}t.invalidEmojis=[]}return t}),E.emojiPickerModule=t.patch(S,"useEmojiSelectHandler",function(e,t){var r=e[0],n=r.onSelectEmoji,o=r.closePopout;return function(e,t){var r=e.emoji;null!=r&&r.available&&(n(r,t.isFinalSelection),t.isFinalSelection&&o())}}),(0,r.createItem)("Emote as URL",["",{type:"text-input",text:"Emoji Size",initialValue:function(){return g.emojisize},oninput:function(e){g.emojisize=e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[g]},loadSettings:function(e){i(e,1)[0];b("settings")},onRemove:function(){var e=h(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:Object.values(E).forEach(function(e){return e()}),(0,r.removeItem)("Emote as URL");case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=P;
},{"@goosemod/webpack":"../../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../../moduleWrappers/goosemod/patcher.js","@goosemod/settings":"../../../moduleWrappers/goosemod/settings.js"}]},{},["index.js"], null);parcelRequire('index.js').default