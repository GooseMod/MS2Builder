parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,o,e,n,r,a,u){try{var s=t[a](u),i=s.value}catch(l){return void e(l)}s.done?o(i):Promise.resolve(i).then(n,r)}function o(o){return function(){var e=this,n=arguments;return new Promise(function(r,a){var u=o.apply(e,n);function s(o){t(u,r,a,s,i,"next",o)}function i(o){t(u,r,a,s,i,"throw",o)}s(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode("/**\n * @name ClearVision\n * @author ClearVision Team\n * @version 6.1.0\n * @description Highly customizable theme for BetterDiscord.\n * @source https://github.com/ClearVision/ClearVision-v6\n * @website https://clearvision.gitlab.io\n * @invite dHaSxn3\n */\n\n/* Credits to Zerthox for making the original theme. */\n\n/* IMPORT CSS */\n@import url(https://clearvision.gitlab.io/v6/main.css);\n\n/* SETTINGS */\n:root {\n\n\t/* ACCENT COLORS */\n\t--main-color: #2780e6; /* main accent color (hex, rgb or hsl) [default: #2780e6] */\n\t--hover-color: #1e63b3; /* hover accent color (hex, rgb or hsl) [default: #1e63b3] */\n\t--success-color: #43b581; /* success accent color (hex, rgb or hsl) [default: #43b581] */\n\t--danger-color: #982929; /* danger accent color (hex, rgb or hsl) [default: #982929] */\n\t\n\t/* Customization Patch */\n\t--channel-unread: var(--main-color); /* Unread Server channel color. [default:  var(--main-color)] THIS OVERRIDES YOUR MAIN COLOR*/\n\t--channel-color:  rgba(255,255,255,0.3); /*Read Server channel color  [default: rgba(255,255,255,0.3);]*/\n\t--channel-text-selected: #fff; /* Selected channel text color, CV default is #fff */\n\t--muted-color: rgba(255,255,255,0.1); /*Muted channel color  [default: rgba(255,255,255,0.1);]*/\n\t--url-color: var(--main-color); /*The color of url links [default: var(--main-color)]*/     \n\n\t/* STATUS COLORS */\n\t--online-color: #43b581; /* online status color (hex, rgb or hsl) [default: #43b581] */\n\t--idle-color: #faa61a; /* idle status color (hex, rgb or hsl) [default: #faa61a] */\n\t--dnd-color: #982929; /* dnd status color (hex, rgb or hsl) [default: #982929] */\n\t--streaming-color: #593695; /* streaming status color (hex, rgb or hsl) [default: #593695] */\n\t--offline-color: #808080; /* offline/invisible status color (hex, rgb or hsl) [default: #808080] */\n\n\t/* GENERAL */\n\t--main-font: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif; /* main font for app (font must be installed) [default: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif] */\n\t--code-font: Consolas, Liberation Mono, Menlo, Courier, monospace; /* font for codeblocks (font must be installed) [default: Consolas, Liberation Mono, Menlo, Courier, monospace] */\n\t--text-normal: rgb(220, 221, 222); /* color of default discord text */\n\t--text-muted:  rgb(114, 118, 125); /* color of default discord muted text (e.g.text found in input fields before typing).*/\n\t--channels-width: 220px; /* channel list width (240px for Discord default) [default: 220px] */\n\t--members-width: 240px; /* member list width [default: 240px] */\n\n\t/* APP BACKGROUND */\n\t--background-shading: 100%; /* app background shading (0 for complete smoothness) [default: 100%] */\n\t--background-overlay: rgba(0, 0, 0, 0.6); /* app background overlay color/gradient [default: rgba(0, 0, 0, 0.6)] */\n\t--background-image: url(https://clearvision.gitlab.io/images/sapphire.jpg); /* app background image (link must be HTTPS) [default: url(https://clearvision.gitlab.io/images/sapphire.jpg)]*/\n\t--background-position: center; /* app background position [default: center] */\n\t--background-size: cover; /* app background size [default: cover] */\n\t--background-repeat: no-repeat; /* app background repeat [default: no-repeat] */\n\t--background-attachment: fixed; /* app background attachment [default: fixed] */\n\t--background-brightness: 100%; /* app background brightness (< 100% for darken, > 100% for lighten) [default: 100%] */\n\t--background-contrast: 100%; /* app background contrast [default: 100%] */\n\t--background-saturation: 100%; /* app background saturation [default: 100%] */\n\t--background-invert: 0%; /* app background invert (0 - 100%)  [default: 0%] */\n\t--background-grayscale: 0%; /* app background grayscale ( 0 - 100%) [default: 0%] */\n\t--background-sepia: 0%; /* app background sepia (0 - 100%) [default: 0%] */\n\t--background-blur: 0px; /* app background blur [default: 0px] */\n\t\n\t/* HOME BUTTON ICON */\n\t--home-icon: url(https://clearvision.gitlab.io/icons/discord.svg); /* home button icon (link must be HTTPS) [default: url(https://clearvision.gitlab.io/icons/discord.svg)]*/\n\t--home-position: center; /* home button icon position [default: center] */\n\t--home-size: 40px; /* home button icon size [default: 40px] */\n\t\n\t/* MODAL BACKDROP */\n\t--backdrop-overlay: rgba(0, 0, 0, 0.8); /* modal backdrop overlay color/gradient [default: rgba(0, 0, 0, 0.8)] */\n\t--backdrop-image: var(--background-image); /* modal backdrop image (link must be HTTPS) [default: var(---background-image)] */\n\t--backdrop-position: var(--background-position); /* modal backdrop position [default: var(---background-position)] */\n\t--backdrop-size: var(--background-size); /* modal backdrop size [default: var(---background-size)] */\n\t--backdrop-repeat: var(--background-repeat); /* modal backdrop repeat [default: var(---background-repeat)] */\n\t--backdrop-attachment: var(--background-attachment); /* modal backdrop attachment [default: var(--background-attachment)] */\n\t--backdrop-brightness: var(--background-brightness); /* modal backdrop brightness (< 100% for darken, > 100% for lighten) [default: var(---background-brightness)] */\n\t--backdrop-contrast: var(--background-contrast); /* modal backdrop contrast [default: var(---background-contrast)] */\n\t--backdrop-saturation: var(--background-saturation); /* modal backdrop saturation [default: var(---background-saturation)] */\n\t--backdrop-invert: var(--background-invert); /* modal backdrop invert (0 - 100%)  [default: var(---background-invert)] */\n\t--backdrop-grayscale: var(--background-grayscale); /* modal backdrop grayscale ( 0 - 100%) [default: var(---background-grayscale)] */\n\t--backdrop-sepia: var(--background-sepia); /* modal backdrop sepia (0 - 100%) [default: var(---background-sepia)] */\n\t--backdrop-blur: var(--background-blur); /* modal backdrop blur [default: var(--background-blur)] */\n\t\n\t/* USER POPOUT BACKGROUND */\n\t--user-popout-image: var(--background-image); /* app background image (link must be HTTPS) [default: var(---background-image)] */\n\t--user-popout-position: var(--background-position); /* user popout background position [default: var(---background-position)] */\n\t--user-popout-size: var(--background-size); /* user popout background size [default: var(---background-size)] */\n\t--user-popout-repeat: var(--background-repeat); /* user popout background repeat [default: var(---background-repeat)] */\n\t--user-popout-attachment: var(--background-attachment); /* user popout background attachment [default: var(--background-attachment)] */\n\t--user-popout-brightness: var(--background-brightness); /* user popout background brightness (< 100% for darken, > 100% for lighten) [default: var(---background-brightness)] */\n\t--user-popout-contrast: var(--background-contrast); /* user popout background contrast [default: var(---background-contrast)] */\n\t--user-popout-saturation: var(--background-saturation); /* user popout background saturation [default: var(---background-saturation)] */\n\t--user-popout-invert: var(--background-invert); /* user popout background invert (0 - 100%) [default: var(---background-invert)] */\n\t--user-popout-grayscale: var(--background-grayscale); /* user popout background grayscale (0 - 100%) [default: var(---background-grayscale)] */\n\t--user-popout-sepia: var(--background-sepia); /* user popout background sepia (0 - 100%) [default: var(---background-sepia)] */\n\t--user-popout-blur: calc(var(--background-blur) + 3px); /* user popout background blur [default: calc(var(--background-blur) + 3px)] */\n\t\n\t/* USER MODAL BACKGROUND */\n\t--user-modal-image: var(--background-image); /* app background image (link must be HTTPS) [default: var(---background-image)] */\n\t--user-modal-position: var(--background-position); /* user modal background position [default: var(---background-position)] */\n\t--user-modal-size: var(--background-size); /* user modal background size [default: var(---background-size)] */\n\t--user-modal-repeat: var(--background-repeat); /* user modal background repeat [default: var(---background-repeat)] */\n\t--user-modal-attachment: var(--background-attachment); /* user modal background attachment [default: var(--background-attachment)] */\n\t--user-modal-brightness: var(--background-brightness); /* user modal background brightness (< 100% for darken, > 100% for lighten) [default: var(---background-brightness)] */\n\t--user-modal-contrast: var(--background-contrast); /* user modal background contrast [default: var(---background-contrast)] */\n\t--user-modal-saturation: var(--background-saturation); /* user modal background saturation [default: var(---background-saturation)] */\n\t--user-modal-invert: var(--background-invert); /* user modal background invert (0 - 100%) [default: var(---background-invert)] */\n\t--user-modal-grayscale: var(--background-grayscale); /* user modal background grayscale (0 - 100%) [default: var(---background-grayscale)] */\n\t--user-modal-sepia: var(--background-sepia); /* user modal background sepia (0 - 100%) [default: var(---background-sepia)] */\n\t--user-modal-blur: calc(var(--background-blur) + 3px); /* user modal background blur [default: calc(var(--background-blur) + 3px)] */\n\t\n\t/* THEME BD COLORS */\n\t--bd-blue: var(--main-color); /* betterdiscord main color [default: var(--main-color)] */\n\t--bd-blue-hover: var(--hover-color); /* betterdiscord hover color [default: var(--hover-color)] */\n\t--bd-blue-active: var(--hover-color); /* betterdiscord active color [default: var(--hover-color)] */\n}\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("ClearVision",["",{type:"text-and-color",text:"Main Color",oninput:function(t){console.log(t),document.body.style.setProperty("--main-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-color")||"#2780e6";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Hover Color",oninput:function(t){console.log(t),document.body.style.setProperty("--hover-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--hover-color")||"#1e63b3";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Success Color",oninput:function(t){console.log(t),document.body.style.setProperty("--success-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--success-color")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Danger Color",oninput:function(t){console.log(t),document.body.style.setProperty("--danger-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--danger-color")||"#982929";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Channel Color",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--channel-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channel-color")||"rgba(255,255,255,0.3); /*Read Server channel color  [default: rgba(255,255,255,0.3)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Channel Text Selected",oninput:function(t){console.log(t),document.body.style.setProperty("--channel-text-selected",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channel-text-selected")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Muted Color",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--muted-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--muted-color")||"rgba(255,255,255,0.1); /*Muted channel color  [default: rgba(255,255,255,0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Online Color",oninput:function(t){console.log(t),document.body.style.setProperty("--online-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--online-color")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Idle Color",oninput:function(t){console.log(t),document.body.style.setProperty("--idle-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--idle-color")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"DND Color",oninput:function(t){console.log(t),document.body.style.setProperty("--dnd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dnd-color")||"#982929";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Streaming Color",oninput:function(t){console.log(t),document.body.style.setProperty("--streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--streaming-color")||"#593695";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Offline Color",oninput:function(t){console.log(t),document.body.style.setProperty("--offline-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--offline-color")||"#808080";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Main Font",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--main-font",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-font")||"Whitney, Helvetica Neue, Helvetica, Arial, sans-serif";return console.log(t),t}},{type:"text-input",text:"Code Font",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--code-font",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--code-font")||"Consolas, Liberation Mono, Menlo, Courier, monospace";return console.log(t),t}},{type:"text-input",text:"Channels Width",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--channels-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channels-width")||"220px";return console.log(t),t}},{type:"text-input",text:"Members Width",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--members-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--members-width")||"240px";return console.log(t),t}},{type:"text-input",text:"Background Shading",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-shading",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-shading")||"100%";return console.log(t),t}},{type:"text-and-color",text:"Background Overlay",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-overlay",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-overlay")||"rgba(0, 0, 0, 0.6)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Background Image",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-image",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-image")||"url(https://clearvision.gitlab.io/images/sapphire.jpg)";return console.log(t),t}},{type:"text-input",text:"Background Position",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-position",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-position")||"center";return console.log(t),t}},{type:"text-input",text:"Background Size",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-size")||"cover";return console.log(t),t}},{type:"text-input",text:"Background Repeat",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-repeat",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-repeat")||"no-repeat";return console.log(t),t}},{type:"text-input",text:"Background Attachment",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-attachment",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-attachment")||"fixed";return console.log(t),t}},{type:"text-input",text:"Background Brightness",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-brightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-brightness")||"100%";return console.log(t),t}},{type:"text-input",text:"Background Contrast",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-contrast",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-contrast")||"100%";return console.log(t),t}},{type:"text-input",text:"Background Saturation",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-saturation",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-saturation")||"100%";return console.log(t),t}},{type:"text-input",text:"Background Invert",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-invert",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-invert")||"0%";return console.log(t),t}},{type:"text-input",text:"Background Grayscale",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-grayscale",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-grayscale")||"0%";return console.log(t),t}},{type:"text-input",text:"Background Sepia",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-sepia",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-sepia")||"0%";return console.log(t),t}},{type:"text-input",text:"Background Blur",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--background-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-blur")||"0px";return console.log(t),t}},{type:"text-input",text:"Home Icon",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--home-icon",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--home-icon")||"url(https://clearvision.gitlab.io/icons/discord.svg)";return console.log(t),t}},{type:"text-input",text:"Home Position",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--home-position",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--home-position")||"center";return console.log(t),t}},{type:"text-input",text:"Home Size",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--home-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--home-size")||"40px";return console.log(t),t}},{type:"text-and-color",text:"Backdrop Overlay",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),console.log(t),document.body.style.setProperty("--backdrop-overlay",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backdrop-overlay")||"rgba(0, 0, 0, 0.8)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.remove();try{goosemodScope.settings.removeItem("ClearVision")}catch(o){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--main-color",document.body.style.getPropertyValue("--main-color")],["--hover-color",document.body.style.getPropertyValue("--hover-color")],["--success-color",document.body.style.getPropertyValue("--success-color")],["--danger-color",document.body.style.getPropertyValue("--danger-color")],["--channel-color",document.body.style.getPropertyValue("--channel-color")],["--channel-text-selected",document.body.style.getPropertyValue("--channel-text-selected")],["--muted-color",document.body.style.getPropertyValue("--muted-color")],["--online-color",document.body.style.getPropertyValue("--online-color")],["--idle-color",document.body.style.getPropertyValue("--idle-color")],["--dnd-color",document.body.style.getPropertyValue("--dnd-color")],["--streaming-color",document.body.style.getPropertyValue("--streaming-color")],["--offline-color",document.body.style.getPropertyValue("--offline-color")],["--main-font",document.body.style.getPropertyValue("--main-font")],["--code-font",document.body.style.getPropertyValue("--code-font")],["--channels-width",document.body.style.getPropertyValue("--channels-width")],["--members-width",document.body.style.getPropertyValue("--members-width")],["--background-shading",document.body.style.getPropertyValue("--background-shading")],["--background-overlay",document.body.style.getPropertyValue("--background-overlay")],["--background-image",document.body.style.getPropertyValue("--background-image")],["--background-position",document.body.style.getPropertyValue("--background-position")],["--background-size",document.body.style.getPropertyValue("--background-size")],["--background-repeat",document.body.style.getPropertyValue("--background-repeat")],["--background-attachment",document.body.style.getPropertyValue("--background-attachment")],["--background-brightness",document.body.style.getPropertyValue("--background-brightness")],["--background-contrast",document.body.style.getPropertyValue("--background-contrast")],["--background-saturation",document.body.style.getPropertyValue("--background-saturation")],["--background-invert",document.body.style.getPropertyValue("--background-invert")],["--background-grayscale",document.body.style.getPropertyValue("--background-grayscale")],["--background-sepia",document.body.style.getPropertyValue("--background-sepia")],["--background-blur",document.body.style.getPropertyValue("--background-blur")],["--home-icon",document.body.style.getPropertyValue("--home-icon")],["--home-position",document.body.style.getPropertyValue("--home-position")],["--home-size",document.body.style.getPropertyValue("--home-size")],["--backdrop-overlay",document.body.style.getPropertyValue("--backdrop-overlay")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=o(regeneratorRuntime.mark(function t(o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(o){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default