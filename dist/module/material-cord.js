parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,n,r,t,_,a,o){try{var c=e[a](o),i=c.value}catch(d){return void r(d)}c.done?n(i):Promise.resolve(i).then(t,_)}function n(n){return function(){var r=this,t=arguments;return new Promise(function(_,a){var o=n.apply(r,t);function c(n){e(o,_,a,c,i,"next",n)}function i(n){e(o,_,a,c,i,"throw",n)}c(void 0)})}}var r;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={goosemodHandlers:{onImport:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=document.createElement("style"),document.head.appendChild(r),r.appendChild(document.createTextNode("/* source */\n@import url(\"https://raw.githack.com/sneexy-boi/material-cord/main/src/source.css\");\n/*_            _       _                         _ \n_ __ ___   __ _| |_ ___ _ __(_) __ _| |       ___ ___  _ __ __| |\n| '_ ` _ \\ / _` | __/ _ \\ '__| |/ _` | |_____ / __/ _ \\| '__/ _` |\n| | | | | | (_| | ||  __/ |  | | (_| | |_____| (_| (_) | | | (_| |\n|_| |_| |_|\\__,_|\\__\\___|_|  |_|\\__,_|_|      \\___\\___/|_|  \\__,_|\n*/\n:root {\n    --header-primary: #fff;\n    --header-secondary: #b9bbbe;\n    --text-normal: #dcddde;\n    --text-muted: #72767d;\n    --text-link: #3D89C9;\n    --channels-default: #8e9297;\n    --interactive-normal: #b9bbbe;\n    --interactive-hover: #dcddde;\n    --interactive-active: #fff;\n    --interactive-muted: #4f545c;\n    --background-primary: #1A1C1E;\n    --background-secondary: #151718;\n    --background-tertiary: #0F1011;\n    --background-accent: #3D89C9;\n    --background-floating: #18191c;\n    --background-modifier-hover: #141416;\n    --background-modifier-active: #1f1f22;\n    --background-modifier-selected: #303032;\n    --background-modifier-accent: #4f545c;\n    --guild-header-text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n    --channeltextarea-background: #1A1C1E;\n    --activity-card-background: #1A1C1E;\n}\n"));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.remove();case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=t;
},{}]},{},["index.js"], null);parcelRequire('index.js').default