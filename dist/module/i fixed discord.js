parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t,r,n,a,o,d){try{var c=e[o](d),i=c.value}catch(b){return void r(b)}c.done?t(i):Promise.resolve(i).then(n,a)}function t(t){return function(){var r=this,n=arguments;return new Promise(function(a,o){var d=t.apply(r,n);function c(t){e(d,a,o,c,i,"next",t)}function i(t){e(d,a,o,c,i,"throw",t)}c(void 0)})}}var r;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=document.createElement("style"),document.head.appendChild(r),r.appendChild(document.createTextNode(":root {\n\t--sidebar: #7289DA;\n\t--sidebarDark: #6479c1;\n}\n\n/*\n\nAttention!\nThis theme only works on light mode, with dark sidebar enabled.\n\n*/\n\n.theme-light {\n\t--header-primary: #060607;\n\t--header-secondary: #4f5660;\n\t--text-normal: #2e3338;\n\t--text-muted: #747f8d;\n\t--text-link: #0067e0;\n\t--channels-default: #6a7480;\n\t--interactive-normal: #4f5660;\n\t--interactive-hover: #2e3338;\n\t--interactive-active: #060607;\n\t--interactive-muted: #c7ccd1;\n\t--background-primary: #eee;\n    --background-secondary: #e8e8e8;\n    --background-secondary-alt: #d7d7d7;\n    --background-tertiary: #eee;\n\t--background-accent: #747f8d;\n\t--background-floating: #fff;\n\t--background-mobile-primary: #f8f9f9;\n\t--background-mobile-secondary: #fff;\n\t--background-modifier-hover: rgba(116,127,141,0.08);\n\t--background-modifier-active: rgba(116,127,141,0.16);\n\t--background-modifier-selected: rgba(116,127,141,0.24);\n\t--background-modifier-accent: rgba(6,6,7,0.08);\n\t--background-mentioned: rgba(250,166,26,0.1);\n\t--background-mentioned-hover: rgba(250,166,26,0.2);\n\t--background-message-hover: rgba(6,6,7,0.02);\n\t--background-help-warning: rgba(250,166,26,0.1);\n\t--background-help-info: rgba(0,103,224,0.1);\n\t--scrollbar-thin-thumb: rgba(79,84,92,0.3);\n\t--scrollbar-thin-track: transparent;\n\t--scrollbar-auto-thumb: #ccc;\n\t--scrollbar-auto-track: #f2f2f2;\n\t--scrollbar-auto-scrollbar-color-thumb: #e3e5e8;\n\t--scrollbar-auto-scrollbar-color-track: #f2f3f5;\n\t--elevation-stroke: 0 0 0 1px rgba(6,6,7,0.08);\n\t--elevation-low: 0 1px 0 rgba(6,6,7,0.1),0 1.5px 0 rgba(6,6,7,0.025),0 2px 0 rgba(6,6,7,0.025);\n\t--elevation-medium: 0 4px 4px rgba(0,0,0,0.08);\n\t--elevation-high: 0 8px 16px rgba(0,0,0,0.16);\n\t--logo-primary: var(--sidebar);\n\t--focus-primary: #00b0f4;\n\t--guild-header-text-shadow: 0 1px 1px hsla(0,0%,100%,0.4);\n\t--channeltextarea-background: rgba(0,0,0,0.1);\n\t--activity-card-background: #fff;\n\t--textbox-markdown-syntax: #6a7480;\n\t--deprecated-card-bg: #f8f9f9;\n\t--deprecated-card-editable-bg: rgba(246,246,247,0.6);\n\t--deprecated-store-bg: #f8f9f9;\n\t--deprecated-quickswitcher-input-background: #fff;\n\t--deprecated-quickswitcher-input-placeholder: rgba(79,84,92,0.3);\n\t--deprecated-text-input-bg: rgba(79,84,92,0.02);\n\t--deprecated-text-input-border: rgba(79,84,92,0.3);\n\t--deprecated-text-input-border-hover: #b9bbbe;\n\t--deprecated-text-input-border-disabled: #dcddde;\n\t--deprecated-text-input-prefix: #b9bbbe;\n}\n/* Using dark sidebar gives the sidebar the theme-dark colours instead of the theme-light colours\n*/\n.theme-dark {\n\t--header-primary: #fff;\n\t--header-secondary: #eee;\n\t--text-normal: #dcddde;\n\t--text-muted: #eee;\n\t--text-link: #00b0f4;\n\t--channels-default: #eee;\n\t--interactive-normal: #e4e4e4;\n\t--interactive-hover: #dcddde;\n\t--interactive-active: #fff;\n\t--interactive-muted: #eee;\n\t--background-primary: var(--sidebar);\n\t--background-secondary: var(--sidebar);\n\t--background-secondary-alt: var(--sidebar);\n\t--background-tertiary: var(--sidebarDark);\n\t--background-accent: #4f545c;\n\t--background-floating: #18191c;\n\t--background-mobile-primary: #36393f;\n\t--background-mobile-secondary: #2f3136;\n\t--background-modifier-hover: rgba(255,255,255,0.16);\n\t--background-modifier-active: rgba(255,255,255,0.24);\n\t--background-modifier-selected: rgba(255,255,255,0.32);\n\t--background-modifier-accent: hsla(0,0%,100%,0.06);\n\t--background-mentioned: rgba(250,166,26,0.05);\n\t--background-mentioned-hover: rgba(250,166,26,0.08);\n\t--background-message-hover: rgba(4,4,5,0.07);\n\t--background-help-warning: rgba(250,166,26,0.1);\n\t--background-help-info: rgba(0,176,244,0.1);\n\t--scrollbar-thin-thumb: rgba(255,255,255,0.3);\n\t--scrollbar-thin-track: transparent;\n\t--scrollbar-auto-thumb: #202225;\n\t--scrollbar-auto-track: #2e3338;\n\t--scrollbar-auto-scrollbar-color-thumb: #202225;\n\t--scrollbar-auto-scrollbar-color-track: #2f3136;\n\t--elevation-stroke: 0 0 0 1px rgba(4,4,5,0.15);\n\t--elevation-low: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);\n\t--elevation-medium: 0 4px 4px rgba(0,0,0,0.16);\n\t--elevation-high: 0 8px 16px rgba(0,0,0,0.24);\n\t--logo-primary: #fff;\n\t--focus-primary: #00b0f4;\n\t--guild-header-text-shadow: 0 1px 1px rgba(0,0,0,0.4);\n\t--channeltextarea-background: #40444b;\n\t--activity-card-background: #202225;\n\t--textbox-markdown-syntax: #8e9297;\n\t--deprecated-card-bg: rgba(32,34,37,0.6);\n\t--deprecated-card-editable-bg: rgba(32,34,37,0.3);\n\t--deprecated-store-bg: #36393f;\n\t--deprecated-quickswitcher-input-background: #72767d;\n\t--deprecated-quickswitcher-input-placeholder: hsla(0,0%,100%,0.3);\n\t--deprecated-text-input-bg: rgba(0,0,0,0.1);\n\t--deprecated-text-input-border: rgba(0,0,0,0.3);\n\t--deprecated-text-input-border-hover: #040405;\n\t--deprecated-text-input-border-disabled: #202225;\n\t--deprecated-text-input-prefix: #dcddde;\n}\n\n/* Make emoji selection brighter */\n.contents-18-Yxp {\n\tfilter: brightness(119%) !important;\n}\n\n/* fuck you discord nitro menu button*/\n.item-PXvHYJ {\n\tcolor: var(--interactive-active) !important;\n}\n.side-8zPYf6 .themed-OHr7kt.selected-3s45Ha.item-PXvHYJ, .topPill-30KHOu .themed-OHr7kt.selected-3s45Ha.item-PXvHYJ {\n\tbackground-color: var(--background-modifier-selected);\n}\n\n/* why doesnt the background of the friends list have ANY bg rule*/\n.peopleColumn-29fq28 {\n\tbackground-color: var(--background-primary);\n}\n.theme-dark .foreground-26ym5y {\n\tfill: #fff;\n}\n.circleIconButton-jET_ig {\n\tcursor: pointer;\n\tcolor: #fff;\n}\n.circleIconButton-jET_ig.selected-ugP_am {\n\tcolor: #fff;\n\tbackground-color: var(--background-primary);\n}\n"));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.remove();case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default