parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../moduleWrappers/goosemod/reactUtils.js":[function(require,module,exports) {
module.exports=goosemodScope.reactUtils;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@goosemod/webpack")),t=r(require("@goosemod/patcher")),n=require("@goosemod/reactUtils");function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return u(e)||i(e,t)||s(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}function u(e){if(Array.isArray(e))return e}function l(e){return f(e)||d(e)||s(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function d(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function f(e){if(Array.isArray(e))return m(e)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){throw new TypeError('"'+e+'" is read-only')}var y=[],g=new Audio;g.src="https://cdn.discordapp.com/attachments/958047577922740345/958118222341767248/Final_Fantasy_VII_Sound_Effects_-_Save_and_Load.mp3";var b,h=function(e){y.find(function(t){return t[0]===e.channelId&&e.message.content.includes(t[1]+">")})&&g.play()},v=e.default.findByProps("getGuildCount"),S=v.getGuild,_={goosemodHandlers:{onImport:function(){e.default.findByProps("register")._subscriptions.MESSAGE_CREATE.add(h),b=t.default.contextMenu.patch("message",{label:"Special Ping",sub:function(){var e;try{e=(0,n.getNodeInternals)((0,n.getOwnerInstance)(document.getElementById("message"))).return.return.memoizedProps}catch(i){return}var t=e.channel.id,r=e.channel.guild_id,o=e.message.mentionRoles,a=S(r).roles;return console.log("WOW",r,a,o,a[o[0]].name),l(o.map(function(e){return{label:a[e].name,checked:!!y.find(function(n){return n[0]===t&&n[1]===e}),action:function(){var n=y.find(function(n){return n[0]===t&&n[1]===e});n?y.splice(y.indexOf(n),1):y.push([t,e])}}}))}})},onRemove:function(){e.default.findByProps("register")._subscriptions.MESSAGE_CREATE.delete(h),b()},getSettings:function(){return[y]},loadSettings:function(e){o(e,1)[0];p("toPing")}}};exports.default=_;
},{"@goosemod/webpack":"../../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../../moduleWrappers/goosemod/patcher.js","@goosemod/reactUtils":"../../../moduleWrappers/goosemod/reactUtils.js"}]},{},["index.js"], null);parcelRequire('index.js').default