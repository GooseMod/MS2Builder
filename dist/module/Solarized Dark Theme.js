parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function r(r,n,e,o,t,a,c){try{var u=r[a](c),s=u.value}catch(l){return void e(l)}u.done?n(s):Promise.resolve(s).then(o,t)}function n(n){return function(){var e=this,o=arguments;return new Promise(function(t,a){var c=n.apply(e,o);function u(n){r(c,t,a,u,s,"next",n)}function s(n){r(c,t,a,u,s,"throw",n)}u(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e="1.0.1",o={goosemodHandlers:{onImport:function(){var r=n(regeneratorRuntime.mark(function r(){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:(n=window.document.styleSheets[0]).insertRule("html > body.theme-solarizeddark {\n      --background-primary: #002b36;\n      --background-secondary: #073642;\n      --background-secondary-alt: #00232C;\n      --background-tertiary: #1E4853;\n\n      --channeltextarea-background: #1E4853;\n      --background-message-hover: rgba(255,255,255,0.025);\n\n      --background-accent: #657b83;\n      --background-floating: #1E4853;\n\n      --scrollbar-thin-thumb: #b58900;\n      --scrollbar-auto-thumb: #b58900;\n      --scrollbar-auto-scrollbar-color-thumb: #b58900;\n\n      --scrollbar-auto-track: #00232C;\n      --scrollbar-auto-scrollbar-color-track: #00232C;\n\n      --brand-color: #b58900;\n      --brand-color-hover: #947000;\n    }",n.cssRules.length),document.body.classList.add("theme-solarizeddark");case 3:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}(),onRemove:function(){var r=n(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:document.body.classList.remove("theme-solarizeddark");case 1:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}(),logRegionColor:"darkred"}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default