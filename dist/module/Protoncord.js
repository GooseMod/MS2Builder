parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function _(_,n,e,r,t,o,i){try{var a=_[o](i),u=a.value}catch(c){return void e(c)}a.done?n(u):Promise.resolve(u).then(r,t)}function n(n){return function(){var e=this,r=arguments;return new Promise(function(t,o){var i=n.apply(e,r);function a(n){_(i,t,o,a,u,"next",n)}function u(n){_(i,t,o,a,u,"throw",n)}a(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var _=n(regeneratorRuntime.mark(function _(){return regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode("/**\n * @name Protoncord\n * @description A sleek, modern UI inspired by the layout of ProtonVPN. Glasscord compatible.\n * @author Niko#9000\n * @version 1.0.1\n * @source https://github.com/Giangamerino/protoncord\n * @invite 6aJAvdr\n */\n\n/*\n________                _____                _________               _________\n___  __ ______________ __  /_______ _______ __  ____/______ ______________  /\n__  /_/ /__  ___/_  __ _  __/_  __ __  __ _  /     _  __ __  ___/_  __  / \n_  ____/ _  /    / /_/ // /_  / /_/ /_  / / // /___   / /_/ /_  /    / /_/ /  \n/_/      /_/     ____/ __/  ____/ /_/ /_/ ____/   ____/ /_/     __,_/   \n\n=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=\n--| Imports\n=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=\n*/\n\n@import url('https://giangamerino.github.io/protoncord/index.css');\n\n/*\n=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=\n--| Support\n=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=\n\nhttps://www.discord.com/invite/6aJAvdr\n\n*/\n"));case 3:case"end":return _.stop()}},_)}));return function(){return _.apply(this,arguments)}}(),onRemove:function(){var _=n(regeneratorRuntime.mark(function _(){return regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:e.remove();case 1:case"end":return _.stop()}},_)}));return function(){return _.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default