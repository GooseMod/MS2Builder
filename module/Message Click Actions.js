parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../moduleWrappers/goosemod/settings.js":[function(require,module,exports) {
module.exports=goosemodScope.settings;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("@goosemod/webpack")),t=o(require("@goosemod/patcher")),n=o(require("@goosemod/settings"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}function i(e,t){return s(e)||c(e,t)||l(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}}function s(e){if(Array.isArray(e))return e}function d(e,t,n,r,o,i,u){try{var l=e[i](u),a=l.value}catch(c){return void n(c)}l.done?t(a):Promise.resolve(a).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function u(e){d(i,r,o,u,l,"next",e)}function l(e){d(i,r,o,u,l,"throw",e)}u(void 0)})}}var g,p="Message Click Actions",y={deleteClick:!0,doubleClickEdit:!0,controlClickReply:!0,keepDiscordBehavior:!0,editOnlyOwnMessages:!1,editClearContent:!1},v={Delete:!1,Control:!1},h=function(e){return function(t){t.key in v&&(v[t.key]=e)}},m=h(!0),C=h(!1),k={goosemodHandlers:{onImport:function(){var n=f(regeneratorRuntime.mark(function n(){var r,o,u,l,a,c,s,d,f,p,h,k;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:h=function(e){var t=e.message;if(v.Delete&&y.deleteClick)u(t.channel_id,t.id);else{if(!v.Control||!y.controlClickReply)return!0;s(a(t.channel_id),t)}},p=function(e){if(y.doubleClickEdit){var t=e.message;y.editOnlyOwnMessages&&t.author.id!==f().id||o(t.channel_id,t.id,y.editClearContent?"":t.content||"")}},r=e.findByProps("startEditMessage"),o=r.startEditMessage,u=r.deleteMessage,l=e.findByProps("getChannel"),a=l.getChannel,c=e.findByProps("replyToMessage"),s=c.replyToMessage,d=e.findByProps("getCurrentUser"),f=d.getCurrentUser,k=e.find(function(e){return e.default&&"function"==typeof e.default&&(e.__powercordOriginal_default||e.default).toString().includes("childrenRepliedMessage")}),g=t.patch(k,"default",function(e){var t=i(e,1)[0],n=t.onClick;t.onClick=function(){h(t.childrenMessageContent.props)&&y.keepDiscordBehavior&&n.apply(this,arguments)},t.onDoubleClick=function(){return p(t.childrenMessageContent.props)}},!0),document.addEventListener("keydown",m),document.addEventListener("keyup",C);case 10:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onLoadingFinished:function(){var e=f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.createItem(p,[{type:"header",text:"Actions"},{type:"toggle",text:"Double-Click to edit",onToggle:function(e){return y.doubleClickEdit=e},isToggled:function(){return y.doubleClickEdit}},{type:"toggle",text:"Control + Click to reply",onToggle:function(e){return y.controlClickReply=e},isToggled:function(){return y.controlClickReply}},{type:"toggle",text:"Delete + Click to delete",onToggle:function(e){return y.deleteClick=e},isToggled:function(){return y.deleteClick}},{type:"toggle",text:"Keep Default Discord Behavior (Alt+Click to mark unread)",onToggle:function(e){return y.keepDiscordBehavior=e},isToggled:function(){return y.keepDiscordBehavior}},{type:"toggle",text:"Edit only your own messages",onToggle:function(e){return y.editOnlyOwnMessages=e},isToggled:function(){return y.editOnlyOwnMessages}},{type:"toggle",text:"Clear content when editing",onToggle:function(e){return y.editClearContent=e},isToggled:function(){return y.editClearContent}}]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.removeItem(p),g(),document.removeEventListener("keydown",m),document.removeEventListener("keyup",C);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[y]},loadSettings:function(e){var t=i(e,1)[0];y=t}}};exports.default=k;
},{"@goosemod/webpack":"../../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../../moduleWrappers/goosemod/patcher.js","@goosemod/settings":"../../../moduleWrappers/goosemod/settings.js"}]},{},["index.js"], null);parcelRequire('index.js').default