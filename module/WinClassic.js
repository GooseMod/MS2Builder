parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,r,o,M,i){try{var a=t[M](i),u=a.value}catch(c){return void n(c)}a.done?e(u):Promise.resolve(u).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(o,M){var i=e.apply(n,r);function a(e){t(i,o,M,a,u,"next",e)}function u(e){t(i,o,M,a,u,"throw",e)}a(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode(' /**\n * @name WinClassic\n * @author SlippingGitty\n * @version 2021.02.05.01\n * @description It sucks less.\n * @source https://github.com/SlippingGitty/WinClassic\n * @website https://slippinggitty.github.io/\n*/\n\n/*\n          /          /|  `7MMF\'    A     `7MF\'db               .g8"""bgd `7MM                             db          \n \t /__________/ |  `MA     ,MA     ,V                 .dP\'     `M   MM                                         \n \t|.---------.| |  VM:   ,VVM:   ,V `7MM  `7MMpMMMb. dM\'       `   MM   ,6"Yb.  ,pP"Ybd ,pP"Ybd `7MM  ,p6"bo  \n \t||         || |  MM.  M\' MM.  M\'   MM    MM    MM MM            MM  8)   MM  8I   `" 8I   `"   MM 6M\'  OO  \n \t||         || |  `MM A\'  `MM A\'    MM    MM    MM MM.           MM   ,pm9MM  `YMMMa. `YMMMa.   MM 8M       \n \t||         || |  :MM;    :MM;     MM    MM    MM `Mb.     ,\'   MM  8M   MM  L.   I8 L.   I8   MM YM.    , \n \t||         || |   VF      VF    .JMML..JMML  JMML. `"bmmmd\'  .JMML.`Moo9^Yo.M9mmmP\' M9mmmP\' .JMML.YMbmd\'  \n \t|\'---------\'|/\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n \t[=== -- o ]/--.\n\t_\'---------\'__  \\\n       [::::::::::: :::]  )\n\t`""\'"""""\'""""`  /T\\\n\t\t\t \\_/\n*/\n\n/* \n////////////////\n///IMPORT CSS\n///////////////\n*/\n@import url("https://slippinggitty.github.io/WinClassic.css");\n\n\n/* \n/////////////////////////////////////////\n//ADD YOUR OWN ADDITIONS BELLOW THIS LINE\n/////////////////////////////////////////\n*/\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("WinClassic",["",{type:"text-and-color",text:"Deprecated Panel Background",oninput:function(t){document.body.style.setProperty("--deprecated-panel-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--deprecated-panel-background")||"#ebedef";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("WinClassic")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--deprecated-panel-background",document.body.style.getPropertyValue("--deprecated-panel-background")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default