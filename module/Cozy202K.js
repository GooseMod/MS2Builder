parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,r,o,a,u){try{var c=t[a](u),i=c.value}catch(s){return void n(s)}c.done?e(i):Promise.resolve(i).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(o,a){var u=e.apply(n,r);function c(e){t(u,o,a,c,i,"next",e)}function i(e){t(u,o,a,c,i,"throw",e)}c(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('@charset "UTF-8";\n/**\n * @name Cozy202K\n * @author Vozer, Loremly, NYRI4, Tamago-iku\n * @version 2022.05.30\n * @description A Discord Theme based on LeoRicharte\'s concept art\n * @source https://github.com/SlippingGitty/Comfy202k\n * @website https://slippinggitty.github.io/\n*/\n/*\n ██████╗ ██████╗ ███████╗██╗   ██╗██████╗  ██████╗ ██████╗ ██╗  ██╗\n██╔════╝██╔═══██╗╚══███╔╝╚██╗ ██╔╝╚════██╗██╔═████╗╚════██╗██║ ██╔╝\n██║     ██║   ██║  ███╔╝  ╚████╔╝  █████╔╝██║██╔██║ █████╔╝█████╔╝ \n██║     ██║   ██║ ███╔╝    ╚██╔╝  ██╔═══╝ ████╔╝██║██╔═══╝ ██╔═██╗ \n╚██████╗╚██████╔╝███████╗   ██║   ███████╗╚██████╔╝███████╗██║  ██╗\n ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝\n\n*/\n/* \n////////////////\n///IMPORT CSS\n///////////////\n*/\n@import url("https://slippinggitty.github.io/COMFY202K.css");\n/*\n////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n///LUCKFIRE - LOREMLY - BUBBLE BAR - ROUNDED CHAT BAR - https://github.com/discord-extensions/bubble-bar/blob/master/LICENSE\n////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n*/\n@import url("https://discord-extensions.github.io/bubble-bar/src/source.css");\n:root {\n  /* || Main */\n  --channeltextarea-rounding: 25px;\n  --channeltextarea-background: var(--background-secondary-alt);\n  --channeltextarea-border: var(--background-secondary);\n  /* || Default Buttons */\n  --channeltextarea-button-rounding: 50%;\n  --channeltextarea-button-icon: var(--interactive-normal);\n  --channeltextarea-button-background: var(--channeltextarea-background);\n  --channeltextarea-button-hover: var(--background-tertiary);\n  /* || Accents */\n  --channeltextarea-caret: var(--brand-experiment-400);\n  --channeltextarea-sendbutton-icon: var(--brand-experiment-130);\n  --channeltextarea-sendbutton-background: var(--brand-experiment);\n  --channeltextarea-sendbutton-hover: var(--brand-experiment-460);\n  --channeltextarea-sendbutton-active: var(--brand-experiment-530);\n}\n\n/* Bubble Bar Recolor */\n.base-2jDfDU .channelTextArea-1VQBuV .inner-NQg18Y .textArea-2CLwUE, .base-2jDfDU .channelTextArea-1VQBuV .inner-NQg18Y .button-f2h6uQ {\n  background-color: #423f71;\n}\n\n/* \n/////////////////////////////////////////\n//ADD YOUR OWN ADDITIONS BELLOW THIS LINE\n/////////////////////////////////////////\n*/')),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("Cozy202K",["",{type:"text-input",text:"Channeltextarea Rounding",oninput:function(t){document.body.style.setProperty("--channeltextarea-rounding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channeltextarea-rounding")||"25px";return console.log(t),t}},{type:"text-input",text:"Channeltextarea Button Rounding",oninput:function(t){document.body.style.setProperty("--channeltextarea-button-rounding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channeltextarea-button-rounding")||"50%";return console.log(t),t}},{type:"text-and-color",text:"Toast Background",oninput:function(t){document.body.style.setProperty("--toast-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toast-background")||"#292841";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Toast Header",oninput:function(t){document.body.style.setProperty("--toast-header",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toast-header")||"#101320";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Toast Contents",oninput:function(t){document.body.style.setProperty("--toast-contents",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toast-contents")||"#23283d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Cozy202K")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--channeltextarea-rounding",document.body.style.getPropertyValue("--channeltextarea-rounding")],["--channeltextarea-button-rounding",document.body.style.getPropertyValue("--channeltextarea-button-rounding")],["--toast-background",document.body.style.getPropertyValue("--toast-background")],["--toast-header",document.body.style.getPropertyValue("--toast-header")],["--toast-contents",document.body.style.getPropertyValue("--toast-contents")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default