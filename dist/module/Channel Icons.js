parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../goosemodModule.json":[function(require,module,exports) {
module.exports={main:"src/index.js",version:"1.2.0",name:"Channel Icons",authors:["441384103946878987"],description:"Gives some channels unique icons depending on their name.",images:["https://raw.githubusercontent.com/Controlfreak707/GM-Channel-Icons/main/images/image-a.png"],tags:["ui"]};
},{}],"../../../../moduleWrappers/goosemod/toast.js":[function(require,module,exports) {
module.exports=goosemodScope.showToast;
},{}],"../../../../moduleWrappers/goosemod/logger.js":[function(require,module,exports) {
module.exports=goosemodScope.logger;
},{}],"../../../../moduleWrappers/goosemod/settings.js":[function(require,module,exports) {
module.exports=goosemodScope.settings;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../goosemodModule.json"),t=i(require("@goosemod/toast")),n=require("@goosemod/logger"),a=o(require("@goosemod/settings"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return s(e)||h(e,t)||u(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function h(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(c){r=!0,o=c}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}}function s(e){if(Array.isArray(e))return e}function g(e,t,n,a,r,o,i){try{var l=e[o](i),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(a,r)}function p(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){g(o,a,r,i,l,"next",e)}function l(e){g(o,a,r,i,l,"throw",e)}i(void 0)})}}var v,f,C,m,b,y,x={github:!0,offTopic:!0,info:!0,help:!0,starboard:!0,gaming:!0};function L(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x[a];try{switch(x[a]=r,a){case"github":try{v.remove()}catch(o){}r&&((v=document.createElement("style")).textContent='[aria-label="github-updates (text channel)"] > div > svg > path, [aria-label="github-updates (announcement channel)"] > div > svg > path, [aria-label="unread, github-updates (text channel)"] > div > svg > path, [aria-label="unread, github-updates (announcement channel)"] > div > svg > path, [aria-label="github (text channel)"] > div > svg > path, [aria-label="github (announcement channel)"] > div > svg > path, [aria-label="unread, github (text channel)"] > div > svg > path, [aria-label="unread, github (announcement channel)"] > div > svg > path { d: path("M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"); transform: scale(1.5); }',document.head.appendChild(v));break;case"offTopic":try{f.remove()}catch(i){}r&&((f=document.createElement("style")).textContent='[aria-label="offtopic (text channel)"] > div > svg > path, [aria-label="off-topic (text channel)"] > div > svg > path, [aria-label="unread, offtopic (text channel)"] > div > svg > path, [aria-label="unread, off-topic (text channel)"] > div > svg > path { d: path("M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z");transform: scale(1.1); }',document.head.appendChild(f));break;case"info":try{C.remove()}catch(l){}r&&((C=document.createElement("style")).textContent='[aria-label="info (text channel)"] > div > svg > path, [aria-label="unread, info (text channel)"] > div > svg > path, [aria-label="useful (text channel)"] > div > svg > path, [aria-label="unread, useful (text channel)"] > div > svg > path { d: path("M0 0h24v24H0z");d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"); }',document.head.appendChild(C));break;case"help":try{m.remove()}catch(c){}r&&((m=document.createElement("style")).textContent='[aria-label="help (text channel)"] > div > svg > path, [aria-label="unread, help (text channel)"] > div > svg > path, [aria-label="faq (text channel)"] > div > svg > path, [aria-label="unread, faq (text channel)"] > div > svg > path, [aria-label="support (text channel)"] > div > svg > path, [aria-label="unread, support (text channel)"] > div > svg > path { d: path("M0 0h24v24H0z");d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"); }',document.head.appendChild(m));break;case"starboard":try{b.remove()}catch(u){}r&&((b=document.createElement("style")).textContent='[aria-label="starboard (text channel)"] > div > svg > path, [aria-label="unread, starboard (text channel)"] > div > svg > path { d: path("M 21.924 8.61789 C 21.77 8.24489 21.404 8.00089 21 8.00089 H 15.618 L 12.894 2.55389 C 12.555 1.87689 11.444 1.87689 11.105 2.55389 L 8.38199 8.00089 H 2.99999 C 2.59599 8.00089 2.22999 8.24489 2.07599 8.61789 C 1.92199 8.99089 2.00699 9.42289 2.29299 9.70789 L 6.87699 14.2919 L 5.03899 20.7269 C 4.92399 21.1299 5.07199 21.5619 5.40999 21.8089 C 5.74999 22.0569 6.20699 22.0659 6.55399 21.8329 L 12 18.2029 L 17.445 21.8329 C 17.613 21.9449 17.806 22.0009 18 22.0009 C 18.207 22.0009 18.414 21.9369 18.59 21.8089 C 18.928 21.5619 19.076 21.1299 18.961 20.7269 L 17.123 14.2919 L 21.707 9.70789 C 21.993 9.42289 22.078 8.99089 21.924 8.61789 Z"); }',document.head.appendChild(b));break;case"gaming":try{y.remove()}catch(d){}r&&((y=document.createElement("style")).textContent='[aria-label="gaming (text channel)"] > div > svg > path, [aria-label="unread, gaming (text channel)"] > div > svg > path, [aria-label="games (text channel)"] > div > svg > path, [aria-label="unread, games (text channel)"] > div > svg > path, [aria-label="video-games (text channel)"] > div > svg > path, [aria-label="unread, video-games (text channel)"] > div > svg > path { d: path("M 5.79336 5 L 18.2066 5 C 19.7806 5 21.0869 6.21634 21.199 7.78626 L 21.8575 17.0051 C 21.9308 18.031 21.1586 18.922 20.1327 18.9953 C 20.0885 18.9984 20.0443 19 20 19 C 18.8246 19 17.8 18.2 17.5149 17.0597 L 17 15 L 7 15 L 6.48507 17.0597 C 6.19999 18.2 5.17541 19 4 19 C 2.97151 19 2.13776 18.1662 2.13776 17.1378 C 2.13776 17.0935 2.13934 17.0492 2.14249 17.0051 L 2.80098 7.78626 C 2.91312 6.21634 4.21944 5 5.79336 5 Z M 14.5 10 C 15.3284 10 16 9.32843 16 8.5 C 16 7.67157 15.3284 7 14.5 7 C 13.6716 7 13 7.67157 13 8.5 C 13 9.32843 13.6716 10 14.5 10 Z M 18.5 13 C 19.3284 13 20 12.3284 20 11.5 C 20 10.6716 19.3284 10 18.5 10 C 17.6716 10 17 10.6716 17 11.5 C 17 12.3284 17.6716 13 18.5 13 Z M 6 9 L 4 9 L 4 11 L 6 11 L 6 13 L 8 13 L 8 11 L 10 11 L 10 9 L 8 9 L 8 7 L 6 7 L 6 9 Z"); }',document.head.appendChild(y));break;default:(0,t.default)('Setting "'.concat(a,'" not found.'),{type:"error"})}}catch(h){(0,n.debug)(e.name,h),(0,t.default)('Failed to set setting "'.concat(a,'" to "').concat(r,'".'),{type:"error"})}}function M(e){for(var t in x)L(t,e)}var T={goosemodHandlers:{onImport:function(){var t=p(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:M(),a.createItem(e.name,["(v".concat(e.version,")"),{type:"header",text:"Affected Channels"},{type:"toggle",text:"GitHub Channels",onToggle:function(e){return L("github",e)},isToggled:function(){return x.github}},{type:"toggle",text:"Off-Topic Channels",onToggle:function(e){return L("offTopic",e)},isToggled:function(){return x.offTopic}},{type:"toggle",text:"Info Channels",onToggle:function(e){return L("info",e)},isToggled:function(){return x.info}},{type:"toggle",text:"Help & FAQ Channels",onToggle:function(e){return L("help",e)},isToggled:function(){return x.help}},{type:"toggle",text:"Starboard Channels",onToggle:function(e){return L("starboard",e)},isToggled:function(){return x.starboard}},{type:"toggle",text:"Gaming Channels",onToggle:function(e){return L("gaming",e)},isToggled:function(){return x.gaming}}]);case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){return[x]},loadSettings:function(e){var t=l(e,1)[0];x=t,M()},onRemove:function(){var t=p(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.removeItem(e.name),M(!1);case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()}};exports.default=T;
},{"../goosemodModule.json":"../goosemodModule.json","@goosemod/toast":"../../../../moduleWrappers/goosemod/toast.js","@goosemod/logger":"../../../../moduleWrappers/goosemod/logger.js","@goosemod/settings":"../../../../moduleWrappers/goosemod/settings.js"}]},{},["index.js"], null);parcelRequire('index.js').default