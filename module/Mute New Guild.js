parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/powercord/global/commands.js":[function(require,module,exports) {
"use strict";function e(e,n){return a(e)||o(e,n)||t(e,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return t}}function a(e){if(Array.isArray(e))return e}function i(e,r,t,n,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void t(c)}s.done?r(u):Promise.resolve(u).then(n,o)}function s(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var a=e.apply(r,t);function s(e){i(a,n,o,s,u,"next",e)}function u(e){i(a,n,o,s,u,"throw",e)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregisterCommand=exports.registerCommand=void 0;var u=goosemodScope.webpackModules.findByProps("sendMessage","receiveMessage").sendMessage,c=goosemodScope.webpackModules.findByProps("getChannelId").getChannelId,d=function(r){var t=r.command,n=(r.alias,r.description),o=(r.usage,r.executor);goosemodScope.patcher.commands.add(t,n,function(){var r=s(regeneratorRuntime.mark(function r(t){var n,a,i,s;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n="",t.args&&(a=e(t.args,1),i=a[0].text,n=i),r.next=4,o(n.split(" "));case 4:if((s=r.sent).send){r.next=8;break}return goosemodScope.patcher.internalMessage(s.result),r.abrupt("return");case 8:u(c(),{content:s.result,tts:!1,invalidEmojis:[],validNonShortcutEmojis:[]});case 9:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}(),[{type:3,required:!1,name:"args",description:"Arguments for PC command"}])};exports.registerCommand=d;var m=function(e){goosemodScope.patcher.commands.remove(e)};exports.unregisterCommand=m;
},{}],"../../../moduleWrappers/powercord/global/notices.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sendToast=void 0;var e=function(e,o){o.header;var t=o.content;o.type,o.buttons;goosemodScope.showToast(t)};exports.sendToast=e;
},{}],"../../../moduleWrappers/powercord/util/settings.js":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeStore=exports.settingStores=void 0;var r={};exports.settingStores=r;var n=function(t){r[t]=new o};exports.makeStore=n;var o=function r(){var n=this;t(this,r),e(this,"getSetting",function(t,e){var r;return null!==(r=n.store[t])&&void 0!==r?r:e}),e(this,"updateSetting",function(t,e){return void 0===e?n.toggleSetting(t):(n.store[t]=e,n.store[t])}),e(this,"toggleSetting",function(t){return n.store[t]=!n.store[t],n.store[t]}),e(this,"deleteSetting",function(t){delete n.store[t]}),e(this,"getKeys",function(){return Object.keys(n.store)}),this.store={}};
},{}],"../../../moduleWrappers/powercord/global/settings.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregisterSettings=exports.registerSettings=void 0;var e=r(require("../util/settings"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(t,r){var n=r.label,i=r.render,c=r.category,s=goosemodScope.webpackModules.common.React,u=goosemodScope.webpackModules.findByDisplayName("SettingsView"),a=goosemodScope.webpackModules.findByDisplayName("FormTitle"),p=goosemodScope.webpackModules.findByDisplayName("FormSection");e.settingStores[c]||e.makeStore(c),goosemodScope.patcher.inject(t,u.prototype,"getPredicateSections",function(t,r){var u=r.find(function(e){return"logout"===e.section});if(!u)return r;var f="function"==typeof n?n():n;return r.splice(r.indexOf(u)-1,0,{section:f,label:f,predicate:function(){},element:function(){return s.createElement(p,{},s.createElement(a,{tag:"h2"},f),s.createElement(i,o({},e.settingStores[c])))}}),r})};exports.registerSettings=c;var s=function(e){goosemodScope.patcher.uninject(e)};exports.unregisterSettings=s;
},{"../util/settings":"../../../moduleWrappers/powercord/util/settings.js"}],"../../../moduleWrappers/powercord/global/index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("./commands.js")),t=o(require("./notices.js")),r=o(require("./settings.js"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}var i={api:{commands:e,notices:t,settings:r}};exports.default=i;
},{"./commands.js":"../../../moduleWrappers/powercord/global/commands.js","./notices.js":"../../../moduleWrappers/powercord/global/notices.js","./settings.js":"../../../moduleWrappers/powercord/global/settings.js"}],"../../../moduleWrappers/powercord/entities.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Plugin=void 0;var e=n(require("./util/settings"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t();if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var s=function(){function t(){r(this,t),this.stylesheets=[]}return i(t,[{key:"loadStylesheet",value:function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t),this.stylesheets.push(t)}},{key:"delayedConstructor",value:function(){this.delayedConstructed||(this.delayedConstructed=!0,e.makeStore(this.entityID))}},{key:"manifest",get:function(){return{name:this.name,description:this.description,version:this.version,author:this.authors.toString(),license:"Unknown"}}},{key:"entityID",get:function(){return this.name}},{key:"settings",get:function(){var t=e.settingStores[this.entityID];return{get:t.getSetting,set:t.setSetting,delete:t.deleteSetting,getKeys:t.getKeys,connectStore:function(){}}}},{key:"goosemodHandlers",get:function(){var e=this;return{onImport:function(){e.delayedConstructor(),e.startPlugin.bind(e)()},onRemove:function(){e.stylesheets.forEach(function(e){return e.remove()}),e.pluginWillUnload.bind(e)()}}}}]),t}();exports.Plugin=s;
},{"./util/settings":"../../../moduleWrappers/powercord/util/settings.js"}],"../../../moduleWrappers/powercord/components/settings/divider.js":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=a();return function(){var o,r=l(e);if(t){var n=l(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return i(this,o)}}function i(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?f(t):o}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=goosemodScope.webpackModules.common.React,s=goosemodScope.webpackModules.findByDisplayName("FormDivider"),y=goosemodScope.webpackModules.findByProps("dividerDefault","titleDefault"),b=function(e){n(u,p.PureComponent);var o=c(u);function u(){return t(this,u),o.apply(this,arguments)}return r(u,[{key:"render",value:function(){return p.createElement(s,{className:y.dividerDefault})}}]),u}();exports.default=b;
},{}],"../../../moduleWrappers/powercord/components/settings/formItem.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./divider"));function t(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=a();return function(){var o,r=l(e);if(t){var n=l(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return s(this,o)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=goosemodScope.webpackModules.common.React,d=goosemodScope.webpackModules.findByDisplayName("FormItem"),m=goosemodScope.webpackModules.findByDisplayName("FormText"),b=goosemodScope.webpackModules.findByDisplayName("Flex"),h=goosemodScope.webpackModules.findByProps("marginTop20","marginBottom20"),g=goosemodScope.webpackModules.findByProps("formText","description"),v=function(t){c(n,y.PureComponent);var o=p(n);function n(){return r(this,n),o.apply(this,arguments)}return i(n,[{key:"render",value:function(){var t=this;return y.createElement(d,{title:this.props.title,required:this.props.required,className:[b.Direction.VERTICAL,b.Justify.START,b.Align.STRETCH,b.Wrap.NO_WRAP,h.marginBottom20].join(" "),onClick:function(){t.props.onClick()}},this.props.children,this.props.note&&y.createElement(m,{className:g.description+(this.props.noteHasMargin?" "+h.marginTop8:"")},this.props.note),y.createElement(e.default))}}]),n}();exports.default=v;
},{"./divider":"../../../moduleWrappers/powercord/components/settings/divider.js"}],"../../../moduleWrappers/powercord/components/settings/textInput.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./formItem"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=b();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=goosemodScope.webpackModules.common.React,h=goosemodScope.webpackModules.findByDisplayName("TextInput"),m=function(t){p(n,d.PureComponent);var r=l(n);function n(){return u(this,n),r.apply(this,arguments)}return f(n,[{key:"render",value:function(){var t=this.props.children;return delete this.props.children,d.createElement(e.default,{title:t,note:this.props.note,required:this.props.required,noteHasMargin:!0},d.createElement(h,o({},this.props)))}}]),n}();exports.default=m;
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/sliderInput.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./formItem"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=b();return function(){var r,o=m(e);if(t){var n=m(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return l(this,r)}}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=goosemodScope.webpackModules.common.React,O=goosemodScope.webpackModules.findByDisplayName("Slider"),h=goosemodScope.webpackModules.findByProps("marginTop20","marginBottom20"),g=function(t){p(o,d.PureComponent);var r=a(o);function o(){return i(this,o),r.apply(this,arguments)}return f(o,[{key:"render",value:function(){var t=this.props.children;return delete this.props.children,d.createElement(e.default,{title:t,note:this.props.note,required:this.props.required},d.createElement(O,n(n({},this.props),{},{className:h.marginTop20+(this.props.className?" "+this.props.className:"")})))}}]),o}();exports.default=g;
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/buttonItem.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./divider"));function t(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=a();return function(){var o,r=f(e);if(t){var n=f(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return p(this,o)}}function p(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=goosemodScope.webpackModules.common.React,y=goosemodScope.webpackModules.findByProps("Sizes","Colors","Looks","DropdownSizes"),m=goosemodScope.webpackModules.findByDisplayName("FormItem"),b=goosemodScope.webpackModules.findByDisplayName("FormText"),h=goosemodScope.webpackModules.findByDisplayName("Flex"),w=goosemodScope.webpackModules.findByProps("marginTop20","marginBottom20"),S=goosemodScope.webpackModules.findByProps("title","dividerDefault"),g=goosemodScope.webpackModules.findByProps("formText","placeholder"),v=goosemodScope.webpackModules.findByDisplayName("Tooltip"),E=function(t){c(n,d.PureComponent);var o=l(n);function n(){return r(this,n),o.apply(this,arguments)}return i(n,[{key:"render",value:function(){var t=this,o=this.props.children;return delete this.props.children,d.createElement(m,{className:[h.Direction.VERTICAL,h.Justify.START,h.Align.STRETCH,h.Wrap.NO_WRAP,w.marginBottom20].join(" ")},d.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},d.createElement("div",{},d.createElement("div",{className:S.labelRow,style:{marginBottom:"4px"}},d.createElement("label",{class:S.title},o)),d.createElement(b,{className:g.description},this.props.note)),d.createElement(v,{text:this.props.tooltipText,position:this.props.tooltipPosition,shouldShow:""!==this.props.tooltipText},function(){return d.createElement(y,{color:t.props.success?y.Colors.GREEN:t.props.color||y.Colors.BRAND,disabled:t.props.disabled,onClick:function(){return t.props.onClick()}},t.props.button)})),d.createElement(e.default))}}]),n}();exports.default=E;
},{"./divider":"../../../moduleWrappers/powercord/components/settings/divider.js"}],"../../../moduleWrappers/powercord/components/settings/category.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./formItem"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){return u(e)||c(e)||i(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function c(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=h();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}function m(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=goosemodScope.webpackModules.common.React,w=goosemodScope.webpackModules.findByProps("title","dividerDefault"),S=goosemodScope.webpackModules.findByProps("formText","placeholder"),O=goosemodScope.webpackModules.findByDisplayName("FormText"),j=function(t){s(o,g.PureComponent);var r=d(o);function o(){return l(this,o),r.apply(this,arguments)}return p(o,[{key:"render",value:function(){var t=this,r=this.props.opened?this.props.children:[];return g.createElement.apply(g,[e.default,{title:g.createElement("div",{},g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",style:{transform:this.props.opened?"rotate(90deg)":"",marginRight:"10px"}},g.createElement("path",{fill:"var(--header-primary)",d:"M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"})),g.createElement("label",{class:w.title,style:{textTransform:"none",display:"inline",verticalAlign:"top"}},this.props.name,g.createElement(O,{className:S.description,style:{marginLeft:"34px"}},this.props.description))),onClick:function(){t.props.onChange(!t.props.opened)}}].concat(n(r)))}}]),o}();exports.default=j;
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/switchItem.js":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach(function(t){n(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=s();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?l(t):r}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var b=goosemodScope.webpackModules.common.React,O=goosemodScope.webpackModules.findByDisplayName("SwitchItem"),h=function(e){i(n,b.Component);var t=a(n);function n(e){var r;o(this,n);var c=e.onChange;return e.onChange=function(e){c(e),r.props.value=e,r.forceUpdate()},r=t.call(this,e)}return u(n,[{key:"render",value:function(){return b.createElement(O,r({},this.props))}}]),n}();exports.default=h;
},{}],"../../../moduleWrappers/powercord/components/settings/index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"FormItem",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"TextInput",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"SliderInput",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"Divider",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"ButtonItem",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"Category",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(exports,"SwitchItem",{enumerable:!0,get:function(){return o.default}});var e=f(require("./formItem")),t=f(require("./textInput")),r=f(require("./sliderInput")),u=f(require("./divider")),n=f(require("./buttonItem")),i=f(require("./category")),o=f(require("./switchItem"));function f(e){return e&&e.__esModule?e:{default:e}}
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js","./textInput":"../../../moduleWrappers/powercord/components/settings/textInput.js","./sliderInput":"../../../moduleWrappers/powercord/components/settings/sliderInput.js","./divider":"../../../moduleWrappers/powercord/components/settings/divider.js","./buttonItem":"../../../moduleWrappers/powercord/components/settings/buttonItem.js","./category":"../../../moduleWrappers/powercord/components/settings/category.js","./switchItem":"../../../moduleWrappers/powercord/components/settings/switchItem.js"}],"../../../moduleWrappers/powercord/webpack.js":[function(require,module,exports) {
function e(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function r(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?e(Object(n),!0).forEach(function(e){o(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function o(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var t=function(e){if(Array.isArray(e)){var r=e;e=function(e){return r.every(function(r){return e[r]||e.__proto__&&e.__proto__[r]})}}return e};module.exports=r({getModule:function(e,r,o){e=t(e);var n=goosemodScope.webpackModules.find(e);return r?new Promise(function(e){return e(n)}):n},getAllModules:function(e){return e=t(e),goosemodScope.webpackModules.findAll(e)},getModuleByDisplayName:function(e){return goosemodScope.webpackModules.find(function(r){return r.displayName&&r.displayName.toLowerCase()===e.toLowerCase()})}},goosemodScope.webpackModules.common);
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("_powercord/global"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=p();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}require.cache["powercord/entities"]=require("powercord/entities"),require.cache["powercord/components/settings"]=require("powercord/components/settings"),require.cache["powercord/webpack"]=require("powercord/webpack");var y=require("powercord/entities"),d=y.Plugin,b=require("powercord/webpack"),h=b.FluxDispatcher,v=b.getModule,w=new(function(e){u(r,d);var t=f(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"startPlugin",value:function(){h.subscribe("INVITE_ACCEPT_SUCCESS",this.handleInvite)}},{key:"handleInvite",value:function(e){var t=e.invite.guild.id;v(["updateGuildNotificationSettings"]).then(function(e){(0,e.updateGuildNotificationSettings)(t,{muted:!0})})}},{key:"pluginWillUnload",value:function(){h.unsubscribe("INVITE_ACCEPT_SUCCESS",this.handleInvite)}}]),r}());exports.default=w;
},{"_powercord/global":"../../../moduleWrappers/powercord/global/index.js","powercord/entities":"../../../moduleWrappers/powercord/entities.js","powercord/components/settings":"../../../moduleWrappers/powercord/components/settings/index.js","powercord/webpack":"../../../moduleWrappers/powercord/webpack.js"}]},{},["index.js"], null);parcelRequire('index.js').default