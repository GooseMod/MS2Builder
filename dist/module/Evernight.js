parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,r,o,e,a,t,c){try{var d=n[t](c),i=d.value}catch(l){return void o(l)}d.done?r(i):Promise.resolve(i).then(e,a)}function r(r){return function(){var o=this,e=arguments;return new Promise(function(a,t){var c=r.apply(o,e);function d(r){n(c,a,t,d,i,"next",r)}function i(r){n(c,a,t,d,i,"throw",r)}d(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={goosemodHandlers:{onImport:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('.theme-dark,\n:root {\n    --background-primary: #0D1314 !important;\n    --background-secondary: #111617 !important;\n    --background-tertiary: #1a1f20 !important;\n    --background-text-area: #1e2729 !important;\n    --scrollbar-auto-track: transparent;\n    --scroller: #181f20;\n    --scrollbar-auto-thumb: #27343659;\n    --border-text-area: #3a4346;\n}\n.theme-dark .scrollableContainer-2NUZem {\n    overflow-x: hidden;\n    overflow-y: scroll;\n    background-color: var(--background-text-area);\n    max-height: 50vh;\n    border-radius: 2px;\n    border-left: solid 2px var(--border-text-area);\n    border-right: solid 2px var(--border-text-area);\n    scrollbar-width: none;\n    transition: all 0.2s;\n}\n.topSectionNormal-2-vo2m .tabBarContainer-1s1u-z{\n    background-color: #151c1f;\n}\n.side-8zPYf6 .themed-OHr7kt.item-PXvHYJ:hover:not(.disabled-1Hwwfb), .topPill-30KHOu .themed-OHr7kt.item-PXvHYJ:hover:not(.disabled-1Hwwfb)\n{\n    border-radius: 2px;\n}\n.selected-3s45Ha.item-PXvHYJ, .selected-3s45Ha.item-PXvHYJ:hover{\n    border-radius: 2px;\n}\n.headerSpotify-zpWxgT{\n    background-color: #111617 !important;\n}\n.title-eS5yk3, .subtext-3CDbHg{\n    display: none;\n}\n.styleFixed-sX-yHV {\n    width: 220px;\n    left: -7px;\n}\n.numberBadge-2s8kKX{\n    background-color: #1b9ad4 !important;\n    filter: drop-shadow(0 0 3px #063b53) drop-shadow(0 0 5px #063b53);\n}\n\n.scroller-RmtA4e{\n    border-radius: 5px;\n    background-color: #1a1f20;\n    margin: 9px;\n}\n/*.thin-1ybCId, .thin-1ybCId.fade-2kXiP2:hover, .thin-1ybCId.scrolling-1Cdwk- {\n    scrollbar-color: #fff !important;\n}*/\n.colorDefault-2K3EoJ.focused-3afm-j{\n    box-shadow: inset 2px 0 0 #70a0aa !important;\n    border-radius: 0px;\n}\n.markup-2BOw-j blockquote, .markup-2BOw-j pre {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    max-width: 100%;\n}\n.theme-dark .mentioned-xhSam7 .mention.interactive:hover, .theme-light .mentioned-xhSam7 .mention.interactive:hover{\n    color: #1ea1dd;\n}\n.winButton-iRh8-Z{\n    transition: all 0.2s;\n    width: 44px !important;\n    height: 25px !important;\n}\n.winButtonMinMax-PBQ2gm:hover{\n    background-color: rgba(214, 214, 214, 0.212);\n}\n.clickable-25tGDB .header-2V-4Sw{\n    background-color: #1a1f20;\n    border-radius: 5px;\n    margin: 9px;\n}\n.clickable-25tGDB .header-2V-4Sw:hover{\n    background-color: #283031;\n}\n.theme-dark .scrollableContainer-2NUZem:focus-within {\n    border-left: solid 2px #43caff;\n    border-right: solid 2px #43caff;\n}\n\n.theme-dark .message-2qnXI6.selected-2P5D_Z .buttons-cl5qTG, .mouse-mode .message-2qnXI6:hover .buttons-cl5qTG {\n    opacity: 2;\n    pointer-events: auto;\n    \n}\n.colorDefault-2K3EoJ:active:not(.hideInteraction-1iHO1O){\n    background-color: var(--background-primary);\n    box-shadow: inset 2px 0 0 #70a0aa !important;\n    border-radius: 0px;\n}\n.button-1ZiXG9{\n    background-color: #1a1f20;\n}\n.button-1ZiXG9:hover{\n    background-color: #212829;\n}\n.panels-j1Uci_{\n    background-color: transparent;\n}\n.theme-dark .container-3baos1, .container-3baos1 .avatar-SmRMf2 {\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    border-radius: 5px;\n    background-color: #1a1f20;\n    margin: 9px;\n}\n.theme-dark .selected-aXhQR6 .layout-2DM8Md {\n    background-color: #272e30;\n    border-radius: 4px;\n}\n.theme-dark .clickable-1JJAn8:hover .layout-2DM8Md {\n    background-color: #272e30;\n    cursor: pointer;\n    border-radius: 4px;\n}\n.root-217Brm{\n    background-color: #161a1b !important;\n}\n.button-14-BFJ{\n    width: 36px;\n}\n.styleFixed-sX-yHV {\n    width: 220px;\n    left: -1px;\n}\n.theme-dark .searchBar-3dMhjb {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    height: 24px;\n    width: 144px;\n    border-radius: 2px;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    cursor: text;\n    overflow: hidden;\n    padding: 0 2px;\n    color: var(--text-normal);\n    background-color: #192022;\n    transition: all 0.1s cubic-bezier(0.175, 0.885, 0.30, 1.275);\n}\n.theme-dark .searchBar-3dMhjb:hover{\n    background-color: var(--background-text-area);\n}\n.theme-dark .focused-31_ccS .searchBar-3dMhjb, .open-6_Y_aH .searchBar-3dMhjb{\n    width: 240px;\n    background-color: var(--background-text-area);\n}\n\n.theme-dark .item-2hkk8m {\n    position: absolute;\n    display: block;\n    width: 8px;\n    border-radius: 6px 4px 4px 6px;\n    margin-left: -4px;\n    background-color: var(--header-primary);\n}\n.menu-3sdvDG {\n    background-color: var(--scroller);\n    left: -7px !important;\n    border-radius: 4px;\n}\n.unreadTop-3rAB3r .unreadBar-3t3sYc:before{\n color: #1b9ad4;\n}\n.message-2qnXI6.selected-2P5D_Z, .mouse-mode.full-motion .message-2qnXI6:hover{\n    background-color: rgba(0, 0, 0, 0.168);\n}\n.theme-dark .spoilerText-3p6IlD.hidden-HHr2R9 {\n    background-color: #33454d !important;\n    transition: all 0.2s;\n}\n.theme-dark .spoilerText-3p6IlD.hidden-HHr2R9:hover {\n    background-color: #455c66 !important;\n}\n.theme-dark .theme-dark .uploadModal-2ifh8j {\n    background-color: var(--uploadModal);\n    -webkit-box-shadow: 0 0 0 1px rgba(32,34,37,.6), 0 2px 10px 0 rgba(0,0,0,.2);\n    box-shadow: 0 0 0 1px rgba(32,34,37,.6), 0 2px 10px 0 rgba(0,0,0,.2);\n}\n.theme-dark .footer-3mqk7D {\n    background-color: var(--footer);\n    -webkit-box-shadow: inset 0 1px 0 rgba(47,49,54,.6);\n    box-shadow: inset 0 1px 0 rgba(47,49,54,.6);\n}\n.theme-dark .selected-1Tbx07 {\n    background-color: var(--background-text-area);\n}\n.theme-dark .autocompleteInner-zh20B_ {\n    padding-bottom: 8px;\n    background-color: var(--background-primary);\n}\n.theme-dark .selected-1Tbx07:hover{\n    background-color: var(--background-text-area);\n}\n.theme-dark .selected-1Tbx07:active{\n    background-color: #4b6064;\n}\n.theme-dark .expandedFolderBackground-1cujaW {\n    position: absolute;\n    top: 0;\n    left: 12px;\n    bottom: 8px;\n    width: 48px;\n    border-radius: 24px;\n    -webkit-transition: background-color .15s ease-out;\n    transition: background-color .15s ease-out;\n    background-color: #30373a;\n}\n.theme-dark .closedFolderIconWrapper-2sTcE6:hover{\n    background-color: #19202241;\n}\n.theme-dark .peopleList-3c4jOR {\n    padding-bottom: 8px;\n    background-color: var(--background-primary);\n}\n.theme-dark .actionButton-uPB8Fs{\n    transition: all 0.2s;\n    background-color: var(--background-text-area);\n}\n.theme-dark .actionButton-uPB8Fs:hover{\n    background-color: #20434b;\n}\n.theme-dark .feature-2w65J5 {\n    background-color: var(--background-tertiary);\n}\n\n.theme-dark .closeButton-1tv5uR {\n    border: 1px solid #72767d69;\n    transition: all 0.2s;\n    border-radius: 2px;\n}\n.theme-dark .closeButton-1tv5uR:hover {\n    background-color: #2b3f4296;\n}\n.theme-dark .closeButton-1tv5uR:active {\n    background-color: #43646996;\n}\n.theme-dark .childWrapper-anI2G9 {\n    -webkit-transition: background-color .15s ease-out,color .15s ease-out;\n    transition: background-color .15s ease-out,color .15s ease-out;\n    background-color: var(--border-text-area);\n    color: var(--text-normal);\n}\n.theme-dark .embedSuppressButton-1FonMn {\n    opacity: 0;\n    position: absolute;\n    top: -2px;\n    right: -20px;\n    cursor: pointer;\n    padding: 2px;\n    color: var(--interactive-normal);\n}\n.theme-dark .embedSuppressButton-1FonMn:hover{\n    color: red;\n}\n.theme-dark .searchBar-6Kv8R2 .searchBarComponent-32dTOx {\n    width: 100%;\n    height: 28px;\n    overflow: hidden;\n    border-radius: 4px;\n    background-color: var(--background-text-area);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    color: var(--text-muted);\n    text-align: left;\n    text-overflow: ellipsis;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 24px;\n    transition: all 0.2s;\n    white-space: nowrap;\n}\n.theme-dark .searchBar-6Kv8R2 .searchBarComponent-32dTOx:hover{\n    background-color: #2929295e;\n}\n\n.theme-dark .input-2VB9rf {\n    background: transparent;\n    background-color: #2929295e;\n    color: var(--text-normal);\n}\n.scroller-zPkAnE{\n    background: transparent;\n}\n.backdrop-1wrmKB{\n    opacity: .8 !important;\n}\n.theme-dark .quickswitcher-3JagVE {\n    opacity: 0.9;\n    backdrop-filter: blur(12px);\n    display: flex;\n    background-color: var(--background-secondary);\n    background: transparent;\n    color: var(--text-normal);\n}\n.cardContent-qqqwo8{\n    color: #3a4346;\n}\n.theme-dark .expandedFolderIconWrapper-Huv7rA {\n    width: 48px;\n    height: 48px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    background-color: #30373a;\n}\n.theme-dark .expandedFolderIconWrapper-Huv7rA:hover{\n    background-color: #4b565a;\n}\n.modalHeader-19eoYJ{\n    background-color: #161b1b !important;\n}\n.theme-dark .closeIcon-rycxaQ:hover {\n    color: red;\n}\n.theme-dark .body-3iLsc4, .theme-dark .footer-1fjuF6{\n    background-color: #111617;\n}\n.radioIconForeground-XwlXQN{\n    color: #3d98aa !important;\n}\n.theme-dark .headerTop-3C2Zn0 {\n    background-color: #111617;\n}\n.activity-11LB_k{\n    background-color: rgb(19, 26, 29);\n}\n\n.activity-1ythUs{\n    background-color: #151c1f;\n}\n.header-QKLPzZ{\n    background-color: #111617;\n}\n.tabBarContainer-1s1u-z{\n    background-color: #151c1f;\n    border-top: 0px;\n}\n.cozyMessage-3V1Y8y .contents-2mQqc9 > .markup-2BOw-j:not(:empty) {\n    background-color: #151c1f;\n    display: inline-block;\n    max-width: 650px;\n    margin: 0;\n    padding: 5px 10px;\n    border-radius: 15px;\n    position: relative;\n    overflow: visible;\n    border-top-left-radius: 2px;\n}\n.theme-dark .notDetected-33MY4s, .theme-light .notDetected-33MY4s{\n    background-color: var(--background-tertiary);\n}\nsvg.slider-TkfMQL svg {\n    display: none;\n}\n.container-3auIfb:not([style*="125"]) {\n    background-color: #69b8da !important;\n}\n.attachWrapper-2TRKBi{\n    order:1;\n    margin-left:13px;\n}\n.attachButton-2WznTc {\n    padding-right:5px\n}\n.uploadModal-2ifh8j{\n    border-radius: 3px !important;\n}\n.barFill-23-gu-{\n    background-color: #69b8da !important;\n}\n.lookOutlined-3sRXeN.colorWhite-rEQuAQ {\n    color: #fff;\n    border-color: #28363b;\n    background-color: #28363b3a;\n}\n.lookOutlined-3sRXeN.colorWhite-rEQuAQ:hover {\n    color: rgb(219, 219, 219);\n    border-color: #384c53;\n    background-color: #384c53;\n}\n.lookOutlined-3sRXeN.colorWhite-rEQuAQ:active {\n    color: rgb(241, 241, 241);\n    border-color: #54737e;\n    background-color: #54737e;\n}\n.textarea-2r0oV8:hover{\n    background-color: var(--The-272727);\n}\n.textarea-2r0oV8:focus{\n    background-color: var(--text-area-focus);\n}\n.profileBadgeStaff-3BXdTO {\n    background: url(/assets/4358ad1fb423b346324516453750f569.svg);\n  }\n  .profileBadgePartner-j6Lwhr {\n    background: url(/assets/6203964d9d25c394a573fd4f6be36d97.svg);\n  }\n  .profileBadgeHypesquad-12E2P6 {\n    background: url(/assets/6203964d9d25c394a573fd4f6be36d97.svg);\n  }\n  .profileBadgeHypeSquadOnlineHouse1-3rBtjf {\n    background: url(/assets/64ae1208b6aefc0a0c3681e6be36f0ff.svg);\n  }\n  .profileBadgeHypeSquadOnlineHouse2-2oU04B {\n    background: url(/assets/48cf0556d93901c8cb16317be2436523.svg);\n  }\n  .profileBadgeHypeSquadOnlineHouse3-1DoJkv {\n    background: url(/assets/9fdc63ef8a3cc1617c7586286c34e4f1.svg);\n  }\n  .profileBadgeHypeSquadOnlineHouse1Winner-3wCl80 {\n    background: url(/assets/26a2dc8c9d70955a988cb377eec84c22.svg);\n  }\n  .profileBadgeHypeSquadOnlineHouse2Winner-AS5bXe {\n    background: url(/assets/88d4f11bee9ea34fee59973b33353da0.svg);\n  }\n  .profileBadgeHypeSquadOnlineHouse3Winner-2CwwQi {\n    background: url(/assets/3245b2cd85b787b195ea8f6e10ef5790.svg);\n  }\n  .profileBadgeVerifiedDeveloper-195KfD {\n    background: url(/assets/45cd06af582dcd3c6b79370b4e3630de.svg);\n  }\n  .profileBadgeEarlySupporter-2ng_jL {\n    background: url(/assets/23e59d799436a73c024819f84ea0b627.svg);\n  }\n  .profileBadgePremium-1KDZYC {\n    background: url(/assets/386884eecd36164487505ddfbac35a9d.svg);\n  }\n  .profileBadgeBugHunterLevel1-dbEzVz {\n    background: url(/assets/f61b8981e92feead854f52e5a1ba14f0.svg);\n  }\n  .profileBadgeBugHunterLevel2-3TUciC {\n    background: url(/assets/9286332d6e947c91fa91569efce431b0.svg);\n  }\n  .profileGuildSubscriberlvl1-3oI9tx {\n    background: url(/assets/fbb6f1e160280f0e9aeb5d7c452eefe1.svg);\n  }\n  .profileGuildSubscriberlvl2-r6nJHT {\n    background: url(/assets/b4b741bef6c3de9b29e2e0653e294620.svg);\n  }\n  .profileGuildSubscriberlvl3-38s3Dj {\n    background: url(/assets/93f5a393e22796a850931483166d7cb9.svg);\n  }\n  .profileGuildSubscriberlvl4-2NXrsI {\n    background: url(/assets/4c380650960c2b1e1584115d5e9ad63b.svg);\n  }\n  .profileGuildSubscriberlvl5-3XIa2K {\n    background: url(/assets/438dd7ecbffcf21b6cbf2773ade51a04.svg);\n  }\n  .profileGuildSubscriberlvl6-3e3sxW {\n    background: url(/assets/7a5f78de816fcecbbd1d5d6e635cc7dd.svg);\n  }\n  .profileGuildSubscriberlvl7-1dVhQT {\n    background: url(/assets/5a24b20b84fb3eafc138916729386e76.svg);\n  }\n  .profileGuildSubscriberlvl8-1kXdFr {\n    background: url(/assets/f31d590e1f3629cd0b614330f4a8ee2a.svg);\n  }\n  .profileGuildSubscriberlvl9-1d6zav {\n    background: url(/assets/9ba64f1fa91ccde0eba506c1c33f3d1a.svg);\n  }\n  .profileBadge-2niAfJ {\n      background-repeat: no-repeat !important;\n      background-size: contain !important;\n      background-position: 50% !important;\n  }\n.withFrame-haYltI {\n    height: 21px;\n    margin-top: 4px;\n}\n.modalContent-1T1Tix{\n    background-color: var(--background-primary);\n}\n.theme-dark .footer-2gL1pp{\n    background-color: var(--background-text-area);\n}\n.lookFilled-1Gx00P.colorBrand-3pXr91 {\n    color: #fff;\n    background-color: rgba(28, 207, 28, 0.253);\n    border: 1px solid rgba(28, 207, 28, 0.452);\n}\n.lookFilled-1Gx00P.colorBrand-3pXr91:hover {\n    color: #fff;\n    background-color: rgb(17, 117, 17);\n}\n.lookFilled-1Gx00P.colorBrand-3pXr91:active {\n    color: #fff;\n    background-color: rgb(28, 207, 28);\n}\n.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6 {\n    color: #f6f6f7;\n    background-color: rgba(238, 54, 54, 0.459);\n    border: 1px solid rgb(255, 58, 58);\n}\n.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6:hover {\n    color: #f6f6f7;\n    background-color: rgba(238, 54, 54, 0.74);\n    border: 1px solid rgb(255, 58, 58);\n}\n.theme-dark .lookFilled-1Gx00P.colorPrimary-3b3xI6:active {\n    color: #f6f6f7;\n    background-color: rgb(238, 54, 54);\n}\n.theme-dark .header-2-Imhb .tabBar-1kuXvJ .tab-ck0077.active-1MbGPa{\n    background-color: #243035;\n}\n.actionIcon-PgcMM2 {\n    color: var(--interactive-normal);\n    transition: all 0.1s;\n}\n\n.actionIcon-PgcMM2:active{\n    color: rgb(69, 108, 235);\n}\n.scroller-2hZ97C{\n    background-color: var(--background-secondary);\n}\n.theme-dark .separator-2-RRj_{\n    background-color: var(--background-text-area);\n}\n.lookOutlined-3sRXeN.colorGreen-29iAKY {\n    color: #fff;\n    border-color: rgb(15, 85, 15);\n    background-color: rgb(15, 85, 15);\n    transition: all 0.1s;\n}\n.connectedAccountOpenIcon-2cNbq5{\n    color: #fff;\n}\n.lookFilled-1Gx00P.colorGreen-29iAKY {\n    color: #fff;\n    border-color: #43646b;\n    background-color: #43646b;\n}\n.lookFilled-1Gx00P.colorGreen-29iAKY:hover {\n    color: #fff;\n    border-color: #4ea7bb;\n    background-color: #72a8b4;\n}\n.lookFilled-1Gx00P.colorGreen-29iAKY:active {\n    color: #fff;\n    border-color: #20434b;\n    background-color: #344c52;\n}\n.close-hZ94c6 {\n    height: 26px;\n    padding: 4px;\n    opacity: .5;\n    cursor: pointer;\n    border-radius: 3px;\n    color: var(--interactive-normal);\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box;\n}\n.close-hZ94c6:hover{\n    color: rgb(248, 54, 54);\n}\n.settingsContent-3Pxg5D{\n    background-color: var(--background-primary);\n}\n.header-1TKi98{\n    background-color: var(--background-text-area);\n}\n.content-1LAB8Z{\n    background-color: var(--background-primary);\n}\n.perksModalContentWrapper-2HU6uL{\n    background-color: var(--background-text-area);\n}\n.theme-dark .perksModal-fSYqOq {\n    background-image: url(/assets/c486dc6….svg);\n    background-color: var(--background-text-area);\n}\n.theme-dark .perk-2WeBWW{\n    background-color: var(--background-tertiary);\n    transition: cubic-bezier(0.19, 1, 0.22, 1) 0.2s;\n}\n.theme-dark .perk-2WeBWW:hover{\n    background-color: var(--background-secondary);\n    transform: scale(1.1);\n}\n.theme-dark .perk-2WeBWW:active{\n    background-color: var(--perk-active);\n    transform: scale(1);\n}\n.lookFilled-1Gx00P.colorBrand-3pXr91:disabled{\n    background-color: var(--lookFilled-disabled);\n}\n.theme-dark .errorState-KkUH_2{\n    background-color: var(--background-primary);\n}\n.noResults-ZTbl5V, .scroller-hUf6zQ{\n    background-color: var(--background-secondary);\n}\n.footer-1eyGBa{\n    background-color: var(--background-text-area);\n}\n.container-1giJp5{\n    background-color: #141a1b;\n}\n.quickSelectPopoutOption-opKBx9{\n    background-color: var(--background-text-area);\n}\n.root-217Brm{\n    background-color: var(--background-secondary);\n}\n.colorable-1bkp8v.red-33-Lnk.active-1QRrIS, .colorable-1bkp8v.red-33-Lnk:hover{\n    background: rgb(158, 28, 28);\n}\n.lookFilled-1Gx00P.colorRed-1TFJan{\n    background: rgba(158, 28, 28, 0.452);\n    border: rgba(206, 37, 37, 0.952) 1px solid;\n}\n.lookFilled-1Gx00P.colorRed-1TFJan:hover{\n    background: rgba(158, 28, 28, 0.89);\n    border: rgba(206, 37, 37, 0.952) 1px solid;\n}\n.lookFilled-1Gx00P.colorRed-1TFJan:active{\n    background: rgb(212, 39, 39);\n    border: rgb(206, 37, 37) 1px solid;\n}\n.unread-2lAfLh {\n    position: absolute;\n    height: 31px;\n    width: 232px;\n    border-radius: 0px;\n    top: 14%;\n    left: 0px;\n    margin-top: -4px;\n    background-color: #25303365;\n    border-left: 2px #485d61 solid;\n}\n\n.modeUnread-1qO3K1 .name-23GUGE{\n    color: #8ba0a7;\n}\n.modeConnected-3IsKId:hover .name-23GUGE, .modeConnected-3IsKId:hover .name-23GUGE, .modeSelected-346R90:hover .name-23GUGE, .modeSelected-346R90:hover .name-23GUGE, .modeUnread-1qO3K1:hover .name-23GUGE, .modeUnread-1qO3K1:hover .name-23GUGE, .notInteractive-1X92pj.modeConnected-3IsKId:hover .name-23GUGE, .notInteractive-1X92pj.modeSelected-346R90:hover .name-23GUGE{\n    color: #c1cefd;\n}\n.modeSelected-346R90 .name-23GUGE{\n    color: #fff;\n}\n.unreadMentionsBar-1Bu1dC{\n    background-color: #1b9ad4 !important;\n}\n.unreadMentionsBar-1Bu1dC:active{\n    background-color: #146991 !important;\n}\n.resultsGroup-r_nuzN{\n    background-color: var(--background-text-area);\n}\n.theme-dark .option-96V44q:after {\n    background: var(--background-text-area);\n}\n.emojiSection-3Fb9ix{\n    background: var(--background-secondary);\n}\n.wrapper-3WhCwL{\n    color: #76b7c4;\n    background-color: #3266705e;\n}\n.wrapper-3WhCwL:hover{\n    color: #fff;\n    background-color: #397683;\n}\n.guildSection-1EoFKd{\n    background: var(--background-secondary);\n}\n.circleIconButton-1QV--U{\n    color: rgb(148, 148, 148);\n    background: var(--background-secondary);\n}\n.circleIconButton-1QV--U.selected-1JjBPm {\n    color: #fff;\n    background-color: var(--border-text-area);\n}\n.circleIconButton-1QV--U:active{\n    background-color: var(--background-text-area);\n}\n.scroller-1d5FgU{\n    background-color: #161b1b;\n}\n.sourceScroller-Pk7YAM, .theme-dark .container-OI6I9q, .theme-dark .root-1gCeng, .root-2VTZPJ, .css-3vaxre-menu, .theme-dark .container-2x5lvQ section, .theme-dark .container-2x5lvQ .header-2C89wJ{\n    background-color: #161b1b !important;\n}\n.notice-2X5hT5{\n    background-color: #161b1b !important;\n}\n.search-1iTphC .searchBox-2_mAlO{\n    background-color: var(--background-text-area);\n}\n.theme-dark .card-3DjzTQ, .theme-dark .iconMask-3b8GzQ{\n    background-color: var(--background-secondary);\n}\n.content-1LAB8Z{\n    background-color: var(--background-text-area);\n}\n.footerTitle-2CYZch{\n    color: #fff;\n}\n.container-UC8Ug1:hover{\n    background-color: #384b53;\n}\n.container-UC8Ug1{\n    background-color: #243035;\n}\n.text-1FOLJS{\n    color: #fff;\n}\n.container-UC8Ug1:active{\n    background-color: #2e3d44;\n}\n.title-3w8xhj{\n    color: #fff;\n}\n.subtitle-Nw1LLR{\n    color: #fff;\n}\n.templatesList-2E6rTe{\n    margin-top: -1px;\n}\n.content-1LAB8Z{\n    border-radius: 0;\n}\n.lookFilled-1Gx00P.colorGrey-2DXtkV{\n    color: #fff;\n    background-color: var(--The-59);\n}\n.lookFilled-1Gx00P.colorGrey-2DXtkV:hover{\n    background-color: var(--The-83);\n}\n.lookFilled-1Gx00P.colorGrey-2DXtkV:active{\n    background-color: rgb(15, 85, 15);\n}\n.optionsList-3UMAjx {\n    margin-top: 0px;\n    padding: 0 16px 8px;\n}\n.circleButton-3RB01i+.circleButton-3RB01i{\n    background-color: #232f31 !important;\n}\n.circleButton-3RB01i+.circleButton-3RB01i:hover{\n    background-color: #41686e !important;\n}\n.title-LqAd9K, .subtitle-1Q3BuX, .skip-2o6MGG, .subtitle-1KdHaN, .title-Z_XiOC{\n    color: #fff;\n}\n.backButton-iA7KIs{\n    color: #fff;\n}\n.inputDefault-_djjkz{\n    color: #fff;\n}\n.createGuild-23lWNm{\n    margin: 0px 0 !important;\n}\n.footer-2gL1pp {\n    border-radius: 0 0 0px 0px;\n    background-color: #161b1b !important;\n}\n.videoGrid-1khsrF{\n    background-color: var(--background-secondary);\n}\n.sourceThumbnail-27dolk.selected-1nOkyc{\n    box-shadow: inset 0 0 0 2px #5a9797 !important;\n}\n.tile-2w4k5N:hover .sourceThumbnail-27dolk{\n    box-shadow: inset 0 0 0 2px #5a9797 !important;\n}\n.selectorButtonSelected-t5V9On, .selectorButton-EEUWed:not(.selectorButtonPremiumRequired-mKMbIu):hover{\n    background-color: #5a9797 !important;\n}\n.colorDefault-2K3EoJ.focused-3afm-j {\n    background-color: var(--background-primary);\n    color: #fff;\n}\n.colorDefault-2K3EoJ.focused-3afm-j:active {\n    background-color: var(--background-text-area);\n    color: #fff;\n}\n.colorDefault-2K3EoJ.focused-3afm-j:focus {\n    background-color: var(--background-text-area);\n    color: #fff;\n}\n.powercord-toast .header{\n    background-color: var(--background-primary) !important;\n}\n.powercord-toast .contents{\n    background-color: var(--background-primary) !important;\n    border-radius: 0% !important;\n}\n.powercord-toast .buttons{\n    background-color: var(--background-primary);\n}\n.powercord-toast .contents .inner{\n    background-color: var(--background-tertiary) !important;\n}\n.powercord-toast .buttons button[class*=lookGhost-]{\n    background-color: var(--background-text-area);\n    color: #fff;\n}\n.powercord-toast .buttons button[class*=lookGhost-]:active{\n    background-color: #7289DA;\n}\n.lookOutlined-3sRXeN.colorGreen-29iAKY:hover{\n    background-color: rgba(28, 207, 28, 0.103);\n    border-color: rgb(20, 148, 20);\n}\n.lookOutlined-3sRXeN.colorGreen-29iAKY:active{\n    background-color: rgb(28, 207, 28);\n    border-color: rgb(20, 148, 20);\n}\n.powercord-toast .header .dismiss{\n    transition: 0s !important;\n}\n.powercord-toast .header .dismiss:hover{\n    color: rgb(238, 54, 54);\n}\n.topSectionPlaying-1J5E4n{\n    background: var(--The-181818);\n}\n.theme-dark .option-96V44q.selected-rZcOL-{\n    background-color: var(--background-primary);\n}\n.theme-dark .option-96V44q.selected-rZcOL-:after{\n    background: var(--background-primary);\n}\n.clear-1pMieT.iconLayout-1WxHy4:hover .icon-3cZ1F_:hover{\n    color: rgb(238, 54, 54);\n}\n.headerPlaying-j0WQBV{\n    background: var(--The-181818);\n}\n.uploadModal-2ifh8j .inner-3nWsbo{\n    background-color: var(--background-primary);\n}\n.theme-dark .uploadModal-2ifh8j{\n    background-color: var(--background-primary);\n}\n.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9, .wrapper-1BJsBx:hover .childWrapper-anI2G9{\n    background-color: var(--border-text-area);\n}\n\n.inspector-3LQtX9{\n    background-color: var(--background-secondary) !important;\n}\n.barButtonBase-2uLO1z{\n    background-color: var(--background-secondary);\n}\n.jumpToPresentBar-G1R9s6{\n    background-color: var(--background-secondary);\n}\n.botTagInvert-18-95s, .rem-2m9HGf.botTag-2WPJ74{\n    color: #fff;\n    background: #33454d;\n}\n.topSectionSpotify-1lI0-P {\n    background: #111617 !important;\n}\n.members-1998pB, .members-1998pB>div {\n    background-color: #1a1f20;\n    border-radius: 8px;\n    margin: 8px;\n}\n\n.px-10SIf7.botTag-2WPJ74{\n    background: #33454d;\n}\n.theme-dark .queryContainer-RKFJW-{\n    background-color: var(--background-text-area);\n}\n.theme-dark .queryContainer-RKFJW-:hover{\n    background-color: var(--background-secondary);\n}\n.theme-dark .tooltipPrimary-1d1ph4 .tooltipPointer-3ZfirK{\n    border-top-color: transparent !important\n}\n.tooltip-2QfLtc{\n    background-color: rgba(0, 0, 0, 0.479) !important;\n    backdrop-filter: blur(5px);\n}\n.theme-dark .calendarPicker-2yf6Ci .react-datepicker{\n    background-color: var(--background-text-area);\n}\n.theme-dark .datePicker--XZbmJ .datePickerHint-3Q1Udw{\n    background-color: var(--background-text-area);\n}\n.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:after{\n    background-color: var(--background-text-area);\n}\n.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--selected:hover, .theme-dark .calendarPicker-2yf6Ci .react-datepicker__day:hover{\n    background-color: var(--background-secondary);\n}\n.theme-dark .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z{\n    background-color: var(--background-primary);\n}\n.theme-dark .datePicker--XZbmJ .datePickerHint-3Q1Udw .hintValue-29ny8Z:hover{\n    background-color: var(--border-text-area);\n}\n.theme-dark .calendarPicker-2yf6Ci .react-datepicker__current-month{\n    background-color: var(--background-text-area);\n}\n.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day-name{\n    background-color: var(--background-text-area);\n}\n.theme-dark .datePicker--XZbmJ{\n    background-color: var(--background-text-area);\n}\n.theme-dark .calendarPicker-2yf6Ci .react-datepicker__header{\n    background-color: var(--background-text-area);\n}\n.theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--disabled, .theme-dark .calendarPicker-2yf6Ci .react-datepicker__day.react-datepicker__day--disabled:hover{\n    background-color: var(--background-secondary);\n}\n.scroller-3__pG8{\n    background-color: var(--background-text-area);\n}\n.theme-dark .calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--next, .theme-dark .calendarPicker-2yf6Ci .react-datepicker__navigation.react-datepicker__navigation--previous{\n    border-color: #146991 !important;\n}\n.unreadBottom-1_LF_w .unreadBar-3t3sYc{\n    background-color: #1e2729;\n    border-radius: 4px;\n}\n.unreadTop-3rAB3r .unreadBar-3t3sYc{\n    border-radius: 4px !important;\n    background-color: #1e2729;\n}\n.section-2gLsgF{\n    background-color: var(--background-secondary);\n}\n.friendsEmpty-1K9B4k, .addInputWrapper-1BOZ3d, .bar-AokMp3, .css-rzbxvl-option{\n    background-color: var(--background-secondary);\n}\n.noiseCancellationPopout-iRK2A0, .scroller-3gAZL{\n    background-color: var(--background-primary);\n}\n.sourceScroller-Pk7YAM, .theme-dark .container-OI6I9q, .theme-dark .root-1gCeng,.root-2VTZPJ, .css-3vaxre-menu,.theme-dark .container-2x5lvQ section, .theme-dark .container-2x5lvQ .header-2C89wJ {\n    background-color: var(--background-text-area);\n}\n.search-1iTphC .searchBox-2_mAlO .searchBoxInput-K6mkng{\n    color: #fff;\n}\n.theme-dark .outer-1AjyKL.active-1xchHY, .theme-dark .outer-1AjyKL.interactive-3B9GmY:hover{\n    background-color: var(--background-text-area);\n}\n.emojiSection-3Fb9ix img {\n    margin: auto;\n    min-width: 80%;\n    height: auto !important;\n}\n.emojiSection-3Fb9ix > .noWrap-3jynv6, .emojiSection-3Fb9ix{\n    flex: wrap;\n    flex-direction: column !important;\n}\n.emojiName-27Bjxw {\n    font-weight: 600;\n    margin-top: 8px;\n    text-align: center;\n}\n.fa-wrench:before{\n    color: #28373d;\n}\n\n.accountList-33MS45{\n    background-color: rgba(34, 34, 34, 0.582);\n}\n.connectionHeader-2MDqhu{\n    background-color: rgba(34, 34, 34, 0.582);\n}\n.scroller-305q3I{\n    background: transparent;\n}\n/* Server settings - Emoji Hover */\n.theme-dark .card-FDVird:before {\n    background-color: #00000062;\n    border-color: #272727;\n}\n.theme-dark .emojiAliasInput-1y-NBz .emojiInput-1aLNse{\n    background-color: var(--background-primary);\n}\n/* Server settings - Emoji Hover End */\n\n/* Server Boosting Settings */\n.theme-dark .tierBody-x9kBBp {\n    background-color: #2727273a;\n    color: #b9bbbe;\n}\n.tierHeaderContent-2-YfvN{\n    background-color: #2c2c2c;\n}\n/* Server Boosting Settings */\n\n/* Reactions Box */\n.reactors-Blmlhw{\n    background-color: var(--background-primary) !important;\n}\n.theme-dark .scroller-1-nKid{\n    background: var(--background-secondary);\n}\n/* Reactions Box End */\n\n/* Reactions Buttons */\n.reaction-1hd86g.reactionMe-wv5HKu{\n    background-color: rgb(80, 80, 80) !important;\n}\n.reactionMe-wv5HKu .reactionCount-2mvXRV, .reactionMe-wv5HKu:hover .reactionCount-2mvXRV{\n    color: var(--background-tertiary);\n}\n/* Reactions Buttons End */\n.content-1x5b-n{\n    left: -8px;\n    border-radius: 0px;\n    width: 220px;\n}\n.wrapper-2jXpOf:hover .content-1x5b-n {\n    border-radius: 0px;\n    box-shadow: inset 2px 0 0 #70a0aa !important;\n}\n/* Server banner shrink */\n[class*="animatedContainer-"] {\n    opacity: 1 !important;\n    transition: opacity .5s;\n    z-index: 111;\n    top: 75px;\n    left: 9px;\n    height: 95px;\n    border-radius: 4px;\n    width: 222px;\n}\n[class*="animatedContainer-"] > [class*="bannerImage-"] {\n    transition: margin .5s;\n}\n:not([class*="bannerVisible-"]) > [class*="animatedContainer-"] {\n    opacity: .15 !important;\n    height: 82px;\n    top: 65px;\n    border-radius: 4px;\n}\n:not([class*="bannerVisible-"]) > [class*="animatedContainer-"] > [class*="bannerImage-"] {\n    margin-top: -12px;\n}\n/* Server banner shrink */\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Evernight",["",{type:"text-and-color",text:"Background Text Area",oninput:function(n){console.log(n),document.body.style.setProperty("--background-text-area",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-text-area")||"#1e2729";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Scroller",oninput:function(n){console.log(n),document.body.style.setProperty("--scroller",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--scroller")||"#181f20";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Border Text Area",oninput:function(n){console.log(n),document.body.style.setProperty("--border-text-area",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--border-text-area")||"#3a4346";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Evernight")}catch(r){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--background-text-area",document.body.style.getPropertyValue("--background-text-area")],["--scroller",document.body.style.getPropertyValue("--scroller")],["--border-text-area",document.body.style.getPropertyValue("--border-text-area")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=r(regeneratorRuntime.mark(function n(r){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(r){return n.apply(this,arguments)}}()}};exports.default=e;
},{}]},{},["index.js"], null);parcelRequire('index.js').default