parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,u,r,l){try{var s=t[r](l),i=s.value}catch(a){return void o(a)}s.done?e(i):Promise.resolve(i).then(n,u)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(u,r){var l=e.apply(o,n);function s(e){t(l,u,r,s,i,"next",e)}function i(e){t(l,u,r,s,i,"throw",e)}s(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name Discord+\n * @version 3.1.1\n * @author PlusInsta\n * @authorLink https://plusinsta.xyz\n * @description A sleek, customizable Discord theme.\n * @website https://plusinsta.xyz/discord-plus/\n * @source https://github.com/PlusInsta/discord-plus/blob/master/DiscordPlus-source.theme.css\n * @invite 2Jwh2nS\n*/\n@import url(//plusinsta.xyz/discord-plus/DiscordPlus-source.theme.css);\n\n/* I've commented most of these values so you can change them yourself.\n   If you're having trouble, or you want to do more than what these values\n   allow for, drop by our server and we can probably help you out! */\n\n/* Font import */\n@import url(https://fonts.googleapis.com/css?family=Poppins:400,700|Roboto:400,700|Righteous);\n/* This link loads fonts. Go to fonts.google.com and have a look!\nIf there's any fonts you like, click them, select styles that are\nthe closest to 400 and 700. If you want more fonts, back out to the\nmain page and add more. When you're done, click \"View selected families\"\nin the top right, click the Embed tab, and replace the entire line with\nthe \"CSS rules\" it gives you. After that, just set the fonts below! */\n\n:root {\n/* Background image. Falls back to accent color if invalid.\n   To use an image on your computer, send it anywhere on Discord,\n   then right-click and Copy Link, then paste it between the ()'s'. */\n--dplus-background: url(https://i.imgur.com/3AiL3yN.png);\n\n/* Accent color, used to decorate the UI with colors. */\n--dplus-accent-ui: #802060;\n--dplus-accent-ui-hover: #601545;\n\n/* Fonts */\n--dplus-font-ui: 'Poppins';\n--dplus-font-body: 'Roboto';\n--dplus-font-header: 'Righteous';\n\n/* Round corner sizes, measured in pixel radius\n   Set avatar/server to 50% for circles\n   UI radius must be in pixels */\n--dplus-radius-ui: 10px;\n--dplus-radius-avatar: 20%;\n--dplus-radius-server: 20%;\n\n/* This determines margins and padding */\n--dplus-spacing-ui: 10px;\n--dplus-spacing-app: 10px;\n\n/* The Home icon */\n--dplus-icon-home-dark: url(//plusinsta.xyz/discord-plus/assets/discord/home_dark.svg);\n--dplus-icon-home-light: url(//plusinsta.xyz/discord-plus/assets/discord/home_light.svg);\n\n/* Icon sizes */\n--dplus-icon-avatar-chat: 64px;\n--dplus-icon-avatar-list: 32px;\n--dplus-icon-avatar-profile: 80px;\n\n--dplus-icon-server-sidebar: 48px;\n--dplus-icon-server-list: 32px;\n\n/* Width of different elements */\n--dplus-channels-width: 240px;\n--dplus-members-width: 240px;\n--dplus-scrollbar-width: 10px;\n\n/* Blur percentage. Set to 0 to disable blur.\n   Performance may be affected by this option. */\n--dplus-blur-scale: 100;\n\n/* Background covers | Explanations below\t*/\n--dplus-dark-bgc-ui-base: hsla(0, 0%, 0%, 0.74);\n--dplus-dark-bgc-ui-base-hover: hsla(0, 0%, 0%, 0.82);\n--dplus-dark-bgc-ui-card: hsla(0, 0%, 7%, 0.75);\n--dplus-dark-bgc-ui-card-hover: hsla(0, 0%, 15%, 0.50);\n--dplus-dark-bgc-chatmsg: hsla(0, 0%, 0%, 0.74);\n--dplus-dark-bgc-chatmsg-hover: hsla(0, 0%, 0%, 0.82);\n--dplus-dark-bgc-popout: hsla(0, 0%, 0%, 0.75);\n--dplus-dark-bgc-button: hsla(0, 0%, 15%, 0.50);\n--dplus-dark-bgc-button-hover: hsla(0, 0%, 20%, 0.60);\n--dplus-dark-bgc-server-button: hsla(0, 0%, 15%, 0.50);\n--dplus-dark-bgc-server-button-hover: hsla(0, 0%, 20%, 0.60);\n\n--dplus-light-bgc-ui-base: hsla(0, 0%, 97%, 0.88);\n--dplus-light-bgc-ui-base-hover: hsla(0, 0%, 100%, 0.90);\n--dplus-light-bgc-ui-card: hsla(0, 0%, 93%, 0.75);\n--dplus-light-bgc-ui-card-hover: hsla(0, 0%, 50%, 0.25);\n--dplus-light-bgc-chatmsg: hsla(0, 0%, 97%, 0.88);\n--dplus-light-bgc-chatmsg-hover: hsla(0, 0%, 100%, 0.90);\n--dplus-light-bgc-popout: hsla(0, 0%, 100%, 0.80);\n--dplus-light-bgc-button: hsla(0, 0%, 50%, 0.80);\n--dplus-light-bgc-button-hover: hsla(0, 0%, 40%, 0.50);\n--dplus-light-bgc-server-button: hsla(0, 0%, 95%, 0.75);\n--dplus-light-bgc-server-button-hover: hsla(0, 0%, 100%, 1);\n}\n\n/* Explanations:\n* bgc is short for background cover / color\n* dark/light corresponds to the current active theme\n* ui-base is the main UI\n* ui-base-hover is used when hovering over clickable elements\n* ui-card is for cards like in server discovery\n* ui-card-hover is for hovering over cards\n* chatmsg governs messages in chat and the message box\n* chatmsg-hover is for hovering over a message\n* popout affects all popouts, like context menu, profiles, etc.\n* server-button affects server icons on the left side of the screen\n* server-button-hover affects servers icons when hovered over\n*/\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Discord+",["",{type:"text-input",text:"Dplus Background",oninput:function(t){document.body.style.setProperty("--dplus-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-background")||"url(https://i.imgur.com/3AiL3yN.png)";return console.log(t),t}},{type:"text-and-color",text:"Dplus Accent Ui",oninput:function(t){document.body.style.setProperty("--dplus-accent-ui",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-accent-ui")||"#802060";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Dplus Accent Ui Hover",oninput:function(t){document.body.style.setProperty("--dplus-accent-ui-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-accent-ui-hover")||"#601545";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Dplus Font Ui",oninput:function(t){document.body.style.setProperty("--dplus-font-ui",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-font-ui")||"'Poppins'";return console.log(t),t}},{type:"text-input",text:"Dplus Font Body",oninput:function(t){document.body.style.setProperty("--dplus-font-body",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-font-body")||"'Roboto'";return console.log(t),t}},{type:"text-input",text:"Dplus Font Header",oninput:function(t){document.body.style.setProperty("--dplus-font-header",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-font-header")||"'Righteous'";return console.log(t),t}},{type:"text-input",text:"Dplus Radius Ui",oninput:function(t){document.body.style.setProperty("--dplus-radius-ui",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-radius-ui")||"10px";return console.log(t),t}},{type:"text-input",text:"Dplus Radius Avatar",oninput:function(t){document.body.style.setProperty("--dplus-radius-avatar",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-radius-avatar")||"20%";return console.log(t),t}},{type:"text-input",text:"Dplus Radius Server",oninput:function(t){document.body.style.setProperty("--dplus-radius-server",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-radius-server")||"20%";return console.log(t),t}},{type:"text-input",text:"Dplus Spacing Ui",oninput:function(t){document.body.style.setProperty("--dplus-spacing-ui",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-spacing-ui")||"10px";return console.log(t),t}},{type:"text-input",text:"Dplus Spacing App",oninput:function(t){document.body.style.setProperty("--dplus-spacing-app",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-spacing-app")||"10px";return console.log(t),t}},{type:"text-input",text:"Dplus Icon Home Dark",oninput:function(t){document.body.style.setProperty("--dplus-icon-home-dark",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-icon-home-dark")||"url(//plusinsta.xyz/discord-plus/assets/discord/home_dark.svg)";return console.log(t),t}},{type:"text-input",text:"Dplus Icon Home Light",oninput:function(t){document.body.style.setProperty("--dplus-icon-home-light",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-icon-home-light")||"url(//plusinsta.xyz/discord-plus/assets/discord/home_light.svg)";return console.log(t),t}},{type:"text-input",text:"Dplus Icon Avatar Chat",oninput:function(t){document.body.style.setProperty("--dplus-icon-avatar-chat",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-icon-avatar-chat")||"64px";return console.log(t),t}},{type:"text-input",text:"Dplus Icon Avatar List",oninput:function(t){document.body.style.setProperty("--dplus-icon-avatar-list",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-icon-avatar-list")||"32px";return console.log(t),t}},{type:"text-input",text:"Dplus Icon Avatar Profile",oninput:function(t){document.body.style.setProperty("--dplus-icon-avatar-profile",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-icon-avatar-profile")||"80px";return console.log(t),t}},{type:"text-input",text:"Dplus Icon Server Sidebar",oninput:function(t){document.body.style.setProperty("--dplus-icon-server-sidebar",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-icon-server-sidebar")||"48px";return console.log(t),t}},{type:"text-input",text:"Dplus Icon Server List",oninput:function(t){document.body.style.setProperty("--dplus-icon-server-list",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-icon-server-list")||"32px";return console.log(t),t}},{type:"text-input",text:"Dplus Channels Width",oninput:function(t){document.body.style.setProperty("--dplus-channels-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-channels-width")||"240px";return console.log(t),t}},{type:"text-input",text:"Dplus Members Width",oninput:function(t){document.body.style.setProperty("--dplus-members-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-members-width")||"240px";return console.log(t),t}},{type:"text-input",text:"Dplus Scrollbar Width",oninput:function(t){document.body.style.setProperty("--dplus-scrollbar-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-scrollbar-width")||"10px";return console.log(t),t}},{type:"text-input",text:"Dplus Blur Scale",oninput:function(t){document.body.style.setProperty("--dplus-blur-scale",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-blur-scale")||"100";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Ui Base",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-ui-base",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-ui-base")||"hsla(0, 0%, 0%, 0.74)";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Ui Base Hover",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-ui-base-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-ui-base-hover")||"hsla(0, 0%, 0%, 0.82)";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Ui Card",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-ui-card",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-ui-card")||"hsla(0, 0%, 7%, 0.75)";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Ui Card Hover",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-ui-card-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-ui-card-hover")||"hsla(0, 0%, 15%, 0.50)";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Chatmsg",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-chatmsg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-chatmsg")||"hsla(0, 0%, 0%, 0.74)";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Chatmsg Hover",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-chatmsg-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-chatmsg-hover")||"hsla(0, 0%, 0%, 0.82)";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Popout",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-popout",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-popout")||"hsla(0, 0%, 0%, 0.75)";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Button",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-button",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-button")||"hsla(0, 0%, 15%, 0.50)";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Button Hover",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-button-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-button-hover")||"hsla(0, 0%, 20%, 0.60)";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Server Button",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-server-button",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-server-button")||"hsla(0, 0%, 15%, 0.50)";return console.log(t),t}},{type:"text-input",text:"Dplus Dark Bgc Server Button Hover",oninput:function(t){document.body.style.setProperty("--dplus-dark-bgc-server-button-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-dark-bgc-server-button-hover")||"hsla(0, 0%, 20%, 0.60)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Ui Base",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-ui-base",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-ui-base")||"hsla(0, 0%, 97%, 0.88)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Ui Base Hover",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-ui-base-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-ui-base-hover")||"hsla(0, 0%, 100%, 0.90)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Ui Card",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-ui-card",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-ui-card")||"hsla(0, 0%, 93%, 0.75)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Ui Card Hover",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-ui-card-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-ui-card-hover")||"hsla(0, 0%, 50%, 0.25)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Chatmsg",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-chatmsg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-chatmsg")||"hsla(0, 0%, 97%, 0.88)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Chatmsg Hover",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-chatmsg-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-chatmsg-hover")||"hsla(0, 0%, 100%, 0.90)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Popout",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-popout",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-popout")||"hsla(0, 0%, 100%, 0.80)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Button",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-button",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-button")||"hsla(0, 0%, 50%, 0.80)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Button Hover",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-button-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-button-hover")||"hsla(0, 0%, 40%, 0.50)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Server Button",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-server-button",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-server-button")||"hsla(0, 0%, 95%, 0.75)";return console.log(t),t}},{type:"text-input",text:"Dplus Light Bgc Server Button Hover",oninput:function(t){document.body.style.setProperty("--dplus-light-bgc-server-button-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dplus-light-bgc-server-button-hover")||"hsla(0, 0%, 100%, 1)";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Discord+")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--dplus-background",document.body.style.getPropertyValue("--dplus-background")],["--dplus-accent-ui",document.body.style.getPropertyValue("--dplus-accent-ui")],["--dplus-accent-ui-hover",document.body.style.getPropertyValue("--dplus-accent-ui-hover")],["--dplus-font-ui",document.body.style.getPropertyValue("--dplus-font-ui")],["--dplus-font-body",document.body.style.getPropertyValue("--dplus-font-body")],["--dplus-font-header",document.body.style.getPropertyValue("--dplus-font-header")],["--dplus-radius-ui",document.body.style.getPropertyValue("--dplus-radius-ui")],["--dplus-radius-avatar",document.body.style.getPropertyValue("--dplus-radius-avatar")],["--dplus-radius-server",document.body.style.getPropertyValue("--dplus-radius-server")],["--dplus-spacing-ui",document.body.style.getPropertyValue("--dplus-spacing-ui")],["--dplus-spacing-app",document.body.style.getPropertyValue("--dplus-spacing-app")],["--dplus-icon-home-dark",document.body.style.getPropertyValue("--dplus-icon-home-dark")],["--dplus-icon-home-light",document.body.style.getPropertyValue("--dplus-icon-home-light")],["--dplus-icon-avatar-chat",document.body.style.getPropertyValue("--dplus-icon-avatar-chat")],["--dplus-icon-avatar-list",document.body.style.getPropertyValue("--dplus-icon-avatar-list")],["--dplus-icon-avatar-profile",document.body.style.getPropertyValue("--dplus-icon-avatar-profile")],["--dplus-icon-server-sidebar",document.body.style.getPropertyValue("--dplus-icon-server-sidebar")],["--dplus-icon-server-list",document.body.style.getPropertyValue("--dplus-icon-server-list")],["--dplus-channels-width",document.body.style.getPropertyValue("--dplus-channels-width")],["--dplus-members-width",document.body.style.getPropertyValue("--dplus-members-width")],["--dplus-scrollbar-width",document.body.style.getPropertyValue("--dplus-scrollbar-width")],["--dplus-blur-scale",document.body.style.getPropertyValue("--dplus-blur-scale")],["--dplus-dark-bgc-ui-base",document.body.style.getPropertyValue("--dplus-dark-bgc-ui-base")],["--dplus-dark-bgc-ui-base-hover",document.body.style.getPropertyValue("--dplus-dark-bgc-ui-base-hover")],["--dplus-dark-bgc-ui-card",document.body.style.getPropertyValue("--dplus-dark-bgc-ui-card")],["--dplus-dark-bgc-ui-card-hover",document.body.style.getPropertyValue("--dplus-dark-bgc-ui-card-hover")],["--dplus-dark-bgc-chatmsg",document.body.style.getPropertyValue("--dplus-dark-bgc-chatmsg")],["--dplus-dark-bgc-chatmsg-hover",document.body.style.getPropertyValue("--dplus-dark-bgc-chatmsg-hover")],["--dplus-dark-bgc-popout",document.body.style.getPropertyValue("--dplus-dark-bgc-popout")],["--dplus-dark-bgc-button",document.body.style.getPropertyValue("--dplus-dark-bgc-button")],["--dplus-dark-bgc-button-hover",document.body.style.getPropertyValue("--dplus-dark-bgc-button-hover")],["--dplus-dark-bgc-server-button",document.body.style.getPropertyValue("--dplus-dark-bgc-server-button")],["--dplus-dark-bgc-server-button-hover",document.body.style.getPropertyValue("--dplus-dark-bgc-server-button-hover")],["--dplus-light-bgc-ui-base",document.body.style.getPropertyValue("--dplus-light-bgc-ui-base")],["--dplus-light-bgc-ui-base-hover",document.body.style.getPropertyValue("--dplus-light-bgc-ui-base-hover")],["--dplus-light-bgc-ui-card",document.body.style.getPropertyValue("--dplus-light-bgc-ui-card")],["--dplus-light-bgc-ui-card-hover",document.body.style.getPropertyValue("--dplus-light-bgc-ui-card-hover")],["--dplus-light-bgc-chatmsg",document.body.style.getPropertyValue("--dplus-light-bgc-chatmsg")],["--dplus-light-bgc-chatmsg-hover",document.body.style.getPropertyValue("--dplus-light-bgc-chatmsg-hover")],["--dplus-light-bgc-popout",document.body.style.getPropertyValue("--dplus-light-bgc-popout")],["--dplus-light-bgc-button",document.body.style.getPropertyValue("--dplus-light-bgc-button")],["--dplus-light-bgc-button-hover",document.body.style.getPropertyValue("--dplus-light-bgc-button-hover")],["--dplus-light-bgc-server-button",document.body.style.getPropertyValue("--dplus-light-bgc-server-button")],["--dplus-light-bgc-server-button-hover",document.body.style.getPropertyValue("--dplus-light-bgc-server-button-hover")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default