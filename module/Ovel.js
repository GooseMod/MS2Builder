parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,o,r,a,l){try{var u=t[a](l),i=u.value}catch(c){return void n(c)}u.done?e(i):Promise.resolve(i).then(o,r)}function e(e){return function(){var n=this,o=arguments;return new Promise(function(r,a){var l=e.apply(n,o);function u(e){t(l,r,a,u,i,"next",e)}function i(e){t(l,r,a,u,i,"throw",e)}u(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('/* ---------------------------------------------\n\n      ░█████╗░  ██╗░░░██╗  ███████╗  ██╗░░░░░\n      ██╔══██╗  ██║░░░██║  ██╔════╝  ██║░░░░░\n      ██║░░██║  ╚██╗░██╔╝  █████╗░░  ██║░░░░░\n      ██║░░██║  ░╚████╔╝░  ██╔══╝░░  ██║░░░░░\n      ╚█████╔╝  ░░╚██╔╝░░  ███████╗  ███████╗\n      ░╚════╝░  ░░░╚═╝░░░  ╚══════╝  ╚══════╝\n\n       █▀▀ █▀█ █▄░█ █▀▀ █ █▀▀  █▀▀ █ █░░ █▀▀\n       █▄▄ █▄█ █░▀█ █▀░ █ █▄█  █▀░ █ █▄▄ ██▄\n\n                 By 𝖫𝖤𝖤𝖯𝖱𝖪𝖸#𝟚𝟘𝟞𝟛\n                     v1.0.6\n\n   --------------------------------------------- */\n\n/*\n█ █▀▄▀█ █▀█ █▀█ █▀█ ▀█▀ █▀\n█ █░▀░█ █▀▀ █▄█ █▀▄ ░█░ ▄█\n        No Touch\n*/\n\n@import "https://leeprky.github.io/themes/Ovel/master-import.css";\n@import "https://leeprky.github.io/themes/Ovel/imports/09-support/powercord/powercord.css";\n\n\n/*  █▀▀ █▀█ █░░ █▀█ █░█ █▀█   █▀ █▀▀ █░█ █▀▀ █▀▄▀█ █▀▀ █▀\n    █▄▄ █▄█ █▄▄ █▄█ █▄█ █▀▄   ▄█ █▄▄ █▀█ ██▄ █░▀░█ ██▄ ▄█\n             Delete `/*` At Start Of Import                 */\n\n/* Slook Scheme */\n/* @import url(https://leeprky.github.io/themes/Ovel/imports/08-colours/slook-scheme.css);\n\n/* Naive Scheme */\n/* @import url(https://leeprky.github.io/themes/Ovel/imports/08-colours/naive-scheme.css);\n\n/* Custom Scheme By namehere */\n/* @import url(linkhere);\n\n/*  █▀▀ █░░ ▄▀█ █▀ █▀ █▀▀ █▀█ █▀█ █▀▄\n    █▄█ █▄▄ █▀█ ▄█ ▄█ █▄▄ █▄█ █▀▄ █▄▀    \n        ▀█▀ █▀█ ▄▀█ █▄░█ █▀ █▀█ ▄▀█ █▀█ █▀▀ █▄░█ █▀▀ █▄█   \n        ░█░ █▀▄ █▀█ █░▀█ ▄█ █▀▀ █▀█ █▀▄ ██▄ █░▀█ █▄▄ ░█░   */\n\n/* LOOK ITS NOW EASIER | BUILD: 150\n@import "https://leeprky.github.io/themes/Ovel/imports/09-support/powercord/glasscord.css";\n\n:root{ \n   --glasscord-win-blur: blurbehind;\n   --glasscord-linux-blur: true;\n   --glasscord-macos-vibrancy: fullscreen-ui;\n   \n   --glasscord-background: #12182ebe !important;\n   --glasscord-chatbox-colour: #191d303d;\n   --glasscord-secondary-alt: #11142280;\n   --glasscord-floating: #111422; \n}\n\n/* -----------------------------------\n\n       █▀▀ █▀█ █▄░█ █▀▀ █ █▀▀\n       █▄▄ █▄█ █░▀█ █▀░ █ █▄█ v1.0.6\n\n   ----------------------------------- */\n\n   /* Background & Blur Config - Comment Out To Remove Background & Restore Old Colours */\n   /*\n         :root {\n         --background: url(\'https://i.imgur.com/6NUSR9H.png\'); \n         --background-blur: 8px; \n         --background-opacity: 100%; \n         --background-brightness: 92%; \n         --background-colour: #14182b9a; \n\n         --chatbox-colour: #21204238 !important; \n         --background-primary: transparent !important; \n         --background-primary-alt: #2d355783 !important; \n         --background-secondary: transparent !important;\n         --background-secondary-alt: #232942fa !important; \n         --background-tertiary: var(--background-colour) !important; \n       }\n*/\n\n/* █▀▀ █▀█ █░░ █▀█ █░█ █▀█ █▀\n   █▄▄ █▄█ █▄▄ █▄█ █▄█ █▀▄ ▄█ */\n\n:root {\n\n   /* Gradients */\n   --default-gradient: 315deg, #4657a3 0%, #464186 74%;\n   --special-gradient: 315deg, #333d91 0%, #c987b8 74%;\n   --red-gradient: 315deg, #AA3738 0%, #F04747 74%;\n   --red-hsl: hsl(359, 63%, 53%);\n   --yellow-gradient: 315deg, #c29b1b 0%, #ffa640 74%;\n   --yellow-hsl: hsl(46, 72%, 52%);\n   --green-gradient: 315deg, #507a73 0%, #4b7c72  74%;\n   --grey-gradient: 315deg, #5b55b3 0%, #5b55b3 74%;\n   --white-gradient: 315deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.342) 74%;\n      \n   /* Channel Icons */\n   --hashtag-colour: var(--interactive-muted);\n   --announcement-colour: var(--interactive-muted);\n   --rules-colour: var(--alt-color2);\n   --stages-colour: var(--interactive-muted);\n   --voice-colour: var(--interactive-muted);\n   --locked-colour: var(--interactive-muted);\n      \n   /* Transitions */\n   --font-normal: 500;\n   --font-hover: bold;\n   --font-size-hover: 15px;\n   --hover-transition: 0.1s linear;\n   --transform-normal: scale(1);\n   --hover-transform: scale(1.15);\n   --setting-hover-transform: scale(1.025);\n   --button-hover-transform: scale(1.03);\n\n   /* Greenple Colour*/\n   --green-color: var(--alt-color2);\n   --green-bar-on: #5c646480;\n   --green-bar-bg: var(--green-color);\n   --green-slider-on: var(--green-color);\n   --green-slider-off: #5c646480;\n   --green-slider-dot: #fff;\n}\n\n.theme-dark, .theme-light {  \n  --border-radius: 8px;\n  --bg-avatar: url(https://i.imgur.com/g37HbBe.png);\n  --popout-width: 480px; \n  --modal-bg: #121524; \n  --scrollbars: none;     \n  --app-rounding: 16px;\n  --avatar-radius: 43.5%;      \n  --sidebar-fade: 92%;\n  --friends-sidebar-fade: 68%;\n}\n\n/* █▀█ █░█ █▀▀ █░░   ▄▄   █▀▄ ▄▀█ █▀█ █▄▀\n   █▄█ ▀▄▀ ██▄ █▄▄   ░░   █▄▀ █▀█ █▀▄ █░█ */\n\n .theme-dark {\n\n --chatbox-colour: #222741;\n\n --alt-color: 76, 70, 163; \n --alt-color2: #4C46A3; \n \n --playing-color: var(--alt-color2); \n --spotify-color: var(--alt-color2);\n --streaming-color: rgb(127, 50, 179); \n \n  /* Header Colors */\n  --header-primary: #fff; \n  --header-secondary: #b9bbbe; \n  --channels-headings: var(--alt-color2); \n\n  /* Text Colours */\n  --text-normal: #ccc8fd; \n  --text-muted: #535170; \n  --text-link: var(--alt-color2); \n  --channels-default: #b8b6d6; \n  --interactive-normal: #b9bbbe; \n  --interactive-hover: #ccc8fd; \n  --interactive-hover-icons: var(--background-accent2); \n  --interactive-active: #fefeff; \n   --interactive-active-icons: var(--background-accent2); \n  --interactive-muted: #535170; \n \n  /* Background Colours */\n  --background-primary: #1E233A; \n  --background-primary-alt: #2d3557; \n  --background-secondary: #1E233A; \n  --background-secondary-alt: #232942;\n  --background-tertiary: #14182b; \n  --background-accent: var(--alt-color2); \n  --background-accent2: #1ABC9C; \n  --background-accent3: #F52C79; \n  --background-floating: #111422; \n \n  /* Mentioned  Colours */\n  --background-mentioned: #3a339965 !important; \n  --background-mentioned-hover: #4c46a359; \n  --background-mentioned-bar: var(--background-accent); \n \n  --background-help-warning: rgba(250,166,26,0.1); \n  --background-help-info: rgba(0,176,244,0.1); \n \n  /* Scrollbar Colours */\n  --background-modifier-hover: #4c46a3af; \n  --background-modifier-active: #4c46a3fa; \n  --background-modifier-selected: #4c46a39f; \n  --background-modifier-accent: #4c46a309; \n \n /* Box Shadow On Floating Elements Colours */\n --elevation-stroke: 0 0 0 1px rgba(4,4,5,0.15); \n --elevation-low: 0 1px 0 rgba(18, 20, 36, 0.767),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);\n --elevation-medium: 0 4px 4px rgba(0,0,0,0.16); \n --elevation-high: 0 8px 16px rgba(0,0,0,0.24); \n \n --scrollbar-thin-thumb: #eaedf100; \n --scrollbar-thin-track: transparent;\n --scrollbar-auto-thumb: var(--alt-color2); \n --scrollbar-auto-track: #26272902; \n --scrollbar-auto-scrollbar-color-thumb: #f0f3f8; \n --scrollbar-auto-scrollbar-color-track: #2f313600; \n     \n /* Other */\n --radio-group-dot-foreground: var(--alt-color); \n }\n\n/* █▀█ █░█ █▀▀ █░░   ▄▄   █░░ █ █▀▀ █░█ ▀█▀\n   █▄█ ▀▄▀ ██▄ █▄▄   ░░   █▄▄ █ █▄█ █▀█ ░█░ */\n\n .theme-light {\n \n  --chatbox-colour: #aba6e6;\n  \n  --popout-width: 480px; \n  --modal-bg: #121524; \n \n  --bd-color: #4C46A3; \n  --bd-color-hover: #4C46A3; \n  --alt-color: 76, 70, 163; \n  --alt-color2: #4C46A3; \n  --alt-color3: 244; /* HSL */\n  \n  --scrollbars: block; \n  --public-servers: block; \n  --playing-color: var(--alt-color2); \n  --spotify-color: var(--alt-color2); \n  --streaming-color: rgb(127, 50, 179); \n  \n   /* Header Colors */\n   --header-primary: #1e1b58; \n   --header-secondary: #1b154e; \n   --channels-headings: var(--alt-color2); \n \n   /* Text Colours */\n   --text-normal: #2e2a5c; \n   --text-muted: #6c67a0; \n   --text-link: var(--alt-color2); \n   --channels-default: #332f79; \n   --interactive-normal: #908dca; \n   --interactive-hover: #332f79; \n   --interactive-hover-icons: var(--background-accent2); \n   --interactive-active: #101011; \n    --interactive-active-icons: var(--background-accent2); \n   --interactive-muted: #535170; \n  \n   /* Background Colours */\n --background-primary: #ccc8fd !important; \n --background-primary-alt: #ccc8fd !important; \n --background-secondary: #ccc8fd !important; \n --background-secondary-alt: #ccc8fd !important; \n --background-tertiary: #ccc8fd !important; \n --background-accent: var(--alt-color2) !important; \n --background-accent2: #1ABC9C !important; \n --background-accent3: #F52C79 !important; \n --background-floating: #342f72 !important; \n  \n   /* Mentioned  Colours */\n   --background-mentioned: #3124e665 !important; \n   --background-mentioned-hover: #1f178f59; \n   --background-mentioned-bar: var(--background-accent); \n  \n   --background-help-warning: rgba(250,166,26,0.1);\n   --background-help-info: rgba(0,176,244,0.1); \n  \n   /* Scrollbar Colours */\n   --background-modifier-hover: #a8a2faaf;\n   --background-modifier-active: #9891ffaf; \n   --background-modifier-selected: #8f8addaf; \n   --background-modifier-accent: #716ea009; \n  \n  /* Box Shadow On Floating Elements Colours */\n  --elevation-stroke: 0 0 0 1px rgba(4,4,5,0.15); \n  --elevation-low: 0 1px 0 rgba(18, 20, 36, 0.767),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);\n  --elevation-medium: 0 4px 4px rgba(0,0,0,0.16); \n  --elevation-high: 0 8px 16px rgba(0,0,0,0.24); \n  \n  --scrollbar-thin-thumb: #01011300; \n  --scrollbar-thin-track: transparent; \n  --scrollbar-auto-thumb: var(--alt-color2); \n  --scrollbar-auto-track: #1b315c02; \n  --scrollbar-auto-scrollbar-color-thumb: #f0f3f8; \n  --scrollbar-auto-scrollbar-color-track: #2d56be00; \n      \n  /* Other */\n  --radio-group-dot-foreground: var(--alt-color2); /* Ignore */\n  }\n\n/* █ █▀▀ █▄░█ █▀█ █▀█ █▀▀\n   █ █▄█ █░▀█ █▄█ █▀▄ ██▄ */\n\n[class="size14-e6ZScH title-eS5yk3"] {margin-bottom: 1px;}\n:root {--version: "v1.0.6PC" !important; --build: "150" !important; --outdated_ovel-150: none !important}\n\n/* -------------------------------------------------------------------------------\n\n            ░█████╗░██████╗░████████╗██╗░█████╗░███╗░░██╗░█████╗░██╗░░░░░\n            ██╔══██╗██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║██╔══██╗██║░░░░░\n            ██║░░██║██████╔╝░░░██║░░░██║██║░░██║██╔██╗██║███████║██║░░░░░\n            ██║░░██║██╔═══╝░░░░██║░░░██║██║░░██║██║╚████║██╔══██║██║░░░░░\n            ╚█████╔╝██║░░░░░░░░██║░░░██║╚█████╔╝██║░╚███║██║░░██║███████╗              \n            ░╚════╝░╚═╝░░░░░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝╚═╝░░╚═╝╚══════╝\n                     ░██████╗████████╗██╗░░░██╗███████╗███████╗\n                      ██╔════╝╚══██╔══╝██║░░░██║██╔════╝██╔════╝\n                      ╚█████╗░░░░██║░░░██║░░░██║█████╗░░█████╗░░\n                      ░╚═══██╗░░░██║░░░██║░░░██║██╔══╝░░██╔══╝░░\n                      ██████╔╝░░░██║░░░╚██████╔╝██║░░░░░██║░░░░░\n                      ╚═════╝░░░░╚═╝░░░░╚═════╝░╚═╝░░░░░╚═╝░░░░░\n\n    ------------------------------------------------------------------------------- */\n\n/* Un Comment If You Dont Have User Banner Expierment Enabled */\n/*\n .fieldList-21DyL8 {\n  position: absolute;\n  top: 850px;\n  margin-left: -30px;\n}\n      \n/* ---------------------------------------------\n\n             ███████╗███╗░░██╗██████╗░\n             ██╔════╝████╗░██║██╔══██╗\n             █████╗░░██╔██╗██║██║░░██║\n             ██╔══╝░░██║╚████║██║░░██║\n             ███████╗██║░╚███║██████╔╝\n             ╚══════╝╚═╝░░╚══╝╚═════╝░\n             ╚══════╝╚═╝░░╚══╝╚═════╝░\n                  Version 1.0.6\n\n   --------------------------------------------- */\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Ovel",["",{type:"text-input",text:"Background",oninput:function(t){document.body.style.setProperty("--background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background")||"url('https://i.imgur.com/6NUSR9H.png')";return console.log(t),t}},{type:"text-input",text:"Background Blur",oninput:function(t){document.body.style.setProperty("--background-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-blur")||"8px";return console.log(t),t}},{type:"text-input",text:"Background Opacity",oninput:function(t){document.body.style.setProperty("--background-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-opacity")||"100%";return console.log(t),t}},{type:"text-input",text:"Background Brightness",oninput:function(t){document.body.style.setProperty("--background-brightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-brightness")||"92%";return console.log(t),t}},{type:"text-and-color",text:"Background Colour",oninput:function(t){document.body.style.setProperty("--background-colour",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-colour")||"#14182b9a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Chatbox Colour",oninput:function(t){document.body.style.setProperty("--chatbox-colour",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chatbox-colour")||"#21204238";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Background Primary Alt",oninput:function(t){document.body.style.setProperty("--background-primary-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-primary-alt")||"#2d355783";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Default Gradient",oninput:function(t){document.body.style.setProperty("--default-gradient",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--default-gradient")||"315deg, #4657a3 0%, #464186 74%";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Special Gradient",oninput:function(t){document.body.style.setProperty("--special-gradient",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--special-gradient")||"315deg, #333d91 0%, #c987b8 74%";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Red Gradient",oninput:function(t){document.body.style.setProperty("--red-gradient",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--red-gradient")||"315deg, #AA3738 0%, #F04747 74%";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Red Hsl",oninput:function(t){document.body.style.setProperty("--red-hsl",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--red-hsl")||"hsl(359, 63%, 53%)";return console.log(t),t}},{type:"text-and-color",text:"Yellow Gradient",oninput:function(t){document.body.style.setProperty("--yellow-gradient",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--yellow-gradient")||"315deg, #c29b1b 0%, #ffa640 74%";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Yellow Hsl",oninput:function(t){document.body.style.setProperty("--yellow-hsl",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--yellow-hsl")||"hsl(46, 72%, 52%)";return console.log(t),t}},{type:"text-and-color",text:"Green Gradient",oninput:function(t){document.body.style.setProperty("--green-gradient",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--green-gradient")||"315deg, #507a73 0%, #4b7c72  74%";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Grey Gradient",oninput:function(t){document.body.style.setProperty("--grey-gradient",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--grey-gradient")||"315deg, #5b55b3 0%, #5b55b3 74%";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"White Gradient",oninput:function(t){document.body.style.setProperty("--white-gradient",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--white-gradient")||"315deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.342) 74%";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Font Normal",oninput:function(t){document.body.style.setProperty("--font-normal",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-normal")||"500";return console.log(t),t}},{type:"text-input",text:"Font Hover",oninput:function(t){document.body.style.setProperty("--font-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-hover")||"bold";return console.log(t),t}},{type:"text-input",text:"Font Size Hover",oninput:function(t){document.body.style.setProperty("--font-size-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-hover")||"15px";return console.log(t),t}},{type:"text-input",text:"Hover Transition",oninput:function(t){document.body.style.setProperty("--hover-transition",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--hover-transition")||"0.1s linear";return console.log(t),t}},{type:"text-input",text:"Transform Normal",oninput:function(t){document.body.style.setProperty("--transform-normal",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--transform-normal")||"scale(1)";return console.log(t),t}},{type:"text-input",text:"Hover Transform",oninput:function(t){document.body.style.setProperty("--hover-transform",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--hover-transform")||"scale(1.15)";return console.log(t),t}},{type:"text-input",text:"Setting Hover Transform",oninput:function(t){document.body.style.setProperty("--setting-hover-transform",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--setting-hover-transform")||"scale(1.025)";return console.log(t),t}},{type:"text-input",text:"Button Hover Transform",oninput:function(t){document.body.style.setProperty("--button-hover-transform",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-hover-transform")||"scale(1.03)";return console.log(t),t}},{type:"text-and-color",text:"Green Bar On",oninput:function(t){document.body.style.setProperty("--green-bar-on",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--green-bar-on")||"#5c646480";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Green Slider Off",oninput:function(t){document.body.style.setProperty("--green-slider-off",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--green-slider-off")||"#5c646480";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Green Slider Dot",oninput:function(t){document.body.style.setProperty("--green-slider-dot",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--green-slider-dot")||"#fff";return console.log(t),t}},{type:"text-input",text:"Border Radius",oninput:function(t){document.body.style.setProperty("--border-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--border-radius")||"8px";return console.log(t),t}},{type:"text-input",text:"Bg Avatar",oninput:function(t){document.body.style.setProperty("--bg-avatar",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bg-avatar")||"url(https://i.imgur.com/g37HbBe.png)";return console.log(t),t}},{type:"text-input",text:"Popout Width",oninput:function(t){document.body.style.setProperty("--popout-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-width")||"480px";return console.log(t),t}},{type:"text-and-color",text:"Modal Bg",oninput:function(t){document.body.style.setProperty("--modal-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--modal-bg")||"#121524";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Scrollbars",oninput:function(t){document.body.style.setProperty("--scrollbars",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbars")||"none";return console.log(t),t}},{type:"text-input",text:"App Rounding",oninput:function(t){document.body.style.setProperty("--app-rounding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-rounding")||"16px";return console.log(t),t}},{type:"text-input",text:"Avatar Radius",oninput:function(t){document.body.style.setProperty("--avatar-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-radius")||"43.5%";return console.log(t),t}},{type:"text-input",text:"Sidebar Fade",oninput:function(t){document.body.style.setProperty("--sidebar-fade",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--sidebar-fade")||"92%";return console.log(t),t}},{type:"text-input",text:"Friends Sidebar Fade",oninput:function(t){document.body.style.setProperty("--friends-sidebar-fade",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--friends-sidebar-fade")||"68%";return console.log(t),t}},{type:"text-and-color",text:"Alt Color",oninput:function(t){document.body.style.setProperty("--alt-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alt-color")||"76, 70, 163";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Alt Color2",oninput:function(t){document.body.style.setProperty("--alt-color2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alt-color2")||"#4C46A3";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Streaming Color",oninput:function(t){document.body.style.setProperty("--streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--streaming-color")||"rgb(127, 50, 179)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Background Accent2",oninput:function(t){document.body.style.setProperty("--background-accent2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-accent2")||"#1ABC9C";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Background Accent3",oninput:function(t){document.body.style.setProperty("--background-accent3",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-accent3")||"#F52C79";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Bd Color",oninput:function(t){document.body.style.setProperty("--bd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bd-color")||"#4C46A3";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Bd Color Hover",oninput:function(t){document.body.style.setProperty("--bd-color-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bd-color-hover")||"#4C46A3";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Alt Color3",oninput:function(t){document.body.style.setProperty("--alt-color3",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alt-color3")||"244";return console.log(t),t}},{type:"text-input",text:"Public Servers",oninput:function(t){document.body.style.setProperty("--public-servers",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--public-servers")||"block";return console.log(t),t}},{type:"text-input",text:"Version",oninput:function(t){document.body.style.setProperty("--version",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--version")||'"v1.0.6PC"; --build: "150" !important';return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Ovel")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--background",document.body.style.getPropertyValue("--background")],["--background-blur",document.body.style.getPropertyValue("--background-blur")],["--background-opacity",document.body.style.getPropertyValue("--background-opacity")],["--background-brightness",document.body.style.getPropertyValue("--background-brightness")],["--background-colour",document.body.style.getPropertyValue("--background-colour")],["--chatbox-colour",document.body.style.getPropertyValue("--chatbox-colour")],["--background-primary-alt",document.body.style.getPropertyValue("--background-primary-alt")],["--default-gradient",document.body.style.getPropertyValue("--default-gradient")],["--special-gradient",document.body.style.getPropertyValue("--special-gradient")],["--red-gradient",document.body.style.getPropertyValue("--red-gradient")],["--red-hsl",document.body.style.getPropertyValue("--red-hsl")],["--yellow-gradient",document.body.style.getPropertyValue("--yellow-gradient")],["--yellow-hsl",document.body.style.getPropertyValue("--yellow-hsl")],["--green-gradient",document.body.style.getPropertyValue("--green-gradient")],["--grey-gradient",document.body.style.getPropertyValue("--grey-gradient")],["--white-gradient",document.body.style.getPropertyValue("--white-gradient")],["--font-normal",document.body.style.getPropertyValue("--font-normal")],["--font-hover",document.body.style.getPropertyValue("--font-hover")],["--font-size-hover",document.body.style.getPropertyValue("--font-size-hover")],["--hover-transition",document.body.style.getPropertyValue("--hover-transition")],["--transform-normal",document.body.style.getPropertyValue("--transform-normal")],["--hover-transform",document.body.style.getPropertyValue("--hover-transform")],["--setting-hover-transform",document.body.style.getPropertyValue("--setting-hover-transform")],["--button-hover-transform",document.body.style.getPropertyValue("--button-hover-transform")],["--green-bar-on",document.body.style.getPropertyValue("--green-bar-on")],["--green-slider-off",document.body.style.getPropertyValue("--green-slider-off")],["--green-slider-dot",document.body.style.getPropertyValue("--green-slider-dot")],["--border-radius",document.body.style.getPropertyValue("--border-radius")],["--bg-avatar",document.body.style.getPropertyValue("--bg-avatar")],["--popout-width",document.body.style.getPropertyValue("--popout-width")],["--modal-bg",document.body.style.getPropertyValue("--modal-bg")],["--scrollbars",document.body.style.getPropertyValue("--scrollbars")],["--app-rounding",document.body.style.getPropertyValue("--app-rounding")],["--avatar-radius",document.body.style.getPropertyValue("--avatar-radius")],["--sidebar-fade",document.body.style.getPropertyValue("--sidebar-fade")],["--friends-sidebar-fade",document.body.style.getPropertyValue("--friends-sidebar-fade")],["--alt-color",document.body.style.getPropertyValue("--alt-color")],["--alt-color2",document.body.style.getPropertyValue("--alt-color2")],["--streaming-color",document.body.style.getPropertyValue("--streaming-color")],["--background-accent2",document.body.style.getPropertyValue("--background-accent2")],["--background-accent3",document.body.style.getPropertyValue("--background-accent3")],["--bd-color",document.body.style.getPropertyValue("--bd-color")],["--bd-color-hover",document.body.style.getPropertyValue("--bd-color-hover")],["--alt-color3",document.body.style.getPropertyValue("--alt-color3")],["--public-servers",document.body.style.getPropertyValue("--public-servers")],["--version",document.body.style.getPropertyValue("--version")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default