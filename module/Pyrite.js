parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t,o,n,r,i,a){try{var l=e[i](a),u=l.value}catch(c){return void o(c)}l.done?t(u):Promise.resolve(u).then(n,r)}function t(t){return function(){var o=this,n=arguments;return new Promise(function(r,i){var a=t.apply(o,n);function l(t){e(a,r,i,l,u,"next",t)}function u(t){e(a,r,i,l,u,"throw",t)}l(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name Pyrite\n * @author LeafyLuigi\n * @version 0.1.7\n * @description Pyrite for BetterDiscord/BandagedBD\n * @source https://github.com/LeafyLuigi/discord-themes/tree/master/pyrite\n * @website https://github.com/LeafyLuigi/discord-themes/tree/master/pyrite\n * @invite W976FZS\n */\n\n/* Import Base */\n@import url(https://leafyluigi.github.io/discord-themes/pyrite/build/base.css);\n\n/* Import User Modal Layout */\n@import url(https://leafyluigi.github.io/discord-themes/pyrite/build/userModalLayout.css);\n\n/* Import BD Only Features */\n@import url(https://leafyluigi.github.io/discord-themes/pyrite/build/better-discord.css);\n\n/* Import for optional things: */\n\n/* Optional: HorizontalServerList. Includes the base for the minitheme. Incompatible with Dribbblish. */\n/* @import url(https://leafyluigi.github.io/discord-themes/pyrite/build/horizontal-server-list.css); */\n\n/* Optional: Dribbblish. Includes the base for the theme. Incompatible with HorizontalServerList. */\n/* @import url(https://leafyluigi.github.io/discord-themes/pyrite/build/dribbblish.css); */\n\n/* Theme Base */\n:root {\n  --background-image: url(https://leafyluigi.github.io/images/Synthscape%20by%20AxiomDesign.png);\n  --user-modal-image: var(--background-image);\n  --user-popout-image: var(--background-image);\n  --background-attachment: fixed;\n  --user-modal-attachment: var(--background-attachment);\n  --user-popout-attachment: var(--background-attachment);\n  --primary-color: #FF6F00;\n  --secondary-color: #E06100;\n  --hover-color: #FF801F;\n  --tooltip-color: #B85000;\n  --mention-background: var(--primary-color);\n  --mention-opacity: 0.3;\n  --home-icon: url(https://leafyluigi.github.io/images/Sunset%20Nature%2024%20by%20Bouzid27.png);\n\n  --green-color: #43b581;\n  --yellow-color: #f9a719;\n  --red-color: #ec4144;\n  --link-color: #00aef3;\n  --live-color:  #583594;\n  --offline-color: #737e8c;\n\n  /* For Advanced Users */\n  --code-font: Monaco, Consolas, Courier, monospace;\n  --body-font: Whitney, Helvetica Neue, Helvetica, sans-serif;\n\n  /* Below are currently unused but will be used in future. */\n  --gradient: to bottom right, var(--primary-color);\n\n  /* Toggles. From 0 (disable) to 1 (enable). Anything outside of those values have NOT been tested and likely aren't supported. */\n  --hide-member-list: 1;\n  --hide-active-now: 1;\n\n  /* Windows Only - How many *pixels* wide the min/max/close buttons should be. */\n  --win-min-max-close-button-width: 28px; /* default: 28px, square: 48px */\n\n\n  /* Using HSL? Uncomment this chunk below. */\n\n  /*--server-size: var(--HSL-server-icon-size, var(--HSL-size, 35px));\n  --server-spacing: var(--HSL-server-spacing, var(--HSL-spacing, 10px));\n  --server-container: calc(var(--server-size) + 20px); */\n\n  /* Using any of the below plugins? Change the 0 to a 1 */\n  --channel-tabs-enabled: 0;\n}\n\n\n/* Feel free to edit these ones for Dark Mode */\n.theme-dark {\n  --card-background: rgba(0,0,0,0.5);\n  --side-shading: rgba(0,0,0,0.5);\n  --middle-shading: rgba(0,0,0,0.3);\n  --header-shading: rgba(0,0,0,0.7);\n}\n\n/* Feel free to edit these ones for Light Mode */\n.theme-light {\n  --card-background: rgba(255,255,255,0.05);\n  --side-shading: rgba(255,255,255,0.4);\n  --middle-shading: rgba(255,255,255,0.3);\n  --header-shading: rgba(255,255,255,0.5);\n}\n\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Pyrite",["",{type:"text-input",text:"Background Image",oninput:function(e){document.body.style.setProperty("--background-image",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--background-image")||"url(https://leafyluigi.github.io/images/Synthscape%20by%20AxiomDesign.png)";return console.log(e),e}},{type:"text-input",text:"Background Attachment",oninput:function(e){document.body.style.setProperty("--background-attachment",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--background-attachment")||"fixed";return console.log(e),e}},{type:"text-and-color",text:"Primary Color",oninput:function(e){document.body.style.setProperty("--primary-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--primary-color")||"#FF6F00";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Secondary Color",oninput:function(e){document.body.style.setProperty("--secondary-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--secondary-color")||"#E06100";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Hover Color",oninput:function(e){document.body.style.setProperty("--hover-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--hover-color")||"#FF801F";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Tooltip Color",oninput:function(e){document.body.style.setProperty("--tooltip-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--tooltip-color")||"#B85000";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Mention Opacity",oninput:function(e){document.body.style.setProperty("--mention-opacity",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--mention-opacity")||"0.3";return console.log(e),e}},{type:"text-input",text:"Home Icon",oninput:function(e){document.body.style.setProperty("--home-icon",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--home-icon")||"url(https://leafyluigi.github.io/images/Sunset%20Nature%2024%20by%20Bouzid27.png)";return console.log(e),e}},{type:"text-and-color",text:"Green Color",oninput:function(e){document.body.style.setProperty("--green-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--green-color")||"#43b581";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Yellow Color",oninput:function(e){document.body.style.setProperty("--yellow-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--yellow-color")||"#f9a719";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Red Color",oninput:function(e){document.body.style.setProperty("--red-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--red-color")||"#ec4144";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Link Color",oninput:function(e){document.body.style.setProperty("--link-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--link-color")||"#00aef3";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Live Color",oninput:function(e){document.body.style.setProperty("--live-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--live-color")||"#583594";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Offline Color",oninput:function(e){document.body.style.setProperty("--offline-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--offline-color")||"#737e8c";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Code Font",oninput:function(e){document.body.style.setProperty("--code-font",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--code-font")||"Monaco, Consolas, Courier, monospace";return console.log(e),e}},{type:"text-input",text:"Body Font",oninput:function(e){document.body.style.setProperty("--body-font",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--body-font")||"Whitney, Helvetica Neue, Helvetica, sans-serif";return console.log(e),e}},{type:"text-input",text:"Hide Member List",oninput:function(e){document.body.style.setProperty("--hide-member-list",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--hide-member-list")||"1";return console.log(e),e}},{type:"text-input",text:"Hide Active Now",oninput:function(e){document.body.style.setProperty("--hide-active-now",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--hide-active-now")||"1";return console.log(e),e}},{type:"text-input",text:"Win Min Max Close Button Width",oninput:function(e){document.body.style.setProperty("--win-min-max-close-button-width",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--win-min-max-close-button-width")||"28px";return console.log(e),e}},{type:"text-input",text:"Channel Tabs Enabled",oninput:function(e){document.body.style.setProperty("--channel-tabs-enabled",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--channel-tabs-enabled")||"0";return console.log(e),e}},{type:"text-and-color",text:"Card Background",oninput:function(e){document.body.style.setProperty("--card-background",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--card-background")||"rgba(0,0,0,0.5)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Side Shading",oninput:function(e){document.body.style.setProperty("--side-shading",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--side-shading")||"rgba(0,0,0,0.5)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Middle Shading",oninput:function(e){document.body.style.setProperty("--middle-shading",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--middle-shading")||"rgba(0,0,0,0.3)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Header Shading",oninput:function(e){document.body.style.setProperty("--header-shading",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--header-shading")||"rgba(0,0,0,0.7)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Height",oninput:function(e){document.body.style.setProperty("--height",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--height")||"32px";return console.log(e),e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Pyrite")}catch(t){}case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[["--background-image",document.body.style.getPropertyValue("--background-image")],["--background-attachment",document.body.style.getPropertyValue("--background-attachment")],["--primary-color",document.body.style.getPropertyValue("--primary-color")],["--secondary-color",document.body.style.getPropertyValue("--secondary-color")],["--hover-color",document.body.style.getPropertyValue("--hover-color")],["--tooltip-color",document.body.style.getPropertyValue("--tooltip-color")],["--mention-opacity",document.body.style.getPropertyValue("--mention-opacity")],["--home-icon",document.body.style.getPropertyValue("--home-icon")],["--green-color",document.body.style.getPropertyValue("--green-color")],["--yellow-color",document.body.style.getPropertyValue("--yellow-color")],["--red-color",document.body.style.getPropertyValue("--red-color")],["--link-color",document.body.style.getPropertyValue("--link-color")],["--live-color",document.body.style.getPropertyValue("--live-color")],["--offline-color",document.body.style.getPropertyValue("--offline-color")],["--code-font",document.body.style.getPropertyValue("--code-font")],["--body-font",document.body.style.getPropertyValue("--body-font")],["--hide-member-list",document.body.style.getPropertyValue("--hide-member-list")],["--hide-active-now",document.body.style.getPropertyValue("--hide-active-now")],["--win-min-max-close-button-width",document.body.style.getPropertyValue("--win-min-max-close-button-width")],["--channel-tabs-enabled",document.body.style.getPropertyValue("--channel-tabs-enabled")],["--card-background",document.body.style.getPropertyValue("--card-background")],["--side-shading",document.body.style.getPropertyValue("--side-shading")],["--middle-shading",document.body.style.getPropertyValue("--middle-shading")],["--header-shading",document.body.style.getPropertyValue("--header-shading")],["--height",document.body.style.getPropertyValue("--height")]]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),loadSettings:function(){var e=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(e){document.body.style.setProperty(e[0],e[1])});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default