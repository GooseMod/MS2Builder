parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,i,a){try{var u=t[i](a),s=u.value}catch(l){return void o(l)}u.done?e(s):Promise.resolve(s).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,i){var a=e.apply(o,n);function u(e){t(a,r,i,u,s,"next",e)}function s(e){t(a,r,i,u,s,"throw",e)}u(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name SimplyDark\n * @author Gibbu#1211\n * @version 3.0.0\n * @description A sharp and simple theme for Discord\n * @source https://github.com/DiscordStyles/SimplyDark\n * @invite ZHthyCw\n * @website https://gibbu.me/\n*/\n\n@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');\n@import url(\"https://discordstyles.github.io/SimplyDark/SimplyDark.css\");\n\n/* Black Box user tags */\n@import url('https://monstrousdev.github.io/themes/addons/user-tags.css');\n\n/* Old Windows titlebar - remove this @import if you wish to use default titlebar */\n@import url(\"https://gibbu.github.io/BetterDiscord-Themes/addons/windows-titlebar.css\");\n\n:root {\n\t--hue: 0; /* The hue of Discord | Default: 0 */\n\t--saturation: 0%; /* The saturation of --hue | MUST END IN % | Default: 0% */\n\t--lightness: 8%; /* The lightness of both --hue and --saturation | MUST END IN % | Default: 8% */\n\n\t--accent: 59, 130, 246; /* Custom colour used for pings, mentions, links, discord blurple */\n\n\t--avatar-shape: 0%; /* The shape of avatars | MUST END IN % | Default: 0% */\n\t--server-shape: 0%; /* The shape of server avatars | MUST END IN % | Default: 0% */\n\n\t--font: 'Roboto'; /* Custom font */\n}")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("SimplyDark",["",{type:"text-input",text:"Hue",oninput:function(t){document.body.style.setProperty("--hue",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--hue")||"0";return console.log(t),t}},{type:"text-input",text:"Saturation",oninput:function(t){document.body.style.setProperty("--saturation",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--saturation")||"0%";return console.log(t),t}},{type:"text-input",text:"Lightness",oninput:function(t){document.body.style.setProperty("--lightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--lightness")||"8%";return console.log(t),t}},{type:"text-and-color",text:"Accent",oninput:function(t){document.body.style.setProperty("--accent",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent")||"59, 130, 246";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Avatar Shape",oninput:function(t){document.body.style.setProperty("--avatar-shape",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-shape")||"0%";return console.log(t),t}},{type:"text-input",text:"Server Shape",oninput:function(t){document.body.style.setProperty("--server-shape",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-shape")||"0%";return console.log(t),t}},{type:"text-input",text:"Font",oninput:function(t){document.body.style.setProperty("--font",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font")||"'Roboto'";return console.log(t),t}},{type:"text-input",text:"Simplydark Version",oninput:function(t){document.body.style.setProperty("--simplydark-version",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--simplydark-version")||'"3.0.0"';return console.log(t),t}},{type:"text-input",text:"Radial Status: Small Spacing",oninput:function(t){document.body.style.setProperty("--rs-small-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-spacing")||"0px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Medium Spacing",oninput:function(t){document.body.style.setProperty("--rs-medium-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-medium-spacing")||"0px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Spacing",oninput:function(t){document.body.style.setProperty("--rs-large-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-spacing")||"0px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Small Width",oninput:function(t){document.body.style.setProperty("--rs-small-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-width")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Medium Width",oninput:function(t){document.body.style.setProperty("--rs-medium-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-medium-width")||"3px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Width",oninput:function(t){document.body.style.setProperty("--rs-large-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-width")||"4px";return console.log(t),t}},{type:"text-and-color",text:"Radial Status: Online Color",oninput:function(t){document.body.style.setProperty("--rs-online-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-online-color")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Idle Color",oninput:function(t){document.body.style.setProperty("--rs-idle-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-idle-color")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: DND Color",oninput:function(t){document.body.style.setProperty("--rs-dnd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-dnd-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Offline Color",oninput:function(t){document.body.style.setProperty("--rs-offline-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-offline-color")||"#636b75";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Streaming Color",oninput:function(t){document.body.style.setProperty("--rs-streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-streaming-color")||"#643da7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Invisible Color",oninput:function(t){document.body.style.setProperty("--rs-invisible-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-invisible-color")||"#747f8d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Phone Visible",oninput:function(t){document.body.style.setProperty("--rs-phone-visible",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-phone-visible")||"block";return console.log(t),t}},{type:"text-input",text:"Main Color",oninput:function(t){document.body.style.setProperty("--main-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-color")||"#000";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("SimplyDark")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--hue",document.body.style.getPropertyValue("--hue")],["--saturation",document.body.style.getPropertyValue("--saturation")],["--lightness",document.body.style.getPropertyValue("--lightness")],["--accent",document.body.style.getPropertyValue("--accent")],["--avatar-shape",document.body.style.getPropertyValue("--avatar-shape")],["--server-shape",document.body.style.getPropertyValue("--server-shape")],["--font",document.body.style.getPropertyValue("--font")],["--simplydark-version",document.body.style.getPropertyValue("--simplydark-version")],["--rs-small-spacing",document.body.style.getPropertyValue("--rs-small-spacing")],["--rs-medium-spacing",document.body.style.getPropertyValue("--rs-medium-spacing")],["--rs-large-spacing",document.body.style.getPropertyValue("--rs-large-spacing")],["--rs-small-width",document.body.style.getPropertyValue("--rs-small-width")],["--rs-medium-width",document.body.style.getPropertyValue("--rs-medium-width")],["--rs-large-width",document.body.style.getPropertyValue("--rs-large-width")],["--rs-online-color",document.body.style.getPropertyValue("--rs-online-color")],["--rs-idle-color",document.body.style.getPropertyValue("--rs-idle-color")],["--rs-dnd-color",document.body.style.getPropertyValue("--rs-dnd-color")],["--rs-offline-color",document.body.style.getPropertyValue("--rs-offline-color")],["--rs-streaming-color",document.body.style.getPropertyValue("--rs-streaming-color")],["--rs-invisible-color",document.body.style.getPropertyValue("--rs-invisible-color")],["--rs-phone-visible",document.body.style.getPropertyValue("--rs-phone-visible")],["--main-color",document.body.style.getPropertyValue("--main-color")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default