parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/powercord/entities.js":[function(require,module,exports) {
"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return u(e)||c(e,t)||a(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(c){r=!0,i=c}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}}function u(e){if(Array.isArray(e))return e}function l(e,t,n,o,r,i,a){try{var s=e[i](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(o,r)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var i=e.apply(t,n);function a(e){l(i,o,r,a,s,"next",e)}function s(e){l(i,o,r,a,s,"throw",e)}a(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Plugin=exports.powercord=void 0;var f=goosemodScope.webpackModules.findByProps("sendMessage","receiveMessage").sendMessage,p=goosemod.webpackModules.findByProps("getChannelId").getChannelId,g={api:{commands:{registerCommand:function(e){var t=e.command,n=(e.alias,e.description),o=(e.usage,e.executor);goosemodScope.patcher.commands.add(t,n,function(){var e=d(regeneratorRuntime.mark(function e(t){var n,i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r(t.args,1),i=n[0].text,e.next=3,o(i.split(" "));case 3:if(a=e.sent,console.log(a),a.send){e.next=8;break}return goosemodScope.patcher.internalMessage(a.result),e.abrupt("return");case 8:f(p(),{content:a.result,tts:!1,invalidEmojis:[],validNonShortcutEmojis:[]});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[{type:3,required:!1,name:"args",description:"Arguments for PC command"}])},unregisterCommand:function(e){goosemodScope.patcher.commands.remove(e)}},notices:{sendToast:function(e,t){t.header;var n=t.content;t.type,t.buttons;goosemodScope.showToast(n)}},settings:{registerSettings:function(e,t){var n=t.label,o=t.render,r=t.category,i=goosemodScope.webpackModules.common.React,a=goosemodScope.webpackModules.findByDisplayName("SettingsView"),s=goosemodScope.webpackModules.findByDisplayName("FormTitle"),c=goosemodScope.webpackModules.findByDisplayName("FormSection");goosemodScope.patcher.inject(e,a.prototype,"getPredicateSections",function(e,t){if(!t.find(function(e){return"changelog"===e.section}))return t;var a=t.filter(function(e){return"DIVIDER"===e.section}),u="function"==typeof n?n():n;return t.splice(t.indexOf(a[a.length-2])-2,0,{section:u,label:u,predicate:function(){},element:function(){return i.createElement(c,{},i.createElement(s,{tag:"h2"},u),o({getSetting:m[r].getSetting,updateSetting:m[r].updateSetting}))}}),t})},unregisterSettings:function(e){goosemodScope.patcher.uninject(e)}}}};exports.powercord=g;var m={},y=function e(){var t=this;n(this,e),o(this,"getSetting",function(e,n){var o;return console.log("getsetting",t),null!==(o=t.store[e])&&void 0!==o?o:n}),o(this,"updateSetting",function(e,n){console.log("updatesetting",t),t.store[e]=n}),console.log("cons",this),this.store={}},h=function(){function e(){n(this,e)}return t(e,[{key:"loadStylesheet",value:function(e){return"https://raw.githubusercontent.com/".concat(this.github.repo,"/main/").concat(e)}},{key:"delayedConstructor",value:function(){this.delayedConstructed||(this.delayedConstructed=!0,m[this.entityID]=new y)}},{key:"entityID",get:function(){return this.name}},{key:"settings",get:function(){return m[this.entityID]}},{key:"goosemodHandlers",get:function(){var e=this;return{onImport:function(){e.delayedConstructor(),e.startPlugin.bind(e)()},onRemove:this.pluginWillUnload.bind(this)}}}]),e}();exports.Plugin=h;
},{}],"../../../moduleWrappers/powercord/injector.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../moduleWrappers/powercord/webpack.js":[function(require,module,exports) {
function e(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function r(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?e(Object(n),!0).forEach(function(e){o(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function o(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var t=function(e){if(Array.isArray(e)){var r=e;e=function(e){return r.every(function(r){return e[r]||e.__proto__&&e.__proto__[r]})}}return e};module.exports=r({getModule:function(e,r,o){e=t(e);var n=goosemodScope.webpackModules.find(e);return r?new Promise(function(e){return e(n)}):n},getAllModules:function(e){return e=t(e),goosemodScope.webpackModules.findAll(e)},getModuleByDisplayName:function(e){return goosemodScope.webpackModules.findByDisplayName(e)}},goosemodScope.webpackModules.common);
},{}],"../../../moduleWrappers/powercord/components/settings.js":[function(require,module,exports) {
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function r(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=l();return function(){var r,o=y(e);if(t){var n=y(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return a(this,r)}}function a(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?f(t):r}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=goosemodScope.webpackModules.common.React,d=goosemodScope.webpackModules.findByDisplayName("TextInput"),b=goosemodScope.webpackModules.findByDisplayName("FormItem"),h=goosemodScope.webpackModules.findByDisplayName("FormText"),g=goosemodScope.webpackModules.findByDisplayName("Flex"),O=goosemodScope.webpackModules.findByProps("marginTop20","marginBottom20"),v=goosemodScope.webpackModules.findByProps("formText","description"),w=goosemodScope.webpackModules.findByDisplayName("FormDivider"),P=goosemodScope.webpackModules.findByProps("dividerDefault","titleDefault"),j=function(e){u(r,m.PureComponent);var t=s(r);function r(){return n(this,r),t.apply(this,arguments)}return c(r,[{key:"render",value:function(){return m.createElement(w,{className:P.dividerDefault})}}]),r}(),S=function(e){u(r,m.PureComponent);var t=s(r);function r(){return n(this,r),t.apply(this,arguments)}return c(r,[{key:"render",value:function(){return m.createElement(b,{title:this.props.title,required:this.props.required,className:[g.Direction.VERTICAL,g.Justify.START,g.Align.STRETCH,g.Wrap.NO_WRAP,O.marginBottom20].join(" ")},this.props.children,this.props.note&&m.createElement(h,{className:v.description+(this.props.noteHasMargin?" "+O.marginTop8:"")},this.props.note),m.createElement(j))}}]),r}(),D=function(e){u(o,m.PureComponent);var t=s(o);function o(){return n(this,o),t.apply(this,arguments)}return c(o,[{key:"render",value:function(){var e=this.props.children;return delete this.props.children,m.createElement(S,{title:e,note:this.props.note,required:this.props.required,noteHasMargin:!0},m.createElement(d,r({},this.props)))}}]),o}();module.exports={FormItem:S,TextInput:D};
},{}],"Settings.jsx":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=a();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?f(e):n}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=require("powercord/webpack"),s=p.React,y=require("powercord/components/settings"),b=y.TextInput;module.exports=function(t){o(u,s.Component);var n=c(u);function u(){return e(this,u),n.apply(this,arguments)}return r(u,[{key:"render",value:function(){var t=this.props,e=t.getSetting,n=t.updateSetting;return s.createElement(b,{note:"Maximum adjustable volume on the volume slider",defaultValue:e("maxAdjustableVolume",this.props.defaultMaxVolume),onChange:function(t){return isNaN(t)?null:n("maxAdjustableVolume",Number(t))}},"Max Volume")}}]),u}();
},{"powercord/webpack":"../../../moduleWrappers/powercord/webpack.js","powercord/components/settings":"../../../moduleWrappers/powercord/components/settings.js"}],"index.js":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach(function(t){n(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=p();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,r){return!r||"object"!==e(r)&&"function"!=typeof r?f(t):r}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var b,g=require("powercord/entities"),m=g.Plugin,O=g.powercord,h=require("powercord/injector"),d=h.inject,v=h.uninject,j=require("powercord/webpack"),w=j.getModuleByDisplayName,P=j.i18n.Messages,S=j.React,_=require("./Settings"),x=400,R=new(function(e){c(n,m);var t=s(n);function n(){return o(this,n),t.apply(this,arguments)}return u(n,[{key:"startPlugin",value:function(){b=this.settings,this.adjustVolumeSlider(),O.api.settings.registerSettings("custom-volume-range-settings",{category:this.entityID,label:"Custom Volume Range",render:function(e){return S.createElement(_,r(r({},e),{},{defaultMaxVolume:x}))}})}},{key:"adjustVolumeSlider",value:function(){var e=w("Slider",!1);d("custom-volume-range",e.prototype,"render",function(e){var t=b.get("maxAdjustableVolume",x);return this&&this.props["aria-label"]===P.FORM_LABEL_INPUT_VOLUME&&(this.props.maxValue=t,this.state.value=this.state.initialValueProp,this.state.max=t,this.state.range=this.state.max),e},!0)}},{key:"pluginWillUnload",value:function(){v("custom-volume-range"),O.api.settigs.unregisterSettings("custom-volume-range-settings")}}]),n}());exports.default=R;
},{"powercord/entities":"../../../moduleWrappers/powercord/entities.js","powercord/injector":"../../../moduleWrappers/powercord/injector.js","powercord/webpack":"../../../moduleWrappers/powercord/webpack.js","./Settings":"Settings.jsx"}]},{},["index.js"], null);parcelRequire('index.js').default