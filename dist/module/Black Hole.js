parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function $($,e,n,t,r,o,s){try{var _=$[o](s),a=_.value}catch(i){return void n(i)}_.done?e(a):Promise.resolve(a).then(t,r)}function e(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var s=e.apply(n,t);function _(e){$(s,r,o,_,a,"next",e)}function a(e){$(s,r,o,_,a,"throw",e)}_(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={goosemodHandlers:{onImport:function(){var $=e(regeneratorRuntime.mark(function $(){return regeneratorRuntime.wrap(function($){for(;;)switch($.prev=$.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('/**\n * @name         Black Hole\n * @description  Jump into space with this theme. It\'s just a bedazzled base Discord theme\n * @author       MonsterDev\n * @version      1.0\n * @donate       https://goo.gl/9S8VGb\n * @source       https://github.com/monstrousdev/themes/theme-files/Black-Hole.theme.css\n * @invite       TeRQEPb\n * @authorId     402272736665272320\n */\n\n@import "https://monstrousdev.github.io/themes/black-hole/style.css";\n\n/*\n                                                                                                     \n✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧\n      ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧\n✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧\n      ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧\n✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧\n /$$$$$$$  /$$                     /$$             /$$   /$$           /$$          \n| $$__  $$| $$                    | $$            | $$  | $$          | $$           \n| $$  \\ $$| $$  /$$$$$$   /$$$$$$$| $$   /$$      | $$  | $$  /$$$$$$ | $$  /$$$$$$ \n| $$$$$$$ | $$ |____  $$ /$$_____/| $$  /$$/      | $$$$$$$$ /$$__  $$| $$ /$$__  $$\n| $$__  $$| $$  /$$$$$$$| $$      | $$$$$$/       | $$__  $$| $$  \\ $$| $$| $$$$$$$$\n| $$  \\ $$| $$ /$$__  $$| $$      | $$_  $$       | $$  | $$| $$  | $$| $$| $$_____/\n| $$$$$$$/| $$|  $$$$$$$|  $$$$$$$| $$ \\  $$      | $$  | $$|  $$$$$$/| $$|  $$$$$$$\n|_______/ |__/ \\_______/ \\_______/|__/  \\__/      |__/  |__/ \\______/ |__/ \\_______/\n✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧       ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧\n      ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧\n✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧\n      ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧\n✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧                      \n✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     (c) Lil Monster#3557      ✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧     ✧･ﾟ: *✧･ﾟ:*\n\nRegistered: Black Box Theme\n\n*/')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Black Hole",[""]);case 4:case"end":return $.stop()}},$)}));return function(){return $.apply(this,arguments)}}(),onRemove:function(){var $=e(regeneratorRuntime.mark(function $(){return regeneratorRuntime.wrap(function($){for(;;)switch($.prev=$.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Black Hole")}catch(e){}case 2:case"end":return $.stop()}},$)}));return function(){return $.apply(this,arguments)}}(),getSettings:function(){var $=e(regeneratorRuntime.mark(function $(){return regeneratorRuntime.wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.abrupt("return",[]);case 1:case"end":return $.stop()}},$)}));return function(){return $.apply(this,arguments)}}(),loadSettings:function(){var $=e(regeneratorRuntime.mark(function $(e){return regeneratorRuntime.wrap(function($){for(;;)switch($.prev=$.next){case 0:e.forEach(function($){document.body.style.setProperty($[0],$[1])});case 1:case"end":return $.stop()}},$)}));return function(e){return $.apply(this,arguments)}}()}};exports.default=t;
},{}]},{},["index.js"], null);parcelRequire('index.js').default