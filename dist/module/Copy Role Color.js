parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/powercord/global/commands.js":[function(require,module,exports) {
"use strict";function e(e,n){return a(e)||o(e,n)||t(e,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return t}}function a(e){if(Array.isArray(e))return e}function i(e,r,t,n,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void t(c)}s.done?r(u):Promise.resolve(u).then(n,o)}function s(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var a=e.apply(r,t);function s(e){i(a,n,o,s,u,"next",e)}function u(e){i(a,n,o,s,u,"throw",e)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregisterCommand=exports.registerCommand=void 0;var u=goosemodScope.webpackModules.findByProps("sendMessage","receiveMessage").sendMessage,c=goosemodScope.webpackModules.findByProps("getChannelId").getChannelId,d=function(r){var t=r.command,n=(r.alias,r.description),o=(r.usage,r.executor);goosemodScope.patcher.commands.add(t,n,function(){var r=s(regeneratorRuntime.mark(function r(t){var n,a,i;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=e(t.args,1),a=n[0].text,r.next=3,o(a.split(" "));case 3:if((i=r.sent).send){r.next=7;break}return goosemodScope.patcher.internalMessage(i.result),r.abrupt("return");case 7:u(c(),{content:i.result,tts:!1,invalidEmojis:[],validNonShortcutEmojis:[]});case 8:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}(),[{type:3,required:!1,name:"args",description:"Arguments for PC command"}])};exports.registerCommand=d;var m=function(e){goosemodScope.patcher.commands.remove(e)};exports.unregisterCommand=m;
},{}],"../../../moduleWrappers/powercord/global/notices.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sendToast=void 0;var e=function(e,o){o.header;var t=o.content;o.type,o.buttons;goosemodScope.showToast(t)};exports.sendToast=e;
},{}],"../../../moduleWrappers/powercord/util/settings.js":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeStore=exports.settingStores=void 0;var n={};exports.settingStores=n;var r=function(t){n[t]=new o};exports.makeStore=r;var o=function n(){var r=this;t(this,n),e(this,"getSetting",function(t,e){var n;return null!==(n=r.store[t])&&void 0!==n?n:e}),e(this,"updateSetting",function(t,e){if(void 0===e)return r.toggleSetting(t);r.store[t]=e}),e(this,"toggleSetting",function(t){r.store[t]=!r.store[t]}),e(this,"deleteSetting",function(t){delete r.store[t]}),e(this,"getKeys",function(){return Object.keys(r.store)}),this.store={}};
},{}],"../../../moduleWrappers/powercord/global/settings.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregisterSettings=exports.registerSettings=void 0;var e=r(require("../util/settings"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(t,r){var n=r.label,i=r.render,c=r.category,u=goosemodScope.webpackModules.common.React,p=goosemodScope.webpackModules.findByDisplayName("SettingsView"),s=goosemodScope.webpackModules.findByDisplayName("FormTitle"),a=goosemodScope.webpackModules.findByDisplayName("FormSection");goosemodScope.patcher.inject(t,p.prototype,"getPredicateSections",function(t,r){var p=r.find(function(e){return"logout"===e.section});if(!p)return r;var f="function"==typeof n?n():n;return r.splice(r.indexOf(p)-1,0,{section:f,label:f,predicate:function(){},element:function(){return u.createElement(a,{},u.createElement(s,{tag:"h2"},f),i(o({},e.settingStores[c])))}}),r})};exports.registerSettings=c;var u=function(e){goosemodScope.patcher.uninject(e)};exports.unregisterSettings=u;
},{"../util/settings":"../../../moduleWrappers/powercord/util/settings.js"}],"../../../moduleWrappers/powercord/global/index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("./commands.js")),t=o(require("./notices.js")),r=o(require("./settings.js"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}var i={api:{commands:e,notices:t,settings:r}};exports.default=i;
},{"./commands.js":"../../../moduleWrappers/powercord/global/commands.js","./notices.js":"../../../moduleWrappers/powercord/global/notices.js","./settings.js":"../../../moduleWrappers/powercord/global/settings.js"}],"../../../moduleWrappers/powercord/entities.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Plugin=void 0;var e=n(require("./util/settings"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t();if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var u=function(){function t(){r(this,t),this.stylesheets=[]}return i(t,[{key:"loadStylesheet",value:function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t),this.stylesheets.push(t)}},{key:"delayedConstructor",value:function(){this.delayedConstructed||(this.delayedConstructed=!0,e.makeStore(this.entityID))}},{key:"entityID",get:function(){return this.name}},{key:"settings",get:function(){var t=e.settingStores[this.entityID];return{get:t.getSetting,set:t.setSetting,delete:t.deleteSetting,getKeys:t.getKeys,connectStore:function(){}}}},{key:"goosemodHandlers",get:function(){var e=this;return{onImport:function(){e.delayedConstructor(),e.startPlugin.bind(e)()},onRemove:function(){e.stylesheets.forEach(function(e){return e.remove()}),e.pluginWillUnload.bind(e)()}}}}]),t}();exports.Plugin=u;
},{"./util/settings":"../../../moduleWrappers/powercord/util/settings.js"}],"../../../moduleWrappers/powercord/webpack.js":[function(require,module,exports) {
function e(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function r(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?e(Object(n),!0).forEach(function(e){o(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function o(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var t=function(e){if(Array.isArray(e)){var r=e;e=function(e){return r.every(function(r){return e[r]||e.__proto__&&e.__proto__[r]})}}return e};module.exports=r({getModule:function(e,r,o){e=t(e);var n=goosemodScope.webpackModules.find(e);return r?new Promise(function(e){return e(n)}):n},getAllModules:function(e){return e=t(e),goosemodScope.webpackModules.findAll(e)},getModuleByDisplayName:function(e){return goosemodScope.webpackModules.findByDisplayName(e)}},goosemodScope.webpackModules.common);
},{}],"../../../moduleWrappers/powercord/injector.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"manifest.json":[function(require,module,exports) {
module.exports={name:"Copy Role Color",version:"1.1.0",description:"Adds the Copy Color option to the role context menu.",author:"Antonio32A#1337 (166630166825664512)",license:"MIT",shorthand:"copy-role-color"};
},{}],"../../../moduleWrappers/electron/clipboard.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.readText=exports.writeText=void 0;var e=function(e){return DiscordNative.clipboard.copy(e)};exports.writeText=e;var r=function(){return DiscordNative.clipboard.read()};exports.readText=r;
},{}],"../../../moduleWrappers/electron/index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clipboard=void 0;var e=t(require("./clipboard"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function t(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=n?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}exports.clipboard=e;
},{"./clipboard":"../../../moduleWrappers/electron/clipboard.js"}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("_powercord/global"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n,r,o,u,c){try{var i=e[u](c),a=i.value}catch(l){return void n(l)}i.done?t(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(o,u){var c=e.apply(t,n);function i(e){r(c,o,u,i,a,"next",e)}function a(e){r(c,o,u,i,a,"throw",e)}i(void 0)})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=d();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=require("powercord/entities"),b=v.Plugin,h=require("powercord/webpack"),m=h.React,g=h.getModule,w=require("powercord/injector"),x=w.inject,_=w.uninject,j=require("./manifest.json"),M=j.shorthand,O=require("electron"),P=O.clipboard,R=new(function(e){a(n,b);var t=f(n);function n(){return u(this,n),t.apply(this,arguments)}return i(n,[{key:"startPlugin",value:function(){var e=o(regeneratorRuntime.mark(function e(){var t,n,r,o,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(["MenuItem"]);case 2:return t=e.sent,e.next=5,g(["getLastSelectedGuildId"]);case 5:return n=e.sent,r=n.getGuildId,e.next=9,g(["getGuild"]);case 9:return o=e.sent,u=o.getGuild,e.next=13,g(function(e){return e.default&&"DeveloperContextMenu"===e.default.displayName});case 13:c=e.sent,x("".concat(M,"-DeveloperContextMenu-default"),c,"default",function(e,n){var o=u(r()).roles[e[0].id].color.toString(16).padStart(6,"0"),c=S(o);return n.props.children=[n.props.children,m.createElement(t.MenuGroup,null,m.createElement(t.MenuItem,{id:M+"-hex",label:"Copy Color (HEX)",action:function(){return P.writeText("#"+o)}})),m.createElement(t.MenuGroup,null,m.createElement(t.MenuItem,{id:M+"-rgb",label:"Copy Color (RGB)",action:function(){return P.writeText(c)}}))],n}),c.default.displayName="DeveloperContextMenu";case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"pluginWillUnload",value:function(){_("".concat(M,"-DeveloperContextMenu-default"))}}]),n}());exports.default=R;var S=function(e){var t=e.match(/.{1,2}/g);return"rgb(".concat(parseInt(t[0],16),", ").concat(parseInt(t[1],16),", ").concat(parseInt(t[2],16),")")};
},{"_powercord/global":"../../../moduleWrappers/powercord/global/index.js","powercord/entities":"../../../moduleWrappers/powercord/entities.js","powercord/webpack":"../../../moduleWrappers/powercord/webpack.js","powercord/injector":"../../../moduleWrappers/powercord/injector.js","./manifest.json":"manifest.json","electron":"../../../moduleWrappers/electron/index.js"}]},{},["index.js"], null);parcelRequire('index.js').default