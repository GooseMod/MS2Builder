parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,o,r,e,t,a,c){try{var l=n[a](c),d=l.value}catch(i){return void r(i)}l.done?o(d):Promise.resolve(d).then(e,t)}function o(o){return function(){var r=this,e=arguments;return new Promise(function(t,a){var c=o.apply(r,e);function l(o){n(c,t,a,l,d,"next",o)}function d(o){n(c,t,a,l,d,"throw",o)}l(void 0)})}}var r;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={goosemodHandlers:{onImport:function(){var n=o(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r=document.createElement("style"),document.head.appendChild(r),r.appendChild(document.createTextNode('/**\n * @name DarkBlueIce\n * @description A Beautiful theme for betterdiscord, powercord and aliucord with Dark blue and ice colors distributed in a harmonic way. \n * @author Dedsd\n * @version 1.0.9\n * @website https://github.com/Dedsd/DarkBlue-Ice-for-customdiscord\n */\n\n .scroller-2LSbBU {\n\tbackground-color: #39404D;\n}\n\n.scroller-1JbKMe {\n\tbackground-color: #2A2F3B;\n}\n\n.title-3qD0b-.container-1r6BKw.themed-ANHk51 { \n\tbackground-color: #2A2F3B;\n}\n\n.form-2fGMdU {\n\tbackground-color: #39404d;\n}\n\n.markup-2BOw-j.slateTextArea-1Mkdgw.fontSize16Padding-3Wk7zP {\n\tbackground-color: #454E63;\n}\n\n.attachButton-2WznTc.attachButton-2dnuIu.button-38aScr.lookBlank-3eh9lL.colorBrand-3pXr91.grow-q77ONN {\n\tbackground-color: #454E63;\n}\n\n.button-38aScr.lookBlank-3eh9lL.colorBrand-3pXr91.grow-q77ONN {\n\tbackground-color: #454E63;\n}\n\n.channelTextArea-rNsIhG.channelTextArea-2VhZ6z {\n\tbackground-color: #454E63;\n}\n\n.headerTop-3vNv-a.headerTopWithCustomStatus-1DHAjX {\n\tbackground-color: #25282F;\n}\n\n.body-3HBlXn.thin-1ybCId.scrollerBase-289Jih {\n\tbackground-color: #25282F;\n}\n\n.bodyInnerWrapper-26fQXj {\n\tbackground-color: #2a2f3b;\n}\n\n.footer-3UKYOU {\n\tbackground-color: #2a2f3b;\n}\n\n.anchor-3Z-8Bb.anchorUnderlineOnHover-2ESHQB {\n\tcolor: #C3D6F9;\n}\n\n.button-14-BFJ.enabled-2cQ-u7.button-38aScr.lookBlank-3eh9lL.colorBrand-3pXr91.grow-q77ONN {\n\tbackground-color: #25282f;\n}\n\n.container-3w7J-x {\n    background-color: #2a2f3b;\n}\n\n.icon-22AiRD {\n\tcolor: #C3D6F9;\n}\n\n.buttonWrapper-1ZmCpA {\n\tcolor: #94c3d9;\n}\n\n.contentWrapper-SvZHNd {\n\tbackground-color: #2a2f3b;\n}\n\n.contentRegionScroller-26nc1e.auto-Ge5KZx.scrollerBase-289Jih {\n\tbackground-color: #39404d;\n}\n\n.sidebarRegionScroller-3MXcoP.thin-1ybCId.scrollerBase-289Jih.fade-2kXiP2 {\n\tbackground-color: #2a2f3b;\n}\n\n.members-1998pB.thin-1ybCId.scrollerBase-289Jih.fade-2kXiP2 {\n    background-color: #2a2f3b;\n}\n\n.layout-2DM8Md {\n\tbackground-color: #2a2f3b;\n}\n\n.membersGroup-v9BXpm.container-2ax-kl {\n\tbackground-color: #2a2f3b;\n}\n\n.scrollableContainer-2NUZem.webkit-HjD9Er {\n\tbackground-color: #454E63;\n}\n\n.header-2V-4Sw {\n\tbackground-color: #454E63;\n}\n\n.scroller-1Bvpku.none-2Eo-qx.scrollerBase-289Jih {\n\tbackground-color: #1e262f;\n}\n\n.container-3baos1 {\n\tbackground-color: #1e262f;\n}\n\n.searchBar-6Kv8R2 {\n\tbackground-color: #2a2f3b;\n}\n\n.searchBar-6Kv8R2\n.searchBarComponent-32dTOx{\n    background-color: #1e262f;\n}\n\n.searchBar-3dMhjb {\n\tbackground-color: #1e262f;\n}\n\n.header-2V-4Sw {\n\tbackground-color: #2a2f3b;\n}\n\n.barButtonMain-3K-jeJ.barButtonBase-2uLO1z {\n\tbackground-color: #2a2f3b;\n}\n\n.barButtonAlt-mYL1lj.barButtonBase-2uLO1z {\n\tbackground-color: #2a2f3b;\n}\n\n.resultsGroup-r_nuzN {\n\tbackground-color: #2a2f3b;\n}\n\n.container-3iAQ-0 {\n\tbackground-color: #2a2f3b;\n}\n\n.channelHeader-3Gd2xq {\n\tbackground-color: #2a2f3b;\n}\n\n.messageContainer-gbhlwo {\n\tbackground-color: #39404d;\n}\n\n.header-2-Imhb.header-ykumBX {\n\tbackground-color: #1e262f;\n}\n\n.messagesPopout-24nkyi.scroller-2UmRce.thin-1ybCId.scrollerBase-289Jih {\n\tbackground-color: #2a2f3b;\n}\n\n.header-ykumBX {\n\tbackground-color: #1e262f;\n}\n\n.messageGroupCozy-2iY6cT.wrapper-2a6GCs.cozy-3raOZG.zalgo-jN1Ica {\n\tbackground-color: #39404d;\n}\n\n.messagesPopout-24nkyi.thin-1ybCId.scrollerBase-289Jih {\n\tbackground-color: #2a2f3b;\n}\n\n.list-wek7hJ.activeThreadsList-3f7l7U.thin-1ybCId.scrollerBase-289Jih.fade-2kXiP2 {\n\tbackground-color: #2a2f3b;\n}\n\n.container-2I9Hud {\n\tbackground-color: #39404d;\n}\n\n.header-1VS4tm {\n\tbackground-color: #1e262f;\n}\n\n.toolbar-1t6TWx {\n\tbackground-color: #2a2f3b;\n}\n\n.theme-dark .option-96V44q:after, .theme-dark .option-96V44q.selected-rZcOL-:after {\n\tbackground: none !important;\n  }\n\n.scroller-3GIiMh.thin-1ybCId.scrollerBase-289Jih {\n\tbackground-color: #2a2f3b;\n}\n.wrapper-2a6GCs.cozy-3raOZG.zalgo-jN1Ica {\n\tbackground-color: #39404d;\n}\n\n.searchHeader-2XoQg7 {\n\tbackground-color: #1e262f;\n}\n\n.theme-dark .children-19S4PO:after {\n    background: -webkit-gradient(linear,left top,right top,from(rgba(54,57,63,0)),to(var(--background-primary))): !important;\n    background: linear-gradient(90deg,rgba(54,57,63,0) 0,var(--background-primary)): !important;\n}\n.message-1Ng5AR {\n\tbackground-color: #39404d;\n}\n\n.searchResultGroup-1DphGG {\n\tbackground-color: #2a2f3b;\n}\n\n.colorHeaderPrimary-26Jzh-size16-1P40sf.channelName-1JRO3C {\n\tcolor: #454E63;\n}\n\n.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignCenter-1dQNNs.noWrap-3jynv6.header-1TKi98.headerContainer-3N-yWX {\n\tbackground-color: #2a2f3b;\n}\n\n.content-1LAB8Z.thin-1ybCId.scrollerBase-289Jih {\n\tbackground-color: #1e262f;\n}\n\n.flex-1xMQg5.flex-1O1GKY.horizontalReverse-2eTKWD.horizontalReverse-3tRjY7.flex-1O1GKY.directionRowReverse-m8IjIq.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.footer-2gL1pp {\n\tbackground-color: #1e262f;\n}\n\n.inputDefault-_djjkz.input-cIJ7To.input-1GLP_D {\n\tbackground-color: #39404d;\n\tborder-color: #C3D6F9;\n}\n\n.select-2fjwPw.lookFilled-22uAsw {\n\tbackground-color: #39404d;\n}\n\n.body-3HBlXn.thin-1ybCId.scrollerBase-289Jih {\n\tbackground-color: #2a2f3b;\n}\n\n.headerTop-3vNv-a {\n\tbackground-color: #1e262f;\n}\n\n.role-2irmRk.flex-1O1GKY.alignCenter-1dQNNs {\n\tbackground-color: #1e262f;\n}\n\n.textarea-2r0oV8.inputDefault-_djjkz.input-cIJ7To.scrollbarGhostHairline-1mSOM1.scrollbar-3dvm_9 {\n\tbackground-color: #1e262f;\n\tcolor: #C3D6F9;\n}\n\n.inputDefault-_djjkz.input-cIJ7To.input-2_SIlA {\n\tbackground-color: #1e262f;\n}\n\n.topSection-y3p-_D {\n\tbackground-color: #1e262f;\n}\n\n.nameTagNoCustomStatus-3IWmZC.nameTag-ECvD8P.nameTag-m8r81H {\n\tbackground-color: #1e262f;\n}\n\n.infoScroller-1Qu30O.thin-1ybCId.scrollerBase-289Jih.fade-2kXiP2 {\n\tbackground-color: #2a2f3b;\n}\n\n.listScroller-3GmIYj.thin-1ybCId.scrollerBase-289Jih.fade-2kXiP2 {\n\tbackground-color: #1e262f;\n}\n\n.message-2qnXI6.cozyMessage-3V1Y8y.mentioned-xhSam7{\n\tbackground-image: linear-gradient(rgba(195, 214, 249, 0.1), rgba(195, 214, 249, 0.1));\n}\n\n.sprite-2iCowe {\n\tbackground-image: url(https://raw.githubusercontent.com/Dedsd/DarkBlue-Ice-for-customdiscord/master/images/e.png);\n\tfilter: grayscale(0) !important;\n}\n\n.mention.wrapper-3WhCwL.mention.interactive {\n\tbackground-image: linear-gradient(rgba(195, 214, 249, 0.1), rgba(195, 214, 249, 0.1));\n}\n\n.inspector-S2gM3e.inspector-3LQtX9 {\n\tbackground-color: #1e262f;\n}\n\n.scroller-3gAZLs.list-donH_Z.none-2Eo-qx.scrollerBase-289Jih {\n\tbackground-color: #1e262f;\n}\n\n.userInfo-iCloHO {\n\tbackground-color: #1e262f;\n}\n\n.accountProfileCard-1XCH88 {\n\tbackground-color: #1e262f;\n}\n\n.background-1QDuV2 {\n\tbackground-color: #2a2f3b;\n}\n\n.fieldList-21DyL8 {\n\tbackground-color: #2a2f3b;\n}\n\n.container-UC8Ug1 {\n\tbackground-color: #39404D;\n}\n\n.colorStandard-2KCXvj.size16-1P40sf.text-1FOLJS {\n\tcolor: #C3D6F9;\n}\n\n.flex-1xMQg5.flex-1O1GKY.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr.justifyStart-2NDFzi.alignCenter-1dQNNs.noWrap-3jynv6.header-1TKi98.header-3msK0M {\n\tbackground-color: #1e262f;\n}\n\n.container-1CE3eW {\n\tbackground-color: #1e262f;\n}\n\n.title-3w8xhj.base-1x0h_U.size24-RIRrxO {\n\tcolor: #C3D6F9;\n}\n\n.close-hZ94c6.closeButton-9dkb_x.button-38aScr.lookBlank-3eh9lL.colorBrand-3pXr91.grow-q77ONN {\n\tbackground-color: #39404d;\n}\n\n.footerTitle-2CYZch.base-1x0h_U.size20-17Iy80 {\n\tcolor: #C3D6F9;\n}\n\n.footerButton-ayFTfX.button-38aScr.lookFilled-1Gx00P.colorGrey-2DXtkV.sizeMedium-1AC_Sl.grow-q77ONN {\n\tbackground-image: linear-gradient(rgba(195, 214, 249, 0.2), rgba(195, 214, 249, 0.2));\n}\n\n.close-hZ94c6.closeButton-_onk93.button-38aScr.lookBlank-3eh9lL.colorBrand-3pXr91.grow-q77ONN {\n\tbackground-color: #C3D6F9;\n\tpadding: 1px;\n}\n\n.contents-18-Yxp {\n\tcolor: #C3D6F9;\n}\n\n.colorHeaderSecondary-3Sp3Ft.size14-e6ZScH.skip-2o6MGG {\n\tcolor: #C3D6F9;\n}\n\n.title-LqAd9K.base-1x0h_U.size24-RIRrxO {\n\tcolor: #C3D6F9;\n}\n\n.flex-1xMQg5.flex-1O1GKY.horizontalReverse-2eTKWD.horizontalReverse-3tRjY7.flex-1O1GKY.directionRowReverse-m8IjIq.justifyBetween-2tTqYu.alignStretch-DpGPf3.noWrap-3jynv6.footer-2gL1pp {\n\tbackground-color: #2A2F3B;\n}\n\n.title-Z_XiOC.base-1x0h_U.size24-RIRrxO {\n\tcolor: #C3D6F9;\n}\n\n.inputDefault-_djjkz.input-cIJ7To {\n\tbackground-color: #454E63;\n\tcolor: #C3D6F9;\n}\n\n.backButton-iA7KIs.button-38aScr.lookBlank-3eh9lL.colorBrand-3pXr91.sizeMin-1mJd1x.grow-q77ONN {\n\tbackground-image: linear-gradient(rgba(195, 214, 249, 0.5), rgba(195, 214, 249, 0.5));\n}\n\n.close-hZ94c6.closeButton-26zew5.button-38aScr.lookBlank-3eh9lL.colorBrand-3pXr91.grow-q77ONN {\n\tbackground-image: linear-gradient(rgba(195, 214, 249, 0.5), rgba(195, 214, 249, 0.5));\n}\n\n.button-38aScr.lookBlank-3eh9lL.colorBrand-3pXr91.sizeMin-1mJd1x.grow-q77ONN {\n\tbackground-image: linear-gradient(rgba(195, 214, 249, 0.5), rgba(195, 214, 249, 0.5));\n}\n\n.attachButtonPlus-jWVFah {\n\tbackground-image: linear-gradient(rgba(195, 214, 249, 0.5), rgba(195, 214, 249, 0.5));\n}\n\n.scroller-tlc3kG.thin-1ybCId.scrollerBase-289Jih {\n\tbackground-color: #2a2f3b;\n}\n\n.messages-3G3erD {\n\tbackground-color: #39404D;\n}\n\n.container-3u944p {\n\tbackground-color: #1e262f;\n}\n\n.scrollbarGhostHairline-1mSOM1.scrollbar-3dvm_9.codeView-1JPDeA.hljs.css {\n\tbackground-color: #2a2f3b;\n}\n\n.colorHeaderSecondary-3Sp3Ft.size14-e6ZScH.footer-2yA7Ep {\n\tbackground-color: #686a6d;\n}\n\n.mentioned-xhSam7:before {\n\tbackground-color: #C3D6F9;\n}\n\n.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignCenter-1dQNNs.noWrap-3jynv6.header-1TKi98 {\n\tbackground-color: #2a2f3b;\n}\n\n.root-217Brm {\n\tbackground-color: #2a2f3b;\n}\n\n.wrapper-1-Fsb8.header-ywPcAE {\n\tbackground-color: #2a2f3b;\n}\n\n.flexChild-faoVW3 {\n\tbackground-color: #39404D;\n}\n\n.wrapper-1-Fsb8.packHeader-NLJ7S5 {\n\tbackground-color: #2A2F3B;\n}\n\n.input-1Rv96N {\n\tbackground-color: #1e262f;\n}\n\n.tutorial-3w5I9h {\n\tbackground-color: #1e262f;\n}\n\n.scroller-3BxosC {\n\tbackground-color: #1e262f;\n}\n\n.headerTop-3vNv-a.headerTopWithCustomStatus-1DHAjX {\n\tbackground-color: #2A2F3B;\n}\n\n.markup-2BOw-j code {\n\tbackground-color: #1e262f;\n}\n\n.replyBar-1YLQ2F {\n\tbackground-color: #1e262f;\n}\n\n.members-1998pB, .members-1998pB>div {\n\tbackground-color: #2A2F3B;\n}\n\n.grid-1nZz7S {\n\tbackground-color: #2A2F3B;\n}\n\nembed {\n\tbackground-color: #2a2f3b;\n}\n\n.theme-dark .uploadModal-2ifh8j {\n\tbackground-color: #2a2f3b;\n}\n\n.theme-dark .footer-3mqk7D {\n\tbackground-color: #2a2f3b;\n}\n\n.theme-dark .footer-2gL1pp {\n\tbackground-color: #2a2f3b;\n}\n\n.formNotice-2_hHWR.marginBottom40-2vIwTv.cardPrimary-1Hv-to.card-3Qj_Yx {\n\tbackground-color: #2a2f3b;\n}\n\n.flexChild-faoVW3 {\n\tbackground-color: #2a2f3b00;\n}\n\n.channelName-1JRO3C {\n\tbackground-color: #2a2f3b;\n}\n\n.scroller-lynW5A {\n\tbackground-color: #2a2f3b;\n}\n\n.scroller-3gAZLs.list-17lzo8.thin-1ybCId.scrollerBase-289Jih {\n\tbackground-color: #2a2f3b;\n}\n\n.scroller-3gAZLs.list-donH_Z.none-2Eo-qx.scrollerBase-289Jih {\n\tbackground-color: #1e262f;\n}\n\n.wrapper-1-Fsb8.categoryHeader-O1zU94 {\n\tbackground-color: #1e262f;\n}\n\n.childWrapper-anI2G9 {\n\tbackground-color: #39404d;\n}\n\n.circleIconButton-1QV--U {\n\tbackground-color: #39404D;\n}\n\n.scroller-9moviB {\n\tbackground-color: #39404d;\n}\n\n.container-1r6BKw.themed-ANHk51 {\n\tbackground-color: #39404d;\n}\n\n.container-24CyRY {\n\tbackground-color: #39404d;\n}\n\n.scroller-2ZPeAD {\n\tbackground-color: #39404d;\n}\n\n.card-2qZngs {\n\tbackground-color: #2a2f3b;\n}\n\n.itemCard-v9viV7 {\n\tbackground-color: #2a2f3b;\n}\n\n.peopleList-3c4jOR {\n\tbackground-color: #39404d;\n}\n\n.inspector-S2gM3e {\n\tbackground-color: #1e262f;\n}\n\n.header-1TKi98 {\n\tbackground-color: #2A2F3B;\n}\n\n.noResults-ZTbl5V, .scroller-hUf6zQ {\n\tbackground-color: #2A2F3B;\n}\n\n.footer-1eyGBa {\n\tbackground-color: #1e262f;\n}\n\n.circleIcon-1-oi1i {\n\tcolor: #C3D6F9;\n}\n\n[d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"] {\n  color: #C3D6F9;\n}\n\n.circleIconButton-1QV--U:hover {\n\tbackground-color: #454e63;\n}\n\n.colorDefault-2K3EoJ.focused-3afm-j {\n\tbackground-color: #454e63;\n}\n\n.theme-dark .option-96V44q.selected-rZcOL- {\n\tbackground-color: #454e63;\n}\n\n.theme-dark .selected-1Tbx07 {\n\tbackground-color: #454e63;\n}\n\n.colorDefault-2K3EoJ:active:not(.hideInteraction-1iHO1O) {\n\tbackground-color: #454e63;\n}\n\n.mention.wrapper-3WhCwL.mention.interactive:hover {\n\tbackground-color: #C3D6F9;\n}\n\n.scroller-1d5FgU {\n\tbackground-color: #39404d;\n}\n\n.circleIconButton-1QV--U.selected-1JjBPm {\n\tbackground-color: #454e63;\n}\n\n.homeIcon-FuNwkv {\n\tcolor: #C3D6F9;\n}\n\n.childWrapper-anI2G9:hover {\n\tbackground-color: #454e63;\n}\n\n.reactionInner-15NvIl {\n\tborder-color: #C3D6F9;\n}\n\n.wrapper-1BJsBx:hover .childWrapper-anI2G9 {\n\tbackground-color: #454e63;\n}\n\n.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9 {\n\tbackground-color: #454e63;\n}\n\n.popoutInfo-pKbpvG {\n\tbackground-color: #1e262f;\n}\n\n.formNotice-2_hHWR.cardPrimary-1Hv-to card-3Qj_Yx {\n\tbackground-color: #2A2F3B;\n}\n\n.container-1pMiXm code {\n    background-color: var(--background-primary);\n    border: 1px solid var(--background-tertiary);\n}\n\n.theme-dark .container-1pMiXm code {\n    background-color: var(--background-tertiary);\n}\n\n.message-2qnXI6 .wrapper-35wsBm {\n    background-color: var(--background-secondary);\n}\n\n.cozy-3raOZG.message-2qnXI6.selected-2P5D_Z .messageContent-2qWWxC:not(.repliedTextContent-1R3vnK),\n.cozy-3raOZG.message-2qnXI6.selected-2P5D_Z .embedFull-2tM8--,\n.cozy-3raOZG.message-2qnXI6.selected-2P5D_Z .container-1pMiXm > div {\n    background-color: var(--background-tertiary) !important;\n}\n\n.cozy-3raOZG.message-2qnXI6.mentioned-xhSam7 .messageContent-2qWWxC:not(.repliedTextContent-1R3vnK) {\n    background-color: var(--background-mentioned) !important;\n}\n\n.theme-dark .cozy-3raOZG.message-2qnXI6.selected-2P5D_Z .messageContent-2qWWxC:not(.repliedTextContent-1R3vnK),\n.theme-dark .cozy-3raOZG.message-2qnXI6.selected-2P5D_Z .embedFull-2tM8--,\n.theme-dark .cozy-3raOZG.message-2qnXI6.selected-2P5D_Z .container-1pMiXm > div {\n    background-color: var(--background-secondary-alt) !important;\n}\n\n.cozy-3raOZG .messageContent-2qWWxC:not(.repliedTextContent-1R3vnK) pre code {\n    background-color: var(--background-primary);\n}\n\n.theme-dark .cozy-3raOZG .messageContent-2qWWxC:not(.repliedTextContent-1R3vnK) pre code {\n    background-color: var(--background-tertiary);\n}\n\n.cozy-3raOZG .repliedMessage-VokQwo ~ .contents-2mQqc9 > .messageContent-2qWWxC:first-of-type::before {\n    background-color: var(--background-secondary-alt);\n}\n\n.item-2hkk8m {\n\tbackground-color: #C3D6F9;\n}\n\n.premiumTabItem-1QTfBr[aria-selected=true] {\n    background-color: var(--text-link) !important;\n    color: var(--background-secondary) !important;\n}\n\n.premiumTabItem-1QTfBr[aria-selected=true] .icon-Zc-uZZ {\n\tfill: #2A2F3B !important;\n}\n\n.categoryItem-1QIroW.selectedCategoryItem-FHKU_o .itemInner-gPkiWb {\n\tbackground-color: var(--background-primary);\n}\n\n.categoryItem-1QIroW.selectedCategoryItem-FHKU_o {\n\tcolor: #C3D6F9;\n}\n\n.avatar-3uk_u9 {\n\tcolor: #C3D6F9;\n}\n\n.circleIcon-3EEvbO {\n\tcolor: #C3D6F9;\n}\n\n.circleIconButton-1XqULR.selected-2jcQaY {\n\tbackground-color: #454e63;\n}\n\n.colorable-1bkp8v.primaryDark-3mSFDl, .colorable-1bkp8v.primaryDark-3mSFDl .centerIcon-2G6o-T {\n\tcolor: #C3D6F9;\n}\n\n.colorable-1bkp8v.white-3GPOIp, .colorable-1bkp8v.white-3GPOIp .centerIcon-2G6o-T {\n\tcolor: #C3D6F9;\n}\n\n.colorable-1bkp8v.red-33-Lnk, .colorable-1bkp8v.red-33-Lnk .centerIcon-2G6o-T {\n\tcolor: #C3D6F9;\n}\n\n.contextMenuCaret-3tjo32 {\n\tbackground-color: #2a2f3b;\n}\n\n.contextMenuNub-3yOOYo.colorable-1bkp8v.white-3GPOIp {\n\tbackground-color: #2a2f3b;\n}\n\n.status-1WEaea {\n\tbackground-color: #454e63;\n\tcolor: #C3D6F9;\n}\n\n.circleIconButton-hZmpE8 {\n\tcolor: #C3D6F9;\n}\n\n.circleIconButton-hZmpE8:hover {\n\tbackground-color: #454e63;\n}\n\n.circleIconButton-hZmpE8.selected-3mFF3I {\n\tbackground-color: #454e63;\n}\n\n\n\n:root {\n\t--background-mentioned-hover: linear-gradient(rgba(195, 214, 249, 0.1), rgba(195, 214, 249, 0.1));\n\t--background-mentioned: linear-gradient(rgba(195, 214, 249, 0.1), rgba(195, 214, 249, 0.1));\n\t--background-border: #C3D6F9;\n\t--text-link: #C3D6F9;\n\t--background-message-hover: transparent;\n    --background-primary: #39404D !important;\n    --background-secondary: #2A2F3B !important;\n    --background-secondary-alt: #454e63 !important;\n    --background-tertiary: #1e262f !important;\n}\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("DarkBlueIce",["",{type:"text-input",text:"Background Primary)))",oninput:function(n){document.body.style.setProperty("--background-primary)))",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-primary)))")||"!important";return console.log(n),n}},{type:"text-input",text:"Background Primary))",oninput:function(n){document.body.style.setProperty("--background-primary))",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-primary))")||"!important";return console.log(n),n}},{type:"text-and-color",text:"Background Border",oninput:function(n){document.body.style.setProperty("--background-border",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-border")||"#C3D6F9";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=o(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.remove();try{goosemodScope.settings.removeItem("DarkBlueIce")}catch(o){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=o(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--background-primary)))",document.body.style.getPropertyValue("--background-primary)))")],["--background-primary))",document.body.style.getPropertyValue("--background-primary))")],["--background-border",document.body.style.getPropertyValue("--background-border")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=o(regeneratorRuntime.mark(function n(o){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(o){return n.apply(this,arguments)}}()}};exports.default=e;
},{}]},{},["index.js"], null);parcelRequire('index.js').default