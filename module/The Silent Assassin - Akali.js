parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,r,e,o,t,a,i){try{var p=n[a](i),d=p.value}catch(s){return void e(s)}p.done?r(d):Promise.resolve(d).then(o,t)}function r(r){return function(){var e=this,o=arguments;return new Promise(function(t,a){var i=r.apply(e,o);function p(r){n(i,t,a,p,d,"next",r)}function d(r){n(i,t,a,p,d,"throw",r)}p(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode("/**\n * @name Akali - Silent Asassin\n * @description This Shit was made because i was bored watching E3 TakeTwo BS and to keep myself from sleeping away, i started to do this. Took me about 50 Mins to make so dont expect a Pro Work\n * @author ♡Lisa~#0004\n * @version 1.0.0\n * @authorId 202740603790819328\n * @donate https://streamelements.com/sinonaim/tip\n * @source https://raw.githubusercontent.com/PrincessAkira/Green-Akali/main/Akali.theme.css\n * @updateUrl https://raw.githubusercontent.com/PrincessAkira/Green-Akali/main/Akali.theme.css\n */\n\n@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');\n\n:root {\n    --background-tertiary: transparent !important;\n    --background-primary: transparent !important;\n    --background-secondary: transparent !important;\n    --background-tertiary: transparent !important;\n    --background-secondary-alt: transparent !important;\n    --background-mentioned: rgba(0, 255, 0, 0.281) !important;\n    --info-warning-foreground: transparent !important;\n    --text-muted: white !important;\n    --channeltextarea-background: transparent !important;\n    --scrollbar-auto-thumb: lightgreen !important;\n    --brand-experiment: darkgreen !important;\n    --channels-default: white !important;\n    --scrollbar-thin-thumb: lightgreen !important;\n}\n\nbody {\n    background-color: transparent !important;\n    font-family: 'Comfortaa', monospace !important;\n}\n\n.scrollerSpacer-avRLaA {\n    height: 10px;\n}\n\n#app-mount {\n    background-image: url(https://i.imgur.com/wFkwnZn.jpg) !important;\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n}\n\n.group-spacing-16,\n.groupStart-23k01U,\n.contents-2mQqc9 {\n    margin-top: 0px !important;\n}\n\n.container-1D34oG {\n    background-color: transparent !important;\n}\n\n.form-2fGMdU,\n.drawerSizingWrapper-17Mss4 {\n    background-color: rgba(0, 0, 0, 0.6);\n    border-radius: 20px;\n}\n\n.scrollableContainer-2NUZem {\n    color: white;\n    width: 100%;\n}\n\n.channelTextArea-rNsIhG {\n    margin-bottom: 9px;\n    top: 5px;\n    width: 100%;\n    height: 100%;\n}\n\n.itemCard-v9viV7 {\n    margin-top: 10px;\n}\n\n.scroller-2LSbBU {\n    bottom: 5px;\n    left: -1px;\n}\n\n.username-1A8OIy,\n.title-eS5yk3 {\n    animation: colorRotate 12s linear 0s infinite;\n}\n\n.container-2lgZY8,\n.standardSidebarView-3F1I7i {\n    background-color: rgba(0, 0, 0, 0.67);\n}\n\n.divider-3_HH5L {\n    display: none;\n}\n\n.compact-T3H92H.wrapper-2a6GCs,\n.cozy-3raOZG.wrapper-2a6GCs {\n    padding-top: 0rem;\n}\n\n.message-2qnXI6:hover,\n.wrapper-2a6GCs:hover {\n    background-color: rgba(0, 0, 0, 0.6) !important;\n}\n\n/* SUPPORTED PLUGINS -> HideChannels */\n.sidebar-2K8pFh.hideElement .container-3baos1 {\n    position: absolute;\n    overflow: hidden;\n}\n\n.sidebar-2K8pFh.hideElement .container-3baos1,\n.sidebar-2K8pFh.hideElement .container-3baos1:before {\n    background-color: transparent !important;\n    border-radius: 0;\n    box-shadow: none !important;\n}\n\n.popoutRight-1veHKi.noArrow-2foL9g {\n    overflow: hidden;\n}\n\n.wrapper-2qzCYF {\n    background-color: none;\n}\n\n.sidebar-2K8pFh,\n.guilds-1SWlCJ {\n    border: 2px solid lightgreen;\n    border-right: 0;\n    border-radius: 0 !important;\n}\n\n.nowPlayingColumn-2sl4cE,\n.membersWrap-2h-GB4 {\n    border-left: 2px solid lightgreen;\n}\n\n.scroller-2ZPeAD {\n    border: 0;\n}\n\n.container-1D34oG {\n    border: 2px solid lightgreen;\n    border-radius: 0 !important;\n}\n\n.drawerSizingWrapper-17Mss4 {\n    border: 2px solid lightgreen;\n    border-bottom: 0;\n    top: -1px;\n    border-radius: 0 !important;\n}\n\n.container-1r6BKw.themed-ANHk51 {\n    border-bottom: 2px solid lightgreen;\n    border-radius: 0 !important;\n}\n\n.tutorialContainer-2sGCg9 {\n    margin-top: 5px;\n}\n\n.title-29uC1r {\n    font-size: 20px;\n    color: lightgreen !important;\n}\n\n.container-2Pjhx-:hover {\n    border: 0;\n    box-shadow: 0;\n}\n\n.container-2Pjhx- {\n    transition: background-color .6s;\n    margin-top: 2px;\n}\n\n.embedFull-2tM8-- {\n    background-color: rgba(0, 0, 0, 0.7);\n    border-left: springgreen 4px solid !important;\n    border-bottom: springgreen 4px solid !important;\n}\n\n.wordmarkWindows-1v0lYD,\n.wordmark-2iDDfm {\n    display: none;\n}\n\n.nowPlayingColumn-2sl4cE,\n.container-1r6BKw.themed-ANHk51 {\n    backdrop-filter: blur(4px);\n}\n\n.fontSize16Padding-3Wk7zP,\n.nowPlayingColumn-2sl4cE {\n    text-align: center;\n    color: lightgreen;\n    font-size: 17px;\n}\n\n.cooldownWrapper-3joyFc,\n.typing-2GQL18,\n.base-gE7OpD {\n    text-align: center;\n    font-size: 12px;\n}\n\n.wrapper-3D2qGf:hover {\n    background-color: rgba(0, 0, 0, 0.6);\n    box-shadow: 0px 0px 13px lightgreen;\n}\n\n.containerDefault-3tr_sE {\n    padding-top: 4px;\n}\n\n.header-2V-4Sw {\n    border-bottom: lightgreen 2px solid;\n}\n\n.wrapper-3D2qGf {\n    background-color: rgba(0, 0, 0, 0.6) !important;\n    border: 2px solid lightgreen;\n    transition: box-shadow .6s;\n}\n\n.inset-3sAvek {\n    text-align: left;\n    background-color: rgba(0, 0, 0, 0.6) !important;\n}\n\n.container-3baos1,\n.form-2fGMdU {\n    border-top: 2px solid lightgreen;\n    border-radius: 0 !important;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.bar-2Qqk5Z {\n    background-color: gray !important;\n}\n\n.barFill-23-gu- {\n    background-color: green;\n}\n\n.unread-1xRYoj {\n    background-color: rgba(0, 0, 0, 0.67);\n    opacity: 100%;\n    border: lightgreen 2px solid;\n}\n\n.header-2RyJ0Y,\n.header-2SF4Nh {\n    color: green !important;\n    text-align: center !important;\n    text-decoration: underline green !important;\n}\n\n.chat-3bRxxu {\n    border: 2px solid lightgreen;\n    border-radius: 0 !important;\n}\n\n.bd-button {\n    background-color: darkgreen;\n}\n\n.content-3QAtGj {\n    color: white;\n}\n\n.headerText-2F0828,\n.name-uJV0GL {\n    color: lightgreen;\n}\n\n.autocompleteInner-zh20B_ {\n    background-color: rgba(0, 0, 0, 0.9);\n    border: 2px solid lightgreen;\n    border-radius: 0 !important;\n}\n\n.typing-2GQL18 {\n    font-size: 8px;\n    left: 7%;\n}\n\n.ellipsis-19qdx6 {\n    display: none;\n}\n\n.selected-1Tbx07 {\n    background-color: rgba(187, 187, 187, 0.67) !important;\n    transition: background-color .7s;\n}\n\n.autocomplete-1vrmpx {\n    background-color: transparent !important;\n}\n\n.header-23xsNx {\n    margin-bottom: 1px;\n}\n\n.blockquoteContainer-U5TVEi {\n    background-color: rgba(156, 156, 156, 0.7);\n    padding: 2px;\n}\n\n.blockquoteDivider-2hH8H6 {\n    display: none;\n}\n\n.noChat-18KtBD.wrapper-2qzCYF {\n    background-color: transparent !important;\n}\n\n/*\n*\n* BetterDiscord Stuff\n*\n*/\n\n.floating-window.resizable,\n.root-1gCeng {\n    background-color: rgba(46, 46, 46, 0.67) !important;\n}\n\n.root-1gCeng {\n    padding: 10px;\n}\n\n.bd-button {\n    background-color: darkgreen;\n}\n\n\n\n\n/*\n*\n* Animation Section\n*\n*/\n\n@keyframes colorRotate {\n    from {\n        color: rgb(255, 0, 0);\n    }\n\n    16.6% {\n        color: rgb(255, 0, 255);\n    }\n\n    33.3% {\n        color: orange;\n    }\n\n    50% {\n        color: rgb(0, 255, 255);\n    }\n\n    66.6% {\n        color: rgb(0, 255, 0);\n    }\n\n    83.3% {\n        color: rgb(255, 255, 0);\n    }\n\n    to {\n        color: rgb(255, 0, 0);\n    }\n}")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("The Silent Assassin - Akali",["",{type:"text-input",text:"Info Warning Foreground",oninput:function(n){document.body.style.setProperty("--info-warning-foreground",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--info-warning-foreground")||"transparent";return console.log(n),n}},{type:"text-input",text:"Brand Experiment",oninput:function(n){document.body.style.setProperty("--brand-experiment",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--brand-experiment")||"darkgreen";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.remove();try{goosemodScope.settings.removeItem("The Silent Assassin - Akali")}catch(r){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--info-warning-foreground",document.body.style.getPropertyValue("--info-warning-foreground")],["--brand-experiment",document.body.style.getPropertyValue("--brand-experiment")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=r(regeneratorRuntime.mark(function n(r){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(r){return n.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default