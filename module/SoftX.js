parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,u,l){try{var i=t[u](l),a=i.value}catch(s){return void o(s)}i.done?e(a):Promise.resolve(a).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,u){var l=e.apply(o,n);function i(e){t(l,r,u,i,a,"next",e)}function a(e){t(l,r,u,i,a,"throw",e)}i(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name SoftX\n * @author Gibbu#1211\n * @version 1.0.0\n * @invite ZHthyCw\n * @description A soft and comfy feel for Discord.\n * @source https://github.com/DiscordStyles/SoftX\n*/\n\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');\n@import url(\"https://discordstyles.github.io/SoftX/SoftX.css\");\n@import url(\"https://discordstyles.github.io/SoftX/RadialGlow.css\");\n@import url(\"https://discordstyles.github.io/Addons/windows-titlebar.css\");\n\n:root {\n\t/* SoftX variables */\n\t--background-image: url('https://i.imgur.com/Nglfni6.png'); /* Background image | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif) */\n\t--background-blur: 0px; /* Blur intensity of --background-image | Must end in px | Default: 0px */\n\n\t--accent: 0, 231, 169; /* Colour used around the app. | Values are in R,G,B format. | Default: 0, 231, 169 */\n\n\t--channels-width: 300px; /* Width of the channels list. | Default: 300px */\n\t--guilds-width: 105px; /* Width of the server list. | Default: 105px */\n\t--members-width: 280px; /* Width of the members list. | Default: 280px */\n\n\t--server-size: 50px; /* Size of the servers inside the server list. | Default: 50px */\n\t--chat-avatar-size: 32px; /* Size of the chat avatars. | Default: 32px */\n\n\t--glow-intensity: 1; /* Intensity of the glow used around the app. | Set to 0 to disable the glow. | Decimals allowed | Default: 1 */\n\n\t--opacity: .85; /* Opacity of overall app. | Default: .85 */\n\n\t--font: 'Inter'; /* Custom font | Default: 'Inter' */\n\n\t--avatar-roundness: 50%; /* Roundness for avatars. | 0% = Square, 50% = Circle | Default: 50% */\n\t--server-roundness: 50%; /* Roundness for servers. | 0% = Square, 50% = Circle | Default: 50% */\n\n\n\n\t/* RadialStatus veriables */\n\t--rs-small-spacing: 2px; /* Spacing between profile image and outer ring on small icons (e.g. member list) | Default: 2px */\n\t--rs-medium-spacing: 4px; /* Spacing between profile image and outer ring on medium icons (e.g. user popout) | Default: 4px */\n\t--rs-large-spacing: 4px; /* Spacing between profile image and outer ring on medium icons (e.g. user popout fullscreen) | Default: 4px */\n\n\t--rs-small-width: 1.5px; /* Ring width (follows same sizing as above) | Default: 1.5px */\n\t--rs-medium-width: 2px; /* Default: 2px */\n\t--rs-large-width: 2px; /* Default: 2px */\n\n\t/* Customizable colors */\n\t--rs-online-color: #43b581; /* Default: #43b581 */\n\t--rs-idle-color: #faa61a; /* Default: #faa61a */\n\t--rs-dnd-color: #f04747; /* Default: #f04747 */\n\t--rs-offline-color: #636b75; /* Default: #636b75 */\n\t--rs-streaming-color: #643da7; /* Default: #643da7 */\n\t--rs-invisible-color: #747f8d; /* Default: #747f8d */\n\t--rs-phone-color: var(--rs-online-color); /* Color of the phone for mobile users | Default: var(--rs-online-color) */\n\n\t--rs-phone-visible: block; /* Visibility of the phone for mobile users | Default: block */\n}\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("SoftX",["",{type:"text-input",text:"Background Image",oninput:function(t){document.body.style.setProperty("--background-image",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-image")||"url('https://i.imgur.com/Nglfni6.png')";return console.log(t),t}},{type:"text-input",text:"Background Blur",oninput:function(t){document.body.style.setProperty("--background-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-blur")||"0px";return console.log(t),t}},{type:"text-and-color",text:"Accent",oninput:function(t){document.body.style.setProperty("--accent",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent")||"0, 231, 169";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Channels Width",oninput:function(t){document.body.style.setProperty("--channels-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channels-width")||"300px";return console.log(t),t}},{type:"text-input",text:"Guilds Width",oninput:function(t){document.body.style.setProperty("--guilds-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--guilds-width")||"105px";return console.log(t),t}},{type:"text-input",text:"Members Width",oninput:function(t){document.body.style.setProperty("--members-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--members-width")||"280px";return console.log(t),t}},{type:"text-input",text:"Server Size",oninput:function(t){document.body.style.setProperty("--server-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-size")||"50px";return console.log(t),t}},{type:"text-input",text:"Chat Avatar Size",oninput:function(t){document.body.style.setProperty("--chat-avatar-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-avatar-size")||"32px";return console.log(t),t}},{type:"text-input",text:"Glow Intensity",oninput:function(t){document.body.style.setProperty("--glow-intensity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--glow-intensity")||"1";return console.log(t),t}},{type:"text-input",text:"Opacity",oninput:function(t){document.body.style.setProperty("--opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--opacity")||".85";return console.log(t),t}},{type:"text-input",text:"Font",oninput:function(t){document.body.style.setProperty("--font",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font")||"'Inter'";return console.log(t),t}},{type:"text-input",text:"Avatar Roundness",oninput:function(t){document.body.style.setProperty("--avatar-roundness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-roundness")||"50%";return console.log(t),t}},{type:"text-input",text:"Server Roundness",oninput:function(t){document.body.style.setProperty("--server-roundness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-roundness")||"50%";return console.log(t),t}},{type:"text-input",text:"Radial Status: Small Spacing",oninput:function(t){document.body.style.setProperty("--rs-small-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-spacing")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Medium Spacing",oninput:function(t){document.body.style.setProperty("--rs-medium-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-medium-spacing")||"4px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Spacing",oninput:function(t){document.body.style.setProperty("--rs-large-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-spacing")||"4px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Small Width",oninput:function(t){document.body.style.setProperty("--rs-small-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-width")||"1.5px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Medium Width",oninput:function(t){document.body.style.setProperty("--rs-medium-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-medium-width")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Width",oninput:function(t){document.body.style.setProperty("--rs-large-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-width")||"2px";return console.log(t),t}},{type:"text-and-color",text:"Radial Status: Online Color",oninput:function(t){document.body.style.setProperty("--rs-online-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-online-color")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Idle Color",oninput:function(t){document.body.style.setProperty("--rs-idle-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-idle-color")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: DND Color",oninput:function(t){document.body.style.setProperty("--rs-dnd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-dnd-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Offline Color",oninput:function(t){document.body.style.setProperty("--rs-offline-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-offline-color")||"#636b75";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Streaming Color",oninput:function(t){document.body.style.setProperty("--rs-streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-streaming-color")||"#643da7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Invisible Color",oninput:function(t){document.body.style.setProperty("--rs-invisible-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-invisible-color")||"#747f8d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Phone Visible",oninput:function(t){document.body.style.setProperty("--rs-phone-visible",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-phone-visible")||"block";return console.log(t),t}},{type:"text-input",text:"Softx Version",oninput:function(t){document.body.style.setProperty("--softx-version",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--softx-version")||'"1.0.7"';return console.log(t),t}},{type:"text-input",text:"Hue",oninput:function(t){document.body.style.setProperty("--hue",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--hue")||"0deg";return console.log(t),t}},{type:"text-input",text:"Saturation",oninput:function(t){document.body.style.setProperty("--saturation",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--saturation")||"0%";return console.log(t),t}},{type:"text-input",text:"Lightness",oninput:function(t){document.body.style.setProperty("--lightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--lightness")||"10%";return console.log(t),t}},{type:"text-input",text:"Transition",oninput:function(t){document.body.style.setProperty("--transition",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--transition")||".15s ease";return console.log(t),t}},{type:"text-input",text:"Blur",oninput:function(t){document.body.style.setProperty("--blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--blur")||"10px";return console.log(t),t}},{type:"text-input",text:"Tb Width",oninput:function(t){document.body.style.setProperty("--TB-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--TB-width")||"52px";return console.log(t),t}},{type:"text-input",text:"Tb Header Padding",oninput:function(t){document.body.style.setProperty("--TB-header-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--TB-header-padding")||"155px";return console.log(t),t}},{type:"text-input",text:"Shadow",oninput:function(t){document.body.style.setProperty("--shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--shadow")||"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)";return console.log(t),t}},{type:"text-input",text:"Shadow Lg",oninput:function(t){document.body.style.setProperty("--shadow-lg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--shadow-lg")||"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)";return console.log(t),t}},{type:"text-and-color",text:"Chat Bubble Bg",oninput:function(t){document.body.style.setProperty("--chat-bubble-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-bubble-bg")||"rgba(255, 255, 255, 0.03)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Chat Bubble Padding",oninput:function(t){document.body.style.setProperty("--chat-bubble-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-bubble-padding")||"10px 14px";return console.log(t),t}},{type:"text-input",text:"Chat Bubble Display",oninput:function(t){document.body.style.setProperty("--chat-bubble-display",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-bubble-display")||"inline-block";return console.log(t),t}},{type:"text-input",text:"Toolbar Height",oninput:function(t){document.body.style.setProperty("--toolbar-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-height")||"74px";return console.log(t),t}},{type:"text-input",text:"Server Spacing",oninput:function(t){document.body.style.setProperty("--server-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-spacing")||"16px";return console.log(t),t}},{type:"text-input",text:"Guild Scrollbar",oninput:function(t){document.body.style.setProperty("--guild-scrollbar",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--guild-scrollbar")||"none";return console.log(t),t}},{type:"text-input",text:"Unread Colour",oninput:function(t){document.body.style.setProperty("--unread-colour",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--unread-colour")||"255 255 255";return console.log(t),t}},{type:"text-input",text:"Backdrop Blur",oninput:function(t){document.body.style.setProperty("--backdrop-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backdrop-blur")||"10px";return console.log(t),t}},{type:"text-input",text:"Channel Height",oninput:function(t){document.body.style.setProperty("--channel-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channel-height")||"40px";return console.log(t),t}},{type:"text-input",text:"Member Height",oninput:function(t){document.body.style.setProperty("--member-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--member-height")||"54px";return console.log(t),t}},{type:"text-input",text:"Dm Height",oninput:function(t){document.body.style.setProperty("--dm-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dm-height")||"56px";return console.log(t),t}},{type:"text-input",text:"Scrollbar Background",oninput:function(t){document.body.style.setProperty("--scrollbar-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-background")||"rgb(255 255 255 / .05)";return console.log(t),t}},{type:"text-input",text:"Scrollbar Background Hover",oninput:function(t){document.body.style.setProperty("--scrollbar-background-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-background-hover")||"rgb(255 255 255 / .1)";return console.log(t),t}},{type:"text-input",text:"Scrollbar Background Active",oninput:function(t){document.body.style.setProperty("--scrollbar-background-active",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-background-active")||"rgb(255 255 255 / .15)";return console.log(t),t}},{type:"text-input",text:"Input Background",oninput:function(t){document.body.style.setProperty("--input-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-background")||"rgb(18 18 18 / .7)";return console.log(t),t}},{type:"text-input",text:"Input Border",oninput:function(t){document.body.style.setProperty("--input-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-border")||"rgb(255 255 255 / .05)";return console.log(t),t}},{type:"text-input",text:"Settings Sidebar Width",oninput:function(t){document.body.style.setProperty("--settings-sidebar-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-sidebar-width")||"300px";return console.log(t),t}},{type:"text-input",text:"Settings Content Width",oninput:function(t){document.body.style.setProperty("--settings-content-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-content-width")||"900px";return console.log(t),t}},{type:"text-input",text:"Settings Max Height",oninput:function(t){document.body.style.setProperty("--settings-max-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-max-height")||"800px";return console.log(t),t}},{type:"text-input",text:"Connection Colour",oninput:function(t){document.body.style.setProperty("--connection-colour",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--connection-colour")||"63 143 247";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("SoftX")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--background-image",document.body.style.getPropertyValue("--background-image")],["--background-blur",document.body.style.getPropertyValue("--background-blur")],["--accent",document.body.style.getPropertyValue("--accent")],["--channels-width",document.body.style.getPropertyValue("--channels-width")],["--guilds-width",document.body.style.getPropertyValue("--guilds-width")],["--members-width",document.body.style.getPropertyValue("--members-width")],["--server-size",document.body.style.getPropertyValue("--server-size")],["--chat-avatar-size",document.body.style.getPropertyValue("--chat-avatar-size")],["--glow-intensity",document.body.style.getPropertyValue("--glow-intensity")],["--opacity",document.body.style.getPropertyValue("--opacity")],["--font",document.body.style.getPropertyValue("--font")],["--avatar-roundness",document.body.style.getPropertyValue("--avatar-roundness")],["--server-roundness",document.body.style.getPropertyValue("--server-roundness")],["--rs-small-spacing",document.body.style.getPropertyValue("--rs-small-spacing")],["--rs-medium-spacing",document.body.style.getPropertyValue("--rs-medium-spacing")],["--rs-large-spacing",document.body.style.getPropertyValue("--rs-large-spacing")],["--rs-small-width",document.body.style.getPropertyValue("--rs-small-width")],["--rs-medium-width",document.body.style.getPropertyValue("--rs-medium-width")],["--rs-large-width",document.body.style.getPropertyValue("--rs-large-width")],["--rs-online-color",document.body.style.getPropertyValue("--rs-online-color")],["--rs-idle-color",document.body.style.getPropertyValue("--rs-idle-color")],["--rs-dnd-color",document.body.style.getPropertyValue("--rs-dnd-color")],["--rs-offline-color",document.body.style.getPropertyValue("--rs-offline-color")],["--rs-streaming-color",document.body.style.getPropertyValue("--rs-streaming-color")],["--rs-invisible-color",document.body.style.getPropertyValue("--rs-invisible-color")],["--rs-phone-visible",document.body.style.getPropertyValue("--rs-phone-visible")],["--softx-version",document.body.style.getPropertyValue("--softx-version")],["--hue",document.body.style.getPropertyValue("--hue")],["--saturation",document.body.style.getPropertyValue("--saturation")],["--lightness",document.body.style.getPropertyValue("--lightness")],["--transition",document.body.style.getPropertyValue("--transition")],["--blur",document.body.style.getPropertyValue("--blur")],["--TB-width",document.body.style.getPropertyValue("--TB-width")],["--TB-header-padding",document.body.style.getPropertyValue("--TB-header-padding")],["--shadow",document.body.style.getPropertyValue("--shadow")],["--shadow-lg",document.body.style.getPropertyValue("--shadow-lg")],["--chat-bubble-bg",document.body.style.getPropertyValue("--chat-bubble-bg")],["--chat-bubble-padding",document.body.style.getPropertyValue("--chat-bubble-padding")],["--chat-bubble-display",document.body.style.getPropertyValue("--chat-bubble-display")],["--toolbar-height",document.body.style.getPropertyValue("--toolbar-height")],["--server-spacing",document.body.style.getPropertyValue("--server-spacing")],["--guild-scrollbar",document.body.style.getPropertyValue("--guild-scrollbar")],["--unread-colour",document.body.style.getPropertyValue("--unread-colour")],["--backdrop-blur",document.body.style.getPropertyValue("--backdrop-blur")],["--channel-height",document.body.style.getPropertyValue("--channel-height")],["--member-height",document.body.style.getPropertyValue("--member-height")],["--dm-height",document.body.style.getPropertyValue("--dm-height")],["--scrollbar-background",document.body.style.getPropertyValue("--scrollbar-background")],["--scrollbar-background-hover",document.body.style.getPropertyValue("--scrollbar-background-hover")],["--scrollbar-background-active",document.body.style.getPropertyValue("--scrollbar-background-active")],["--input-background",document.body.style.getPropertyValue("--input-background")],["--input-border",document.body.style.getPropertyValue("--input-border")],["--settings-sidebar-width",document.body.style.getPropertyValue("--settings-sidebar-width")],["--settings-content-width",document.body.style.getPropertyValue("--settings-content-width")],["--settings-max-height",document.body.style.getPropertyValue("--settings-max-height")],["--connection-colour",document.body.style.getPropertyValue("--connection-colour")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default