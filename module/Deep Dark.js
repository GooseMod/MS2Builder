parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,r,o,e,t,a,i){try{var c=n[a](i),l=c.value}catch(d){return void o(d)}c.done?r(l):Promise.resolve(l).then(e,t)}function r(r){return function(){var o=this,e=arguments;return new Promise(function(t,a){var i=r.apply(o,e);function c(r){n(i,t,a,c,l,"next",r)}function l(r){n(i,t,a,c,l,"throw",r)}c(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={goosemodHandlers:{onImport:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('\n@import url(\'https://mr-miner1.github.io/Better-Badges/src/coloredbadges.css\');\n.theme-dark,\n.theme-light,\n:root {\n  --blurple: #3a71c1;\n  --blurple-hover: #2f5b9d;\n  --blurple-gradient: linear-gradient(to right, var(--blurple), var(--blurple-hover));\n  --red: #c13a3a;\n  --red-hover: #992e2e;\n  --redgradient: linear-gradient(to right, var(--red), var(--red-hover));\n  --green: #31a169;\n  --green-hover: #2c8b5c;\n  --green-gradient: linear-gradient(to right, #31a169, #2c8b5c );\n  --almost-white: #f1f1f1;\n  --msg-hover: #0e0f1483;\n  \n  --background-accent: #282b3f;\n  --background-primary: #14151c;\n  --background-secondary: #1f2027;\n  --background-secondary-alt: #0e0f14;\n  --background-floating: var(--background-secondary-alt);\n  --background-tertiary: var(--background-secondary-alt);\n\n  --background-modifier-hover: #191a21;\n  --background-modifier-active: #191a21;\n  --background-modifier-selected: #191a21;\n\n  --activity-card-background: var(--background-secondary-alt);\n  --channeltextarea-background: var(--background-secondary-alt);\n  --radio-group-dot-foreground: var(--blurple);\n\n  --text-link: #5a88ce;\n  --text-normal: var(--almost-white);\n  --text-muted: var(--almost-white);\n  --background-mentioned: rgba(0, 225, 255, 0.1);;\n  --background-mentioned-hover: rgba(10, 132, 148, 0.1);\n  --info-warning-foreground: rgba(10, 114, 128, 0.836);\n\n  --header-secondary: #bfc4c9;\n  --channels-default: var(--almost-white);\n\n  --interactive-normal: var(--almost-white);\n  --interactive-active: var(--almost-white);\n  --interactive-hover: var(--almost-white);\n\n  --toast-background: var(--background-primary) !important;\n  --toast-header: var(--background-tertiary) !important;\n  --toast-contents: var(--background-secondary) !important;\n  --toast-border: var(--background-tertiary) !important;\n  --toast-box-shadow: rgba(0, 0, 0, .2);\n\n  --scrollbar-auto-track: #0e0f1483;\n  --scrollbar-auto-thumb: #1e202983;\n  --scrollbar-thin-thumb: #1e202983;\n  --badge-size: 22px;\n}\n/* modals */\n.uploadModal-2ifh8j, .content-1YdlXf, .root-1gCeng, .message-2qRu38, .content-1LAB8Z .directionColumn-35P_nr{\n  background-color: var(--toast-contents) !important;\n}\n.footer-3mqk7D, .footer-2gL1pp{\n  background-color: var(--toast-background) !important;\n}\n/* msg actions */\n.colorDefault-2K3EoJ.focused-3afm-j{\n  background-image: var(--blurple-gradient);\n}\n.colorDanger-2qLCe1.focused-3afm-j{\n  background-image:var(--redgradient);\n}\n.button-F9qN4n.focused-3ZzkKr{\n  background-image: var(--blurple-gradient);\n  height: 25px;\n  width: 25px;\n  border-radius: 7px;\n  transform: scale(1.1);\n}\n\n/* channels */\n.container-3w7J-x, .members-1998pB, .members-1998pB>div{\n  background-color: var(--background-primary) !important;\n}\n .modeMuted-onO3r-:hover .name-23GUGE, .modeMuted-onO3r-:hover .icon-1DeIlz{\n  color: var(--red) !important;\n  opacity: 80%;\n}\n.mainContent-u_9PKf, .unread-2lAfLh + .content-1x5b-n .icon-1DeIlz, .unread-2lAfLh{\n  --interactive-active: #80abec;\n  color: #80abec !important;\n}\n.wrapper-2jXpOf:hover .content-1x5b-n{\n  background-image: linear-gradient(to right, var(--background-secondary), var(--background-accent)) ;\n}\n.modeSelected-346R90 > div{\n  background-image: linear-gradient(to right, var(--background-secondary), var(--background-accent)) ;\n}\n.modeSelected-346R90 .name-23GUGEm, .modeSelected-346R90 .icon-1DeIlz{\n  color: var(--blurple) !important;\n}\n.name-23GUGE, .icon-1DeIlz{\n  color: var(--blurple);\n}\n.mainContent-u_9PKf:hover .name-23GUGE{\n  color: var(--blurple);\n}\n.unread-2lAfLh + .content-1x5b-n > .mainContent-u_9PKf:hover .name-23GUGE{\n  color: #80abec;\n}\n.modeSelected-346R90 > .content-1x5b-n > .mainContent-u_9PKf .name-23GUGE{\n   color: var(--blurple) !important;\n}\n/* .overflow-WK9Ogt, .addButtonIcon-2CbG1X, .arrow-gKvcEx {\n  color: var(--blurple);\n} */\n.wrapper-PY0fhH, .name-3l27Hl {\n  color: var(--text-link) !important;\n}\n.wrapper-PY0fhH:hover .icon-2yIBmh, .mainContent-2h-GEV:hover.arrow-gKvcEx, .addButtonIcon-2CbG1X:hover{\n  color: var(--blurple-hover) !important;\n}\n.emptyChannelIcon-cc932w{\n  border-radius: 20%;\n}\n/*interactives*/\n.wrapper-3WhCwL:hover{\n  color: var(--text-link);\n  text-shadow: 0px 0px 2.85px currentColor;\n}\n.roleMention-2Bj0ju:hover{\n  background-color: transparent !important;\n  text-shadow: 0px 0px 1.85px currentColor;\n  cursor: default;\n}\n.roleMention-2Bj0ju{\n  background-color: transparent !important;\n}\n.wrapper-3WhCwL{\n    color: var(--text-link) !important;\n  background-color: transparent !important;\n}\n/* dm list */\n.scroller-1JbKMe{\n  background-color: var(--background-primary) !important;\n}\n.searchBar-6Kv8R2{\n  background-color: var(--background-primary);\n}\n/* reply bar jump to prensent bar emoji auto fill*/\n.replyBar-1YLQ2F, .jumpToPresentBar-G1R9s6, .autocompleteInner-zh20B_, .contentWrapper-SvZHNd{\n  background-color: var(--background-modifier-active);\n}\n/*buttons*/\n.lookLink-9FtZy-.colorLink-35jkBc{\n  color: var(--almost-white);\n  margin-left: 10px;\n}\n.lookFilled-1Gx00P.colorGreen-29iAKY:hover{\n  background-color: var(--green-hover);\n}\n.lookFilled-1Gx00P.colorGreen-29iAKY{\n  background-color: var(--green);\n}\n.lookOutlined-3sRXeN.colorRed-1TFJan:hover{\n  color:var(--almost-white);\n  background-image: var(--redgradient);\n  border-color: var(--red);\n  font-weight: 500;\n}\n.lookFilled-1Gx00P.colorBrand-3pXr91{\n  background-color: var(--blurple) !important;\n}\n.lookFilled-1Gx00P.colorBrand-3pXr91:hover{\n  background-color: var(--blurple-hover) !important;\n}\n.checked-3_4uQ9, path[fill*="hsl(227, calc(var(--saturation-factor, 1) * 58.4%), 65.1%)"]{\n  border-color: var(--blurple) !important;\n  fill: var(--blurple);\n}\n.lookFilled-1Gx00P.colorRed-1TFJan{\n  background-color: var(--red);\n}\n.lookLink-9FtZy-{\n  background-color: var(--red);\n    margin-right: 8px;\n}\n.lookFilled-1Gx00P.colorRed-1TFJan:hover{\n  background-color:var(--red-hover);\n}\n.lookLink-9FtZy-:hover{\n  background-color: var(--red-hover);\n}\n.colorRed-1TFJan + .lookLink-9FtZy-{\n  background-color: var(--blurple);\n}\n.colorRed-1TFJan + .lookLink-9FtZy-:hover{\n    background-color: var(--blurple-hover);\n}\n.theme-dark .lookFilled-1Gx00P.colorGrey-2DXtkV{\n  background-color: var(--background-modifier-active);\n}\n.theme-dark .lookFilled-1Gx00P:hover.colorGrey-2DXtkV{\n    background-color: var(--background-primary);\n}\n\n.lookFilled-1Gx00P:hover.colorPrimary-3b3xI6{\n  background-color: var(--background-secondary-alt) !important;\n}\n/* idk */\n.sidebarRegionScroller-3MXcoP{\n  background-color: var(--background-secondary-alt);\n}\n/* discord logo */\n.childWrapper-anI2G9{\n  background-color: var(--background-secondary);\n}\n.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9, .wrapper-1BJsBx:hover .childWrapper-anI2G9{\n  background-color: var(--blurple) !important;\n}\n/* unread msgs */\n.newMessagesBar-265mhP{\n  background-image: var(--blurple-gradient);\n}\n/* friends list */\n.peopleColumn-29fq28{\n  background-color: var(--background-primary);\n}\n/*emoji menu*/\n.wrapper-1-Fsb8{\n  background-color: var(--background-modifier-active);\n}\n/* connected apps */\n.connectedAccount-2Jb-Z0:hover{\n  border-color: rgba(255,255,255,.2);\n}\n/* top right things */\n.winButtonMinMax-PBQ2gm:hover[aria-label*="Minimize"]{\n  background-color: var(--background-secondary) !important;\n}\n.winButton-iRh8-Z:hover{\n  background-color: var(--blurple) ;\n}\n.winButtonClose-1HsbF-:hover{\n  background-color:var(--red);\n}\n/* save changes bar */\n.elevationHigh-1PneE4{\n  background-color: var(--background-secondary-alt) !important;\n}\n/* bot tag */\n.botTagRegular-2HEhHi{\n  background-image: var(--blurple-gradient);\n}\n/* avatar */\n.avatar-1BDn8e, .replyAvatar-1K9Wmr, .avatar-3uk_u9{\n  border-radius: 20%;\n  transition-duration: 0.2s;\n}\n.avatar-1BDn8e:hover, .replyAvatar-1K9Wmr:hover{\n  transform: scale(1.1);\n}\n#app-mount .wrapper-3t9DeA {\n  border-radius: 20%;\n}\n#app-mount .wrapper-3t9DeA svg:not(:root) {\n  overflow: visible;\n}\n#app-mount .wrapper-3t9DeA foreignObject {\n  -webkit-mask: none;\n  mask: none;\n  border-radius: 20%;\n}\n#app-mount .avatarHint-2A3RNb foreignObject {\n  -webkit-mask: none;\n  mask: none;\n  border-radius: 20%;\n}\n/* pv roles */\n.role-2irmRk {\n  transition-duration: 0.15s;\n  border-radius: 5px;\n}\n.role-2irmRk:hover {\n  transform: scale(1);\n  border-radius: 13px;\n}\n/* pv buttons */\n.button-2IFFQ4 {\n  transition-duration: 1.5s;\n  font-weight: 600;\n}\n.button-2IFFQ4:hover {\n  color: transparent;\n  border-color: transparent;\n  background-color: white;\n}\n.theme-dark .newPopoutActivityStyles button {\n  transition-duration: 1.5s;\n  color: white;\n}\n.theme-dark .newPopoutActivityStyles button:hover {\n  color: #18191c;\n}\n/* quick swticher  */\n.quickswitcher-3JagVE, .scroller-zPkAnE{\n  background-color: var(--toast-background);\n}\n.grid-1nZz7S, .attachment-33OFj0, .markup-2BOw-j code, .wrapper-35wsBm{\n  background-color: var(--background-secondary-alt);\n}\n/* hover anim  */\n.layout-2DM8Md:hover{\n  transform: scale(1.02);\n}\n/* search bar  */\n.cardPrimary-1Hv-to, .cardPrimaryEditable-3KtE4g{\n  background-color: var(--background-secondary-alt);\n}\n.searchFilter-2ESiM3, .searchAnswer-3Dz2-q{\n  background-color: var(--background-accent) !important;\n}\n.resultsGroup-r_nuzN,  .option-96V44q{\n  background-color: var(--background-secondary-alt) !important;\n}\n.option-96V44q:hover{\n  background-color: var(--background-secondary) !important;\n}\n.queryContainer-RKFJW-{\n  background-color: var(--background-secondary-alt) !important;\n}\n.queryContainer-RKFJW-:hover{\n  background-color: var(--background-secondary) !important;\n}\n.keybindShortcut-1BD6Z1 > span{\n  fill: var(--background-accent);\n}\n/* server discovery/creation menu  */\n.categoryItem-1QIroW.selectedCategoryItem-FHKU_o .itemInner-gPkiWb{\n  background-image:var(--blurple-gradient) !important;\n}\n.searchBox-3Y2Vi7{\n  background-color: var(--background-primary) !important;\n}\n.container-1CE3eW .directionColumn-35P_nr{\n  background-color: var(--background-secondary-alt) !important; \n  margin-top: 0px;\n}\n.footerTitle-2CYZch, .title-3w8xhj{\n  color: var(--almost-white);\n}\n.theme-dark .footer-2gL1pp {\n  background-color: var(--background-secondary-alt) !important;\n  box-shadow: none !important;  \n}\n.directionColumn-35P_nr .colorHeaderSecondary-3Sp3Ft{\n  margin-bottom: 24px;\n}\n.templatesList-2E6rTe{\n  margin-top: 0%;\n  background-color: var(--background-secondary-alt) !important;\n}\n.background-1QDuV2{\n  background-color: var(--background-secondary-alt);\n}\n.sampleLink-2NLvZg, .title-XLSR78{\n  color: var(--almost-white) !important;\n}\n.numberBadge-2s8kKX{\n  background-image: var(--redgradient);\n  animation-name: pinganimation;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n  animation-timing-function:ease;\n}\n@keyframes pinganimation {\n  0%{\n      filter: drop-shadow(0px 0px 0px var(--red));\n  }\n  50%{\n      filter: drop-shadow(0px 0px 5px var(--red));\n      transform: scale(1.2);\n  }\n  100%{  filter: drop-shadow(0px 0px 0px var(--red));}\n}\n.reactionMe-wv5HKu{\n  background-color:#3a70c198;\n  border-color: var(--blurple-hover) !important;\n}\n.spoilerText-3p6IlD.hidden-HHr2R9{\n  background-color: var(--background-secondary-alt) !important;\n}\n.premiumGuildIconGem-DAxGL7 > g{\n  fill: violet;\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Deep Dark",["",{type:"text-and-color",text:"Blurple",oninput:function(n){document.body.style.setProperty("--blurple",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--blurple")||"#3a71c1";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Blurple Hover",oninput:function(n){document.body.style.setProperty("--blurple-hover",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--blurple-hover")||"#2f5b9d";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Red",oninput:function(n){document.body.style.setProperty("--red",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--red")||"#c13a3a";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Red Hover",oninput:function(n){document.body.style.setProperty("--red-hover",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--red-hover")||"#992e2e";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Green",oninput:function(n){document.body.style.setProperty("--green",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--green")||"#31a169";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Green Hover",oninput:function(n){document.body.style.setProperty("--green-hover",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--green-hover")||"#2c8b5c";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Green Gradient",oninput:function(n){document.body.style.setProperty("--green-gradient",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--green-gradient")||"linear-gradient(to right, #31a169, #2c8b5c )";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Almost White",oninput:function(n){document.body.style.setProperty("--almost-white",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--almost-white")||"#f1f1f1";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Msg Hover",oninput:function(n){document.body.style.setProperty("--msg-hover",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--msg-hover")||"#0e0f1483";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Info Warning Foreground",oninput:function(n){document.body.style.setProperty("--info-warning-foreground",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--info-warning-foreground")||"rgba(10, 114, 128, 0.836)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Toast Box Shadow",oninput:function(n){document.body.style.setProperty("--toast-box-shadow",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--toast-box-shadow")||"rgba(0, 0, 0, .2)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-input",text:"Badge Size",oninput:function(n){document.body.style.setProperty("--badge-size",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--badge-size")||"22px";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Deep Dark")}catch(r){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--blurple",document.body.style.getPropertyValue("--blurple")],["--blurple-hover",document.body.style.getPropertyValue("--blurple-hover")],["--red",document.body.style.getPropertyValue("--red")],["--red-hover",document.body.style.getPropertyValue("--red-hover")],["--green",document.body.style.getPropertyValue("--green")],["--green-hover",document.body.style.getPropertyValue("--green-hover")],["--green-gradient",document.body.style.getPropertyValue("--green-gradient")],["--almost-white",document.body.style.getPropertyValue("--almost-white")],["--msg-hover",document.body.style.getPropertyValue("--msg-hover")],["--info-warning-foreground",document.body.style.getPropertyValue("--info-warning-foreground")],["--toast-box-shadow",document.body.style.getPropertyValue("--toast-box-shadow")],["--badge-size",document.body.style.getPropertyValue("--badge-size")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=r(regeneratorRuntime.mark(function n(r){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(r){return n.apply(this,arguments)}}()}};exports.default=e;
},{}]},{},["index.js"], null);parcelRequire('index.js').default