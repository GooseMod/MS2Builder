parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,t,o,e,r,a,i){try{var c=n[a](i),u=c.value}catch(s){return void o(s)}c.done?t(u):Promise.resolve(u).then(e,r)}function t(t){return function(){var o=this,e=arguments;return new Promise(function(r,a){var i=t.apply(o,e);function c(t){n(i,r,a,c,u,"next",t)}function u(t){n(i,r,a,c,u,"throw",t)}c(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={goosemodHandlers:{onImport:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('/**\n * @name Naive\n * @author Leeprky#2063\n * @version 1.1\n * @description Naive Theme By Leeprky#2063\n * @source https://github.com/leeprky/tobenamedtheme\n*/\n/* ^ betterdiscord ^ */\n\n\n/* NaiveSource */\n@import url(https://raw.githack.com/leeprky/Naive/main/source/naivesource.css);\n@import url(https://discord-custom-covers.github.io/usrbg/dist/usrbg.css);\n\n/* --- */\n\n/* Colors CONFIG */\n\n/* Cherry - Magenta */  \n\n/*\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-cherry.css); \n/* */\n/* - REMOVE (LIGHTMODE)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-cherry-light.css); \n/* */\n\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-cherry-glasscord.css);\n/* */\n\n/* Space - Black */\n/*\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-space.css); \n/* */\n/* - REMOVE (GLASSCORD)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-space-glasscord.css);\n/* */\n\n/* Buzzy - Yellow */ \n/* - REMOVE\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-buzzy.css); \n/* */\n/* - REMOVE (GLASSCORD)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-buzzy-glasscord.css); \n/*\n\n/* Sky - Cyan */ \n/* - REMOVE\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-sky.css);  \n/* */\n/* - REMOVE (GLASSCORD)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-sky-glasscord.css); \n/*\n\n/* Apple - Green */ \n\n/* - REMOVE\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-apple.css);\n/* */\n/* - REMOVE (GLASSCORD)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-apple-glasscord.css);\n/*\n\n/* Hell - Red */ \n/* - REMOVE\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-hell.css);\n/* */\n/* - REMOVE (GLASSCORD)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-hell-glasscord.css);\n/*\n\n/* COLORS PERSONAL - not recommended unless you know what ur doing*/\n/* @import url(\'CUSTOM GITHACK COLOR SCHEME LINK HERE\') */\n/* DELETE FOR MANUAL COLORS (GLASSCORD) \nbody{\n  background-color: transparent;\n}\n\n#app-mount{\nbackground-color: transparent;\nborder-radius: var(--glasscord-blur-corner-radius);\n}\n\n.theme-dark { \n  --alt-color: 114, 137, 218;\n  --spotify-color: #27cc11;\n  --toast-header: #202225de;\n    --background-primary: #23232857;\n    --background-primary-alt: #36393ff0;\n    --background-secondary: #2f313650;\n    --background-secondary2:#18181a25;\n    --background-secondary-chat: #2f3136a0;\n    --background-secondary-alt: #2f313650;\n    --background-secondary-alt2: #2f313600;\n    --background-tertiary: #20222546;\n    --background-logo: #36393fa0;\n    --deprecated-card-bg: #36393f4c;\n    --deprecated-store-bg: #36393f00;\n    --background-attachments: #2f313640;\n    --background-search-bar: #202225a0;\n    --background-switcher: #2f3136ff;\n    --background-chatbox: #20222550;\n    --background-lights-out: #000;\n    --background-pinned: #2f3136ff;\n    --background-profile-expand: #2f3136ff;\n    --background-emoji: #2f3136ff;\n    --text-lights-out: #f0f0f0;\n    --background-titlebar: #2f313650;\n    --scrollbar-auto-thumb: #20222550;\n  };\n.scroller-1Bvpku {\n  background-color: var(--background-secondary2); \n}\n.scroller-1d5FgU {\n  background-color: var(--background-primary);\n}\n::-webkit-scrollbar {\n  display: none;\n}\n.powercord-spotify .spotify-buttons button {\n  color: var(--spotify-color) !important;\n}\n.container-3baos1, .container-3baos1 .avatar-SmRMf2 {\n  background-color: var(--background-secondary-alt2); \n}\n\n/* */\n/* Remove the orange thing when selecting server list etc */   \nul.tree-2wKJdG:focus {\n  outline-color: transparent;\n}\n/* --- */\n/* Glasscord If Enabled In Colors Section */\n:root{\n\t--glasscord-win-blur: blurbehind;\n\t--glasscord-macos-vibrancy: fullscreen-ui;\n\t--glasscord-linux-blur: true;\n\t--glasscord-blur-corner-radius: 20px;\n\t--glasscord-titlebar: windows;\n}\n/* --- */\n\n/* Optionals */\n/* Separate the channels list from the chat box. Option*/\n/* REMOVE LINE */\n.sidebar-2K8pFh, .chat-3bRxxu, .container-3Mxszk, .container-1D34oG, .applicationStore-1pNvnv, .clickable-25tGDB {\n    border-radius: 15px 15px 15px 15px !important;\n    border-color: transparent;\n    left: 5px\n  }\n.platform-win .sidebar-2K8pFh {\n    border-radius: 0px 12px 12px 0px!important;\n}\n.content-98HsJk {\n    background-color: rgba(17, 16, 16, 0);\n    box-shadow: none;\n}\n/* */\n\n/* Modal Popout - Add /* BELOW FOR NONE BIG MODALS */\n:root {\n  --background-secondary3: #262C37;\n}\n.activity-11LB_k, .headerTop-3C2Zn0 {\n  background-color: var(--background-secondary3);\n}\n.theme-dark .body-3iLsc4, .theme-dark .footer-1fjuF6 {\n  background-color: var(--background-secondary3)\n}\n.userPopout-3XzG_A {\n  box-shadow: none;\n}\ndiv[class*="headerPlaying"], div[class*="headerStreaming"] {\n  background-color: var(--alt-color) !important;\n}\n.popout_1188 {\n  border-radius: 12px;\n}\n.rolesList-22qj2L {\n  margin-top: 2px;\n  margin-bottom: 1px;\n}\n\n.note-QfFU8y textarea { display: none; }\n.userInfoSectionHeader-CBvMDh { display: none; }\n.userInfoSection-2acyCx { margin-top: -21px; }\n.body-3ND3kc { height: calc(100% - 167px); }\n\n.bodyTitle-Y0qMQz, .size12-3R0845, .note-3HfJZ5, .protip-YaFfgO {\n  display: none;\n}\n.headerTop-3C2Zn0 {\n  min-height: 250px;\n  padding: 0;\n}\n.headerTop-3C2Zn0 .avatarWrapper-3H_478 {\n  left: 0;\n  bottom: 9px;\n  top: -15px;\n  width: 255px;\n}\n.headerText-2sdzFM {\n  margin-bottom: 5px;\n}\n.customStatus-1bh2V9 {\n  margin-top: 10px;\n}\n.customStatus-1bh2V9 .customStatusEmoji-7MXCgv.customStatusSoloEmoji-XOvnMc {\n  margin-bottom: 15px;\n}\n.customStatusText-3YJeRZ {\n  margin-bottom: 15px;\n}\n.headerTop-3C2Zn0 .avatarWrapper-3H_478 .wrapper-3t9DeA {\n  height: 260px !important;\n  width: 250px !important;\n  left: -4px;\n}\n.avatarHint-1qgaV3 {width: 100%;height: 100%;border-radius: 0;}\n.avatarHintInner-Dco91E {\n  font-size: 0.4em;\n  text-shadow: 1px 1px 3px rgb(221, 221, 221);\n}\n.headerTop-3C2Zn0 foreignObject {mask: none !important;}\n.headerTop-3C2Zn0 rect {\n  border-radius: 0;\n  x: 0; y: 79.25;\n  width: 80px;\n  height: 3px;\n  mask: none;\n}\n.headerText-2sdzFM {padding-bottom: 5px;}\n/* --- */\n\n/* Naive Extras */\n/* memberlist */\n\n/* My Account */\n.background-1QDuV2 {\n  background-color: var(--background-primary);\n}\n/* --- */\n\n}\n.membersWrap-2h-GB4, .members-1998pB {\nleft: 20px;\nmargin-right: 20px;\n}\n.members-1998pB, .members-1998pB>div {\n  background-color: var(--background-secondary3);\n  border-radius: 15px 0px 0px 15px !important;\n}\n/* --- */\n\n/* Naive Extras */\n/* memberlist */\n\n/* My Account */\n.background-1QDuV2 {\n  background-color: var(--background-primary);\n}\n/* --- */\n\n\n/* WindowsInTopBar */\n\n.typeWindows-1za-n7{\n  width:calc(100% - calc(72px + 240px));\n  position: fixed;\n  right: 0px;\n  height:46px;\n  z-index: 2;\n  background: transparent!important;margin:0px;\n}\n.platform-win .children-19S4PO,.platform-win .toolbar-1t6TWx{\n  z-index:1;\n}\n.winButton-iRh8-Z{top:12px;left:-4px;z-index:67438274832798;}\n.wordmarkWindows-1v0lYD{display: none;}\n.platform-win .sidebar-2K8pFh {border-radius: 0px!important;}\n.platform-win .title-3qD0b-{\n  width:calc(100% - 80px);\n}\n\n.titleBar-AC4pGV > *:nth-child(2):hover {background-color: #f771715e;}\n.titleBar-AC4pGV > *:nth-child(3):hover {background-color: #f0ca574f;}\n.titleBar-AC4pGV > *:nth-child(4):hover {background-color: #48c04879;}\n.container-1r6BKw.themed-ANHk51 {\n  background: transparent;\n}\n.notice-3uyY6c, .notice-3bPHh- {\nbackground-color: var(--background-accent);\ntop: 80px;\nopacity: 0.9;\nborder-radius: 0px 0px 12px 12px;\nleft: 240px;\nmargin-right: 494px;\nmargin-top: -35px;\n}\n/* --- */\n\n/* Settings Modal Under Channels Into Server List */\n\n.spotify-buttons {\nwidth: 6em;\nmargin-bottom: -4px;\n}\n.spotify-extra-controls, .spotify-seek-elements {\n  display: none !important;\n}\n.powercord-spotify, .powercord-spotify.hover {\n  height: 57px;\n}\n.powercord-spotify.hover .spotify-extra-controls + .spotify-seek {\n  margin-top:3px !important;\n}\n.powercord-spotify.hover .spotify-seek:not(.no-premium) .spotify-seek-bar {\n  height:2px;\n}\n.spotify-seek-bar-cursor {\n  border:none !important;\n  width:15px;\n  height:15px;\n}\n.spotify-title div:first-child {\n  margin-top:-1px !important;\n  margin-bottom:3px;\n}\n.powercord-spotify {\nbackground-position-x: center;\nbackground-position-y: center;\nborder-radius: 12px 12px 0px 0px; \nbackground-image: var(--spotify-background-image); \nbackground-position: center;\nz-index: 1;\nbackground-size: cover;\n}\n.avatar-SmRMf2 .spotify-cover {\ndisplay: none;\n}\n\n.panels-j1Uci_ {\ntransition: height 0.5s;\nz-index: 902;\nposition: absolute;\nright: 1em;\nbottom: 5em;\nborder-radius: 1em !important;\nwidth: 240px;\n}\n.unreadBar-3t3sYc,\n.animatedContainer-1NSq4T {\nvisibility: hidden;\n}\n.bannerImage-3KhIJ6 {\nopacity: 0;\ntransition: opacity 0.5s;\n}\n.membersWrap-2h-GB4 {\nbackground-color: var(--background-secondary);\nheight: calc(100% - 160px);\ntransition: height 0.5s;\nborder-radius: 1em;\nposition: absolute;\nright: 1em;\ntop: 0.5em;\noverflow: hidden;\n}\n.chatContent-a9vAAp {\nposition: absolute;\nwidth: 100%;\nheight: 100%;\n}\n.newMessagesBar-265mhP,\n.jumpToPresentBar-G1R9s6,\n.divider-3_HH5L {\nwidth: calc(100% - 290px);\n}\n.container-2fRDfG {\nwidth: calc(100% - 260px);\n}\n.message-2qnXI6[role="listitem"] {\nwidth: calc(100% - 365px);\nborder-radius: 1em;\n}\n.searchResultsWrap-3-pOjs {\nz-index: 903;\nheight: calc(100% - 100px);\nposition: absolute;\nright: 1em;\nborder-radius: 1em;\n}\n\n.container-3baos1 .noWrap-3jynv6 {\nwidth: 100px;\nopacity: 1;\n}\n.button-14-BFJ{\ntransition: 0.2s;\n}\n.button-14-BFJ:hover{\npadding-bottom: 0px;\ntransition: 0.2;\n}\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Naive",["",{type:"text-and-color",text:"Alt Color",oninput:function(n){document.body.style.setProperty("--alt-color",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--alt-color")||"114, 137, 218";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Spotify Color",oninput:function(n){document.body.style.setProperty("--spotify-color",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--spotify-color")||"#27cc11";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Toast Header",oninput:function(n){document.body.style.setProperty("--toast-header",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--toast-header")||"#202225de";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Primary Alt",oninput:function(n){document.body.style.setProperty("--background-primary-alt",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-primary-alt")||"#36393ff0";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Secondary Chat",oninput:function(n){document.body.style.setProperty("--background-secondary-chat",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-secondary-chat")||"#2f3136a0";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Secondary Alt2",oninput:function(n){document.body.style.setProperty("--background-secondary-alt2",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-secondary-alt2")||"#2f313600";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Logo",oninput:function(n){document.body.style.setProperty("--background-logo",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-logo")||"#36393fa0";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Attachments",oninput:function(n){document.body.style.setProperty("--background-attachments",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-attachments")||"#2f313640";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Search Bar",oninput:function(n){document.body.style.setProperty("--background-search-bar",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-search-bar")||"#202225a0";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Switcher",oninput:function(n){document.body.style.setProperty("--background-switcher",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-switcher")||"#2f3136ff";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Chatbox",oninput:function(n){document.body.style.setProperty("--background-chatbox",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-chatbox")||"#20222550";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-input",text:"Background Lights Out",oninput:function(n){document.body.style.setProperty("--background-lights-out",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-lights-out")||"#000";return console.log(n),n}},{type:"text-and-color",text:"Background Pinned",oninput:function(n){document.body.style.setProperty("--background-pinned",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-pinned")||"#2f3136ff";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Profile Expand",oninput:function(n){document.body.style.setProperty("--background-profile-expand",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-profile-expand")||"#2f3136ff";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Emoji",oninput:function(n){document.body.style.setProperty("--background-emoji",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-emoji")||"#2f3136ff";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Text Lights Out",oninput:function(n){document.body.style.setProperty("--text-lights-out",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--text-lights-out")||"#f0f0f0";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Titlebar",oninput:function(n){document.body.style.setProperty("--background-titlebar",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-titlebar")||"#2f313650";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Secondary3",oninput:function(n){document.body.style.setProperty("--background-secondary3",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-secondary3")||"#262C37";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-input",text:"Toast Header); Border Radius",oninput:function(n){document.body.style.setProperty("--toast-header); border-radius",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--toast-header); border-radius")||"12px 12px 0px 0px";return console.log(n),n}},{type:"text-input",text:"Background Secondary); Border Radius",oninput:function(n){document.body.style.setProperty("--background-secondary); border-radius",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-secondary); border-radius")||"0px 0px 10px 10px";return console.log(n),n}},{type:"text-input",text:"User Popout Position",oninput:function(n){document.body.style.setProperty("--user-popout-position",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--user-popout-position")||"center";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Naive")}catch(t){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--alt-color",document.body.style.getPropertyValue("--alt-color")],["--spotify-color",document.body.style.getPropertyValue("--spotify-color")],["--toast-header",document.body.style.getPropertyValue("--toast-header")],["--background-primary-alt",document.body.style.getPropertyValue("--background-primary-alt")],["--background-secondary-chat",document.body.style.getPropertyValue("--background-secondary-chat")],["--background-secondary-alt2",document.body.style.getPropertyValue("--background-secondary-alt2")],["--background-logo",document.body.style.getPropertyValue("--background-logo")],["--background-attachments",document.body.style.getPropertyValue("--background-attachments")],["--background-search-bar",document.body.style.getPropertyValue("--background-search-bar")],["--background-switcher",document.body.style.getPropertyValue("--background-switcher")],["--background-chatbox",document.body.style.getPropertyValue("--background-chatbox")],["--background-lights-out",document.body.style.getPropertyValue("--background-lights-out")],["--background-pinned",document.body.style.getPropertyValue("--background-pinned")],["--background-profile-expand",document.body.style.getPropertyValue("--background-profile-expand")],["--background-emoji",document.body.style.getPropertyValue("--background-emoji")],["--text-lights-out",document.body.style.getPropertyValue("--text-lights-out")],["--background-titlebar",document.body.style.getPropertyValue("--background-titlebar")],["--background-secondary3",document.body.style.getPropertyValue("--background-secondary3")],["--toast-header); border-radius",document.body.style.getPropertyValue("--toast-header); border-radius")],["--background-secondary); border-radius",document.body.style.getPropertyValue("--background-secondary); border-radius")],["--user-popout-position",document.body.style.getPropertyValue("--user-popout-position")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=t(regeneratorRuntime.mark(function n(t){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()}};exports.default=e;
},{}]},{},["index.js"], null);parcelRequire('index.js').default