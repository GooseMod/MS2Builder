parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,r,a,o,t,e,d){try{var p=n[e](d),i=p.value}catch(c){return void a(c)}p.done?r(i):Promise.resolve(i).then(o,t)}function r(r){return function(){var a=this,o=arguments;return new Promise(function(t,e){var d=r.apply(a,o);function p(r){n(d,t,e,p,i,"next",r)}function i(r){n(d,t,e,p,i,"throw",r)}p(void 0)})}}var a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a=document.createElement("style"),document.head.appendChild(a),a.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono");\n@import url("https://jatin-jindal.github.io/discordfont/DiscordFont.css");\n#app-mount {\n  background-image: var(--chattyBackgroundImage) !important;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n}\n#app-mount .typeWindows-2-g3UY {\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7) !important;\n  background-color: #934039;\n  background: transparent !important;\n  height: 18px;\n  margin-top: 0px;\n  padding-top: 5px;\n}\n#app-mount .app-2CXKsg {\n  background: transparent !important;\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n#app-mount .app-2CXKsg .bg-1QIAus {\n  background: transparent !important;\n}\n#app-mount .app-2CXKsg .wrapper-1Rf91z {\n  background: transparent !important;\n  padding-top: 6px;\n}\n#app-mount .app-2CXKsg .wrapper-1Rf91z .scroller-2TZvBN {\n  background: transparent !important;\n}\n#app-mount .app-2CXKsg .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-28eC3z .svg-2zuE5p {\n  overflow: hidden;\n}\n#app-mount .app-2CXKsg .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-28eC3z .svg-2zuE5p mask {\n  display: none;\n}\n#app-mount .app-2CXKsg .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-28eC3z .wrapper-3kah-n {\n  border-radius: 100%;\n  overflow: hidden;\n}\n#app-mount .app-2CXKsg .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-28eC3z .wrapper-3kah-n.selected-1Drb7Z {\n  border-radius: var(--chattyBorderRadius);\n}\n#app-mount .app-2CXKsg .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-28eC3z .circleIconButton-jET_ig {\n  border-radius: var(--chattyBorderRadius);\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2CXKsg .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-28eC3z .folderIconWrapper-226oVY {\n  border-radius: var(--chattyBorderRadius);\n  overflow: hidden;\n}\n#app-mount .app-2CXKsg .wrapper-1Rf91z .scroller-2TZvBN .listItem-2P_4kh .wrapper-28eC3z .folder-21wGz3 {\n  background: transparent !important;\n}\n#app-mount .app-2CXKsg .wrapper-1Rf91z .scroller-2TZvBN .wrapper-21YSNc .expandedFolderBackground-2sPsd- {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: var(--chattyBorderRadius);\n  padding-top: 48px;\n  margin-bottom: 17px;\n}\n#app-mount .app-2CXKsg .sidebar-1tnWFu {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: var(--chattyBorderRadius);\n  margin-top: 5px !important;\n  margin-bottom: var(--chattyPadding);\n}\n#app-mount .app-2CXKsg .sidebar-1tnWFu .container-1NXEtd {\n  background: transparent;\n}\n#app-mount .app-2CXKsg .sidebar-1tnWFu .container-1NXEtd .header-3OsQeK {\n  box-shadow: none;\n}\n#app-mount .app-2CXKsg .sidebar-1tnWFu .privateChannels-oVe7HL {\n  background: transparent;\n}\n#app-mount .app-2CXKsg .sidebar-1tnWFu .privateChannels-oVe7HL .searchBar-3TnChZ {\n  box-shadow: none;\n}\n#app-mount .app-2CXKsg .sidebar-1tnWFu .privateChannels-oVe7HL .searchBar-3TnChZ .searchBarComponent-3N7dCG {\n  text-align: center;\n  background: rgba(0, 0, 0, 0.4);\n  color: #888;\n}\n#app-mount .app-2CXKsg .sidebar-1tnWFu .privateChannels-oVe7HL .scroller-WSmht3 {\n  background: transparent;\n}\n#app-mount .app-2CXKsg .sidebar-1tnWFu .panels-3wFtMD {\n  background: transparent;\n}\n#app-mount .app-2CXKsg .container-2cd8Mz {\n  background: rgba(0, 0, 0, 0.6);\n  margin: var(--chattyPadding);\n  margin-top: 5px !important;\n  border-radius: var(--chattyBorderRadius);\n}\n#app-mount .app-2CXKsg .container-2cd8Mz .container-ZMc96U.themed-Hp1KC_ {\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2CXKsg .container-2cd8Mz .container-ZMc96U.themed-Hp1KC_ .children-19S4PO::after {\n  display: none !important;\n}\n#app-mount .app-2CXKsg .container-2cd8Mz .actionButton-3-B2x- {\n  border-radius: var(--chattyBorderRadius);\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2CXKsg .container-2cd8Mz .nowPlayingColumn-1eCBCN {\n  background: transparent;\n}\n#app-mount .app-2CXKsg .container-2cd8Mz .nowPlayingColumn-1eCBCN .consentCard-1MV_A4 {\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2CXKsg .container-2cd8Mz .nowPlayingColumn-1eCBCN .itemCard-3Etziu {\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI {\n  background: rgba(0, 0, 0, 0.5);\n  margin: var(--chattyPadding);\n  margin-top: 5px !important;\n  border-radius: var(--chattyBorderRadius);\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .container-ZMc96U.themed-Hp1KC_ {\n  background: transparent;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .container-ZMc96U.themed-Hp1KC_ .children-3xh0VB:after {\n  opacity: 0;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .container-ZMc96U.themed-Hp1KC_ .searchBar-zdmu7v {\n  background: rgba(0, 0, 0, 0.4);\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .content-1jQy2l:before {\n  display: none;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .messagesWrapper-RpOMA3 {\n  background: transparent;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .messagesWrapper-RpOMA3 .blockquoteDivider-363utW {\n  width: 0px;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .messagesWrapper-RpOMA3 blockquote {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: var(--chattyBorderRadius);\n  padding: 8px;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .messagesWrapper-RpOMA3 .imageWrapper-oMkQl4 {\n  border-radius: var(--chattyBorderRadius);\n  box-shadow: var(--elevationHigh);\n  transition: 0.2s ease-in-out;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .messagesWrapper-RpOMA3 .imageWrapper-oMkQl4:hover {\n  transform: scaleY(1.02) scaleX(1.02);\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .messagesWrapper-RpOMA3 .video-2HW4jD {\n  border-radius: var(--chattyBorderRadius);\n  box-shadow: var(--elevationHigh);\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .messagesWrapper-RpOMA3 .embedFull-1HGV2S {\n  background: rgba(0, 0, 0, 0.4);\n  border-left: 0px;\n  border-bottom: var(--chattyBorderRadius) solid;\n  border-radius: var(--chattyBorderRadius);\n  box-shadow: var(--elevationHigh);\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .messagesWrapper-RpOMA3 .embedFull-1HGV2S .grid-1aWVsE {\n  padding-top: 3px;\n  padding-bottom: 10px;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .form-3gdLxP:before {\n  opacity: 0;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .channelTextArea-1FufC0 {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: var(--chattyBorderRadius);\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .channelTextArea-1FufC0 .scrollableContainer-15eg7h {\n  background: transparent !important;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .members-3WRCEx {\n  background: transparent !important;\n}\n#app-mount .app-2CXKsg .chat-2ZfjoI .members-3WRCEx > div {\n  background: transparent !important;\n}\n#app-mount .app-2CXKsg .noChannel-Z1DQK7 {\n  background: transparent;\n  border-radius: var(--chattyBorderRadius);\n  margin: var(--chattyPadding);\n  margin-top: 5px !important;\n}\n#app-mount .app-2CXKsg .noChannel-Z1DQK7 .image-20MDYu {\n  display: none;\n}\n#app-mount .app-2CXKsg .noChannel-Z1DQK7 .flexChild-3PzYmX {\n  background: rgba(0, 0, 0, 0.4);\n  padding: 20px;\n  border-radius: var(--chattyBorderRadius);\n}\n#app-mount .app-2CXKsg .noChannel-Z1DQK7 .flexChild-3PzYmX .title-2CL_z0 {\n  color: #f53e3e;\n  text-shadow: #f53e3e 0px 0px 0px;\n  transition: 0.4s ease-in-out;\n}\n#app-mount .app-2CXKsg .noChannel-Z1DQK7 .flexChild-3PzYmX .title-2CL_z0:hover {\n  text-shadow: #f53e3e 0px 0px 20px;\n}\n#app-mount .app-2CXKsg .noChannel-Z1DQK7 .flexChild-3PzYmX .text-27cdrj {\n  color: #c0c0c0;\n}\n\n*::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.6) !important;\n  border-radius: var(--chattyBorderRadius) !important;\n}\n\n*::-webkit-scrollbar-track-piece {\n  background: transparent !important;\n  border: transparent !important;\n}\n\ncode {\n  background: rgba(0, 0, 0, 0.6) !important;\n  border: none !important;\n  border-radius: var(--chattyBorderRadius) !important;\n}\n\n.theme-dark .container-1ILvLB section {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.theme-dark .container-1ILvLB .header-2C89wJ {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.container-1ILvLB {\n  width: 250px;\n  border-radius: var(--chattyBorderRadius);\n  -webkit-box-shadow: var(--elevation-high);\n  box-shadow: var(--elevation-high);\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n\n.theme-dark .root-g14mjS {\n  background-color: rgba(0, 0, 0, 0);\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n\n.theme-dark .footer-31IekZ {\n  background-color: #00000000;\n  box-shadow: inset 0 1px 0 rgba(47, 49, 54, 0.6);\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n\n.backdropWithLayer-3_uhz4 {\n  opacity: 1 !important;\n  background-color: rgba(0, 0, 0, 0.4) !important;\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n\n.wrapper-1gVUIN {\n  z-index: 2;\n  position: relative;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  background-color: transparent !important;\n  overflow: hidden;\n}\n\n.wrapper-2fEmwW {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.content-3spvdd {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.theme-dark .card-2ART2V:before {\n  background-color: rgba(0, 0, 0, 0.3);\n  border-color: var(--background-primary);\n}\n\n.theme-dark .addGamePopout-3yePJc {\n  background-color: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7) !important;\n}\n\n.scroller-3_YDR2 {\n  background-color: transparent !important;\n}\n\n.menu-1QACrS {\n  border-radius: var(--chattyBorderRadius);\n}\n\n.button-1zW0-r {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n}\n\n.wrapper-2vIMkT {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.wordmark-2u86JB svg {\n  width: 0px;\n}\n\n.theme-dark .wordmark-2u86JB:after {\n  font-family: "Discord";\n  content: "ZEROLIGHT";\n  font-size: 12px;\n  background: rgba(235, 235, 228, 0.521);\n  background-size: 400% 400%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  position: absolute;\n  top: 5px;\n}\n\n.userPopout-2j1gM4 {\n  max-height: 600px !important;\n  border-radius: var(--chattyBorderRadius) !important;\n  background-color: transparent !important;\n  box-shadow: 0px 0px 20px black;\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n}\n\n.avatar-2Vndt_ {\n  border: 6px solid transparent !important;\n  background-color: transparent !important;\n}\n\n.avatar-3QF_VA {\n  border: 8px solid transparent !important;\n}\n\n.bodyInnerWrapper-2bQs1k {\n  background-color: transparent !important;\n}\n\n.footer-3naVBw {\n  background-color: transparent !important;\n}\n\n.textarea-_59yqs:focus {\n  background-color: var(--background-primary);\n}\n\n.body-1Ukv50, .topSection-13QKHs {\n  background-color: transparent !important;\n}\n\n.name-3Uvkvr {\n  font-family: Discord;\n}\n\n.lookFilled-1Gx00P .contents-18-Yxp, .lookInverted-2D7oAl .contents-18-Yxp, .lookLink-9FtZy- .contents-18-Yxp, .lookOutlined-3sRXeN .contents-18-Yxp, .button-1EGGcP.buttonColor-3bP3fX, .button-1EGGcP .buttonColor-3bP3fX {\n  font-family: Discord;\n}\n\n.membersGroup-2eiWxl {\n  font-family: Discord;\n}\n\n.modal-2RrUKJ {\n  background-color: transparent !important;\n}\n\n.header-1zd7se {\n  background-color: rgba(0, 0, 0, 0.6) !important;\n}\n\n.content-2hZxGK {\n  background-color: rgba(0, 0, 0, 0.4) !important;\n}\n\n.footer-31IekZ {\n  background-color: rgba(0, 0, 0, 0.6) !important;\n}\n\n.playlist {\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.contentRegion-3HkfJJ {\n  background: rgba(0, 0, 0, 0.3) !important;\n}\n\n.contentRegionScroller-2_GT_N {\n  background: rgba(0, 0, 0, 0) !important;\n}\n\n.contentWidth-xLB44s {\n  max-width: none;\n}\n\n.stickyHeader-hH_ZLl {\n  border-radius: var(--chattyBorderRadius);\n}\n\n.list-1AJFv_ {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.page-15bX59 {\n  max-width: none !important;\n}\n\n.titleContainer-3fPic2 {\n  background: none;\n}\n\n.toolsContainer-25FL6V {\n  padding-top: 20px;\n}\n\n.scroller-14hecM {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.scroller-39BnzZ {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.list-38_JVu {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.scroller-1J_F7B {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.contentColumn-1C7as6, .customColumn-2n-oKU {\n  max-width: none;\n}\n\n.headerDefault-1wrJcN, .headerClickable-2IVFo9 {\n  background-color: rgba(0, 0, 0, 0.4) !important;\n}\n\n.scroller-3X7KbA {\n  background-color: transparent !important;\n}\n\n.powerclock.sticky {\n  background-color: transparent !important;\n  box-shadow: none !important;\n}\n\n.guilds-2JjMmN {\n  background-color: transparent !important;\n}\n\n.pictureInPictureWindow-3ms5Zy {\n  box-shadow: 0px 0px 50px black;\n}\n\n.perksModal-fSYqOq {\n  background-color: var(--background-primary) !important;\n}\n\n.ctaBar-2UsjF2 {\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);\n}\n\n.tier-12tKuZ {\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);\n}\n\n.perk-2WeBWW {\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);\n}\n\n.accountProfileCard-lbN7n- {\n  background-color: transparent !important;\n  background: transparent !important;\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.7);\n  border-radius: var(--chattyBorderRadius) !important;\n}\n\n.accountProfileCard-lbN7n- {\n  box-shadow: 0px 0px 20px black;\n}\n\n.settingsBanner-1eDJ5w {\n  height: 250px;\n}\n\n.avatar-3mTjvZ {\n  top: 230px;\n  border: 7px solid transparent !important;\n  background-color: transparent !important;\n}\n\n.fieldButton-14lHvK {\n  margin-right: 10px;\n}\n\n.fieldTitle-2g5r_V {\n  margin-left: 20px !important;\n  margin-top: 10px !important;\n}\n\n.colorHeaderPrimary-jN_yGr {\n  margin-left: 40px !important;\n}\n\n.scroller-kQBbkU {\n  bottom: 10px;\n}\n\n.threadSidebar-1o3BTy {\n  margin: var(--chattyPadding);\n  margin-top: 5px !important;\n  border-radius: var(--chattyBorderRadius);\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.container-ZMc96U.themed-Hp1KC_ {\n  background: transparent !important;\n}\n\n.applicationStore-2nk7Lo {\n  background-color: transparent !important;\n  margin: var(--chattyPadding);\n  margin-top: 5px !important;\n}\n\n.homeWrapperNormal-bu1BS6 {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: var(--chattyBorderRadius);\n}\n\n.scroller-29cQFV {\n  background-color: transparent !important;\n}\n\n.callContainer-HtHELf {\n  background-color: transparent !important;\n}\n\n.container-2o3qEW {\n  background: transparent !important;\n}\n\n.navigationBar-3r0IQK {\n  background-color: transparent !important;\n}\n\n.header-1zd7se {\n  background-color: transparent !important;\n}\n\n.content-2hZxGK {\n  background-color: transparent !important;\n}\n\n.theme-dark .footer-31IekZ {\n  background-color: transparent !important;\n}\n\n.close-1mLglB {\n  color: black !important;\n}\n\n.base-21yXnu {\n  color: white;\n}\n\n.container-x8Y1ix:hover {\n  background-color: rgba(255, 255, 255, 0.609) !important;\n}\n\n.theme-light .lookFilled-1Gx00P.colorGrey-2DXtkV {\n  background-color: #5865f2;\n}\n\n.theme-light .lookFilled-1Gx00P.colorGrey-2DXtkV:hover {\n  background-color: #5865f2b4;\n}\n\n.tile-2TcwiO {\n  background-color: transparent !important;\n}\n\n.button-3Vyz67 {\n  background-color: #f47fff !important;\n}\n\n.buttonIcon-2Zsrs2 {\n  width: 15px;\n  height: 15px;\n}\n\n.powercord-toast {\n  background-image: #fff !important;\n  border: none !important;\n  overflow: hidden !important;\n  box-shadow: var(--elevation-high) !important;\n  border-radius: var(--chattyBorderRadius) !important;\n}\n.powercord-toast .header {\n  background: rgba(0, 0, 0, 0.4) !important;\n  z-index: 2;\n  box-shadow: none !important;\n}\n.powercord-toast .contents {\n  z-index: 2;\n}\n.powercord-toast .contents .inner {\n  background: none !important;\n  border: none !important;\n}\n.powercord-toast .buttons {\n  z-index: 2;\n}\n\n.powercord-toast:before {\n  content: "";\n  position: absolute;\n  background: var(--chattyBackgroundImage);\n  filter: brightness(0.4) blur(10px);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  transform: scale(1.2);\n}\n\nbutton {\n  border-radius: var(--chattyBorderRadius) !important;\n}\n\n.lookOutlined-3sRXeN.colorGreen-29iAKY {\n  background: #2f8f644a;\n}\n\n.lookOutlined-3sRXeN.colorYellow-2JqYwt {\n  background: #d892194a;\n}\n\n.lookOutlined-3sRXeN.colorBlack-1jwPVL {\n  background: #0404054a;\n}\n\n.lookOutlined-3sRXeN.colorGrey-2DXtkV {\n  background: #747f8d4a;\n}\n\n.lookOutlined-3sRXeN.colorLink-35jkBc {\n  background: #00b0f44a;\n}\n\n.lookOutlined-3sRXeN.colorPrimary-3b3xI6 {\n  background: #ffffff4a;\n}\n\n.lookOutlined-3sRXeN.colorRed-1TFJan {\n  background: #f047474a;\n}\n\n.lookOutlined-3sRXeN.colorWhite-rEQuAQ {\n  background: #ffffff4a;\n}\n\n.lookOutlined-3sRXeN.colorBrand-3pXr91 {\n  background: #7289da4a;\n}\n\n.backdrop-2ByYRN {\n  background: #00000055 !important;\n  opacity: 1 !important;\n}\n\n.inner-3je51t {\n  background: none !important;\n}\n\n.root-SR8cQa {\n  background: none !important;\n  backdrop-filter: blur(var(--chattyBlur)) brightness(0.8);\n  border-radius: var(--chattyBorderRadius);\n}\n\n.inner-3je51t .body-3ND3kc {\n  background: #00000066;\n}\n\n.topSectionSpotify-1lI0-P {\n  background: #1db954a8;\n}\n\n.connectedAccount-36nQx7 {\n  border: none;\n  background: #00000066;\n  border-radius: var(--chattyBorderRadius);\n}\n\n.userInfoSection-2acyCx + .userInfoSection-2acyCx {\n  border-top: none;\n}\n\n.topSectionNormal-2-vo2m {\n  background: #000000a8;\n}\n\n.topSectionNormal-2-vo2m .tabBarContainer-1s1u-z {\n  border-top: none;\n}\n\n.lookFilled-1Gx00P.colorGreen-29iAKY {\n  background: #00000066;\n  border-radius: var(--chattyBorderRadius);\n}\n\n.lookInverted-2D7oAl.colorGreen-29iAKY {\n  background: #1db954a8;\n  color: #fff;\n  border-radius: var(--chattyBorderRadius);\n}\n\n.lookInverted-2D7oAl.colorGreen-29iAKY:hover {\n  background: #1db954ff;\n}\n\n.lookFilled-1Gx00P.colorGreen-29iAKY:hover {\n  background: #7289daa8;\n}\n\n.topSectionPlaying-1J5E4n {\n  background: #7289daa8;\n}\n\n.lookInverted-2D7oAl.colorBrand-3pXr91 {\n  background: #7289daa8;\n  border-radius: var(--chattyBorderRadius);\n  color: #fff;\n}\n\n.lookInverted-2D7oAl.colorBrand-3pXr91:hover {\n  background: #7289daff;\n}\n\n.topSectionStreaming-1Tpf5X {\n  background: #593695a8;\n}\n\n.buttonInvertedPurple-WtBglX {\n  border-radius: var(--chattyBorderRadius);\n  background: #593695a8;\n  color: #fff;\n}\n\n.buttonInvertedPurple-WtBglX:hover {\n  background: #593695ff;\n}\n\n.topSectionStreaming-1Tpf5X .lookOutlined-3sRXeN.colorWhite-rEQuAQ {\n  background: #593695a8 !important;\n}\n\n.topSectionStreaming-1Tpf5X .lookOutlined-3sRXeN.colorWhite-rEQuAQ:hover {\n  background: #593695ff !important;\n}\n\n.topSectionPlaying-1J5E4n .lookOutlined-3sRXeN.colorWhite-rEQuAQ {\n  background: #7289daa8 !important;\n}\n\n.topSectionPlaying-1J5E4n .lookOutlined-3sRXeN.colorWhite-rEQuAQ:hover {\n  background: #7289daff !important;\n}\n\n.tabBarContainer-1s1u-z {\n  border-top: none;\n  height: 40px;\n}\n\n.tabBar-2MuP6- {\n  height: 40px;\n}\n\n.layers-OrUESM .layer-86YKbF {\n  background: transparent;\n}\n.layers-OrUESM .layer-86YKbF .standardSidebarView-3F1I7i {\n  background: transparent;\n  margin: var(--chattyPadding);\n}\n.layers-OrUESM .layer-86YKbF .standardSidebarView-3F1I7i .sidebarRegion-1VBisG {\n  margin-right: var(--chattyPadding);\n  flex: 0 0 218px;\n  border-radius: var(--chattyBorderRadius);\n  overflow: hidden;\n  background: transparent;\n}\n.layers-OrUESM .layer-86YKbF .standardSidebarView-3F1I7i .sidebarRegion-1VBisG .sidebar-nqHbhN {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  background: transparent;\n}\n.layers-OrUESM .layer-86YKbF .standardSidebarView-3F1I7i .sidebarRegion-1VBisG .sidebarRegionScroller-FXiQOh {\n  background: rgba(0, 0, 0, 0.6);\n}\n.layers-OrUESM .layer-86YKbF .standardSidebarView-3F1I7i .contentRegion-3HkfJJ {\n  width: 100px;\n  background: transparent;\n  border-radius: var(--chattyBorderRadius);\n  overflow: hidden;\n}\n.layers-OrUESM .layer-86YKbF .standardSidebarView-3F1I7i .contentRegion-3HkfJJ .contentRegionScroller-2_GT_N {\n  background: rgba(0, 0, 0, 0.6);\n}\n.layers-OrUESM .layer-86YKbF .standardSidebarView-3F1I7i .contentRegion-3HkfJJ .contentRegionScroller-2_GT_N .contentColumn-1C7as6 {\n  max-width: 100%;\n}\n.layers-OrUESM .layer-86YKbF .standardSidebarView-3F1I7i .contentRegion-3HkfJJ .contentRegionScroller-2_GT_N .contentColumn-1C7as6 .background-3d_SjE {\n  border-radius: var(--chattyBorderRadius);\n  background: rgba(0, 0, 0, 0.3);\n  padding: 20px;\n}\n.layers-OrUESM .layer-86YKbF .standardSidebarView-3F1I7i .contentRegion-3HkfJJ .contentRegionScroller-2_GT_N .contentColumn-1C7as6 .background-3d_SjE .avatarUploaderInner-yEhTv5 {\n  border-radius: var(--chattyBorderRadius);\n}\n.layers-OrUESM .layer-86YKbF .standardSidebarView-3F1I7i .contentRegion-3HkfJJ .contentRegionScroller-2_GT_N .contentColumn-1C7as6 .background-3d_SjE .fieldList-in8WkP {\n  border-radius: var(--chattyBorderRadius);\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.privateChannels-1nO12o .content-3YMskv :nth-child(3) {\n  display: none !important;\n}\n\n:root {\n  --chattyBackgroundImage: url(https://source.unsplash.com/daily);\n  --chattyBorderRadius: 15px;\n  --chattyPadding: 10px;\n  --chattyBlur: 5px;\n  --interactive-muted: #D08770;\n  --background-primary: rgba(0, 0, 0, 0.2);\n  --background-secondary: rgba(0, 0, 0, 0.3);\n  --background-secondary-alt: rgba(0, 0, 0, 0.3);\n  --background-tertiary: rgb(39, 39, 39);\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Chatty",["",{type:"text-input",text:"Chattybackgroundimage",oninput:function(n){document.body.style.setProperty("--chattyBackgroundImage",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--chattyBackgroundImage")||"url(https://source.unsplash.com/daily)";return console.log(n),n}},{type:"text-input",text:"Chattyborderradius",oninput:function(n){document.body.style.setProperty("--chattyBorderRadius",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--chattyBorderRadius")||"15px";return console.log(n),n}},{type:"text-input",text:"Chattypadding",oninput:function(n){document.body.style.setProperty("--chattyPadding",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--chattyPadding")||"10px";return console.log(n),n}},{type:"text-input",text:"Chattyblur",oninput:function(n){document.body.style.setProperty("--chattyBlur",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--chattyBlur")||"5px";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a.remove();try{goosemodScope.settings.removeItem("Chatty")}catch(r){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--chattyBackgroundImage",document.body.style.getPropertyValue("--chattyBackgroundImage")],["--chattyBorderRadius",document.body.style.getPropertyValue("--chattyBorderRadius")],["--chattyPadding",document.body.style.getPropertyValue("--chattyPadding")],["--chattyBlur",document.body.style.getPropertyValue("--chattyBlur")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=r(regeneratorRuntime.mark(function n(r){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(r){return n.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default