parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,o,r,a,i){try{var u=t[a](i),l=u.value}catch(c){return void n(c)}u.done?e(l):Promise.resolve(l).then(o,r)}function e(e){return function(){var n=this,o=arguments;return new Promise(function(r,a){var i=e.apply(n,o);function u(e){t(i,r,a,u,l,"next",e)}function l(e){t(i,r,a,u,l,"throw",e)}u(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('/**\n* @name Comfy\n* @author Nyria#3863\n* @description Stay comfy while talking to your friends\n* @invite rtBQX5D3bD\n* @version 2.0\n*/\n\n@import "https://nyri4.github.io/Comfy/betterdiscord/main.css";\n\n/* ═══════『 ⚠️・Important tips 』═══════\n*\n*   ➥ To comment or uncomment a line you need to put those "/" and "*" characters as you can see at the beginning and ending of my comments.\n*      (You don\'t need to put a * at each line like I do, it\'s just for readability). See more here : https://developer.mozilla.org/en-US/docs/Web/CSS/Comments\n*\n*   ➥ You can play with the values and see how it goes, don\'t delete "px" after the value if you don\'t have knowledges in CSS.\n*\n*   ➥ To change the colors, replace the HEX code with the one you picked here : https://htmlcolorcodes.com\n*/\n\n/* ═══════『 🚫 ・ No scrollbars 』- Comment the line below if you want the scrollbar back */\n::-webkit-scrollbar { display: none;}.content-1x5b-n { margin: 0 !important; border-radius: 0; }.mainContent-u_9PKf { padding-left: 8px;}.container-2Pjhx- { margin: 0; max-width: unset; }.layout-2DM8Md { border-radius: 0; padding: 0 16px;}.unread-2lAfLh { z-index: 1;} .buttons-3JBrkn { padding-right: 10px !important;}\n\n/* ═══════『 🎵 ・ Better SpotifyControls seek bar 』- Comment the line below if you want the dafault one */\n.container-6sXIoE { border-bottom: none !important; margin-bottom: 0 !important;}.container-6sXIoE .timeline-UWmgAx { position: relative !important;}.container-6sXIoE .bar-g2ZMIm { position: absolute !important; bottom: -6px !important; left: -8px !important; width: 240px !important; height: 53px !important;margin: 0 !important;-webkit-mask-image: linear-gradient(0.25turn, #0008, #0002) !important;mask-image: linear-gradient(0.25turn, #0008, #0002) !important;border-radius: 0 !important;}.barFill-Dhkah7 { border-radius: 0 !important;}.container-6sXIoE.maximized-vv2Wr0 .bar-g2ZMIm { height: 88px !important;}.container-6sXIoE .button-14-BFJ:hover { background-color: transparent !important;}.barFill-Dhkah7, .timeline-UWmgAx:hover .barFill-Dhkah7 { background: var(--spotify-color) !important;}.inner-WRV6k5 { z-index: 1 !important;}.barText-lmqc5O, .grabber-7sd5f5 { display: none !important;}\n\n:root { \n\n/* ═══════『 🖼️ ・ Background in the status picker 』═══════\n*\n*   ➥ Image : Replace the url of the current image with yours\n*\n*   ➥ Color : Delete the url("https://mywebsite/example.png") and replace it by an HEX color\n*\n*   ℹ️ : This background isn\'t and cannot be linked to the new Nitro banners or USRBG \n*/\n\n--status-background: url(\'https://i.imgur.com/yHP6sgj.png\');\n\n/* ═══════『 ⚙️ / 🎤 / 🎧 ・ User button 』═══════\n*\n*   ➥ A higher value will means more space between the icons and a lower ...\n*\n*    ℹ️ : If you want to revert those to the old area, join the support server and check #css-snippets\n*\n*/\n\n/* Spacing - Default value : 8px */\n--user-buttons-spacing: 8px;\n\n/* Color - Default value : #096DC0 */\n--user-buttons-color: #096DC0;\n\n/* ═══════『 ⭕ Roundness settings 』═══════\n*\n*    ➥ A higher value will means more rounded corners and a lower ...\n*       0 ➜ Square\n*       25 ➜ Circle\n*/\n\n/* Avatars - Default value : 5px */\n--avatar-radius: 5px;  \n\n/* Status - Default value : 3px */\n--status-radius: 3px; \n\n/* Servers - Default value : 8px */\n--server-radius: 8px;\n\n/* ═══════『 😃 Colored emoji picker 』═══════\n*   Change the value to "100%" if you want the default one */\n\n--colored-emoji: grayscale(0%);\n\n/* ═══════『 📜 Server/channel list 』═══════ */\n\n/* Mention - Default value : #F04747 */\n--mention-color: #F04747;\n\n/* Unread - Default value : #7289DA */\n--unread-color: #7289DA;\n\n/*  『 🔴 Mention colors in chat 』 */\n\n/* Bar on the right - Default value : #C66262 */\n--mention-color-bar: #C66262;\n\n/* Background - Default value : #C662621F */\n--mention-color-background: #C662621F;\n\n/* On hover - Default value : #C6626226 */\n--mention-color-hover: #C6626226;\n\n/* ═══════『 💬 Chat buttons 』═══════ */\n\n/* Default value : #7289DA */\n--chat-buttons: #7289DA;\n\n/* ═══════『 💬 SpotifyControls seek bar 』═══════\n*   ℹ️ : If you don\'t have the plugin : https://betterdiscord.app/plugin/SpotifyControls */\n\n/* Default value : #1EDC62 */\n--spotify-color: #1EDC62;\n\n/* ═══════『 🟢 Status 』═══════ */\n\n/* Online - Default value : #43B581 */\n--online: #43B581;\n\n/* Iddle - Default value : #FAA61A */\n--iddle: #FAA61A;\n\n/* Do Not Disturb - Default value : #F04747 */\n--dnd: #F04747;\n\n/* Offline - Default value : #747F8D */\n--offline: #747F8D;\n\n/* Streaming - Default value : #593695 */\n--streaming: #593695;\n\n/* ═══════『 🔰 Role circle in user popout 』═══════\n*   Default value : 5px */\n\n--role-circle: 5px;\n\n/* ═══════『 🗑️ Discord logo 』═══════\n*   Set it to "block" if you still want it */\n\n--discord-logo: none;\n\n}\n \n:root.theme-dark {\n    --background-primary: #23283D;\n    --background-secondary: #1E2233;\n    --background-secondary-alt: #191F2E;\n    --background-tertiary: #101320;\n    --background-mobile-primary: #23283D;\n    --background-mobile-secondary: #1E2233;\n    --channeltextarea-background: #191F2E;\n    --background-accent: #7289DA;\n    --background-message-hover: transparent;\n    --background-modifier-hover: #1C2030;\n    --background-modifier-active: #1A1E2E;\n    --background-modifier-selected: #191F2E;\n    --deprecated-card-bg: #12141F63;\n    --background-floating: #101320;\n    --deprecated-quickswitcher-input-background:#101320;\n    --elevation-low: none;\n    --scrollbar-auto-thumb: #121722;\n    --scrollbar-auto-track: #191F2E;\n    --scrollbar-thin-thumb: #141925;\n    --activity-card-background: #101320;\n}\n \n:root.theme-light {\n    --background-primary: #23283D;\n    --background-secondary: #1E2233;\n    --background-secondary-alt: #191F2E;\n    --background-tertiary: #101320;\n    --background-accent: #7289DA;\n    --background-modifier-hover: #262B41;\n    --background-modifier-active: #262B41;\n    --header-primary: #FFF;\n    --header-secondary: #B1B5B9;\n    --text-normal: #8E9297;\n}\n')),goosemodScope.settings.createItem("Comfy",["",{type:"text-input",text:"Status Background",oninput:function(t){document.body.style.setProperty("--status-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-background")||"url('https://i.imgur.com/yHP6sgj.png')";return console.log(t),t}},{type:"text-input",text:"User Buttons Spacing",oninput:function(t){document.body.style.setProperty("--user-buttons-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--user-buttons-spacing")||"8px";return console.log(t),t}},{type:"text-and-color",text:"User Buttons Color",oninput:function(t){document.body.style.setProperty("--user-buttons-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--user-buttons-color")||"#096DC0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Avatar Radius",oninput:function(t){document.body.style.setProperty("--avatar-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-radius")||"5px";return console.log(t),t}},{type:"text-input",text:"Status Radius",oninput:function(t){document.body.style.setProperty("--status-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-radius")||"3px";return console.log(t),t}},{type:"text-input",text:"Server Radius",oninput:function(t){document.body.style.setProperty("--server-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-radius")||"8px";return console.log(t),t}},{type:"text-input",text:"Colored Emoji",oninput:function(t){document.body.style.setProperty("--colored-emoji",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--colored-emoji")||"grayscale(0%)";return console.log(t),t}},{type:"text-and-color",text:"Mention Color",oninput:function(t){document.body.style.setProperty("--mention-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mention-color")||"#F04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Unread Color",oninput:function(t){document.body.style.setProperty("--unread-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--unread-color")||"#7289DA";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Mention Color Bar",oninput:function(t){document.body.style.setProperty("--mention-color-bar",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mention-color-bar")||"#C66262";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Mention Color Background",oninput:function(t){document.body.style.setProperty("--mention-color-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mention-color-background")||"#C662621F";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Mention Color Hover",oninput:function(t){document.body.style.setProperty("--mention-color-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mention-color-hover")||"#C6626226";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Chat Buttons",oninput:function(t){document.body.style.setProperty("--chat-buttons",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-buttons")||"#7289DA";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Spotify Color",oninput:function(t){document.body.style.setProperty("--spotify-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spotify-color")||"#1EDC62";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Online",oninput:function(t){document.body.style.setProperty("--online",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--online")||"#43B581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Iddle",oninput:function(t){document.body.style.setProperty("--iddle",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--iddle")||"#FAA61A";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"DND",oninput:function(t){document.body.style.setProperty("--dnd",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dnd")||"#F04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Offline",oninput:function(t){document.body.style.setProperty("--offline",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--offline")||"#747F8D";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Streaming",oninput:function(t){document.body.style.setProperty("--streaming",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--streaming")||"#593695";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Role Circle",oninput:function(t){document.body.style.setProperty("--role-circle",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--role-circle")||"5px";return console.log(t),t}},{type:"text-input",text:"Discord Logo",oninput:function(t){document.body.style.setProperty("--discord-logo",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-logo")||"none";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Comfy")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--status-background",document.body.style.getPropertyValue("--status-background")],["--user-buttons-spacing",document.body.style.getPropertyValue("--user-buttons-spacing")],["--user-buttons-color",document.body.style.getPropertyValue("--user-buttons-color")],["--avatar-radius",document.body.style.getPropertyValue("--avatar-radius")],["--status-radius",document.body.style.getPropertyValue("--status-radius")],["--server-radius",document.body.style.getPropertyValue("--server-radius")],["--colored-emoji",document.body.style.getPropertyValue("--colored-emoji")],["--mention-color",document.body.style.getPropertyValue("--mention-color")],["--unread-color",document.body.style.getPropertyValue("--unread-color")],["--mention-color-bar",document.body.style.getPropertyValue("--mention-color-bar")],["--mention-color-background",document.body.style.getPropertyValue("--mention-color-background")],["--mention-color-hover",document.body.style.getPropertyValue("--mention-color-hover")],["--chat-buttons",document.body.style.getPropertyValue("--chat-buttons")],["--spotify-color",document.body.style.getPropertyValue("--spotify-color")],["--online",document.body.style.getPropertyValue("--online")],["--iddle",document.body.style.getPropertyValue("--iddle")],["--dnd",document.body.style.getPropertyValue("--dnd")],["--offline",document.body.style.getPropertyValue("--offline")],["--streaming",document.body.style.getPropertyValue("--streaming")],["--role-circle",document.body.style.getPropertyValue("--role-circle")],["--discord-logo",document.body.style.getPropertyValue("--discord-logo")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default