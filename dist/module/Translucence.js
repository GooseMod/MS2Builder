parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,a,l){try{var u=t[a](l),i=u.value}catch(p){return void o(p)}u.done?e(i):Promise.resolve(i).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,a){var l=e.apply(o,n);function u(e){t(l,r,a,u,i,"next",e)}function i(e){t(l,r,a,u,i,"throw",e)}u(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name Translucence\n * @version 1.0.6.3\n * @description A translucent/frosted glass Discord theme\n * @author CapnKitten\n *\n * @website http://github.com/CapnKitten\n * @source https://github.com/CapnKitten/BetterDiscord/blob/master/Themes/Translucence/css/source.css\n * @donate https://paypal.me/capnkitten\n * @invite jzJkA6Z\n */\n\n@import url(https://capnkitten.github.io/BetterDiscord/Themes/Translucence/css/source.css);\n\n:root {\n\t--app-bg: url(https://i.imgur.com/bgmVeyt.jpg);\n\t--app-blur: 6px;\n\t--app-margin: 24px;\n\t--app-radius: 8px;\n\t--app-accent-rgb: 27,213,140;\n\t--app-accent-image: none;\n\t--app-accent-text: #000; /*\t-\t*/\n\n\t--sidebar-color: rgba(0,0,0,0.4);\n\t--main-content-color: rgba(0,0,0,0.2); /*\t-\t*/\n\n\t--messages-color: rgba(0,0,0,0.4);\n\t--mentiona-alt: #5274e9; /*\t-\t*/\n\n\t--textarea-color: 255,255,255;\n\t--textarea-alpha: 0.1;\n\t--textarea-alpha-focus: 0.15;\n\t--textarea-text-color: #fff;\n\t--textarea-radius: 22px;  /*\t-\t*/\n\n\t--card-color: rgba(0,0,0,0.4);\n\t--card-color-hover: rgba(0,0,0,0.5);\n\t--card-color-select: rgba(0,0,0,0.7); /*\t-\t*/\n\n\t--interactive-normal: #aaa;\n\t--interactive-hover: #ddd;\n\t--interactive-active: #fff;\n\t--interactive-muted: #777; /*\t-\t*/\n\n\t--background-modifier-hover: rgba(255,255,255,0.075);\n\t--background-modifier-selected: rgba(255,255,255,0.125);\n}\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Translucence",["",{type:"text-input",text:"App Bg",oninput:function(t){document.body.style.setProperty("--app-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-bg")||"url(https://i.imgur.com/bgmVeyt.jpg)";return console.log(t),t}},{type:"text-input",text:"App Blur",oninput:function(t){document.body.style.setProperty("--app-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-blur")||"6px";return console.log(t),t}},{type:"text-input",text:"App Margin",oninput:function(t){document.body.style.setProperty("--app-margin",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-margin")||"24px";return console.log(t),t}},{type:"text-input",text:"App Radius",oninput:function(t){document.body.style.setProperty("--app-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-radius")||"8px";return console.log(t),t}},{type:"text-and-color",text:"App Accent RGB",oninput:function(t){document.body.style.setProperty("--app-accent-rgb",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-accent-rgb")||"27,213,140";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"App Accent Image",oninput:function(t){document.body.style.setProperty("--app-accent-image",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-accent-image")||"none";return console.log(t),t}},{type:"text-input",text:"App Accent Text",oninput:function(t){document.body.style.setProperty("--app-accent-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-accent-text")||"#000";return console.log(t),t}},{type:"text-and-color",text:"Sidebar Color",oninput:function(t){document.body.style.setProperty("--sidebar-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--sidebar-color")||"rgba(0,0,0,0.4)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Content Color",oninput:function(t){document.body.style.setProperty("--main-content-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-content-color")||"rgba(0,0,0,0.2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Messages Color",oninput:function(t){document.body.style.setProperty("--messages-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--messages-color")||"rgba(0,0,0,0.4)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Mentiona Alt",oninput:function(t){document.body.style.setProperty("--mentiona-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mentiona-alt")||"#5274e9";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Textarea Color",oninput:function(t){document.body.style.setProperty("--textarea-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-color")||"255,255,255";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Textarea Alpha",oninput:function(t){document.body.style.setProperty("--textarea-alpha",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-alpha")||"0.1";return console.log(t),t}},{type:"text-input",text:"Textarea Alpha Focus",oninput:function(t){document.body.style.setProperty("--textarea-alpha-focus",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-alpha-focus")||"0.15";return console.log(t),t}},{type:"text-input",text:"Textarea Text Color",oninput:function(t){document.body.style.setProperty("--textarea-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-text-color")||"#fff";return console.log(t),t}},{type:"text-input",text:"Textarea Radius",oninput:function(t){document.body.style.setProperty("--textarea-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-radius")||"22px";return console.log(t),t}},{type:"text-and-color",text:"Card Color",oninput:function(t){document.body.style.setProperty("--card-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color")||"rgba(0,0,0,0.4)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Card Color Hover",oninput:function(t){document.body.style.setProperty("--card-color-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color-hover")||"rgba(0,0,0,0.5)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Card Color Select",oninput:function(t){document.body.style.setProperty("--card-color-select",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color-select")||"rgba(0,0,0,0.7)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"App Accent Opacity",oninput:function(t){document.body.style.setProperty("--app-accent-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-accent-opacity")||"1";return console.log(t),t}},{type:"text-input",text:"Messages Padding",oninput:function(t){document.body.style.setProperty("--messages-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--messages-padding")||"8px";return console.log(t),t}},{type:"text-and-color",text:"Mention Alt",oninput:function(t){document.body.style.setProperty("--mention-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mention-alt")||"82,116,233";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Mention Alpha",oninput:function(t){document.body.style.setProperty("--mention-alpha",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mention-alpha")||"1";return console.log(t),t}},{type:"text-input",text:"Notification Color",oninput:function(t){document.body.style.setProperty("--notification-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--notification-color")||"#fff";return console.log(t),t}},{type:"text-input",text:"Input Height",oninput:function(t){document.body.style.setProperty("--input-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-height")||"36px";return console.log(t),t}},{type:"text-input",text:"Button Action Color",oninput:function(t){document.body.style.setProperty("--button-action-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-action-color")||"#000";return console.log(t),t}},{type:"text-and-color",text:"Alert Color",oninput:function(t){document.body.style.setProperty("--alert-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Alert Action Color",oninput:function(t){document.body.style.setProperty("--alert-action-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-action-color")||"#fff";return console.log(t),t}},{type:"text-input",text:"Alert Text Color",oninput:function(t){document.body.style.setProperty("--alert-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-text-color")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Popout Color",oninput:function(t){document.body.style.setProperty("--popout-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-color")||"rgba(0,0,0,0.55)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Popout Blur",oninput:function(t){document.body.style.setProperty("--popout-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-blur")||"8px";return console.log(t),t}},{type:"text-input",text:"Popout Header Opacity",oninput:function(t){document.body.style.setProperty("--popout-header-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-header-opacity")||"0.3";return console.log(t),t}},{type:"text-and-color",text:"Popout Header Shadow",oninput:function(t){document.body.style.setProperty("--popout-header-shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-header-shadow")||"0px 3px 9px 0px rgba(0,0,0,0.25)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Popout Shadow",oninput:function(t){document.body.style.setProperty("--popout-shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-shadow")||"0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Nowplaying Color",oninput:function(t){document.body.style.setProperty("--nowplaying-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--nowplaying-color")||"88,101,242";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Streaming Color",oninput:function(t){document.body.style.setProperty("--streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--streaming-color")||"89,54,149";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Spotify Color",oninput:function(t){document.body.style.setProperty("--spotify-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spotify-color")||"29,185,84";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Tooltip Font Size",oninput:function(t){document.body.style.setProperty("--tooltip-font-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-font-size")||"14px";return console.log(t),t}},{type:"text-input",text:"Tooltip Padding",oninput:function(t){document.body.style.setProperty("--tooltip-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-padding")||"8px 12px";return console.log(t),t}},{type:"text-input",text:"Transition Time",oninput:function(t){document.body.style.setProperty("--transition-time",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--transition-time")||"250ms";return console.log(t),t}},{type:"text-and-color",text:"Transition Type",oninput:function(t){document.body.style.setProperty("--transition-type",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--transition-type")||"cubic-bezier(0.4,0,0.2,1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Scrollbar Color",oninput:function(t){document.body.style.setProperty("--scrollbar-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-color")||"255,255,255";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Scrollbar Color Alt",oninput:function(t){document.body.style.setProperty("--scrollbar-color-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-color-alt")||"0,0,0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Scrollbar Opacity",oninput:function(t){document.body.style.setProperty("--scrollbar-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-opacity")||"0.2";return console.log(t),t}},{type:"text-input",text:"Scrollbar Opacity Hover",oninput:function(t){document.body.style.setProperty("--scrollbar-opacity-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-opacity-hover")||"0.3";return console.log(t),t}},{type:"text-input",text:"Scrollbar Width",oninput:function(t){document.body.style.setProperty("--scrollbar-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-width")||"10px";return console.log(t),t}},{type:"text-input",text:"Font Primary",oninput:function(t){document.body.style.setProperty("--font-primary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-primary")||'Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif';return console.log(t),t}},{type:"text-input",text:"Font Display",oninput:function(t){document.body.style.setProperty("--font-display",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-display")||'Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif';return console.log(t),t}},{type:"text-input",text:"Spinner Size",oninput:function(t){document.body.style.setProperty("--spinner-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spinner-size")||"2em";return console.log(t),t}},{type:"text-input",text:"Modal Header Text",oninput:function(t){document.body.style.setProperty("--modal-header-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--modal-header-text")||"#ddd";return console.log(t),t}},{type:"text-input",text:"Modal Normal Text",oninput:function(t){document.body.style.setProperty("--modal-normal-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--modal-normal-text")||"#aaa";return console.log(t),t}},{type:"text-input",text:"Margin Spacing",oninput:function(t){document.body.style.setProperty("--margin-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--margin-spacing")||"0.0625rem";return console.log(t),t}},{type:"text-input",text:"Text Indent",oninput:function(t){document.body.style.setProperty("--text-indent",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text-indent")||"62px";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Translucence")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--app-bg",document.body.style.getPropertyValue("--app-bg")],["--app-blur",document.body.style.getPropertyValue("--app-blur")],["--app-margin",document.body.style.getPropertyValue("--app-margin")],["--app-radius",document.body.style.getPropertyValue("--app-radius")],["--app-accent-rgb",document.body.style.getPropertyValue("--app-accent-rgb")],["--app-accent-image",document.body.style.getPropertyValue("--app-accent-image")],["--app-accent-text",document.body.style.getPropertyValue("--app-accent-text")],["--sidebar-color",document.body.style.getPropertyValue("--sidebar-color")],["--main-content-color",document.body.style.getPropertyValue("--main-content-color")],["--messages-color",document.body.style.getPropertyValue("--messages-color")],["--mentiona-alt",document.body.style.getPropertyValue("--mentiona-alt")],["--textarea-color",document.body.style.getPropertyValue("--textarea-color")],["--textarea-alpha",document.body.style.getPropertyValue("--textarea-alpha")],["--textarea-alpha-focus",document.body.style.getPropertyValue("--textarea-alpha-focus")],["--textarea-text-color",document.body.style.getPropertyValue("--textarea-text-color")],["--textarea-radius",document.body.style.getPropertyValue("--textarea-radius")],["--card-color",document.body.style.getPropertyValue("--card-color")],["--card-color-hover",document.body.style.getPropertyValue("--card-color-hover")],["--card-color-select",document.body.style.getPropertyValue("--card-color-select")],["--app-accent-opacity",document.body.style.getPropertyValue("--app-accent-opacity")],["--messages-padding",document.body.style.getPropertyValue("--messages-padding")],["--mention-alt",document.body.style.getPropertyValue("--mention-alt")],["--mention-alpha",document.body.style.getPropertyValue("--mention-alpha")],["--notification-color",document.body.style.getPropertyValue("--notification-color")],["--input-height",document.body.style.getPropertyValue("--input-height")],["--button-action-color",document.body.style.getPropertyValue("--button-action-color")],["--alert-color",document.body.style.getPropertyValue("--alert-color")],["--alert-action-color",document.body.style.getPropertyValue("--alert-action-color")],["--alert-text-color",document.body.style.getPropertyValue("--alert-text-color")],["--popout-color",document.body.style.getPropertyValue("--popout-color")],["--popout-blur",document.body.style.getPropertyValue("--popout-blur")],["--popout-header-opacity",document.body.style.getPropertyValue("--popout-header-opacity")],["--popout-header-shadow",document.body.style.getPropertyValue("--popout-header-shadow")],["--popout-shadow",document.body.style.getPropertyValue("--popout-shadow")],["--nowplaying-color",document.body.style.getPropertyValue("--nowplaying-color")],["--streaming-color",document.body.style.getPropertyValue("--streaming-color")],["--spotify-color",document.body.style.getPropertyValue("--spotify-color")],["--tooltip-font-size",document.body.style.getPropertyValue("--tooltip-font-size")],["--tooltip-padding",document.body.style.getPropertyValue("--tooltip-padding")],["--transition-time",document.body.style.getPropertyValue("--transition-time")],["--transition-type",document.body.style.getPropertyValue("--transition-type")],["--scrollbar-color",document.body.style.getPropertyValue("--scrollbar-color")],["--scrollbar-color-alt",document.body.style.getPropertyValue("--scrollbar-color-alt")],["--scrollbar-opacity",document.body.style.getPropertyValue("--scrollbar-opacity")],["--scrollbar-opacity-hover",document.body.style.getPropertyValue("--scrollbar-opacity-hover")],["--scrollbar-width",document.body.style.getPropertyValue("--scrollbar-width")],["--font-primary",document.body.style.getPropertyValue("--font-primary")],["--font-display",document.body.style.getPropertyValue("--font-display")],["--spinner-size",document.body.style.getPropertyValue("--spinner-size")],["--modal-header-text",document.body.style.getPropertyValue("--modal-header-text")],["--modal-normal-text",document.body.style.getPropertyValue("--modal-normal-text")],["--margin-spacing",document.body.style.getPropertyValue("--margin-spacing")],["--text-indent",document.body.style.getPropertyValue("--text-indent")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default