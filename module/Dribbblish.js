parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,r,o,t,a,e,i){try{var p=n[e](i),l=p.value}catch(s){return void o(s)}p.done?r(l):Promise.resolve(l).then(t,a)}function r(r){return function(){var o=this,t=arguments;return new Promise(function(a,e){var i=r.apply(o,t);function p(r){n(i,a,e,p,l,"next",r)}function l(r){n(i,a,e,p,l,"throw",r)}p(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={goosemodHandlers:{onImport:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('/* linux web */\n.platform-linux .tutorialContainer-2sGCg9, .platform-web .tutorialContainer-2sGCg9 {\n  top: 10px;\n  transform: translate(0, 0);\n}\n.platform-linux .root-3R2ngo, .platform-web .root-3R2ngo {\n  margin: 10px 10px 10px 72px;\n  border-radius: 8px;\n  height: calc(100% - 20px);\n}\n\n/* home/create */\n.tutorialContainer-2sGCg9 {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  -webkit-app-region: none;\n}\n.tutorialContainer-2sGCg9 .listItem-GuPuDH {\n  margin: 0;\n}\n.tutorialContainer-2sGCg9 .item-2hkk8m {\n  display: none;\n}\n\n.tutorialContainer-30WoTp {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  z-index: 1;\n  -webkit-app-region: none;\n}\n.tutorialContainer-30WoTp .listItem-GuPuDH {\n  margin: 0;\n}\n.tutorialContainer-30WoTp .item-2hkk8m {\n  display: none;\n}\n\n/* Border */\n.layer-3QrUeG {\n  margin: 10px;\n  border-radius: 8px;\n  margin-left: 72px;\n}\n\n/* Windows only */\n.platform-win .sidebar-2K8pFh {\n  border-radius: 0;\n  overflow: hidden;\n}\n.platform-win .base-3dtUhz {\n  border-radius: 0 8px 0 0;\n}\n.platform-win .guilds-1SWlCJ {\n  border-radius: 8px 0 0 0;\n}\n.platform-win .backdrop-1wrmKB, .platform-win .modal-3c3bKg, .platform-win .layer-2KE1M9 {\n  margin: 23px 10px 10px 72px;\n  border-radius: 8px;\n  padding: 0;\n}\n.platform-win .modal-3c3bKg, .platform-win .layer-2KE1M9 {\n  height: calc(100vh - 33px);\n  width: calc(100vw - 82px);\n}\n.platform-win .root-3R2ngo {\n  margin: 23px 10px 10px 72px;\n  border-radius: 8px;\n  height: calc(100% - 32px);\n}\n.platform-win .layer-3QrUeG:not(:first-child) {\n  margin-top: 0;\n}\n.platform-win .layer-3QrUeG {\n  top: 0;\n  padding-top: 0;\n  margin-top: 0;\n}\n.platform-win .standardSidebarView-3F1I7i {\n  top: 0;\n}\n.platform-win .toolbar-1t6TWx .search-36MZv-, .platform-win .toolbar-1t6TWx .inviteToolbar-3F-l2g .iconWrapper-2OrFZ1 {\n  top: 56px !important;\n}\n.platform-win .libraryFilter-31ZUa2 {\n  top: 56px !important;\n}\n.platform-win .tutorialContainer-2sGCg9 {\n  transform: translate(0, -32px);\n}\n\n/* Osx stuff */\n.platform-osx .wrapper-3NnKdC {\n  margin-top: 0;\n}\n.platform-osx .tutorialContainer-2sGCg9 {\n  transform: translate(0, -12px);\n}\n.platform-osx .layer-3QrUeG {\n  margin-top: 10px !important;\n}\n.platform-osx .backdrop-1wrmKB, .platform-osx .modal-3c3bKg, .platform-osx .layer-2KE1M9 {\n  margin: 10px 10px 10px 72px;\n  border-radius: 8px;\n  padding: 0;\n}\n.platform-osx .modal-3c3bKg, .platform-osx .layer-2KE1M9 {\n  height: calc(100vh - 20px);\n  width: calc(100vw - 82px);\n}\n.platform-osx .root-3R2ngo {\n  margin: 23px 10px 10px 72px;\n  border-radius: 8px;\n}\n.platform-osx .toolbar-1t6TWx .search-36MZv-, .platform-osx .toolbar-1t6TWx .inviteToolbar-3F-l2g .iconWrapper-2OrFZ1 {\n  top: 86px !important;\n}\n.platform-osx .libraryFilter-31ZUa2 {\n  top: 86px !important;\n}\n\n/* User buttons */\n.panels-j1Uci_ > .container-3baos1 {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  bottom: 66px;\n  border-radius: 0.85rem;\n  background-color: var(--background-primary);\n  height: 130px;\n  padding-top: 10px;\n  padding-bottom: 8px;\n  width: 32px;\n  left: 12px;\n  -webkit-app-region: none;\n}\n.panels-j1Uci_ > .container-3baos1 .avatarWrapper-2yR4wp {\n  margin: 0;\n}\n.panels-j1Uci_ > .container-3baos1 .canCopy-2VBT7N {\n  display: none;\n}\n.panels-j1Uci_ > .container-3baos1 .flex-1xMQg5 {\n  flex-direction: column;\n}\n\n/* Toolbar */\n.toolbar-1t6TWx {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  left: 12px;\n  bottom: 224px;\n  padding: 4px;\n  border-radius: 0.85rem;\n  background-color: var(--background-primary);\n  -webkit-app-region: none;\n  /* invite */\n  /* Libary */\n  /* Search */\n}\n.toolbar-1t6TWx > * {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n.toolbar-1t6TWx .inviteToolbar-3F-l2g .divider-3FBTu8 {\n  display: none;\n}\n.toolbar-1t6TWx .inviteToolbar-3F-l2g .iconWrapper-2OrFZ1 {\n  position: fixed;\n  left: 12px;\n  top: 66px;\n  margin: 0;\n  min-width: 48px;\n  height: 48px;\n  background-color: var(--background-primary);\n  border-radius: 24px;\n  transition: background-color 0.15s ease-out, color 0.15s ease-out, border-radius 0.2s ease-out;\n}\n.toolbar-1t6TWx .inviteToolbar-3F-l2g .iconWrapper-2OrFZ1 .icon-22AiRD {\n  margin: 12px;\n}\n.toolbar-1t6TWx .inviteToolbar-3F-l2g .iconWrapper-2OrFZ1:hover {\n  background-color: var(--brand-experiment);\n  border-radius: 0.85rem;\n}\n.toolbar-1t6TWx .libraryFilter-31ZUa2 {\n  position: fixed;\n  left: 12px;\n  top: 66px;\n  margin: 0;\n  width: 48px;\n  padding-left: 6px;\n  padding-right: 6px;\n  height: 48px;\n  background-color: var(--background-primary);\n  border-radius: 24px;\n  transition: background-color 0.15s ease-out, color 0.6s ease-out, border-radius 0.6s ease-out, width 0.6s ease-in-out;\n}\n.toolbar-1t6TWx .libraryFilter-31ZUa2:hover {\n  background-color: var(--brand-experiment);\n  border-radius: 0.85rem;\n}\n.toolbar-1t6TWx .libraryFilter-31ZUa2.focused-2eiV0o {\n  background-color: var(--brand-experiment);\n  border-radius: 0.85rem;\n  width: 240px;\n}\n.toolbar-1t6TWx .libraryFilter-31ZUa2.focused-2eiV0o .input-3Xdcic {\n  display: flex;\n}\n.toolbar-1t6TWx .libraryFilter-31ZUa2.focused-2eiV0o .icon-1S6UIr {\n  height: 16px;\n  width: 16px;\n  top: 4px;\n  transform: translate(1px, -3px);\n}\n.toolbar-1t6TWx .libraryFilter-31ZUa2.focused-2eiV0o .container-cMG81i {\n  background-color: var(--background-tertiary);\n}\n.toolbar-1t6TWx .libraryFilter-31ZUa2.focused-2eiV0o .input-3Xdcic {\n  transform: translate(0, 0);\n  opacity: 1;\n}\n.toolbar-1t6TWx .libraryFilter-31ZUa2 .container-cMG81i {\n  background-color: transparent;\n  transition: 0.6s ease-out;\n}\n.toolbar-1t6TWx .libraryFilter-31ZUa2 .input-3Xdcic {\n  transform: translate(0, 9px);\n  opacity: 0;\n}\n.toolbar-1t6TWx .libraryFilter-31ZUa2 .icon-1S6UIr {\n  color: var(--interactive-normal);\n  height: 23px;\n  width: 23px;\n  transform: translate(2px, -14px);\n  transition: 0.6s ease-out;\n}\n.toolbar-1t6TWx .search-36MZv- {\n  position: fixed;\n  left: 12px;\n  top: 67px;\n}\n.toolbar-1t6TWx .search-36MZv- .iconContainer-O4O2CN {\n  bottom: 4px;\n}\n.toolbar-1t6TWx .search-36MZv- .iconContainer-O4O2CN .icon-3cZ1F_ {\n  transition: all 0.6s ease;\n}\n.toolbar-1t6TWx .search-36MZv- .search-2oPWTC {\n  width: fit-content;\n  top: -5px;\n  right: 8px;\n  margin: 0;\n  min-width: 48px;\n  padding-left: 6px;\n  padding-right: 6px;\n  height: 48px;\n  background-color: var(--background-primary);\n  border-radius: 24px;\n  transition: background-color 0.15s ease-out, color 0.15s ease-out, border-radius 0.2s ease-out;\n}\n.toolbar-1t6TWx .search-36MZv- .search-2oPWTC .searchBar-3dMhjb {\n  padding: 0;\n  transform: translate(-2px, 13px);\n}\n.toolbar-1t6TWx .search-36MZv- .search-2oPWTC.open-6_Y_aH, .toolbar-1t6TWx .search-36MZv- .search-2oPWTC:hover {\n  background-color: var(--brand-experiment);\n  border-radius: 0.85rem;\n}\n.toolbar-1t6TWx .search-36MZv- .search-2oPWTC:not(.open-6_Y_aH) .searchBar-3dMhjb {\n  width: 28px;\n  transition: width 0.6s ease-in-out, background-color 0.6s ease-in-out;\n  background-color: transparent;\n}\n.toolbar-1t6TWx .search-36MZv- .search-2oPWTC:not(.open-6_Y_aH) .searchBar-3dMhjb .icon-3cZ1F_ {\n  color: var(--interactive-normal);\n  height: 23px;\n  width: 23px;\n  top: 0;\n}\n.toolbar-1t6TWx .search-36MZv- .search-2oPWTC.open-6_Y_aH .searchBar-3dMhjb {\n  width: 240px;\n  background-color: var(--background-tertiary);\n  transition: all 0.6s ease-in-out;\n}\n.toolbar-1t6TWx .search-36MZv- .search-2oPWTC.open-6_Y_aH .searchBar-3dMhjb .icon-3cZ1F_ {\n  height: 16px;\n  width: 16px;\n  top: 4px;\n}\n\n/* Background */\n.layers-3iHuyZ {\n  background: var(--background-secondary-alt);\n  contain: strict;\n}\n\n.typeWindows-1za-n7 {\n  background: var(--background-secondary-alt);\n}\n\n.wrapper-3NnKdC .scroller-1Bvpku {\n  contain: unset !important;\n  padding-top: 10px;\n}\n\n/* Drag */\n.layers-3iHuyZ {\n  -webkit-app-region: drag;\n}\n.layers-3iHuyZ > div {\n  -webkit-app-region: none;\n}\n\n/* Popouts */\n.layer-2KE1M9 .modal-3O0aXp.root-1gCeng {\n  z-index: 1;\n  background: transparent !important;\n  position: relative;\n  border-radius: 8px;\n}\n.layer-2KE1M9 .modal-3O0aXp.root-1gCeng > div {\n  z-index: 1;\n}\n.layer-2KE1M9 .modal-3O0aXp.root-1gCeng .footer-2gL1pp {\n  z-index: 1;\n  background: transparent !important;\n  position: relative;\n  border-radius: 8px;\n}\n.layer-2KE1M9 .modal-3O0aXp.root-1gCeng .footer-2gL1pp > div {\n  z-index: 1;\n}\n.layer-2KE1M9 .modal-3O0aXp.root-1gCeng .footer-2gL1pp::before {\n  background-color: var(--background-secondary);\n  border-radius: 8px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  content: "";\n  z-index: 0;\n  top: 0;\n  opacity: 0.15;\n  left: 50%;\n  transform: translate(-50%);\n}\n.layer-2KE1M9 .modal-3O0aXp.root-1gCeng::before {\n  background-color: var(--background-secondary);\n  border-radius: 8px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  content: "";\n  z-index: 0;\n  top: 0;\n  opacity: 0.25;\n  left: 50%;\n  transform: translate(-50%);\n}\n\n/* Settings */\n.layer-3QrUeG {\n  transform: none !important;\n  opacity: 1 !important;\n}\n.layer-3QrUeG:not(:first-child) {\n  z-index: 100;\n}\n\n.layers-3iHuyZ > .layer-3QrUeG.animating-rRxada *,\n.layers-3iHuyZ > .layer-3QrUeG.animating-rRxada {\n  pointer-events: auto !important;\n  will-change: unset;\n}\n\n.animating-rRxada.stop-animations {\n  z-index: 100 !important;\n}\n\n/* Seperator */\n.tutorialContainer-2sGCg9 + .listItem-GuPuDH {\n  display: none;\n}\n\n.tutorialContainer-2sGCg9 + [style] + .listItem-GuPuDH {\n  display: flex;\n}\n\n/* other */\n.backdrop-1wrmKB, .modal-3c3bKg {\n  margin: 10px 10px 10px 72px;\n  border-radius: 8px;\n}\n\n.modal-3c3bKg {\n  height: calc(100vh - 20px);\n  width: calc(100vw - 82px);\n}\n\n.layerContainer-yqaFcK {\n  visibility: hidden;\n}\n.layerContainer-yqaFcK > * {\n  visibility: visible;\n}\n\n/* popouts */\n.messagesPopoutWrap-1MQ1bW, .container-enaOkj, [id] > .focusLock-Ns3yie {\n  position: fixed;\n  bottom: 10px;\n  left: 72px;\n  border-radius: 8px;\n}\n\n/* Read all */\n#bd-pub-li {\n  margin-top: 69px;\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Dribbblish",[""]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Dribbblish")}catch(r){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=r(regeneratorRuntime.mark(function n(r){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(r){return n.apply(this,arguments)}}()}};exports.default=t;
},{}]},{},["index.js"], null);parcelRequire('index.js').default