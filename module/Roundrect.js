parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,r,o,a,i){try{var u=t[a](i),l=u.value}catch(d){return void n(d)}u.done?e(l):Promise.resolve(l).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=e.apply(n,r);function u(e){t(i,o,a,u,l,"next",e)}function l(e){t(i,o,a,u,l,"throw",e)}u(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('/**\n* @name Roundrect\n* @author KawaiiZenbo#8387\n* @description starring your favorite shape\n* @version 1.0\n*/\n\n@import url(\'https://Goose-Nest.github.io/GT-RevertRebrand/src/main.css\');\n@import url("https://discordstyles.github.io/RadialStatus/dist/RadialStatus.css");\n@import url("https://kawaiizenbo.github.io/themes/roundrect/main.css");\n\n:root \n{\n    /* radialstaus settings */\n    --rs-small-spacing: 1px; /* Gap between avatar and status for members list/dms | MUST end in px */\n    --rs-medium-spacing: 2px; /* Gap between avatar and status for User popout | MUST end in px */\n    --rs-large-spacing: 3px; /* Gap between avatar and status for User profiles | MUST end in px */\n\n    --rs-small-width: 2px; /* Thickness of status border for members list/dms | MUST end in px */\n    --rs-medium-width: 3px; /* Thickness of status border for User popout | MUST end in px */\n    --rs-large-width: 4px; /* Thickness of status border for User profile | MUST end in px */\n\n    --rs-avatar-shape: 15%; /* 50% for round - 0% for square */\n\n    --rs-online-color: #43b581; /* Color for online status */\n    --rs-idle-color: #faa61a; /* Color for idle status */\n    --rs-dnd-color: #f04747; /* Color for dnd status */\n    --rs-offline-color: #636b75; /* Color for offline status */\n    --rs-streaming-color: #643da7; /* Color for streaming status */\n    --rs-invisible-color: #747f8d; /* Color for invisible status - Note: this will only show for your own invisibility */\n    --rs-phone-color: var(--rs-online-color); /* Colour of the ring and phone icon when a user is on their phone |  */\n\n    --rs-phone-visible: block; /* Visibility of the phone icon next to a users avatar. | block = visible | none = hidden */\n\n    /* color presets */\n    /* if you want to use a different theme uncomment it and recomment the rest\n\n    /* dark blue mode */\n    --bg1: rgb(24, 28, 37);\n    --bg2: rgb(22, 26, 35);\n    --bg3: rgb(20, 24, 33);\n    --bg4: rgb(18, 22, 31);\n\n    /* dark green mode */\n    /*\n    --bg1: rgb(24, 37, 28);\n    --bg2: rgb(22, 35, 26);\n    --bg3: rgb(20, 33, 24);\n    --bg4: rgb(18, 31, 22);\n    */\n\n    /* brown mode */\n    /*\n    --bg1: rgb(37, 28, 24);\n    --bg2: rgb(35, 26, 22);\n    --bg3: rgb(33, 24, 20);\n    --bg4: rgb(31, 22, 18);\n    */\n\n    /* dark red mode */\n    /*\n    --bg1: rgb(37, 0, 0);\n    --bg2: rgb(35, 0, 0);\n    --bg3: rgb(33, 0, 0);\n    --bg4: rgb(31, 0, 0);\n    */\n\n    /* darkest mode */\n    /*\n    --bg1: rgb(0, 24, 24);\n    --bg2: rgb(0, 22, 22);\n    --bg3: rgb(0, 20, 20);\n    --bg4: rgb(0, 18, 18);\n    */\n\n    /* darker mode */\n    /*\n    --bg1: rgb(37, 37, 37);\n    --bg2: rgb(35, 35, 35);\n    --bg3: rgb(33, 33, 35);\n    --bg4: rgb(31, 31, 31);\n    */\n\n    /* even darker mode */\n    /*\n    --bg1: rgb(24, 24, 24);\n    --bg2: rgb(22, 22, 22);\n    --bg3: rgb(20, 20, 20);\n    --bg4: rgb(18, 18, 18);\n    */\n\n    /* darkest mode */\n    /*\n    --bg1: rgb(0, 0, 0);\n    --bg2: rgb(0, 0, 0);\n    --bg3: rgb(0, 0, 0);\n    --bg4: rgb(0, 0, 0);\n    */\n\n    /* pisscord mode */\n    /*\n    --bg1: rgb(255, 255, 0);\n    --bg2: rgb(244, 244, 0);\n    --bg3: rgb(233, 233, 0);\n    --bg4: rgb(222, 222, 0);\n    */\n\n    /* trans mode */\n    --lbg1: rgb(255, 255, 255);\n    --lbg2: rgb(133, 201, 255);\n    --lbg3: rgb(133, 201, 255);\n    --lbg4: rgb(255, 133, 201);\n\n    /* clear mode */\n    /*\n    --bg1: transparent;\n    --bg2: transparent;\n    --bg3: transparent;\n    --bg4: transparent;\n    */\n\n    /* other color defs */\n    --button1color: #ed4245;\n    --button2color: #3ba55d;\n    --button3color: #faa81a;\n\n    --svgcolors: transparent;\n}\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Roundrect",["",{type:"text-input",text:"Radial Status: Small Spacing",oninput:function(t){document.body.style.setProperty("--rs-small-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-spacing")||"1px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Medium Spacing",oninput:function(t){document.body.style.setProperty("--rs-medium-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-medium-spacing")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Spacing",oninput:function(t){document.body.style.setProperty("--rs-large-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-spacing")||"3px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Small Width",oninput:function(t){document.body.style.setProperty("--rs-small-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-width")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Medium Width",oninput:function(t){document.body.style.setProperty("--rs-medium-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-medium-width")||"3px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Width",oninput:function(t){document.body.style.setProperty("--rs-large-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-width")||"4px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Avatar Shape",oninput:function(t){document.body.style.setProperty("--rs-avatar-shape",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-avatar-shape")||"15%";return console.log(t),t}},{type:"text-and-color",text:"Radial Status: Online Color",oninput:function(t){document.body.style.setProperty("--rs-online-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-online-color")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Idle Color",oninput:function(t){document.body.style.setProperty("--rs-idle-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-idle-color")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: DND Color",oninput:function(t){document.body.style.setProperty("--rs-dnd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-dnd-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Offline Color",oninput:function(t){document.body.style.setProperty("--rs-offline-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-offline-color")||"#636b75";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Streaming Color",oninput:function(t){document.body.style.setProperty("--rs-streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-streaming-color")||"#643da7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Invisible Color",oninput:function(t){document.body.style.setProperty("--rs-invisible-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-invisible-color")||"#747f8d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Phone Visible",oninput:function(t){document.body.style.setProperty("--rs-phone-visible",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-phone-visible")||"block";return console.log(t),t}},{type:"text-and-color",text:"Bg1",oninput:function(t){document.body.style.setProperty("--bg1",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bg1")||"rgb(24, 28, 37)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Bg2",oninput:function(t){document.body.style.setProperty("--bg2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bg2")||"rgb(22, 26, 35)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Bg3",oninput:function(t){document.body.style.setProperty("--bg3",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bg3")||"rgb(20, 24, 33)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Bg4",oninput:function(t){document.body.style.setProperty("--bg4",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bg4")||"rgb(18, 22, 31)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Lbg1",oninput:function(t){document.body.style.setProperty("--lbg1",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--lbg1")||"rgb(255, 255, 255)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Lbg2",oninput:function(t){document.body.style.setProperty("--lbg2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--lbg2")||"rgb(133, 201, 255)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Lbg3",oninput:function(t){document.body.style.setProperty("--lbg3",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--lbg3")||"rgb(133, 201, 255)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Lbg4",oninput:function(t){document.body.style.setProperty("--lbg4",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--lbg4")||"rgb(255, 133, 201)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Button1color",oninput:function(t){document.body.style.setProperty("--button1color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button1color")||"#ed4245";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Button2color",oninput:function(t){document.body.style.setProperty("--button2color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button2color")||"#3ba55d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Button3color",oninput:function(t){document.body.style.setProperty("--button3color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button3color")||"#faa81a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Svgcolors",oninput:function(t){document.body.style.setProperty("--svgcolors",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--svgcolors")||"transparent";return console.log(t),t}},{type:"text-and-color",text:"Old Green",oninput:function(t){document.body.style.setProperty("--old-green",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--old-green")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Old Red",oninput:function(t){document.body.style.setProperty("--old-red",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--old-red")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 100",oninput:function(t){document.body.style.setProperty("--brand-experiment-100",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-100")||"#f8f9fd";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 130",oninput:function(t){document.body.style.setProperty("--brand-experiment-130",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-130")||"#f2f4fc";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 160",oninput:function(t){document.body.style.setProperty("--brand-experiment-160",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-160")||"#ebeefa";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 200",oninput:function(t){document.body.style.setProperty("--brand-experiment-200",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-200")||"#e3e7f8";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 230",oninput:function(t){document.body.style.setProperty("--brand-experiment-230",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-230")||"#dae0f5";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 260",oninput:function(t){document.body.style.setProperty("--brand-experiment-260",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-260")||"#d1d9f3";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 300",oninput:function(t){document.body.style.setProperty("--brand-experiment-300",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-300")||"#c7d0f0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 330",oninput:function(t){document.body.style.setProperty("--brand-experiment-330",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-330")||"#b5c1ec";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 360",oninput:function(t){document.body.style.setProperty("--brand-experiment-360",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-360")||"#a5b3e7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 400",oninput:function(t){document.body.style.setProperty("--brand-experiment-400",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-400")||"#8ea1e1";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 430",oninput:function(t){document.body.style.setProperty("--brand-experiment-430",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-430")||"#869adf";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 460",oninput:function(t){document.body.style.setProperty("--brand-experiment-460",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-460")||"#7d92dd";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment",oninput:function(t){document.body.style.setProperty("--brand-experiment",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment")||"#7289da";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 500",oninput:function(t){document.body.style.setProperty("--brand-experiment-500",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-500")||"#7289da";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 530",oninput:function(t){document.body.style.setProperty("--brand-experiment-530",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-530")||"#687dc6";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 560",oninput:function(t){document.body.style.setProperty("--brand-experiment-560",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-560")||"#5c6fb1";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 600",oninput:function(t){document.body.style.setProperty("--brand-experiment-600",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-600")||"#4e5d94";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 630",oninput:function(t){document.body.style.setProperty("--brand-experiment-630",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-630")||"#435180";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 660",oninput:function(t){document.body.style.setProperty("--brand-experiment-660",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-660")||"#3b4770";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 700",oninput:function(t){document.body.style.setProperty("--brand-experiment-700",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-700")||"#2e3757";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 730",oninput:function(t){document.body.style.setProperty("--brand-experiment-730",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-730")||"#2b3352";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 760",oninput:function(t){document.body.style.setProperty("--brand-experiment-760",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-760")||"#272f4b";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 800",oninput:function(t){document.body.style.setProperty("--brand-experiment-800",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-800")||"#222941";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 830",oninput:function(t){document.body.style.setProperty("--brand-experiment-830",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-830")||"#1a2032";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 860",oninput:function(t){document.body.style.setProperty("--brand-experiment-860",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-860")||"#111521";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 900",oninput:function(t){document.body.style.setProperty("--brand-experiment-900",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-900")||"#06070b";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 05a",oninput:function(t){document.body.style.setProperty("--brand-experiment-05a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-05a")||"rgba(114,137,218,0.05)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 10a",oninput:function(t){document.body.style.setProperty("--brand-experiment-10a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-10a")||"rgba(114,137,218,0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 15a",oninput:function(t){document.body.style.setProperty("--brand-experiment-15a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-15a")||"rgba(114,137,218,0.15)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 20a",oninput:function(t){document.body.style.setProperty("--brand-experiment-20a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-20a")||"rgba(114,137,218,0.2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 25a",oninput:function(t){document.body.style.setProperty("--brand-experiment-25a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-25a")||"rgba(114,137,218,0.25)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 30a",oninput:function(t){document.body.style.setProperty("--brand-experiment-30a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-30a")||"rgba(114,137,218,0.3)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 35a",oninput:function(t){document.body.style.setProperty("--brand-experiment-35a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-35a")||"rgba(114,137,218,0.35)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 40a",oninput:function(t){document.body.style.setProperty("--brand-experiment-40a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-40a")||"rgba(114,137,218,0.4)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 45a",oninput:function(t){document.body.style.setProperty("--brand-experiment-45a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-45a")||"rgba(114,137,218,0.45)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 50a",oninput:function(t){document.body.style.setProperty("--brand-experiment-50a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-50a")||"rgba(114,137,218,0.5)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 55a",oninput:function(t){document.body.style.setProperty("--brand-experiment-55a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-55a")||"rgba(114,137,218,0.55)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 60a",oninput:function(t){document.body.style.setProperty("--brand-experiment-60a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-60a")||"rgba(114,137,218,0.6)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 65a",oninput:function(t){document.body.style.setProperty("--brand-experiment-65a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-65a")||"rgba(114,137,218,0.65)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 70a",oninput:function(t){document.body.style.setProperty("--brand-experiment-70a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-70a")||"rgba(114,137,218,0.7)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 75a",oninput:function(t){document.body.style.setProperty("--brand-experiment-75a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-75a")||"rgba(114,137,218,0.75)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 80a",oninput:function(t){document.body.style.setProperty("--brand-experiment-80a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-80a")||"rgba(114,137,218,0.8)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 85a",oninput:function(t){document.body.style.setProperty("--brand-experiment-85a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-85a")||"rgba(114,137,218,0.85)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 90a",oninput:function(t){document.body.style.setProperty("--brand-experiment-90a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-90a")||"rgba(114,137,218,0.9)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Brand Experiment 95a",oninput:function(t){document.body.style.setProperty("--brand-experiment-95a",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--brand-experiment-95a")||"rgba(114,137,218,0.95)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Version",oninput:function(t){document.body.style.setProperty("--rs-version",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-version")||'"2.0.6"';return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Roundrect")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--rs-small-spacing",document.body.style.getPropertyValue("--rs-small-spacing")],["--rs-medium-spacing",document.body.style.getPropertyValue("--rs-medium-spacing")],["--rs-large-spacing",document.body.style.getPropertyValue("--rs-large-spacing")],["--rs-small-width",document.body.style.getPropertyValue("--rs-small-width")],["--rs-medium-width",document.body.style.getPropertyValue("--rs-medium-width")],["--rs-large-width",document.body.style.getPropertyValue("--rs-large-width")],["--rs-avatar-shape",document.body.style.getPropertyValue("--rs-avatar-shape")],["--rs-online-color",document.body.style.getPropertyValue("--rs-online-color")],["--rs-idle-color",document.body.style.getPropertyValue("--rs-idle-color")],["--rs-dnd-color",document.body.style.getPropertyValue("--rs-dnd-color")],["--rs-offline-color",document.body.style.getPropertyValue("--rs-offline-color")],["--rs-streaming-color",document.body.style.getPropertyValue("--rs-streaming-color")],["--rs-invisible-color",document.body.style.getPropertyValue("--rs-invisible-color")],["--rs-phone-visible",document.body.style.getPropertyValue("--rs-phone-visible")],["--bg1",document.body.style.getPropertyValue("--bg1")],["--bg2",document.body.style.getPropertyValue("--bg2")],["--bg3",document.body.style.getPropertyValue("--bg3")],["--bg4",document.body.style.getPropertyValue("--bg4")],["--lbg1",document.body.style.getPropertyValue("--lbg1")],["--lbg2",document.body.style.getPropertyValue("--lbg2")],["--lbg3",document.body.style.getPropertyValue("--lbg3")],["--lbg4",document.body.style.getPropertyValue("--lbg4")],["--button1color",document.body.style.getPropertyValue("--button1color")],["--button2color",document.body.style.getPropertyValue("--button2color")],["--button3color",document.body.style.getPropertyValue("--button3color")],["--svgcolors",document.body.style.getPropertyValue("--svgcolors")],["--old-green",document.body.style.getPropertyValue("--old-green")],["--old-red",document.body.style.getPropertyValue("--old-red")],["--brand-experiment-100",document.body.style.getPropertyValue("--brand-experiment-100")],["--brand-experiment-130",document.body.style.getPropertyValue("--brand-experiment-130")],["--brand-experiment-160",document.body.style.getPropertyValue("--brand-experiment-160")],["--brand-experiment-200",document.body.style.getPropertyValue("--brand-experiment-200")],["--brand-experiment-230",document.body.style.getPropertyValue("--brand-experiment-230")],["--brand-experiment-260",document.body.style.getPropertyValue("--brand-experiment-260")],["--brand-experiment-300",document.body.style.getPropertyValue("--brand-experiment-300")],["--brand-experiment-330",document.body.style.getPropertyValue("--brand-experiment-330")],["--brand-experiment-360",document.body.style.getPropertyValue("--brand-experiment-360")],["--brand-experiment-400",document.body.style.getPropertyValue("--brand-experiment-400")],["--brand-experiment-430",document.body.style.getPropertyValue("--brand-experiment-430")],["--brand-experiment-460",document.body.style.getPropertyValue("--brand-experiment-460")],["--brand-experiment",document.body.style.getPropertyValue("--brand-experiment")],["--brand-experiment-500",document.body.style.getPropertyValue("--brand-experiment-500")],["--brand-experiment-530",document.body.style.getPropertyValue("--brand-experiment-530")],["--brand-experiment-560",document.body.style.getPropertyValue("--brand-experiment-560")],["--brand-experiment-600",document.body.style.getPropertyValue("--brand-experiment-600")],["--brand-experiment-630",document.body.style.getPropertyValue("--brand-experiment-630")],["--brand-experiment-660",document.body.style.getPropertyValue("--brand-experiment-660")],["--brand-experiment-700",document.body.style.getPropertyValue("--brand-experiment-700")],["--brand-experiment-730",document.body.style.getPropertyValue("--brand-experiment-730")],["--brand-experiment-760",document.body.style.getPropertyValue("--brand-experiment-760")],["--brand-experiment-800",document.body.style.getPropertyValue("--brand-experiment-800")],["--brand-experiment-830",document.body.style.getPropertyValue("--brand-experiment-830")],["--brand-experiment-860",document.body.style.getPropertyValue("--brand-experiment-860")],["--brand-experiment-900",document.body.style.getPropertyValue("--brand-experiment-900")],["--brand-experiment-05a",document.body.style.getPropertyValue("--brand-experiment-05a")],["--brand-experiment-10a",document.body.style.getPropertyValue("--brand-experiment-10a")],["--brand-experiment-15a",document.body.style.getPropertyValue("--brand-experiment-15a")],["--brand-experiment-20a",document.body.style.getPropertyValue("--brand-experiment-20a")],["--brand-experiment-25a",document.body.style.getPropertyValue("--brand-experiment-25a")],["--brand-experiment-30a",document.body.style.getPropertyValue("--brand-experiment-30a")],["--brand-experiment-35a",document.body.style.getPropertyValue("--brand-experiment-35a")],["--brand-experiment-40a",document.body.style.getPropertyValue("--brand-experiment-40a")],["--brand-experiment-45a",document.body.style.getPropertyValue("--brand-experiment-45a")],["--brand-experiment-50a",document.body.style.getPropertyValue("--brand-experiment-50a")],["--brand-experiment-55a",document.body.style.getPropertyValue("--brand-experiment-55a")],["--brand-experiment-60a",document.body.style.getPropertyValue("--brand-experiment-60a")],["--brand-experiment-65a",document.body.style.getPropertyValue("--brand-experiment-65a")],["--brand-experiment-70a",document.body.style.getPropertyValue("--brand-experiment-70a")],["--brand-experiment-75a",document.body.style.getPropertyValue("--brand-experiment-75a")],["--brand-experiment-80a",document.body.style.getPropertyValue("--brand-experiment-80a")],["--brand-experiment-85a",document.body.style.getPropertyValue("--brand-experiment-85a")],["--brand-experiment-90a",document.body.style.getPropertyValue("--brand-experiment-90a")],["--brand-experiment-95a",document.body.style.getPropertyValue("--brand-experiment-95a")],["--rs-version",document.body.style.getPropertyValue("--rs-version")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default