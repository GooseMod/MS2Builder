parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,r,s,n,a){try{var i=t[n](a),p=i.value}catch(m){return void o(m)}i.done?e(p):Promise.resolve(p).then(r,s)}function e(e){return function(){var o=this,r=arguments;return new Promise(function(s,n){var a=e.apply(o,r);function i(e){t(a,s,n,i,p,"next",e)}function p(e){t(a,s,n,i,p,"throw",e)}i(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('/**\n * @name Aroma White\n * @author PhoenixAceVFX#6501\n * @version 1.5\n * @description A mod of Aurora I personally maintain\n * @source https://github.com/PhoenixAceVFX/Aroma-White\n*/\n/*Main Theme*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/main/base.scss";\n/*NEEDED FOR THEME TO FUNCTION!!!*/\n/*After Mods*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/aftermods.scss\');*/\n/*Off By Default*/\n/*DEPRICATED*/\n/*Individual Mods*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/serverlist.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/attachtoright.scss";\n/*On by Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/betterspotifyplayer.scss\');*/\n/*Off By Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/bigavi.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/channelcolors.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/chatbox.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/codeblocks.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/customusernames.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/discordupdate.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/enlargechannelnames.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/hoverchatbuttons.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/hyperlinkhover.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/jumppill.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/largefilemodal.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/nametags.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/newrole.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/profilemod.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/rainbowmentions.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/rainbowtext.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/roundcontextmodals.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/roundreactions.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/searchmodal.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/spoilers.scss";\n/*On by Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/spotifycontrols.scss\');*/\n/*Off By Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/startprompt.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/toolbarsearch.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/vcontrol.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/clyde.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/spotifyspin.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/rgbserver.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/info.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/rgbcontrols.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/camfix.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/scrollbar.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/uielements.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/serverlisthover.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/colorsvg.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/descdrag.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/glowhash.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/betterbuttons.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/betterspotifyplayerv2.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/unreadpill.scss";\n/*On by Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/oldmentions.scss\');*/\n/*Off By Default*/\n@import "https://raw.githubusercontent.com/Logos-King/CatGirlTheme/master/Discolored.scss";\n/*On by Default*/\n@import "https://raw.githubusercontent.com/Logos-King/CatGirlTheme/master/app/import.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/switchestobuttons.scss";\n/*On by Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/servermembersdrawer.scss\');*/\n/*Off By Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/channeldrawers.scss\');*/\n/*Off By Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/loud.scss";\n/*On by Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/messagebubbles.scss\');*/\n/*Off By Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/voicecontrols.scss\');*/\n/*Off By Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/oldchanneldrawer.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/home.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/bannerlock.scss";\n/*On by Default*/\n@import "https://raw.githack.com/leeprky/FullyThemedDiscord/main/source.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/megaemoji.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/homecolor.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/statussize.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/statusbar.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/mutetext.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/newheaders.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/friendgrid.scss";\n/*On by Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/rgbhome.scss\');*/\n/*Off By Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/listtest.scss\');*/\n/*Off By Default*/\n@import "https://tropix126.github.io/BetterDiscordStuff/materialcons/base.scss";\n/*On by Default*/\n@import "https://raw.githack.com/leeprky/MyThemesBasesStuffYeah/lode/round-stuff.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/spotifystatus.scss";\n/*On by Default*/\n@import "https://raw.githubusercontent.com/Controlfreak707/Channel-Icons/main/channelicons.theme.scss";\n/*On by Default*/\n@import "https://raw.githack.com/leeprky/MyThemesBasesStuffYeah/lode/round-stuff.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/modals.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/activityscroll.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/modernmentions.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/statusmodals.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/newbuttons.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/spotifybar.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/serverbuttons.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/audioname.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/betterfriends.scss";\n/*On by Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/bannerrgb.scss\');*/\n/*Off By Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/verifiedbots.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/banners.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/window.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/imagefocus.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/chatbarcolors.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/clearchatbar.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/compacthome.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/emoji.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/imgutilfix.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/icos.scss";\n/*On by Default*/\n@import "https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/hideblocked.scss";\n/*On by Default*/\n/*@import url(\'https://trigon.systems/api/v3/powercord/themes/aroma-white/mods/prideful.scss\');*/\n/*Off by Default*/\n@import "https://leafyluigi.github.io/discord-themes/pyrite/build/userModalLayout.scss";\n/*On by Default*/\n:root {\n  /*User Modal Size*/\n  --user-modal-width: 900px;\n  --user-modal-height: 600px;\n  /*Color Variables*/\n  --main-color: linear-gradient(150deg, var(--gradient1), var(--gradient2));\n  /*Accent Color of the Theme*/\n  --gradient1: #3ecc9c;\n  /*First Gradient Color*/\n  --gradient2: #185a9d;\n  /*Second Gradient Color*/\n  --hover-color: rgb(67, 206, 162);\n  /*Secondary Accent of the Theme*/\n  --main-color-faded: rgba(67, 206, 162, 0.2);\n  /*Faded Main Color*/\n  /*Backdrop Variables*/\n  --backdrop: url(https://i.imgur.com/xcjXx3E.jpg);\n  /*Normal Backdrop*/\n  --backdropblurred: url(https://i.imgur.com/ExNrzGV.jpg);\n  /*Darker/Blurred Version of Backdrop*/\n  --backdrop-darkness: transparent;\n  /*Brightness of var(--backdrop);*/\n  /*Roundness Variables*/\n  --chat-avatar-roundness: 5px !important;\n  /*Roundness of chat avatars*/\n  --media-roundness: 50px !important;\n  /*General Roundness*/\n  --guild-hovered-roundness: 12px !important;\n  /*Roundness of servers on hover*/\n  /*Status Variables*/\n  --online: #43b581 !important;\n  /*Color When someone is Online*/\n  --idle: #faa61a !important;\n  /*Color When someone is Idle*/\n  --dnd: #f04747 !important;\n  /*Color When someone is in Do Not Disturb*/\n  --offline: #636b75 !important;\n  /*Color When someone is offline*/\n  --invisible: #747f8d !important;\n  /*Color When someone is Invisible*/\n  --streaming: #643da7 !important;\n  /*Color When someone is Streaming*/\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Aroma White",["",{type:"text-input",text:"User Modal Width",oninput:function(t){document.body.style.setProperty("--user-modal-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--user-modal-width")||"900px";return console.log(t),t}},{type:"text-input",text:"User Modal Height",oninput:function(t){document.body.style.setProperty("--user-modal-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--user-modal-height")||"600px";return console.log(t),t}},{type:"text-and-color",text:"Gradient1",oninput:function(t){document.body.style.setProperty("--gradient1",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--gradient1")||"#3ecc9c";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Gradient2",oninput:function(t){document.body.style.setProperty("--gradient2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--gradient2")||"#185a9d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Hover Color",oninput:function(t){document.body.style.setProperty("--hover-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--hover-color")||"rgb(67, 206, 162)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Color Faded",oninput:function(t){document.body.style.setProperty("--main-color-faded",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-color-faded")||"rgba(67, 206, 162, 0.2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Backdrop",oninput:function(t){document.body.style.setProperty("--backdrop",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backdrop")||"url(https://i.imgur.com/xcjXx3E.jpg)";return console.log(t),t}},{type:"text-input",text:"Backdropblurred",oninput:function(t){document.body.style.setProperty("--backdropblurred",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backdropblurred")||"url(https://i.imgur.com/ExNrzGV.jpg)";return console.log(t),t}},{type:"text-input",text:"Backdrop Darkness",oninput:function(t){document.body.style.setProperty("--backdrop-darkness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backdrop-darkness")||"transparent";return console.log(t),t}},{type:"text-input",text:"Chat Avatar Roundness",oninput:function(t){document.body.style.setProperty("--chat-avatar-roundness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-avatar-roundness")||"5px";return console.log(t),t}},{type:"text-input",text:"Media Roundness",oninput:function(t){document.body.style.setProperty("--media-roundness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--media-roundness")||"50px";return console.log(t),t}},{type:"text-input",text:"Guild Hovered Roundness",oninput:function(t){document.body.style.setProperty("--guild-hovered-roundness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--guild-hovered-roundness")||"12px";return console.log(t),t}},{type:"text-and-color",text:"Online",oninput:function(t){document.body.style.setProperty("--online",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--online")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Idle",oninput:function(t){document.body.style.setProperty("--idle",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--idle")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"DND",oninput:function(t){document.body.style.setProperty("--dnd",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dnd")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Offline",oninput:function(t){document.body.style.setProperty("--offline",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--offline")||"#636b75";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Invisible",oninput:function(t){document.body.style.setProperty("--invisible",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--invisible")||"#747f8d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Streaming",oninput:function(t){document.body.style.setProperty("--streaming",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--streaming")||"#643da7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Burple",oninput:function(t){document.body.style.setProperty("--burple",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--burple")||"rgb(114, 137, 218)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Scrollbar Thumb Dark",oninput:function(t){document.body.style.setProperty("--scrollbar-thumb-dark",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-thumb-dark")||"#f8f9fa";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Scrollbar Track Dark",oninput:function(t){document.body.style.setProperty("--scrollbar-track-dark",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-track-dark")||"--burple";return console.log(t),t}},{type:"text-input",text:"Border Length",oninput:function(t){document.body.style.setProperty("--border-length",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--border-length")||"3px";return console.log(t),t}},{type:"text-input",text:"Left Margin",oninput:function(t){document.body.style.setProperty("--left-margin",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--left-margin")||"-7px";return console.log(t),t}},{type:"text-and-color",text:"Mentioned Border",oninput:function(t){document.body.style.setProperty("--mentioned-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mentioned-border")||"#FAA61A";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Replying Border",oninput:function(t){document.body.style.setProperty("--replying-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--replying-border")||"#7289da";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Replying Bg",oninput:function(t){document.body.style.setProperty("--replying-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--replying-bg")||"rgba(114, 137, 218, 0.05)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Replying Bg Hover",oninput:function(t){document.body.style.setProperty("--replying-bg-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--replying-bg-hover")||"rgba(114, 137, 218, 0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Hover Animation Speed",oninput:function(t){document.body.style.setProperty("--hover-animation-speed",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--hover-animation-speed")||"0.35s";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Aroma White")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--user-modal-width",document.body.style.getPropertyValue("--user-modal-width")],["--user-modal-height",document.body.style.getPropertyValue("--user-modal-height")],["--gradient1",document.body.style.getPropertyValue("--gradient1")],["--gradient2",document.body.style.getPropertyValue("--gradient2")],["--hover-color",document.body.style.getPropertyValue("--hover-color")],["--main-color-faded",document.body.style.getPropertyValue("--main-color-faded")],["--backdrop",document.body.style.getPropertyValue("--backdrop")],["--backdropblurred",document.body.style.getPropertyValue("--backdropblurred")],["--backdrop-darkness",document.body.style.getPropertyValue("--backdrop-darkness")],["--chat-avatar-roundness",document.body.style.getPropertyValue("--chat-avatar-roundness")],["--media-roundness",document.body.style.getPropertyValue("--media-roundness")],["--guild-hovered-roundness",document.body.style.getPropertyValue("--guild-hovered-roundness")],["--online",document.body.style.getPropertyValue("--online")],["--idle",document.body.style.getPropertyValue("--idle")],["--dnd",document.body.style.getPropertyValue("--dnd")],["--offline",document.body.style.getPropertyValue("--offline")],["--invisible",document.body.style.getPropertyValue("--invisible")],["--streaming",document.body.style.getPropertyValue("--streaming")],["--burple",document.body.style.getPropertyValue("--burple")],["--scrollbar-thumb-dark",document.body.style.getPropertyValue("--scrollbar-thumb-dark")],["--scrollbar-track-dark",document.body.style.getPropertyValue("--scrollbar-track-dark")],["--border-length",document.body.style.getPropertyValue("--border-length")],["--left-margin",document.body.style.getPropertyValue("--left-margin")],["--mentioned-border",document.body.style.getPropertyValue("--mentioned-border")],["--replying-border",document.body.style.getPropertyValue("--replying-border")],["--replying-bg",document.body.style.getPropertyValue("--replying-bg")],["--replying-bg-hover",document.body.style.getPropertyValue("--replying-bg-hover")],["--hover-animation-speed",document.body.style.getPropertyValue("--hover-animation-speed")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default