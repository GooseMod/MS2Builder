parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,u,i){try{var a=t[u](i),l=a.value}catch(s){return void o(s)}a.done?e(l):Promise.resolve(l).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,u){var i=e.apply(o,n);function a(e){t(i,r,u,a,l,"next",e)}function l(e){t(i,r,u,a,l,"throw",e)}a(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name Slate\n * @author Gibbu & Tropical\n * @description An optimized, consistent, and functional theme for Discord based on GitHub's design language.\n * @version 1.1\n * @source https://github.com/DiscordStyles/Slate/\n * @invite TeRQEPb\n*/\n\n@import url('https://discordstyles.github.io/Slate/dist/Slate.css');\n\n@import url(\"https://discordstyles.github.io/AdjustableServerWidth/base.css\");\n/*\n  Basic Variables\n  See available vars here: https://github.com/DiscordStyles/Slate/wiki\n*/\n:root {\n  /* Primary Colors */\n  --accent: 3, 102, 214;\n  --link-colour: 48, 144, 255;\n  /* Server List */\n  --server-icon-size: 35px;\n  --server-icon-spacing: 8px;\n  --server-container-padding: 10px;\n}\n\n/**\n  Custom CSS below here\n*/")),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("Slate",["",{type:"text-and-color",text:"Accent",oninput:function(t){document.body.style.setProperty("--accent",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent")||"3, 102, 214";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Link Colour",oninput:function(t){document.body.style.setProperty("--link-colour",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--link-colour")||"48, 144, 255";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Server Icon Size",oninput:function(t){document.body.style.setProperty("--server-icon-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-icon-size")||"35px";return console.log(t),t}},{type:"text-input",text:"Server Icon Spacing",oninput:function(t){document.body.style.setProperty("--server-icon-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-icon-spacing")||"8px";return console.log(t),t}},{type:"text-input",text:"Server Container Padding",oninput:function(t){document.body.style.setProperty("--server-container-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-container-padding")||"10px";return console.log(t),t}},{type:"text-input",text:"Slate File Version",oninput:function(t){document.body.style.setProperty("--slate-file-version",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--slate-file-version")||'"1.1"';return console.log(t),t}},{type:"text-input",text:"Slate Base Version",oninput:function(t){document.body.style.setProperty("--slate-base-version",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--slate-base-version")||'"1.6.13"';return console.log(t),t}},{type:"text-input",text:"Slate Palette",oninput:function(t){document.body.style.setProperty("--slate-palette",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--slate-palette")||'"Primer"';return console.log(t),t}},{type:"text-input",text:"Border Radius",oninput:function(t){document.body.style.setProperty("--border-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--border-radius")||"3px";return console.log(t),t}},{type:"text-input",text:"Button Border Radius",oninput:function(t){document.body.style.setProperty("--button-border-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-border-radius")||"2px";return console.log(t),t}},{type:"text-input",text:"Spacing",oninput:function(t){document.body.style.setProperty("--spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spacing")||"10px";return console.log(t),t}},{type:"text-input",text:"Spacing Compact",oninput:function(t){document.body.style.setProperty("--spacing-compact",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spacing-compact")||"2px";return console.log(t),t}},{type:"text-input",text:"Font Family Sans Serif",oninput:function(t){document.body.style.setProperty("--font-family-sans-serif",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-family-sans-serif")||'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif';return console.log(t),t}},{type:"text-input",text:"Font Family Monospace",oninput:function(t){document.body.style.setProperty("--font-family-monospace",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-family-monospace")||'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';return console.log(t),t}},{type:"text-input",text:"Font Size Xsm",oninput:function(t){document.body.style.setProperty("--font-size-xsm",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-xsm")||"9px";return console.log(t),t}},{type:"text-input",text:"Font Size Sm",oninput:function(t){document.body.style.setProperty("--font-size-sm",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-sm")||"11px";return console.log(t),t}},{type:"text-input",text:"Font Size",oninput:function(t){document.body.style.setProperty("--font-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size")||"12px";return console.log(t),t}},{type:"text-input",text:"Font Size Md",oninput:function(t){document.body.style.setProperty("--font-size-md",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-md")||"14px";return console.log(t),t}},{type:"text-input",text:"Font Size Lg",oninput:function(t){document.body.style.setProperty("--font-size-lg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-lg")||"28px";return console.log(t),t}},{type:"text-input",text:"Font Size Xl",oninput:function(t){document.body.style.setProperty("--font-size-xl",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-xl")||"32px";return console.log(t),t}},{type:"text-input",text:"Font Size Xxl",oninput:function(t){document.body.style.setProperty("--font-size-xxl",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-size-xxl")||"42px";return console.log(t),t}},{type:"text-input",text:"Line Height Sm",oninput:function(t){document.body.style.setProperty("--line-height-sm",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--line-height-sm")||"1";return console.log(t),t}},{type:"text-input",text:"Line Height",oninput:function(t){document.body.style.setProperty("--line-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--line-height")||"1.5";return console.log(t),t}},{type:"text-input",text:"Font Weight Light",oninput:function(t){document.body.style.setProperty("--font-weight-light",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-weight-light")||"300";return console.log(t),t}},{type:"text-input",text:"Font Weight Normal",oninput:function(t){document.body.style.setProperty("--font-weight-normal",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-weight-normal")||"400";return console.log(t),t}},{type:"text-input",text:"Font Weight Semibold",oninput:function(t){document.body.style.setProperty("--font-weight-semibold",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-weight-semibold")||"600";return console.log(t),t}},{type:"text-input",text:"Font Weight Bold",oninput:function(t){document.body.style.setProperty("--font-weight-bold",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-weight-bold")||"700";return console.log(t),t}},{type:"text-input",text:"Titlebar Height",oninput:function(t){document.body.style.setProperty("--titlebar-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--titlebar-height")||"28px";return console.log(t),t}},{type:"text-and-color",text:"Win32 Close Background Hover",oninput:function(t){document.body.style.setProperty("--win32-close-background-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--win32-close-background-hover")||"#e81123";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Win32 Close Background Active",oninput:function(t){document.body.style.setProperty("--win32-close-background-active",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--win32-close-background-active")||"#bf0f1d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Toolbar Height",oninput:function(t){document.body.style.setProperty("--toolbar-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-height")||"50px";return console.log(t),t}},{type:"text-and-color",text:"Toolbar Text Normal",oninput:function(t){document.body.style.setProperty("--toolbar-text-normal",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-text-normal")||"#d1d5da";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Toolbar Text Muted",oninput:function(t){document.body.style.setProperty("--toolbar-text-muted",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-text-muted")||"#959da5";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Toolbar Text Focus",oninput:function(t){document.body.style.setProperty("--toolbar-text-focus",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-text-focus")||"#ffffff";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Toolbar Search Background",oninput:function(t){document.body.style.setProperty("--toolbar-search-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-search-background")||"#161a1d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Toolbar Background",oninput:function(t){document.body.style.setProperty("--toolbar-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-background")||"#1d2125";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Toolbar Background Hover",oninput:function(t){document.body.style.setProperty("--toolbar-background-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-background-hover")||"#2f363d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Toolbar Background Active",oninput:function(t){document.body.style.setProperty("--toolbar-background-active",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-background-active")||"#444d56";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Toolbar Background Alt",oninput:function(t){document.body.style.setProperty("--toolbar-background-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-background-alt")||"#24292e";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Toolbar Border",oninput:function(t){document.body.style.setProperty("--toolbar-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toolbar-border")||"#141414";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Input Height",oninput:function(t){document.body.style.setProperty("--input-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-height")||"25px";return console.log(t),t}},{type:"text-input",text:"Item Height",oninput:function(t){document.body.style.setProperty("--item-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--item-height")||"34px";return console.log(t),t}},{type:"text-input",text:"Sidebar Width",oninput:function(t){document.body.style.setProperty("--sidebar-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--sidebar-width")||"260px";return console.log(t),t}},{type:"text-input",text:"Member Height",oninput:function(t){document.body.style.setProperty("--member-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--member-height")||"42px";return console.log(t),t}},{type:"text-input",text:"Channel Height",oninput:function(t){document.body.style.setProperty("--channel-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channel-height")||"32px";return console.log(t),t}},{type:"text-input",text:"Avatar Size Xsm",oninput:function(t){document.body.style.setProperty("--avatar-size-xsm",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-size-xsm")||"18px";return console.log(t),t}},{type:"text-input",text:"Avatar Size Sm",oninput:function(t){document.body.style.setProperty("--avatar-size-sm",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-size-sm")||"24px";return console.log(t),t}},{type:"text-input",text:"Avatar Size",oninput:function(t){document.body.style.setProperty("--avatar-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-size")||"28px";return console.log(t),t}},{type:"text-input",text:"Avatar Size Lg",oninput:function(t){document.body.style.setProperty("--avatar-size-lg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-size-lg")||"45px";return console.log(t),t}},{type:"text-input",text:"Avatar Size Xl",oninput:function(t){document.body.style.setProperty("--avatar-size-xl",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-size-xl")||"64px";return console.log(t),t}},{type:"text-input",text:"Backdrop",oninput:function(t){document.body.style.setProperty("--backdrop",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backdrop")||"rgb(0 0 0 / 0.4)";return console.log(t),t}},{type:"text-and-color",text:"Elevation 1",oninput:function(t){document.body.style.setProperty("--elevation-1",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--elevation-1")||"0 8px 24px rgba(0, 0, 0, 0.15)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Elevation 2",oninput:function(t){document.body.style.setProperty("--elevation-2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--elevation-2")||"0 2px 7px rgba(0, 0, 0, 0.5)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Status Green",oninput:function(t){document.body.style.setProperty("--status-green",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-green")||"40, 167, 69";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Status Yellow",oninput:function(t){document.body.style.setProperty("--status-yellow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-yellow")||"219, 171, 9";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Status Red",oninput:function(t){document.body.style.setProperty("--status-red",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-red")||"215, 58, 73";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Status Purple",oninput:function(t){document.body.style.setProperty("--status-purple",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-purple")||"89, 54, 149";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Status Grey",oninput:function(t){document.body.style.setProperty("--status-grey",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-grey")||"117, 128, 142";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Pink",oninput:function(t){document.body.style.setProperty("--discord-pink",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-pink")||"255, 115, 250";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Discord Spotify",oninput:function(t){document.body.style.setProperty("--discord-spotify",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--discord-spotify")||"29, 185, 84";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Red",oninput:function(t){document.body.style.setProperty("--red",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--red")||"215, 58, 73";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Green",oninput:function(t){document.body.style.setProperty("--green",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--green")||"34, 197, 94";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Blue",oninput:function(t){document.body.style.setProperty("--blue",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--blue")||"14, 165, 233";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Amber",oninput:function(t){document.body.style.setProperty("--amber",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--amber")||"245, 158, 11";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Small Spacing",oninput:function(t){document.body.style.setProperty("--rs-small-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-spacing")||"0px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Spacing",oninput:function(t){document.body.style.setProperty("--rs-large-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-spacing")||"0px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Width",oninput:function(t){document.body.style.setProperty("--rs-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-width")||"2px";return console.log(t),t}},{type:"text-input",text:"Settings Min Height",oninput:function(t){document.body.style.setProperty("--settings-min-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-min-height")||"450px";return console.log(t),t}},{type:"text-input",text:"Settings Max Height",oninput:function(t){document.body.style.setProperty("--settings-max-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-max-height")||"650px";return console.log(t),t}},{type:"text-input",text:"Settings Min Width",oninput:function(t){document.body.style.setProperty("--settings-min-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-min-width")||"960px";return console.log(t),t}},{type:"text-input",text:"Settings Max Width",oninput:function(t){document.body.style.setProperty("--settings-max-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-max-width")||"960px";return console.log(t),t}},{type:"text-input",text:"Cursor",oninput:function(t){document.body.style.setProperty("--cursor",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--cursor")||"default";return console.log(t),t}},{type:"text-and-color",text:"Base Border",oninput:function(t){document.body.style.setProperty("--base-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--base-border")||"#141414";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Text Focus",oninput:function(t){document.body.style.setProperty("--text-focus",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text-focus")||"#ffffff";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Background Light",oninput:function(t){document.body.style.setProperty("--background-light",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-light")||"#2f363d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Background",oninput:function(t){document.body.style.setProperty("--background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background")||"#24292e";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Background Alt",oninput:function(t){document.body.style.setProperty("--background-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-alt")||"#2a3036";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Background Dark",oninput:function(t){document.body.style.setProperty("--background-dark",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-dark")||"#1d2125";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"White",oninput:function(t){document.body.style.setProperty("--white",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--white")||"#ffffff";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Scrollbar Background",oninput:function(t){document.body.style.setProperty("--scrollbar-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-background")||"rgb(255 255 255 / 0.1)";return console.log(t),t}},{type:"text-input",text:"Scrollbar Background Hover",oninput:function(t){document.body.style.setProperty("--scrollbar-background-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-background-hover")||"rgb(255 255 255 / 0.2)";return console.log(t),t}},{type:"text-input",text:"Scrollbar Background Active",oninput:function(t){document.body.style.setProperty("--scrollbar-background-active",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-background-active")||"rgb(255 255 255 / 0.3)";return console.log(t),t}},{type:"text-and-color",text:"Syntax Blue",oninput:function(t){document.body.style.setProperty("--syntax-blue",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--syntax-blue")||"#79b8ff";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Syntax Purple",oninput:function(t){document.body.style.setProperty("--syntax-purple",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--syntax-purple")||"#b392f0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Syntax Grey",oninput:function(t){document.body.style.setProperty("--syntax-grey",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--syntax-grey")||"#959da5";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Syntax Grey Alt",oninput:function(t){document.body.style.setProperty("--syntax-grey-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--syntax-grey-alt")||"#d1d5da";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Syntax Orange",oninput:function(t){document.body.style.setProperty("--syntax-orange",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--syntax-orange")||"#ffab70";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Syntax Green",oninput:function(t){document.body.style.setProperty("--syntax-green",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--syntax-green")||"#56b6c2";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Secondary Border",oninput:function(t){document.body.style.setProperty("--secondary-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--secondary-border")||"#d1d5da";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"I18n Current Server",oninput:function(t){document.body.style.setProperty("--i18n-current-server",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--i18n-current-server")||'"Current Server"';return console.log(t),t}},{type:"text-input",text:"I18n Current Channel",oninput:function(t){document.body.style.setProperty("--i18n-current-channel",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--i18n-current-channel")||'"Current Channel"';return console.log(t),t}},{type:"text-input",text:"I18n Settings Header",oninput:function(t){document.body.style.setProperty("--i18n-settings-header",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--i18n-settings-header")||'"Options"';return console.log(t),t}},{type:"text-input",text:"Left Side",oninput:function(t){document.body.style.setProperty("--left-side",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--left-side")||"233px";return console.log(t),t}},{type:"text-input",text:"Right Side",oninput:function(t){document.body.style.setProperty("--right-side",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--right-side")||"465px";return console.log(t),t}},{type:"text-input",text:"Banner Height",oninput:function(t){document.body.style.setProperty("--banner-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--banner-height")||"180px";return console.log(t),t}},{type:"text-input",text:"Asw Version",oninput:function(t){document.body.style.setProperty("--asw-version",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--asw-version")||'"2.0.6"';return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Slate")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--accent",document.body.style.getPropertyValue("--accent")],["--link-colour",document.body.style.getPropertyValue("--link-colour")],["--server-icon-size",document.body.style.getPropertyValue("--server-icon-size")],["--server-icon-spacing",document.body.style.getPropertyValue("--server-icon-spacing")],["--server-container-padding",document.body.style.getPropertyValue("--server-container-padding")],["--slate-file-version",document.body.style.getPropertyValue("--slate-file-version")],["--slate-base-version",document.body.style.getPropertyValue("--slate-base-version")],["--slate-palette",document.body.style.getPropertyValue("--slate-palette")],["--border-radius",document.body.style.getPropertyValue("--border-radius")],["--button-border-radius",document.body.style.getPropertyValue("--button-border-radius")],["--spacing",document.body.style.getPropertyValue("--spacing")],["--spacing-compact",document.body.style.getPropertyValue("--spacing-compact")],["--font-family-sans-serif",document.body.style.getPropertyValue("--font-family-sans-serif")],["--font-family-monospace",document.body.style.getPropertyValue("--font-family-monospace")],["--font-size-xsm",document.body.style.getPropertyValue("--font-size-xsm")],["--font-size-sm",document.body.style.getPropertyValue("--font-size-sm")],["--font-size",document.body.style.getPropertyValue("--font-size")],["--font-size-md",document.body.style.getPropertyValue("--font-size-md")],["--font-size-lg",document.body.style.getPropertyValue("--font-size-lg")],["--font-size-xl",document.body.style.getPropertyValue("--font-size-xl")],["--font-size-xxl",document.body.style.getPropertyValue("--font-size-xxl")],["--line-height-sm",document.body.style.getPropertyValue("--line-height-sm")],["--line-height",document.body.style.getPropertyValue("--line-height")],["--font-weight-light",document.body.style.getPropertyValue("--font-weight-light")],["--font-weight-normal",document.body.style.getPropertyValue("--font-weight-normal")],["--font-weight-semibold",document.body.style.getPropertyValue("--font-weight-semibold")],["--font-weight-bold",document.body.style.getPropertyValue("--font-weight-bold")],["--titlebar-height",document.body.style.getPropertyValue("--titlebar-height")],["--win32-close-background-hover",document.body.style.getPropertyValue("--win32-close-background-hover")],["--win32-close-background-active",document.body.style.getPropertyValue("--win32-close-background-active")],["--toolbar-height",document.body.style.getPropertyValue("--toolbar-height")],["--toolbar-text-normal",document.body.style.getPropertyValue("--toolbar-text-normal")],["--toolbar-text-muted",document.body.style.getPropertyValue("--toolbar-text-muted")],["--toolbar-text-focus",document.body.style.getPropertyValue("--toolbar-text-focus")],["--toolbar-search-background",document.body.style.getPropertyValue("--toolbar-search-background")],["--toolbar-background",document.body.style.getPropertyValue("--toolbar-background")],["--toolbar-background-hover",document.body.style.getPropertyValue("--toolbar-background-hover")],["--toolbar-background-active",document.body.style.getPropertyValue("--toolbar-background-active")],["--toolbar-background-alt",document.body.style.getPropertyValue("--toolbar-background-alt")],["--toolbar-border",document.body.style.getPropertyValue("--toolbar-border")],["--input-height",document.body.style.getPropertyValue("--input-height")],["--item-height",document.body.style.getPropertyValue("--item-height")],["--sidebar-width",document.body.style.getPropertyValue("--sidebar-width")],["--member-height",document.body.style.getPropertyValue("--member-height")],["--channel-height",document.body.style.getPropertyValue("--channel-height")],["--avatar-size-xsm",document.body.style.getPropertyValue("--avatar-size-xsm")],["--avatar-size-sm",document.body.style.getPropertyValue("--avatar-size-sm")],["--avatar-size",document.body.style.getPropertyValue("--avatar-size")],["--avatar-size-lg",document.body.style.getPropertyValue("--avatar-size-lg")],["--avatar-size-xl",document.body.style.getPropertyValue("--avatar-size-xl")],["--backdrop",document.body.style.getPropertyValue("--backdrop")],["--elevation-1",document.body.style.getPropertyValue("--elevation-1")],["--elevation-2",document.body.style.getPropertyValue("--elevation-2")],["--status-green",document.body.style.getPropertyValue("--status-green")],["--status-yellow",document.body.style.getPropertyValue("--status-yellow")],["--status-red",document.body.style.getPropertyValue("--status-red")],["--status-purple",document.body.style.getPropertyValue("--status-purple")],["--status-grey",document.body.style.getPropertyValue("--status-grey")],["--discord-pink",document.body.style.getPropertyValue("--discord-pink")],["--discord-spotify",document.body.style.getPropertyValue("--discord-spotify")],["--red",document.body.style.getPropertyValue("--red")],["--green",document.body.style.getPropertyValue("--green")],["--blue",document.body.style.getPropertyValue("--blue")],["--amber",document.body.style.getPropertyValue("--amber")],["--rs-small-spacing",document.body.style.getPropertyValue("--rs-small-spacing")],["--rs-large-spacing",document.body.style.getPropertyValue("--rs-large-spacing")],["--rs-width",document.body.style.getPropertyValue("--rs-width")],["--settings-min-height",document.body.style.getPropertyValue("--settings-min-height")],["--settings-max-height",document.body.style.getPropertyValue("--settings-max-height")],["--settings-min-width",document.body.style.getPropertyValue("--settings-min-width")],["--settings-max-width",document.body.style.getPropertyValue("--settings-max-width")],["--cursor",document.body.style.getPropertyValue("--cursor")],["--base-border",document.body.style.getPropertyValue("--base-border")],["--text-focus",document.body.style.getPropertyValue("--text-focus")],["--background-light",document.body.style.getPropertyValue("--background-light")],["--background",document.body.style.getPropertyValue("--background")],["--background-alt",document.body.style.getPropertyValue("--background-alt")],["--background-dark",document.body.style.getPropertyValue("--background-dark")],["--white",document.body.style.getPropertyValue("--white")],["--scrollbar-background",document.body.style.getPropertyValue("--scrollbar-background")],["--scrollbar-background-hover",document.body.style.getPropertyValue("--scrollbar-background-hover")],["--scrollbar-background-active",document.body.style.getPropertyValue("--scrollbar-background-active")],["--syntax-blue",document.body.style.getPropertyValue("--syntax-blue")],["--syntax-purple",document.body.style.getPropertyValue("--syntax-purple")],["--syntax-grey",document.body.style.getPropertyValue("--syntax-grey")],["--syntax-grey-alt",document.body.style.getPropertyValue("--syntax-grey-alt")],["--syntax-orange",document.body.style.getPropertyValue("--syntax-orange")],["--syntax-green",document.body.style.getPropertyValue("--syntax-green")],["--secondary-border",document.body.style.getPropertyValue("--secondary-border")],["--i18n-current-server",document.body.style.getPropertyValue("--i18n-current-server")],["--i18n-current-channel",document.body.style.getPropertyValue("--i18n-current-channel")],["--i18n-settings-header",document.body.style.getPropertyValue("--i18n-settings-header")],["--left-side",document.body.style.getPropertyValue("--left-side")],["--right-side",document.body.style.getPropertyValue("--right-side")],["--banner-height",document.body.style.getPropertyValue("--banner-height")],["--asw-version",document.body.style.getPropertyValue("--asw-version")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default