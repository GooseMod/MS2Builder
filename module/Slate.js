parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,n,t,r,o,i,s){try{var c=e[i](s),a=c.value}catch(u){return void t(u)}c.done?n(a):Promise.resolve(a).then(r,o)}function n(n){return function(){var t=this,r=arguments;return new Promise(function(o,i){var s=n.apply(t,r);function c(n){e(s,o,i,c,a,"next",n)}function a(n){e(s,o,i,c,a,"throw",n)}c(void 0)})}}var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode('/**\n * @name Slate\n * @author Gibbu#1211 & Tropical#8908\n * @version 1.1\n * @invite TeRQEPb\n * @description An optimized, consistent, and functional theme for Discord based on GitHub\'s design language.\n * @source https://github.com/DiscordStyles/Slate/\n * @website https://discordstyles.github.io/slate-theme/\n*/\n\n/*        _____                    _____            _____                _____                    _____\n         /\\    \\                  /\\    \\          /\\    \\              /\\    \\                  /\\    \\\n        /::\\    \\                /::\\____\\        /::\\    \\            /::\\    \\                /::\\    \\\n       /::::\\    \\              /:::/    /       /::::\\    \\           \\:::\\    \\              /::::\\    \\\n      /::::::\\    \\            /:::/    /       /::::::\\    \\           \\:::\\    \\            /::::::\\    \\\n     /:::/\\:::\\    \\          /:::/    /       /:::/\\:::\\    \\           \\:::\\    \\          /:::/\\:::\\    \\\n    /:::/__\\:::\\    \\        /:::/    /       /:::/__\\:::\\    \\           \\:::\\    \\        /:::/__\\:::\\    \\\n    \\:::\\   \\:::\\    \\      /:::/    /       /::::\\   \\:::\\    \\          /::::\\    \\      /::::\\   \\:::\\    \\\n  ___\\:::\\   \\:::\\    \\    /:::/    /       /::::::\\   \\:::\\    \\        /::::::\\    \\    /::::::\\   \\:::\\    \\\n /\\   \\:::\\   \\:::\\    \\  /:::/    /       /:::/\\:::\\   \\:::\\    \\      /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\    \\\n/::\\   \\:::\\   \\:::\\____\\/:::/____/       /:::/  \\:::\\   \\:::\\____\\    /:::/  \\:::\\____\\/:::/__\\:::\\   \\:::\\____\\\n\\:::\\   \\:::\\   \\::/    /\\:::\\    \\       \\::/    \\:::\\  /:::/    /   /:::/    \\::/    /\\:::\\   \\:::\\   \\::/    /\n \\:::\\   \\:::\\   \\/____/  \\:::\\    \\       \\/____/ \\:::\\/:::/    /   /:::/    / \\/____/  \\:::\\   \\:::\\   \\/____/\n  \\:::\\   \\:::\\    \\       \\:::\\    \\               \\::::::/    /   /:::/    /            \\:::\\   \\:::\\    \\\n   \\:::\\   \\:::\\____\\       \\:::\\    \\               \\::::/    /   /:::/    /              \\:::\\   \\:::\\____\\\n    \\:::\\  /:::/    /        \\:::\\    \\              /:::/    /    \\::/    /                \\:::\\   \\::/    /\n     \\:::\\/:::/    /          \\:::\\    \\            /:::/    /      \\/____/                  \\:::\\   \\/____/\n      \\::::::/    /            \\:::\\    \\          /:::/    /                                 \\:::\\    \\\n       \\::::/    /              \\:::\\____\\        /:::/    /                                   \\:::\\____\\\n        \\::/    /                \\::/    /        \\::/    /                                     \\::/    /\n         \\/____/                  \\/____/          \\/____/                                       \\/____/\n\n====================================================================================\n Please view the full documentation at https://github.com/DiscordStyles/Slate/wiki\n====================================================================================\n*/\n\n/*\n====================================================================================\n                                Import Source Code\n====================================================================================\n*/\n\n@import url("https://discordstyles.github.io/AdjustableServerWidth/base.css");\n@import url("https://discordstyles.github.io/Slate/base.css");\n\n/*\n====================================================================================\n                                  Basic Variables\n====================================================================================\n*/\n\n/*A full list of variables and their uses can be found in the documentation above.*/\n\n:root {\n  /*Primary Colors*/\n  --accent: 3, 102, 214;\n  --link-colour: 48, 144, 255;\n\n  /*Server List*/\n  --server-icon-size: 35px;\n  --server-icon-spacing: 8px;\n  --server-container-padding: 10px;\n}\n\n/*\n====================================================================================\n                Please place any Theme-specific Custom CSS Below here\n====================================================================================\n*/\n\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Slate",["",{type:"text-and-color",text:"Accent",oninput:function(e){document.body.style.setProperty("--accent",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--accent")||"3, 102, 214";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Link Colour",oninput:function(e){document.body.style.setProperty("--link-colour",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--link-colour")||"48, 144, 255";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Server Icon Size",oninput:function(e){document.body.style.setProperty("--server-icon-size",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--server-icon-size")||"35px";return console.log(e),e}},{type:"text-input",text:"Server Icon Spacing",oninput:function(e){document.body.style.setProperty("--server-icon-spacing",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--server-icon-spacing")||"8px";return console.log(e),e}},{type:"text-input",text:"Server Container Padding",oninput:function(e){document.body.style.setProperty("--server-container-padding",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--server-container-padding")||"10px";return console.log(e),e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.remove();try{goosemodScope.settings.removeItem("Slate")}catch(n){}case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[["--accent",document.body.style.getPropertyValue("--accent")],["--link-colour",document.body.style.getPropertyValue("--link-colour")],["--server-icon-size",document.body.style.getPropertyValue("--server-icon-size")],["--server-icon-spacing",document.body.style.getPropertyValue("--server-icon-spacing")],["--server-container-padding",document.body.style.getPropertyValue("--server-container-padding")]]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),loadSettings:function(){var e=n(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.forEach(function(e){document.body.style.setProperty(e[0],e[1])});case 1:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default