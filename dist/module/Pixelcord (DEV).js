parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,o,r,i,a){try{var u=t[i](a),l=u.value}catch(d){return void n(d)}u.done?e(l):Promise.resolve(l).then(o,r)}function e(e){return function(){var n=this,o=arguments;return new Promise(function(r,i){var a=e.apply(n,o);function u(e){t(a,r,i,u,l,"next",e)}function l(e){t(a,r,i,u,l,"throw",e)}u(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('/*\n    SETTINGS\n*/\n/* Enhancements | Modal Blur (blurs the black tinted background behind modals like image previews if enabled) */\n/* @import url(https://hekkerstech.tips/pixelcord/modules/enhancements/background_blur.css); */\n/*\n    MODULES\n*/\n/* Add-Ons | Discolored - Colorize Discord\'s boring SVGs! */\n@import url("https://nyri4.github.io/Discolored/main.css");\n/* Add-Ons | Google Emojis */\n@import url("https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/base/Google.css");\n/* Add-Ons | BadgesEverywhere (CORE) - Add animated badges everywhere */\n@import url(https://mr-miner1.github.io/Better-Badges/src/BadgesEverywhere.css);\n/* Add-Ons | BadgesEverywhere - Colored Badges */\n@import url(https://mr-miner1.github.io/Better-Badges/src/coloredbadges.css);\n/* Add-Ons | BadgesEverywhere - White Badges */\n/* @import url(https://mr-miner1.github.io/Better-Badges/src/whitebadges/whitebadges.css); */\n/*\n    DO NOT REMOVE\n*/\n@import url(https://hekkerstech.tips/pixelcord/dist.css);\n/*\n    VARIABLES\n*/\n[data-popout-root].newBrand,\nhtml.newBrand,\n:root {\n  --snackbar-bg: #333;\n  --snackbar-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%);\n  --snackbar-radius: 4px;\n  --snackbar-height: 32px;\n  --snackbar-padding: 14px 16px;\n  --switch-knob-color: #ECECEC;\n  --switch-slider-color: rgba(135, 135, 135,0.65);\n  --button-radius: 4px;\n  --background-blur-intensity: 10px;\n  --header-weight: 600;\n  --subtitle-weight: 500;\n  --section-weight: 900;\n  --font-header: "Google Sans", "Migu 1M", sans-serif;\n  --font-code: "Roboto Mono", monospace;\n  --font-primary: var(--font-header);\n  --font-secondary: var(--font-header);\n  --font-display: var(--font-header);\n  --card-padding: 12px;\n  --channels-width: 300px;\n  --pip-width: 320px;\n  --pip-radius: 12px;\n  --tooltip-bg: #2a2a2a;\n  --tooltip-text: #ffffff;\n  --checkbox-size: 15px;\n  --settings-list-width: 316px;\n  --settings-padding: 8px;\n  --mouseX: 0px;\n  --mouseY: 0px;\n}\n\n.theme-light {\n  --accent: var(--primary-700);\n  --accent-highlight: var(--primary-500);\n  --accent-text: white;\n  --text-semidark: rgb(149, 149, 149);\n  --baseline: #f8f9fa;\n  --chip: #D7D7D7;\n  --chip-active: #D7D7D7;\n  --chip-text: #363536;\n  --navdrawer-color: white;\n  --navdrawer-hover: rgba(0, 0, 0, 0.05);\n  --navdrawer-active: rgba(0, 0, 0, 0.1);\n  --navdrawer-separator: rgba(0, 0, 0, 0.1);\n  --combobox-outline: rgba(0, 0, 0, 0.1);\n  --title-color: #606060;\n  --list-color: #202124;\n  --logo-color: #202124;\n  --header-color: #202124;\n  --interactive-muted: #8f929c;\n  --channels-default: #46494c;\n  --ripple-default: rgba(0, 0, 0, 0.36);\n  --danger: rgb(255, 70, 70);\n  --danger-highlight: rgb(255, 118, 118);\n  --online: #43b581;\n  --idle: #faa61a;\n  --dnd: var(--danger);\n  --stream: #643da7;\n  --offline: #636b75;\n}\n\n.callContainer-36WRfH,\n.theme-dark {\n  --accent: var(--primary-400);\n  --accent-highlight: var(--primary-200);\n  --accent-text: white;\n  --baseline: #272a2b;\n  --chip: #595A5E;\n  --chip-active: #595A5E;\n  --chip-text: white;\n  --navdrawer-color: #222222;\n  --navdrawer-hover: rgba(255, 255, 255, 0.05);\n  --navdrawer-active: rgba(255, 255, 255, 0.1);\n  --navdrawer-separator: rgba(255, 255, 255, 0.1);\n  --combobox-outline: rgba(255, 255, 255, 0.1);\n  --title-color: #aaa;\n  --list-color: #fff;\n  --logo-color: #fff;\n  --header-color: #fff;\n  --interactive-muted: #8f8f8f;\n  --channels-default: #9b9fa5;\n  --ripple-default: rgba(255, 255, 255, 0.36);\n  --danger: rgb(207, 102, 121);\n  --danger-highlight: rgb(255, 118, 118);\n  --online: #66c296;\n  --idle: #fbec52;\n  --dnd: var(--danger);\n  --stream: #9176c1;\n  --offline: #868d96;\n}\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Pixelcord (DEV)",["",{type:"text-input",text:"Snackbar Bg",oninput:function(t){document.body.style.setProperty("--snackbar-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--snackbar-bg")||"#333";return console.log(t),t}},{type:"text-input",text:"Snackbar Shadow",oninput:function(t){document.body.style.setProperty("--snackbar-shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--snackbar-shadow")||"0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)";return console.log(t),t}},{type:"text-input",text:"Snackbar Radius",oninput:function(t){document.body.style.setProperty("--snackbar-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--snackbar-radius")||"4px";return console.log(t),t}},{type:"text-input",text:"Snackbar Height",oninput:function(t){document.body.style.setProperty("--snackbar-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--snackbar-height")||"32px";return console.log(t),t}},{type:"text-input",text:"Snackbar Padding",oninput:function(t){document.body.style.setProperty("--snackbar-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--snackbar-padding")||"14px 16px";return console.log(t),t}},{type:"text-and-color",text:"Switch Knob Color",oninput:function(t){document.body.style.setProperty("--switch-knob-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--switch-knob-color")||"#ECECEC";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Switch Slider Color",oninput:function(t){document.body.style.setProperty("--switch-slider-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--switch-slider-color")||"rgba(135, 135, 135,0.65)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Button Radius",oninput:function(t){document.body.style.setProperty("--button-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-radius")||"4px";return console.log(t),t}},{type:"text-input",text:"Background Blur Intensity",oninput:function(t){document.body.style.setProperty("--background-blur-intensity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-blur-intensity")||"10px";return console.log(t),t}},{type:"text-input",text:"Header Weight",oninput:function(t){document.body.style.setProperty("--header-weight",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--header-weight")||"600";return console.log(t),t}},{type:"text-input",text:"Subtitle Weight",oninput:function(t){document.body.style.setProperty("--subtitle-weight",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--subtitle-weight")||"500";return console.log(t),t}},{type:"text-input",text:"Section Weight",oninput:function(t){document.body.style.setProperty("--section-weight",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--section-weight")||"900";return console.log(t),t}},{type:"text-input",text:"Font Header",oninput:function(t){document.body.style.setProperty("--font-header",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-header")||'"Google Sans", "Migu 1M", sans-serif';return console.log(t),t}},{type:"text-input",text:"Font Code",oninput:function(t){document.body.style.setProperty("--font-code",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-code")||'"Roboto Mono", monospace';return console.log(t),t}},{type:"text-input",text:"Card Padding",oninput:function(t){document.body.style.setProperty("--card-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-padding")||"12px";return console.log(t),t}},{type:"text-input",text:"Channels Width",oninput:function(t){document.body.style.setProperty("--channels-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channels-width")||"300px";return console.log(t),t}},{type:"text-input",text:"Pip Width",oninput:function(t){document.body.style.setProperty("--pip-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--pip-width")||"320px";return console.log(t),t}},{type:"text-input",text:"Pip Radius",oninput:function(t){document.body.style.setProperty("--pip-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--pip-radius")||"12px";return console.log(t),t}},{type:"text-and-color",text:"Tooltip Bg",oninput:function(t){document.body.style.setProperty("--tooltip-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-bg")||"#2a2a2a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Tooltip Text",oninput:function(t){document.body.style.setProperty("--tooltip-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-text")||"#ffffff";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Checkbox Size",oninput:function(t){document.body.style.setProperty("--checkbox-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--checkbox-size")||"15px";return console.log(t),t}},{type:"text-input",text:"Settings List Width",oninput:function(t){document.body.style.setProperty("--settings-list-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-list-width")||"316px";return console.log(t),t}},{type:"text-input",text:"Settings Padding",oninput:function(t){document.body.style.setProperty("--settings-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-padding")||"8px";return console.log(t),t}},{type:"text-input",text:"Mousex",oninput:function(t){document.body.style.setProperty("--mouseX",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mouseX")||"0px";return console.log(t),t}},{type:"text-input",text:"Mousey",oninput:function(t){document.body.style.setProperty("--mouseY",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mouseY")||"0px";return console.log(t),t}},{type:"text-input",text:"Accent Text",oninput:function(t){document.body.style.setProperty("--accent-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-text")||"white";return console.log(t),t}},{type:"text-and-color",text:"Text Semidark",oninput:function(t){document.body.style.setProperty("--text-semidark",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text-semidark")||"rgb(149, 149, 149)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Baseline",oninput:function(t){document.body.style.setProperty("--baseline",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--baseline")||"#f8f9fa";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Chip",oninput:function(t){document.body.style.setProperty("--chip",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chip")||"#D7D7D7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Chip Active",oninput:function(t){document.body.style.setProperty("--chip-active",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chip-active")||"#D7D7D7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Chip Text",oninput:function(t){document.body.style.setProperty("--chip-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chip-text")||"#363536";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Navdrawer Color",oninput:function(t){document.body.style.setProperty("--navdrawer-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--navdrawer-color")||"white";return console.log(t),t}},{type:"text-and-color",text:"Navdrawer Hover",oninput:function(t){document.body.style.setProperty("--navdrawer-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--navdrawer-hover")||"rgba(0, 0, 0, 0.05)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Navdrawer Active",oninput:function(t){document.body.style.setProperty("--navdrawer-active",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--navdrawer-active")||"rgba(0, 0, 0, 0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Navdrawer Separator",oninput:function(t){document.body.style.setProperty("--navdrawer-separator",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--navdrawer-separator")||"rgba(0, 0, 0, 0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Combobox Outline",oninput:function(t){document.body.style.setProperty("--combobox-outline",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--combobox-outline")||"rgba(0, 0, 0, 0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Title Color",oninput:function(t){document.body.style.setProperty("--title-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--title-color")||"#606060";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"List Color",oninput:function(t){document.body.style.setProperty("--list-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--list-color")||"#202124";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Logo Color",oninput:function(t){document.body.style.setProperty("--logo-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--logo-color")||"#202124";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Header Color",oninput:function(t){document.body.style.setProperty("--header-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--header-color")||"#202124";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Ripple Default",oninput:function(t){document.body.style.setProperty("--ripple-default",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--ripple-default")||"rgba(0, 0, 0, 0.36)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Danger",oninput:function(t){document.body.style.setProperty("--danger",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--danger")||"rgb(255, 70, 70)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Danger Highlight",oninput:function(t){document.body.style.setProperty("--danger-highlight",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--danger-highlight")||"rgb(255, 118, 118)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Online",oninput:function(t){document.body.style.setProperty("--online",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--online")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Idle",oninput:function(t){document.body.style.setProperty("--idle",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--idle")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Stream",oninput:function(t){document.body.style.setProperty("--stream",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--stream")||"#643da7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Offline",oninput:function(t){document.body.style.setProperty("--offline",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--offline")||"#636b75";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Pixelcord (DEV)")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--snackbar-bg",document.body.style.getPropertyValue("--snackbar-bg")],["--snackbar-shadow",document.body.style.getPropertyValue("--snackbar-shadow")],["--snackbar-radius",document.body.style.getPropertyValue("--snackbar-radius")],["--snackbar-height",document.body.style.getPropertyValue("--snackbar-height")],["--snackbar-padding",document.body.style.getPropertyValue("--snackbar-padding")],["--switch-knob-color",document.body.style.getPropertyValue("--switch-knob-color")],["--switch-slider-color",document.body.style.getPropertyValue("--switch-slider-color")],["--button-radius",document.body.style.getPropertyValue("--button-radius")],["--background-blur-intensity",document.body.style.getPropertyValue("--background-blur-intensity")],["--header-weight",document.body.style.getPropertyValue("--header-weight")],["--subtitle-weight",document.body.style.getPropertyValue("--subtitle-weight")],["--section-weight",document.body.style.getPropertyValue("--section-weight")],["--font-header",document.body.style.getPropertyValue("--font-header")],["--font-code",document.body.style.getPropertyValue("--font-code")],["--card-padding",document.body.style.getPropertyValue("--card-padding")],["--channels-width",document.body.style.getPropertyValue("--channels-width")],["--pip-width",document.body.style.getPropertyValue("--pip-width")],["--pip-radius",document.body.style.getPropertyValue("--pip-radius")],["--tooltip-bg",document.body.style.getPropertyValue("--tooltip-bg")],["--tooltip-text",document.body.style.getPropertyValue("--tooltip-text")],["--checkbox-size",document.body.style.getPropertyValue("--checkbox-size")],["--settings-list-width",document.body.style.getPropertyValue("--settings-list-width")],["--settings-padding",document.body.style.getPropertyValue("--settings-padding")],["--mouseX",document.body.style.getPropertyValue("--mouseX")],["--mouseY",document.body.style.getPropertyValue("--mouseY")],["--accent-text",document.body.style.getPropertyValue("--accent-text")],["--text-semidark",document.body.style.getPropertyValue("--text-semidark")],["--baseline",document.body.style.getPropertyValue("--baseline")],["--chip",document.body.style.getPropertyValue("--chip")],["--chip-active",document.body.style.getPropertyValue("--chip-active")],["--chip-text",document.body.style.getPropertyValue("--chip-text")],["--navdrawer-color",document.body.style.getPropertyValue("--navdrawer-color")],["--navdrawer-hover",document.body.style.getPropertyValue("--navdrawer-hover")],["--navdrawer-active",document.body.style.getPropertyValue("--navdrawer-active")],["--navdrawer-separator",document.body.style.getPropertyValue("--navdrawer-separator")],["--combobox-outline",document.body.style.getPropertyValue("--combobox-outline")],["--title-color",document.body.style.getPropertyValue("--title-color")],["--list-color",document.body.style.getPropertyValue("--list-color")],["--logo-color",document.body.style.getPropertyValue("--logo-color")],["--header-color",document.body.style.getPropertyValue("--header-color")],["--ripple-default",document.body.style.getPropertyValue("--ripple-default")],["--danger",document.body.style.getPropertyValue("--danger")],["--danger-highlight",document.body.style.getPropertyValue("--danger-highlight")],["--online",document.body.style.getPropertyValue("--online")],["--idle",document.body.style.getPropertyValue("--idle")],["--stream",document.body.style.getPropertyValue("--stream")],["--offline",document.body.style.getPropertyValue("--offline")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default