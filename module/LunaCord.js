parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,o,t,r,e,a,i){try{var c=n[a](i),d=c.value}catch(u){return void t(u)}c.done?o(d):Promise.resolve(d).then(r,e)}function o(o){return function(){var t=this,r=arguments;return new Promise(function(e,a){var i=o.apply(t,r);function c(o){n(i,e,a,c,d,"next",o)}function d(o){n(i,e,a,c,d,"throw",o)}c(void 0)})}}var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var n=o(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode('/* Shamelessly stolen font faces */\n@font-face {\n  font-family: "Pixelated MS Sans Serif";\n  src: url(https://botoxparty.github.io/XP.css/ms_sans_serif.woff) format("woff");\n  src: url(https://botoxparty.github.io/XP.css/ms_sans_serif.woff2) format("woff2");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Pixelated MS Sans Serif";\n  src: url(https://botoxparty.github.io/XP.css/ms_sans_serif_bold.woff) format("woff");\n  src: url(https://botoxparty.github.io/XP.css/ms_sans_serif_bold.woff2) format("woff2");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Perfect DOS VGA 437 Win";\n  src: url(https://botoxparty.github.io/XP.css/PerfectDOSVGA437Win.woff) format("woff");\n  src: url(https://botoxparty.github.io/XP.css/PerfectDOSVGA437Win.woff2) format("woff2");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --lunacord-blue: #245edc;\n  --lunacord-white: #fff;\n  --lunacord-background-cream: #efecde;\n  --lunacord-background-blue: #d3e5fa;\n  --lunacord-black: #222;\n  --lunacord-blue-gradient: linear-gradient(180deg,\n          #0997ff,\n          #0053ee 8%,\n          #0050ee 40%,\n          #06f 88%,\n          #06f 93%,\n          #005bff 95%,\n          #003dd7 96%,\n          #003dd7);\n  --lunacord-button-gradient: linear-gradient(180deg,\n          #fff,\n          #ecebe5 86%,\n          #d8d0c4);\n  --lunacord-button-active-gradient: linear-gradient(180deg,\n          #cdcac3,\n          #e3e3db 8%,\n          #e5e5de 94%,\n          #f2f2f1);\n  --lunacord-button-boxshadow: inset -1px 1px #fff0cf, inset 1px 2px #fdd889,\n      inset -2px 2px #fbc761, inset 2px -2px #e5a01a;\n  --lunacord-checkbox-gradient: linear-gradient(135deg, #dcdcd7, #fff);\n  --lunacord-checkbox-boxshadow: inset -2px -2px #f8b636,\n      inset 2px 2px #fedf9c;\n  --text-colour: var(--lunacord-black);\n  /* Background */\n  --background-primary: var(--lunacord-white);\n  --background-secondary: var(--lunacord-background-cream);\n  --background-secondary-alt: #f6f5ee;\n  --background-tertiary: var(--lunacord-background-blue);\n}\n\n.theme-dark {\n  /* Background */\n  --background-primary: black;\n  --background-secondary: #101321;\n  --background-secondary-alt: #090a11;\n  --background-tertiary: #05182e;\n  --lunacord-button-gradient: linear-gradient(180deg,\n          #000,\n          #1b1a13 86%,\n          #3a3227);\n  --lunacord-button-active-gradient: linear-gradient(180deg,\n          #3d3a33,\n          #25251d 8%,\n          #22221b 94%,\n          #0d0d0c);\n  --text-colour: var(--lunacord-white);\n}\n\n.contents-18-Yxp {\n  color: var(--text-colour);\n}\n\n/* Font */\n::placeholder,\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: "Pixelated MS Sans Serif" !important;\n}\n\n.markup-2BOw-jcode,\n.inlineCode-2ngu6Y,\ncode * {\n  font-family: "Perfect DOS VGA 437 Win" !important;\n}\n\n.container-1r6BKw.themed-ANHk51 {\n  background: var(--background-secondary);\n}\n\n.theme-dark .iconWrapper-2OrFZ1 path[fill=currentColor] {\n  fill: var(--lunacord-white);\n}\n.theme-dark .title-29uC1r,\n.theme-dark .topic-TCb_qw.expandable-9fI_e3 {\n  color: var(--lunacord-white);\n}\n.theme-dark .divider-3FBTu8 {\n  background-color: var(--lunacord-white);\n}\n.theme-dark .name-1jkAdW,\n.theme-dark .tierTooltipTitle-3AtaZT {\n  color: var(--lunacord-white);\n}\n.theme-dark .button-1w5pas path[stroke=currentColor] {\n  stroke: var(--lunacord-white);\n}\n\n.theme-light .iconWrapper-2OrFZ1 path[fill=currentColor] {\n  fill: var(--lunacord-black);\n}\n.theme-light .title-29uC1r,\n.theme-light .topic-TCb_qw.expandable-9fI_e3 {\n  color: var(--lunacord-black);\n}\n.theme-light .divider-3FBTu8 {\n  background-color: var(--lunacord-black);\n}\n.theme-light .name-1jkAdW,\n.theme-light .tierTooltipTitle-3AtaZT {\n  color: var(--lunacord-black);\n}\n.theme-light .button-1w5pas path[stroke=currentColor] {\n  stroke: var(--lunacord-black);\n}\n\n/* Explore, Add server buttons, Discord logo, pill */\n.circleIconButton-jET_ig,\n.wrapper-1BJsBx .childWrapper-anI2G9 {\n  background-color: var(--background-secondary);\n  color: var(--lunacord-blue);\n}\n\n.circleIconButton-jET_ig.selected-ugP_am {\n  color: var(--lunacord-white);\n  background-color: var(--lunacord-blue);\n}\n\n.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9,\n.wrapper-1BJsBx:hover .childWrapper-anI2G9 {\n  color: var(--lunacord-white);\n  background-color: var(--lunacord-blue);\n}\n\n.pill-31IEus span {\n  background-color: var(--lunacord-blue);\n}\n\n/* Settings, Mute, Deafen buttons */\n.button-14-BFJ:hover {\n  box-shadow: inset -1px 1px #fff0cf, inset 1px 2px #fdd889, inset -2px 2px #fbc761, inset 2px -2px #e5a01a;\n}\n\n.button-14-BFJ {\n  background: var(--lunacord-button-gradient);\n  border: 1px solid #003c74;\n  width: 30px;\n  height: 30px;\n  margin: 2px;\n}\n\n.button-14-BFJ:active {\n  box-shadow: none;\n  background: var(--lunacord-button-active-gradient);\n}\n\n/* Chatbox */\n.scrollableContainer-2NUZem,\n.container-2fRDfG {\n  border-radius: 0;\n  background-color: var(--background-primary);\n}\n\n.form-2fGMdU {\n  background-color: var(--background-secondary);\n  padding-top: 10px;\n}\n\n.form-2fGMdU:before {\n  display: none;\n}\n\n.container-2fRDfG {\n  border-bottom: solid 1px gray;\n}\n\n/* Buttons */\n.app-2rEoOp button:not(.button-14-BFJ):not(.rtcConnectionStatusLabel-1wk4tH),\n.lookFilled-1Gx00P,\n.lookOutlined-3sRXeN {\n  border: 1px solid #003c74 !important;\n  height: 32px;\n  margin: 7px;\n  margin-top: 7px;\n  margin-right: 7px;\n  margin-bottom: 7px;\n  margin-left: 0;\n  color: var(--lunacord-black);\n}\n\n.app-2rEoOp button:not(.button-14-BFJ):not(.rtcConnectionStatusLabel-1wk4tH):not(.accountBtnInner-sj5jLs),\n.lookFilled-1Gx00P,\n.lookOutlined-3sRXeN {\n  background: var(--lunacord-button-gradient);\n}\n\n.app-2rEoOp button:not(.button-14-BFJ):not(.rtcConnectionStatusLabel-1wk4tH):active,\n.lookFilled-1Gx00P:active,\n.lookOutlined-3sRXeN:active,\n.navButtonActive-1MkytQ {\n  box-shadow: none;\n  background: var(--lunacord-button-active-gradient) !important;\n}\n\n.app-2rEoOp button:not(.button-14-BFJ):not(.rtcConnectionStatusLabel-1wk4tH):hover,\n.lookFilled-1Gx00P:hover,\n.lookOutlined-3sRXeN:hover {\n  box-shadow: var(--lunacord-button-boxshadow);\n}\n\n.attachButton-2WznTc {\n  padding: 3px;\n}\n\n.app-2rEoOp button.lookLink-9FtZy-.colorLink-35jkBc {\n  margin-left: 7px;\n}\n\n.lookLink-9FtZy-.colorPrimary-3b3xI6 {\n  color: var(--lunacord-black) !important;\n}\n\n.lookOutlined-3sRXeN.colorRed-1TFJan,\n.lookFilled-1Gx00P.colorRed-1TFJan {\n  color: red !important;\n}\n\n.lookFilled-1Gx00P,\n.lookOutlined-3sRXeN {\n  color: var(--lunacord-black) !important;\n}\n\nbutton[aria-label="Jump to last unread message"] {\n  border: none !important;\n  color: white !important;\n}\n\n/* Please CSS gods forgive me for this selector */\nform .flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6 button {\n  margin-top: 0;\n}\n\n/* Settings inputs */\n.input-cIJ7To {\n  border: none;\n  border-radius: 0;\n  color: var(--lunacord-black);\n  background-color: var(--lunacord-white);\n}\n\n/* Settings general stuff */\n.contentRegionScroller-26nc1e {\n  background-color: var(--background-secondary);\n}\n\n.sidebarRegionScroller-3MXcoP {\n  background-color: var(--background-tertiary);\n}\n\n.cardPrimaryOutline-29Ujqw,\n.connection-1fbD7X {\n  background-color: var(--background-primary);\n}\n\n/* Settings close icon */\n.container-1sFeqf .closeButton-1tv5uR {\n  border-color: var(--lunacord-black) !important;\n  border-radius: 3px;\n  border-width: 1px;\n  background: var(--lunacord-button-gradient);\n}\n\n.container-1sFeqf .closeButton-1tv5uR:hover {\n  box-shadow: var(--lunacord-button-boxshadow);\n}\n\n.container-1sFeqf .closeButton-1tv5uR:active {\n  background: var(--lunacord-button-active-gradient);\n}\n\n.container-1sFeqf .closeButton-1tv5uR path {\n  stroke: var(--lunacord-black);\n}\n\n.container-1sFeqf .keybind-KpFkfr {\n  color: var(--lunacord-black);\n}\n\n/* Enforce text colour - Improve contrast on Discord Nitro button */\n.theme-light .side-8zPYf6 .header-2RyJ0Y,\n.theme-light .side-8zPYf6 .item-PXvHYJ {\n  color: var(--lunacord-black) !important;\n}\n\n/* Mic test caption too high up */\n.micTestCaption-2xsa4I {\n  top: 35px;\n}\n\n/* Dropdowns */\n.css-x3hllb-control,\n.css-1ou54ee-control,\n.css-z86t1q-control {\n  background-color: var(--lunacord-white);\n}\n\n/* Radio Buttons */\n.radioBar-bMNUI- svg {\n  background: var(--lunacord-checkbox-gradient);\n  border-radius: 50%;\n  border: 1px solid #1d5281;\n  width: 18px;\n  height: 18px;\n}\n\n.radioBar-bMNUI-:hover svg {\n  box-shadow: var(--lunacord-checkbox-boxshadow);\n}\n\n.radioBar-bMNUI-:active svg {\n  background: var(--lunacord-button-active-gradient);\n}\n\n.radioBar-bMNUI- svg path {\n  display: none;\n}\n\n.radioBar-bMNUI- svg circle {\n  color: #249624;\n}\n\n/* Emoji picker fixes */\n.navList-2UtuhC[aria-label="Expression Picker"] {\n  margin-top: -0.5rem;\n}\n\n.navList-2UtuhC[aria-label="Expression Picker"] button {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n/* Window chrome */\n.wordmark-2iDDfm path {\n  fill: var(--lunacord-white);\n}\n\n.wordmark-2iDDfm {\n  top: calc(((21px + 3px) - 18px) / 2);\n}\n\n.winButton-iRh8-Z {\n  top: 0;\n  width: 21px;\n  height: 21px;\n  margin-left: 2px;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  box-shadow: none;\n  border: none;\n  background-color: transparent !important;\n  padding: 0;\n  display: block;\n  border-radius: 3px;\n  box-shadow: inset -1px -1px var(--lunacord-white), inset 1px 1px var(--lunacord-white);\n}\n\n.winButton-iRh8-Z svg {\n  visibility: hidden;\n}\n\n.winButton-iRh8-Z[aria-label=Close] {\n  background-image: url("https://raw.githubusercontent.com/cainy-a/LunaCord/master/assets/close.svg");\n}\n[vizality] .winButton-iRh8-Z[aria-label=Close] {\n  background-image: url("vz-theme://LunaCord/assets/close.svg");\n}\n\n.winButton-iRh8-Z[aria-label=Close]:hover {\n  background-image: url("https://raw.githubusercontent.com/cainy-a/LunaCord/master/assets/close-hover.svg");\n}\n[vizality] .winButton-iRh8-Z[aria-label=Close]:hover {\n  background-image: url("vz-theme://LunaCord/assets/close-hover.svg");\n}\n\n.winButton-iRh8-Z[aria-label=Maximize] {\n  background-image: url("https://raw.githubusercontent.com/cainy-a/LunaCord/master/assets/maximize.svg");\n}\n[vizality] .winButton-iRh8-Z[aria-label=Maximize] {\n  background-image: url("vz-theme://LunaCord/assets/maximize.svg");\n}\n\n.winButton-iRh8-Z[aria-label=Maximize]:hover {\n  background-image: url("https://raw.githubusercontent.com/cainy-a/LunaCord/master/assets/maximize-hover.svg");\n}\n[vizality] .winButton-iRh8-Z[aria-label=Maximize]:hover {\n  background-image: url("vz-theme://LunaCord/assets/maximize-hover.svg");\n}\n\n.winButton-iRh8-Z[aria-label=Minimize] {\n  background-image: url("https://raw.githubusercontent.com/cainy-a/LunaCord/master/assets/minimize.svg");\n}\n[vizality] .winButton-iRh8-Z[aria-label=Minimize] {\n  background-image: url("vz-theme://LunaCord/assets/minimize.svg");\n}\n\n.winButton-iRh8-Z[aria-label=Minimize]:hover {\n  background-image: url("https://raw.githubusercontent.com/cainy-a/LunaCord/master/assets/minimize-hover.svg");\n}\n[vizality] .winButton-iRh8-Z[aria-label=Minimize]:hover {\n  background-image: url("vz-theme://LunaCord/assets/minimize-hover.svg");\n}\n\n.typeWindows-1za-n7 {\n  background: var(--lunacord-blue-gradient);\n  border-top: 1px solid #0831d9;\n  border-right: 1px solid #001ea0;\n  margin-top: 0;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 7px;\n  height: 21px;\n  padding: 3px 5px 3px 3px;\n}\n\n[vz-window=maximized] .typeWindows-1za-n7 {\n  border-radius: 0;\n}\n\n/* Go away */\n.children-19S4PO::after {\n  visibility: hidden;\n}\n\n/* Make user area less jank */\n.form-2fGMdU {\n  background-color: var(--background-secondary-alt);\n}\n\n.panels-j1Uci_ {\n  background-color: var(--background-secondary);\n}\n\n/* Make window buttons not look disgusting at lower zooms */\n.typeWindows-1za-n7 {\n  --window-chrome-size: calc(21px / 0.8);\n  height: var(--window-chrome-size);\n}\n\n.winButton-iRh8-Z {\n  width: var(--window-chrome-size);\n  height: var(--window-chrome-size);\n}\n\n.winButton-iRh8-Z {\n  box-shadow: none;\n}\n\n.wordmark-2iDDfm {\n  top: calc(((var(--window-chrome-size) + 3px) - 18px) / 2);\n}\n\n.wordmark-2iDDfm svg {\n  zoom: calc(1 + (1 - 0.8) / 2);\n}\n\n.menu-3sdvDG {\n  border-radius: 0;\n  background-color: var(--background-primary);\n}\n\n.menu-3sdvDG .scroller-3BxosC {\n  padding-left: 5px;\n  margin-right: -2px;\n}\n\n.menu-3sdvDG .item-1tOPte {\n  padding: 3px;\n  min-height: 0;\n  border-radius: 0;\n  color: var(--text-colour);\n}\n\n.menu-3sdvDG .item-1tOPte.focused-3afm-j {\n  background-color: #5D7CBC;\n  color: var(--lunacord-white);\n}\n\n.menu-3sdvDG .item-1tOPte:not(#guild-header-popout-hide-muted-channels) svg {\n  visibility: hidden;\n}\n\n.menu-3sdvDG .separator-2I32lJ {\n  border-color: gray;\n  left: -3px;\n  margin: 0;\n}\n\n.menu-3sdvDG .button-F9qN4n,\n.menu-3sdvDG .customItem-a8hq58 {\n  border-radius: 0;\n  width: 20px;\n  height: 20px;\n  background-color: transparent;\n}\n\n.menu-3sdvDG .customItem-a8hq58 {\n  margin-bottom: 0.2rem;\n}\n\n.menu-3sdvDG .button-F9qN4n:hover {\n  background-color: #5D7CBC;\n}\n\n.powercord.maximized .typeWindows-1za-n7 {\n  border-radius: 0;\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("LunaCord",["",{type:"text-and-color",text:"Lunacord Blue",oninput:function(n){document.body.style.setProperty("--lunacord-blue",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--lunacord-blue")||"#245edc";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-input",text:"Lunacord White",oninput:function(n){document.body.style.setProperty("--lunacord-white",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--lunacord-white")||"#fff";return console.log(n),n}},{type:"text-and-color",text:"Lunacord Background Cream",oninput:function(n){document.body.style.setProperty("--lunacord-background-cream",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--lunacord-background-cream")||"#efecde";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Lunacord Background Blue",oninput:function(n){document.body.style.setProperty("--lunacord-background-blue",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--lunacord-background-blue")||"#d3e5fa";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-input",text:"Lunacord Black",oninput:function(n){document.body.style.setProperty("--lunacord-black",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--lunacord-black")||"#222";return console.log(n),n}},{type:"text-and-color",text:"Lunacord Checkbox Gradient",oninput:function(n){document.body.style.setProperty("--lunacord-checkbox-gradient",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--lunacord-checkbox-gradient")||"linear-gradient(135deg, #dcdcd7, #fff)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-input",text:"Window Chrome Size",oninput:function(n){document.body.style.setProperty("--window-chrome-size",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--window-chrome-size")||"calc(21px / 0.8)";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=o(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.remove();try{goosemodScope.settings.removeItem("LunaCord")}catch(o){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=o(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--lunacord-blue",document.body.style.getPropertyValue("--lunacord-blue")],["--lunacord-white",document.body.style.getPropertyValue("--lunacord-white")],["--lunacord-background-cream",document.body.style.getPropertyValue("--lunacord-background-cream")],["--lunacord-background-blue",document.body.style.getPropertyValue("--lunacord-background-blue")],["--lunacord-black",document.body.style.getPropertyValue("--lunacord-black")],["--lunacord-checkbox-gradient",document.body.style.getPropertyValue("--lunacord-checkbox-gradient")],["--window-chrome-size",document.body.style.getPropertyValue("--window-chrome-size")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=o(regeneratorRuntime.mark(function n(o){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(o){return n.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default