parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,o,r,a,i){try{var l=t[a](i),d=l.value}catch(s){return void n(s)}l.done?e(d):Promise.resolve(d).then(o,r)}function e(e){return function(){var n=this,o=arguments;return new Promise(function(r,a){var i=e.apply(n,o);function l(e){t(i,r,a,l,d,"next",e)}function d(e){t(i,r,a,l,d,"throw",e)}l(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('/**\n * @name Simplify\n * @description Simple Clean looking theme with blue colors.\n * @author Ashtrath\n * @version 1.0.0\n * @authorId 2354831939099688962\n */\n\n\n/* DONT TOUCH THIS!!! */\n@import url("https://dyzean.github.io/Simplify/simplify.css");\n\n/*  Read this before editing stuff!!!\n*\n*   > To comment or uncomment a line you need to put those "/" and "*" characters as you can see at the beginning and ending of my comments.\n*      (You don\'t need to put a * at each line like I do, it\'s just for readability). See more here : https://developer.mozilla.org/en-US/docs/Web/CSS/Comments\n*\n*   > You can play with the values and see how it goes, don\'t delete "px" after the value if you don\'t have knowledges in CSS.\n*\n*   > To change the colors, replace the HEX code with the one you picked here : https://htmlcolorcodes.com\n*/\n\n/* No scrollbars, Delete the line below if you want the scrollbar back */\n::-webkit-scrollbar { display: none;}.content-1x5b-n { margin: 0 !important; border-radius: 0; }.mainContent-u_9PKf { padding-left: 8px;}.container-2Pjhx- { margin: 0; max-width: unset; }.layout-2DM8Md { border-radius: 0; padding: 0 16px;}.unread-2lAfLh { z-index: 1;} .buttons-3JBrkn { padding-right: 10px !important;}\n\n/* Settings Modal, Delete the line below if you want the normal settings */\n#app-mount .baseLayer-35bLyl {\topacity: 1 !important;\ttransform: unset !important;\twill-change: unset !important;}#app-mount .stop-animations * {\ttransition-property: inherit !important;\tanimation: inherit !important;}#app-mount .layer-3QrUeG.stop-animations:first-child::after {\tcontent: "" !important;\tposition: fixed !important;\tbackground: rgb(0, 0, 0) !important;\ttop: 0 !important;\tright: 0 !important;\tbottom: 0 !important;\tleft: 0 !important;\tmargin: 0 !important;\tpadding: 0 !important;\topacity: 0.85 !important;\tz-index: 999 !important;\tpointer-events: none !important;}#app-mount .layer-3QrUeG ~ .layer-3QrUeG {\tposition: absolute !important;\ttop: 0 !important;\tright: 0 !important;\tbottom: 0 !important;\tleft: 0 !important;\tbackground: var(--settingsmodalbackground) !important;\tborder-radius: 5px !important;\tbox-shadow: var(--elevation-high) !important;\twidth: var(--settingsmodalwidth) !important;\theight: var(--settingsmodalheight) !important;\tmargin: auto !important;\tpadding: 0 !important;\toverflow: hidden !important;\tcontain: unset !important;\tz-index: 1000 !important;}#app-mount .layer-3QrUeG ~ .layer-3QrUeG > div,#app-mount .layer-3QrUeG ~ .layer-3QrUeG .standardSidebarView-3F1I7i {\tposition: static !important;\tborder-radius: unset !important;\twidth: 100% !important;\theight: 100% !important;\tmargin: unset !important;\tpadding: unset !important;\toverflow: hidden !important;}#app-mount .layer-3QrUeG ~ .layer-3QrUeG .sidebar-CFHs9e,#app-mount .layer-3QrUeG ~ .layer-3QrUeG .contentColumnDefault-1VQkGM {\tpadding-top: 20px !important;\tpadding-bottom: 20px !important;}#app-mount .layer-3QrUeG ~ .layer-3QrUeG .sidebar-dLM-kh {\theight: var(--settingsmodalheight) !important;}#app-mount .layer-3QrUeG ~ .layer-3QrUeG .repoHeader-2KfNvH {\tmax-width: calc(var(--settingsmodalwidth) - 256px) !important;;}#app-mount .layer-3QrUeG ~ .layer-3QrUeG .standardSidebarView-3F1I7i .editor {\theight: calc(var(--settingsmodalheight) - 120px) !important;}#app-mount .layer-3QrUeG ~ .layer-3QrUeG .toolsContainer-1edPuj,#app-mount .layer-3QrUeG ~ .layer-3QrUeG .toolsContainer-1edPuj .tools-3-3s-N,#app-mount .layer-3QrUeG ~ .layer-3QrUeG .toolsContainer-1edPuj .container-1sFeqf,#app-mount .layer-3QrUeG ~ .layer-3QrUeG .toolsContainer-1edPuj .closeButton-1tv5uR {\tposition: absolute !important;\ttop: 0 !important;\tright: 0 !important;\tbottom: 0 !important;\tleft: 0 !important;\tbackground: transparent !important;\tborder: none !important;\tborder-radius: 0 !important;\twidth: 100% !important;\tmax-width: unset !important;\theight: 100% !important;\tmax-height: unset !important;\tmargin: 0 !important;\tpadding: 0 !important;\topacity: 0 !important;\tcursor: default !important;}#app-mount .layer-3QrUeG ~ .layer-3QrUeG .toolsContainer-1edPuj {\tposition: fixed !important;\ttop: 22px !important;\tz-index: -1 !important;}#app-mount .layer-3QrUeG ~ .layer-3QrUeG .settingsToolbar-wu4yfQ {\tdisplay: none !important;}#app-mount .layer-3QrUeG ~ .layer-3QrUeG .header-2RyJ0Y {\tmax-width: calc(var(--settingsmodalwidth) - 730px) !important;}#app-mount .root-3R2ngo {\tposition: fixed !important;\ttop: 0 !important;\tright: 0 !important;\tbottom: 0 !important;\tleft: 0 !important;\tbackground: var(--settingsmodalbackground) !important;\tborder-radius: 5px !important;\tbox-shadow: var(--elevation-high) !important;\twidth: var(--settingsmodalwidth) !important;\theight: var(--settingsmodalheight) !important;\tmargin: auto !important;\tpadding: 0 !important;\toverflow: hidden !important;\tcontain: unset !important;\tz-index: 1000 !important;}#app-mount .root-3R2ngo.enterDone-2zvtsK {\ttransform: unset !important;}#app-mount .perksModal-fSYqOq {\tposition: static !important;\tborder-radius: unset !important;\twidth: 100% !important;\theight: 100% !important;\tmargin: unset !important;\tpadding: unset !important;}#app-mount .perksModal-fSYqOq::before {\twidth: var(--settingsmodalwidth) !important;\theight: var(--settingsmodalheight) !important;\tmargin: auto !important;}#app-mount .perksModalContentWrapper-2HU6uL {\tpadding: 10px 0 10px !important;}#app-mount .root-3R2ngo .perksModal-fSYqOq .carousel-6MSnEI {\tmargin-left: calc(-0.5 * (100vw - var(--settingsmodalwidth))) !important;}#app-mount .root-3R2ngo .closeWrapper-9ScmSq,#app-mount .root-3R2ngo .closeWrapper-9ScmSq .closeContent-I3JbQJ,#app-mount .root-3R2ngo .closeWrapper-9ScmSq .container-1sFeqf,#app-mount .root-3R2ngo .closeWrapper-9ScmSq .closeButton-1tv5uR {\tposition: absolute !important;\ttop: 0 !important;\tright: 0 !important;\tbottom: 0 !important;\tleft: 0 !important;\tbackground: transparent !important;\tborder: none !important;\tborder-radius: 0 !important;\twidth: 100% !important;\tmax-width: unset !important;\theight: 100% !important;\tmax-height: unset !important;\tmargin: 0 !important;\tpadding: 0 !important;\topacity: 0 !important;\tcursor: default !important;}#app-mount .root-3R2ngo .closeWrapper-9ScmSq {\tposition: fixed !important;\ttop: 22px !important;\tz-index: -1 !important;}#app-mount .userSettingsVoice-iwdUCU .previewOverlay-2O7_KC {  background-color: var(--background-secondary);  border-color: var(--background-tertiary);}\n\n\n/* ---- Discord Variables ---- */\n:root.theme-dark, .theme-light { /* I Don\'t support light theme, its just for "Create Server" modals */\n  /* Font Family */\n    --font-primary: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;\n    --font-display: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;\n\n  /* Settings Modal */\n    --settingsmodalbackground: transparent;\n    --settingsmodalwidth: 1000px;\n    --settingsmodalheight: 85vh;\n\n  /*  Header Color  */\n    --header-primary: #fff;\n    --header-secondary: #b9bbbe;\n\n  /*  Text Color  */\n    --text-normal: #f7f4f4;\n    --channels-default: #ddd5d3;\n    --interactive-normal: #EAE1DF;\n    --interactive-hover: #EAE1DF;\n    --interactive-active: #fff;\n    --interactive-muted: #505355;\n\n  /* Background Color */\n    --background-primary: #1c223a;\n    --background-secondary: #181d33;\n    --background-secondary-alt: #14192b;\n    --background-tertiary: #14192b;\n    --background-accent: #4d6a91;\n    --background-floating: #171d30;\n    --background-mentioned: rgba(0, 186, 254, 0.5);\n    --background-mentioned-hover: rgba(42, 196, 252, 0.63);\n\n  /* Scrollbars Color */\n    --scrollbar-thin-thumb: rgba(44, 49, 71, 0.658);\n    --scrollbar-thin-track: transparent;\n    --scrollbar-auto-thumb: rgba(67, 79, 134, 0.658);\n    --scrollbar-auto-track: rgba(24, 28, 51, 0.7);\n    --scrollbar-auto-scrollbar-color-thumb: rgba(67, 79, 134, 0.555);\n\n  /* Chat */\n    --channeltextarea-background: var(--background-primary);\n    --channeltextarea-background-hover: var(--background-secondary);\n\n/* ---- Addons Variables ---- */\n\n  /* --- Channel Indicator --- */\n    --indicator-hovered: rgba(79, 84, 92, 0.25);\n    --indicator-rounding: 0;\n    --indicator-border-info: 2px solid;\n\n    --indicator-selected: 112, 135, 215;\n    --indicator-selected-border: rgba(var(--indicator-selected));\n    --indicator-selected-background: rgba(var(--indicator-selected), 0.1);\n    --indicator-selected-hover: rgba(var(--indicator-selected), 0.18);\n\n    --indicator-unread: 255, 255, 255;\n    --indicator-unread-border: rgba(var(--indicator-unread), 0.6);\n    --indicator-unread-background: rgba(var(--indicator-unread), 0.01);\n  \n    --indicator-connected: 67, 181, 129;\n    --indicator-connected-border: rgba(var(--indicator-connected));\n    --indicator-connected-background: rgba(var(--indicator-connected), 0.1);\n    --indicator-connected-hover: rgba(var(--indicator-connected), 0.18);\n\n  /* --- Radial Status --- */\n    --rs-small-spacing: 2px; /* Gap between avatar and status for members list/dms | MUST end in px */\n    --rs-medium-spacing: 3px; /* Gap between avatar and status for User popout | MUST end in px */\n    --rs-large-spacing: 4px; /* Gap between avatar and status for User profiles | MUST end in px */\n\n    --rs-small-width: 2px; /* Thickness of status border for members list/dms | MUST end in px */\n    --rs-medium-width: 3px; /* Thickness of status border for User popout | MUST end in px */\n    --rs-large-width: 4px; /* Thickness of status border for User profile | MUST end in px */\n\n    --rs-avatar-shape: 50%; /* 50% for round - 0% for square */\n\n    --rs-online-color: #43b581; /* Colour for online status */\n    --rs-idle-color: #faa61a; /* Colour for idle status */\n    --rs-dnd-color: #f04747; /* Colour for dnd status */\n    --rs-offline-color: #636b75; /* Colour for offline status */\n    --rs-streaming-color: #643da7; /* Colour for streaming status */\n    --rs-invisible-color: #747f8d; /* Colour for invisible status - Note: this will only show for your own invisibility */\n    --rs-phone-color: var(--rs-online-color); /* Colour of the ring and phone icon when a user is on their phone |  */\n\n    --rs-phone-visible: block; /* Visibility of the phone icon next to a users avatar. | block = visible | none = hidden */\n    --container-color: var(--background-floating);\n}\n')),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("Simplify",["",{type:"text-input",text:"Font Primary",oninput:function(t){document.body.style.setProperty("--font-primary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-primary")||'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif';return console.log(t),t}},{type:"text-input",text:"Font Display",oninput:function(t){document.body.style.setProperty("--font-display",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-display")||'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif';return console.log(t),t}},{type:"text-input",text:"Settingsmodalbackground",oninput:function(t){document.body.style.setProperty("--settingsmodalbackground",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settingsmodalbackground")||"transparent";return console.log(t),t}},{type:"text-input",text:"Settingsmodalwidth",oninput:function(t){document.body.style.setProperty("--settingsmodalwidth",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settingsmodalwidth")||"1000px";return console.log(t),t}},{type:"text-input",text:"Settingsmodalheight",oninput:function(t){document.body.style.setProperty("--settingsmodalheight",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settingsmodalheight")||"85vh";return console.log(t),t}},{type:"text-and-color",text:"Indicator Hovered",oninput:function(t){document.body.style.setProperty("--indicator-hovered",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--indicator-hovered")||"rgba(79, 84, 92, 0.25)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Indicator Rounding",oninput:function(t){document.body.style.setProperty("--indicator-rounding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--indicator-rounding")||"0";return console.log(t),t}},{type:"text-input",text:"Indicator Border Info",oninput:function(t){document.body.style.setProperty("--indicator-border-info",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--indicator-border-info")||"2px solid";return console.log(t),t}},{type:"text-and-color",text:"Indicator Selected",oninput:function(t){document.body.style.setProperty("--indicator-selected",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--indicator-selected")||"112, 135, 215";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Indicator Unread",oninput:function(t){document.body.style.setProperty("--indicator-unread",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--indicator-unread")||"255, 255, 255";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Indicator Connected",oninput:function(t){document.body.style.setProperty("--indicator-connected",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--indicator-connected")||"67, 181, 129";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Small Spacing",oninput:function(t){document.body.style.setProperty("--rs-small-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-spacing")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Medium Spacing",oninput:function(t){document.body.style.setProperty("--rs-medium-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-medium-spacing")||"3px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Spacing",oninput:function(t){document.body.style.setProperty("--rs-large-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-spacing")||"4px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Small Width",oninput:function(t){document.body.style.setProperty("--rs-small-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-width")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Medium Width",oninput:function(t){document.body.style.setProperty("--rs-medium-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-medium-width")||"3px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Width",oninput:function(t){document.body.style.setProperty("--rs-large-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-width")||"4px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Avatar Shape",oninput:function(t){document.body.style.setProperty("--rs-avatar-shape",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-avatar-shape")||"50%";return console.log(t),t}},{type:"text-and-color",text:"Radial Status: Online Color",oninput:function(t){document.body.style.setProperty("--rs-online-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-online-color")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Idle Color",oninput:function(t){document.body.style.setProperty("--rs-idle-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-idle-color")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: DND Color",oninput:function(t){document.body.style.setProperty("--rs-dnd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-dnd-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Offline Color",oninput:function(t){document.body.style.setProperty("--rs-offline-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-offline-color")||"#636b75";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Streaming Color",oninput:function(t){document.body.style.setProperty("--rs-streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-streaming-color")||"#643da7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Invisible Color",oninput:function(t){document.body.style.setProperty("--rs-invisible-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-invisible-color")||"#747f8d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Phone Visible",oninput:function(t){document.body.style.setProperty("--rs-phone-visible",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-phone-visible")||"block";return console.log(t),t}},{type:"text-input",text:"Info Positive Text",oninput:function(t){document.body.style.setProperty("--info-positive-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-positive-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Info Warning Text",oninput:function(t){document.body.style.setProperty("--info-warning-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-warning-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Info Danger Text",oninput:function(t){document.body.style.setProperty("--info-danger-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-danger-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Info Help Text",oninput:function(t){document.body.style.setProperty("--info-help-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-help-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Status Warning Text",oninput:function(t){document.body.style.setProperty("--status-warning-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-warning-text")||"#000";return console.log(t),t}},{type:"text-and-color",text:"Info Positive Background",oninput:function(t){document.body.style.setProperty("--info-positive-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-positive-background")||"rgba(56, 172, 93, 0.8)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Info Warning Background",oninput:function(t){document.body.style.setProperty("--info-warning-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-warning-background")||"rgba(255, 199, 102, 0.8)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Info Danger Background",oninput:function(t){document.body.style.setProperty("--info-danger-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-danger-background")||"rgba(241, 66, 69, 0.8)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Status Positive Text",oninput:function(t){document.body.style.setProperty("--status-positive-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-positive-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Status Danger Text",oninput:function(t){document.body.style.setProperty("--status-danger-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-danger-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Toast Border",oninput:function(t){document.body.style.setProperty("--toast-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--toast-border")||"transparent";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Simplify")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--font-primary",document.body.style.getPropertyValue("--font-primary")],["--font-display",document.body.style.getPropertyValue("--font-display")],["--settingsmodalbackground",document.body.style.getPropertyValue("--settingsmodalbackground")],["--settingsmodalwidth",document.body.style.getPropertyValue("--settingsmodalwidth")],["--settingsmodalheight",document.body.style.getPropertyValue("--settingsmodalheight")],["--indicator-hovered",document.body.style.getPropertyValue("--indicator-hovered")],["--indicator-rounding",document.body.style.getPropertyValue("--indicator-rounding")],["--indicator-border-info",document.body.style.getPropertyValue("--indicator-border-info")],["--indicator-selected",document.body.style.getPropertyValue("--indicator-selected")],["--indicator-unread",document.body.style.getPropertyValue("--indicator-unread")],["--indicator-connected",document.body.style.getPropertyValue("--indicator-connected")],["--rs-small-spacing",document.body.style.getPropertyValue("--rs-small-spacing")],["--rs-medium-spacing",document.body.style.getPropertyValue("--rs-medium-spacing")],["--rs-large-spacing",document.body.style.getPropertyValue("--rs-large-spacing")],["--rs-small-width",document.body.style.getPropertyValue("--rs-small-width")],["--rs-medium-width",document.body.style.getPropertyValue("--rs-medium-width")],["--rs-large-width",document.body.style.getPropertyValue("--rs-large-width")],["--rs-avatar-shape",document.body.style.getPropertyValue("--rs-avatar-shape")],["--rs-online-color",document.body.style.getPropertyValue("--rs-online-color")],["--rs-idle-color",document.body.style.getPropertyValue("--rs-idle-color")],["--rs-dnd-color",document.body.style.getPropertyValue("--rs-dnd-color")],["--rs-offline-color",document.body.style.getPropertyValue("--rs-offline-color")],["--rs-streaming-color",document.body.style.getPropertyValue("--rs-streaming-color")],["--rs-invisible-color",document.body.style.getPropertyValue("--rs-invisible-color")],["--rs-phone-visible",document.body.style.getPropertyValue("--rs-phone-visible")],["--info-positive-text",document.body.style.getPropertyValue("--info-positive-text")],["--info-warning-text",document.body.style.getPropertyValue("--info-warning-text")],["--info-danger-text",document.body.style.getPropertyValue("--info-danger-text")],["--info-help-text",document.body.style.getPropertyValue("--info-help-text")],["--status-warning-text",document.body.style.getPropertyValue("--status-warning-text")],["--info-positive-background",document.body.style.getPropertyValue("--info-positive-background")],["--info-warning-background",document.body.style.getPropertyValue("--info-warning-background")],["--info-danger-background",document.body.style.getPropertyValue("--info-danger-background")],["--status-positive-text",document.body.style.getPropertyValue("--status-positive-text")],["--status-danger-text",document.body.style.getPropertyValue("--status-danger-text")],["--toast-border",document.body.style.getPropertyValue("--toast-border")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default