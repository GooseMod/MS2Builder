parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../moduleWrappers/goosemod/settings.js":[function(require,module,exports) {
module.exports=goosemodScope.settings;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("@goosemod/webpack")),t=o(require("@goosemod/patcher")),n=o(require("@goosemod/settings"));function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function o(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(o,l,u):o[l]=e[l]}return o.default=e,n&&n.set(e,o),o}function i(e,t){return c(e)||s(e,t)||u(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(a){u=!0,o=a}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return i}}function c(e){if(Array.isArray(e))return e}function d(e,t,n,r,o,i,l){try{var u=e[i](l),a=u.value}catch(s){return void n(s)}u.done?t(a):Promise.resolve(a).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function l(e){d(i,r,o,l,u,"next",e)}function u(e){d(i,r,o,l,u,"throw",e)}l(void 0)})}}var g,p="Message Click Actions",y={deleteClick:!0,doubleClickEdit:!0,controlClickReply:!0,keepDiscordBehavior:!0,editOnlyOwnMessages:!1,editClearContent:!1,replyMention:!1},h={Shift:!1,Delete:!1,Control:!1},v=function(e){return function(t){t.key in h&&(h[t.key]=e)}},m=v(!0),k=v(!1),C={goosemodHandlers:{onImport:function(){var n=f(regeneratorRuntime.mark(function n(){var r,o,l,u,a,s,c,d,f,p,v,C;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:v=function(e){var t=e.message;if(h.Delete&&y.deleteClick)l(t.channel_id,t.id);else{if(!h.Control||!y.controlClickReply)return!0;c(a(t.channel_id),t,{shiftKey:h.Shift^!y.replyMention})}},p=function(e){if(y.doubleClickEdit){var t=e.message;y.editOnlyOwnMessages&&t.author.id!==f().id||o(t.channel_id,t.id,y.editClearContent?"":t.content||"")}},r=e.findByProps("startEditMessage"),o=r.startEditMessage,l=r.deleteMessage,u=e.findByProps("getChannel","hasChannel"),a=u.getChannel,s=e.findByProps("replyToMessage"),c=s.replyToMessage,d=e.findByProps("getCurrentUser"),f=d.getCurrentUser,C=e.find(function(e){return e.default&&"function"==typeof e.default&&(e.__powercordOriginal_default||e.default).toString().includes("childrenRepliedMessage")}),g=t.patch(C,"default",function(e){var t=i(e,1)[0],n=t.onClick;t.onClick=function(){v(t.childrenMessageContent.props)&&y.keepDiscordBehavior&&n.apply(this,arguments)},t.onDoubleClick=function(){return p(t.childrenMessageContent.props)}},!0),document.addEventListener("keydown",m),document.addEventListener("keyup",k);case 10:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onLoadingFinished:function(){var e=f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.createItem(p,[{type:"header",text:"Actions"},{type:"toggle",text:"Double-Click Edit",subtext:"Double-Click a message to start editing it.",onToggle:function(e){return y.doubleClickEdit=e},isToggled:function(){return y.doubleClickEdit}},{type:"toggle",text:"Ctrl+Click Reply",subtext:"Hold Control and click a message to reply to it.",onToggle:function(e){return y.controlClickReply=e},isToggled:function(){return y.controlClickReply}},{type:"toggle",text:"Reply Mention",subtext:'Hold the Shift key to invert this behavior. NOTE: This setting is not compatible with the "Disable ping reply" plugin.',onToggle:function(e){return y.replyMention=e},isToggled:function(){return y.replyMention}},{type:"toggle",text:"Click-Delete",subtext:"Hold the Delete key and click a message to delete it.",onToggle:function(e){return y.deleteClick=e},isToggled:function(){return y.deleteClick}},{type:"toggle",text:"Keep Builtin Discord Behavior",subtext:"Hold Alt and click a message to mark it unread as unread.",onToggle:function(e){return y.keepDiscordBehavior=e},isToggled:function(){return y.keepDiscordBehavior}},{type:"toggle",text:"Edit only your own messages",subtext:"Double-Click Edit will not work on messages you are not the author of.",onToggle:function(e){return y.editOnlyOwnMessages=e},isToggled:function(){return y.editOnlyOwnMessages}},{type:"toggle",text:"Clear content when editing",subtext:"Double-Click Edit will clear the content when editing messages.",onToggle:function(e){return y.editClearContent=e},isToggled:function(){return y.editClearContent}}]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.removeItem(p),g(),document.removeEventListener("keydown",m),document.removeEventListener("keyup",k);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[y]},loadSettings:function(e){var t=i(e,1)[0];y=t||y}}};exports.default=C;
},{"@goosemod/webpack":"../../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../../moduleWrappers/goosemod/patcher.js","@goosemod/settings":"../../../moduleWrappers/goosemod/settings.js"}]},{},["index.js"], null);parcelRequire('index.js').default