parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,r,a,o,t,e,p){try{var d=n[e](p),i=d.value}catch(c){return void a(c)}d.done?r(i):Promise.resolve(i).then(o,t)}function r(r){return function(){var a=this,o=arguments;return new Promise(function(t,e){var p=r.apply(a,o);function d(r){n(p,t,e,d,i,"next",r)}function i(r){n(p,t,e,d,i,"throw",r)}d(void 0)})}}var a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a=document.createElement("style"),document.head.appendChild(a),a.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono");\n@import url("https://jatin-jindal.github.io/discordfont/DiscordFont.css");\n#app-mount {\n  background-image: var(--chattyBackgroundImage) !important;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n}\n#app-mount .typeWindows-1za-n7 {\n  background-color: #934039;\n  background: transparent !important;\n  height: 18px;\n  margin-top: 0px;\n  padding-top: 5px;\n}\n#app-mount .app-2rEoOp {\n  background: transparent !important;\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n#app-mount .app-2rEoOp .bg-h5JY_x {\n  background: transparent !important;\n}\n#app-mount .app-2rEoOp .wrapper-1Rf91z {\n  background: transparent !important;\n  padding-top: 6px;\n}\n#app-mount .app-2rEoOp .wrapper-1Rf91z .scroller-2TZvBN {\n  background: transparent !important;\n}\n#app-mount .app-2rEoOp .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-25eVIn .svg-1X37T1 {\n  overflow: hidden;\n}\n#app-mount .app-2rEoOp .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-25eVIn .svg-1X37T1 mask {\n  display: none;\n}\n#app-mount .app-2rEoOp .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-25eVIn .wrapper-1BJsBx {\n  border-radius: 100%;\n  overflow: hidden;\n}\n#app-mount .app-2rEoOp .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-25eVIn .wrapper-1BJsBx.selected-bZ3Lue {\n  border-radius: var(--chattyBorderRadius);\n}\n#app-mount .app-2rEoOp .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-25eVIn .circleIconButton-jET_ig {\n  border-radius: var(--chattyBorderRadius);\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2rEoOp .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-25eVIn .folderIconWrapper-226oVY {\n  border-radius: var(--chattyBorderRadius);\n  overflow: hidden;\n}\n#app-mount .app-2rEoOp .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-25eVIn .folder-21wGz3 {\n  background: transparent !important;\n}\n#app-mount .app-2rEoOp .wrapper-1Rf91z .scroller-2TZvBN .wrapper-21YSNc .expandedFolderBackground-2sPsd- {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: var(--chattyBorderRadius);\n  padding-top: 48px;\n  margin-bottom: 17px;\n}\n#app-mount .app-2rEoOp .sidebar-2K8pFh {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: var(--chattyBorderRadius);\n  margin-top: var(--chattyPadding);\n  margin-bottom: var(--chattyPadding);\n}\n#app-mount .app-2rEoOp .sidebar-2K8pFh .container-3w7J-x {\n  background: transparent;\n}\n#app-mount .app-2rEoOp .sidebar-2K8pFh .container-3w7J-x .header-2V-4Sw {\n  box-shadow: none;\n}\n#app-mount .app-2rEoOp .sidebar-2K8pFh .privateChannels-1nO12o {\n  background: transparent;\n}\n#app-mount .app-2rEoOp .sidebar-2K8pFh .privateChannels-1nO12o .searchBar-6Kv8R2 {\n  box-shadow: none;\n}\n#app-mount .app-2rEoOp .sidebar-2K8pFh .privateChannels-1nO12o .searchBar-6Kv8R2 .searchBarComponent-32dTOx {\n  text-align: center;\n  background: rgba(0, 0, 0, 0.4);\n  color: #888;\n}\n#app-mount .app-2rEoOp .sidebar-2K8pFh .privateChannels-1nO12o .scroller-1JbKMe {\n  background: transparent;\n}\n#app-mount .app-2rEoOp .sidebar-2K8pFh .panels-j1Uci_ {\n  background: transparent;\n}\n#app-mount .app-2rEoOp .container-1D34oG {\n  background: rgba(0, 0, 0, 0.6);\n  margin: var(--chattyPadding);\n  margin-top: 5px !important;\n  border-radius: var(--chattyBorderRadius);\n}\n#app-mount .app-2rEoOp .container-1D34oG .container-1r6BKw.themed-ANHk51 {\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2rEoOp .container-1D34oG .container-1r6BKw.themed-ANHk51 .children-19S4PO::after {\n  display: none !important;\n}\n#app-mount .app-2rEoOp .container-1D34oG .actionButton-uPB8Fs {\n  border-radius: var(--chattyBorderRadius);\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2rEoOp .container-1D34oG .nowPlayingColumn-2sl4cE {\n  background: transparent;\n}\n#app-mount .app-2rEoOp .container-1D34oG .nowPlayingColumn-2sl4cE .consentCard-1iSxB_ {\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2rEoOp .container-1D34oG .nowPlayingColumn-2sl4cE .itemCard-v9viV7 {\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2rEoOp .chat-3bRxxu {\n  background: rgba(0, 0, 0, 0.6);\n  margin: var(--chattyPadding);\n  margin-top: 5px !important;\n  border-radius: var(--chattyBorderRadius);\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .container-1r6BKw.themed-ANHk51 {\n  background: transparent;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .container-1r6BKw.themed-ANHk51 .children-19S4PO:after {\n  opacity: 0;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .container-1r6BKw.themed-ANHk51 .searchBar-3dMhjb {\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .content-yTz4x3:before {\n  display: none;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .messagesWrapper-1sRNjr {\n  background: transparent;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .messagesWrapper-1sRNjr .blockquoteDivider-2hH8H6 {\n  width: 0px;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .messagesWrapper-1sRNjr blockquote {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: var(--chattyBorderRadius);\n  padding: 8px;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .messagesWrapper-1sRNjr .imageWrapper-2p5ogY {\n  border-radius: var(--chattyBorderRadius);\n  box-shadow: var(--elevationHigh);\n  transition: 0.2s ease-in-out;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .messagesWrapper-1sRNjr .imageWrapper-2p5ogY:hover {\n  transform: scaleY(1.02) scaleX(1.02);\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .messagesWrapper-1sRNjr .video-8eMOth {\n  border-radius: var(--chattyBorderRadius);\n  box-shadow: var(--elevationHigh);\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .messagesWrapper-1sRNjr .embedFull-2tM8-- {\n  background: rgba(0, 0, 0, 0.4);\n  border-left: 0px;\n  border-bottom: var(--chattyBorderRadius) solid;\n  border-radius: var(--chattyBorderRadius);\n  box-shadow: var(--elevationHigh);\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .messagesWrapper-1sRNjr .embedFull-2tM8-- .grid-1nZz7S {\n  padding-top: 3px;\n  padding-bottom: 10px;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .form-2fGMdU:before {\n  opacity: 0;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .channelTextArea-rNsIhG {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: var(--chattyBorderRadius);\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .channelTextArea-rNsIhG .scrollableContainer-2NUZem {\n  background: transparent !important;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .members-1998pB {\n  background: transparent !important;\n}\n#app-mount .app-2rEoOp .chat-3bRxxu .members-1998pB > div {\n  background: transparent !important;\n}\n#app-mount .app-2rEoOp .noChannel-Z1DQK7 {\n  background: transparent;\n  border-radius: var(--chattyBorderRadius);\n  margin: var(--chattyPadding);\n  margin-top: 5px !important;\n}\n#app-mount .app-2rEoOp .noChannel-Z1DQK7 .image-1GzsFd {\n  display: none;\n}\n#app-mount .app-2rEoOp .noChannel-Z1DQK7 .flexChild-faoVW3 {\n  background: rgba(0, 0, 0, 0.4);\n  padding: 20px;\n  border-radius: var(--chattyBorderRadius);\n}\n#app-mount .app-2rEoOp .noChannel-Z1DQK7 .flexChild-faoVW3 .title-2BxgL2 {\n  color: #f53e3e;\n  text-shadow: #f53e3e 0px 0px 0px;\n  transition: 0.4s ease-in-out;\n}\n#app-mount .app-2rEoOp .noChannel-Z1DQK7 .flexChild-faoVW3 .title-2BxgL2:hover {\n  text-shadow: #f53e3e 0px 0px 20px;\n}\n#app-mount .app-2rEoOp .noChannel-Z1DQK7 .flexChild-faoVW3 .text-GwUZgS {\n  color: #c0c0c0;\n}\n\n*::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.6) !important;\n  border-radius: var(--chattyBorderRadius) !important;\n}\n\n*::-webkit-scrollbar-track-piece {\n  background: transparent !important;\n  border: transparent !important;\n}\n\ncode {\n  background: rgba(0, 0, 0, 0.6) !important;\n  border: none !important;\n  border-radius: var(--chattyBorderRadius) !important;\n}\n\n.theme-dark .container-2x5lvQ section {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.theme-dark .container-2x5lvQ .header-2C89wJ {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.container-2x5lvQ {\n  width: 250px;\n  border-radius: var(--chattyBorderRadius);\n  -webkit-box-shadow: var(--elevation-high);\n  box-shadow: var(--elevation-high);\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n\n.theme-dark .root-1gCeng {\n  background-color: rgba(0, 0, 0, 0);\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n\n.theme-dark .footer-2gL1pp {\n  background-color: #00000000;\n  box-shadow: inset 0 1px 0 rgba(47, 49, 54, 0.6);\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n\n.backdropWithLayer-3_uhz4 {\n  opacity: 1 !important;\n  background-color: rgba(0, 0, 0, 0.4) !important;\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n\n.wrapper-2qzCYF {\n  z-index: 2;\n  position: relative;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  background-color: transparent !important;\n  overflow: hidden;\n}\n\n.wrapper-2tAnRe {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.content-1o0f9g {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.theme-dark .card-FDVird:before {\n  background-color: rgba(0, 0, 0, 0.3);\n  border-color: var(--background-primary);\n}\n\n.theme-dark .addGamePopout-2RY8Ju {\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7) !important;\n}\n\n.scroller-305q3I {\n  background-color: transparent !important;\n}\n\n.menu-3sdvDG {\n  border-radius: var(--chattyBorderRadius);\n}\n\n.button-F9qN4n {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n}\n\n.wrapper-2aW0bm {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.wordmark-2iDDfm svg {\n  width: 0px;\n}\n\n.theme-dark .wordmark-2iDDfm:after {\n  font-family: "Discord";\n  content: "ZEROLIGHT";\n  font-size: 12px;\n  background: rgba(235, 235, 228, 0.521);\n  background-size: 400% 400%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  position: absolute;\n  top: 5px;\n}\n\n.userPopout-xaxa6l {\n  max-height: 600px !important;\n  border-radius: var(--chattyBorderRadius) !important;\n  background-color: transparent !important;\n  box-shadow: 0px 0px 20px black;\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n\n.avatar-37jOim {\n  border: 6px solid transparent !important;\n  background-color: transparent !important;\n}\n\n.bodyInnerWrapper-26fQXj {\n  background-color: transparent !important;\n}\n\n.footer-3UKYOU {\n  background-color: transparent !important;\n}\n\n.textarea-2r0oV8:focus {\n  background-color: var(--background-primary);\n}\n\n.name-1jkAdW {\n  font-family: Discord;\n}\n\n.lookFilled-1Gx00P .contents-18-Yxp, .lookInverted-2D7oAl .contents-18-Yxp, .lookLink-9FtZy- .contents-18-Yxp, .lookOutlined-3sRXeN .contents-18-Yxp {\n  font-family: Discord;\n}\n\n.membersGroup-v9BXpm {\n  font-family: Discord;\n}\n\n.inner-1ilYF7 {\n  background: none !important;\n  backdrop-filter: blur(var(--chattyBlur));\n}\n\n.modal-yWgWj- {\n  background-color: transparent !important;\n}\n\n.header-1TKi98 {\n  background-color: rgba(0, 0, 0, 0.6) !important;\n}\n\n.content-1LAB8Z {\n  background-color: rgba(0, 0, 0, 0.4) !important;\n}\n\n.footer-2gL1pp {\n  background-color: rgba(0, 0, 0, 0.6) !important;\n}\n\n.playlist {\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.contentRegion-3nDuYy {\n  background: rgba(0, 0, 0, 0.3) !important;\n}\n\n.contentRegionScroller-26nc1e {\n  background: rgba(0, 0, 0, 0) !important;\n}\n\n.contentWidth-xLB44s {\n  max-width: none;\n}\n\n.stickyHeader-hH_ZLl {\n  border-radius: var(--chattyBorderRadius);\n}\n\n.list-I3aHXn {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.page-3njELR {\n  max-width: none !important;\n}\n\n.titleContainer-2CXtJo {\n  background: none;\n}\n\n.toolsContainer-1edPuj {\n  padding-top: 20px;\n}\n\n.scroller-Utb7tO {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.scroller-3ZpLaI {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.list-3a9fyp {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.scroller-1J_F7B {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.contentColumn-2hrIYH, .customColumn-Rb6toI {\n  max-width: none;\n}\n\n.headerDefault-1wrJcN, .headerClickable-2IVFo9 {\n  background-color: rgba(0, 0, 0, 0.4) !important;\n}\n\n.scroller-1Bvpku {\n  background-color: transparent !important;\n}\n\n.powerclock.sticky {\n  background-color: transparent !important;\n  box-shadow: none !important;\n}\n\n.guilds-1SWlCJ {\n  background-color: transparent !important;\n}\n\n#app-mount .app-2rEoOp .chat-3bRxxu {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.pictureInPictureWindow-1B5qSe {\n  box-shadow: 0px 0px 50px black;\n}\n\n.perksModal-fSYqOq {\n  background-color: var(--background-primary) !important;\n}\n\n.ctaBar-2UsjF2 {\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);\n}\n\n.tier-12tKuZ {\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);\n}\n\n.perk-2WeBWW {\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);\n}\n\n.accountProfileCard-1XCH88 {\n  background-color: transparent !important;\n  background: transparent !important;\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n  border-radius: var(--chattyBorderRadius) !important;\n}\n\n.accountProfileCard-1XCH88 {\n  box-shadow: 0px 0px 20px black;\n}\n\n.settingsBanner-15-pZk {\n  height: 250px;\n}\n\n.avatar-1uQSZT {\n  top: 230px;\n  border: 7px solid transparent !important;\n  background-color: transparent !important;\n}\n\n.fieldButton-27bJrp {\n  margin-right: 10px;\n}\n\n.fieldTitle-3h2iLW {\n  margin-left: 20px !important;\n  margin-top: 10px !important;\n}\n\n.colorHeaderPrimary-26Jzh- {\n  margin-left: 40px !important;\n}\n\n.scroller-2LSbBU {\n  bottom: 10px;\n}\n\n.threadSidebar-1o3BTy {\n  margin: var(--chattyPadding);\n  margin-top: 5px !important;\n  border-radius: var(--chattyBorderRadius);\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.container-1r6BKw.themed-ANHk51 {\n  background: transparent !important;\n}\n\n.applicationStore-1pNvnv {\n  background-color: transparent !important;\n  margin: var(--chattyPadding);\n  margin-top: 5px !important;\n}\n\n.homeWrapperNormal-2KSUEa {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: var(--chattyBorderRadius);\n}\n\n.scroller-9moviB {\n  background-color: transparent !important;\n}\n\n.typeWindows-1za-n7 {\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7) !important;\n}\n\n.sidebar-2K8pFh {\n  margin-top: 5px !important;\n}\n\n.callContainer-36WRfH {\n  background-color: transparent !important;\n}\n\n.powercord-toast {\n  background-image: #fff !important;\n  border: none !important;\n  overflow: hidden !important;\n  box-shadow: var(--elevation-high) !important;\n  border-radius: var(--chattyBorderRadius) !important;\n}\n.powercord-toast .header {\n  background: rgba(0, 0, 0, 0.4) !important;\n  z-index: 2;\n  box-shadow: none !important;\n}\n.powercord-toast .contents {\n  z-index: 2;\n}\n.powercord-toast .contents .inner {\n  background: none !important;\n  border: none !important;\n}\n.powercord-toast .buttons {\n  z-index: 2;\n}\n\n.powercord-toast:before {\n  content: "";\n  position: absolute;\n  background: var(--chattyBackgroundImage);\n  filter: brightness(0.4) blur(10px);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  transform: scale(1.2);\n}\n\nbutton {\n  border-radius: var(--chattyBorderRadius) !important;\n}\n\n.lookOutlined-3sRXeN.colorGreen-29iAKY {\n  background: #2f8f644a;\n}\n\n.lookOutlined-3sRXeN.colorYellow-2JqYwt {\n  background: #d892194a;\n}\n\n.lookOutlined-3sRXeN.colorBlack-1jwPVL {\n  background: #0404054a;\n}\n\n.lookOutlined-3sRXeN.colorGrey-2DXtkV {\n  background: #747f8d4a;\n}\n\n.lookOutlined-3sRXeN.colorLink-35jkBc {\n  background: #00b0f44a;\n}\n\n.lookOutlined-3sRXeN.colorPrimary-3b3xI6 {\n  background: #ffffff4a;\n}\n\n.lookOutlined-3sRXeN.colorRed-1TFJan {\n  background: #f047474a;\n}\n\n.lookOutlined-3sRXeN.colorWhite-rEQuAQ {\n  background: #ffffff4a;\n}\n\n.lookOutlined-3sRXeN.colorBrand-3pXr91 {\n  background: #7289da4a;\n}\n\n.backdrop-1wrmKB {\n  background: #00000055 !important;\n  opacity: 1 !important;\n}\n\n.inner-1ilYF7 {\n  background: none !important;\n}\n\n.root-SR8cQa {\n  background: none !important;\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.8);\n  border-radius: var(--chattyBorderRadius);\n}\n\n.inner-1ilYF7 .body-3ND3kc {\n  background: #00000066;\n}\n\n.topSectionSpotify-1lI0-P {\n  background: #1db954a8;\n}\n\n.connectedAccount-36nQx7 {\n  border: none;\n  background: #00000066;\n  border-radius: var(--chattyBorderRadius);\n}\n\n.userInfoSection-2acyCx + .userInfoSection-2acyCx {\n  border-top: none;\n}\n\n.topSectionNormal-2-vo2m {\n  background: #000000a8;\n}\n\n.topSectionNormal-2-vo2m .tabBarContainer-1s1u-z {\n  border-top: none;\n}\n\n.lookFilled-1Gx00P.colorGreen-29iAKY {\n  background: #00000066;\n  border-radius: var(--chattyBorderRadius);\n}\n\n.lookInverted-2D7oAl.colorGreen-29iAKY {\n  background: #1db954a8;\n  color: #fff;\n  border-radius: var(--chattyBorderRadius);\n}\n\n.lookInverted-2D7oAl.colorGreen-29iAKY:hover {\n  background: #1db954ff;\n}\n\n.lookFilled-1Gx00P.colorGreen-29iAKY:hover {\n  background: #7289daa8;\n}\n\n.topSectionPlaying-1J5E4n {\n  background: #7289daa8;\n}\n\n.lookInverted-2D7oAl.colorBrand-3pXr91 {\n  background: #7289daa8;\n  border-radius: var(--chattyBorderRadius);\n  color: #fff;\n}\n\n.lookInverted-2D7oAl.colorBrand-3pXr91:hover {\n  background: #7289daff;\n}\n\n.topSectionStreaming-1Tpf5X {\n  background: #593695a8;\n}\n\n.buttonInvertedPurple-WtBglX {\n  border-radius: var(--chattyBorderRadius);\n  background: #593695a8;\n  color: #fff;\n}\n\n.buttonInvertedPurple-WtBglX:hover {\n  background: #593695ff;\n}\n\n.topSectionStreaming-1Tpf5X .lookOutlined-3sRXeN.colorWhite-rEQuAQ {\n  background: #593695a8 !important;\n}\n\n.topSectionStreaming-1Tpf5X .lookOutlined-3sRXeN.colorWhite-rEQuAQ:hover {\n  background: #593695ff !important;\n}\n\n.topSectionPlaying-1J5E4n .lookOutlined-3sRXeN.colorWhite-rEQuAQ {\n  background: #7289daa8 !important;\n}\n\n.topSectionPlaying-1J5E4n .lookOutlined-3sRXeN.colorWhite-rEQuAQ:hover {\n  background: #7289daff !important;\n}\n\n.tabBarContainer-1s1u-z {\n  border-top: none;\n  height: 40px;\n}\n\n.tabBar-2MuP6- {\n  height: 40px;\n}\n\n.layers-3iHuyZ .layer-3QrUeG {\n  background: transparent;\n}\n.layers-3iHuyZ .layer-3QrUeG .standardSidebarView-3F1I7i {\n  background: transparent;\n  margin: var(--chattyPadding);\n}\n.layers-3iHuyZ .layer-3QrUeG .standardSidebarView-3F1I7i .sidebarRegion-VFTUkN {\n  margin-right: var(--chattyPadding);\n  flex: 0 0 218px;\n  border-radius: var(--chattyBorderRadius);\n  overflow: hidden;\n  background: transparent;\n}\n.layers-3iHuyZ .layer-3QrUeG .standardSidebarView-3F1I7i .sidebarRegion-VFTUkN .sidebar-CFHs9e {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  background: transparent;\n}\n.layers-3iHuyZ .layer-3QrUeG .standardSidebarView-3F1I7i .sidebarRegion-VFTUkN .sidebarRegionScroller-3MXcoP {\n  background: rgba(0, 0, 0, 0.6);\n}\n.layers-3iHuyZ .layer-3QrUeG .standardSidebarView-3F1I7i .contentRegion-3nDuYy {\n  width: 100px;\n  background: transparent;\n  border-radius: var(--chattyBorderRadius);\n  overflow: hidden;\n}\n.layers-3iHuyZ .layer-3QrUeG .standardSidebarView-3F1I7i .contentRegion-3nDuYy .contentRegionScroller-26nc1e {\n  background: rgba(0, 0, 0, 0.6);\n}\n.layers-3iHuyZ .layer-3QrUeG .standardSidebarView-3F1I7i .contentRegion-3nDuYy .contentRegionScroller-26nc1e .contentColumn-2hrIYH {\n  max-width: 100%;\n}\n.layers-3iHuyZ .layer-3QrUeG .standardSidebarView-3F1I7i .contentRegion-3nDuYy .contentRegionScroller-26nc1e .contentColumn-2hrIYH .background-1QDuV2 {\n  border-radius: var(--chattyBorderRadius);\n  background: rgba(0, 0, 0, 0.3);\n  padding: 20px;\n}\n.layers-3iHuyZ .layer-3QrUeG .standardSidebarView-3F1I7i .contentRegion-3nDuYy .contentRegionScroller-26nc1e .contentColumn-2hrIYH .background-1QDuV2 .avatarUploaderInner-3UNxY3 {\n  border-radius: var(--chattyBorderRadius);\n}\n.layers-3iHuyZ .layer-3QrUeG .standardSidebarView-3F1I7i .contentRegion-3nDuYy .contentRegionScroller-26nc1e .contentColumn-2hrIYH .background-1QDuV2 .fieldList-21DyL8 {\n  border-radius: var(--chattyBorderRadius);\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.privateChannels-1nO12o .content-3YMskv :nth-child(3) {\n  display: none !important;\n}\n\n:root {\n  --chattyBackgroundImage: url(https://source.unsplash.com/daily);\n  --chattyBorderRadius: 15px;\n  --chattyPadding: 10px;\n  --chattyBlur: 5px;\n  --interactive-muted: #D08770;\n  --background-primary: rgba(0, 0, 0, 0.2);\n  --background-secondary: rgba(0, 0, 0, 0.3);\n  --background-secondary-alt: rgba(0, 0, 0, 0.3);\n  --background-tertiary: rgb(39, 39, 39);\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Chatty",["",{type:"text-input",text:"Chattybackgroundimage",oninput:function(n){document.body.style.setProperty("--chattyBackgroundImage",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--chattyBackgroundImage")||"url(https://source.unsplash.com/daily)";return console.log(n),n}},{type:"text-input",text:"Chattyborderradius",oninput:function(n){document.body.style.setProperty("--chattyBorderRadius",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--chattyBorderRadius")||"15px";return console.log(n),n}},{type:"text-input",text:"Chattypadding",oninput:function(n){document.body.style.setProperty("--chattyPadding",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--chattyPadding")||"10px";return console.log(n),n}},{type:"text-input",text:"Chattyblur",oninput:function(n){document.body.style.setProperty("--chattyBlur",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--chattyBlur")||"5px";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a.remove();try{goosemodScope.settings.removeItem("Chatty")}catch(r){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--chattyBackgroundImage",document.body.style.getPropertyValue("--chattyBackgroundImage")],["--chattyBorderRadius",document.body.style.getPropertyValue("--chattyBorderRadius")],["--chattyPadding",document.body.style.getPropertyValue("--chattyPadding")],["--chattyBlur",document.body.style.getPropertyValue("--chattyBlur")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=r(regeneratorRuntime.mark(function n(r){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(r){return n.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default