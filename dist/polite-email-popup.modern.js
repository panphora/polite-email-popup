var e,t,a=Object.prototype,n=Function.prototype.toString,s=a.hasOwnProperty,o=n.call(Object),i=a.toString,r=(e=Object.getPrototypeOf,t=Object,function(a){return e(t(a))});function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function c(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return l(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function u(){this.callbacksLookup={}}u.prototype={emit:function(e,t){for(var a,n=this.callbacksLookup["*"]||[],s=c(this.callbacksLookup[e]||[]);!(a=s()).done;)(0,a.value)({name:e,value:t});for(var o,i=c(n);!(o=i()).done;)(0,o.value)({name:e,value:t})},on:function(e,t){for(var a,n=c(Array.isArray(e)?e:[e]);!(a=n()).done;){var s=a.value;this.callbacksLookup[s]||(this.callbacksLookup[s]=[]),this.callbacksLookup[s].push(t)}}};var m=new u;function d(e,t){void 0===t&&(t={}),e=e||"tigerlily";var a=t.defaults,l=void 0===a?{}:a,c=JSON.parse(localStorage.getItem(e)||"{}",v);return c=Object.assign(l,c),new Proxy(c,function t(a){return{get:function(e,n){return g(e[n])?new Proxy(e[n],t(a)):e[n]},set:function(t,l,c){t[l]=c,localStorage.setItem(e,JSON.stringify(a,_));var u=t[l],d=g(u)?JSON.parse(JSON.stringify(u,_),v):u,b=g(c)?JSON.parse(JSON.stringify(c,_),v):c,E=function(e,t){if(e===t)return"";var a="";return function e(t,a,l){l=l||"",Array.isArray(t)?function(t,a,n){t.forEach((t,s,o)=>{const i=`${n}[${s}]`;a.call(o,t,s,o,i),e(o[s],a,i)})}(t,a,l):function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=i.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=r(e);if(null===t)return!0;var a=s.call(t,"constructor")&&t.constructor;return"function"==typeof a&&a instanceof a&&n.call(a)==o}(t)&&function(t,a,n){for(const s in t){const o=n?`${n}.${s}`:s;a.call(t,t[s],s,t,o),e(t[s],a,o)}}(t,a,l)}(e,function(e,n,s,o){e===t&&(a=o)}),a}(a,c)||l;return m.emit(E,{prop:l,path:E,oldValue:d,value:b}),!0}}}(c))}function g(e){return Array.isArray(e)||"[object Object]"===Object.prototype.toString.call(e)}function _(e,t){if(this[e]instanceof Date){var a=this[e].getTime();return a?{__isDate:!0,ms:a}:void 0}return t}function v(e,t){return g(t)&&t.__isDate?new Date(t.ms):t}let b;d.on=function(e,t){m.on(e,function(e){t(e.value)})},b||(b=d("polite-email-popup")),window.persistentGlobals=b;var E={};function f(){return p("modal")}function O(){return p("bottom-bar")}function p(e){let t="modal"===e?b.modalClosedDate:b.bottomBarClosedDate;if(t)return{days:Math.floor((Date.now()-t)/864e5)}}const T={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:3,aggressive:2}},activeTimeOnPage:{content:{notAggressive:8,aggressive:6},marketing:{notAggressive:8,aggressive:6}},activeTimeOnSite:{content:{notAggressive:30,aggressive:20},marketing:{notAggressive:30,aggressive:20}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:35,aggressive:25},marketing:{notAggressive:0,aggressive:0}}},L={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnPage:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnSite:{content:{notAggressive:15,aggressive:10},marketing:{notAggressive:15,aggressive:10}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:25,aggressive:20},marketing:{notAggressive:25,aggressive:20}}};let S={};function A(e){return S[e]||document.querySelector(e)}function M(e){return"number"==typeof e&&!Number.isNaN(e)}function h(e){document.body.insertAdjacentHTML("beforeend",e)}function y(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var B=!1;if("undefined"!=typeof window){var w={get passive(){B=!0}};window.addEventListener("testPassive",null,w),window.removeEventListener("testPassive",null,w)}var R="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),P=[],C=!1,D=-1,q=void 0,N=void 0,k=function(e){return P.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},$=function(e){var t=e||window.event;return!!k(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)};function U(){b.modalClosedDate=Date.now(),document.body.classList.remove(E.BODY_CLASS_MODAL_OPEN),E.MODAL_ELEM.style.display="none",document.querySelectorAll(E.FOCUSABLE_SELECTORS).forEach(e=>e.removeAttribute("tabindex")),document.querySelectorAll("body > [aria-hidden]").forEach(e=>e.removeAttribute("aria-hidden")),E.MODAL_ELEM.setAttribute("aria-hidden","true"),E.activeElement&&E.activeElement.focus(),function(e){if(R){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,P=P.filter(function(t){return t.targetElement!==e}),C&&0===P.length&&(document.removeEventListener("touchmove",$,B?{passive:!1}:void 0),C=!1)}else(P=P.filter(function(t){return t.targetElement!==e})).length||setTimeout(function(){void 0!==N&&(document.body.style.paddingRight=N,N=void 0),void 0!==q&&(document.body.style.overflow=q,q=void 0)})}(E.MODAL_ELEM)}function V(e){27===e.keyCode&&document.body.classList.contains(E.BODY_CLASS_MODAL_OPEN)&&U()}function x(e){e.preventDefault();let t=e.currentTarget.querySelector(E.SELECTORS.MODAL_FORM_INPUT_ELEM_SELECTOR);E.onSubmit({event:e,email:t.value}),U()}function j(e){e.target.closest(E.SELECTORS.MODAL_FORM_ELEM_SELECTOR)||U()}function F(){b.bottomBarClosedDate=Date.now(),E.BOTTOM_BAR_ELEM.classList.remove("show"),document.body.classList.remove(E.BODY_CLASS_BOTTOM_BAR_OPEN)}function Y(e){e.preventDefault();let t=e.currentTarget.querySelector(E.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR);E.onSubmit({event:e,email:t.value}),F()}function I(e){var t;t=()=>{var t;!function(e){const t={showDebugNotice:!1,websiteType:"content",beSlightlyMoreAggressive:!1,onSubmit:()=>{console.log("Event: Email form submitted")},imageSrc:"",headingText:"Sign up for updates",descriptionText:"Get cutting edge articles and insights into our process",mainButtonText:"Sign up",closeButtonText:"Close",SELECTORS:{MODAL_ELEM_SELECTOR:".email-modal",MODAL_FORM_ELEM_SELECTOR:".email-modal__content",MODAL_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",MODAL_CLOSE_BUTTON_ELEM_SELECTOR:".email-modal__close",BOTTOM_BAR_ELEM_SELECTOR:".bottom-bar",BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",BOTTOM_BAR_FORM_ELEM_SELECTOR:"form.bottom-bar__content",BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR:".bottom-bar__close",DEBUG_ELEM:".polite-email-popup__debug-notice",DEBUG_ELEM_RESET_SELECTOR:".debug-email-forms__reset",DEBUG_ELEM_BYPASS_SELECTOR:".debug-email-forms__bypass"},IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",BODY_CLASS_BOTTOM_BAR_OPEN:"email-bottom-bar-is-open"};Object.assign(E,t,e),window.temporaryGlobals=E}(e),E.showDebugNotice&&h("<div class='polite-email-popup__debug-notice'></div>"),h(function({imageSrc:e,headingText:t,descriptionText:a,mainButtonText:n}){return`\n<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true">\n  <form class="email-modal__content" method="POST" action="/">\n    <div class="email-modal__top">\n      <div class="email-modal__top-media">\n        <img class="email-modal__top-image" src="${e}">\n      </div>\n      <div class="email-modal__top-content">\n        <h2 class="email-modal__title" id="email-modal-title">${t}</h2>\n        <p class="email-modal__description" id="email-modal-description">${a}</p>\n      </div>\n    </div>\n    <div class="email-modal__input-container">\n      <input class="email-modal__input email-signup-form-input" type="email" value="" placeholder="Your email address" required>\n    </div>\n    <div class="email-modal__button-container">\n      <button class="email-modal__sign-up" type="submit">${n}</button>\n    </div>\n    <button class="email-modal__close" type="button"></button>\n  </form>\n</div>\n`}(E)),h(function({headingText:e,mainButtonText:t,closeButtonText:a}){return`<div class="bottom-bar" aria-hidden="true">\n  <form class="bottom-bar__content" method="POST" action="/">\n    <label class="bottom-bar__label">\n      <span class="bottom-bar__label-text">${e}</span>\n      <input class="bottom-bar__input email-signup-form-input" type="email" value="" placeholder="Your email address" required>\n    </label>\n    <button class="bottom-bar__sign-up" type="submit">${t}</button>\n  </form>\n  <div class="bottom-bar__close-container">\n    <button class="bottom-bar__close" type="button">\n      <span class="hide-mobile">${a}</span>\n      <span class="bottom-bar__close-x-icon hide-desktop"><span></span></span>\n    </button>\n  </div>\n</div>`}(E)),function(){let{SELECTORS:e}=E;Object.assign(E,{MODAL_ELEM:A(e.MODAL_ELEM_SELECTOR),MODAL_FORM_ELEM:A(e.MODAL_FORM_ELEM_SELECTOR),MODAL_CLOSE_BUTTON_ELEM:A(e.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),BOTTOM_BAR_ELEM:A(e.BOTTOM_BAR_ELEM_SELECTOR),BOTTOM_BAR_FORM_ELEM:A(e.BOTTOM_BAR_FORM_ELEM_SELECTOR),BOTTOM_BAR_CLOSE_BUTTON_ELEM:A(e.BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR),DEBUG_NOTICE_ELEM:A(e.DEBUG_ELEM)})}(),d.on("*",function({}){let[e,t,a]=function(){let[e,t]=function(){let e=E.websiteType,t=E.beSlightlyMoreAggressive?"aggressive":"notAggressive";return[{pageViews:T.pageViews[e][t],activeTimeOnPage:T.activeTimeOnPage[e][t],activeTimeOnSite:T.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:T.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:b.pageViews,activeTimeOnPage:b.activeTimeOnPage,activeTimeOnSite:b.activeTimeOnSite,highestScrollPercentageAcrossAllPages:b.highestScrollPercentageAcrossAllPages}]}(),a=Object.keys(e).every(a=>t[a]>=e[a]),n=f();return n&&(a=a&&n.days>=2),[a,e,t]}(),[n,s,o]=function(){let[e,t]=function(){let e=E.websiteType,t=E.beSlightlyMoreAggressive?"aggressive":"notAggressive";return[{pageViews:L.pageViews[e][t],activeTimeOnPage:L.activeTimeOnPage[e][t],activeTimeOnSite:L.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:L.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:b.pageViews,activeTimeOnPage:b.activeTimeOnPage,activeTimeOnSite:b.activeTimeOnSite,highestScrollPercentageAcrossAllPages:b.highestScrollPercentageAcrossAllPages}]}(),a=Object.keys(e).every(a=>t[a]>=e[a]),n=O();return n&&(a=a&&n.days>=2),[a,e,t]}();E.isModalOpenable=!!e,n&&(E.BOTTOM_BAR_ELEM.classList.add("show"),document.body.classList.add(E.BODY_CLASS_BOTTOM_BAR_OPEN)),E.showDebugNotice&&function({modalRequirements:e,modalActualValues:t,modalMeetsRequirements:a,bottomBarRequirements:n,bottomBarActualValues:s,bottomBarMeetsRequirements:o}){E.DEBUG_NOTICE_ELEM.innerHTML=function({modalRequirements:e,modalActualValues:t,modalMeetsRequirements:a,bottomBarRequirements:n,bottomBarMeetsRequirements:s}){let o=f(),i=O();return`<div class="debug-email-forms">\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Website type: </span>\n    <span class="debug-email-forms__stat-value">${E.websiteType.charAt(0).toUpperCase()+E.websiteType.slice(1)} website</span>\n  </div>\n  <div class="debug-email-forms__stat debug-email-forms__stat--buttons">\n    <button class="debug-email-forms__reset" type="button">Reset data</button>\n    <button class="debug-email-forms__bypass" type="button">Bypass requirements</button>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Page views: </span>\n    <span class="debug-email-forms__stat-value">${t.pageViews}</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.pageViews}</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${n.pageViews}</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>\n    <span class="debug-email-forms__stat-value">${t.highestScrollPercentageAcrossAllPages}% </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.highestScrollPercentageAcrossAllPages}%</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${n.highestScrollPercentageAcrossAllPages}%</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on site: </span>\n    <span class="debug-email-forms__stat-value">${t.activeTimeOnSite}s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.activeTimeOnSite}s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${n.activeTimeOnSite}s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on page: </span>\n    <span class="debug-email-forms__stat-value">${t.activeTimeOnPage}s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: ${e.activeTimeOnPage}s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${n.activeTimeOnPage}s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal was closed: </span>\n    <span class="debug-email-forms__stat-value">${o?o.days+` day${1!==o.days?"s":""} ago`:"never"}</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Requires: never or 2 days ago</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar was closed: </span>\n    <span class="debug-email-forms__stat-value">${i?i.days+` day${1!==i.days?"s":""} ago`:"never"}</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Requires: never or 2 days ago</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal is openable: </span>\n    ${a?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>'}\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar is open: </span>\n    ${s?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>'}\n  </div>\n</div>`}({modalRequirements:e,modalActualValues:t,modalMeetsRequirements:a,bottomBarRequirements:n,bottomBarActualValues:s,bottomBarMeetsRequirements:o})}({modalRequirements:t,modalActualValues:a,modalMeetsRequirements:e,bottomBarRequirements:s,bottomBarActualValues:o,bottomBarMeetsRequirements:n})}),M(b.pageViews)?b.pageViews++:b.pageViews=1,M(b.highestScrollPercentageAcrossAllPages)||(b.highestScrollPercentageAcrossAllPages=0),M(b.activeTimeOnSite)||(b.activeTimeOnSite=0),b.activeTimeOnPage=0,window.addEventListener("scroll",function(e,t){var a=!0,n=!1;return function(){var t=arguments;n||(n=!0,setTimeout(function(){e.apply(void 0,[].slice.call(t)),n=!1},a?0:1e3),a=!1)}}(function(){!function(){let e=function(){let e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),t=window.pageYOffset/(e-document.documentElement.clientHeight);return Math.floor(100*t)}();e>b.highestScrollPercentageAcrossAllPages&&(b.highestScrollPercentageAcrossAllPages=e)}(),b.activeTimeOnPage++,b.activeTimeOnSite++})),E.showDebugNotice&&document.addEventListener("click",e=>{if(e.target.closest(E.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)&&(window.localStorage.clear(),window.location.reload()),e.target.closest(E.SELECTORS.DEBUG_ELEM_BYPASS_SELECTOR)){b.pageViews=100,b.activeTimeOnPage=100,b.activeTimeOnSite=100,b.highestScrollPercentageAcrossAllPages=100;let e=864e5;b.modalClosedDate=Date.now()-2*e,b.bottomBarClosedDate=Date.now()-2*e}}),t=()=>{E.isModalOpenable&&function(){E.activeElement=document.activeElement,E.MODAL_ELEM.classList.add("show"),document.body.classList.add(E.BODY_CLASS_MODAL_OPEN),E.MODAL_ELEM.querySelector(E.FOCUSABLE_SELECTORS).focus();const e=document.querySelectorAll(E.FOCUSABLE_SELECTORS),t=E.MODAL_ELEM.querySelectorAll(E.FOCUSABLE_SELECTORS),a=Array.from(t);e.forEach(e=>{a.includes(e)||e.setAttribute("tabindex","-1")}),E.MODAL_ELEM.removeAttribute("aria-hidden"),Array.from(document.body.children).forEach(e=>{e!==E.MODAL_ELEM&&e.setAttribute("aria-hidden","true")}),function(e,t){if(R){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!P.some(function(t){return t.targetElement===e})){var a={targetElement:e,options:{}};P=[].concat(y(P),[a]),e.ontouchstart=function(e){1===e.targetTouches.length&&(D=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var a=e.targetTouches[0].clientY-D;!k(e.target)&&(t&&0===t.scrollTop&&a>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&a<0?$(e):e.stopPropagation())}(t,e)},C||(document.addEventListener("touchmove",$,B?{passive:!1}:void 0),C=!0)}}else{setTimeout(function(){void 0===N&&(window,document),void 0===q&&(q=document.body.style.overflow,document.body.style.overflow="hidden")});var n={targetElement:e,options:{}};P=[].concat(y(P),[n])}}(E.MODAL_ELEM),console.log("open modal")}()},document.addEventListener("mouseout",function(e){let a=e.clientY<20,n=null===e.relatedTarget,s="select"!==e.target.nodeName.toLowerCase()&&"input"!==e.target.nodeName.toLowerCase();a&&n&&s&&t&&t()}),E.MODAL_ELEM.addEventListener("click",j),E.MODAL_FORM_ELEM.addEventListener("submit",x),E.MODAL_CLOSE_BUTTON_ELEM.addEventListener("click",U),document.addEventListener("keydown",V),E.BOTTOM_BAR_FORM_ELEM.addEventListener("submit",Y),E.BOTTOM_BAR_CLOSE_BUTTON_ELEM.addEventListener("click",F)},"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}var H={contentWebsite:function(e){e.websiteType="content",I(e)},marketingWebsite:function(e){e.websiteType="marketing",I(e)}};export default H;
//# sourceMappingURL=polite-email-popup.modern.js.map
