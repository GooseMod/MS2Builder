parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,r,o,a,i){try{var l=t[a](i),d=l.value}catch(c){return void n(c)}l.done?e(d):Promise.resolve(d).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=e.apply(n,r);function l(e){t(i,o,a,l,d,"next",e)}function d(e){t(i,o,a,l,d,"throw",e)}l(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode("/* CSS VERSION 2.6.2 */\n@import url(https://raw.githack.com/leeprky/Slook/main/source/slook-source.css);\n\n/* V2.6.2\n/*\n/* Imports */ \n@import url(https://nyri4.github.io/Discolored/main.css);\n@import url(https://raw.githack.com/Snapperito/Settings-Icons/main/source.css);\n\n/* HorizontalServerList */ \n@import url(https://raw.githack.com/DiscordStyles/HorizontalServerList/master/HorizontalServerList.theme.css);\n\n@import \"https://leeprky.github.io/themes/Ovel/imports/07-extra/version.css\";\n\n/* Glasscord */ /* - DELETE FOR GLASSCORD\n@import url(https://raw.githack.com/leeprky/slook_theme/main/Glasscord-Files/styles/glasscord-slook-theme.css);\n  \n:root{\n\t--glasscord-win-blur: blurbehind;\n\t--glasscord-macos-vibrancy: fullscreen-ui;\n\t--glasscord-linux-blur: true;\n\t--glasscord-titlebar: osx;  \n}\nbody{\n    background-color: transparent;\n}\n#app-mount{\n\tbackground-color: rgba(0, 0, 0, 0.301);\n\tborder-radius: 10px 10px 10px 10px; \n\tborder-color: transparent;\n}\n#app-mount .guilds-1SWlCJ .scrollerBase-289Jih {\n  background: transparent;\n}\n.theme-dark {\n\t--background-primary: #0c0c0c00!important;\n\t--background-secondary: #0a0a0a10!important;\n\t--background-tertiary: #1S2121325!important;\n};\n#app-mount .guilds-1SWlCJ, .base-3dtUhz {\n  top: calc(var(--server-container) + -32px) !important;\n}\n.platform-osx .container-1r6BKw {\n  -webkit-app-region: none;\n}\n#app-mount .app-1q1i1E .base-3dtUhz {\n  margin-top: 32px;\n}\n.panels-j1Uci_ {\n  background-color: transparent;\n}\n.scrollableContainer-2NUZem {\n  background-color: rgba(0, 0, 0, 0.534);\n}\n.contentRegionScroller-26nc1e, .contentRegion-3nDuYy, .standardSidebarView-3F1I7i, .sidebarRegionScroller-3MXcoP {\n  background: rgba(22, 22, 22, 0.596);\n}\n/* Glasscord End */\n\n/* MainColouring */\n.theme-dark {\n\n  --modal-playing-background-light: url(https://imgur.com/GZyPIBZ.jpg);\n  --expanded-playing-background-light: url(https://imgur.com/GZyPIBZ.jpg);\n  --call-background-light: url(https://imgur.com/GZyPIBZ.jpg);\n\n  --modal-playing-background-dark: url(https://imgur.com/L0Iih63.jpg);\n  --expanded-playing-background-dark: url(https://imgur.com/L0Iih63.jpg);\n  --call-background-dark: url(https://imgur.com/L0Iih63.jpg);\n\n  --spotify-playing-background: ;\n  --spotify-color: #008C67;\n\n  --alt-color: 0, 140, 103;\n  --new-message-pill: #008C67;\n  --header-primary: #fff;\n  --header-secondary: #b9bbbe;\n  --text-normal: #dcddde;\n  --text-muted: #72767d;\n  --text-link: #00b0f4;\n  --channels-default: #8e9297;\n  --interactive-normal: #b9bbbe;\n  --interactive-hover: #dcddde;\n  --interactive-active: rgb(231, 222, 222);\n  --interactive-muted: #313233;\n  --background-primary: #24262b;\n  --background-primary-alt: #24262b;\n  --background-secondary: #1d1f22ad;\n  --background-secondary-alt: #1d1f22ad;\n  --background-tertiary: #1D1F22;\n  --background-accent: #1e1f20;\n  --background-floating: #18191caf;\n  --background-modifier-hover: rgba(79,84,92,0.16);\n  --background-modifier-active: rgba(79,84,92,0.24);\n  --background-modifier-selected: rgba(14, 15, 15, 0.32);\n  --background-modifier-accent: hsla(0,0%,100%,0.06);\n  --background-mentioned: rgba(89, 250, 26, 0.055);\n  --background-mentioned-hover: rgba(58, 180, 20, 0.08);\n  --background-message-hover: rgba(4,4,5,0.07);\n  --background-help-warning: rgba(250,166,26,0.1);\n  --background-help-info: rgba(0,176,244,0.1);\n  --elevation-stroke: 0 0 0 1px rgba(4,4,5,0.15);\n  --elevation-low: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);\n  --elevation-medium: 0 4px 4px rgba(0,0,0,0.16);\n  --elevation-high: 0 8px 16px rgba(0,0,0,0.24);\n  --logo-primary: #fff;\n  --focus-primary: #d3e8f0;\n  --radio-group-dot-foreground: #8ea1e1;\n  --guild-header-text-shadow: 0 1px 1px rgba(20, 19, 19, 0.4);\n  --channeltextarea-background: #40444b;\n  --activity-card-background: #202225;\n  --textbox-markdown-syntax: #8e9297;\n  --deprecated-card-bg: rgba(32,34,37,0.6);\n  --deprecated-card-editable-bg: rgba(32,34,37,0.3);\n  --deprecated-store-bg: #36393f;\n  --deprecated-quickswitcher-input-background: #72767d;\n  --deprecated-quickswitcher-input-placeholder: hsla(0,0%,100%,0.3);\n  --deprecated-text-input-bg: rgba(0,0,0,0.1);\n  --deprecated-text-input-border: rgba(0,0,0,0.3);\n  --deprecated-text-input-border-hover: #040405;\n  --deprecated-text-input-border-disabled: #202225;\n  --deprecated-text-input-prefix: #dcddde;\n  --usernamme-discord-font: true;\n}\n.theme-light {\n --alt-color: 0, 140, 103;\n --spotify-color: #008C67;\n --new-message-pill: #008C67;\n --header-primary: #0d0d0e;\n --header-secondary: #2a2b2e;\n --text-normal: #0d0d0e;\n --text-muted: #747f8d;\n --text-link: #28a318f1;\n --channels-default: #1f2022;\n --interactive-normal: #4f5660;\n --interactive-hover: #2e3338;\n --interactive-active: #40a113;\n --interactive-muted: #c2c5c7;\n --background-primary: rgb(216, 209, 203);\n --background-secondary: rgba(219, 214, 210, 0.61);\n --background-secondary-alt: #dad6d100;\n --background-tertiary: rgba(219, 214, 210, 0.61);\n --background-accent: #424344e5;\n --background-floating: rgba(226, 219, 215, 0.884);\n --background-modifier-hover: rgba(116,127,141,0.08);\n --background-modifier-active: rgba(116,127,141,0.16);\n --background-modifier-selected: rgba(116,127,141,0.24);\n --background-modifier-accent: rgba(6,6,7,0.08);\n --background-modifier-accent: hsla(0,0%,100%,0.06);\n --background-mentioned: rgba(63, 177, 18, 0.116);\n --background-message-hover: rgba(6,6,7,0.02);\n --background-help-warning: rgba(250,166,26,0.1);\n --background-help-info: rgba(0,103,224,0.1);\n --scrollbar-thin-thumb: rgba(79,84,92,0.3);\n --scrollbar-thin-track: transparent;\n --scrollbar-auto-thumb: #ccc;\n --scrollbar-auto-track: #f2f2f2;\n --scrollbar-auto-scrollbar-color-thumb: #e3e5e8;\n --scrollbar-auto-scrollbar-color-track: #f2f3f5;\n --elevation-stroke: 0 0 0 1px rgba(6,6,7,0.08);\n --elevation-low: 0 1px 0 rgba(6,6,7,0.1),0 1.5px 0 rgba(6,6,7,0.025),0 2px 0 rgba(6,6,7,0.025);\n --elevation-medium: 0 4px 4px rgba(0,0,0,0.08);\n --elevation-high: 0 8px 16px rgba(0,0,0,0.16);\n --logo-primary: #7289da;\n --focus-primary: #00b0f4;\n --radio-group-dot-foreground: #4e5d94;\n --guild-header-text-shadow: 0 1px 1px hsla(0,0%,100%,0.4);\n --channeltextarea-background: #ebedef63;\n --activity-card-background: #fff;\n --textbox-markdown-syntax: #6a7480;\n --deprecated-card-bg: #f8f9f9;\n --deprecated-card-editable-bg: rgba(246,246,247,0.6);\n --deprecated-store-bg: #f8f9f9;\n --deprecated-quickswitcher-input-background: #fff;\n --deprecated-quickswitcher-input-placeholder: rgba(79,84,92,0.3);\n --deprecated-text-input-bg: rgba(79,84,92,0.02);\n --deprecated-text-input-border: rgba(79,84,92,0.3);\n --deprecated-text-input-border-hover: #b9bbbe;\n --deprecated-text-input-border-disabled: #dcddde;\n --deprecated-text-input-prefix: #b9bbbe;\n}\n\n/* Avatars */\n:root {\n  --rs-small-spacing: 1px;\n  --rs-large-spacing: 0px;\n  --rs-width: 2px;\n  --rs-avatar-shape: 100%;\n  --rs-online-color: #0ee986;\n  --rs-idle-color: #faeb1a;\n  --rs-dnd-color: #ff2e2e;\n  --rs-offline-color: #23242500;\n  --rs-streaming-color: #8342f5;\n  --rs-invisible-color: #eaeef3;\n}\n\n/* Center Server List */\n/* OPTIONAL SERVER LIST\n#app-mount .wrapper-3NnKdC.guilds-1SWlCJ .scroller-1Bvpku {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n/*\n/* SLOOK FONT */\n:root {\n  --discord-font: 'Discord'; /* Delete For Regular Font */\n}\n\n/* Better Looking New Messages Pill By Leeprky#2063 */\n.unreadPill-2HyYtt {\n  color: rgb(252, 248, 248);\n  background-color:var(--new-message-pill);\n  border-radius: 5px;\n  width: 50px;\n  height: 16px;\n  margin-bottom: 9px;\n  margin-left: -10px;\n  position: static;\n  font-family: \"Discord\"; /* - DISCORD USERNAME FONT */\n  padding-left: 3px;\n}\n.divider-JfaTT5 {\n  border-top: thin solid var(--new-message-pill);\n  width: 420px;\n  height: 10px;\n  left: 70px;\n}\n/* Day History Pill */\n.unreadPillCap-3_K2q2 {\n  width: 0px;\n  height: 0px;\n}\n.content-1o0f9g {\n  font-size: 0.65rem;\n}\n.theme-dark .content-1o0f9g {\n  color: #e7dddd;\n  font-family: \"Discord\"; /* - DISCORD USERNAME FONT */\n  margin-top: -7px;\n  font-size: 0.60rem;\n  background-color: var(--new-message-pill);\n}\n.theme-light .content-1o0f9g {\n  color: #1b1a1a;\n  font-family: \"Discord\"; /* - DISCORD USERNAME FONT */\n  margin-top: 00rem;\n  font-size: 0.60rem;\n  background-color: var(--new-message-pill);\n}\n\n/* Add transparency & blur to the loading screen */\n.container-16j22k {\n  background-color: rgba(0,0,0,0.8);\n  backdrop-filter: blur(5px);\n}\n/* BoldText */\n.headerText-2F0828 {\n  font-size: 18px; \n  font-family:'Discord';  /* - DISCORD USERNAME FONT */\n}\n.header-2RyJ0Y {\n  font-size: 16px;\n  font-family:'Discord';  /* - DISCORD USERNAME FONT */\n}\n.title-3sZWYQ {\n  font-size: 15px;\n  font-family:'Discord';  /* - DISCORD USERNAME FONT */\n}\n.container-2ax-kl {\n  font-size: 15px;\n  font-family:'Discord';  /* - DISCORD USERNAME FONT */\n}\n/* PictureInPicture */\n.header-2Zv56X {\n  font-size: 18px;\n  color:#eaedf0; \n  font-family: 'Discord' /* - DISCORD USERNAME FONT */\n} \n.description-22pzKs {\n  color: #c7cacc;\n  font-size: 11px\n}\n\n/* Bubble Member List OPTIONAL*/\n\n:root {\n  --hover-animation-speed: 0.35s;\n  --seperator-color: var(--background-accent);\n}\n.members-1998pB {\n  transition: transform var(--hover-animation-speed);\n}\n.membersWrap-2h-GB4 {\n min-width: unset;\n width: 40px;\n justify-content: left;\n}\n.content-3QAtGj .subText-1KtqkB {\n display: none;\n}\n.membersWrap-2h-GB4:hover .members-1998pB {\n  transform: translateX(-260px);\n}\n.membersWrap-2h-GB4 .members-1998pB .member-3-YXUe {\n  background-color: unset;\n  margin-left: 0px;\n  transition: margin-left var(--hover-animation-speed);\n}\n.membersWrap-2h-GB4:hover .members-1998pB .member-3-YXUe {\n  margin-left: 15px;\n}\n.membersWrap-2h-GB4:hover .membersGroup-v9BXpm {\n  transform: translateX(2px);\n}\n.membersWrap-2h-GB4 .membersGroup-v9BXpm {\n  cursor: default;\n  transform: translateX(-10px);\n  transition: transform var(--hover-animation-speed);\n  overflow: inherit;\n}\n.members-1998pB {\nborder-radius: 18px 18px 18px 18px !important;\nleft: 37px;\nmargin-top: 100px;\nmargin-bottom: 15px;\n}\n::-webkit-scrollbar {\n display: none;\n}\n.membersWrap-2h-GB4 {\nleft: 45px;\nmargin-right: 40px;\nbottom: 75px;\nbackground-color: rgba(216, 27, 27, 0);\n}\n\n\n/* SlookChatBox OPTIONAL*/\n/* Name */\n.username-1A8OIy {\n  font-size: 1.15rem;\n  line-height: 2.375rem;\n  color: var(--header-primary);\n  display: inline;\n  margin-bottom:  15px;\n  margin-left: 0px;  /* - DISCORD USERNAME FONT\n  font-family:'Discord'; \n  /* /* */\n}\n.cozy-3raOZG .timestamp-3ZCmNB {\n  font-size: 0.65rem;\n  height: 1.975rem;\n  color: #b6b9b4;\n  vertical-align:-webkit-baseline-middle; \n  font-family: 'Discord';  /* - DISCORD USERNAME FONT */\n}\n.message-2qnXI6 .avatar-1BDn8e {\n  margin-bottom: -10px;\n  width: 50px;\n  height: 50px;\n  left: 10px\n}\n.message-2qnXI6 .contents-2mQqc9 .avatar-1BDn8e {\n  top: 15px !important;\n}\n.cozy-3raOZG .messageContent-2qWWxC {\n  margin-left: -68px;\n  padding-left: 72px;\n  margin-top: -5px;\n}\n/* Compact Support */\n.compact-T3H92H .contents-2mQqc9 {\n  height: 50px;\n}\n.compact-T3H92H .timestamp-3ZCmNB, .cozy-3raOZG .timestamp-3ZCmNB.alt-1uNpEt {\n  display: none;\n}\n.messagesWrapper-1sRNjr, .scrollerContent-WzeG7R {\n  margin-left: 10px\n}\n\n:root {--outdated_slook-390: none; --version: \"v3.0\" }\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Slook",["",{type:"text-input",text:"Modal Playing Background Light",oninput:function(t){document.body.style.setProperty("--modal-playing-background-light",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--modal-playing-background-light")||"url(https://imgur.com/GZyPIBZ.jpg)";return console.log(t),t}},{type:"text-input",text:"Expanded Playing Background Light",oninput:function(t){document.body.style.setProperty("--expanded-playing-background-light",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--expanded-playing-background-light")||"url(https://imgur.com/GZyPIBZ.jpg)";return console.log(t),t}},{type:"text-input",text:"Call Background Light",oninput:function(t){document.body.style.setProperty("--call-background-light",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--call-background-light")||"url(https://imgur.com/GZyPIBZ.jpg)";return console.log(t),t}},{type:"text-input",text:"Modal Playing Background Dark",oninput:function(t){document.body.style.setProperty("--modal-playing-background-dark",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--modal-playing-background-dark")||"url(https://imgur.com/L0Iih63.jpg)";return console.log(t),t}},{type:"text-input",text:"Expanded Playing Background Dark",oninput:function(t){document.body.style.setProperty("--expanded-playing-background-dark",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--expanded-playing-background-dark")||"url(https://imgur.com/L0Iih63.jpg)";return console.log(t),t}},{type:"text-input",text:"Call Background Dark",oninput:function(t){document.body.style.setProperty("--call-background-dark",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--call-background-dark")||"url(https://imgur.com/L0Iih63.jpg)";return console.log(t),t}},{type:"text-input",text:"Spotify Playing Background",oninput:function(t){document.body.style.setProperty("--spotify-playing-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spotify-playing-background")||"";return console.log(t),t}},{type:"text-and-color",text:"Spotify Color",oninput:function(t){document.body.style.setProperty("--spotify-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spotify-color")||"#008C67";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Alt Color",oninput:function(t){document.body.style.setProperty("--alt-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alt-color")||"0, 140, 103";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"New Message Pill",oninput:function(t){document.body.style.setProperty("--new-message-pill",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--new-message-pill")||"#008C67";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Background Primary Alt",oninput:function(t){document.body.style.setProperty("--background-primary-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-primary-alt")||"#24262b";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Usernamme Discord Font",oninput:function(t){document.body.style.setProperty("--usernamme-discord-font",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--usernamme-discord-font")||"true";return console.log(t),t}},{type:"text-input",text:"Radial Status: Small Spacing",oninput:function(t){document.body.style.setProperty("--rs-small-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-spacing")||"1px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Spacing",oninput:function(t){document.body.style.setProperty("--rs-large-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-spacing")||"0px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Width",oninput:function(t){document.body.style.setProperty("--rs-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-width")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Avatar Shape",oninput:function(t){document.body.style.setProperty("--rs-avatar-shape",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-avatar-shape")||"100%";return console.log(t),t}},{type:"text-and-color",text:"Radial Status: Online Color",oninput:function(t){document.body.style.setProperty("--rs-online-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-online-color")||"#0ee986";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Idle Color",oninput:function(t){document.body.style.setProperty("--rs-idle-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-idle-color")||"#faeb1a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: DND Color",oninput:function(t){document.body.style.setProperty("--rs-dnd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-dnd-color")||"#ff2e2e";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Offline Color",oninput:function(t){document.body.style.setProperty("--rs-offline-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-offline-color")||"#23242500";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Streaming Color",oninput:function(t){document.body.style.setProperty("--rs-streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-streaming-color")||"#8342f5";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Invisible Color",oninput:function(t){document.body.style.setProperty("--rs-invisible-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-invisible-color")||"#eaeef3";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Discord Font",oninput:function(t){document.body.style.setProperty("--discord-font",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-font")||"'Discord'";return console.log(t),t}},{type:"text-input",text:"Hover Animation Speed",oninput:function(t){document.body.style.setProperty("--hover-animation-speed",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--hover-animation-speed")||"0.35s";return console.log(t),t}},{type:"text-input",text:"Outdated_slook 390",oninput:function(t){document.body.style.setProperty("--outdated_slook-390",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--outdated_slook-390")||"none";return console.log(t),t}},{type:"text-input",text:"Toast Header); Border Radius",oninput:function(t){document.body.style.setProperty("--toast-header); border-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toast-header); border-radius")||"12px 12px 0px 0px";return console.log(t),t}},{type:"text-input",text:"Background Secondary); Border Radius",oninput:function(t){document.body.style.setProperty("--background-secondary); border-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-secondary); border-radius")||"0px 0px 10px 10px";return console.log(t),t}},{type:"text-input",text:"Icon",oninput:function(t){document.body.style.setProperty("--icon",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--icon")||"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='24' height='24'/%3E%3Cg fill='%2380A6FF' transform='translate(0 2)'%3E%3Cpath fill-rule='nonzero' d='M14,3 C10.1340068,3 7,6.13400675 7,10 C7,13.8659932 10.1340068,17 14,17 C17.8659932,17 21,13.8659932 21,10 C21,6.13400675 17.8659932,3 14,3 Z M3,9 L4,9 C4.55228475,9 5,8.55228475 5,8 C5,7.44771525 4.55228475,7 4,7 L1,7 C0.44771525,7 0,6.55228475 0,6 C0,5.44771525 0.44771525,5 1,5 L6,5 C6.55228475,5 7,4.55228475 7,4 C7,3.44771525 6.55228475,3 6,3 L3.5,3 C2.67157288,3 2,2.32842712 2,1.5 C2,0.671572875 2.67157288,0 3.5,0 L14,0 C19.5228475,0 24,4.4771525 24,10 C24,15.5228475 19.5228475,20 14,20 C8.8146519,20 4.55109967,16.0533227 4.04937524,11 L3,11 C2.44771525,11 2,10.5522847 2,10 C2,9.44771525 2.44771525,9 3,9 Z'/%3E%3Cpath d='M14,15 C11.2385763,15 9,12.7614237 9,10 C9,7.23857625 11.2385763,5 14,5 C16.7614237,5 19,7.23857625 19,10 C19,12.7614237 16.7614237,15 14,15 Z M15.826989,7.45045379 C15.6420424,7.16928349 15.3280698,7 14.9915257,7 L13.0655484,7 C12.7290042,7 12.4150316,7.16928349 12.2300851,7.45045379 L10.9145367,9.45045379 C10.6951544,9.7839759 10.6951544,10.2160241 10.9145367,10.5495462 L12.2300851,12.5495462 C12.4150316,12.8307165 12.7290042,13 13.0655484,13 L14.9915257,13 C15.3280698,13 15.6420424,12.8307165 15.826989,12.5495462 L17.1425374,10.5495462 C17.3619196,10.2160241 17.3619196,9.7839759 17.1425374,9.45045379 L15.826989,7.45045379 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";return console.log(t),t}},{type:"text-and-color",text:"Settings Icon Color",oninput:function(t){document.body.style.setProperty("--settings-icon-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-icon-color")||"white;--settings-subscriptions: #7289da;--settings-hypesquad: #fbb848;--settings-logout: #f04747;--settings-alt-focused: white;--settings-guild-premium: #7289da";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Slook")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--modal-playing-background-light",document.body.style.getPropertyValue("--modal-playing-background-light")],["--expanded-playing-background-light",document.body.style.getPropertyValue("--expanded-playing-background-light")],["--call-background-light",document.body.style.getPropertyValue("--call-background-light")],["--modal-playing-background-dark",document.body.style.getPropertyValue("--modal-playing-background-dark")],["--expanded-playing-background-dark",document.body.style.getPropertyValue("--expanded-playing-background-dark")],["--call-background-dark",document.body.style.getPropertyValue("--call-background-dark")],["--spotify-playing-background",document.body.style.getPropertyValue("--spotify-playing-background")],["--spotify-color",document.body.style.getPropertyValue("--spotify-color")],["--alt-color",document.body.style.getPropertyValue("--alt-color")],["--new-message-pill",document.body.style.getPropertyValue("--new-message-pill")],["--background-primary-alt",document.body.style.getPropertyValue("--background-primary-alt")],["--usernamme-discord-font",document.body.style.getPropertyValue("--usernamme-discord-font")],["--rs-small-spacing",document.body.style.getPropertyValue("--rs-small-spacing")],["--rs-large-spacing",document.body.style.getPropertyValue("--rs-large-spacing")],["--rs-width",document.body.style.getPropertyValue("--rs-width")],["--rs-avatar-shape",document.body.style.getPropertyValue("--rs-avatar-shape")],["--rs-online-color",document.body.style.getPropertyValue("--rs-online-color")],["--rs-idle-color",document.body.style.getPropertyValue("--rs-idle-color")],["--rs-dnd-color",document.body.style.getPropertyValue("--rs-dnd-color")],["--rs-offline-color",document.body.style.getPropertyValue("--rs-offline-color")],["--rs-streaming-color",document.body.style.getPropertyValue("--rs-streaming-color")],["--rs-invisible-color",document.body.style.getPropertyValue("--rs-invisible-color")],["--discord-font",document.body.style.getPropertyValue("--discord-font")],["--hover-animation-speed",document.body.style.getPropertyValue("--hover-animation-speed")],["--outdated_slook-390",document.body.style.getPropertyValue("--outdated_slook-390")],["--toast-header); border-radius",document.body.style.getPropertyValue("--toast-header); border-radius")],["--background-secondary); border-radius",document.body.style.getPropertyValue("--background-secondary); border-radius")],["--icon",document.body.style.getPropertyValue("--icon")],["--settings-icon-color",document.body.style.getPropertyValue("--settings-icon-color")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default