parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,e,t,a,r,o,s){try{var i=n[o](s),c=i.value}catch(l){return void t(l)}i.done?e(c):Promise.resolve(c).then(a,r)}function e(e){return function(){var t=this,a=arguments;return new Promise(function(r,o){var s=e.apply(t,a);function i(e){n(s,r,o,i,c,"next",e)}function c(e){n(s,r,o,i,c,"throw",e)}i(void 0)})}}var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a={goosemodHandlers:{onImport:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode(':root {\n  \t/* Headings */\n    --header-primary: #fff;\n  \t/* Replies and stuff */\n    --header-secondary: #b9bbbe;\n  \t/* Normal text */\n    --text-normal: #cccccc;\n  \t/* # & stuff */\n    --text-muted: #72767d;\n  \t/* Links */\n    --text-link: #7289DA;\n  \t/* Normal channels (every message read and not muted) */\n    --channels-default: #8e9297;\n  \t/* All the buttons */\n    --interactive-normal: #b9bbbe;\n  \t/* When you hover over the buttons */\n    --interactive-hover: #dcddde;\n  \t/* When you have clicked on a button */\n    --interactive-active: #fff;\n  \t/* Muted channels */\n    --interactive-muted: #4f545c;\n  \t/* Main background */\n    --background-primary: #000000;\n    --background-color: #000;\n  \t/* Channel list */\n    --background-secondary: #1a1a1a;\n  \t/* Thingy around the whole app on Windows*/\n    --background-tertiary: #333333;\n  \t/* Accent. Includes the boost icon background, but also the reply line */\n    --background-accent: #333;\n  \t/* Hover thingy with badges and stuff */\n    --background-floating: #333333;\n  \t/* Channel hover thingy */\n    --background-modifier-hover: #000000;\n  \t/* When you hold the channel */\n    --background-modifier-active: #333333;\n  \t/* Current selected channel */\n    --background-modifier-selected: #333333;\n  \t/* That line at the top of channels */\n    --background-modifier-accent: #333333;\n  \t/* A line that seperates the server name and current channel with the display */\n    --elevation-low: hidden;\n  \t/* The shadow from when you hover on a server\'s icon */\n    --elevation-high: 0 8px 16px rgba(0, 0, 0, 0.24);\n  \t/* Not sure what this does */\n    --guild-header-text-shadow: 0 1px 1px #007aff;\n  \t/* The text input field at the bottom */\n    --channeltextarea-background: #272a2e;\n  \t/* Also not sure what this does */\n    --activity-card-background: #007aff;\n  \t/* Background in the Installed Plugins boxes */\n    --deprecated-card-bg: #1a1a1a;\n  \t/* Toast stuff. Don\'t touch */\n    --toast-background: var(--background-primary);\n    --toast-header: var(--background-tertiary);\n    --toast-contents: var(--background-secondary);\n    --toast-border: var(--background-tertiary);\n    --toast-box-shadow: rgba(0, 0, 0, .2);;\n    --rs-small-spacing: 2px;\n    --rs-large-spacing: 3px;\n    --rs-width: 2px;\n    --rs-avatar-shape: 10%;\n    --rs-online-color: #43b581;\n    --rs-idle-color: #faa61a;\n    --rs-dnd-color: #f04747;\n    --rs-offline-color: #636b75;\n    --rs-streaming-color: #643da7;\n    --rs-invisible-color: #43b581;\n}\n\n/* Removes theme switcher (Light/Dark) */\n.marginTop40-i-78cZ:nth-child(2) {\n  display: none;\n}\n\n/* Friends list */\n.tabBody-3YRQ8W {\n\tbackground-color: black\n}\n\n/* Tag for Darkcord Creator */\n.avatar-1BDn8e[src*="618082876730376202"] + h2 .username-1A8OIy::after,\n.avatar-3EQepX[data-user-id="618082876730376202"] + .headerInfo-30uryT .username-2b1r56::after,\n.avatar-SmRFf2[src*="618082876730376202"] + h2 .title-eS5yk3::after\n{\n    content: \'DARKCORD CREATOR\';\n    color: #fff;\n    background: #5865F2;\n    display: inline-block;\n    font-size: 10px;\n    font-weight: 500;\n    height: 1.28em;\n    padding: 1px 4px;\n    border-radius: 3px;\n    line-height: 1.3;\n    margin-left: 4px;\n}\n\n/* Darkcord version in settings */\n.info-1VyQPT::after {\n\tcontent: "Darkcord 1.2.1";\n\tcolor: #72767D;\n\tfont-size: small;\n}\n\ndiv .scroller-2LSbBU auto-Ge5KZx scrollerBase-289Jih disableScrollAnchor-3V9UtP {\n  background-color: #000;\n}\n\ndiv .sidebarRegionScroller-3MXcoP thin-1ybCId scrollerBase-289Jih fade-2kXiP2 {\n  background-color: #1a1a1a1a\n}\n\n.buttons-3JBrkn {opacity: 0; transition: opacity 0.1s;}\n.channelTextArea-rNsIhG:hover .buttons-3JBrkn {opacity: 1.0;}\n\n.attachWrapper-2TRKBi {order:1; margin-left:9px;}\n.attachButton-2WznTc {padding-right:0px}\n\n.uploadModal-2ifh8j .buttons-3JBrkn {opacity: 1.0;}\n\n/*Dansk/Norsk*/[aria-label="Send en gave"],\n/*Deutsch*/[aria-label="Ein Geschenk senden"],\n/*English*/[aria-label="Send a gift"],\n/*Español*/[aria-label="Enviar un regalo"],\n/*Français*/[aria-label="Envoyer un cadeau"],\n/*Hrvatski*/[aria-label="Pošalji poklon"],\n/*Italiano*/[aria-label="Invia un regalo"],\n/*Lietuviškai*/[aria-label="Siųsti dovaną"],\n/*Magyar*/[aria-label="Ajándék küldése"],\n/*Nederlands*/[aria-label="Verstuur een cadeau"],\n/*Polski*/[aria-label="Wyślij prezent"],\n/*Português do Brasil*/[aria-label="Enviar um presente"],\n/*Română*/[aria-label="Trimite un cadou"],\n/*Suomi*/[aria-label="Lähetä lahja"],\n/*Svenska*/[aria-label="Skicka en gåva"],\n/*Tiếng Việt*/[aria-label="Tặng một món quà"],\n/*Türkçe*/[aria-label="Bir hediye gönder"],\n/*Čeština*/[aria-label="Odeslat dárek"],\n/*Ελληνικά*/[aria-label="Στείλτε ένα δώρο"],\n/*български*/[aria-label="Изпрати подарък"],\n/*Русский*/[aria-label="Отправить подарок"],\n/*Українська*/[aria-label="Надіслати подарунок"],\n/*ไทย*/[aria-label="ส่งของขวัญ"],\n/*中文*/[aria-label="发送礼物"],\n/*日本語*/[aria-label="ギフトを贈る"],\n/*繁體中文*/[aria-label="發送禮物"],\n/*한국어*/[aria-label="선물 보내기"] {\n    display: none !important;\n}\n\n\n.search-36MZv- {order: -1;}\n.searchBar-3dMhjb {\n    width: 28px;\n    transition: width 0.6s ease-in-out;\n    color:#fff;\n    background: none;\n}\n.focused-31_ccS .searchBar-3dMhjb,\n.open-6_Y_aH .searchBar-3dMhjb,\n.searchBar-3dMhjb:hover {\n    width: 240px;\n    background: var(--background-tertiary);\n}\n.icon-3cZ1F_{height: 24px;width: 24px;color:var(--interactive-normal);}\n.iconContainer-O4O2CN{bottom: 3px;}\n.search-36MZv-{margin-left: 0px;}\n\n.repliedMessage-VokQwo {\n    flex-direction: column;\n    align-items: start;\n}\n.replyAvatar-1K9Wmr {\n    display: none;\n}\n.repliedMessage-VokQwo .username-1A8OIy {\n    opacity: 1;\n}\n.repliedTextContentIcon-1ivTae {\n    margin-left: 0;\n}\n\n.note-3HfJZ5 { display: none; }\n.footer-1fjuF6 { padding-bottom: 17.5px; margin-top: -15px }\n.bodyTitle-Y0qMQz { display: none }\n.bodyInnerWrapper-Z8WDxe:before { \n  content: \'Roles\';\n  font-weight: 700;\n  color: var(--header-secondary);\n}\n\n.base-1pYU8j {\n    transition: all 0.5s;\n}\n.base-1pYU8j:hover {\n    transition: all 0s;\n    transform: scale(1.02);\n}\n\n.tip-2cgoli, .tipTitle-GL9qAt {\n  font-size: 0px!important;\n}\n.tip-2cgoli .keybind-2jbzrT {\n  display:none;\n}\n.tipTitle-GL9qAt::after {\n  font-size: 16px;\n  content: "Loading Discord"\n}\n.tip-2cgoli::after {\n  font-size: 16px;\n  content: \'Thanks for using Darkcord!\';\n}\n\n.iconWrapper-2OrFZ1[aria-label="Update Ready!"] {\n  position: fixed;\n  right: 2px;\n  top: 80px;\n  background: var(--background-tertiary);\n  border-radius: 10px;\n  width: 300px;\n  height: 130px;\n  border-right: 5px solid #43B581;\n  transition: background 1s;\n}\n.iconWrapper-2OrFZ1[aria-label="Update Ready!"]::before {\n  position: relative;\n  display: block;\n  content: "A Discord update has been released.";\n  font-weight: 700;\n  top: 13px;\n  text-align: center;\n}\n.iconWrapper-2OrFZ1[aria-label="Update Ready!"]::after {\n  position: relative;\n  display: block;\n  content: "It is recommended to install it now to receive brand new features & patches.";\n  top: 22px;\n  text-align: center;\n}\n.iconWrapper-2OrFZ1[aria-label="Update Ready!"] > .icon-22AiRD {\n  position: fixed;\n  right: 148px;\n  top: 173px;\n}\n\nimg[src="/assets/9a43e631d506ae4818ecefc825dc02ad.svg"], /*plus*/\nimg[src="/assets/13c8662cff8e029799a35878b56e23eb.svg"], /*minus*/\nimg[src="/assets/e37bc714ecd911af7c558f5aaa0c4464.svg"], /*ant*/\nimg[src="/assets/d6e12f410c99374f88879450daaaced9.svg"], /*spider*/\nimg[src="/assets/f34c63197816c3e60bea4a9537c5fffa.svg"], /*telephone*/\nimg[src="/assets/05a1abc6388a96e2a536650433c12fca.svg"], /*video camera*/\nimg[src="/assets/733a0db94b390b2fd5da87408285a079.svg"], /*movie camera*/\nimg[src="/assets/16520d89e684777eedd536346015e71f.svg"], /*electric plug*/\nimg[src="/assets/22bbea32f8826e963038329aee825bc1.svg"], /*chess pawn*/\nimg[src="/assets/1d2dc7d83ed3182e3348d4f216c15c87.svg"], /*8-pointed star*/\nimg[src="/assets/3d663bbe9d97bc976c24ec4d125fe2b3.svg"], /*div sign*/\nimg[src="/assets/133b77ff9fc321682fed3cde12d6355c.svg"], /*multiplication sign*/\nimg[src="/assets/1679bb713b6a99e6ddf111d45400be3a.svg"], /*$ sign*/\nimg[src="/assets/da56d5c7e4409c0c1640ff6ba21ec1ad.svg"], /*currency exchange*/\nimg[src="/assets/502afa9807a8da920a357e25c14da10a.svg"], /*wavy dash*/\nimg[src="/assets/48c9c24b660f8c392a56f8d28c86f1c3.svg"], /*curly loop*/\nimg[src="/assets/6a86f8cca40da89386aa7e9eca926da7.svg"], /*end*/\nimg[src="/assets/6c928e43c553124e23e45c31c6ddbece.svg"], /*back*/\nimg[src="/assets/b8b439115436db0c0bbff081749a1ddb.svg"], /*on!*/\nimg[src="/assets/fa259978fede6539d40db4b59a2b0f66.svg"], /*top*/\nimg[src="/assets/b3f45308df051ef73d8cf63ffe0976c3.svg"], /*soon*/\nimg[src="/assets/7b3ff12d16d96ca77345da9450986dc7.svg"], /*check mark*/\nimg[src="/assets/6278365424fa5701d3b185e2d9fe8225.svg"], /*b. circle*/\nimg[src="/assets/60c5854fe77ca7a4946b7c801c559f4a.svg"], /*b. small square*/\nimg[src="/assets/7d4f02f7354aee0b30e7e5a35579fff4.svg"], /*b. m. small square*/\nimg[src="/assets/b6a3073e1281d1ef79d48ef130c183b2.svg"], /*b. medium square*/\nimg[src="/assets/d0e23cdf2386056cc64e775a6248ed17.svg"], /*b. large square*/\nimg[src="/assets/3fe9fcacdbee990bd0d873135689bd5b.svg"], /*spades*/\nimg[src="/assets/b67a375a6b8f5caeacff463835c44011.svg"], /*clubs*/\nimg[src="/assets/d91cb297561a6bc50f8c6918d428bc61.svg"]  /*black heart*/{\n  filter: invert(1);\n}\n\n.channelTextArea-rNsIhG { margin-bottom: 0; }\n.form-2fGMdU { padding: 0; }\n.inner-MADQqc { padding-top: 4px; }\n\n.base-gE7OpD { /* typing and slowmode stuff */\n    top: -24px; /* height is 24px */\n    background-color: var(--background-primary);\n}\n\n/* Message bar on the bottom */\n.scrollableContainer-2NUZem {\n    border-radius: 0px;\n    min-height: 53px;\n}\n\n/* Announcement channel bar on the bottom (to folow the channel) */\n\n.wrapper-39oAo3 {\n\tborder-radius: 0px;\n  position: absolute; \n\tbottom: 0px;\n\tmargin-bottom: 0px !important;\n\tbackground-color: #26292d;\n\theight: 21px\n}\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Darkcord",["",{type:"text-input",text:"Background Color",oninput:function(n){document.body.style.setProperty("--background-color",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--background-color")||"#000";return console.log(n),n}},{type:"text-and-color",text:"Toast Box Shadow",oninput:function(n){document.body.style.setProperty("--toast-box-shadow",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--toast-box-shadow")||"rgba(0, 0, 0, .2);";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-input",text:"Radial Status: Small Spacing",oninput:function(n){document.body.style.setProperty("--rs-small-spacing",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--rs-small-spacing")||"2px";return console.log(n),n}},{type:"text-input",text:"Radial Status: Large Spacing",oninput:function(n){document.body.style.setProperty("--rs-large-spacing",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--rs-large-spacing")||"3px";return console.log(n),n}},{type:"text-input",text:"Radial Status: Width",oninput:function(n){document.body.style.setProperty("--rs-width",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--rs-width")||"2px";return console.log(n),n}},{type:"text-input",text:"Radial Status: Avatar Shape",oninput:function(n){document.body.style.setProperty("--rs-avatar-shape",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--rs-avatar-shape")||"10%";return console.log(n),n}},{type:"text-and-color",text:"Radial Status: Online Color",oninput:function(n){document.body.style.setProperty("--rs-online-color",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--rs-online-color")||"#43b581";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Radial Status: Idle Color",oninput:function(n){document.body.style.setProperty("--rs-idle-color",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--rs-idle-color")||"#faa61a";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Radial Status: DND Color",oninput:function(n){document.body.style.setProperty("--rs-dnd-color",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--rs-dnd-color")||"#f04747";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Radial Status: Offline Color",oninput:function(n){document.body.style.setProperty("--rs-offline-color",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--rs-offline-color")||"#636b75";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Radial Status: Streaming Color",oninput:function(n){document.body.style.setProperty("--rs-streaming-color",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--rs-streaming-color")||"#643da7";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Radial Status: Invisible Color",oninput:function(n){document.body.style.setProperty("--rs-invisible-color",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--rs-invisible-color")||"#43b581";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.remove();try{goosemodScope.settings.removeItem("Darkcord")}catch(e){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--background-color",document.body.style.getPropertyValue("--background-color")],["--toast-box-shadow",document.body.style.getPropertyValue("--toast-box-shadow")],["--rs-small-spacing",document.body.style.getPropertyValue("--rs-small-spacing")],["--rs-large-spacing",document.body.style.getPropertyValue("--rs-large-spacing")],["--rs-width",document.body.style.getPropertyValue("--rs-width")],["--rs-avatar-shape",document.body.style.getPropertyValue("--rs-avatar-shape")],["--rs-online-color",document.body.style.getPropertyValue("--rs-online-color")],["--rs-idle-color",document.body.style.getPropertyValue("--rs-idle-color")],["--rs-dnd-color",document.body.style.getPropertyValue("--rs-dnd-color")],["--rs-offline-color",document.body.style.getPropertyValue("--rs-offline-color")],["--rs-streaming-color",document.body.style.getPropertyValue("--rs-streaming-color")],["--rs-invisible-color",document.body.style.getPropertyValue("--rs-invisible-color")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=e(regeneratorRuntime.mark(function n(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}};exports.default=a;
},{}]},{},["index.js"], null);parcelRequire('index.js').default