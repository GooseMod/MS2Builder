parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,n,t,r,o,a,c){try{var d=e[a](c),i=d.value}catch(p){return void t(p)}d.done?n(i):Promise.resolve(i).then(r,o)}function n(n){return function(){var t=this,r=arguments;return new Promise(function(o,a){var c=n.apply(t,r);function d(n){e(c,o,a,d,i,"next",n)}function i(n){e(c,o,a,d,i,"throw",n)}d(void 0)})}}var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode('@import url("https://luckfire.github.io/theme-source/src/css-compile/ThemeSource-Compiled.css");\n:root {\n  --blurple-replace: #7289da;\n  --spotify-header: #699378;\n  --background-primary: #292841;\n  --background-secondary: #242338;\n  --background-secondary-alt: #191827;\n  --background-tertiary: #1c1b29;\n  --background-accent: #413f66;\n  --background-floating: #15141e;\n  --userarea-background: var(--background-tertiary);\n  --header-primary: #fff;\n  --header-secondary: #b9bbbe;\n  --elevation-low: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05), 0 2px 0 rgba(4, 4, 5, 0.05);\n  --elevation-high: 0 8px 16px rgba(0, 0, 0, 0.24);\n  --channels-default: #B9BBBE;\n  --channeltextarea-background: var(--background-tertiary);\n  --guild-header-text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n  --activity-card-background: #202225;\n  --interactive-normal: #b9bbbe;\n  --interactive-hover: #dcddde;\n  --interactive-active: #fff;\n  --interactive-muted: #737579;\n  --background-modifier-hover: rgba(60, 58, 94, 0.1);\n  --background-modifier-active: rgba(60, 58, 94, 0.3);\n  --background-modifier-selected: rgba(60, 58, 94, 0.4);\n  --background-modifier-accent: hsla(0, 0%, 100%, 0.06);\n  --text-link: #00b0f4;\n  --text-normal: #ffffff;\n  --text-muted: #B9BBBE;\n  --deprecated-panel-background: #292b2f;\n  --deprecated-card-bg: rgba(0, 0, 0, 0.2);\n  --deprecated-card-editable-bg: rgba(0, 0, 0, 0.1);\n  --deprecated-store-bg: #36393f;\n  --deprecated-quickswitcher-input-background: #72767d;\n  --deprecated-quickswitcher-input-placeholder: hsla(0, 0%, 100%, 0.3);\n  --deprecated-text-input-bg: rgba(0, 0, 0, 0.1);\n  --deprecated-text-input-border: rgba(0, 0, 0, 0.3);\n  --deprecated-text-input-border-hover: #040405;\n  --deprecated-text-input-border-disabled: var(--background-tertiary);\n  --deprecated-text-input-prefix: #dcddde;\n  --background-accent-1: rgb(64, 62, 101, 0.1);\n  --background-accent-3: rgb(64, 62, 101, 0.3);\n  --background-floating-2: rgba(21, 20, 30, 0.2);\n}\n\n#app-mount .role-2irmRk {\n  position: relative;\n  overflow: hidden;\n  border: 0;\n  z-index: 0;\n  padding: 5px;\n}\n#app-mount .role-2irmRk .roleCircle-3xAZ1j::after {\n  content: "";\n  position: absolute;\n  background: inherit;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  opacity: 0.25;\n}\n#app-mount .role-2irmRk.addButton-pcyyf6 {\n  background-color: rgba(125, 125, 125, 0.25);\n}\n\n#app-mount .channelTextArea-2VhZ6z .scrollableContainer-2NUZem,\n#app-mount .container-2Pjhx- .layout-2DM8Md,\n#app-mount .input-cIJ7To,\n#app-mount .searchBar-3dMhjb,\n#app-mount .searchBarComponent-32dTOx {\n  border-radius: 25px;\n}\n#app-mount .searchFilter-2ESiM3 {\n  border-radius: 25px;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n#app-mount .searchAnswer-3Dz2-q {\n  border-radius: 0 25px 25px 0;\n  padding-right: 6px;\n  margin-left: -7px;\n}\n#app-mount .searchBarComponent-32dTOx {\n  padding-left: 10px;\n}\n#app-mount .searchBar-3dMhjb .public-DraftEditorPlaceholder-root {\n  padding-left: 7px;\n}\n#app-mount .userPopout-3XzG_A,\n#app-mount .root-SR8cQa,\n#app-mount .modal-3O0aXp {\n  border-radius: 20px;\n}\n#app-mount .menu-3sdvDG {\n  border-radius: 10px;\n}\n\n#app-mount .headerSpotify-zpWxgT,\n#app-mount .topSectionSpotify-1lI0-P,\n#app-mount .topSectionSpotify-1lI0-P .headerFill-adLl4x .tabBarContainer-1s1u-z {\n  background: var(--spotify-header);\n}\n\nhtml.theme-light #app-mount::after {\n  content: "You need to have dark theme enabled for this theme to work properly. To enable it, go into Settings -> Appearance";\n  background: var(--background-tertiary);\n  /* Container color */\n  position: fixed;\n  z-index: 5;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  max-width: 225px;\n  line-height: normal;\n  padding: 15px 0 15px 60px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  border-left: 2px solid #F04747;\n  border-radius: 2px;\n  color: rgba(255, 255, 255, 0.65);\n  /* Text Color */\n  background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0eiIvPjwvc3ZnPg==");\n  background-repeat: no-repeat;\n  background-size: 35px;\n  background-position: 10px center;\n}')),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("Discord Revamp",["",{type:"text-and-color",text:"Blurple Replace",oninput:function(e){document.body.style.setProperty("--blurple-replace",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--blurple-replace")||"#7289da";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Spotify Header",oninput:function(e){document.body.style.setProperty("--spotify-header",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--spotify-header")||"#699378";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Deprecated Panel Background",oninput:function(e){document.body.style.setProperty("--deprecated-panel-background",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--deprecated-panel-background")||"#292b2f";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Background Accent 1",oninput:function(e){document.body.style.setProperty("--background-accent-1",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--background-accent-1")||"rgb(64, 62, 101, 0.1)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Background Accent 3",oninput:function(e){document.body.style.setProperty("--background-accent-3",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--background-accent-3")||"rgb(64, 62, 101, 0.3)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Background Floating 2",oninput:function(e){document.body.style.setProperty("--background-floating-2",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--background-floating-2")||"rgba(21, 20, 30, 0.2)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.remove();try{goosemodScope.settings.removeItem("Discord Revamp")}catch(n){}case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[["--blurple-replace",document.body.style.getPropertyValue("--blurple-replace")],["--spotify-header",document.body.style.getPropertyValue("--spotify-header")],["--deprecated-panel-background",document.body.style.getPropertyValue("--deprecated-panel-background")],["--background-accent-1",document.body.style.getPropertyValue("--background-accent-1")],["--background-accent-3",document.body.style.getPropertyValue("--background-accent-3")],["--background-floating-2",document.body.style.getPropertyValue("--background-floating-2")]]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),loadSettings:function(){var e=n(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.forEach(function(e){document.body.style.setProperty(e[0],e[1])});case 1:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default