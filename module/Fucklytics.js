parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,r){return i(e)||o(e,r)||n(e,r)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}function i(e){if(Array.isArray(e))return e}function c(e,t,n,r,o,i,c){try{var s=e[i](c),a=s.value}catch(u){return void n(u)}s.done?t(a):Promise.resolve(a).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function s(e){c(i,r,o,s,a,"next",e)}function a(e){c(i,r,o,s,a,"throw",e)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a="2.1.0",u={compat:"2.1.0",science:!0,sentry:!0,crash:!0},f={analytics:void 0,crash:void 0},p=function(e){e?d():l()},l=function(){goosemodScope.webpackModules.findByProps("getSuperPropertiesBase64").track=f.analytics},d=function(){var e=goosemodScope.webpackModules.findByProps("getSuperPropertiesBase64");f.analytics=e.track,e.track=function(){}},g=function(e){e?m():y()},y=function(){goosemodScope.webpackModules.findByProps("submitLiveCrashReport").submitLiveCrashReport=f.crash},m=function(){var e=goosemodScope.webpackModules.findByProps("submitLiveCrashReport");f.crash=e.submitLiveCrashReport,e.submitLiveCrashReport=function(){}},h=function(e){e?b():v()},v=function(){window.__SENTRY__.hub.getClient().getOptions().enabled=!0},b=function(){window.__SENTRY__.hub.getClient().getOptions().enabled=!1},S={goosemodHandlers:{onImport:function(){var e=s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:p(u.science),h(u.sentry),g(u.crash);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onLoadingFinished:function(){var e=s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:goosemodScope.settings.createItem("Fucklytics",["(v".concat(a,")"),{type:"header",text:"What to block"},{type:"toggle",text:"Science (Discord API)",subtext:"Discord's own analytics, most used.",onToggle:function(e){u.science=e,p(e)},isToggled:function(){return u.science}},{type:"toggle",text:"Crash Reports",subtext:"Automatically sends Discord a crash report on crash (without your consent).",onToggle:function(e){u.crash=e,g(e)},isToggled:function(){return u.crash}},{type:"toggle",text:"Sentry",subtext:"Used to track console / JS errors.",onToggle:function(e){u.sentry=e,h(e)},isToggled:function(){return u.sentry}}]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=s(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{l(),v(),y()}catch(n){}t=goosemodScope.settings.items.find(function(e){return"Fucklytics"===e[1]}),goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(t),1);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[u]},loadSettings:function(t){var n=e(t,1)[0];n.compat===a&&(p((u=n).science),h(u.sentry),g(u.crash))}}};exports.default=S;
},{}]},{},["index.js"], null);parcelRequire('index.js').default