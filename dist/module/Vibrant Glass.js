parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,o,r,a,i){try{var u=t[a](i),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(o,r)}function e(e){return function(){var n=this,o=arguments;return new Promise(function(r,a){var i=e.apply(n,o);function u(e){t(i,r,a,u,c,"next",e)}function c(e){t(i,r,a,u,c,"throw",e)}u(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode("/**\n    * @name Vibrant Glass\n    * @version 1.0\n    * @description Simple customizable glass theme.\n    * @author Kaynooo#8080\n    *\n    * @source https://github.com/Kayno0o/vibrant-glass-theme\n    * @invite XhPKd5x7Fz\n**/\n\n/*\n __      ___ _                     _      _____ _               \n \\ \\    / (_) |                   | |    / ____| |              \n  \\ \\  / / _| |__  _ __ __ _ _ __ | |_  | |  __| | __ _ ___ ___ \n   \\ \\/ / | | '_ \\| '__/ _` | '_ \\| __| | | |_ | |/ _` / __/ __|\n    \\  /  | | |_) | | | (_| | | | | |_  | |__| | | (_| \\__ \\__ \\\n     \\/   |_|_.__/|_|  \\__,_|_| |_|\\__|  \\_____|_|\\__,_|___/___/\n\n*/\n\n@import url(\"https://raw.githack.com/Kayno0o/vibrant-glass-theme/main/glass_remote.theme.css\");\n\n/*\nto customize rgb color : https://www.google.com/search?q=color+picker and copy the RGB thing\nto create custom gradient : https://cssgradient.io/ and copy the linear-gradient\n*/\n\n/* DEFINE MAIN VARIABLES */\n\n.theme-dark {\n    /*\n    name of the Discord window (top left)\n    default : \"Vibrant Glass\" */\n    --window-name: \"Vibrant Glass\";\n    /*\n    color of the Discord window name\n    default : rgb(255, 255, 255) */\n    --window-name-color: rgb(255, 255, 255);\n    /*\n    opacity, but lighter\n    default : 0.2 */\n    --light-opacity: 0.2;\n    /*\n    opacity used everywhere to make this glass effect \n    default : 0.5 */\n    --opacity: 0.5;\n    /*\n    opacity, but darker\n    default : 0.75 */\n    --dark-opacity: 0.75;\n    /*\n    it's just the Discord background URL, it has to be a direct link (ending with .png, .jpg, .gif)\n    default : url('https://cdn.discordapp.com/attachments/696040243748536401/850445513542205531/1-IrFMpUu.png') */\n    --background-url: url('https://cdn.discordapp.com/attachments/696040243748536401/850445513542205531/1-IrFMpUu.png');\n    /*\n    background color used for opacity\n    default : 0, 0, 0 */\n    --background-color: 0, 0, 0;\n}\n\n/* BACKGROUND */\n\n.app-2CXKsg>.bg-1QIAus {\n    background: var(--background-url) !important;\n    background-size: cover !important;\n}\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Vibrant Glass",["",{type:"text-input",text:"Window Name",oninput:function(t){document.body.style.setProperty("--window-name",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-name")||'"Vibrant Glass"';return console.log(t),t}},{type:"text-and-color",text:"Window Name Color",oninput:function(t){document.body.style.setProperty("--window-name-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-name-color")||"rgb(255, 255, 255)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Light Opacity",oninput:function(t){document.body.style.setProperty("--light-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--light-opacity")||"0.2";return console.log(t),t}},{type:"text-input",text:"Opacity",oninput:function(t){document.body.style.setProperty("--opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--opacity")||"0.5";return console.log(t),t}},{type:"text-input",text:"Dark Opacity",oninput:function(t){document.body.style.setProperty("--dark-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-opacity")||"0.75";return console.log(t),t}},{type:"text-input",text:"Background Url",oninput:function(t){document.body.style.setProperty("--background-url",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-url")||"url('https://cdn.discordapp.com/attachments/696040243748536401/850445513542205531/1-IrFMpUu.png')";return console.log(t),t}},{type:"text-and-color",text:"Background Color",oninput:function(t){document.body.style.setProperty("--background-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-color")||"0, 0, 0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Text Positive",oninput:function(t){document.body.style.setProperty("--text-positive",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text-positive")||"rgb(98, 185, 67)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Notification Color",oninput:function(t){document.body.style.setProperty("--notification-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--notification-color")||"250, 100, 150";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Rainbow Gradient Width",oninput:function(t){document.body.style.setProperty("--rainbow-gradient-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rainbow-gradient-width")||"1px";return console.log(t),t}},{type:"text-and-color",text:"Rainbow Gradient",oninput:function(t){document.body.style.setProperty("--rainbow-gradient",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rainbow-gradient")||"linear-gradient(135deg, rgba(255, 0, 0, 1) 0%, rgba(255, 162, 0, 1) 20%, rgba(255, 248, 0, 1) 40%, rgba(0, 255, 64, 1) 60%, rgba(0, 31, 255, 1) 80%, rgba(98, 0, 255, 1) 100%)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Vibrant Glass")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--window-name",document.body.style.getPropertyValue("--window-name")],["--window-name-color",document.body.style.getPropertyValue("--window-name-color")],["--light-opacity",document.body.style.getPropertyValue("--light-opacity")],["--opacity",document.body.style.getPropertyValue("--opacity")],["--dark-opacity",document.body.style.getPropertyValue("--dark-opacity")],["--background-url",document.body.style.getPropertyValue("--background-url")],["--background-color",document.body.style.getPropertyValue("--background-color")],["--text-positive",document.body.style.getPropertyValue("--text-positive")],["--notification-color",document.body.style.getPropertyValue("--notification-color")],["--rainbow-gradient-width",document.body.style.getPropertyValue("--rainbow-gradient-width")],["--rainbow-gradient",document.body.style.getPropertyValue("--rainbow-gradient")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default