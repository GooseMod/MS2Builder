parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,o,e,t,r,a,i){try{var l=n[a](i),c=l.value}catch(d){return void e(d)}l.done?o(c):Promise.resolve(c).then(t,r)}function o(o){return function(){var e=this,t=arguments;return new Promise(function(r,a){var i=o.apply(e,t);function l(o){n(i,r,a,l,c,"next",o)}function c(o){n(i,r,a,l,c,"throw",o)}l(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={goosemodHandlers:{onImport:function(){var n=o(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode('@import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/monokai-sublime.min.css");\n@import url("https://cainy-a.github.io/SmolCord/smol.theme.css");\n@import url("https://cdn.jsdelivr.net/gh/yellowsink/usrbg@fix_profile/snippets/modals.css");\n@import url("https://cdn.jsdelivr.net/gh/yellowsink/usrbg@popout-fix/snippets/userPopouts.css");\n@import url("https://cdn.jsdelivr.net/gh/yellowsink/usrbg@master/dist/usrbg.cs");\n[vz-user-id="435026627907420161"] .headerName-fajvi9::after,\n[vz-user-id="435026627907420161"] .headerTagNoNickname-ENx6no::after {\n  content: "";\n  display: inline-block;\n  background: url("vz-theme://Diskai/assets/logo.png");\n  background-size: contain;\n  background-position: center;\n  width: 1em;\n  height: 1em;\n  margin-left: 0.5rem;\n  border-radius: 0.3em;\n}\n\n/*******************************\\\n|          compat with          |\n|          other themes         |\n\\*******************************/\n.avatarWrapper-2yR4wp {\n  --avatar-bottom: 5px;\n}\n\n/* Monokai Highlight.js because of course */\n.details-2fkb7l, .badgeList-HtCfKd, .menu-319q29 {\n  margin-top: 4px;\n}\n\n/*\nfunction getDiskaiPluginHook(hookName) {\n    return getComputedStyle(document.getElementById("app-mount")) // get :root {}\n        .getPropertyValue(`--diskai-hook-'.concat(hookName,'`) // get the hook\n        .trim(); // remove leading whitespace\n}\n\nconst diskaiCompactModeEnabled = getDiskaiPluginHook("compact") == 1;\nconst diskaiTransitionsEnabled = getDiskaiPluginHook("transitions") != 0;\nconst diskaiTransitionDuration = getDiskaiPluginHook("transitions");\n*/\n:root {\n  --diskai-hook-compact: 1;\n  --diskai-hook-transitions: 0.2s;\n}\n\n:root {\n  /*******************************\\\n  |            Colours            |\n  \\*******************************/\n  /* Monokai colours */\n  --monokai-black: #1a1a1a;\n  --monokai-red: #f4005f;\n  --monokai-green: #98e024;\n  --monokai-yellow: #fa8419;\n  --monokai-purple: #9d65ff;\n  --monokai-cyan: #58d1eb;\n  --monokai-white: #c4c5b5;\n  --monokai-bright-black: #625e4c;\n  --monokai-bright-yellow: #e0d561;\n  --monokai-bright-white: #f6f6ef;\n  --monokai-background: #1a1a1a;\n  --monokai-foreground: #bfbfba;\n  /* Diskai colours */\n  --diskai-pink: #ff4d91;\n  --diskai-light-pink: #ffb3d0;\n  --diskai-lilac: #b26bff;\n  --diskai-light-blue: #76efdf;\n  --diskai-muted-purple: #9567e4;\n  --diskai-turquoise: #0bda97;\n  --diskai-dark-green: #79b814;\n  --diskai-muted-green: #2e8d02;\n  --diskai-muted-white: #888;\n  /*******************************\\\n  |        VERY IMPORTANT         |\n  |    CUSTOMISATION VARIABLES    |\n  \\*******************************/\n  --diskai-accent-colour: var(--diskai-dark-green);\n  --diskai-accent-contrast: var(--text-normal);\n  --diskai-mention-colour: var(--monokai-purple);\n  --diskai-mention-text: var(--monokai-bright-white);\n  /*******************************\\\n  |      User Status Colours      |\n  \\*******************************/\n  --rs-online-color: var(--monokai-green) !important;\n  --rs-idle-color: var(--monokai-yellow) !important;\n  --rs-dnd-color: var(--monokai-red) !important;\n  --rs-offline-color: var(--diskai-muted-white) !important;\n  --rs-streaming-color: var(--monokai-purple) !important;\n  --rs-invisible-color: var(--diskai-muted-white) !important;\n}\n\n.theme-dark {\n  /*******************************\\\n  |          BG colours           |\n  \\*******************************/\n  /* main BG colours */\n  --background-primary: var(--monokai-black);\n  --background-secondary: #252525;\n  --background-secondary-alt: var(--background-secondary);\n  --background-mobile-secondary: var(--background-secondary);\n  --background-tertiary: #2b2b2b;\n  --background-accent: #2f2f2f;\n  --background-modifier-accent: #ffffff18;\n  /* textarea colours */\n  --channeltextarea-background: #303030;\n  /* fix quick switcher textarea colour */\n  --deprecated-quickswitcher-input-background: var(\n  \t--channeltextarea-background\n  );\n  /* Text colours */\n  /* main Text colours */\n  --text-normal: var(--monokai-bright-white);\n  --text-muted: var(--diskai-muted-white);\n  --text-link: var(--diskai-light-blue);\n  /* channels */\n  --channels-default: var(--text-muted);\n  --interactive-active: var(--diskai-accent-colour);\n  --interactive-muted: #555;\n  /* headers */\n  --header-primary: var(--diskai-accent-colour);\n  --header-secondary: #bbb;\n  /* Wait this is actually the stock value */\n  /* Controls */\n  --diskai-control-radio-dot: var(--monokai-purple);\n  /* Radio button */\n  --diskai-control-checkbox-checked: var(--monokai-purple);\n  /* Checked checkbox */\n  --diskai-control-slider-bar: var(--monokai-purple);\n  /* Slider bar */\n  --diskai-control-button: var(--monokai-purple);\n  /* Button */\n  --diskai-control-button-muted: var(--diskai-muted-purple);\n  /* Muted Button */\n  --diskai-control-button-yellow: var(--monokai-yellow);\n  /* Yellow Button */\n  --radio-group-dot-foreground: var(--diskai-control-radio-dot);\n  /* Radio button dot */\n  /* Misc */\n  --background-mentioned: #fa84190d;\n  --background-mentioned-hover: #fd891c14;\n}\n\n.theme-light {\n  /*******************************\\\n  |          BG colours           |\n  \\*******************************/\n  /* main BG colours */\n  --background-primary: var(--monokai-bright-white);\n  --background-secondary: #ddddd5;\n  --background-mobile-secondary: var(--background-secondary);\n  --background-tertiary: var(--monokai-foreground);\n  --background-accent: #bfbfbf;\n  /* --background-modifier-accent: #ffffff18; */\n  /* textarea colours */\n  --channeltextarea-background: #ccccce;\n  /* fix quick switcher textarea colour */\n  --deprecated-quickswitcher-input-background: var(\n  \t--channeltextarea-background\n  );\n  /* Text colours */\n  /* main Text colours */\n  --text-normal: var(--monokai-black);\n  --text-muted: var(--monokai-bright-black);\n  --text-link: #2775bd;\n  /* channels */\n  --channels-default: var(--text-muted);\n  --interactive-active: var(--diskai-accent-colour);\n  --interactive-muted: #ccc;\n  /* headers */\n  --header-primary: var(--diskai-accent-colour);\n  --header-secondary: #666;\n  /* Wait this is actually the stock value */\n  /* Controls */\n  --diskai-control-radio-dot: var(--monokai-purple);\n  /* Radio button */\n  --diskai-control-checkbox-checked: var(--monokai-purple);\n  /* Checked checkbox */\n  --diskai-control-slider-bar: var(--monokai-purple);\n  /* Slider bar */\n  --diskai-control-button: var(--monokai-purple);\n  /* Button */\n  --diskai-control-button-muted: var(--diskai-muted-purple);\n  /* Muted Button */\n  --diskai-control-button-yellow: var(--monokai-yellow);\n  /* Yellow Button */\n  --radio-group-dot-foreground: var(--diskai-control-radio-dot);\n  /* Radio button dot */\n  /* Misc */\n  --background-mentioned: #fa84190d;\n  --background-mentioned-hover: #fd891c14;\n}\n\n/*******************************\\\n|     Bits discord decided      |\n|   not to use variables for    |\n\\*******************************/\n.container-1D34oG {\n  background-color: var(--background-accent) !important;\n}\n\n/*******************************\\\n|            Header             |\n\\*******************************/\n.container-1r6BKw.themed-ANHk51 {\n  background-color: var(--background-secondary);\n}\n\n.children-19S4PO::after {\n  display: none;\n}\n\n/* Channel hashtag icon */\n.children-19S4PO .iconWrapper-2OrFZ1 path[fill=currentColor] {\n  fill: var(--diskai-accent-colour);\n}\n\n.iconWrapper-2OrFZ1.selected-1GqIat:hover path {\n  fill: var(--diskai-accent-colour);\n}\n\n.iconWrapper-2OrFZ1.selected-1GqIat:hover {\n  filter: brightness(1.2);\n}\n\n/*******************************\\\n|            Modals             |\n\\*******************************/\n/* Upload modal */\n.uploadModal-2ifh8j {\n  background-color: var(--background-secondary) !important;\n}\n\n.footer-3mqk7D {\n  background-color: var(--background-primary) !important;\n}\n\n/* Keyshortcuts modal */\n.keyboardShortcutsModal-3piNz7 {\n  background-color: var(--background-primary) !important;\n}\n\n/* Delete modal */\n.root-1gCeng {\n  background-color: var(--background-secondary) !important;\n}\n\n.message-2qRu38 {\n  background-color: var(--background-tertiary) !important;\n}\n\n/* stop message being undiscernable from BG */\n.footer-2gL1pp {\n  background-color: var(--background-primary) !important;\n}\n\n/* Autocomplete */\n.autocomplete-1vrmpx {\n  background-color: var(--background-secondary) !important;\n}\n\n.categoryHeader-O1zU94,\n.selected-1Tbx07 {\n  background-color: var(--background-tertiary) !important;\n}\n\n/* Quick Switcher "PROTIP" */\n.inline-136HKr .pro-1T8RK7 {\n  color: var(--diskai-accent-colour) !important;\n}\n\n/* TODO: figure out how to theme the search popup: https://canary.discord.com/channels/538759280057122817/755015869914152981/805079836720234526 */\n.container-3ayLPN {\n  background-color: var(--background-secondary) !important;\n}\n\n.option-96V44q::after {\n  display: none;\n}\n\n/* Notification bell strikethrough */\n.strikethrough-3Wiitd {\n  color: var(--monokai-red);\n}\n\n/*******************************\\\n|           Settings            |\n\\*******************************/\n/* settings close icon */\n.keybind-KpFkfr {\n  color: var(--monokai-red) !important;\n}\n\n.closeButton-1tv5uR {\n  border-color: var(--monokai-red) !important;\n}\n\n/* settings remove text */\n.lookLink-9FtZy-.colorPrimary-3b3xI6 {\n  color: var(--monokai-red);\n}\n\n/* Currently speaking bar */\n.userSettingsVoice-iwdUCU .sliderBar-3DezvM.speaking-2bFhO4 {\n  background-color: var(--monokai-green);\n}\n\n/* Changelog text */\n.improved-1NJK-y {\n  color: var(--monokai-purple);\n}\n\n.progress-YsDrV- {\n  color: var(--monokai-yellow);\n}\n\n/* Hypesquad banners */\n.membershipDialogHouse1-3KhKE- {\n  /* Shoutouts to Remko#0999 for giving me the Bravery CSS class */\n  background-color: var(--monokai-purple);\n}\n\n.membershipDialogHouse2-35h9SY {\n  /* Shoutouts to CastIce#3081 for giving me the Brilliance CSS class */\n  background-color: var(--diskai-pink);\n}\n\n.membershipDialogHouse3-15OBIQ {\n  /* Balance */\n  background-color: var(--diskai-turquoise);\n}\n\n.sidebarRegion-VFTUkN {\n  flex: 0;\n}\n\n.sidebarRegionScroller-3MXcoP {\n  padding-left: 5rem;\n}\n\n.contentColumn-2hrIYH {\n  max-width: 90rem;\n}\n\n.hero-EvfTTA {\n  max-width: unset;\n}\n\n@media (max-width: 1800px) {\n  .featureGrid-3-fNl- {\n    grid-template-columns: repeat(3, 206px);\n  }\n}\n.addGamePopout-2RY8Ju {\n  background-color: var(--background-secondary) !important;\n}\n\n.select-2TCrqx {\n  background-color: var(--background-primary);\n}\n\n.css-3vaxre-menu {\n  background-color: var(--background-tertiary);\n}\n\n.notDetected-33MY4s {\n  background-color: var(--background-tertiary) !important;\n}\n\n.nowPlaying-284llR {\n  background-color: var(--diskai-muted-green) !important;\n}\n\n/* red outline settings buttons */\n.lookOutlined-3sRXeN.colorRed-1TFJan {\n  color: var(--monokai-red);\n  border-color: var(--monokai-red);\n}\n\n/* Nitro settings button */\n[aria-controls="Discord Nitro-tab"] {\n  color: var(--monokai-purple) !important;\n}\n\n[aria-controls="Discord Nitro-tab"]:hover,\n[aria-controls="Discord Nitro-tab"][aria-selected=true] {\n  color: var(--interactive-hover) !important;\n  background-color: var(--monokai-purple) !important;\n}\n\n/* Filled buttons*/\n.lookFilled-1Gx00P {\n  color: var(--text-normal) !important;\n}\n\n.lookFilled-1Gx00P.colorBrand-3pXr91 {\n  background-color: var(--diskai-control-button) !important;\n}\n\n.lookFilled-1Gx00P.colorBrand-3pXr91:disabled {\n  background-color: var(--diskai-control-button-muted) !important;\n}\n\n.lookFilled-1Gx00P.colorYellow-2JqYwt {\n  background-color: var(--diskai-control-button-yellow) !important;\n}\n\n.lookFilled-1Gx00P.colorRed-1TFJan {\n  background-color: var(--monokai-red) !important;\n}\n\n.lookFilled-1Gx00P.colorGreen-29iAKY {\n  background-color: var(--diskai-dark-green) !important;\n}\n\n.lookFilled-1Gx00P.colorBrand-3pXr91:hover,\n.lookFilled-1Gx00P.colorBrand-3pXr91:disabled:hover,\n.lookFilled-1Gx00P.colorYellow-2JqYwt:hover,\n.lookFilled-1Gx00P.colorRed-1TFJan:hover,\n.lookFilled-1Gx00P.colorGreen-29iAKY:hover {\n  filter: brightness(0.85);\n}\n\n.lookFilled-1Gx00P,\n.lookInverted-2D7oAl {\n  transition: background-color 0.17s ease, color 0.17s ease, filter 0.17s ease;\n}\n\n/* Inverted buttons */\n.lookInverted-2D7oAl.colorYellow-2JqYwt {\n  color: var(--monokai-yellow);\n  background-color: var(--monokai-white);\n}\n\n/* Blurple sliders */\n.barFill-23-gu- {\n  background-color: var(--diskai-control-slider-bar);\n}\n\n/* Checkboxes */\n.checkbox-1ix_J3.checked-3_4uQ9 {\n  background-color: var(--diskai-control-checkbox-checked) !important;\n  border-color: var(--diskai-control-checkbox-checked) !important;\n}\n\n.colorDefault-2K3EoJ .checkbox-3s5GYZ,\n.colorDefault-2K3EoJ.focused-3afm-j .check-1JyqgN {\n  color: var(--diskai-control-checkbox-checked);\n}\n\n.colorDefault-2K3EoJ.focused-3afm-j .checkbox-3s5GYZ,\n.colorDefault-2K3EoJ:not(.focused-3afm-j) .check-1JyqgN {\n  color: var(--diskai-accent-contrast) !important;\n}\n\n/* Switches */\n.container-3auIfb[style="opacity: 1; background-color: rgb(67, 181, 129);"] {\n  background-color: var(--monokai-green) !important;\n}\n\n/* Beta text */\n.beta-3smTDE {\n  color: var(--monokai-red);\n}\n\n/* Nitro Features */\n.featureEmoji-3pTtR2 .featureTitle-W5O6R1 {\n  color: var(--monokai-yellow);\n}\n\n.featureProfile-tTo0C- .featureTitle-W5O6R1 {\n  color: var(--monokai-green);\n}\n\n.featurePremiumGuild-2KpCr6 .featureTitle-W5O6R1 {\n  color: var(--monokai-cyan);\n}\n\n.featureBadge-3ZA-Ca .featureTitle-W5O6R1 {\n  color: var(--diskai-light-pink);\n}\n\n.featureUploadSize-2CAVFL .featureTitle-W5O6R1 {\n  color: var(--diskai-lilac);\n}\n\n.featureGoLive-30cvVw .featureTitle-W5O6R1 {\n  color: var(--diskai-pink);\n}\n\n/* Notification Settings */\n.wrapper-3jrx9n {\n  border-color: var(--monokai-purple);\n}\n\n.wrapper-3jrx9n.disabledSelected-2Kf0yZ {\n  border-color: var(--monokai-red);\n}\n\n.disabled-3I9jyo:hover {\n  color: var(--monokai-red);\n}\n\n.selected-mKYnfr.disabled-3I9jyo {\n  color: var(--monokai-red);\n}\n\n.option-n0icdO:hover {\n  background-color: var(--monokai-purple);\n}\n\n.selected-mKYnfr.option-n0icdO {\n  border-color: var(--monokai-purple);\n  background-color: var(--monokai-purple);\n}\n\n/* That damn close button */\n.closeButton-1tv5uR path {\n  fill: var(--monokai-red);\n}\n\n/* Yellow "reload required" banner in powercord updater */\n.cardWarning-2yPNAa {\n  background-color: var(--monokai-yellow);\n  border-color: var(--monokai-yellow);\n}\n\n.tipTitle-GL9qAt,\n.container-1r6BKw.themed-ANHk51 .anchor-3Z-8Bb:not([href="https://support.discord.com"]),\n.container-1r6BKw.themed-ANHk51 .anchor-3Z-8Bb:not([href="https://support.discord.com"]) path,\n.wordmark-2iDDfm path {\n  color: var(--diskai-accent-colour);\n}\n\n/* #channels and @mentions */\n.wrapper-3WhCwL {\n  color: var(--diskai-mention-colour);\n}\n\n.wrapper-3WhCwL:hover {\n  background-color: var(--diskai-mention-colour);\n  color: var(--diskai-mention-text) !important;\n}\n\n.wrapper-3WhCwL.mention.interactive:hover {\n  background-color: var(--diskai-mention-colour) !important;\n  border-radius: 3px;\n}\n\n/* Discord logo in top left */\n.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9,\n.wrapper-1BJsBx:hover .childWrapper-anI2G9 {\n  background-color: var(--diskai-accent-colour);\n  color: var(--diskai-accent-contrast);\n}\n\n/* Explore and Add server icons */\n.circleIconButton-1QV--U.selected-ugP_am {\n  background-color: var(--diskai-accent-colour);\n  color: var(--diskai-accent-contrast);\n}\n\n.circleIconButton-1QV--U.selected-ugP_am path {\n  fill: var(--diskai-accent-contrast);\n}\n\n.circleIconButton-1QV--U path {\n  fill: var(--diskai-accent-colour);\n}\n\n/* Explore selected category */\n.categoryItem-3zFJns.selectedCategoryItem-3X8ujp .itemInner-3gVXMG {\n  background-color: var(--diskai-accent-colour);\n  color: var(--diskai-accent-contrast);\n}\n\n/* Context menus */\n/* All buttons */\n.colorDefault-2K3EoJ.focused-3afm-j:not(.colorDanger-2qLCe1) {\n  background-color: var(--diskai-accent-colour);\n  color: var(--diskai-accent-contrast);\n}\n\n/* Invite to server */\n#guild-header-popout-invite-people.focused-3afm-j {\n  background-color: var(--monokai-purple);\n  color: var(--text-normal);\n}\n\n#guild-header-popout-invite-people:not(.focused-3afm-j) {\n  color: var(--monokai-purple);\n}\n\n#guild-header-popout-invite-people:not(.focused-3afm-j) path {\n  fill: var(--monokai-purple);\n}\n\n/* Nitro boots */\n#guild-header-popout-premium-subscribe.focused-3afm-j {\n  background-color: var(--diskai-pink);\n  color: var(--text-normal);\n}\n\n#guild-header-popout-premium-subscribe:not(.focused-3afm-j) path {\n  fill: var(--diskai-pink);\n}\n\n/* Danger actions => delete message */\n.colorDanger-2qLCe1,\n.colorDanger-2qLCe1 .checkbox-3s5GYZ,\n.colorDanger-2qLCe1 .radioSelection-1HmrQS {\n  color: var(--monokai-red);\n}\n\n.colorDanger-2qLCe1.focused-3afm-j {\n  background-color: var(--monokai-red);\n  color: var(--text-normal);\n}\n\n/* Fades!!! */\n.item-PXvHYJ,\n.item-1tOPte,\n.channel-2QD9_O,\n.channel-2QD9_O .subtext-1RtU34,\n.closeButton-2GCmT5 svg,\n.containerDefault--pIXnN *,\n.categoryItem-3zFJns,\n.member-3-YXUe,\n.member-3-YXUe *,\n.message-2qnXI6,\n.buttonContainer-DHceWr *,\n.result-oB0z--,\nbutton,\nbutton svg *,\n.clickable-3rdHwn path,\n.iconItem-F7GRxr path,\n.overflow-WK9Ogt,\n.winButton-iRh8-Z,\n.avatar-SmRMf2,\n.button-1-5Aqk,\n.header-2-Imhb .tab-ck0077,\n.privateChannelsHeaderContainer-3NB1K1,\n.rowWrapper-2fB6P0,\n.rowWrapper-2fB6P0 .nameBodyCell-3JOlnK,\n.item-26Dhrx,\n.item-26Dhrx path,\n.header-2BwW8b,\n.css-3vaxre-menu * {\n  transition: background-color 0.2s ease, color 0.2s ease, fill 0.2s ease, opacity 0.2s ease;\n}\n\n.channel-2QD9_O .name-uJV0GL,\n.channel-2QD9_O .subText-1KtqkB {\n  color: var(--channels-default);\n}\n\n.channel-2QD9_O:hover .name-uJV0GL,\n.channel-2QD9_O:hover .subText-1KtqkB {\n  color: var(--text-normal);\n}\n\n.textRuler-wO-qHe {\n  display: none;\n}\n\n.searchBar-3dMhjb {\n  transition: width calc(2 * 0.2s) ease;\n}\n\n.containerDefault--pIXnN.selected-3LIHYU .iconItem-F7GRxr,\n.containerDefault--pIXnN:hover .iconItem-F7GRxr {\n  opacity: 1;\n}\n\n.iconItem-F7GRxr {\n  display: block;\n  opacity: 0;\n}\n\n/* The rectangle message box breaks the upload dialog border-radius */\n.channelTextAreaUpload-3t7EIx .scrollableContainer-2NUZem {\n  border-radius: 8px;\n}\n\n/* LIVE tag in VC */\n.liveSmall-1dy2uA {\n  background-color: var(--monokai-red) !important;\n}\n\n/* Fix the status picker popup not using the variables (discord pls fix) */\n#status-picker-online .status-1AY8sU {\n  background-color: var(--rs-online-color) !important;\n}\n\n#status-picker-idle .status-1AY8sU {\n  background-color: var(--rs-idle-color) !important;\n}\n\n#status-picker-dnd .status-1AY8sU {\n  background-color: var(--rs-dnd-color) !important;\n}\n\n#status-picker-invisible .status-1AY8sU {\n  background-color: var(--rs-invisible-color) !important;\n}\n\n/* Changelog links are stubborn as to colours */\n.content-s2SEQO a {\n  color: var(--text-link);\n}\n\n/* Strikethrough muted categories & channels */\n.wrapper-PY0fhH.muted-2JBAyG,\n.wrapper-PY0fhH.muted-2JBAyG .name-3l27Hl,\n.modeMuted-onO3r- .icon-1DeIlz,\n.modeMuted-onO3r- .name-23GUGE {\n  text-decoration: line-through;\n}\n\n/* Invite to this channel button */\n.iconItem-F7GRxr path {\n  fill: var(--diskai-accent-colour);\n}\n\n/* Go away help button */\n.anchor-3Z-8Bb[href="https://support.discord.com"] {\n  display: none;\n}\n\n/* File download button */\n.wrapperAudio-1jDe0Q .metadataDownload-1fk90V path,\n.downloadButton-23tKQp path {\n  fill: var(--text-link);\n}\n\n/* Message pin */\n.content-2M3n_H .anchor-3Z-8Bb {\n  color: var(--text-link);\n}\n\n/* Mentions */\n.mentioned-xhSam7::before {\n  background-color: var(--monokai-yellow);\n}\n\n/* Channels */\n.unread-2lAfLh {\n  visibility: hidden;\n}\n\n.modeUnread-1qO3K1 .name-23GUGE,\n.mainContent-u_9PKf:hover .name-23GUGE,\n.name-23GUGE {\n  color: var(--channels-default);\n}\n\n.modeSelected-346R90 .name-23GUGE,\n.modeSelected-346R90:hover .name-23GUGE {\n  color: var(--text-normal);\n}\n\n.modeUnread-1qO3K1 .iconContainer-1BBaeJ path {\n  fill: var(--interactive-active);\n}\n\n.modeSelected-346R90 .iconContainer-1BBaeJ path {\n  fill: var(--text-normal);\n}\n\n/* Version message */\n.info-1VyQPT .colorMuted-HdFt4q:last-child::after {\n  content: "Diskai 1.2 (git master)";\n  display: block;\n  text-transform: none;\n}\n\n.operations-36ENbA > a {\n  color: var(--diskai-accent-colour);\n}\n\n.background-1QDuV2 {\n  display: flex;\n}\n\n.avatarUploader-3XDtmn {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.menu-319q29 {\n  margin: 0;\n}\n\n.fieldList-21DyL8 {\n  flex: 1;\n  margin: 0;\n}\n\n.profile-1eT9hT {\n  margin: 0.5rem 2.5rem;\n  flex-flow: column nowrap;\n}\n\n.details-2fkb7l {\n  margin-left: 0;\n}\n\n.badgeList-HtCfKd {\n  align-items: center;\n  flex-flow: column wrap;\n}\n\n.profileBadgeWrapper-1rGSsp {\n  margin: 0 6px;\n}\n\n.details-2fkb7l, .badgeList-HtCfKd, .menu-319q29 {\n  margin-top: 0.5rem;\n}\n\n.avatarUploaderIndicator-2G-aIZ {\n  display: none;\n}\n\n.wrapper-39oAo3 {\n  margin: 0;\n  padding-bottom: 17px;\n  border-radius: 0;\n  background-color: var(--channeltextarea-background);\n}\n\n.colorStatusGreen-2saF4_ {\n  color: var(--diskai-accent-colour);\n}\n\n.vz-updater-top-section-icon path[fill="#43b581"],\n.powercord-updater .icon path[fill="#43b581"] {\n  fill: var(--diskai-dark-green);\n}\n.vz-updater-top-section-icon path[fill="#faa61a"],\n.powercord-updater .icon path[fill="#faa61a"] {\n  fill: var(--monokai-yellow);\n}\n.vz-updater-top-section-icon path[fill="#f04747"],\n.powercord-updater .icon path[fill="#f04747"] {\n  fill: var(--monokai-red);\n}\n.vz-updater-top-section-icon path[fill="#7289da"],\n.powercord-updater .icon path[fill="#7289da"] {\n  fill: var(--monokai-purple);\n}\n\n.wanderingCubesItem-WPXqao {\n  background-color: var(--monokai-purple);\n}\n\n.colorHeaderPrimary-26Jzh-.active-2awTSY {\n  background-color: var(--header-primary) !important;\n}\n\n.newMessagesBar-265mhP, .botTag-3W9SuW {\n  background-color: var(--monokai-purple);\n}\n\n/*******************************\\\n|      stuff stolen from        |\n|     #css-snippets in the      |\n|     powercord discord :P      |\n\\*******************************/\n/*\nBetter message box\ncourtesy of Jenny#0002 on powercord discord\nhttps://discord.com/channels/538759280057122817/755005803303403570/804665923801579541 \n*/\n.form-2fGMdU {\n  padding: 0px;\n}\n\n.inner-MADQqc {\n  padding-top: 4px;\n}\n\n.channelTextArea-rNsIhG {\n  margin-bottom: 0px;\n}\n\n.base-gE7OpD {\n  top: -24px;\n  background-color: var(--background-primary);\n}\n\n.scrollableContainer-2NUZem {\n  border-radius: 0px;\n  min-height: 53px;\n}\n\n/*\nJump to bottom pill\nby me!\nhttps://discord.com/channels/538759280057122817/755005803303403570/805724588277104680\n*/\n.jumpToPresentBar-G1R9s6 .barButtonMain-3K-jeJ {\n  display: none;\n}\n\n.jumpToPresentBar-G1R9s6 {\n  display: block;\n  background-color: transparent;\n  right: 12px;\n}\n\n.jumpToPresentBar-G1R9s6 .barButtonAlt-mYL1lj {\n  float: right;\n  bottom: 1.6rem;\n  border-radius: 0.7rem 0 0 0.7rem;\n  background-color: var(--background-tertiary);\n}\n\n/*\nDrop shadow behind images, video, codeblocks, and other embeds\nby Benny#9876\nhttps://discord.com/channels/538759280057122817/755005803303403570/801919477918597211\n */\n.embedWrapper-lXpS3L {\n  box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.3);\n}\n\ncode {\n  box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.3);\n}\n\n/*\nBigger popup avatars\nby wathhr#1459\nhttps://discord.com/channels/538759280057122817/755005803303403570/797655264199180348\n*/\n.header-QKLPzZ > .avatar-3EQepX.wrapper-3t9DeA {\n  top: 5px;\n}\n\n.avatarWrapperNormal-3wFMbf.avatarWrapper-3H_478 > .wrapper-3t9DeA,\n.header-QKLPzZ > .avatar-3EQepX.wrapper-3t9DeA,\n.avatarHint-1qgaV3 {\n  width: 100px !important;\n  height: 100px !important;\n}\n\n/*\niOS-style image spoilers\nby Yellowsink#8156\nhttps://discord.com/channels/538759280057122817/755005803303403570/811210109405495316\n*/\n.inline-2bgipb.hiddenSpoilers-1ksnR6 {\n  visibility: visible;\n}\n\n.inline-2bgipb.hiddenSpoilers-1ksnR6 img {\n  filter: blur(3rem);\n}\n\n.inline-2bgipb.hiddenSpoilers-1ksnR6::after {\n  content: "SPOILER";\n  color: var(--text-normal);\n  display: block;\n  text-align: center;\n  top: calc(50% - 0.5rem);\n  position: absolute;\n  width: 100%;\n  font-weight: bold;\n}'))),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Diskai",["",{type:"text-input",text:"Avatar Bottom",oninput:function(n){n=parseInt(n.substring(1,3),16).toString()+", "+parseInt(n.substring(3,5),16).toString()+", "+parseInt(n.substring(5,7),16).toString(),console.log(n),document.body.style.setProperty("--avatar-bottom",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--avatar-bottom")||"5px";return console.log(n),n}},{type:"text-input",text:"Diskai Hook Compact",oninput:function(n){n=parseInt(n.substring(1,3),16).toString()+", "+parseInt(n.substring(3,5),16).toString()+", "+parseInt(n.substring(5,7),16).toString(),console.log(n),document.body.style.setProperty("--diskai-hook-compact",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-hook-compact")||"1";return console.log(n),n}},{type:"text-input",text:"Diskai Hook Transitions",oninput:function(n){n=parseInt(n.substring(1,3),16).toString()+", "+parseInt(n.substring(3,5),16).toString()+", "+parseInt(n.substring(5,7),16).toString(),console.log(n),document.body.style.setProperty("--diskai-hook-transitions",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-hook-transitions")||"0.2s";return console.log(n),n}},{type:"text-and-color",text:"Monokai Black",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-black",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-black")||"#1a1a1a";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai Red",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-red",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-red")||"#f4005f";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai Green",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-green",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-green")||"#98e024";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai Yellow",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-yellow",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-yellow")||"#fa8419";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai Purple",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-purple",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-purple")||"#9d65ff";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai Cyan",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-cyan",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-cyan")||"#58d1eb";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai White",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-white",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-white")||"#c4c5b5";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai Bright Black",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-bright-black",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-bright-black")||"#625e4c";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai Bright Yellow",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-bright-yellow",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-bright-yellow")||"#e0d561";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai Bright White",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-bright-white",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-bright-white")||"#f6f6ef";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai Background",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-background",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-background")||"#1a1a1a";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Monokai Foreground",oninput:function(n){console.log(n),document.body.style.setProperty("--monokai-foreground",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--monokai-foreground")||"#bfbfba";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Diskai Pink",oninput:function(n){console.log(n),document.body.style.setProperty("--diskai-pink",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-pink")||"#ff4d91";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Diskai Light Pink",oninput:function(n){console.log(n),document.body.style.setProperty("--diskai-light-pink",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-light-pink")||"#ffb3d0";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Diskai Lilac",oninput:function(n){console.log(n),document.body.style.setProperty("--diskai-lilac",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-lilac")||"#b26bff";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Diskai Light Blue",oninput:function(n){console.log(n),document.body.style.setProperty("--diskai-light-blue",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-light-blue")||"#76efdf";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Diskai Muted Purple",oninput:function(n){console.log(n),document.body.style.setProperty("--diskai-muted-purple",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-muted-purple")||"#9567e4";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Diskai Turquoise",oninput:function(n){console.log(n),document.body.style.setProperty("--diskai-turquoise",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-turquoise")||"#0bda97";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Diskai Dark Green",oninput:function(n){console.log(n),document.body.style.setProperty("--diskai-dark-green",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-dark-green")||"#79b814";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Diskai Muted Green",oninput:function(n){console.log(n),document.body.style.setProperty("--diskai-muted-green",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-muted-green")||"#2e8d02";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-input",text:"Diskai Muted White",oninput:function(n){console.log(n),document.body.style.setProperty("--diskai-muted-white",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--diskai-muted-white")||"#888";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=o(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.remove();try{goosemodScope.settings.removeItem("Diskai")}catch(o){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=o(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--avatar-bottom",document.body.style.getPropertyValue("--avatar-bottom")],["--diskai-hook-compact",document.body.style.getPropertyValue("--diskai-hook-compact")],["--diskai-hook-transitions",document.body.style.getPropertyValue("--diskai-hook-transitions")],["--monokai-black",document.body.style.getPropertyValue("--monokai-black")],["--monokai-red",document.body.style.getPropertyValue("--monokai-red")],["--monokai-green",document.body.style.getPropertyValue("--monokai-green")],["--monokai-yellow",document.body.style.getPropertyValue("--monokai-yellow")],["--monokai-purple",document.body.style.getPropertyValue("--monokai-purple")],["--monokai-cyan",document.body.style.getPropertyValue("--monokai-cyan")],["--monokai-white",document.body.style.getPropertyValue("--monokai-white")],["--monokai-bright-black",document.body.style.getPropertyValue("--monokai-bright-black")],["--monokai-bright-yellow",document.body.style.getPropertyValue("--monokai-bright-yellow")],["--monokai-bright-white",document.body.style.getPropertyValue("--monokai-bright-white")],["--monokai-background",document.body.style.getPropertyValue("--monokai-background")],["--monokai-foreground",document.body.style.getPropertyValue("--monokai-foreground")],["--diskai-pink",document.body.style.getPropertyValue("--diskai-pink")],["--diskai-light-pink",document.body.style.getPropertyValue("--diskai-light-pink")],["--diskai-lilac",document.body.style.getPropertyValue("--diskai-lilac")],["--diskai-light-blue",document.body.style.getPropertyValue("--diskai-light-blue")],["--diskai-muted-purple",document.body.style.getPropertyValue("--diskai-muted-purple")],["--diskai-turquoise",document.body.style.getPropertyValue("--diskai-turquoise")],["--diskai-dark-green",document.body.style.getPropertyValue("--diskai-dark-green")],["--diskai-muted-green",document.body.style.getPropertyValue("--diskai-muted-green")],["--diskai-muted-white",document.body.style.getPropertyValue("--diskai-muted-white")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=o(regeneratorRuntime.mark(function n(o){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(o){return n.apply(this,arguments)}}()}};exports.default=t;
},{}]},{},["index.js"], null);parcelRequire('index.js').default