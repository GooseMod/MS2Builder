parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../../moduleWrappers/goosemod/settings.js":[function(require,module,exports) {
module.exports=goosemodScope.settings;
},{}],"goosemodModule.json":[function(require,module,exports) {
module.exports={main:"index.js",name:"Old Quote",description:"Adds back the old quoting feature.",tags:["context menu","quick-actions"],authors:["150745989836308480"],version:"1.0.1"};
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,t,o=u(require("@goosemod/webpack")),n=require("@goosemod/patcher"),r=require("@goosemod/settings"),s=require("./goosemodModule.json");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var s=n?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(o,r,s):o[r]=e[r]}return o.default=e,t&&t.set(e,o),o}var a={goosemodHandlers:{onImport:function(){var r=o.findByProps("ComponentDispatch").ComponentDispatch,s=o.findByProps("ComponentActions").ComponentActions,i=o.findByProps("Messages").Messages;t=n.contextMenu.patch("message",{label:i.QUOTE,action:function(t,o){for(var n=o.message.content.split("\n"),i=0;i<n.length;i++)n[i]="> "+n[i];var u="<@".concat(o.message.author.id,"> "),a=n.join("\n")+"\n";r.dispatchToLastSubscribed(s.INSERT_TEXT,{content:a+(e?u:"")})}})},onLoadingFinished:function(){(0,r.createItem)("Old Quote",[s.version,{type:"header",text:"Toggle the following features as per your liking"},{type:"toggle",text:"Mention the author",subtext:"Adds mention of the author of the message you're quoting to",onToggle:function(t){return e=t},isToggled:function(){return e}}])},onRemove:function(){t(),(0,r.removeItem)("Old Quote")}}};exports.default=a;
},{"@goosemod/webpack":"../../../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../../../moduleWrappers/goosemod/patcher.js","@goosemod/settings":"../../../../moduleWrappers/goosemod/settings.js","./goosemodModule.json":"goosemodModule.json"}]},{},["index.js"], null);parcelRequire('index.js').default