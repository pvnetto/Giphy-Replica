!function(e){var t={};function i(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=326)}({1:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return d})),i.d(t,"d",(function(){return o}));var r="https://api.giphy.com",a="YEq174exoFhVhmvEOqMka3RtRh2KKZe8",n=function(e){var t="/v1/gifs/".concat(e),i=r+t+"?api_key=".concat(a,"&gif_id=").concat(e);return fetch(i).then((function(e){return e.json()})).then((function(e){return e.data}))},c=function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=n?"/v1/stickers/search":"/v1/gifs/search",d=r+c+"?api_key=".concat(a,"&q=").concat(e,"&limit=").concat(t,"&offset=").concat(i);return fetch(d).then((function(e){return e.json()})).then((function(e){return e.data}))},d=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=i?"/v1/stickers/trending":"/v1/gifs/trending",c=r+n+"?api_key=".concat(a,"&limit=").concat(e,"&rating=").concat(t);return fetch(c).then((function(e){return e.json()})).then((function(e){return e.data}))};function o(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="A"==e.tagName?e:e.querySelector("a"),a=r.querySelector("img"),n=t.images.fixed_height,c=e.querySelector(".unloaded")||e.closest(".unloaded");if(c){var d=n.height/n.width;c.style["padding-top"]="calc(100% * ".concat(d,")")}return a.src=n.url,r.href="item.html?id=".concat(t.id),i&&a.classList.add("sticker"),e}},130:function(e,t){e.exports='<div class=container-fluid> <div class="container daily-feed"> <div class="row daily-feed-header"> <div class=col-12> <h2> <span class=weekday></span> </h2> </div> </div> <div class=daily-feed-container> <div class=row> <a href="" class="col-lg-6 col-md-4 col-6 daily-feed-item"> <div class=daily-feed-item-content> <img src=xxxHTMLLINKxxx0.6828632731219550.5051586915279636xxx alt=""> <div class=daily-feed-item-info> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque?</h4> </div> </div> <div class="d-flex flex-column align-items-center"> <div class="daily-feed-item-card daily-feed-item-card-1"></div> <div class="daily-feed-item-card daily-feed-item-card-2"></div> <div class="daily-feed-item-card daily-feed-item-card-3"></div> </div> </a> <a href="" class="col-lg-3 col-md-4 col-6 daily-feed-item"> <div class=daily-feed-item-content> <img src=xxxHTMLLINKxxx0.5443840986465160.41162068786855843xxx alt=""> <div class=daily-feed-item-info> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque?</h4> </div> </div> <div class="d-flex flex-column align-items-center"> <div class="daily-feed-item-card daily-feed-item-card-1"></div> <div class="daily-feed-item-card daily-feed-item-card-2"></div> <div class="daily-feed-item-card daily-feed-item-card-3"></div> </div> </a> <a href="" class="col-lg-3 col-md-4 col-12 daily-feed-item"> <div class=daily-feed-item-content> <img src=xxxHTMLLINKxxx0.440977390691878130.6843926327282333xxx alt=""> <div class=daily-feed-item-info> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque?</h4> </div> </div> <div class="d-flex flex-column align-items-center"> <div class="daily-feed-item-card daily-feed-item-card-1"></div> <div class="daily-feed-item-card daily-feed-item-card-2"></div> <div class="daily-feed-item-card daily-feed-item-card-3"></div> </div> </a> </div> <div class=row> <a href="" class="col-lg-3 col-md-4 col-6 daily-feed-item"> <div class=daily-feed-item-content> <img src=xxxHTMLLINKxxx0.327291371997332270.2418531015750469xxx alt=""> <div class=daily-feed-item-info> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque?</h4> </div> </div> <div class="d-flex flex-column align-items-center"> <div class="daily-feed-item-card daily-feed-item-card-1"></div> <div class="daily-feed-item-card daily-feed-item-card-2"></div> <div class="daily-feed-item-card daily-feed-item-card-3"></div> </div> </a> <a href="" class="col-lg-3 col-md-4 col-6 daily-feed-item"> <div class=daily-feed-item-content> <img src=xxxHTMLLINKxxx0.0500365967711133840.46602767290592073xxx alt=""> <div class=daily-feed-item-info> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque?</h4> </div> </div> <div class="d-flex flex-column align-items-center"> <div class="daily-feed-item-card daily-feed-item-card-1"></div> <div class="daily-feed-item-card daily-feed-item-card-2"></div> <div class="daily-feed-item-card daily-feed-item-card-3"></div> </div> </a> <a href="" class="col-lg-6 col-md-4 col-12 daily-feed-item"> <div class=daily-feed-item-content> <img src=xxxHTMLLINKxxx0.89319385372159510.057953908873869864xxx alt=""> <div class=daily-feed-item-info> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque?</h4> </div> </div> <div class="d-flex flex-column align-items-center"> <div class="daily-feed-item-card daily-feed-item-card-1"></div> <div class="daily-feed-item-card daily-feed-item-card-2"></div> <div class="daily-feed-item-card daily-feed-item-card-3"></div> </div> </a> </div> <div class=row> <a href="" class="col-lg-3 col-6 daily-feed-item"> <div class=daily-feed-item-content> <img src=xxxHTMLLINKxxx0.74122875406703550.47993502603227545xxx alt=""> <div class=daily-feed-item-info> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque?</h4> </div> </div> <div class="d-flex flex-column align-items-center"> <div class="daily-feed-item-card daily-feed-item-card-1"></div> <div class="daily-feed-item-card daily-feed-item-card-2"></div> <div class="daily-feed-item-card daily-feed-item-card-3"></div> </div> </a> <a href="" class="col-lg-3 col-6 daily-feed-item"> <div class=daily-feed-item-content> <img src=xxxHTMLLINKxxx0.386623989977193940.5884563409426076xxx alt=""> <div class=daily-feed-item-info> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque?</h4> </div> </div> <div class="d-flex flex-column align-items-center"> <div class="daily-feed-item-card daily-feed-item-card-1"></div> <div class="daily-feed-item-card daily-feed-item-card-2"></div> <div class="daily-feed-item-card daily-feed-item-card-3"></div> </div> </a> <a href="" class="col-lg-3 col-6 daily-feed-item"> <div class=daily-feed-item-content> <img src=xxxHTMLLINKxxx0.0295280894597746980.48825886153780496xxx alt=""> <div class=daily-feed-item-info> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque?</h4> </div> </div> <div class="d-flex flex-column align-items-center"> <div class="daily-feed-item-card daily-feed-item-card-1"></div> <div class="daily-feed-item-card daily-feed-item-card-2"></div> <div class="daily-feed-item-card daily-feed-item-card-3"></div> </div> </a> <a href="" class="col-lg-3 col-6 daily-feed-item"> <div class=daily-feed-item-content> <img src=xxxHTMLLINKxxx0.143393447622941260.23786912450194997xxx alt=""> <div class=daily-feed-item-info> <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque?</h4> </div> </div> <div class="d-flex flex-column align-items-center"> <div class="daily-feed-item-card daily-feed-item-card-1"></div> <div class="daily-feed-item-card daily-feed-item-card-2"></div> <div class="daily-feed-item-card daily-feed-item-card-3"></div> </div> </a> </div> </div> </div> </div>'},16:function(e,t,i){"use strict";var r='<li class="custom-carousel-list-item">\r\n    <div class="custom-carousel-item" href="">\r\n        <a href="">\r\n            <img src="" alt="">\r\n        </a>\r\n        <div class="custom-carousel-item-info">\r\n            <p>#hashtag</p>\r\n        </div>\r\n    </div>\r\n</li>',a=i(3),n=i(1);function c(e,t,i,r,a,n,c){try{var d=e[n](c),o=d.value}catch(e){return void i(e)}d.done?t(o):Promise.resolve(o).then(r,a)}function d(e){return function(){var t=this,i=arguments;return new Promise((function(r,a){var n=e.apply(t,i);function d(e){c(n,r,a,d,o,"next",e)}function o(e){c(n,r,a,d,o,"throw",e)}d(void 0)}))}}var o=document.querySelector(".trending.custom-carousel"),s=o.querySelector(".custom-carousel-list"),l=20,u=function(){var e=d(regeneratorRuntime.mark((function e(){var t,i,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],e.next=3,Object(n.c)(l,"G",t);case 3:return i=e.sent,e.next=6,f(i,t);case 6:o.addEventListener("mouseover",a.c),o.addEventListener("mouseout",a.a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function f(e,t){return m.apply(this,arguments)}function m(){return(m=d(regeneratorRuntime.mark((function e(t,i){var a,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=document.createDocumentFragment(),c=0;c<l;c++)(d=document.createElement("div")).innerHTML=r,d=d.querySelector(".custom-carousel-list-item"),d=Object(n.d)(d,t[c],i),d.querySelector("p").textContent=t[c].title,a.appendChild(d);s.appendChild(a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a=u},2:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"d",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"b",(function(){return c}));var r=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},a=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},n=function(e,t){return e>=0?e%t:t-1},c=function(e){for(var t=window.location.search.substring(1).split("&"),i=0;i<t.length;i++){var r=t[i].split("=");if(r[0]===e)return decodeURIComponent(r[1].replace(/\+/g,"%20"))}}},3:function(e,t,i){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return s}));var a=function(){r(document.querySelectorAll(".custom-carousel")).forEach((function(e){n(e)}))},n=function(e){var t=e.querySelector(".custom-carousel-list"),i=e.querySelector(".custom-carousel-arrow-prev"),r=e.querySelector(".custom-carousel-arrow-next");t.addEventListener("scroll",o),r.addEventListener("click",c),i.addEventListener("click",d)},c=function(e){var t=(this.classList.contains(".custom-carousel")?this:this.closest(".custom-carousel")).querySelector(".custom-carousel-list"),i=t.clientWidth;t.scrollLeft+=i},d=function(e){var t=(this.classList.contains(".custom-carousel")?this:this.closest(".custom-carousel")).querySelector(".custom-carousel-list"),i=t.clientWidth;t.scrollLeft-=i},o=function(e){if(this.closest){var t=this.classList.contains(".custom-carousel")?this:this.closest(".custom-carousel"),i=t.querySelector(".custom-carousel-list"),r=t.querySelector(".custom-carousel-arrow-prev"),a=t.querySelector(".custom-carousel-arrow-next"),n=i.scrollWidth-i.clientWidth;i.scrollLeft>0?r.classList.add("active"):r.classList.remove("active"),i.scrollLeft<n?a.classList.add("active"):a.classList.remove("active")}},s=function(){var e=this.classList.contains(".custom-carousel")?this:this.closest(".custom-carousel"),t=e.querySelector(".custom-carousel-arrow-prev"),i=e.querySelector(".custom-carousel-arrow-next");t.classList.remove("active"),i.classList.remove("active")}},326:function(e,t,i){"use strict";i.r(t);var r=i(16),a=i(130),n=i.n(a),c=i(3),d=i(9),o=i(1),s=i(2);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t,i,r,a,n,c){try{var d=e[n](c),o=d.value}catch(e){return void i(e)}d.done?t(o):Promise.resolve(o).then(r,a)}function f(e){return function(){var t=this,i=arguments;return new Promise((function(r,a){var n=e.apply(t,i);function c(e){u(n,r,a,c,d,"next",e)}function d(e){u(n,r,a,c,d,"throw",e)}c(void 0)}))}}document.querySelectorAll(".daily-feed");var m=0,v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],y=["January","February","March","April","May","June","July","August","September","October","November","December"],x=new Date,h=new Date,p=function(){var e=f(regeneratorRuntime.mark((function e(){var t,i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 30,e.next=3,Object(o.b)("cats",30,m);case 3:for(t=e.sent,i=0;i<3;i++)r=t.slice(10*i,10*i+10),L(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e,t,i){var r=e.querySelectorAll(".daily-feed-item");r=l(r);var a=e.querySelector(".daily-feed-header h2"),n=a.querySelector(".weekday");if(i.getDate()==x.getDate())n.textContent="Today";else if(i.getDate()==x.getDate()-1)n.textContent="Yesterday";else{n.textContent=v[i.getDay()];var c=document.createTextNode(y[i.getMonth()]),d=document.createTextNode(" "+String(i.getDate()).padStart(2,"0"));a.appendChild(c),a.appendChild(d)}for(var u=0;u<10;u++){var f=t[u];r[u]=Object(o.d)(r[u],f),r[u].querySelector(".daily-feed-item-info h4").textContent=f.title;var m="card-color-"+Object(s.d)(1,5);r[u].classList.add(m)}},L=function(e){var t=w();return g(t,e,h),m+=10,h.setDate(h.getDate()-1),t},b=function(){return Object(o.b)("cats",10,m).then((function(e){g(w(),e,h),m+=10,h.setDate(h.getDate()-1)}))},w=function(){var e=document.createElement("section");return e.innerHTML=n.a,document.body.appendChild(e),e};(function(){var e=f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(c.b)(),e.next=3,p();case 3:Object(r.a)(),Object(d.a)(b);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},9:function(e,t,i){"use strict";function r(e,t,i,r,a,n,c){try{var d=e[n](c),o=d.value}catch(e){return void i(e)}d.done?t(o):Promise.resolve(o).then(r,a)}i.d(t,"a",(function(){return u}));var a,n=document.querySelector(".loading-animation"),c=!1;function d(){var e;return e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c||!o()){e.next=6;break}if(s(!0),null==a){e.next=5;break}return e.next=5,a();case 5:s(!1);case 6:case"end":return e.stop()}}),e)})),(d=function(){var t=this,i=arguments;return new Promise((function(a,n){var c=e.apply(t,i);function d(e){r(c,a,n,d,o,"next",e)}function o(e){r(c,a,n,d,o,"throw",e)}d(void 0)}))}).apply(this,arguments)}window.addEventListener("scroll",(function(){return d.apply(this,arguments)}));var o=function(){return window.innerHeight+window.pageYOffset>=document.body.offsetHeight-30},s=function(e){l(e),c=e},l=function(e){n&&(e?n.classList.add("active"):n.classList.remove("active"))},u=function(e){a=e}}});