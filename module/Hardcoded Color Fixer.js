parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,u=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw u}}}}function t(e){return a(e)||o(e)||n(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function a(e){if(Array.isArray(e))return u(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r,n,o,a,u){try{var i=e[a](u),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,o)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function u(e){i(a,n,o,u,c,"next",e)}function c(e){i(a,n,o,u,c,"throw",e)}u(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(e){return e.split(";").map(function(e){return e.trim()}).filter(function(e){return e.startsWith("--")}).map(function(e){return e.split(":")})},l={goosemodHandlers:{onImport:function(){var r=c(regeneratorRuntime.mark(function r(){var n,o,a,u,i,c,l,f,p,d,m,v,b,h,y;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:n=document.createElement("canvas").getContext("2d"),o=function(e){return n.fillStyle=e,n.fillStyle},a=function(e){return e.replace(/rgb\(([0-9]+), ([0-9]+), ([0-9]+)\)/g,o)},u=t(window.document.styleSheets).filter(function(e){return e.href})[0],i=s(t(u.cssRules).filter(function(e){return".theme-dark"===e.selectorText})[1].cssText),c=s(t(u.cssRules).filter(function(e){return".theme-light"===e.selectorText})[1].cssText),l=i.concat(c).filter(function(e){return!e[0].includes("scrollbar")&&!e[0].includes("logo")}).map(function(e){return e[1]=o(e[1]),e}),u.insertRule("body {\n      --brand-color: var(--brand-experiment);\n      --brand-color-hover: var(--brand-experiment);\n    }",u.cssRules.length),f=e(u.cssRules),r.prev=9,f.s();case 11:if((p=f.n()).done){r.next=39;break}if(".theme-light"!==(d=p.value).selectorText&&".theme-dark"!==d.selectorText&&"body"!==d.selectorText){r.next=15;break}return r.abrupt("continue",37);case 15:m=a(d.cssText),v=!1,b=e(l),r.prev=18,b.s();case 20:if((h=b.n()).done){r.next=28;break}if(y=h.value,!m.includes(y[1])){r.next=26;break}return m=m.replace(y[1],"var(".concat(y[0],")")),v=!0,r.abrupt("break",28);case 26:r.next=20;break;case 28:r.next=33;break;case 30:r.prev=30,r.t0=r.catch(18),b.e(r.t0);case 33:return r.prev=33,b.f(),r.finish(33);case 36:v&&u.insertRule("".concat(m),u.cssRules.length);case 37:r.next=11;break;case 39:r.next=44;break;case 41:r.prev=41,r.t1=r.catch(9),f.e(r.t1);case 44:return r.prev=44,f.f(),r.finish(44);case 47:case"end":return r.stop()}},r,null,[[9,41,44,47],[18,30,33,36]])}));return function(){return r.apply(this,arguments)}}(),onRemove:function(){var e=c(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=l;
},{}]},{},["index.js"], null);parcelRequire('index.js').default