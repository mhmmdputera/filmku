(()=>{var e={705:()=>{function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(n,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,(void 0,o=function(n,t){if("object"!==e(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var a=r.call(n,"string");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(a.key),"symbol"===e(o)?o:String(o)),a)}var o}function t(e){var n="function"==typeof Map?new Map:void 0;return t=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,a)}function a(){return r(e,arguments,i(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o(a,e)},t(e)}function r(e,n,t){return r=a()?Reflect.construct.bind():function(e,n,t){var r=[null];r.push.apply(r,n);var a=new(Function.bind.apply(e,r));return t&&o(a,t.prototype),a},r.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,n){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},o(e,n)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}var u=function(t){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&o(e,n)}(f,t);var r,u,c,l,s=(c=f,l=a(),function(){var n,t=i(c);if(l){var r=i(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return function(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)}(this,n)});function f(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(e=s.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return r=f,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n    <style>\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n   :host {\n      display: block;\n      width: 100%;\n      background-color: rgb(218, 44, 44);\n      color: white;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    }\n    h2 {\n      padding: 16px;\n    }\n    </style>\n\n    <h2>Filmku</h2>\n    "}}])&&n(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),f}(t(HTMLElement));customElements.define("app-bar",u)},308:()=>{function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(n,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,(void 0,o=function(n,t){if("object"!==e(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var a=r.call(n,"string");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(a.key),"symbol"===e(o)?o:String(o)),a)}var o}function t(e){var n="function"==typeof Map?new Map:void 0;return t=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,a)}function a(){return r(e,arguments,i(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o(a,e)},t(e)}function r(e,n,t){return r=a()?Reflect.construct.bind():function(e,n,t){var r=[null];r.push.apply(r,n);var a=new(Function.bind.apply(e,r));return t&&o(a,t.prototype),a},r.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,n){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},o(e,n)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}var u=function(t){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&o(e,n)}(f,t);var r,u,c,l,s=(c=f,l=a(),function(){var n,t=i(c);if(l){var r=i(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return function(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)}(this,n)});function f(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(e=s.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return r=f,(u=[{key:"film",set:function(e){this._film=e,this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n     <style>\n     * {\n     margin: 0;\n     padding: 0;\n     box-sizing: border-box;\n   }\n   :host {\n      display: block;\n      margin-bottom: 18px;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      border-radius: 10px;\n      overflow: hidden;\n    }\n     \n    .fan-art-film {\n      width: 100%;\n      max-height: 300px;\n      object-fit: cover;\n      object-position: center;\n    }\n     \n    .film-info {\n      padding: 24px;\n    }\n     \n    .film-info > h2 {\n      font-weight: lighter;\n    }\n     \n    .film-info > p {\n      margin-top: 10px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 10; /* number of lines to show */\n    }\n     </style>\n     \n     <img class="fan-art-film" src="'.concat(this._film.fanArt,'" alt="Fan Art">\n     <div class="film-info">\n      <h2>').concat(this._film.name,"</h2>\n      <p>").concat(this._film.description,"</p> \n     </div>\n     ")}}])&&n(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),f}(t(HTMLElement));customElements.define("film-item",u)},998:()=>{function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(n,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,(void 0,o=function(n,t){if("object"!==e(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var a=r.call(n,"string");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(a.key),"symbol"===e(o)?o:String(o)),a)}var o}function t(e){var n="function"==typeof Map?new Map:void 0;return t=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,a)}function a(){return r(e,arguments,i(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o(a,e)},t(e)}function r(e,n,t){return r=a()?Reflect.construct.bind():function(e,n,t){var r=[null];r.push.apply(r,n);var a=new(Function.bind.apply(e,r));return t&&o(a,t.prototype),a},r.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,n){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},o(e,n)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}var u=function(t){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&o(e,n)}(f,t);var r,u,c,l,s=(c=f,l=a(),function(){var n,t=i(c);if(l){var r=i(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return function(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)}(this,n)});function f(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(e=s.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return r=f,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(e){this._clickEvent=e,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n    <style>\n    .search-container {\n      max-width: 800px;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      padding: 16px;\n      border-radius: 5px;\n      display: flex;\n      position: sticky;\n      top: 10px;\n      background-color: white;\n    }\n    \n    .search-container > input {\n      width: 75%;\n      padding: 16px;\n      border: 0;\n      border-bottom: 1px solid rgb(218, 44, 44);\n      font-weight: bold;\n    }\n    \n    .search-container > input:focus {\n      outline: 0;\n      border-bottom: 2px solid rgb(218, 44, 44);\n    }\n    \n    .search-container > input:focus::placeholder {\n      font-weight: bold;\n    }\n    \n    .search-container > input::placeholder {\n      color: rgb(218, 44, 44);\n      font-weight: normal;\n    }\n    \n    .search-container > button {\n      width: 23%;\n      cursor: pointer;\n      margin-left: auto;\n      padding: 16px;\n      background-color: rgb(218, 44, 44);\n      color: white;\n      border: 0;\n      text-transform: uppercase;\n    }\n    \n    @media screen and (max-width: 550px) {\n      .search-container {\n        flex-direction: column;\n        position: static;\n      }\n    \n      .search-container > input {\n        width: 100%;\n        margin-bottom: 12px;\n      }\n    \n      .search-container > button {\n        width: 100%;\n      }\n    }\n    </style>\n\n     <div id="search-container" class="search-container">\n        <input placeholder="Cari Film" id="searchElement" type="search">\n        <button id="searchButtonElement" type="submit">Search</button>\n     </div>\n    ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}}])&&n(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),f}(t(HTMLElement));customElements.define("search-bar",u)},890:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n}\n\nmain {\n  width: 90%;\n  max-width: 800px;\n  margin: 32px auto;\n}\n\nfilm-list {\n  display: block;\n  margin-top: 32px;\n  width: 100%;\n  padding: 16px;\n}\n",""]);const u=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var c=e[u],l=r.base?c[0]+r.base:c[0],s=o[l]||0,f="".concat(l," ").concat(s);o[l]=s+1;var p=t(f),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(d);else{var m=a(d,r);r.byIndex=u,n.splice(u,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=t(o[i]);n[u].references--}for(var c=r(e,a),l=0;l<o.length;l++){var s=t(o[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),u=t(565),c=t.n(u),l=t(216),s=t.n(l),f=t(589),p=t.n(f),d=t(890),m={};function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,a=function(e,n){if("object"!==y(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(a)?a:String(a)),r)}var a}function h(e){var n="function"==typeof Map?new Map:void 0;return h=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return g(e,arguments,k(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),w(r,e)},h(e)}function g(e,n,t){return g=v()?Reflect.construct.bind():function(e,n,t){var r=[null];r.push.apply(r,n);var a=new(Function.bind.apply(e,r));return t&&w(a,t.prototype),a},g.apply(null,arguments)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function w(e,n){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},w(e,n)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=s(),n()(d.Z,m),d.Z&&d.Z.locals&&d.Z.locals,t(705),t(308);var O=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&w(e,n)}(i,e);var n,t,r,a,o=(r=i,a=v(),function(){var e,n=k(r);if(a){var t=k(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return function(e,n){if(n&&("object"===y(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return n=i,t=[{key:"films",set:function(e){this._films=e,this.render()}},{key:"renderError",value:function(e){this.shadowDOM.innerHTML="\n    <style>\n    .placeholder {\n      font-weight: lighter;\n      color: rgba(0, 0, 0, 0.5);\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n    }\n    </style>\n    ",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(e,"</h2>")}},{key:"render",value:function(){var e=this;this.shadowDOM.innerHTML="",this._films.forEach((function(n){var t=document.createElement("film-item");t.film=n,e.shadowDOM.appendChild(t)}))}}],t&&b(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),i}(h(HTMLElement));customElements.define("film-list",O),t(998);const j=[{name:"Top Gun: Maverick",stadium:"Emirates Stadium",fanArt:"https://e3.365dm.com/19/12/1600x900/skynews-top-gun-maverick-film_4868290.jpg?20191216161232",description:'Bagi kamu penggemar genre action, Top Gun: Maverick menjadi film terbaru yang enggak boleh kamu lewatkan di tahun ini. Mengisahkan 30 tahun setelah kejadian di film Top Gun (1986), Pete "Maverick" Mitchell (Tom Cruise) kembali dipanggil atas perintah Ice Man. Sebagai pilot pesawat jet tempur, Maverick dipercaya untuk melatih para awak agar bisa menggunakan pesawat jet tempur lagi. Di sisi lain, Bradley "Rooster" Bradshaw, anak mendiang Goose (Maverick Lt. Nick Breadshaw) menyalahkan Maverick atas kematian ayahnya. Dendam tersebut membuat hubungan keduanya memanas dan tidak fokus menjalani latihan bersama pilot lainnya.'},{name:"Doctor Strange in the Multiverse of Madness",stadium:"Villa Park",fanArt:"https://d.newsweek.com/en/full/1985434/doctor-strange-multiverse-madness.jpg",description:"Di tahun ini, kamu harus banget menyaksikan film Marvel terbaru yaitu Doctor Strange in the Multiverse of Madness. Sekuel dari Doctor Strange ini mengambil latar waktu setelah peristiwa dalam serial Wanda Vision, Loki, dan film Spider Man: No Way Home. Setelah sebelumnya berhasil membuka dan menutup gerbang multisemesta, Doctor Strange (Benedict Cumberbatch) kembali berurusan dengan dimensi lain. Kali ini ia bertemu dengan seorang gadis bernama America Chavez (Xochitl Gomez), yang dikejar-kejar oleh makhluk iblis. Bersama Wong (Benedict Wong), Strange meminta bantuan Wanda Maximoff (Elizabeth Olsen) untuk melindungi America. Namun, ternyata Scarlet Witch alias Wanda sendiri yang telah mengutus makhluk iblis tersebut untuk mengincar America."},{name:" Bullet Train",stadium:"Dean Court",fanArt:"https://www.lascimmiapensa.com/wp-content/uploads/2020/09/Schermata-2020-09-16-alle-11.51.52.png",description:"Bullet Train diadaptasi berdasarkan novel Jepang yang ditulis oleh Katar Isaka, jadi enggak heran kalau film ini berlatarkan Jepang. Ceritanya, di dalam sebuah kereta berkecepatan tinggi dari Tokyo ke Morioka, ada lima orang pembunuh bayaran. Yaitu Ladybug (Brad Pitt), Kimura (Andrew Koji), Prince (Joey King), Tangerine (Aaron Taylor-Johnson), dan Lemon (Brian Tyree Henry). Meski mereka tidak saling kenal, ternyata tugas yang masing-masing mereka dapatkan, saling berhubungan. Setelah menyadari rahasia berbahaya yang tengah mereka emban, mereka pun harus melawan satu sama lain untuk bertahan hidup."},{name:"Where The Crawdads Sing",stadium:"Falmer Stadium",fanArt:"https://sm.mashable.com/t/mashable_sea/article/w/where-the-/where-the-crawdads-sing-review-romantic-murder-mystery-loses_uexu.1200.jpg",description:"Where The Crawdads Sing merupakan film bergenre drama misteri yang diadaptasi dari novel berjudul sama karya Delia Owens.Film terbaik ini mengisahkan Catherine Danielle Clark atau Kya (Daisy Edgar-Jones) yang hidup sebatang kara. Ia tinggal di daerah pemukiman rawa-rawa Barkley Cove di North Carolina dan bertahan hidup dengan berkebun serta berdagang. Beranjak dewasa, Kya ditaksir oleh dua pemuda, Tate Walker (Taylor John Smith) dan Chase Andrews (Harris Dickinson). Konflik dimulai ketika Chase ditemukan tewas di daerah rawa-rawa, dan Kya dituduh sebagai pembunuhnya. Dengan bantuan pengacara Tom Milton (David Strathairn), Kya berusaha meyakinkan pengadilan meski bukti yang ada justru memberatkannya. "},{name:"Beast",stadium:"Stamford Bridge",fanArt:"https://themoviemylife.files.wordpress.com/2019/02/fast-furious-presents-hobbs-shaw-2019-idris-elba.png?w=1024&h=567&crop=1",description:"Mengangkat tema survival, Beast bercerita tentang perjuangan peneliti pecinta satwa untuk bertahan hidup. Dr. Nate Daniels (Idris Elba) bersama kedua putrinya Meredith (Iyana Halley) dan Norah (Leah Sava Jeffries) melakukan petualangan safari ke Afrika Selatan. Di tengah perjalanan, mereka bertiga dan sang pemandu safari, Martin Battles (Sharlto Copley) diburu oleh seekor singa berukuran sangat besar. Mereka harus berlari sekencang mungkin untuk menghindari terkaman singa lapar yang terus menguntit."},{name:"Nope",stadium:"Selhurst Park",fanArt:"https://i.pinimg.com/originals/1a/6f/45/1a6f45a8b6c03b42a77f9d361bfb1346.jpg",description:"Nope menjadi film horor sci-fi terbaru karya sutradara Jordan Peele yang pernah mengarahkan film Us (2019) dan Candyman (2021). Film ini mengangkat cerita tentang penduduk kota terpencil yang menyaksikan fenomena awan badai yang tidak normal. Kemudian benda-benda asing juga turun dari langit, menyebabkan kematian ayah OJ Haywood (Daniel Kaluuya) dan Emerald Haywood (Keke Palmer). Ditambah lagi dengan kemunculan benda di langit yang mirip UFO, membuat mereka berusaha merekam momen tersebut dengan bantuan Angel Torres (Brandon Perea) dan Antlers Holst (Michael Wincott)."},{name:"The Batman",stadium:"Goodison Park",fanArt:"https://image.tmdb.org/t/p/original/1BaxMkrN1jUYQcIgRjNOxCr2HNT.jpg",description:"The Batman mengisahkan Batman alias Bruce Wayne (Robert Pattinson) yang akan menghadapi kasus pembunuhan berantai para tokoh politik di kota Gotham. Ternyata, dalang di balik kejahatan tersebut adalah The Riddler atau Edward Nashton (Paul Dano). Yang mengejutkan, saat melakukan penyelidikan, Batman justru menemukan rahasia gelap tentang orang tuanya."}];function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function x(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,a=function(e,n){if("object"!==S(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(a)?a:String(a)),r)}var a}var M=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"searchFilm",value:function(e){return new Promise((function(n,t){var r=j.filter((function(n){return n.name.toUpperCase().includes(e.toUpperCase())}));r.length?n(r):t("".concat(e,"  is not found"))}))}}],null&&x(n.prototype,null),t&&x(n,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();const P=M;document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("search-bar"),n=document.querySelector("film-List"),t=function(e){n.films=e},r=function(e){n.renderError(e)};e.clickEvent=function(){P.searchFilm(e.value).then(t).catch(r)}}))})()})();