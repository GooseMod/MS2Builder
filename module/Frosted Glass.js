parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,i,u){try{var l=t[i](u),s=l.value}catch(d){return void o(d)}l.done?e(s):Promise.resolve(s).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,i){var u=e.apply(o,n);function l(e){t(u,r,i,l,s,"next",e)}function s(e){t(u,r,i,l,s,"throw",e)}l(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name Frosted Glass\n * @author Gibbu#1211\n * @version 2.0.0\n * @description Display your picture of choice with adjustable blur and brightness. Dark theme is required.\n * @invite ZHthyCw\n * @donate https://paypal.me/IanRGibson\n * @authorId 174868361040232448\n * @source https://github.com/DiscordStyles/FrostedGlass\n * @website https://gibbu.me/\n*/\n\n@import url(\"https://discordstyles.github.io/FrostedGlass/dist/FrostedGlass.css\");\n\n/* BlackBox tags */\n@import url('https://monstrousdev.github.io/themes/addons/user-tags.css');\n\n/* Old Windows titlebar - remove this @import if you wish to use default titlebar */\n@import url(\"https://gibbu.github.io/BetterDiscord-Themes/addons/windows-titlebar.css\");\n\n:root {\n  /* Background image variables */\n  --background-image: url('https://i.imgur.com/kYW2H5C.jpg'); /* Main background image | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif) */\n  --background-image-blur: 5px; /* Blur intensity of --background-image | Must end in px | DEFAULT: 5px */\n  --background-image-size: cover; /* Size of the background image | DEFAUT: cover | OPTIONS: cover, contain */\n  --background-image-position: center; /* Position of background image | DEAFULT: center | OPTIONS: top, right, bottom, left, center */\n\n  /* Popout & Modal variables */\n  --popout-modal-image: var(--background-image); /* Background image for popouts and modals | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif) */\n  --popout-modal-blur: 5px; /* Blur intensity of --popout-modal-image | Must end in px | DEFAULT: 5px */\n  --popout-modal-size: cover; /* Size of the popout/modal image | DEFAUT: cover | OPTIONS: cover, contain */\n  --popout-modal-position: center; /* Position of popout/modal image | DEAFULT: center | OPTIONS: top, right, bottom, left, center */\n\n  /* Home image variables */\n  --home-button-image: url('https://gibbu.github.io/BetterDiscord-Themes/FrostedGlass/assets/discord.svg'); /* Home button image | URL MUST BE A DIRECT LINK (ending in .jpg, .jpeg, .png, .gif) */\n  --home-button-size: cover; /* Size of the home button image | DEFAUT: cover */\n  --home-button-position: center; /* Position of home button image | DEAFULT: center */\n\n  /* Brightness variables */\n  --serverlist-brightness: 0.8; /* Brightness for serverlist | 0 - 1 (decimals allowed) | DEFAULT: 0.8 */\n  --left-brightness: 0.8; /* Channels and DM list brightness | 0 - 1 (decimals allowed) | DEFAULT: 0.8 */\n  --middle-brightness: 0.6; /* Chat brightness | 0 - 1 (decimals allowed) | DEFAULT: 0.6 */\n  --right-brightness: 0; /* Members and Now Playing brightness | 0 - 1 (decimals allowed) | DEFAULT: 0 */\n  --popout-modal-brightness: 0.75; /* Brightness for popouts and modals | 0 - 1 (decimals allowed) | DEFAULT: 0.75 */\n\n  /* Gradient variables */\n  --gradient-primary: 103,58,183; /* DEFAULT: 103,58,183 */\n  --gradient-secondary: 63,81,181; /* DEFAULT: 63,81,181 */\n  --gradient-direction: 320deg; /* DEFAULT: 320deg */\n\n  /* Tint variables */\n  --tint-colour: 255,51,159; /* Colour of tint | DEAFULT: 255,51,159 */\n  --tint-brightness: 0; /* Brightness of --tint-colour | 0 - 1 (decimals allowed) | DEFAULT: 0 */\n\n  /* Other variables */\n  --window-padding: 20px; /* Spacing around the Discord window | DEFAULT: 20px */\n  --window-roundness: 10px; /* Roundness of Discord | DEFAULT: 10px */\n  --scrollbar-colour: rgba(255,255,255,0.05); /* DEFAULT: rgba(255,255,255,0.05) */\n  --link-colour: #00b0f4; /* DEFAULT: #00b0f4 */\n\n  /*\n    Visit https://fonts.google.com and select one to your liking.\n    Now just follow this tutorial: https://imgur.com/a/CNbw7xC\n  */\n  --font: 'Whitney';\n\n  /* Do not touch */\n  --update-notice-1: none;\n}\n")),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("Frosted Glass",["",{type:"text-input",text:"Background Image",oninput:function(t){document.body.style.setProperty("--background-image",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-image")||"url('https://i.imgur.com/kYW2H5C.jpg')";return console.log(t),t}},{type:"text-input",text:"Background Image Blur",oninput:function(t){document.body.style.setProperty("--background-image-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-image-blur")||"5px";return console.log(t),t}},{type:"text-input",text:"Background Image Size",oninput:function(t){document.body.style.setProperty("--background-image-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-image-size")||"cover";return console.log(t),t}},{type:"text-input",text:"Background Image Position",oninput:function(t){document.body.style.setProperty("--background-image-position",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-image-position")||"center";return console.log(t),t}},{type:"text-input",text:"Popout Modal Blur",oninput:function(t){document.body.style.setProperty("--popout-modal-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-modal-blur")||"5px";return console.log(t),t}},{type:"text-input",text:"Popout Modal Size",oninput:function(t){document.body.style.setProperty("--popout-modal-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-modal-size")||"cover";return console.log(t),t}},{type:"text-input",text:"Popout Modal Position",oninput:function(t){document.body.style.setProperty("--popout-modal-position",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-modal-position")||"center";return console.log(t),t}},{type:"text-input",text:"Home Button Image",oninput:function(t){document.body.style.setProperty("--home-button-image",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--home-button-image")||"url('https://gibbu.github.io/BetterDiscord-Themes/FrostedGlass/assets/discord.svg')";return console.log(t),t}},{type:"text-input",text:"Home Button Size",oninput:function(t){document.body.style.setProperty("--home-button-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--home-button-size")||"cover";return console.log(t),t}},{type:"text-input",text:"Home Button Position",oninput:function(t){document.body.style.setProperty("--home-button-position",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--home-button-position")||"center";return console.log(t),t}},{type:"text-input",text:"Serverlist Brightness",oninput:function(t){document.body.style.setProperty("--serverlist-brightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--serverlist-brightness")||"0.8";return console.log(t),t}},{type:"text-input",text:"Left Brightness",oninput:function(t){document.body.style.setProperty("--left-brightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--left-brightness")||"0.8";return console.log(t),t}},{type:"text-input",text:"Middle Brightness",oninput:function(t){document.body.style.setProperty("--middle-brightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--middle-brightness")||"0.6";return console.log(t),t}},{type:"text-input",text:"Right Brightness",oninput:function(t){document.body.style.setProperty("--right-brightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--right-brightness")||"0";return console.log(t),t}},{type:"text-input",text:"Popout Modal Brightness",oninput:function(t){document.body.style.setProperty("--popout-modal-brightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-modal-brightness")||"0.75";return console.log(t),t}},{type:"text-and-color",text:"Gradient Primary",oninput:function(t){document.body.style.setProperty("--gradient-primary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--gradient-primary")||"103,58,183";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Gradient Secondary",oninput:function(t){document.body.style.setProperty("--gradient-secondary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--gradient-secondary")||"63,81,181";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Gradient Direction",oninput:function(t){document.body.style.setProperty("--gradient-direction",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--gradient-direction")||"320deg";return console.log(t),t}},{type:"text-and-color",text:"Tint Colour",oninput:function(t){document.body.style.setProperty("--tint-colour",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tint-colour")||"255,51,159";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Tint Brightness",oninput:function(t){document.body.style.setProperty("--tint-brightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tint-brightness")||"0";return console.log(t),t}},{type:"text-input",text:"Window Padding",oninput:function(t){document.body.style.setProperty("--window-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-padding")||"20px";return console.log(t),t}},{type:"text-input",text:"Window Roundness",oninput:function(t){document.body.style.setProperty("--window-roundness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-roundness")||"10px";return console.log(t),t}},{type:"text-and-color",text:"Scrollbar Colour",oninput:function(t){document.body.style.setProperty("--scrollbar-colour",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-colour")||"rgba(255,255,255,0.05)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Link Colour",oninput:function(t){document.body.style.setProperty("--link-colour",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--link-colour")||"#00b0f4";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Font",oninput:function(t){document.body.style.setProperty("--font",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font")||"'Whitney'";return console.log(t),t}},{type:"text-input",text:"Update Notice 1",oninput:function(t){document.body.style.setProperty("--update-notice-1",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--update-notice-1")||"none";return console.log(t),t}},{type:"text-and-color",text:"White Half",oninput:function(t){document.body.style.setProperty("--white-half",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--white-half")||"rgba(255, 255, 255, 0.025)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"White",oninput:function(t){document.body.style.setProperty("--white",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--white")||"rgba(255, 255, 255, 0.05)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"White Double",oninput:function(t){document.body.style.setProperty("--white-double",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--white-double")||"rgba(255, 255, 255, 0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"White Triple",oninput:function(t){document.body.style.setProperty("--white-triple",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--white-triple")||"rgba(255, 255, 255, 0.15)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Text Shadow",oninput:function(t){document.body.style.setProperty("--text-shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text-shadow")||"1";return console.log(t),t}},{type:"text-and-color",text:"Discord Green",oninput:function(t){document.body.style.setProperty("--discord-green",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-green")||"67, 181, 129";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Yellow",oninput:function(t){document.body.style.setProperty("--discord-yellow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-yellow")||"219, 171, 9";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Red",oninput:function(t){document.body.style.setProperty("--discord-red",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-red")||"215, 58, 73";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Purple",oninput:function(t){document.body.style.setProperty("--discord-purple",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-purple")||"89, 54, 149";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Invisible",oninput:function(t){document.body.style.setProperty("--discord-invisible",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-invisible")||"117, 128, 142";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Nitro",oninput:function(t){document.body.style.setProperty("--discord-nitro",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-nitro")||"255, 115, 250";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Blurple",oninput:function(t){document.body.style.setProperty("--discord-blurple",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-blurple")||"114, 137, 218";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Spotify",oninput:function(t){document.body.style.setProperty("--discord-spotify",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-spotify")||"29, 185, 84";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Twitch",oninput:function(t){document.body.style.setProperty("--discord-twitch",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-twitch")||"89, 54, 149";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Xbox",oninput:function(t){document.body.style.setProperty("--discord-xbox",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-xbox")||"16, 124, 16";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Version",oninput:function(t){document.body.style.setProperty("--version",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--version")||'"Frosted Glass 2.0.13"';return console.log(t),t}},{type:"text-input",text:"Text Default",oninput:function(t){document.body.style.setProperty("--text-default",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text-default")||"#ddd";return console.log(t),t}},{type:"text-input",text:"Main Color",oninput:function(t){document.body.style.setProperty("--main-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-color")||"#000";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Frosted Glass")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--background-image",document.body.style.getPropertyValue("--background-image")],["--background-image-blur",document.body.style.getPropertyValue("--background-image-blur")],["--background-image-size",document.body.style.getPropertyValue("--background-image-size")],["--background-image-position",document.body.style.getPropertyValue("--background-image-position")],["--popout-modal-blur",document.body.style.getPropertyValue("--popout-modal-blur")],["--popout-modal-size",document.body.style.getPropertyValue("--popout-modal-size")],["--popout-modal-position",document.body.style.getPropertyValue("--popout-modal-position")],["--home-button-image",document.body.style.getPropertyValue("--home-button-image")],["--home-button-size",document.body.style.getPropertyValue("--home-button-size")],["--home-button-position",document.body.style.getPropertyValue("--home-button-position")],["--serverlist-brightness",document.body.style.getPropertyValue("--serverlist-brightness")],["--left-brightness",document.body.style.getPropertyValue("--left-brightness")],["--middle-brightness",document.body.style.getPropertyValue("--middle-brightness")],["--right-brightness",document.body.style.getPropertyValue("--right-brightness")],["--popout-modal-brightness",document.body.style.getPropertyValue("--popout-modal-brightness")],["--gradient-primary",document.body.style.getPropertyValue("--gradient-primary")],["--gradient-secondary",document.body.style.getPropertyValue("--gradient-secondary")],["--gradient-direction",document.body.style.getPropertyValue("--gradient-direction")],["--tint-colour",document.body.style.getPropertyValue("--tint-colour")],["--tint-brightness",document.body.style.getPropertyValue("--tint-brightness")],["--window-padding",document.body.style.getPropertyValue("--window-padding")],["--window-roundness",document.body.style.getPropertyValue("--window-roundness")],["--scrollbar-colour",document.body.style.getPropertyValue("--scrollbar-colour")],["--link-colour",document.body.style.getPropertyValue("--link-colour")],["--font",document.body.style.getPropertyValue("--font")],["--update-notice-1",document.body.style.getPropertyValue("--update-notice-1")],["--white-half",document.body.style.getPropertyValue("--white-half")],["--white",document.body.style.getPropertyValue("--white")],["--white-double",document.body.style.getPropertyValue("--white-double")],["--white-triple",document.body.style.getPropertyValue("--white-triple")],["--text-shadow",document.body.style.getPropertyValue("--text-shadow")],["--discord-green",document.body.style.getPropertyValue("--discord-green")],["--discord-yellow",document.body.style.getPropertyValue("--discord-yellow")],["--discord-red",document.body.style.getPropertyValue("--discord-red")],["--discord-purple",document.body.style.getPropertyValue("--discord-purple")],["--discord-invisible",document.body.style.getPropertyValue("--discord-invisible")],["--discord-nitro",document.body.style.getPropertyValue("--discord-nitro")],["--discord-blurple",document.body.style.getPropertyValue("--discord-blurple")],["--discord-spotify",document.body.style.getPropertyValue("--discord-spotify")],["--discord-twitch",document.body.style.getPropertyValue("--discord-twitch")],["--discord-xbox",document.body.style.getPropertyValue("--discord-xbox")],["--version",document.body.style.getPropertyValue("--version")],["--text-default",document.body.style.getPropertyValue("--text-default")],["--main-color",document.body.style.getPropertyValue("--main-color")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default