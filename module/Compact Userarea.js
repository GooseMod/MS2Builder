parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,t,e,a,r,o,i){try{var s=n[o](i),p=s.value}catch(c){return void e(c)}s.done?t(p):Promise.resolve(p).then(a,r)}function t(t){return function(){var e=this,a=arguments;return new Promise(function(r,o){var i=t.apply(e,a);function s(t){n(i,r,o,s,p,"next",t)}function p(t){n(i,r,o,s,p,"throw",t)}s(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a={goosemodHandlers:{onImport:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode('.container-1-ERn5 .header-3OsQeK,\n.searchBar-3TnChZ {\n  z-index: 1;\n}\n\n.panels-3wFtMD {\n  z-index: 0;\n}\n.panels-3wFtMD:hover {\n  z-index: 2;\n}\n\n.guilds-2JjMmN .scroller-3X7KbA {\n  margin-bottom: 72px;\n}\n\n.panels-3wFtMD .container-YkUktl {\n  position: fixed !important;\n  left: 4px !important;\n  height: 52px;\n  border-radius: 25px;\n  background-color: transparent !important;\n}\n.panels-3wFtMD .container-YkUktl .avatarWrapper-1B9FTW .wrapper-1VLyxH {\n  --avatar-size: 48px;\n  width: var(--avatar-size) !important;\n  height: var(--avatar-size) !important;\n}\n.panels-3wFtMD .container-YkUktl .avatarWrapper-1B9FTW .wrapper-1VLyxH::before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  border-radius: 12px 8px 8px 12px;\n  height: var(--avatar-size);\n  width: var(--avatar-size);\n  left: 20px;\n}\n.panels-3wFtMD .container-YkUktl .avatarWrapper-1B9FTW .wrapper-1VLyxH::after {\n  content: "";\n  position: absolute;\n  height: 2px;\n  width: 32px;\n  border-radius: 1px;\n  background-color: var(--background-modifier-accent);\n  bottom: -10px;\n  left: 8px;\n}\n.panels-3wFtMD .container-YkUktl .avatarWrapper-1B9FTW:hover ~ .nameTag-sc-gpq.canCopy-IgTwyV,\n.panels-3wFtMD .container-YkUktl .avatarWrapper-1B9FTW:hover ~ .flex-2S1XBF:not(.spotify-buttons) {\n  opacity: 1;\n  pointer-events: all;\n  animation: left-right 0.2s ease-in;\n}\n.panels-3wFtMD .container-YkUktl .avatarWrapper-1B9FTW ~ .nameTag-sc-gpq.canCopy-IgTwyV,\n.panels-3wFtMD .container-YkUktl .avatarWrapper-1B9FTW ~ .flex-2S1XBF:not(.spotify-buttons) {\n  transition: 250ms ease;\n}\n.panels-3wFtMD .container-YkUktl .avatarWrapper-1B9FTW ~ .nameTag-sc-gpq.canCopy-IgTwyV:hover,\n.panels-3wFtMD .container-YkUktl .avatarWrapper-1B9FTW ~ .flex-2S1XBF:not(.spotify-buttons):hover {\n  opacity: 1;\n  pointer-events: all;\n  animation: left-right 0.2s ease-in;\n}\n.panels-3wFtMD .container-YkUktl .nameTag-sc-gpq {\n  order: 2;\n  min-width: 65px;\n  max-width: 75px;\n  padding: 3px 15px 2px 5px;\n  border-radius: 0 5px 5px 0;\n  background-color: var(--background-floating);\n  opacity: 0;\n  pointer-events: none;\n}\n.panels-3wFtMD .container-YkUktl .nameTag-sc-gpq .customStatus-1UAQAK {\n  opacity: 0;\n}\n.panels-3wFtMD .container-YkUktl .nameTag-sc-gpq .hovered-20u3oh {\n  opacity: 1;\n  transform: none;\n}\n.panels-3wFtMD .container-YkUktl .nameTag-sc-gpq:hover ~ .flex-2S1XBF {\n  opacity: 1;\n}\n.panels-3wFtMD .container-YkUktl .flex-2S1XBF {\n  margin-left: 13px;\n  padding: 2px 2px 2px 2px;\n  border-radius: 5px 0 0 5px;\n  background-color: var(--background-floating);\n  opacity: 0;\n  pointer-events: none;\n}\n.panels-3wFtMD .container-YkUktl .flex-2S1XBF:hover {\n  border-radius: 5px;\n}\n.panels-3wFtMD .container-YkUktl .flex-2S1XBF::before {\n  content: "";\n  position: absolute;\n  margin-left: -12px;\n  top: 50%;\n  margin-top: -5px;\n  border-left-width: 5px;\n  transform: rotate(90deg);\n  width: 0;\n  height: 0;\n  border: 5px solid transparent;\n  border-top-color: var(--background-floating);\n}\n\n.scale-3UGUBw {\n  opacity: 1;\n  transform: none;\n}\n\n#status-picker {\n  top: 5px;\n  left: 4px;\n  width: 40px;\n  background-color: var(--background-floating);\n  transition: 250ms ease;\n  animation: top-bottom 0.2s ease-out;\n}\n#status-picker::before {\n  position: absolute;\n  right: 38%;\n  bottom: 100%;\n  content: "";\n  margin-top: -5px;\n  border: 5px solid transparent;\n  border-left-width: 5px;\n  width: 0;\n  height: 0;\n  border-right-color: var(--background-floating);\n  transform: rotate(90deg);\n}\n#status-picker .scroller-1bVxF5 {\n  padding: 2px 8px;\n}\n#status-picker .scroller-1bVxF5::-webkit-scrollbar,\n#status-picker .scroller-1bVxF5 .separator-1So4YB {\n  display: none;\n}\n#status-picker .item-1OdjEX {\n  padding-left: 2px;\n  right: 5px;\n  left: -4px;\n}\n#status-picker .item-1OdjEX .statusItem-2hiCNB:not([aria-label="Set a custom status"]):not(.customStatusWithEmoji-Y8lMLP) {\n  margin-left: 1px;\n}\n#status-picker .item-1OdjEX .statusItem-2hiCNB .clearStatusButton-GXA1lF {\n  margin-left: -60px;\n  visibility: hidden;\n}\n#status-picker .item-1OdjEX .statusItem-2hiCNB .status-3TYC5W,\n#status-picker .item-1OdjEX .statusItem-2hiCNB .description-3Cwkxk {\n  display: none;\n}\n#status-picker #status-picker-custom-status .customEmoji-1nCP1t {\n  margin-left: -3px;\n}\n#status-picker #status-picker-custom-status .customStatusItem-1qQzss .clearStatusButton-GXA1lF {\n  margin-left: -14px;\n}\n#status-picker #status-picker-custom-status .clearStatusButton-GXA1lF {\n  visibility: hidden;\n}\n#status-picker #status-picker-custom-status:hover .customStatusWithEmoji-Y8lMLP .customEmoji-1nCP1t {\n  visibility: hidden;\n}\n#status-picker #status-picker-custom-status:hover .clearStatusButton-GXA1lF {\n  visibility: visible;\n}\n#status-picker #status-picker-switch-account .label-2gNW3x {\n  margin-left: 6px;\n}\n#status-picker #status-picker-switch-account .iconContainer-1-SsTR {\n  margin-left: -1px;\n  display: none;\n}\n#status-picker #status-picker-switch-account:hover .iconContainer-1-SsTR {\n  display: block;\n}\n#status-picker #status-picker-switch-account + .layer-2aCOJ3 {\n  left: 50px !important;\n}\n\n.platform-win .container-YkUktl {\n  top: 30px !important;\n}\n.platform-win .guilds-2JjMmN .tree-3agP2X {\n  margin-top: 72px;\n}\n\n.platform-osx .container-YkUktl {\n  top: 30px !important;\n}\n.platform-osx .guilds-2JjMmN .tree-3agP2X {\n  margin-top: 66px;\n}\n\n.platform-linux .container-YkUktl {\n  top: 8px !important;\n}\n.platform-linux .guilds-2JjMmN .tree-3agP2X {\n  margin-top: 64px;\n}\n\n.platform-web .container-YkUktl {\n  top: 8px !important;\n}\n.platform-web .guilds-2JjMmN .tree-3agP2X {\n  margin-top: 64px;\n}\n\n@keyframes top-bottom {\n  0% {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes left-right {\n  0% {\n    opacity: 0;\n    transform: translateX(-4px);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Compact Userarea",["",{type:"text-input",text:"Avatar Size",oninput:function(n){document.body.style.setProperty("--avatar-size",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--avatar-size")||"48px";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.remove();try{goosemodScope.settings.removeItem("Compact Userarea")}catch(t){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--avatar-size",document.body.style.getPropertyValue("--avatar-size")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=t(regeneratorRuntime.mark(function n(t){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()}};exports.default=a;
},{}]},{},["index.js"], null);parcelRequire('index.js').default