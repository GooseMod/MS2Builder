parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,r,o,a,e,t,c){try{var d=n[t](c),u=d.value}catch(p){return void o(p)}d.done?r(u):Promise.resolve(u).then(a,e)}function r(r){return function(){var o=this,a=arguments;return new Promise(function(e,t){var c=r.apply(o,a);function d(r){n(c,e,t,d,u,"next",r)}function u(r){n(c,e,t,d,u,"throw",r)}d(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a={goosemodHandlers:{onImport:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode(':root,\n.theme-dark {\n  --background-primary: black;\n  --background-secondary: rgb(20, 20, 20);\n  --background-secondary-alt: rgb(28, 28, 28);\n  --background-tertiary: rgb(10, 10, 10);\n  --background-floating: rgb(12, 12, 12);\n  --background-accent: var(--background-secondary-alt);\n  --channeltextarea-background: rgb(15, 15, 15);\n  --searcharea-background: var(--background-secondary);\n  --channels-default: #8b8b8b;\n  --header-primary: #fff;\n  --header-secondary: #b9bbbe;\n  --text-normal: #dcddde;\n  --text-muted: #969696;\n  --scroller-thumb: rgb(30, 30, 30);\n  --scroller-track: rgb(10, 10, 10);\n  --background-modifier-rgb: 60, 60, 60;\n  --background-modifier-hover: rgba(var(--background-modifier-rgb), 0.16);\n  --background-modifier-active: rgba(var(--background-modifier-rgb), 0.24);\n  --background-modifier-selected: rgba(var(--background-modifier-rgb), 0.32);\n  --background-modifier-accent: rgba(255, 255, 255, 0.06);\n  --interactive-muted: rgb(75, 75, 75);\n  --elevation-low: 0 1px 0 rgba(40, 40, 50, 0.2), 0 1.5px 0 rgba(60, 60, 70, 0.05), 0 2px 0 rgba(40, 40, 50, 0.05);\n  --elevation-high: 0 8px 16px rgba(0, 0, 0, 0.24);\n}\n\n#app-mount .layer-86YKbF .cardFolder-3H4uH4 {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .item-4m-12I[aria-checked=false] {\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .passthrough--fbdFR.selected-3jieYB {\n  background-color: var(--background-secondary-alt);\n}\n\n#app-mount .layer-86YKbF .noticeRegion-qjyUVg .container-20TyK0 {\n  background-color: var(--background-secondary) !important;\n}\n#app-mount .layer-86YKbF .avatarUploaderInnerSquareDisabled-3M9eJS {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .container-3EtAkD {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .container-3EtAkD:hover {\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .container-3EtAkD:hover .icon-2DGsye {\n  background-color: var(--background-primary);\n}\n#app-mount .layer-86YKbF .icon-2DGsye {\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .primary-38Hs-h:hover:not(.disabled-184-il),\n#app-mount .layer-86YKbF .secondary-2bzKEX {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .primary-38Hs-h:hover:not(.disabled-184-il):hover,\n#app-mount .layer-86YKbF .secondary-2bzKEX:hover {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .previewContainer-1GxmBJ {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .previewContainer-1xQAsw .theme-light {\n  display: none;\n}\n#app-mount .layer-86YKbF .previewContainer-1xQAsw .messageContainer-3a6gLR {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .tierHeaderLocked-30MLlO,\n#app-mount .layer-86YKbF .tierHeaderUnlocked-1OpOLf {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .tierBody-1d3UiS {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .auditLog-1NVAY0 {\n  border-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .auditLog-1NVAY0:hover {\n  border-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .auditLog-1NVAY0:hover .headerClickable-zGQJz3,\n#app-mount .layer-86YKbF .auditLog-1NVAY0:hover .headerExpanded-1-zwDr {\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .headerClickable-zGQJz3,\n#app-mount .layer-86YKbF .headerDefault-1e6yjj,\n#app-mount .layer-86YKbF .headerExpanded-1-zwDr {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .divider-M3saWq {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .changeDetails-1kMZqI {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .descriptionBox-SKGNgB {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .featureCard-3XHbjy {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .previewCard-22p9UT {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .welcomeChannel-_Q4qAA {\n  background-color: var(--background-tertiary);\n}\n\n#app-mount .layer-86YKbF:not(.baseLayer-W6S8cY) .input-2g-os5,\n#app-mount .layer-86YKbF:not(.baseLayer-W6S8cY) .copyInput-3AbKWB {\n  border-color: var(--background-secondary);\n  background-color: var(--background-tertiary);\n}\n#app-mount .sidebarRegionScroller-FXiQOh {\n  background-color: var(--background-primary);\n}\n#app-mount .header-6h98Y_ {\n  background-color: var(--background-primary);\n}\n#app-mount .closeButton-PCZcma {\n  border-color: var(--background-secondary-alt);\n}\n#app-mount .closeButton-PCZcma:hover {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .keybind-13vtq8 {\n  color: var(--text-normal);\n}\n#app-mount .settingCard-xZSDjS {\n  background-color: var(--background-secondary);\n}\n#app-mount .cardPrimary-3qRT__,\n#app-mount .cardPrimaryEditable-2mz_3i {\n  border-color: var(--background-secondary);\n  background-color: var(--background-secondary);\n}\n#app-mount .iconWrapper-1sOtkE {\n  background-color: var(--background-tertiary);\n}\n#app-mount .itemFilled-1cPbtg {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .itemFilled-1cPbtg[aria-checked=true] {\n  background-color: var(--background-tertiary) !important;\n}\n#app-mount .itemFilled-1cPbtg:hover {\n  background-color: var(--background-secondary);\n}\n#app-mount .default-1Tkeeg {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .container-30qY7E {\n  background-color: var(--background-tertiary);\n}\n\n#app-mount .layer-86YKbF .profileBannerPreview-3mLIdO {\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .bioTextArea-dDGOeC {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .cardPrimaryOutline-1ofwVz {\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .accountList-Wii_T5 {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .accountBtn-3pgcgr .accountBtnInner-3ttD-i {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .connectionHeader-Ixbb1s {\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .feature-2IUcBI {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .outer-2JOHae {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .outer-2JOHae:hover {\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .noIcon-3gSX9V {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .gemIndicatorContainer-PqApbX {\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .promotionCard-mo7ClH {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .paginator-1eqD2g,\n#app-mount .layer-86YKbF .paymentPane-ut5qKZ,\n#app-mount .layer-86YKbF .payment-2bOh4k {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .hoverablePayment-lE1s4t {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .hoverablePayment-lE1s4t:hover {\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .bottomDivider-ZmTm-j {\n  border-color: var(--background-primary);\n}\n#app-mount .layer-86YKbF .expandedInfo-1W31i3 {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .codeRedemptionRedirect-2hYMSQ {\n  border-color: var(--background-secondary);\n  background-color: var(--background-tertiary);\n}\n#app-mount .layer-86YKbF .previewMessage-2g_aBv {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .notches-2w7UZJ.gray-3wP137 {\n  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height=\'20\' width=\'8\' xmlns=\'http://www.w3.org/2000/svg\' fill=\'black\'%3E%3Cpath d=\'M0 0h8v20H0zm4 2a2 2 0 00-2 2v12a2 2 0 104 0V4a2 2 0 00-2-2z\' fill-rule=\'evenodd\'/%3E%3C/svg%3E");\n}\n#app-mount .layer-86YKbF .cameraWrapper-3a7Ngv {\n  border-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .backgroundOptionInner-SSz19O {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .notDetected-M3Ghh2 {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .game-2f2vPC {\n  box-shadow: 0 1px 0 0 var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .option-1QI4c9:not(.selected-18Wszc):not(:hover) {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .layer-86YKbF .powercord-entities-manage-tabs {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-86YKbF .container-2oNtJn {\n  background-color: var(--background-secondary);\n}\n\n#app-mount .button-1EGGcP.buttonColor-3bP3fX,\n#app-mount .button-1EGGcP .buttonColor-3bP3fX,\n#app-mount .lookFilled-yCfaCM.colorGrey-2iAG-B,\n#app-mount .lookFilled-yCfaCM.colorPrimary-2AuQVo {\n  background-color: #282828;\n}\n#app-mount .button-1EGGcP.buttonColor-3bP3fX:enabled:hover,\n#app-mount .button-1EGGcP .buttonColor-3bP3fX:enabled:hover,\n#app-mount .lookFilled-yCfaCM.colorGrey-2iAG-B:enabled:hover,\n#app-mount .lookFilled-yCfaCM.colorPrimary-2AuQVo:enabled:hover {\n  background-color: #1e1e1e;\n}\n#app-mount .container-2nx-BQ[style="opacity: 1; background-color: hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%);"] {\n  background-color: #282828 !important;\n}\n#app-mount .colorable-3rVGna.primaryDark-2UJt1G {\n  background-color: #282828;\n}\n\n/*!\n  Theme: Chalk\n  Author: Chris Kempson (http://chriskempson.com)\n  License: ~ MIT (or more permissive) [via base16-schemes-source]\n  Maintainer: @highlightjs/core-team\n  Version: 2021.09.0\n*/\n/*\n  WARNING: DO NOT EDIT THIS FILE DIRECTLY.\n\n  This theme file was auto-generated from the Base16 scheme chalk\n  by the Highlight.js Base16 template builder.\n\n  - https://github.com/highlightjs/base16-highlightjs\n*/\n/*\nbase00  #151515  Default Background\nbase01  #202020  Lighter Background (Used for status bars, line number and folding marks)\nbase02  #303030  Selection Background\nbase03  #505050  Comments, Invisibles, Line Highlighting\nbase04  #b0b0b0  Dark Foreground (Used for status bars)\nbase05  #d0d0d0  Default Foreground, Caret, Delimiters, Operators\nbase06  #e0e0e0  Light Foreground (Not often used)\nbase07  #f5f5f5  Light Background (Not often used)\nbase08  #fb9fb1  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted\nbase09  #eda987  Integers, Boolean, Constants, XML Attributes, Markup Link Url\nbase0A  #ddb26f  Classes, Markup Bold, Search Text Background\nbase0B  #acc267  Strings, Inherited Class, Markup Code, Diff Inserted\nbase0C  #12cfc0  Support, Regular Expressions, Escape Characters, Markup Quotes\nbase0D  #6fc2ef  Functions, Methods, Attribute IDs, Headings\nbase0E  #e1a3ee  Keywords, Storage, Selector, Markup Italic, Diff Changed\nbase0F  #deaf8f  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>\n*/\n/* purposely do not highlight these things */\n/* base03 - #505050 -  Comments, Invisibles, Line Highlighting */\n.hljs-comment {\n  color: #505050;\n}\n\n/* base04 - #b0b0b0 -  Dark Foreground (Used for status bars) */\n.hljs-tag {\n  color: #b0b0b0;\n}\n\n/* base05 - #d0d0d0 -  Default Foreground, Caret, Delimiters, Operators */\n.hljs-subst,\n.hljs-punctuation,\n.hljs-operator {\n  color: #d0d0d0;\n}\n\n.hljs-operator {\n  opacity: 0.7;\n}\n\n/* base08 - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted */\n.hljs-bullet,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-selector-tag,\n.hljs-name,\n.hljs-deletion {\n  color: #fb9fb1;\n}\n\n/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */\n.hljs-symbol,\n.hljs-number,\n.hljs-link,\n.hljs-attr,\n.hljs-variable.constant_,\n.hljs-literal {\n  color: #eda987;\n}\n\n/* base0A - Classes, Markup Bold, Search Text Background */\n.hljs-title,\n.hljs-class .hljs-title,\n.hljs-title.class_ {\n  color: #ddb26f;\n}\n\n.hljs-strong {\n  font-weight: bold;\n  color: #ddb26f;\n}\n\n/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */\n.hljs-code,\n.hljs-addition,\n.hljs-title.class_.inherited__,\n.hljs-string {\n  color: #acc267;\n}\n\n/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */\n.hljs-built_in,\n.hljs-doctag,\n.hljs-quote,\n.hljs-keyword.hljs-atrule,\n.hljs-regexp {\n  color: #12cfc0;\n}\n\n/* base0D - Functions, Methods, Attribute IDs, Headings */\n.hljs-function .hljs-title,\n.hljs-attribute,\n.ruby .hljs-property,\n.hljs-title.function_,\n.hljs-section {\n  color: #6fc2ef;\n}\n\n/* base0E - Keywords, Storage, Selector, Markup Italic, Diff Changed */\n.hljs-type,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-template-tag,\n.diff .hljs-meta,\n.hljs-keyword {\n  color: #e1a3ee;\n}\n\n.hljs-emphasis {\n  color: #e1a3ee;\n  font-style: italic;\n}\n\n/* base0F - Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?> */\n.hljs-meta,\n.hljs-meta .hljs-keyword,\n.hljs-meta .hljs-string {\n  color: #deaf8f;\n}\n\n.hljs-meta .hljs-keyword,\n.hljs-meta-keyword {\n  font-weight: bold;\n}\n\n.theme-light #app-mount::after {\n  content: "This theme is NOT meant to be used in Light Mode. Please switch over to Dark Mode in Settings -> Appearance.";\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 22px;\n  right: 0;\n  bottom: calc(100% - 58px);\n  left: 72px;\n  border-top-left-radius: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  color: white;\n  background-color: #ed4245;\n}\n.theme-light #app-mount .container-YkUktl .flex-2S1XBF .button-12Fmur:last-child {\n  animation: flash 1s ease infinite;\n  color: white;\n  background-color: #ed4245;\n}\n.theme-light #app-mount #user-settings-cog-Appearance {\n  animation: flash 1s ease infinite;\n  color: white;\n  background-color: #ed4245 !important;\n}\n.theme-light #app-mount [aria-activedescendant^=user-settings-cog-Appearance] #user-settings-cog-Appearance--dark {\n  animation: flash 1s ease infinite;\n  color: white;\n  background-color: #ed4245 !important;\n}\n.theme-light #app-mount [aria-controls=appearance-tab] {\n  animation: flash 1s ease infinite;\n  color: white;\n  background-color: #ed4245 !important;\n}\n.theme-light #app-mount [aria-label=USER_SETTINGS] [tabindex="-1"] + [class=marginTop40-Q4o1tS] .item-2idW98:nth-of-type(1) {\n  animation: flash 1s ease infinite;\n  color: white;\n  background-color: #ed4245 !important;\n}\n.theme-light #app-mount .base-2jDfDU {\n  margin-top: 36px;\n}\n.theme-light #app-mount .sidebar-1tnWFu {\n  border-radius: 0;\n}\n\n@keyframes flash {\n  0% {\n    box-shadow: 0 2px 10px rgba(237, 66, 69, 0.2), 0 0 0 2px rgba(237, 65, 68, 0.1);\n  }\n  70% {\n    box-shadow: 0 0 20px 15px rgba(237, 66, 69, 0.1), 0 0 0 6px rgba(237, 65, 68, 0.1);\n  }\n  100% {\n    box-shadow: 0 0 20px 15px rgba(237, 66, 69, 0), 0 0 0 6px rgba(237, 65, 68, 0.1);\n  }\n}\n#app-mount .scrollerBase-_bVAAt.thin-31rlnD::-webkit-scrollbar-thumb {\n  background-color: var(--scroller-thumb);\n}\n#app-mount .scrollerBase-_bVAAt.auto-2K3UW5::-webkit-scrollbar-thumb {\n  background-color: var(--scroller-thumb);\n}\n#app-mount .scrollerBase-_bVAAt.auto-2K3UW5::-webkit-scrollbar-track {\n  background-color: var(--scroller-track);\n}\n\n.titleBar-1it3bQ.typeWindows-2-g3UY::after {\n  content: "";\n  position: absolute;\n  pointer-events: none;\n  background: url(\'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="moon" class="svg-inline--fa fa-moon fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%236b6b6b" d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"></path></svg>\') center/100% no-repeat;\n  width: 16px;\n  height: 16px;\n  left: 5px;\n  top: 4px;\n}\n.titleBar-1it3bQ .wordmarkWindows-2dq6rw {\n  margin-left: 13px;\n  color: #6b6b6b;\n}\n\n#app-mount .container-2o3qEW,\n#app-mount .membersWrap-3NUR2t,\n#app-mount .members-3WRCEx,\n#app-mount .members-3WRCEx > div {\n  background-color: var(--background-primary);\n}\n\n#app-mount .messageListItem-ZZ7v6g:hover {\n  background-color: rgba(255, 255, 255, 0.03);\n}\n#app-mount .wrapperAudio-1Bzv_Z,\n#app-mount .textContainer-36wgKK,\n#app-mount .footer-GXWBBp {\n  border-color: var(--background-secondary);\n}\n#app-mount .wrapperAudio-1Bzv_Z .mediaBarWrapper-33h1oY,\n#app-mount .wrapperAudio-1Bzv_Z .mediaBarWrapper-33h1oY:after,\n#app-mount .wrapperAudio-1Bzv_Z .mediaBarWrapper-33h1oY:before {\n  background-color: var(--background-secondary);\n}\n#app-mount .wrapperAudio-1Bzv_Z .buffer-3eVqKK,\n#app-mount .wrapperAudio-1Bzv_Z .buffer-3eVqKK:after,\n#app-mount .wrapperAudio-1Bzv_Z .buffer-3eVqKK:before {\n  background-color: #3a3a3a !important;\n}\n#app-mount .guildIconImage-74OdmM {\n  background-color: var(--background-secondary);\n}\n#app-mount .wrapper-2vIMkT {\n  background-color: var(--background-secondary);\n}\n\n#app-mount .callContainer-BGIngG {\n  background-color: var(--background-primary);\n}\n#app-mount .callContainer-BGIngG .scroller-35tvpe,\n#app-mount .callContainer-BGIngG .container-3r7mfc,\n#app-mount .callContainer-BGIngG .participants-3hk3ND,\n#app-mount .callContainer-BGIngG .rowContainer-jDvyA4 {\n  background-color: var(--background-primary);\n}\n#app-mount .callContainer-BGIngG .tileContainer-Os085F {\n  background-color: var(--background-primary);\n}\n#app-mount .callContainer-BGIngG .tileContainer-Os085F:hover {\n  background-color: var(--background-secondary);\n}\n#app-mount .callContainer-BGIngG .divider-vv_iHh,\n#app-mount .callContainer-BGIngG .separator-3FDGQ4 {\n  background-color: var(--background-secondary);\n  border-color: var(--background-secondary);\n}\n#app-mount .callContainer-BGIngG .eventPrompt-3DZIoO,\n#app-mount .callContainer-BGIngG .container-1IyjjY {\n  background-color: var(--background-secondary);\n}\n#app-mount .callContainer-BGIngG .eventPrompt-3DZIoO:hover,\n#app-mount .callContainer-BGIngG .container-1IyjjY:hover {\n  background-color: var(--background-tertiary);\n}\n#app-mount .callContainer-BGIngG .iconBackground-3qSXiM {\n  background-color: var(--background-secondary-alt);\n}\n\n#app-mount .container-1RZJZM .input-2g-os5,\n#app-mount .container-1RZJZM .channelTextAreaInner-ITp5kW {\n  border-color: var(--background-secondary);\n  background-color: var(--background-tertiary);\n}\n\n#app-mount .folder-241Joy .folderIconWrapper-1oRIZr:hover {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .folder-241Joy .noIcon-3gSX9V {\n  background-color: var(--background-secondary-alt);\n}\n\n.wrapper-1_HaEi .childWrapper-1j_1ub,\n.wrapper-1_HaEi [class=circleIconButton-1VxDrg] {\n  background-color: var(--background-secondary-alt);\n}\n\n#app-mount .keyboardShortcutsModal-2CRmCm {\n  background-color: var(--background-secondary);\n}\n#app-mount .keybindShortcut-3zF1P9 span {\n  box-shadow: inset 0 -4px 0 var(--background-tertiary);\n  border-color: var(--background-tertiary);\n  background-color: var(--background-secondary-alt);\n}\n\n#app-mount .root-g14mjS {\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n  background-color: var(--background-secondary);\n}\n#app-mount .root-g14mjS .footer-31IekZ {\n  box-shadow: none;\n  background-color: var(--background-tertiary);\n}\n#app-mount .root-g14mjS .input-3r5zZY {\n  background-color: var(--background-tertiary);\n}\n#app-mount .root-g14mjS .itemFilled-1cPbtg:hover {\n  background-color: var(--background-primary);\n}\n#app-mount .root-g14mjS .scroller-2GkvCq {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .root-g14mjS .reactionSelected-1aMb2K {\n  background-color: var(--background-modifier-selected);\n}\n#app-mount .root-g14mjS .container-KM8BU6,\n#app-mount .root-g14mjS .reactors-1VXca7 {\n  background-color: var(--background-secondary);\n}\n#app-mount .root-g14mjS .reactorDefault-3GSyaV {\n  box-shadow: inset 0 -1px 0 var(--background-secondary-alt);\n}\n#app-mount .root-g14mjS .card-m7VgZ8,\n#app-mount .root-g14mjS .lookFilled-1GseHa.select-1Ia3hD {\n  border-color: var(--background-primary) !important;\n  background-color: var(--background-tertiary) !important;\n}\n#app-mount .root-g14mjS .qualitySettingsContainer-2LjkfM {\n  border-color: var(--background-tertiary);\n}\n#app-mount .root-g14mjS .item-2OyinQ {\n  border-color: var(--background-primary);\n}\n#app-mount .root-g14mjS .item-2OyinQ:not(.selectorButtonSelected-3cQUnj, .selectorButtonSelected-1VZ6hz) {\n  background-color: var(--background-tertiary);\n}\n#app-mount .root-g14mjS .message-G6O-Wv {\n  box-shadow: none;\n  background-color: var(--background-tertiary);\n}\n#app-mount .root-g14mjS .optionContainer-yOpaLq {\n  background-color: var(--background-tertiary);\n}\n#app-mount .root-g14mjS .optionContainer-yOpaLq:hover {\n  background-color: var(--background-primary);\n}\n#app-mount .root-g14mjS .previewLight-IOzFhi {\n  display: none;\n}\n#app-mount .root-g14mjS .previewDark-3Xp3UB {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .root-g14mjS .perks-2IIbWQ {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .root-g14mjS .eventCard-2ZL9GD,\n#app-mount .root-g14mjS .childButton-3o_dlg {\n  background-color: var(--background-tertiary);\n}\n#app-mount .root-g14mjS .eventCard-2ZL9GD:hover,\n#app-mount .root-g14mjS .childButton-3o_dlg:hover {\n  background-color: var(--background-primary);\n}\n\nbody #app-mount .theme-light .root-g14mjS {\n  --background-primary: black;\n  --background-secondary: rgb(20, 20, 20);\n  --background-secondary-alt: rgb(28, 28, 28);\n  --background-tertiary: rgb(10, 10, 10);\n  --header-primary: #fff;\n  --header-secondary: #b9bbbe;\n  --text-normal: #dcddde;\n  --text-muted: #969696;\n  background-color: var(--background-secondary);\n}\nbody #app-mount .theme-light .root-g14mjS .footer-31IekZ {\n  box-shadow: none;\n  background-color: var(--background-tertiary);\n}\nbody #app-mount .theme-light .root-g14mjS .container-x8Y1ix,\nbody #app-mount .theme-light .root-g14mjS .rowContainer-3t7486 {\n  background-color: var(--background-tertiary);\n}\nbody #app-mount .theme-light .root-g14mjS .container-x8Y1ix:hover,\nbody #app-mount .theme-light .root-g14mjS .rowContainer-3t7486:hover {\n  background-color: var(--background-primary);\n}\nbody #app-mount .theme-light .root-g14mjS .lookLink-15mFoz.colorPrimary-2AuQVo,\nbody #app-mount .theme-light .root-g14mjS .lookBlank-21BCro {\n  color: var(--header-primary);\n}\nbody #app-mount .theme-light .root-g14mjS .input-2g-os5 {\n  background-color: var(--background-tertiary);\n  border-color: var(--background-secondary);\n}\nbody #app-mount .theme-light .root-g14mjS .formTitle-2YQyhj {\n  color: var(--header-primary);\n}\nbody #app-mount .theme-light .root-g14mjS .sampleLink-5BWNy9 {\n  color: var(--text-muted);\n}\n\n#app-mount .perksModal-CLcR1c {\n  background-color: var(--background-primary);\n}\n#app-mount .perksModal-CLcR1c .tierMarkerBackground-G8FoN4 {\n  background-color: var(--background-primary);\n}\n#app-mount .perksModal-CLcR1c .tierHeaderLocked-3ItHYn {\n  background-color: var(--background-secondary);\n}\n#app-mount .perksModal-CLcR1c .tierBody-3ju-rc {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .perksModal-CLcR1c .perk-19D_HN {\n  background-color: var(--background-secondary);\n}\n\n#app-mount .pageWrapper-2PwDoS {\n  background-color: var(--background-primary);\n}\n\n#app-mount .container-2cd8Mz {\n  background-color: var(--background-primary);\n}\n#app-mount .container-2cd8Mz .container-2oNtJn {\n  background-color: var(--background-secondary);\n}\n#app-mount .container-2cd8Mz .wrapper-2RrXDg {\n  border-color: var(--background-tertiary);\n  background-color: var(--background-tertiary);\n}\n#app-mount .container-2cd8Mz .wrapper-2RrXDg:hover {\n  border-color: var(--background-secondary);\n  background-color: var(--background-secondary);\n}\n#app-mount .container-2cd8Mz .wrapper-2RrXDg:hover .section-3G9aLW {\n  background-color: var(--background-tertiary);\n}\n#app-mount .container-2cd8Mz .peopleListItem-u6dGxF:hover {\n  background-color: var(--background-tertiary);\n}\n#app-mount .container-2cd8Mz .peopleListItem-u6dGxF:hover .actionButton-3-B2x- {\n  background-color: var(--background-primary);\n}\n#app-mount .container-2cd8Mz .addFriendInputWrapper-kkoSV9 {\n  background-color: var(--background-secondary);\n}\n\n#app-mount .defaultIndicator-1AxErs {\n  background-color: var(--background-accent);\n}\n#app-mount .installationPath-2PbaRC {\n  box-shadow: 0 1px 0 0 var(--background-secondary);\n}\n#app-mount .hiddenLibraryApplication-lfw1ab {\n  border-bottom-color: var(--background-secondary);\n}\n#app-mount .hiddenLibraryApplication-lfw1ab::before {\n  border-color: var(--background-secondary);\n  background-color: var(--background-secondary);\n}\n\n#app-mount .feature-2IUcBI {\n  background-color: var(--background-secondary);\n}\n\n#app-mount .autocomplete-3NRXG8 {\n  background-color: var(--background-tertiary);\n}\n#app-mount .autocomplete-3NRXG8 .selected-3H3-RC {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .autocomplete-3NRXG8 .categoryHeader-OpJ1Ly {\n  background-color: var(--background-tertiary);\n}\n#app-mount .autocomplete-3NRXG8 .wrapper-3z7DuG,\n#app-mount .autocomplete-3NRXG8 .wrapper-22rqw6 {\n  background-color: var(--background-tertiary);\n}\n#app-mount .autocomplete-3NRXG8 .selected-3B2w1z,\n#app-mount .autocomplete-3NRXG8 .selected-3B2w1z:hover {\n  background-color: var(--background-secondary-alt);\n}\n\n#app-mount .contentWrapper-3vHNP2,\n#app-mount .emojiPicker-6YCk8a {\n  background-color: var(--background-tertiary);\n}\n#app-mount .contentWrapper-3vHNP2 .wrapper-1NNaWG,\n#app-mount .emojiPicker-6YCk8a .wrapper-1NNaWG {\n  background-color: var(--background-tertiary);\n}\n#app-mount .contentWrapper-3vHNP2 .categoryItemDefaultCategorySelected-2YeRUu,\n#app-mount .contentWrapper-3vHNP2 .stickerCategoryGenericSelected-DnO2K8,\n#app-mount .contentWrapper-3vHNP2 .categoryItemDefaultCategorySelected-2YeRUu:hover,\n#app-mount .contentWrapper-3vHNP2 .stickerCategoryGenericSelected-DnO2K8:hover,\n#app-mount .contentWrapper-3vHNP2 .stickerCategoryGeneric-29JiZ2:hover,\n#app-mount .emojiPicker-6YCk8a .categoryItemDefaultCategorySelected-2YeRUu,\n#app-mount .emojiPicker-6YCk8a .stickerCategoryGenericSelected-DnO2K8,\n#app-mount .emojiPicker-6YCk8a .categoryItemDefaultCategorySelected-2YeRUu:hover,\n#app-mount .emojiPicker-6YCk8a .stickerCategoryGenericSelected-DnO2K8:hover,\n#app-mount .emojiPicker-6YCk8a .stickerCategoryGeneric-29JiZ2:hover {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .contentWrapper-3vHNP2 .inspector-DFKXwB,\n#app-mount .emojiPicker-6YCk8a .inspector-DFKXwB {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .contentWrapper-3vHNP2 .navButtonActive-1EqC5l,\n#app-mount .emojiPicker-6YCk8a .navButtonActive-1EqC5l {\n  background-color: var(--background-modifier-selected);\n}\n#app-mount .contentWrapper-3vHNP2 .container-2oNtJn,\n#app-mount .contentWrapper-3vHNP2 .container-1SX9VC,\n#app-mount .emojiPicker-6YCk8a .container-2oNtJn,\n#app-mount .emojiPicker-6YCk8a .container-1SX9VC {\n  background-color: var(--searcharea-background);\n}\n#app-mount .contentWrapper-3vHNP2 .upsell-3B1lnN,\n#app-mount .emojiPicker-6YCk8a .upsell-3B1lnN {\n  background-color: var(--background-secondary);\n}\n#app-mount .wrapper-22rqw6 {\n  background-color: var(--background-secondary);\n}\n\n#app-mount .tertiary-1e-lAP,\n#app-mount .primary-38Hs-h:hover:not(.disabled-184-il),\n#app-mount .secondary-2bzKEX {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .tertiary-1e-lAP:hover,\n#app-mount .primary-38Hs-h:hover:not(.disabled-184-il):hover,\n#app-mount .secondary-2bzKEX:hover {\n  background-color: var(--background-primary);\n}\n#app-mount .jumpButton-1V_1FA {\n  background-color: var(--background-secondary);\n}\n#app-mount .messageContainer-3VTXBC,\n#app-mount .messages-23can0 {\n  background-color: var(--background-tertiary);\n}\n#app-mount .messages-23can0 .content-3spvdd {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .tutorial-Nb3Zz5 {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .tutorialIcon-25VF3Q {\n  background-color: var(--background-tertiary);\n}\n\n#app-mount .messageGroupWrapper-1jf_7C {\n  border-color: var(--background-tertiary);\n  background-color: var(--background-tertiary);\n}\n\n#app-mount .layer-2aCOJ3 .header-1w9Q93 + div {\n  background-color: var(--background-secondary);\n}\n#app-mount .layer-2aCOJ3 .tab-TRrPC8.active-1grPyy {\n  background-color: var(--background-modifier-selected);\n}\n#app-mount .lookFilled-1GseHa.select-1Ia3hD {\n  border-color: var(--background-secondary);\n  background-color: var(--background-tertiary);\n}\n#app-mount .overflowRolesPopout-1Puiuq {\n  background-color: var(--background-tertiary);\n}\n#app-mount .container-2rzKKA {\n  background-color: var(--background-tertiary);\n  border-color: var(--background-tertiary);\n}\n#app-mount .container-2rzKKA:hover {\n  border-color: var(--background-secondary);\n}\n\n#app-mount .searchResult-O9NDji {\n  background-color: var(--background-tertiary);\n}\n#app-mount .button-cfOvv- {\n  background-color: var(--background-secondary);\n}\n#app-mount .searchAnswer-23w-CH,\n#app-mount .searchFilter-2UfsDk {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .container-2McqkF {\n  box-shadow: 0 0 0 1px var(--background-tertiary), 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n  background-color: var(--background-tertiary);\n}\n#app-mount .container-2McqkF .focused-2FU0YH {\n  background-color: var(--background-tertiary);\n}\n#app-mount .container-2McqkF .option-ayUoaq:hover {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .container-2McqkF .option-ayUoaq::after {\n  background: none;\n}\n#app-mount .container-2McqkF .option-ayUoaq[aria-selected=true] {\n  background-color: var(--background-secondary);\n}\n#app-mount .calendarPicker-sDhzdi .react-datepicker,\n#app-mount .calendarPicker-sDhzdi .react-datepicker__header {\n  background-color: var(--background-tertiary);\n}\n#app-mount .calendarPicker-sDhzdi .react-datepicker__navigation.react-datepicker__navigation--next,\n#app-mount .calendarPicker-sDhzdi .react-datepicker__navigation.react-datepicker__navigation--previous {\n  background-color: var(--background-secondary);\n}\n#app-mount .calendarPicker-sDhzdi .react-datepicker__day--disabled,\n#app-mount .calendarPicker-sDhzdi .react-datepicker__day--outside-month,\n#app-mount .calendarPicker-sDhzdi .react-datepicker__day.react-datepicker__day--disabled,\n#app-mount .calendarPicker-sDhzdi .react-datepicker__day.react-datepicker__day--disabled:hover {\n  background-color: var(--background-secondary);\n}\n#app-mount .calendarPicker-sDhzdi .react-datepicker__day,\n#app-mount .calendarPicker-sDhzdi .react-datepicker__day:last-of-type {\n  border-color: var(--background-secondary-alt);\n}\n\n#app-mount .userPopout-2j1gM4 {\n  background-color: var(--background-tertiary);\n}\n#app-mount .userPopout-2j1gM4 .avatar-2Vndt_ {\n  border-color: var(--background-tertiary);\n  background-color: var(--background-tertiary);\n}\n#app-mount .userPopout-2j1gM4 .bodyInnerWrapper-2bQs1k,\n#app-mount .userPopout-2j1gM4 .footer-3naVBw {\n  background-color: var(--background-tertiary);\n}\n#app-mount .userPopout-2j1gM4 .input-2z42oC {\n  background-color: var(--background-secondary);\n}\n\n#app-mount .container-1NXEtd .selected-1GtAC5 .header-3OsQeK,\n#app-mount .container-1NXEtd .header-3OsQeK:hover {\n  background-color: var(--background-secondary);\n}\n#app-mount .container-1NXEtd .hasBanner-2IrYih .header-3OsQeK {\n  background-color: transparent;\n}\n#app-mount .container-1NXEtd .channelNotice-K4UfZY {\n  border-color: var(--background-secondary);\n}\n#app-mount .container-1NXEtd .wrapper-2fEmwW .users-2JoyGL {\n  background-color: var(--background-secondary-alt);\n}\n#app-mount .container-1NXEtd .wrapper-2fEmwW .total-1c5KCN {\n  background-color: var(--background-secondary);\n}\n#app-mount .container-1NXEtd .wrapper-2fEmwW .total-1c5KCN::after {\n  border-right-color: var(--background-secondary);\n}\n\n#app-mount .scroller-WSmht3 {\n  background-color: var(--background-primary);\n}\n\n#app-mount .content-1SgpWY .sidebar-1tnWFu {\n  background-color: var(--background-primary);\n}\n#app-mount .content-1SgpWY .sidebar-1tnWFu > nav {\n  background-color: var(--background-primary);\n}\n\n#app-mount .panels-3wFtMD {\n  background-color: var(--background-primary);\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("AMOLED-Cord",["",{type:"text-and-color",text:"Scroller Thumb",oninput:function(n){document.body.style.setProperty("--scroller-thumb",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--scroller-thumb")||"rgb(30, 30, 30)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Scroller Track",oninput:function(n){document.body.style.setProperty("--scroller-track",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--scroller-track")||"rgb(10, 10, 10)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Background Modifier RGB",oninput:function(n){document.body.style.setProperty("--background-modifier-rgb",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-modifier-rgb")||"60, 60, 60";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o.remove();try{goosemodScope.settings.removeItem("AMOLED-Cord")}catch(r){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--scroller-thumb",document.body.style.getPropertyValue("--scroller-thumb")],["--scroller-track",document.body.style.getPropertyValue("--scroller-track")],["--background-modifier-rgb",document.body.style.getPropertyValue("--background-modifier-rgb")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=r(regeneratorRuntime.mark(function n(r){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(r){return n.apply(this,arguments)}}()}};exports.default=a;
},{}]},{},["index.js"], null);parcelRequire('index.js').default