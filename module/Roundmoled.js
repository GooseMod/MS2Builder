parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,r,o,a,u){try{var i=t[a](u),d=i.value}catch(c){return void n(c)}i.done?e(d):Promise.resolve(d).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(o,a){var u=e.apply(n,r);function i(e){t(u,o,a,i,d,"next",e)}function d(e){t(u,o,a,i,d,"throw",e)}i(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('/**\n* @name Roundmoled\n* @author malasangre#3502\n* @description Simple amoled black + rounded corners theme\n* @version 1.1\n*/\n\n/* Base theme file, don\'t disable */\n\n@import url("https://tiredmala.github.io/Roundmoled/main.css");\n\n/*                                Optional stuff ( delete the /⃰ ⃰/ on top and below the import to enable them)                     */\n\n\n/*\n@import "https://tiredmala.github.io/Roundmoled/optional/blur.css";\n*/\n\n/*                                Alternative color palettes                                                                      */ \n\n\n/*\n@import "https://tiredmala.github.io/Roundmoled/palettes/roundturnal.css";\n*/\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Roundmoled",["",{type:"text-and-color",text:"Dark Primary",oninput:function(t){document.body.style.setProperty("--dark-primary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-primary")||"#000000";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Dark Secondary",oninput:function(t){document.body.style.setProperty("--dark-secondary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-secondary")||"#050505";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Dark Secondary Alt",oninput:function(t){document.body.style.setProperty("--dark-secondary-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-secondary-alt")||"#080808";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Dark Bright",oninput:function(t){document.body.style.setProperty("--dark-bright",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-bright")||"#0b0b0b";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Roundmoled Background",oninput:function(t){document.body.style.setProperty("--roundmoled-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--roundmoled-background")||"#142339";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Popout Activeborders",oninput:function(t){document.body.style.setProperty("--popout-activeborders",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-activeborders")||"#1f1f1f";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Roundmoled")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--dark-primary",document.body.style.getPropertyValue("--dark-primary")],["--dark-secondary",document.body.style.getPropertyValue("--dark-secondary")],["--dark-secondary-alt",document.body.style.getPropertyValue("--dark-secondary-alt")],["--dark-bright",document.body.style.getPropertyValue("--dark-bright")],["--roundmoled-background",document.body.style.getPropertyValue("--roundmoled-background")],["--popout-activeborders",document.body.style.getPropertyValue("--popout-activeborders")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default