parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t,o,n,r,u,a){try{var c=e[u](a),i=c.value}catch(s){return void o(s)}c.done?t(i):Promise.resolve(i).then(n,r)}function t(t){return function(){var o=this,n=arguments;return new Promise(function(r,u){var a=t.apply(o,n);function c(t){e(a,r,u,c,i,"next",t)}function i(t){e(a,r,u,c,i,"throw",t)}c(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('/**\n * @name         Reborn\n * @description  Phoenix Theme Bundle: Transparent, fully customizable theme with multiple addons\n * @author       MonsterDev\n * @version      1.5\n * @donate       https://goo.gl/9S8VGb\n * @source       https://github.com/monstrousdev/themes/theme-files/Reborn.theme.css\n * @invite       TeRQEPb\n * @authorId     402272736665272320\n */\n\n/* IMPORT CSS FROM GITHUB */\n@import "https://monstrousdev.github.io/themes/phoenix-bundle/reborn.css";\n/*\n===== IMPORTANT =====\nCHANGE DISCORDS THEME TO DARK THEME IN APPEARANCE SETTINGS FOR THIS THEME TO WORK!\n\nRegistered: Black Box Theme\n\n===== CUSTOMIZABLE COLORS AND IMAGES =====\n*/\n\n:root {\n  --roundness: 50px; /* edit roundness of icons from 0px to 50px */\n --main-color: #007dbd; /* Main Color */     \n  --hover-color: #03679b; /* Hover Color */\n  --home-color: #eee; /* Change home icon color */\n  --home-size: 24px; /* size of the home icon */\n  --shadow: rgba(0,0,0,.4); /* change to darken lighten, or set to transparent */\n --background-image: url(https://s-media-cache-ak0.pinimg.com/originals/60/c4/bb/60c4bb55215c989b15b0fe144c73cf82.jpg); /* change background */\n  --background-blur: 0px; /* Main Background Blur */\n--popup-background: url(https://s-media-cache-ak0.pinimg.com/originals/60/c4/bb/60c4bb55215c989b15b0fe144c73cf82.jpg);  /* Background for popups and modals */\n  --background-darkness: 0.75; /* change the darkness of your background. 1 makes it completely black, 0 makes it like the original image */\n}\n\n\n/*\n---------------------------------------------------------------------------------------------------------------------------------------------\n===== CREDITS =====\nURI\nBEARDDESIGN\nZERTHOX\nTHESE PEOPLE HAVE HELPED CREATE THIS THEME IN ONE WAY OR THE OTHER.\n===== TROUBLESHOOTING =====\nIF YOU NEED ANY HELP GO TO https://discord.gg/TeRQEPb\n---------------------------------------------------------------------------------------------------------------------------------------------\n*/\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Reborn",["",{type:"text-input",text:"Roundness",oninput:function(e){document.body.style.setProperty("--roundness",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--roundness")||"50px";return console.log(e),e}},{type:"text-and-color",text:"Main Color",oninput:function(e){document.body.style.setProperty("--main-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--main-color")||"#007dbd";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Hover Color",oninput:function(e){document.body.style.setProperty("--hover-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--hover-color")||"#03679b";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Home Color",oninput:function(e){document.body.style.setProperty("--home-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--home-color")||"#eee";return console.log(e),e}},{type:"text-input",text:"Home Size",oninput:function(e){document.body.style.setProperty("--home-size",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--home-size")||"24px";return console.log(e),e}},{type:"text-and-color",text:"Shadow",oninput:function(e){document.body.style.setProperty("--shadow",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--shadow")||"rgba(0,0,0,.4)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Background Image",oninput:function(e){document.body.style.setProperty("--background-image",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--background-image")||"url(https://s-media-cache-ak0.pinimg.com/originals/60/c4/bb/60c4bb55215c989b15b0fe144c73cf82.jpg)";return console.log(e),e}},{type:"text-input",text:"Background Blur",oninput:function(e){document.body.style.setProperty("--background-blur",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--background-blur")||"0px";return console.log(e),e}},{type:"text-input",text:"Popup Background",oninput:function(e){document.body.style.setProperty("--popup-background",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--popup-background")||"url(https://s-media-cache-ak0.pinimg.com/originals/60/c4/bb/60c4bb55215c989b15b0fe144c73cf82.jpg)";return console.log(e),e}},{type:"text-input",text:"Background Darkness",oninput:function(e){document.body.style.setProperty("--background-darkness",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--background-darkness")||"0.75";return console.log(e),e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Reborn")}catch(t){}case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[["--roundness",document.body.style.getPropertyValue("--roundness")],["--main-color",document.body.style.getPropertyValue("--main-color")],["--hover-color",document.body.style.getPropertyValue("--hover-color")],["--home-color",document.body.style.getPropertyValue("--home-color")],["--home-size",document.body.style.getPropertyValue("--home-size")],["--shadow",document.body.style.getPropertyValue("--shadow")],["--background-image",document.body.style.getPropertyValue("--background-image")],["--background-blur",document.body.style.getPropertyValue("--background-blur")],["--popup-background",document.body.style.getPropertyValue("--popup-background")],["--background-darkness",document.body.style.getPropertyValue("--background-darkness")]]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),loadSettings:function(){var e=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(e){document.body.style.setProperty(e[0],e[1])});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default