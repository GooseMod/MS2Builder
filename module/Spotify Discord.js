parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,l,u){try{var a=t[l](u),i=a.value}catch(c){return void o(c)}a.done?e(i):Promise.resolve(i).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,l){var u=e.apply(o,n);function a(e){t(u,r,l,a,i,"next",e)}function i(e){t(u,r,l,a,i,"throw",e)}a(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('/**\n * @name Spotify Discord\n * @version 1.5.0\n * @description Combine Discord and Spotify into one\n * @author CapnKitten\n * \n * @website http://github.com/CapnKitten\n * @source https://github.com/CapnKitten/BetterDiscord/blob/master/Themes/Spotify-Discord/css/source.css\n * @donate https://paypal.me/capnkitten\n * @invite jzJkA6Z\n */\n\n@import url(https://capnkitten.github.io/BetterDiscord/Themes/Spotify-Discord/css/source.css);\n\n:root {\n\t--accent-color: #1db954;\n\t--accent-hover: #1ed760;\n\t--accent-rgb: 29,185,84;\n\t--accent-text-color: #fff; /*\t-\t*/\n\n\t--chat-color: #121212;\n\t--chat-box-color: #272727;\n\t--sidebar-color: #000;\n\t--sidebar-panel: #090909; /*\t-\t*/\n\n\t--title-bar: #212121;\n\t--sticky-header: #181818;\n\t--sticky-header-border: #303030; /*\t-\t*/\n\n\t--bar-color: #181818;\n\t--bar-border-color: #282828;\n\t--bar-size: 90px; /*\t-\t*/\n\n\t--popout-color: #282828;\n\t--popout-radius: 7px;\n\t--popout-radius-small: 3px; /*\t-\t*/\n\n\t--input-bg: #e0e0e0;\n\t--input-text-color: #333;\n\t--input-placeholder-color: #444;\n}\n\n/* CUSTOM SERVER TITLE BAR COLORS */\n\n.container-3w7J-x[aria-label*="BetterDiscord"]:before {\n\t--title-custom: #3b77c4;\n}\n\n.container-3w7J-x[aria-label*="CapnKitten"]:before {\n\t--title-custom: #184c88;\n}\n')),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("Spotify Discord",["",{type:"text-and-color",text:"Accent Color",oninput:function(t){document.body.style.setProperty("--accent-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-color")||"#1db954";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Accent Hover",oninput:function(t){document.body.style.setProperty("--accent-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-hover")||"#1ed760";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Accent RGB",oninput:function(t){document.body.style.setProperty("--accent-rgb",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-rgb")||"29,185,84";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Accent Text Color",oninput:function(t){document.body.style.setProperty("--accent-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-text-color")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Chat Color",oninput:function(t){document.body.style.setProperty("--chat-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-color")||"#121212";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Chat Box Color",oninput:function(t){document.body.style.setProperty("--chat-box-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-box-color")||"#272727";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Sidebar Color",oninput:function(t){document.body.style.setProperty("--sidebar-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--sidebar-color")||"#000";return console.log(t),t}},{type:"text-and-color",text:"Sidebar Panel",oninput:function(t){document.body.style.setProperty("--sidebar-panel",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--sidebar-panel")||"#090909";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Title Bar",oninput:function(t){document.body.style.setProperty("--title-bar",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--title-bar")||"#212121";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Sticky Header",oninput:function(t){document.body.style.setProperty("--sticky-header",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--sticky-header")||"#181818";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Sticky Header Border",oninput:function(t){document.body.style.setProperty("--sticky-header-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--sticky-header-border")||"#303030";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Bar Color",oninput:function(t){document.body.style.setProperty("--bar-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bar-color")||"#181818";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Bar Border Color",oninput:function(t){document.body.style.setProperty("--bar-border-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bar-border-color")||"#282828";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Bar Size",oninput:function(t){document.body.style.setProperty("--bar-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bar-size")||"90px";return console.log(t),t}},{type:"text-and-color",text:"Popout Color",oninput:function(t){document.body.style.setProperty("--popout-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-color")||"#282828";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Popout Radius",oninput:function(t){document.body.style.setProperty("--popout-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-radius")||"7px";return console.log(t),t}},{type:"text-input",text:"Popout Radius Small",oninput:function(t){document.body.style.setProperty("--popout-radius-small",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-radius-small")||"3px";return console.log(t),t}},{type:"text-and-color",text:"Input Bg",oninput:function(t){document.body.style.setProperty("--input-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-bg")||"#e0e0e0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Input Text Color",oninput:function(t){document.body.style.setProperty("--input-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-text-color")||"#333";return console.log(t),t}},{type:"text-input",text:"Input Placeholder Color",oninput:function(t){document.body.style.setProperty("--input-placeholder-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-placeholder-color")||"#444";return console.log(t),t}},{type:"text-and-color",text:"Title Custom",oninput:function(t){document.body.style.setProperty("--title-custom",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--title-custom")||"#3b77c4";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Color",oninput:function(t){document.body.style.setProperty("--main-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-color")||"#090909";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Alt Accent",oninput:function(t){document.body.style.setProperty("--alt-accent",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alt-accent")||"#5680d4";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Alt Accent Text Color",oninput:function(t){document.body.style.setProperty("--alt-accent-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alt-accent-text-color")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Alert Color",oninput:function(t){document.body.style.setProperty("--alert-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Alert Hover",oninput:function(t){document.body.style.setProperty("--alert-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-hover")||"#ff4c4c";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Card Color",oninput:function(t){document.body.style.setProperty("--card-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color")||"rgba(255,255,255,0.05)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Card Color Hover",oninput:function(t){document.body.style.setProperty("--card-color-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color-hover")||"rgba(255,255,255,0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Card Border",oninput:function(t){document.body.style.setProperty("--card-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-border")||"#333";return console.log(t),t}},{type:"text-input",text:"Card Radius",oninput:function(t){document.body.style.setProperty("--card-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-radius")||"4px";return console.log(t),t}},{type:"text-and-color",text:"Menu Hover Color",oninput:function(t){document.body.style.setProperty("--menu-hover-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--menu-hover-color")||"rgba(255,255,255,0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Menu Select Color",oninput:function(t){document.body.style.setProperty("--menu-select-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--menu-select-color")||"rgba(255,255,255,0.3)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Menu Border Color",oninput:function(t){document.body.style.setProperty("--menu-border-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--menu-border-color")||"rgba(255,255,255,0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Menu Text Color",oninput:function(t){document.body.style.setProperty("--menu-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--menu-text-color")||"#b2b2b2";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Input Color",oninput:function(t){document.body.style.setProperty("--input-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-color")||"#e0e0e0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Input Radius",oninput:function(t){document.body.style.setProperty("--input-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-radius")||"22px";return console.log(t),t}},{type:"text-and-color",text:"Select Input Color",oninput:function(t){document.body.style.setProperty("--select-input-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--select-input-color")||"#363636";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Button Background",oninput:function(t){document.body.style.setProperty("--button-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-background")||"rgba(0,0,0,0.7)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Button Border",oninput:function(t){document.body.style.setProperty("--button-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-border")||"1px solid #b2b2b2";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Button Border Hover",oninput:function(t){document.body.style.setProperty("--button-border-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-border-hover")||"1px solid #fff";return console.log(t),t}},{type:"text-input",text:"Button Text Color",oninput:function(t){document.body.style.setProperty("--button-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-text-color")||"#fff";return console.log(t),t}},{type:"text-input",text:"Button Scale",oninput:function(t){document.body.style.setProperty("--button-scale",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-scale")||"1.05";return console.log(t),t}},{type:"text-and-color",text:"List Item Default",oninput:function(t){document.body.style.setProperty("--list-item-default",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--list-item-default")||"#212121";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"List Item Hover",oninput:function(t){document.body.style.setProperty("--list-item-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--list-item-hover")||"#333";return console.log(t),t}},{type:"text-and-color",text:"List Item Select",oninput:function(t){document.body.style.setProperty("--list-item-select",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--list-item-select")||"#5a5a5a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Slider Color",oninput:function(t){document.body.style.setProperty("--slider-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--slider-color")||"#b3b3b3";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Attachment Color",oninput:function(t){document.body.style.setProperty("--attachment-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--attachment-color")||"#272727";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Tooltip Font Size",oninput:function(t){document.body.style.setProperty("--tooltip-font-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-font-size")||"14px";return console.log(t),t}},{type:"text-input",text:"Tooltip Padding",oninput:function(t){document.body.style.setProperty("--tooltip-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-padding")||"8px 12px";return console.log(t),t}},{type:"text-and-color",text:"Default Shadow",oninput:function(t){document.body.style.setProperty("--default-shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--default-shadow")||"0 7px 18px rgba(0,0,0,0.25), 0 6px 10px rgba(0,0,0,0.25), 0 -2px 10px rgba(0,0,0,0.25), 0 0 15px rgba(0,0,0,0.25)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Scrollbar Thumb",oninput:function(t){document.body.style.setProperty("--scrollbar-thumb",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-thumb")||"rgba(255,255,255,0.3)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Scrollbar Thumb Hover",oninput:function(t){document.body.style.setProperty("--scrollbar-thumb-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-thumb-hover")||"rgba(255,255,255,0.45)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Scrollbar Thumb Active",oninput:function(t){document.body.style.setProperty("--scrollbar-thumb-active",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-thumb-active")||"rgba(255,255,255,0.55)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Window Button",oninput:function(t){document.body.style.setProperty("--window-button",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-button")||"#181818";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Window Button Hover",oninput:function(t){document.body.style.setProperty("--window-button-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-button-hover")||"#535353";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Window Button Close",oninput:function(t){document.body.style.setProperty("--window-button-close",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-button-close")||"#cd1a2b";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Font Primary",oninput:function(t){document.body.style.setProperty("--font-primary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-primary")||'Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif';return console.log(t),t}},{type:"text-input",text:"Font Display",oninput:function(t){document.body.style.setProperty("--font-display",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-display")||'Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif';return console.log(t),t}},{type:"text-input",text:"Text Primary",oninput:function(t){document.body.style.setProperty("--text-primary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text-primary")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Text Secondary",oninput:function(t){document.body.style.setProperty("--text-secondary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text-secondary")||"#dcddde";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Spotify Discord")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--accent-color",document.body.style.getPropertyValue("--accent-color")],["--accent-hover",document.body.style.getPropertyValue("--accent-hover")],["--accent-rgb",document.body.style.getPropertyValue("--accent-rgb")],["--accent-text-color",document.body.style.getPropertyValue("--accent-text-color")],["--chat-color",document.body.style.getPropertyValue("--chat-color")],["--chat-box-color",document.body.style.getPropertyValue("--chat-box-color")],["--sidebar-color",document.body.style.getPropertyValue("--sidebar-color")],["--sidebar-panel",document.body.style.getPropertyValue("--sidebar-panel")],["--title-bar",document.body.style.getPropertyValue("--title-bar")],["--sticky-header",document.body.style.getPropertyValue("--sticky-header")],["--sticky-header-border",document.body.style.getPropertyValue("--sticky-header-border")],["--bar-color",document.body.style.getPropertyValue("--bar-color")],["--bar-border-color",document.body.style.getPropertyValue("--bar-border-color")],["--bar-size",document.body.style.getPropertyValue("--bar-size")],["--popout-color",document.body.style.getPropertyValue("--popout-color")],["--popout-radius",document.body.style.getPropertyValue("--popout-radius")],["--popout-radius-small",document.body.style.getPropertyValue("--popout-radius-small")],["--input-bg",document.body.style.getPropertyValue("--input-bg")],["--input-text-color",document.body.style.getPropertyValue("--input-text-color")],["--input-placeholder-color",document.body.style.getPropertyValue("--input-placeholder-color")],["--title-custom",document.body.style.getPropertyValue("--title-custom")],["--main-color",document.body.style.getPropertyValue("--main-color")],["--alt-accent",document.body.style.getPropertyValue("--alt-accent")],["--alt-accent-text-color",document.body.style.getPropertyValue("--alt-accent-text-color")],["--alert-color",document.body.style.getPropertyValue("--alert-color")],["--alert-hover",document.body.style.getPropertyValue("--alert-hover")],["--card-color",document.body.style.getPropertyValue("--card-color")],["--card-color-hover",document.body.style.getPropertyValue("--card-color-hover")],["--card-border",document.body.style.getPropertyValue("--card-border")],["--card-radius",document.body.style.getPropertyValue("--card-radius")],["--menu-hover-color",document.body.style.getPropertyValue("--menu-hover-color")],["--menu-select-color",document.body.style.getPropertyValue("--menu-select-color")],["--menu-border-color",document.body.style.getPropertyValue("--menu-border-color")],["--menu-text-color",document.body.style.getPropertyValue("--menu-text-color")],["--input-color",document.body.style.getPropertyValue("--input-color")],["--input-radius",document.body.style.getPropertyValue("--input-radius")],["--select-input-color",document.body.style.getPropertyValue("--select-input-color")],["--button-background",document.body.style.getPropertyValue("--button-background")],["--button-border",document.body.style.getPropertyValue("--button-border")],["--button-border-hover",document.body.style.getPropertyValue("--button-border-hover")],["--button-text-color",document.body.style.getPropertyValue("--button-text-color")],["--button-scale",document.body.style.getPropertyValue("--button-scale")],["--list-item-default",document.body.style.getPropertyValue("--list-item-default")],["--list-item-hover",document.body.style.getPropertyValue("--list-item-hover")],["--list-item-select",document.body.style.getPropertyValue("--list-item-select")],["--slider-color",document.body.style.getPropertyValue("--slider-color")],["--attachment-color",document.body.style.getPropertyValue("--attachment-color")],["--tooltip-font-size",document.body.style.getPropertyValue("--tooltip-font-size")],["--tooltip-padding",document.body.style.getPropertyValue("--tooltip-padding")],["--default-shadow",document.body.style.getPropertyValue("--default-shadow")],["--scrollbar-thumb",document.body.style.getPropertyValue("--scrollbar-thumb")],["--scrollbar-thumb-hover",document.body.style.getPropertyValue("--scrollbar-thumb-hover")],["--scrollbar-thumb-active",document.body.style.getPropertyValue("--scrollbar-thumb-active")],["--window-button",document.body.style.getPropertyValue("--window-button")],["--window-button-hover",document.body.style.getPropertyValue("--window-button-hover")],["--window-button-close",document.body.style.getPropertyValue("--window-button-close")],["--font-primary",document.body.style.getPropertyValue("--font-primary")],["--font-display",document.body.style.getPropertyValue("--font-display")],["--text-primary",document.body.style.getPropertyValue("--text-primary")],["--text-secondary",document.body.style.getPropertyValue("--text-secondary")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default