parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(f){return void t(f)}u.done?n(c):Promise.resolve(c).then(r,o)}function n(n){return function(){var t=this,r=arguments;return new Promise(function(o,a){var i=n.apply(t,r);function u(n){e(i,o,a,u,c,"next",n)}function c(n){e(i,o,a,u,c,"throw",n)}u(void 0)})}}function t(e){return a(e)||o(e)||u(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function a(e){if(Array.isArray(e))return c(e)}function i(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=u(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw a}}}}function u(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var f,l="1.0.4";function s(){f=setInterval(function(){var e,n=i(document.getElementsByClassName("messageContent-2qWWxC"));try{for(n.s();!(e=n.n()).done;){var r=e.value;r.textContent=t(r.textContent).filter(function(e){return" "!=e}).join(" ")}}catch(o){n.e(o)}finally{n.f()}},5e3)}var d={goosemodHandlers:{onImport:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:goosemodScope.logger.debug("expandCord","e x p a n d i n g.."),s();case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:clearInterval(f);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),logRegionColor:"blue"}};exports.default=d;
},{}]},{},["index.js"], null);parcelRequire('index.js').default