parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,i,u){try{var l=t[i](u),y=l.value}catch(s){return void o(s)}l.done?e(y):Promise.resolve(y).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,i){var u=e.apply(o,n);function l(e){t(u,r,i,l,y,"next",e)}function y(e){t(u,r,i,l,y,"throw",e)}l(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name Fluent\n * @author Gibbu\n * @version 1.0.10\n * @description Brings the look of Windows 11 to Discord.\n * @source https://github.com/DiscordStyles/Fluent\n * @invite ZHthyCw\n * @authorId 174868361040232448\n*/\n\n@import url('https://discordstyles.github.io/Fluent/Fluent.css');\n\n@import url(\"https://discordstyles.github.io/Fluent/SelfMessages.css\"); /* Self Messages - Moves your messages to the right of the chat box. Remove to disable */\n:root {\n  --accent: 98, 205, 254; /* The colour used throughout the app | R,G,B format | Default: 98, 205, 254 */\n  --channels-width: 300px; /* Size of the server channel/dms list | Default: 300px */\n  --members-width: 280px; /* Size of the members list | Default: 280px */\n  --server-size: 48px; /* Size of each server in the server list | Default: 48px */\n  --dark-background-hue: 0; /* The hue of the background colour. | Options: 0 to 360 | Default: 0 */\n  --dark-background-saturation: 0%; /* How much of the colour should be visible. | Must end in a % | Default: 0% */\n}")),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("Fluent",["",{type:"text-and-color",text:"Accent",oninput:function(t){document.body.style.setProperty("--accent",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent")||"98, 205, 254";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Channels Width",oninput:function(t){document.body.style.setProperty("--channels-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channels-width")||"300px";return console.log(t),t}},{type:"text-input",text:"Members Width",oninput:function(t){document.body.style.setProperty("--members-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--members-width")||"280px";return console.log(t),t}},{type:"text-input",text:"Server Size",oninput:function(t){document.body.style.setProperty("--server-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-size")||"48px";return console.log(t),t}},{type:"text-input",text:"Dark Background Hue",oninput:function(t){document.body.style.setProperty("--dark-background-hue",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-background-hue")||"0";return console.log(t),t}},{type:"text-input",text:"Dark Background Saturation",oninput:function(t){document.body.style.setProperty("--dark-background-saturation",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dark-background-saturation")||"0%";return console.log(t),t}},{type:"text-input",text:"Fluent Version",oninput:function(t){document.body.style.setProperty("--fluent-version",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--fluent-version")||'"1.0.10"';return console.log(t),t}},{type:"text-and-color",text:"Transition",oninput:function(t){document.body.style.setProperty("--transition",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--transition")||"cubic-bezier(0,0,0,1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Accent Text",oninput:function(t){document.body.style.setProperty("--accent-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-text")||"#000";return console.log(t),t}},{type:"text-input",text:"Pill Width",oninput:function(t){document.body.style.setProperty("--pill-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--pill-width")||"4px";return console.log(t),t}},{type:"text-input",text:"Pill Height",oninput:function(t){document.body.style.setProperty("--pill-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--pill-height")||"16px";return console.log(t),t}},{type:"text-input",text:"Btn Radius",oninput:function(t){document.body.style.setProperty("--btn-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--btn-radius")||"6px";return console.log(t),t}},{type:"text-input",text:"Rounded High",oninput:function(t){document.body.style.setProperty("--rounded-high",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rounded-high")||"8px";return console.log(t),t}},{type:"text-input",text:"Rounded",oninput:function(t){document.body.style.setProperty("--rounded",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rounded")||"4px";return console.log(t),t}},{type:"text-input",text:"Toolbar Height",oninput:function(t){document.body.style.setProperty("--toolbar-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-height")||"64px";return console.log(t),t}},{type:"text-input",text:"Font Weight Light",oninput:function(t){document.body.style.setProperty("--font-weight-light",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-weight-light")||"300";return console.log(t),t}},{type:"text-input",text:"Font Weight Semilight",oninput:function(t){document.body.style.setProperty("--font-weight-semilight",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-weight-semilight")||"350";return console.log(t),t}},{type:"text-input",text:"Font Weight Regular",oninput:function(t){document.body.style.setProperty("--font-weight-regular",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-weight-regular")||"400";return console.log(t),t}},{type:"text-input",text:"Font Weight Semibold",oninput:function(t){document.body.style.setProperty("--font-weight-semibold",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-weight-semibold")||"600";return console.log(t),t}},{type:"text-input",text:"Font Weight Bold",oninput:function(t){document.body.style.setProperty("--font-weight-bold",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-weight-bold")||"700";return console.log(t),t}},{type:"text-input",text:"Font Size Xs",oninput:function(t){document.body.style.setProperty("--font-size-xs",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-xs")||"12px";return console.log(t),t}},{type:"text-input",text:"Font Size Sm",oninput:function(t){document.body.style.setProperty("--font-size-sm",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-sm")||"14px";return console.log(t),t}},{type:"text-input",text:"Font Size",oninput:function(t){document.body.style.setProperty("--font-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size")||"16px";return console.log(t),t}},{type:"text-input",text:"Font Size Md",oninput:function(t){document.body.style.setProperty("--font-size-md",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-md")||"18px";return console.log(t),t}},{type:"text-input",text:"Font Size Lg",oninput:function(t){document.body.style.setProperty("--font-size-lg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-lg")||"20px";return console.log(t),t}},{type:"text-input",text:"Font Size Xl",oninput:function(t){document.body.style.setProperty("--font-size-xl",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-xl")||"28px";return console.log(t),t}},{type:"text-input",text:"Font Size 2xl",oninput:function(t){document.body.style.setProperty("--font-size-2xl",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-2xl")||"40px";return console.log(t),t}},{type:"text-input",text:"Line Height",oninput:function(t){document.body.style.setProperty("--line-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--line-height")||"16px";return console.log(t),t}},{type:"text-input",text:"Line Height Md",oninput:function(t){document.body.style.setProperty("--line-height-md",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--line-height-md")||"20px";return console.log(t),t}},{type:"text-input",text:"Line Height Lg",oninput:function(t){document.body.style.setProperty("--line-height-lg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--line-height-lg")||"24px";return console.log(t),t}},{type:"text-input",text:"Line Height Xl",oninput:function(t){document.body.style.setProperty("--line-height-xl",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--line-height-xl")||"28px";return console.log(t),t}},{type:"text-input",text:"Line Height 2xl",oninput:function(t){document.body.style.setProperty("--line-height-2xl",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--line-height-2xl")||"36px";return console.log(t),t}},{type:"text-input",text:"Line Height 3xl",oninput:function(t){document.body.style.setProperty("--line-height-3xl",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--line-height-3xl")||"52px";return console.log(t),t}},{type:"text-input",text:"Font Display",oninput:function(t){document.body.style.setProperty("--font-display",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-display")||'"Segoe UI", sans-serif';return console.log(t),t}},{type:"text-input",text:"Font Primary",oninput:function(t){document.body.style.setProperty("--font-primary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-primary")||'"Segoe UI", sans-serif';return console.log(t),t}},{type:"text-input",text:"Shadow Flyout",oninput:function(t){document.body.style.setProperty("--shadow-flyout",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--shadow-flyout")||"0px 8px 16px hsla(0 0% 0% / 0.14)";return console.log(t),t}},{type:"text-input",text:"Shadow Dialog",oninput:function(t){document.body.style.setProperty("--shadow-dialog",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--shadow-dialog")||"0px 32px 64px hsla(0 0% 0% / 0.188) 0px 2px 21px hsla(0 0% 0% / 0.147)";return console.log(t),t}},{type:"text-input",text:"Cursor",oninput:function(t){document.body.style.setProperty("--cursor",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--cursor")||"default";return console.log(t),t}},{type:"text-input",text:"Chat Padding Y",oninput:function(t){document.body.style.setProperty("--chat-padding-y",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-padding-y")||"12px";return console.log(t),t}},{type:"text-input",text:"Chat Padding X",oninput:function(t){document.body.style.setProperty("--chat-padding-x",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-padding-x")||"16px";return console.log(t),t}},{type:"text-input",text:"Chat Spacing Y",oninput:function(t){document.body.style.setProperty("--chat-spacing-y",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-spacing-y")||"32px";return console.log(t),t}},{type:"text-input",text:"Chat Spacing X",oninput:function(t){document.body.style.setProperty("--chat-spacing-x",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-spacing-x")||"24px";return console.log(t),t}},{type:"text-input",text:"Server Icon Size",oninput:function(t){document.body.style.setProperty("--server-icon-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-icon-size")||"28px";return console.log(t),t}},{type:"text-input",text:"Server Icon Shape",oninput:function(t){document.body.style.setProperty("--server-icon-shape",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-icon-shape")||"50%";return console.log(t),t}},{type:"text-input",text:"Server Folder Icon Shape",oninput:function(t){document.body.style.setProperty("--server-folder-icon-shape",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-folder-icon-shape")||"2px";return console.log(t),t}},{type:"text-input",text:"Banner Height",oninput:function(t){document.body.style.setProperty("--banner-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--banner-height")||"155px";return console.log(t),t}},{type:"text-input",text:"Win Btn Height",oninput:function(t){document.body.style.setProperty("--win-btn-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--win-btn-height")||"32px";return console.log(t),t}},{type:"text-input",text:"Win Btn Width",oninput:function(t){document.body.style.setProperty("--win-btn-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--win-btn-width")||"52px";return console.log(t),t}},{type:"text-input",text:"Discord Grey",oninput:function(t){document.body.style.setProperty("--discord-grey",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-grey")||"217 8% 34%";return console.log(t),t}},{type:"text-input",text:"Pill Hovered",oninput:function(t){document.body.style.setProperty("--pill-hovered",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--pill-hovered")||"#fff";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Fluent")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--accent",document.body.style.getPropertyValue("--accent")],["--channels-width",document.body.style.getPropertyValue("--channels-width")],["--members-width",document.body.style.getPropertyValue("--members-width")],["--server-size",document.body.style.getPropertyValue("--server-size")],["--dark-background-hue",document.body.style.getPropertyValue("--dark-background-hue")],["--dark-background-saturation",document.body.style.getPropertyValue("--dark-background-saturation")],["--fluent-version",document.body.style.getPropertyValue("--fluent-version")],["--transition",document.body.style.getPropertyValue("--transition")],["--accent-text",document.body.style.getPropertyValue("--accent-text")],["--pill-width",document.body.style.getPropertyValue("--pill-width")],["--pill-height",document.body.style.getPropertyValue("--pill-height")],["--btn-radius",document.body.style.getPropertyValue("--btn-radius")],["--rounded-high",document.body.style.getPropertyValue("--rounded-high")],["--rounded",document.body.style.getPropertyValue("--rounded")],["--toolbar-height",document.body.style.getPropertyValue("--toolbar-height")],["--font-weight-light",document.body.style.getPropertyValue("--font-weight-light")],["--font-weight-semilight",document.body.style.getPropertyValue("--font-weight-semilight")],["--font-weight-regular",document.body.style.getPropertyValue("--font-weight-regular")],["--font-weight-semibold",document.body.style.getPropertyValue("--font-weight-semibold")],["--font-weight-bold",document.body.style.getPropertyValue("--font-weight-bold")],["--font-size-xs",document.body.style.getPropertyValue("--font-size-xs")],["--font-size-sm",document.body.style.getPropertyValue("--font-size-sm")],["--font-size",document.body.style.getPropertyValue("--font-size")],["--font-size-md",document.body.style.getPropertyValue("--font-size-md")],["--font-size-lg",document.body.style.getPropertyValue("--font-size-lg")],["--font-size-xl",document.body.style.getPropertyValue("--font-size-xl")],["--font-size-2xl",document.body.style.getPropertyValue("--font-size-2xl")],["--line-height",document.body.style.getPropertyValue("--line-height")],["--line-height-md",document.body.style.getPropertyValue("--line-height-md")],["--line-height-lg",document.body.style.getPropertyValue("--line-height-lg")],["--line-height-xl",document.body.style.getPropertyValue("--line-height-xl")],["--line-height-2xl",document.body.style.getPropertyValue("--line-height-2xl")],["--line-height-3xl",document.body.style.getPropertyValue("--line-height-3xl")],["--font-display",document.body.style.getPropertyValue("--font-display")],["--font-primary",document.body.style.getPropertyValue("--font-primary")],["--shadow-flyout",document.body.style.getPropertyValue("--shadow-flyout")],["--shadow-dialog",document.body.style.getPropertyValue("--shadow-dialog")],["--cursor",document.body.style.getPropertyValue("--cursor")],["--chat-padding-y",document.body.style.getPropertyValue("--chat-padding-y")],["--chat-padding-x",document.body.style.getPropertyValue("--chat-padding-x")],["--chat-spacing-y",document.body.style.getPropertyValue("--chat-spacing-y")],["--chat-spacing-x",document.body.style.getPropertyValue("--chat-spacing-x")],["--server-icon-size",document.body.style.getPropertyValue("--server-icon-size")],["--server-icon-shape",document.body.style.getPropertyValue("--server-icon-shape")],["--server-folder-icon-shape",document.body.style.getPropertyValue("--server-folder-icon-shape")],["--banner-height",document.body.style.getPropertyValue("--banner-height")],["--win-btn-height",document.body.style.getPropertyValue("--win-btn-height")],["--win-btn-width",document.body.style.getPropertyValue("--win-btn-width")],["--discord-grey",document.body.style.getPropertyValue("--discord-grey")],["--pill-hovered",document.body.style.getPropertyValue("--pill-hovered")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default