parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,o){return t(e)||r(e,o)||l(e,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(t=(i=u.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(c){o=!0,a=c}finally{try{t||null==u.return||u.return()}finally{if(o)throw a}}return r}}function t(e){if(Array.isArray(e))return e}function o(e){return u(e)||i(e)||l(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return d(e)}function c(e,n,r,t,o,a,i){try{var u=e[a](i),c=u.value}catch(f){return void r(f)}u.done?n(c):Promise.resolve(c).then(t,o)}function f(e){return function(){var n=this,r=arguments;return new Promise(function(t,o){var a=e.apply(n,r);function i(e){c(a,t,o,i,u,"next",e)}function u(e){c(a,t,o,i,u,"throw",e)}i(void 0)})}}function s(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=l(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function l(e,n){if(e){if("string"==typeof e)return d(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p="0.1.0",y=function(e){return e._orderedActionHandlers.MESSAGE_CREATE.find(function(e){return!0===e.crwWanted||e.actionHandler.toString().includes("receivePushNotification")})},m=0,v=["cunt","wanker","fuck","bitch","shit","crap","bollocks","arse","ass","piss","frick"],h=function e(){var n,r=goosemodScope.webpackModules.findByProps("register");try{n=y(r)}catch(t){return setTimeout(e,3e3)}n.crwWanted=!0,goosemodScope.patcher.inject("censor-rude-words",n,"actionHandler",function(e){var n,r=s(v);try{for(r.s();!(n=r.n()).done;){var t=n.value;t.enabled&&(e[0].message.content=e[0].message.content.replace(new RegExp("".concat(t.word),"g"),t.censored))}}catch(o){r.e(o)}finally{r.f()}return e},!0)},g={goosemodHandlers:{onImport:function(){var e=f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:v=v.map(function(e){return{word:e,enabled:!0,censored:o(e).map(function(n,r){return r>=e.length/4&&r<e.length-e.length/4?"\\*":n}).join("")}}),goosemodScope.settings.createItem("Censor Rude Words",["(v".concat(p,")"),{type:"header",text:"Words"}].concat(o(v.map(function(e){return{type:"toggle",text:e.word[0].toUpperCase()+e.word.substring(1),onToggle:function(n){e.enabled=n},isToggled:function(){return e.enabled}}}))));case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onLoadingFinished:function(){var e=f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h();case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:goosemodScope.patcher.uninject("censor-rude-words");case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[v]},loadSettings:function(n){var r,t=s(e(n,1)[0]);try{var o=function(){var e=r.value,n=v.find(function(n){return n.word===e.word});if(!n)return"continue";n.enabled=e.enable};for(t.s();!(r=t.n()).done;)o()}catch(a){t.e(a)}finally{t.f()}}}};exports.default=g;
},{}]},{},["index.js"], null);parcelRequire('index.js').default