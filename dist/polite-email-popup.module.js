var e,t,n=Object.prototype,a=Function.prototype.toString,i=n.hasOwnProperty,s=a.call(Object),o=n.toString,r=(e=Object.getPrototypeOf,t=Object,function(n){return e(t(n))});function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function u(){this.callbacksLookup={}}u.prototype={emit:function(e,t){for(var n,a=this.callbacksLookup["*"]||[],i=c(this.callbacksLookup[e]||[]);!(n=i()).done;)(0,n.value)({name:e,value:t});for(var s,o=c(a);!(s=o()).done;)(0,s.value)({name:e,value:t})},on:function(e,t){for(var n,a=c(Array.isArray(e)?e:[e]);!(n=a()).done;){var i=n.value;this.callbacksLookup[i]||(this.callbacksLookup[i]=[]),this.callbacksLookup[i].push(t)}}};var m,d=new u;function g(e,t){void 0===t&&(t={}),e=e||"tigerlily";var n=t.defaults,l=void 0===n?{}:n,c=JSON.parse(localStorage.getItem(e)||"{}",E);return c=Object.assign(l,c),new Proxy(c,function t(n){return{get:function(e,a){return _(e[a])?new Proxy(e[a],t(n)):e[a]},set:function(t,l,c){t[l]=c,localStorage.setItem(e,JSON.stringify(n,v));var u=t[l],m=_(u)?JSON.parse(JSON.stringify(u,v),E):u,g=_(c)?JSON.parse(JSON.stringify(c,v),E):c,b=function(e,t){if(e===t)return"";var n="";return function e(t,n,l){l=l||"",Array.isArray(t)?function(t,n,a){t.forEach((t,i,s)=>{const o=`${a}[${i}]`;n.call(s,t,i,s,o),e(s[i],n,o)})}(t,n,l):function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=o.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=r(e);if(null===t)return!0;var n=i.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==s}(t)&&function(t,n,a){for(const i in t){const s=a?`${a}.${i}`:i;n.call(t,t[i],i,t,s),e(t[i],n,s)}}(t,n,l)}(e,function(e,a,i,s){e===t&&(n=s)}),n}(n,c)||l;return d.emit(b,{prop:l,path:b,oldValue:m,value:g}),!0}}}(c))}function _(e){return Array.isArray(e)||"[object Object]"===Object.prototype.toString.call(e)}function v(e,t){if(this[e]instanceof Date){var n=this[e].getTime();return n?{__isDate:!0,ms:n}:void 0}return t}function E(e,t){return _(t)&&t.__isDate?new Date(t.ms):t}g.on=function(e,t){d.on(e,function(e){t(e.value)})},m||(m=g("polite-email-popup")),window.persistentGlobals=m;var b={},f={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:3,aggressive:2}},activeTimeOnPage:{content:{notAggressive:8,aggressive:6},marketing:{notAggressive:8,aggressive:6}},activeTimeOnSite:{content:{notAggressive:30,aggressive:20},marketing:{notAggressive:30,aggressive:20}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:35,aggressive:25},marketing:{notAggressive:0,aggressive:0}}},O={pageViews:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnPage:{content:{notAggressive:0,aggressive:0},marketing:{notAggressive:0,aggressive:0}},activeTimeOnSite:{content:{notAggressive:15,aggressive:10},marketing:{notAggressive:15,aggressive:10}},highestScrollPercentageAcrossAllPages:{content:{notAggressive:25,aggressive:20},marketing:{notAggressive:25,aggressive:20}}},p={};function T(e){return p[e]||document.querySelector(e)}function L(e){return"number"==typeof e&&!Number.isNaN(e)}function S(e){document.body.insertAdjacentHTML("beforeend",e)}function A(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var M=!1;if("undefined"!=typeof window){var h={get passive(){M=!0}};window.addEventListener("testPassive",null,h),window.removeEventListener("testPassive",null,h)}var y="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),B=[],w=!1,R=-1,P=void 0,C=void 0,D=function(e){return B.some(function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))})},q=function(e){var t=e||window.event;return!!D(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)};function N(){m.modalClosedDate=Date.now(),document.body.classList.remove(b.BODY_CLASS_MODAL_OPEN),b.MODAL_ELEM.style.display="none",document.querySelectorAll(b.FOCUSABLE_SELECTORS).forEach(function(e){return e.removeAttribute("tabindex")}),document.querySelectorAll("body > [aria-hidden]").forEach(function(e){return e.removeAttribute("aria-hidden")}),b.MODAL_ELEM.setAttribute("aria-hidden","true"),b.activeElement&&b.activeElement.focus(),function(e){if(y){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,B=B.filter(function(t){return t.targetElement!==e}),w&&0===B.length&&(document.removeEventListener("touchmove",q,M?{passive:!1}:void 0),w=!1)}else(B=B.filter(function(t){return t.targetElement!==e})).length||setTimeout(function(){void 0!==C&&(document.body.style.paddingRight=C,C=void 0),void 0!==P&&(document.body.style.overflow=P,P=void 0)})}(b.MODAL_ELEM)}function k(e){27===e.keyCode&&document.body.classList.contains(b.BODY_CLASS_MODAL_OPEN)&&N()}function U(e){e.preventDefault();var t=e.currentTarget.querySelector(b.SELECTORS.MODAL_FORM_INPUT_ELEM_SELECTOR);b.onSubmit({event:e,email:t.value}),N()}function x(e){e.target.closest(b.SELECTORS.MODAL_FORM_ELEM_SELECTOR)||N()}function V(){b.BOTTOM_BAR_ELEM.classList.remove("show"),document.body.classList.remove(b.BODY_CLASS_BOTTOM_BAR_OPEN)}function j(e){e.preventDefault();var t=e.currentTarget.querySelector(b.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR);b.onSubmit({event:e,email:t.value}),V()}function F(e){var t;t=function(){var t,n,a,i,s;t=e,n={showDebugNotice:!1,websiteType:"content",beSlightlyMoreAggressive:!1,onSubmit:function(){console.log("Event: Email form submitted")},imageSrc:"",headingText:"Sign up for updates",descriptionText:"Get cutting edge articles and insights into our process",mainButtonText:"Sign up",closeButtonText:"Close",SELECTORS:{MODAL_ELEM_SELECTOR:".email-modal",MODAL_FORM_ELEM_SELECTOR:".email-modal__content",MODAL_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",MODAL_CLOSE_BUTTON_ELEM_SELECTOR:".email-modal__close",BOTTOM_BAR_ELEM_SELECTOR:".bottom-bar",BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR:".email-signup-form-input",BOTTOM_BAR_FORM_ELEM_SELECTOR:"form.bottom-bar__content",BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR:".bottom-bar__close",DEBUG_ELEM:".polite-email-popup__debug-notice",DEBUG_ELEM_RESET_SELECTOR:".debug-email-forms__reset",DEBUG_ELEM_BYPASS_SELECTOR:".debug-email-forms__bypass"},IS_MOBILE:window.matchMedia("only screen and (max-width: 780px)").matches,FOCUSABLE_SELECTORS:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]",BODY_CLASS_MODAL_OPEN:"email-modal-is-open",BODY_CLASS_BOTTOM_BAR_OPEN:"email-bottom-bar-is-open"},Object.assign(b,n,t),window.temporaryGlobals=b,b.showDebugNotice&&S("<div class='polite-email-popup__debug-notice'></div>"),S('\n<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true">\n  <form class="email-modal__content" method="POST" action="/">\n    <div class="email-modal__top">\n      <div class="email-modal__top-media">\n        <img class="email-modal__top-image" src="'+(a=b).imageSrc+'">\n      </div>\n      <div class="email-modal__top-content">\n        <h2 class="email-modal__title" id="email-modal-title">'+a.headingText+'</h2>\n        <p class="email-modal__description" id="email-modal-description">'+a.descriptionText+'</p>\n      </div>\n    </div>\n    <div class="email-modal__input-container">\n      <input class="email-modal__input email-signup-form-input" type="email" value="" placeholder="you@example.com" required>\n    </div>\n    <div class="email-modal__button-container">\n      <button class="email-modal__sign-up" type="submit">'+a.mainButtonText+'</button>\n    </div>\n    <button class="email-modal__close" type="button"></button>\n  </form>\n</div>\n'),S('<div class="bottom-bar" aria-hidden="true">\n  <form class="bottom-bar__content" method="POST" action="/">\n    <label class="bottom-bar__label">\n      <span class="bottom-bar__label-text">'+b.headingText+'</span>\n      <input class="bottom-bar__input email-signup-form-input" type="email" value="" placeholder="you@example.com" required>\n    </label>\n    <button class="bottom-bar__sign-up" type="submit">'+b.mainButtonText+'</button>\n  </form>\n  <div class="bottom-bar__close-container">\n    <button class="bottom-bar__close" type="button">\n      <span class="hide-mobile">'+b.closeButtonText+'</span>\n      <span class="bottom-bar__close-x-icon hide-desktop"><span></span></span>\n    </button>\n  </div>\n</div>'),i=b.SELECTORS,Object.assign(b,{MODAL_ELEM:T(i.MODAL_ELEM_SELECTOR),MODAL_FORM_ELEM:T(i.MODAL_FORM_ELEM_SELECTOR),MODAL_CLOSE_BUTTON_ELEM:T(i.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),BOTTOM_BAR_ELEM:T(i.BOTTOM_BAR_ELEM_SELECTOR),BOTTOM_BAR_FORM_ELEM:T(i.BOTTOM_BAR_FORM_ELEM_SELECTOR),BOTTOM_BAR_CLOSE_BUTTON_ELEM:T(i.BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR),DEBUG_NOTICE_ELEM:T(i.DEBUG_ELEM)}),g.on("*",function(e){var t,n,a,i,s,o=(a=[{pageViews:f.pageViews[t=b.websiteType][n=b.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:f.activeTimeOnPage[t][n],activeTimeOnSite:f.activeTimeOnSite[t][n],highestScrollPercentageAcrossAllPages:f.highestScrollPercentageAcrossAllPages[t][n]},{pageViews:m.pageViews,activeTimeOnPage:m.activeTimeOnPage,activeTimeOnSite:m.activeTimeOnSite,highestScrollPercentageAcrossAllPages:m.highestScrollPercentageAcrossAllPages}],i=a[0],s=a[1],[Object.keys(i).every(function(e){return s[e]>=i[e]}),i,s]),r=o[0],l=o[1],c=o[2],u=function(){var e,t,n=[{pageViews:O.pageViews[e=b.websiteType][t=b.beSlightlyMoreAggressive?"aggressive":"notAggressive"],activeTimeOnPage:O.activeTimeOnPage[e][t],activeTimeOnSite:O.activeTimeOnSite[e][t],highestScrollPercentageAcrossAllPages:O.highestScrollPercentageAcrossAllPages[e][t]},{pageViews:m.pageViews,activeTimeOnPage:m.activeTimeOnPage,activeTimeOnSite:m.activeTimeOnSite,highestScrollPercentageAcrossAllPages:m.highestScrollPercentageAcrossAllPages}],a=n[0],i=n[1];return[Object.keys(a).every(function(e){return i[e]>=a[e]}),a,i]}(),d=u[0],g=u[1],_=u[2];r&&(b.isModalOpenable=!0),d&&(b.BOTTOM_BAR_ELEM.classList.add("show"),document.body.classList.add(b.BODY_CLASS_BOTTOM_BAR_OPEN)),b.showDebugNotice&&function(e){b.DEBUG_NOTICE_ELEM.innerHTML=function(e){var t=e.modalRequirements,n=e.modalActualValues,a=e.modalMeetsRequirements,i=e.bottomBarRequirements,s=function(){var e=m.modalClosedDate;if(e)return{days:Math.floor((Date.now()-e)/864e5)}}();return'<div class="debug-email-forms">\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Website type: </span>\n    <span class="debug-email-forms__stat-value">'+(b.websiteType.charAt(0).toUpperCase()+b.websiteType.slice(1))+' website</span>\n  </div>\n  <div class="debug-email-forms__stat debug-email-forms__stat--buttons">\n    <button class="debug-email-forms__reset" type="button">Reset</button>\n    <button class="debug-email-forms__bypass" type="button">Bypass requirements</button>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Page views: </span>\n    <span class="debug-email-forms__stat-value">'+n.pageViews+'</span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.pageViews+'</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.pageViews+'</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>\n    <span class="debug-email-forms__stat-value">'+n.highestScrollPercentageAcrossAllPages+'% </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.highestScrollPercentageAcrossAllPages+'%</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.highestScrollPercentageAcrossAllPages+'%</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on site: </span>\n    <span class="debug-email-forms__stat-value">'+n.activeTimeOnSite+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnSite+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.activeTimeOnSite+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Active time on page: </span>\n    <span class="debug-email-forms__stat-value">'+n.activeTimeOnPage+'s </span>\n    <ul class="debug-email-forms__stat-requirements">\n      <li class="debug-email-forms__stat-requirement">Modal requires: '+t.activeTimeOnPage+'s</li>\n      <li class="debug-email-forms__stat-requirement">Bottom bar requires: '+i.activeTimeOnPage+'s</li>\n    </ul>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal closed: </span>\n    <span class="debug-email-forms__stat-value">'+(s?"never":s+" days ago")+'</span>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Bottom bar closed: </span>\n    <span class="debug-email-forms__stat-value">never</span>\n  </div>\n  <div class="debug-email-forms__stat">\n    <span class="debug-email-forms__stat-label">Modal is openable: </span>\n    '+(a?'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>':'<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>')+"\n  </div>\n</div>"}({modalRequirements:e.modalRequirements,modalActualValues:e.modalActualValues,modalMeetsRequirements:e.modalMeetsRequirements,bottomBarRequirements:e.bottomBarRequirements,bottomBarActualValues:e.bottomBarActualValues,bottomBarMeetsRequirements:e.bottomBarMeetsRequirements})}({modalRequirements:l,modalActualValues:c,modalMeetsRequirements:r,bottomBarRequirements:g,bottomBarActualValues:_,bottomBarMeetsRequirements:d})}),L(m.pageViews)?m.pageViews++:m.pageViews=1,L(m.highestScrollPercentageAcrossAllPages)||(m.highestScrollPercentageAcrossAllPages=0),L(m.activeTimeOnSite)||(m.activeTimeOnSite=0),m.activeTimeOnPage=0,window.addEventListener("scroll",function(e,t){var n=!0,a=!1;return function(){var t=arguments;a||(a=!0,setTimeout(function(){e.apply(void 0,[].slice.call(t)),a=!1},n?0:1e3),n=!1)}}(function(){var e,t,n;t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),n=window.pageYOffset/(t-document.documentElement.clientHeight),(e=Math.floor(100*n))>m.highestScrollPercentageAcrossAllPages&&(m.highestScrollPercentageAcrossAllPages=e),m.activeTimeOnPage++,m.activeTimeOnSite++})),b.showDebugNotice&&document.addEventListener("click",function(e){e.target.closest(b.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)&&(window.localStorage.clear(),window.location.reload()),e.target.closest(b.SELECTORS.DEBUG_ELEM_BYPASS_SELECTOR)&&(m.pageViews=100,m.activeTimeOnPage=100,m.activeTimeOnSite=100,m.highestScrollPercentageAcrossAllPages=100)}),s=function(){b.isModalOpenable&&function(){b.activeElement=document.activeElement,b.MODAL_ELEM.classList.add("show"),document.body.classList.add(b.BODY_CLASS_MODAL_OPEN),b.MODAL_ELEM.querySelector(b.FOCUSABLE_SELECTORS).focus();var e=document.querySelectorAll(b.FOCUSABLE_SELECTORS),t=b.MODAL_ELEM.querySelectorAll(b.FOCUSABLE_SELECTORS),n=Array.from(t);e.forEach(function(e){n.includes(e)||e.setAttribute("tabindex","-1")}),b.MODAL_ELEM.removeAttribute("aria-hidden"),Array.from(document.body.children).forEach(function(e){e!==b.MODAL_ELEM&&e.setAttribute("aria-hidden","true")}),function(e,t){if(y){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!B.some(function(t){return t.targetElement===e})){var n={targetElement:e,options:{}};B=[].concat(A(B),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(R=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-R;!D(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?q(e):e.stopPropagation())}(t,e)},w||(document.addEventListener("touchmove",q,M?{passive:!1}:void 0),w=!0)}}else{setTimeout(function(){void 0===C&&(window,document),void 0===P&&(P=document.body.style.overflow,document.body.style.overflow="hidden")});var a={targetElement:e,options:{}};B=[].concat(A(B),[a])}}(b.MODAL_ELEM)}()},document.addEventListener("mouseout",function(e){var t=e.clientY<20,n=null===e.relatedTarget,a="select"!==e.target.nodeName.toLowerCase()&&"input"!==e.target.nodeName.toLowerCase();t&&n&&a&&s&&s()}),b.MODAL_ELEM.addEventListener("click",x),b.MODAL_FORM_ELEM.addEventListener("submit",U),b.MODAL_CLOSE_BUTTON_ELEM.addEventListener("click",N),document.addEventListener("keydown",k),b.BOTTOM_BAR_FORM_ELEM.addEventListener("submit",j),b.BOTTOM_BAR_CLOSE_BUTTON_ELEM.addEventListener("click",V)},"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}var I={contentWebsite:function(e){e.websiteType="content",F(e)},marketingWebsite:function(e){e.websiteType="marketing",F(e)}};export default I;
//# sourceMappingURL=polite-email-popup.module.js.map
