parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,e,r,t,a,o,i){try{var c=n[o](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(t,a)}function e(e){return function(){var r=this,t=arguments;return new Promise(function(a,o){var i=e.apply(r,t);function c(e){n(i,a,o,c,s,"next",e)}function s(e){n(i,a,o,c,s,"throw",e)}c(void 0)})}}var r;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={goosemodHandlers:{onImport:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r=document.createElement("style"),document.head.appendChild(r),r.appendChild(document.createTextNode('/**\n * @name Naive\n * @author Leeprky#2063\n * @version 0.3.5\n * @description Naive Theme By Leeprky#2063\n * @source https://github.com/leeprky/tobenamedtheme\n*/\n/* ^ betterdiscord ^ */\n\n\n/* NaiveSource */\n@import url(https://raw.githack.com/leeprky/Naive/main/source/naivesource.css);\n@import url(https://discord-custom-covers.github.io/usrbg/dist/usrbg.css);\n\n/* --- */\n\n\n/* Colors CONFIG */\n\n/* Cherry - Magenta */  \n\n\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-cherry.css); \n/* */\n/* - REMOVE (LIGHTMODE)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-cherry-light.css); \n/* */\n/* - REMOVE (GLASSCORD)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-cherry-glasscord.css);\n/* */\n\n/* Buzzy - Yellow */ \n/* - REMOVE\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-buzzy.css); \n/* */\n/* - REMOVE (GLASSCORD)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-buzzy-glasscord.css); \n/*\n\n/* Sky - Cyan */ \n/* - REMOVE\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-sky.css);  \n/* */\n/* - REMOVE (GLASSCORD)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-sky-glasscord.css); \n/*\n\n/* Apple - Green */ \n\n/* - REMOVE\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-apple.css);\n/* */\n/* - REMOVE (GLASSCORD)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-apple-glasscord.css);\n/*\n\n/* Hell - Red */ \n/* - REMOVE\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-hell.css);\n/* */\n/* - REMOVE (GLASSCORD)\n@import url(https://raw.githack.com/leeprky/Naive/main/styles/naive-hell-glasscord.css);\n/*\n\n/* COLORS PERSONAL - not recommended unless you know what ur doing*/\n/* @import url(\'CUSTOM GITHACK COLOR SCHEME LINK HERE\') */\n/* DELETE FOR MANUAL COLORS (GLASSCORD) \nbody{\n  background-color: transparent;\n}\n\n#app-mount{\nbackground-color: transparent;\nborder-radius: var(--glasscord-blur-corner-radius);\n}\n\n.theme-dark { \n  --alt-color: 114, 137, 218;\n  --spotify-color: #27cc11;\n  --toast-header: #202225de;\n    --background-primary: #23232857;\n    --background-primary-alt: #36393ff0;\n    --background-secondary: #2f313650;\n    --background-secondary2:#18181a25;\n    --background-secondary-chat: #2f3136a0;\n    --background-secondary-alt: #2f313650;\n    --background-secondary-alt2: #2f313600;\n    --background-tertiary: #20222546;\n    --background-logo: #36393fa0;\n    --deprecated-card-bg: #36393f4c;\n    --deprecated-store-bg: #36393f00;\n    --background-attachments: #2f313640;\n    --background-search-bar: #202225a0;\n    --background-switcher: #2f3136ff;\n    --background-chatbox: #20222550;\n    --background-lights-out: #000;\n    --background-pinned: #2f3136ff;\n    --background-profile-expand: #2f3136ff;\n    --background-emoji: #2f3136ff;\n    --text-lights-out: #f0f0f0;\n    --background-titlebar: #2f313650;\n    --scrollbar-auto-thumb: #20222550;\n  };\n.scroller-1Bvpku {\n  background-color: var(--background-secondary2); \n}\n.scroller-1d5FgU {\n  background-color: var(--background-primary);\n}\n::-webkit-scrollbar {\n  display: none;\n}\n.powercord-spotify .spotify-buttons button {\n  color: var(--spotify-color) !important;\n}\n.container-3baos1, .container-3baos1 .avatar-SmRMf2 {\n  background-color: var(--background-secondary-alt2); \n}\n\n/* */\n/* Remove the orange thing when selecting server list etc */   \nul.tree-2wKJdG:focus {\n  outline-color: transparent;\n}\n/* --- */\n/* Glasscord If Enabled In Colors Section */\n:root{\n\t--glasscord-win-blur: blurbehind;\n\t--glasscord-macos-vibrancy: fullscreen-ui;\n\t--glasscord-linux-blur: true;\n\t--glasscord-blur-corner-radius: 20px;\n\t--glasscord-titlebar: windows;\n}\n/* --- */\n\n/* Optionals */\n/* Separate the channels list from the chat box. Option*/\n/* REMOVE LINE */\n.sidebar-2K8pFh, .chat-3bRxxu, .container-3Mxszk, .container-1D34oG, .applicationStore-1pNvnv, .clickable-25tGDB {\n    border-radius: 15px 15px 15px 15px !important;\n    border-color: transparent;\n    left: 5px\n  }\n.platform-win .sidebar-2K8pFh {\n    border-radius: 0px 12px 12px 0px!important;\n}\n.content-98HsJk {\n    background-color: rgba(17, 16, 16, 0);\n    box-shadow: none;\n}\n/* */\n\n/* Modal Popout - Add /* BELOW FOR NONE BIG MODALS */\n\n.activity-11LB_k, .headerTop-3C2Zn0 {\n  background-color: var(--background-secondary);\n}\n.theme-dark .body-3iLsc4, .theme-dark .footer-1fjuF6 {\n  background-color: var(--background-secondary);\n}\n.userPopout-3XzG_A {\n  box-shadow: none;\n}\ndiv[class*="headerPlaying"], div[class*="headerStreaming"] {\n  background-color: transparent !important;\n}\n.popout_1188 {\n  border-radius: 12px;\n}\n.rolesList-22qj2L {\n  margin-top: 0px;\n}\n\n.note-QfFU8y textarea { display: none; }\n.userInfoSectionHeader-CBvMDh { display: none; }\n.userInfoSection-2acyCx { margin-top: -21px; }\n.body-3ND3kc { height: calc(100% - 167px); }\n\n.bodyTitle-Y0qMQz, .size12-3R0845, .note-3HfJZ5, .footer-1fjuF6 {\n  display: none;\n}\n.headerTop-3C2Zn0 {\n  min-height: 250px;\n  padding: 0;\n}\n.headerTop-3C2Zn0 .avatarWrapper-3H_478 {\n  left: 0;\n  bottom: 9px;\n  top: -15px;\n  width: 255px;\n}\n.headerText-2sdzFM {\n  margin-bottom: 5px;\n}\n.customStatus-1bh2V9 {\n  margin-top: 10px;\n}\n.customStatus-1bh2V9 .customStatusEmoji-7MXCgv.customStatusSoloEmoji-XOvnMc {\n  margin-bottom: 15px;\n}\n.customStatusText-3YJeRZ {\n  margin-bottom: 15px;\n}\n.headerTop-3C2Zn0 .avatarWrapper-3H_478 .wrapper-3t9DeA {\n  height: 260px !important;\n  width: 250px !important;\n  left: -4px;\n}\n.avatarHint-1qgaV3 {width: 100%;height: 100%;border-radius: 0;}\n.avatarHintInner-Dco91E {\n  font-size: 0.4em;\n  text-shadow: 1px 1px 3px rgb(221, 221, 221);\n}\n.headerTop-3C2Zn0 foreignObject {mask: none !important;}\n.headerTop-3C2Zn0 rect {\n  border-radius: 0;\n  x: 0; y: 79.25;\n  width: 80px;\n  height: 3px;\n  mask: none;\n}\n.headerText-2sdzFM {padding-bottom: 5px;}\n/* --- */\n\n/* Blur Sensitive Info */\n/* Title */\n.children-rWhLdy  .fieldTitle-3h2iLW {\n  margin-left: 4px;\n}\n/* My Account */\n.children-rWhLdy .fieldList-21DyL8 .size16-1P40sf {\n  transition: all 40ms cubic-bezier(0.550, 0.085, 0.680, 0.530);\n  filter: blur(3px);\n  opacity: 0.8;\n  margin-left: 4px;\n}\n.children-rWhLdy .fieldList-21DyL8 .size16-1P40sf:hover {\n  transition: all 40ms cubic-bezier(0.55, 0.09, 0.68, 0.53);\n  filter: none;\n  opacity: 1;\n  margin-left: 4px;\n}\n/* Payment Methods */\n.paymentSourceRow-3FbcL_ .subText-V8PTt8 {\n  transition: all 40ms cubic-bezier(0.550, 0.085, 0.680, 0.530);\n  filter: blur(3px);\n  opacity: 0.8;\n}\n.paymentSourceRow-3FbcL_ .subText-V8PTt8:hover {\n  transition: all 40ms cubic-bezier(0.55, 0.09, 0.68, 0.53);\n  filter: none;\n  opacity: 1;\n}\n/* Transaction History */\n.theme-dark .verticalFit-waKLYN .summaryInfo-2QFKUg,\n.theme-light .verticalFit-waKLYN .summaryInfo-2QFKUg {\n  transition: all 40ms cubic-bezier(0.550, 0.085, 0.680, 0.530);\n  filter: blur(8px);\n  opacity: 0.8;\n}\n.theme-dark .verticalFit-waKLYN:hover .summaryInfo-2QFKUg,\n.theme-light .verticalFit-waKLYN:hover .summaryInfo-2QFKUg {\n  transition: all 40ms cubic-bezier(0.55, 0.09, 0.68, 0.53);\n  filter: none;\n  opacity: 1;\n}\n/* Subscriptions */\n.detailsBlock-FoDTGA .paymentSourceLabel-1lo4Ca {\n  transition: all 40ms cubic-bezier(0.550, 0.085, 0.680, 0.530);\n  filter: blur(3px);\n}\n\n.detailsBlock-FoDTGA .paymentSourceLabel-1lo4Ca:hover {\n  transition: all 40ms cubic-bezier(0.55, 0.09, 0.68, 0.53);\n  filter: none;\n  opacity: 1;\n}\n/* Leeprkys Extras */\n/* Connected Accounts */\n.connectionAccountValue-3VdBGs{\n  transition: all 40ms cubic-bezier(0.550, 0.085, 0.680, 0.530);\nfilter: blur(8px);\nopacity: 0.8;\n}\n.connectionAccountValue-3VdBGs:hover{\ntransition: all 40ms cubic-bezier(0.55, 0.09, 0.68, 0.53);\nfilter: none;\nopacity: 1;\n}\n/* SMS Backup Authentication */\n\n/* Authorised Apps Blur */\n.authedApp-mj2Hmd {\n  transition: all 40ms cubic-bezier(0.550, 0.085, 0.680, 0.530);\n  filter: blur(8px);\n  opacity: 0.8;\n  }\n  .authedApp-mj2Hmd:hover {\n    transition: all 40ms cubic-bezier(0.55, 0.09, 0.68, 0.53);\n    filter: none;\n    opacity: 1;\n    }  \n/* Connections Blur */\n.gameName-1RiWHm {\n  transition: all 40ms cubic-bezier(0.550, 0.085, 0.680, 0.530);\n  filter: blur(8px);\n  opacity: 0.8;\n  }\n.gameName-1RiWHm:hover {\n  transition: all 40ms cubic-bezier(0.55, 0.09, 0.68, 0.53);\n  filter: none;\n  opacity: 1;\n  }\n  /* --- */\n/* ----- */\n\n/* Naive Extras */\n/* memberlist */\n.members-1998pB, .members-1998pB>div {\n    background-color: transparent;\n}\n/* My Account */\n.background-1QDuV2 {\n  background-color: var(--background-primary);\n}\n/* --- */\n\n\n'));case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.remove();case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()}};exports.default=t;
},{}]},{},["index.js"], null);parcelRequire('index.js').default