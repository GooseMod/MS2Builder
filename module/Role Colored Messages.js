parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function r(r,o){return n(r)||t(r,o)||u(r,o)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return t}}function n(r){if(Array.isArray(r))return r}function o(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=u(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return i=r.done,r},e:function(r){c=!0,a=r},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw a}}}}function a(r){return l(r)||c(r)||u(r)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(r,e){if(r){if("string"==typeof r)return f(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(r,e):void 0}}function c(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function l(r){if(Array.isArray(r))return f(r)}function f(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function s(r,e,t,n,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void t(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function y(r){return function(){var e=this,t=arguments;return new Promise(function(n,o){var a=r.apply(e,t);function i(r){s(a,n,o,i,u,"next",r)}function u(r){s(a,n,o,i,u,"throw",r)}i(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var m,p="1.2.2";function v(r,e,t){r/=255,e/=255,t/=255;var n,o,a=Math.max(r,e,t),i=Math.min(r,e,t),u=(a+i)/2;if(a===i)n=o=0;else{var c=a-i;switch(o=u>.5?c/(2-a-i):c/(a+i),a){case r:n=(e-t)/c+(e<t?6:0);break;case e:n=(t-r)/c+2;break;case t:n=(r-e)/c+4}n/=6}return[360*n,100*o,100*u]}var d={goosemodHandlers:{onImport:function(){var r=y(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}(),onLoadingFinished:function(){var e=y(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:m=setInterval(function(){var e,t="",n=o(a(document.getElementsByClassName("contents-2mQqc9")));try{for(n.s();!(e=n.n()).done;){var i=e.value,u=i.querySelector(".username-1A8OIy"),c=u&&(u.style.color||"var(--header-primary)");if(c){var l=c.replace("rgb(","").replace(")","").split(", ").map(function(r){return parseFloat(r)}),f=r(v(l[0],l[1],l[2]),3),s=f[0];f[1],f[2];c="hsl(".concat(s,", ",85,"%, ",75,"%)")}i.querySelector(".markup-2BOw-j").style.color=c||t,c&&(t=c)}}catch(y){n.e(y)}finally{n.f()}},100);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var r=y(regeneratorRuntime.mark(function r(){var e,t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:clearInterval(m),e=a(document.getElementsByClassName("contents-2mQqc9")),t=o(e);try{for(t.s();!(n=t.n()).done;)n.value.querySelector(".markup-2BOw-j").style.color=""}catch(i){t.e(i)}finally{t.f()}case 4:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}(),logRegionColor:"green"}};exports.default=d;
},{}]},{},["index.js"], null);parcelRequire('index.js').default