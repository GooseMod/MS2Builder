parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,e,t,o,r,a,s){try{var i=n[a](s),d=i.value}catch(p){return void t(p)}i.done?e(d):Promise.resolve(d).then(o,r)}function e(e){return function(){var t=this,o=arguments;return new Promise(function(r,a){var s=e.apply(t,o);function i(e){n(s,r,a,i,d,"next",e)}function d(e){n(s,r,a,i,d,"throw",e)}i(void 0)})}}var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode(':root {\n    --background-message-hover: transparent;\n}\n.messageContent-2qWWxC:not(.repliedTextContent-1R3vnK), .embedFull-2tM8--, .wrapper-35wsBm,\n.message-2qnXI6 .imageWrapper-2p5ogY,\n.repliedMessage-VokQwo {\n    background-color: var(--background-secondary);\n    font-weight: 500;\n    margin-left: 0 !important;\n    margin-top: 4px !important;\n    padding-left: 0 !important;\n    padding: 8px 12px !important;\n    border-radius: 16px;\n    border-top-left-radius: 0 !important;\n    width: max-content;\n    max-width: 80%;\n    box-shadow: var(--elevation-low);\n    overflow: visible !important;\n    box-sizing: border-box;\n}\n.message-2qnXI6 .imageWrapper-2p5ogY {\n    padding: 0 !important;\n    max-width: 100% !important;\n    overflow: hidden !important;\n}\n.message-2qnXI6:hover .messageContent-2qWWxC, .message-2qnXI6:hover .embedFull-2tM8--, .message-2qnXI6:hover .wrapper-35wsBm,\n.message-2qnXI6:hover .imageWrapper-2p5ogY {\n    box-shadow: var(--elevation-medium) !important;\n}\n.systemMessage-1I9LCe .messageContent-2qWWxC {\n    border-top-left-radius: 16px !important;\n}\n.blockquoteContainer-U5TVEi blockquote {\n    box-sizing: content-box !important;\n}\n.message-2qnXI6 .wrapper-35wsBm { /* Invited to Server box */\n    padding: 14px 12px !important;\n    width: 432px !important;\n    background-color: var(--background-secondary);\n}\n.theme-dark .messageContent-2qWWxC:not(.repliedTextContent-1R3vnK), .theme-dark .embedFull-2tM8-- {\n    background-color: var(--background-secondary);\n    font-weight: 400;\n}\n\n.message-2qnXI6 {\n    background: none !important;\n}\n.message-2qnXI6::before {\n    content: unset !important;\n}\n.message-2qnXI6.selected-2P5D_Z .messageContent-2qWWxC:not(.repliedTextContent-1R3vnK),\n.message-2qnXI6.selected-2P5D_Z .embedFull-2tM8-- {\n    background-color: var(--background-tertiary) !important;\n}\n.message-2qnXI6.mentioned-xhSam7 .messageContent-2qWWxC:not(.repliedTextContent-1R3vnK) {\n    background-color: var(--background-mentioned) !important;\n    border-left: 2px solid #faa61a;\n}\n[data-author-id="248990650429734912"] .username-1A8OIy::before {\n    content: "Cute " /*  i  g  n  o  r  e  :)  */\n}\n\n.theme-dark .message-2qnXI6.selected-2P5D_Z .messageContent-2qWWxC:not(.repliedTextContent-1R3vnK),\n.theme-dark .message-2qnXI6.selected-2P5D_Z .embedFull-2tM8-- {\n    background-color: var(--background-secondary-alt) !important;\n}\n.embedFull-2tM8-- {\n    max-width: 520px;\n    width: auto !important;\n}\n.embedFull-2tM8-- .grid-1nZz7S {\n    padding: 0 4px;\n    padding-bottom: 8px;\n}\n.messageContent-2qWWxC:not(.repliedTextContent-1R3vnK) pre {\n    max-width: 100%;\n}\n.messageContent-2qWWxC:not(.repliedTextContent-1R3vnK) pre code {\n    background-color: var(--background-tertiary);\n    border-radius: 0;\n    border-radius: 16px;\n    border-top-left-radius: 0 !important;\n}\n\n/* Replies */\n.repliedMessage-VokQwo {\n    border-bottom-left-radius: 0 !important;\n    margin-bottom: -4px !important;\n    background-color: var(--background-secondary-alt);\n}\n.repliedMessage-VokQwo::before {\n    content: unset !important;\n}\n.repliedMessage-VokQwo ~ .contents-2mQqc9 > .messageContent-2qWWxC:first-of-type {\n    border-top-right-radius: 0;\n}\n.repliedMessage-VokQwo, .repliedMessage-VokQwo ~ .contents-2mQqc9 > .messageContent-2qWWxC:first-of-type {\n    width: 60% !important;\n    width: clamp(500px, 100%, 600px) !important;\n}\n/* Cover reply border radius */\n.repliedMessage-VokQwo ~ .contents-2mQqc9 > .messageContent-2qWWxC:first-of-type::before {\n    content: "";\n    position: absolute;\n    bottom: 100%;\n    right: 0;\n    width: 16px;\n    height: 16px;\n    background-color: var(--background-secondary-alt);\n    border-top-left-radius: 100%;\n}\n/* .message-2qnXI6, .message-2DieIs { */\n.cozy-3raOZG.wrapper-2a6GCs {\n    display: flex;\n    flex-direction: column;\n}\n.contents-2mQqc9 {\n    display: contents;\n}\n.contents-2mQqc9 .header-23xsNx {\n    order: -1;\n}\n.contents-2mQqc9 > span {\n    order: -1;\n}  \n'));case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.remove();case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default