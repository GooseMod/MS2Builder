parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t,r,o,n,i,a){try{var d=e[i](a),u=d.value}catch(c){return void r(c)}d.done?t(u):Promise.resolve(u).then(o,n)}function t(t){return function(){var r=this,o=arguments;return new Promise(function(n,i){var a=t.apply(r,o);function d(t){e(a,n,i,d,u,"next",t)}function u(t){e(a,n,i,d,u,"throw",t)}d(void 0)})}}var r;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=document.createElement("style"),document.head.appendChild(r),r.appendChild(document.createTextNode("/**\n* @name DTM-16\n* @author 11pixels#2004\n* @version 5\n* @invite vUN9sNW\n* @description Formerly known as Oldcord, this theme tries to bring back the 2016 look of Discord\n* @source https://github.com/XYZenix/XYZenixThemes/blob/master/DTM-16.theme.css\n*/\n\n@import url(https://xyzenix.github.io/XYZenixThemes/DTM-16-V5/DTM-16.css);\n:root {\n --showRtcConnectionStatusIcon: block; /* show the vc ping/status icon | block = show | none = hide */\n --jumboEmojiSize: 2rem; /* Old - 2rem | New - 3rem */\n}\n")),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("DTM-16",["",{type:"text-input",text:"Showrtcconnectionstatusicon",oninput:function(e){document.body.style.setProperty("--showRtcConnectionStatusIcon",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--showRtcConnectionStatusIcon")||"block";return console.log(e),e}},{type:"text-input",text:"Jumboemojisize",oninput:function(e){document.body.style.setProperty("--jumboEmojiSize",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--jumboEmojiSize")||"2rem";return console.log(e),e}},{type:"text-input",text:"Channelbarwidth",oninput:function(e){document.body.style.setProperty("--channelBarWidth",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--channelBarWidth")||"2px";return console.log(e),e}},{type:"text-input",text:"Font Primary",oninput:function(e){document.body.style.setProperty("--font-primary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--font-primary")||"Whitney";return console.log(e),e}},{type:"text-input",text:"Font Display",oninput:function(e){document.body.style.setProperty("--font-display",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--font-display")||'Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif!important';return console.log(e),e}},{type:"text-input",text:"Profile Banner Pattern",oninput:function(e){document.body.style.setProperty("--profile-banner-pattern",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--profile-banner-pattern")||"url(https://cdn.discordapp.com/attachments/733624227378495488/1008328484315201566/also_lol.png)";return console.log(e),e}},{type:"text-input",text:"Activity Card Pattern",oninput:function(e){document.body.style.setProperty("--activity-card-pattern",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--activity-card-pattern")||"url(https://cdn.discordapp.com/attachments/733624227378495488/1008565187151929444/unknown.png)";return console.log(e),e}},{type:"text-input",text:"Override Header Primary",oninput:function(e){document.body.style.setProperty("--override-header-primary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-header-primary")||"#fff";return console.log(e),e}},{type:"text-and-color",text:"Override Header Secondary",oninput:function(e){document.body.style.setProperty("--override-header-secondary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-header-secondary")||"#b9bbbe";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Text Normal",oninput:function(e){document.body.style.setProperty("--override-text-normal",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-text-normal")||"#dcddde";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Text Muted",oninput:function(e){document.body.style.setProperty("--override-text-muted",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-text-muted")||"#72767d";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Channels Default",oninput:function(e){document.body.style.setProperty("--override-channels-default",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-channels-default")||"#8e9297";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Interactive Normal",oninput:function(e){document.body.style.setProperty("--override-interactive-normal",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-interactive-normal")||"#b9bbbe";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Interactive Hover",oninput:function(e){document.body.style.setProperty("--override-interactive-hover",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-interactive-hover")||"#dcddde";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Override Interactive Active",oninput:function(e){document.body.style.setProperty("--override-interactive-active",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-interactive-active")||"#fff";return console.log(e),e}},{type:"text-and-color",text:"Override Interactive Muted",oninput:function(e){document.body.style.setProperty("--override-interactive-muted",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-interactive-muted")||"#4f545c";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Primary",oninput:function(e){document.body.style.setProperty("--override-background-primary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-primary")||"#36393e";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Secondary",oninput:function(e){document.body.style.setProperty("--override-background-secondary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-secondary")||"#2e3136";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Secondary Alt",oninput:function(e){document.body.style.setProperty("--override-background-secondary-alt",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-secondary-alt")||"#282b30";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Tertiary",oninput:function(e){document.body.style.setProperty("--override-background-tertiary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-tertiary")||"#1e2124";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Accent",oninput:function(e){document.body.style.setProperty("--override-background-accent",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-accent")||"#4f545c";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Floating",oninput:function(e){document.body.style.setProperty("--override-background-floating",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-floating")||"#18191c";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Mobile Primary",oninput:function(e){document.body.style.setProperty("--override-background-mobile-primary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-mobile-primary")||"#36393f";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Mobile Secondary",oninput:function(e){document.body.style.setProperty("--override-background-mobile-secondary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-mobile-secondary")||"#2f3136";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Modifier Hover",oninput:function(e){document.body.style.setProperty("--override-background-modifier-hover",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-modifier-hover")||"rgba(79,84,92,0.16)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Modifier Active",oninput:function(e){document.body.style.setProperty("--override-background-modifier-active",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-modifier-active")||"rgba(79,84,92,0.24)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Modifier Selected",oninput:function(e){document.body.style.setProperty("--override-background-modifier-selected",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-modifier-selected")||"rgba(79,84,92,0.32)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Override Background Modifier Accent",oninput:function(e){document.body.style.setProperty("--override-background-modifier-accent",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-modifier-accent")||"hsla(0,0%,100%,0.06)";return console.log(e),e}},{type:"text-and-color",text:"Override Background Mentioned",oninput:function(e){document.body.style.setProperty("--override-background-mentioned",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-mentioned")||"rgba(250,166,26,0.05)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Mentioned Hover",oninput:function(e){document.body.style.setProperty("--override-background-mentioned-hover",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-mentioned-hover")||"rgba(250,166,26,0.08)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Background Message Hover",oninput:function(e){document.body.style.setProperty("--override-background-message-hover",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-background-message-hover")||"rgba(4,4,5,0.07)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Scrollbar Thin Thumb",oninput:function(e){document.body.style.setProperty("--override-scrollbar-thin-thumb",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-scrollbar-thin-thumb")||"#202225";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Override Scrollbar Thin Track",oninput:function(e){document.body.style.setProperty("--override-scrollbar-thin-track",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-scrollbar-thin-track")||"#0000";return console.log(e),e}},{type:"text-and-color",text:"Override Scrollbar Auto Thumb",oninput:function(e){document.body.style.setProperty("--override-scrollbar-auto-thumb",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-scrollbar-auto-thumb")||"#202225";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Scrollbar Auto Track",oninput:function(e){document.body.style.setProperty("--override-scrollbar-auto-track",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-scrollbar-auto-track")||"#2e3338";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Scrollbar Auto Scrollbar Color Thumb",oninput:function(e){document.body.style.setProperty("--override-scrollbar-auto-scrollbar-color-thumb",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-scrollbar-auto-scrollbar-color-thumb")||"#202225";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Scrollbar Auto Scrollbar Color Track",oninput:function(e){document.body.style.setProperty("--override-scrollbar-auto-scrollbar-color-track",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-scrollbar-auto-scrollbar-color-track")||"#2f3136";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Elevation Stroke",oninput:function(e){document.body.style.setProperty("--override-elevation-stroke",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-elevation-stroke")||"0 0 0 1px rgba(4,4,5,0.15)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Elevation Low",oninput:function(e){document.body.style.setProperty("--override-elevation-low",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-elevation-low")||"0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Elevation Medium",oninput:function(e){document.body.style.setProperty("--override-elevation-medium",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-elevation-medium")||"0 4px 4px rgba(0,0,0,0.16)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Elevation High",oninput:function(e){document.body.style.setProperty("--override-elevation-high",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-elevation-high")||"0 8px 16px rgba(0,0,0,0.24)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Override Logo Primary",oninput:function(e){document.body.style.setProperty("--override-logo-primary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-logo-primary")||"#fff";return console.log(e),e}},{type:"text-and-color",text:"Override Focus Primary",oninput:function(e){document.body.style.setProperty("--override-focus-primary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-focus-primary")||"#00b0f4";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Guild Header Text Shadow",oninput:function(e){document.body.style.setProperty("--override-guild-header-text-shadow",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-guild-header-text-shadow")||"0 1px 1px rgba(0,0,0,0.4)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Channeltextarea Background",oninput:function(e){document.body.style.setProperty("--override-channeltextarea-background",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-channeltextarea-background")||"#40444b";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Activity Card Background",oninput:function(e){document.body.style.setProperty("--override-activity-card-background",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-activity-card-background")||"#202225";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Textbox Markdown Syntax",oninput:function(e){document.body.style.setProperty("--override-textbox-markdown-syntax",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-textbox-markdown-syntax")||"#8e9297";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Deprecated Card Bg",oninput:function(e){document.body.style.setProperty("--override-deprecated-card-bg",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-deprecated-card-bg")||"rgba(32,34,37,0.6)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Deprecated Card Editable Bg",oninput:function(e){document.body.style.setProperty("--override-deprecated-card-editable-bg",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-deprecated-card-editable-bg")||"rgba(32,34,37,0.3)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Deprecated Store Bg",oninput:function(e){document.body.style.setProperty("--override-deprecated-store-bg",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-deprecated-store-bg")||"#36393f";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Deprecated Quickswitcher Input Background",oninput:function(e){document.body.style.setProperty("--override-deprecated-quickswitcher-input-background",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-deprecated-quickswitcher-input-background")||"#72767d";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-input",text:"Override Deprecated Quickswitcher Input Placeholder",oninput:function(e){document.body.style.setProperty("--override-deprecated-quickswitcher-input-placeholder",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-deprecated-quickswitcher-input-placeholder")||"hsla(0,0%,100%,0.3)";return console.log(e),e}},{type:"text-and-color",text:"Override Deprecated Text Input Bg",oninput:function(e){document.body.style.setProperty("--override-deprecated-text-input-bg",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-deprecated-text-input-bg")||"rgba(0,0,0,0.1)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Deprecated Text Input Border",oninput:function(e){document.body.style.setProperty("--override-deprecated-text-input-border",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-deprecated-text-input-border")||"rgba(0,0,0,0.3)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Deprecated Text Input Border Hover",oninput:function(e){document.body.style.setProperty("--override-deprecated-text-input-border-hover",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-deprecated-text-input-border-hover")||"#040405";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Deprecated Text Input Border Disabled",oninput:function(e){document.body.style.setProperty("--override-deprecated-text-input-border-disabled",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-deprecated-text-input-border-disabled")||"#202225";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Override Deprecated Text Input Prefix",oninput:function(e){document.body.style.setProperty("--override-deprecated-text-input-prefix",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--override-deprecated-text-input-prefix")||"#dcddde";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Shadow Filter",oninput:function(e){document.body.style.setProperty("--shadow-filter",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--shadow-filter")||"drop-shadow(0 1px 1px rgba(0,0,0,.8))";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Connection Color",oninput:function(e){document.body.style.setProperty("--connection-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--connection-color")||"#009AE5";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.remove();try{goosemodScope.settings.removeItem("DTM-16")}catch(t){}case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[["--showRtcConnectionStatusIcon",document.body.style.getPropertyValue("--showRtcConnectionStatusIcon")],["--jumboEmojiSize",document.body.style.getPropertyValue("--jumboEmojiSize")],["--channelBarWidth",document.body.style.getPropertyValue("--channelBarWidth")],["--font-primary",document.body.style.getPropertyValue("--font-primary")],["--font-display",document.body.style.getPropertyValue("--font-display")],["--profile-banner-pattern",document.body.style.getPropertyValue("--profile-banner-pattern")],["--activity-card-pattern",document.body.style.getPropertyValue("--activity-card-pattern")],["--override-header-primary",document.body.style.getPropertyValue("--override-header-primary")],["--override-header-secondary",document.body.style.getPropertyValue("--override-header-secondary")],["--override-text-normal",document.body.style.getPropertyValue("--override-text-normal")],["--override-text-muted",document.body.style.getPropertyValue("--override-text-muted")],["--override-channels-default",document.body.style.getPropertyValue("--override-channels-default")],["--override-interactive-normal",document.body.style.getPropertyValue("--override-interactive-normal")],["--override-interactive-hover",document.body.style.getPropertyValue("--override-interactive-hover")],["--override-interactive-active",document.body.style.getPropertyValue("--override-interactive-active")],["--override-interactive-muted",document.body.style.getPropertyValue("--override-interactive-muted")],["--override-background-primary",document.body.style.getPropertyValue("--override-background-primary")],["--override-background-secondary",document.body.style.getPropertyValue("--override-background-secondary")],["--override-background-secondary-alt",document.body.style.getPropertyValue("--override-background-secondary-alt")],["--override-background-tertiary",document.body.style.getPropertyValue("--override-background-tertiary")],["--override-background-accent",document.body.style.getPropertyValue("--override-background-accent")],["--override-background-floating",document.body.style.getPropertyValue("--override-background-floating")],["--override-background-mobile-primary",document.body.style.getPropertyValue("--override-background-mobile-primary")],["--override-background-mobile-secondary",document.body.style.getPropertyValue("--override-background-mobile-secondary")],["--override-background-modifier-hover",document.body.style.getPropertyValue("--override-background-modifier-hover")],["--override-background-modifier-active",document.body.style.getPropertyValue("--override-background-modifier-active")],["--override-background-modifier-selected",document.body.style.getPropertyValue("--override-background-modifier-selected")],["--override-background-modifier-accent",document.body.style.getPropertyValue("--override-background-modifier-accent")],["--override-background-mentioned",document.body.style.getPropertyValue("--override-background-mentioned")],["--override-background-mentioned-hover",document.body.style.getPropertyValue("--override-background-mentioned-hover")],["--override-background-message-hover",document.body.style.getPropertyValue("--override-background-message-hover")],["--override-scrollbar-thin-thumb",document.body.style.getPropertyValue("--override-scrollbar-thin-thumb")],["--override-scrollbar-thin-track",document.body.style.getPropertyValue("--override-scrollbar-thin-track")],["--override-scrollbar-auto-thumb",document.body.style.getPropertyValue("--override-scrollbar-auto-thumb")],["--override-scrollbar-auto-track",document.body.style.getPropertyValue("--override-scrollbar-auto-track")],["--override-scrollbar-auto-scrollbar-color-thumb",document.body.style.getPropertyValue("--override-scrollbar-auto-scrollbar-color-thumb")],["--override-scrollbar-auto-scrollbar-color-track",document.body.style.getPropertyValue("--override-scrollbar-auto-scrollbar-color-track")],["--override-elevation-stroke",document.body.style.getPropertyValue("--override-elevation-stroke")],["--override-elevation-low",document.body.style.getPropertyValue("--override-elevation-low")],["--override-elevation-medium",document.body.style.getPropertyValue("--override-elevation-medium")],["--override-elevation-high",document.body.style.getPropertyValue("--override-elevation-high")],["--override-logo-primary",document.body.style.getPropertyValue("--override-logo-primary")],["--override-focus-primary",document.body.style.getPropertyValue("--override-focus-primary")],["--override-guild-header-text-shadow",document.body.style.getPropertyValue("--override-guild-header-text-shadow")],["--override-channeltextarea-background",document.body.style.getPropertyValue("--override-channeltextarea-background")],["--override-activity-card-background",document.body.style.getPropertyValue("--override-activity-card-background")],["--override-textbox-markdown-syntax",document.body.style.getPropertyValue("--override-textbox-markdown-syntax")],["--override-deprecated-card-bg",document.body.style.getPropertyValue("--override-deprecated-card-bg")],["--override-deprecated-card-editable-bg",document.body.style.getPropertyValue("--override-deprecated-card-editable-bg")],["--override-deprecated-store-bg",document.body.style.getPropertyValue("--override-deprecated-store-bg")],["--override-deprecated-quickswitcher-input-background",document.body.style.getPropertyValue("--override-deprecated-quickswitcher-input-background")],["--override-deprecated-quickswitcher-input-placeholder",document.body.style.getPropertyValue("--override-deprecated-quickswitcher-input-placeholder")],["--override-deprecated-text-input-bg",document.body.style.getPropertyValue("--override-deprecated-text-input-bg")],["--override-deprecated-text-input-border",document.body.style.getPropertyValue("--override-deprecated-text-input-border")],["--override-deprecated-text-input-border-hover",document.body.style.getPropertyValue("--override-deprecated-text-input-border-hover")],["--override-deprecated-text-input-border-disabled",document.body.style.getPropertyValue("--override-deprecated-text-input-border-disabled")],["--override-deprecated-text-input-prefix",document.body.style.getPropertyValue("--override-deprecated-text-input-prefix")],["--shadow-filter",document.body.style.getPropertyValue("--shadow-filter")],["--connection-color",document.body.style.getPropertyValue("--connection-color")]]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),loadSettings:function(){var e=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(e){document.body.style.setProperty(e[0],e[1])});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default