parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,t=r(require("@goosemod/webpack")),n=require("@goosemod/patcher");function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=r?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=e[s]}return n.default=e,t&&t.set(e,n),n}var s={goosemodHandlers:{onImport:function(){var o=t.findByProps("ComponentDispatch").ComponentDispatch,r=t.findByProps("ComponentActions").ComponentActions,s=t.findByProps("Messages").Messages;e=n.contextMenu.patch("message",{label:s.QUOTE,action:function(e,t){for(var n=t.message.content.split("\n"),s=0;s<n.length;s++)n[s]="> "+n[s];var a=n.join("\n")+"\n";o.dispatchToLastSubscribed(r.INSERT_TEXT,{content:a})}})},onRemove:function(){e()}}};exports.default=s;
},{"@goosemod/webpack":"../../../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../../../moduleWrappers/goosemod/patcher.js"}]},{},["index.js"], null);parcelRequire('index.js').default