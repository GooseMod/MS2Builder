parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,a,u){try{var i=t[a](u),l=i.value}catch(c){return void o(c)}i.done?e(l):Promise.resolve(l).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,a){var u=e.apply(o,n);function i(e){t(u,r,a,i,l,"next",e)}function l(e){t(u,r,a,i,l,"throw",e)}i(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('/**\n * @name Discord.tv\n * @version 1.6\n * @description Theme based on Twitch.tv design\n * @author userMacieG#7591\n * @invite hQUtgkr\n * @donate https://www.paypal.com/donate?hosted_button_id=AQD8ZTW2H6NKG\n * @website https://userMacieG.github.io/theme.html\n * @source https://github.com/userMacieG/userMacieG.github.io/blob/master/betterdiscord/discord-tv.theme.css\n*/\n\n@import url("https://userMacieG.github.io/betterdiscord/discord-tv/main.css");\n')),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("Discord.tv",["",{type:"text-and-color",text:"Color Brand",oninput:function(t){document.body.style.setProperty("--color-brand",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-brand")||"#9147ff";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color Brand Darker",oninput:function(t){document.body.style.setProperty("--color-brand-darker",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-brand-darker")||"#772ce8";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color Brand Lighter",oninput:function(t){document.body.style.setProperty("--color-brand-lighter",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-brand-lighter")||"#a970ff";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color Red",oninput:function(t){document.body.style.setProperty("--color-red",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-red")||"#e91916";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color Red Darker",oninput:function(t){document.body.style.setProperty("--color-red-darker",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-red-darker")||"#bb1411";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color Orange",oninput:function(t){document.body.style.setProperty("--color-orange",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-orange")||"#ffca61";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color Orange Darker",oninput:function(t){document.body.style.setProperty("--color-orange-darker",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-orange-darker")||"#fcc439";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Background Orange",oninput:function(t){document.body.style.setProperty("--background-orange",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-orange")||"rgba(255, 165, 0, 0.10)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color Green",oninput:function(t){document.body.style.setProperty("--color-green",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-green")||"#00e6cb";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color Green Darker",oninput:function(t){document.body.style.setProperty("--color-green-darker",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-green-darker")||"#00ad96";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color Gray",oninput:function(t){document.body.style.setProperty("--color-gray",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-gray")||"#72767d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color Gray Darker",oninput:function(t){document.body.style.setProperty("--color-gray-darker",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color-gray-darker")||"#4f545c";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Shadow",oninput:function(t){document.body.style.setProperty("--shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--shadow")||"0 4px 8px rgba(0, 0, 0, .4), 0 0 4px rgba(0, 0, 0, .4)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Shadow Bottom",oninput:function(t){document.body.style.setProperty("--shadow-bottom",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--shadow-bottom")||"0 1px 2px rgba(0, 0, 0, .9), 0 0 2px rgba(0, 0, 0, .9)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"User Background",oninput:function(t){document.body.style.setProperty("--user-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--user-background")||"#9147ff";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Status Positive Text",oninput:function(t){document.body.style.setProperty("--status-positive-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-positive-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Status Danger Text",oninput:function(t){document.body.style.setProperty("--status-danger-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-danger-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Info Positive Text",oninput:function(t){document.body.style.setProperty("--info-positive-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-positive-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Info Warning Text",oninput:function(t){document.body.style.setProperty("--info-warning-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-warning-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Info Danger Text",oninput:function(t){document.body.style.setProperty("--info-danger-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-danger-text")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Info Help Background",oninput:function(t){document.body.style.setProperty("--info-help-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-help-background")||"rgba(0, 176, 244, 0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Info Help Foreground",oninput:function(t){document.body.style.setProperty("--info-help-foreground",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-help-foreground")||"#00b0f4";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Info Help Text",oninput:function(t){document.body.style.setProperty("--info-help-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--info-help-text")||"#fff";return console.log(t),t}},{type:"text-input",text:"Status Warning Text",oninput:function(t){document.body.style.setProperty("--status-warning-text",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-warning-text")||"#000";return console.log(t),t}},{type:"text-input",text:"Font Primary",oninput:function(t){document.body.style.setProperty("--font-primary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-primary")||'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif';return console.log(t),t}},{type:"text-input",text:"Font Display",oninput:function(t){document.body.style.setProperty("--font-display",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-display")||'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif';return console.log(t),t}},{type:"text-input",text:"Channeltabs Tabwidth",oninput:function(t){document.body.style.setProperty("--channelTabs-tabWidth",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channelTabs-tabWidth")||"190px";return console.log(t),t}},{type:"text-input",text:"Channeltabs Tabheight",oninput:function(t){document.body.style.setProperty("--channelTabs-tabHeight",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channelTabs-tabHeight")||"20px";return console.log(t),t}},{type:"text-input",text:"Channeltabs Favheight",oninput:function(t){document.body.style.setProperty("--channelTabs-favHeight",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--channelTabs-favHeight")||"14px";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Discord.tv")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--color-brand",document.body.style.getPropertyValue("--color-brand")],["--color-brand-darker",document.body.style.getPropertyValue("--color-brand-darker")],["--color-brand-lighter",document.body.style.getPropertyValue("--color-brand-lighter")],["--color-red",document.body.style.getPropertyValue("--color-red")],["--color-red-darker",document.body.style.getPropertyValue("--color-red-darker")],["--color-orange",document.body.style.getPropertyValue("--color-orange")],["--color-orange-darker",document.body.style.getPropertyValue("--color-orange-darker")],["--background-orange",document.body.style.getPropertyValue("--background-orange")],["--color-green",document.body.style.getPropertyValue("--color-green")],["--color-green-darker",document.body.style.getPropertyValue("--color-green-darker")],["--color-gray",document.body.style.getPropertyValue("--color-gray")],["--color-gray-darker",document.body.style.getPropertyValue("--color-gray-darker")],["--shadow",document.body.style.getPropertyValue("--shadow")],["--shadow-bottom",document.body.style.getPropertyValue("--shadow-bottom")],["--user-background",document.body.style.getPropertyValue("--user-background")],["--status-positive-text",document.body.style.getPropertyValue("--status-positive-text")],["--status-danger-text",document.body.style.getPropertyValue("--status-danger-text")],["--info-positive-text",document.body.style.getPropertyValue("--info-positive-text")],["--info-warning-text",document.body.style.getPropertyValue("--info-warning-text")],["--info-danger-text",document.body.style.getPropertyValue("--info-danger-text")],["--info-help-background",document.body.style.getPropertyValue("--info-help-background")],["--info-help-foreground",document.body.style.getPropertyValue("--info-help-foreground")],["--info-help-text",document.body.style.getPropertyValue("--info-help-text")],["--status-warning-text",document.body.style.getPropertyValue("--status-warning-text")],["--font-primary",document.body.style.getPropertyValue("--font-primary")],["--font-display",document.body.style.getPropertyValue("--font-display")],["--channelTabs-tabWidth",document.body.style.getPropertyValue("--channelTabs-tabWidth")],["--channelTabs-tabHeight",document.body.style.getPropertyValue("--channelTabs-tabHeight")],["--channelTabs-favHeight",document.body.style.getPropertyValue("--channelTabs-favHeight")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default