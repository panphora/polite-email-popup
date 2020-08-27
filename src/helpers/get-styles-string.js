export default function getStylesString () {
  return `<style>@-webkit-keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@-webkit-keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@-webkit-keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;pointer-events:none;box-sizing:border-box;padding:20px;font-size:16px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);position:relative;padding:0 15px;border-radius:2px;max-width:300px;transform:translateY(25%);box-sizing:border-box;flex-shrink:0}.notyf__toast--disappear{transform:translateY(0);-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translateX(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:50ms;animation-delay:50ms}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;transform-origin:bottom right;right:0;top:0;border-radius:50%;transform:scale(0) translateY(-51%) translateX(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:rgba(0,0,0,.25);border:none;cursor:pointer;transition:opacity .2s ease,background-color .2s ease;outline:0;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:"";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:rgba(0,0,0,.15)}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);width:100%}.notyf__dismiss{width:56px}}.bottom-bar,.email-modal{display:none;line-height:1.4;font-size:16px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.bottom-bar.show,.email-modal.show{display:flex}.bottom-bar,.bottom-bar *,.email-modal,.email-modal *{box-sizing:border-box;margin:0;padding:0;color:#212529}.bottom-bar button,.email-modal button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:0 0;color:inherit;font:inherit;line-height:normal;cursor:pointer;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none}.bottom-bar button::-moz-focus-inner,.email-modal button::-moz-focus-inner{border:0;padding:0}.bottom-bar .bottom-bar__close,.bottom-bar .bottom-bar__sign-up,.email-modal .email-modal__sign-up{padding:9px 22px 11px;font-size:17px;font-weight:700;letter-spacing:.5px;color:#fff;background-color:#4263eb;border-radius:1px}.bottom-bar .bottom-bar__sign-up:hover,.email-modal .email-modal__sign-up:hover{background-color:#364fc7}@media (min-width:780px){.bottom-bar .hide-desktop,.email-modal .hide-desktop{display:none!important}}@media (max-width:779.9999px){.bottom-bar .hide-mobile,.email-modal .hide-mobile{display:none!important}}.email-modal{z-index:2147483647;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;line-height:1.4;font-size:16px;background-color:rgba(0,0,0,.6)}.email-modal .email-modal__content{transform:translate(0,1000px);transition:transform .4s;position:relative;width:480px;max-width:calc(100vw - 3rem);padding:35px 32px 33px 32px;background-color:#fff;border-radius:5px;box-shadow:0 2px 8px 0 rgba(0,0,0,.24)}.email-modal-is-open .email-modal .email-modal__content{transform:translate(0,0)}.email-modal .email-modal__top{display:flex;margin-bottom:1.75rem}.email-modal .email-modal__top-media{width:108px;margin-right:22px}.email-modal .email-modal__top-image{box-sizing:content-box;display:block;max-width:100%;border:1px solid #dee2e6;border-radius:5px}.email-modal .email-modal__title{font-size:22px;font-weight:700;margin-bottom:.25rem}.email-modal .email-modal__description{font-size:18px;color:#757575}.email-modal .email-modal__input-container{margin-bottom:1.75rem}.email-modal .email-modal__input{display:block;width:100%;padding:9px 15px 10px;border:1px solid #dee2e6;font-size:16px;font-family:inherit}.email-modal .email-modal__button-container{text-align:center}.email-modal .email-modal__close{position:absolute;top:14px;right:13px;width:33px;height:33px}.email-modal .email-modal__close:hover::after,.email-modal .email-modal__close:hover::before{background-color:#b1bac4}.email-modal .email-modal__close::before{transform:rotate(45deg);position:absolute;top:0;left:0;bottom:0;right:0;width:5px;height:33px;margin:auto;content:"";background-color:#ced4da;border-radius:2px}.email-modal .email-modal__close::after{transform:rotate(-45deg);position:absolute;top:0;left:0;bottom:0;right:0;width:5px;height:33px;margin:auto;content:"";background-color:#ced4da;border-radius:2px}@media (max-width:779.9999px){.email-modal .email-modal__top{display:block}.email-modal .email-modal__top-media{width:75px;margin:0 auto 1.75rem auto}.email-modal .email-modal__top-content{text-align:center}}.bottom-bar{z-index:2147483647;position:fixed;left:0;bottom:0;justify-content:center;width:100%;border-top:1px solid #adb5bd;background-color:#f1f3f5}.bottom-bar .bottom-bar__content{padding:10px 0 11px 0}.bottom-bar__bottom{display:inline-block}.bottom-bar .bottom-bar__label-text{margin-top:-1px;margin-right:12px;font-weight:600;color:#343a40}.bottom-bar .bottom-bar__input{margin-right:11px;padding:6px 10px 7px;max-width:300px;width:31vw;border:1px solid #adb5bd;font-family:inherit;font-size:16px;border-radius:1px}.bottom-bar .bottom-bar__close,.bottom-bar .bottom-bar__sign-up{padding:7px 19px 9px;font-size:15px;font-weight:600;border-radius:999px}.bottom-bar .bottom-bar__close-container{position:absolute;top:0;right:0;padding:10px 16px 10px 0}.bottom-bar .bottom-bar__close{background-color:#ced4da;color:#495057}.bottom-bar .bottom-bar__close:hover{background-color:#adb5bd;color:#343a40}.bottom-bar .bottom-bar__close-x-icon{display:block;width:3px;height:20px;background-color:#868e96;transform:rotate(45deg)}.bottom-bar .bottom-bar__close-x-icon>span{display:block;width:3px;height:20px;background-color:#868e96;transform:rotate(-90deg)}@media (max-width:990px){.bottom-bar{justify-content:flex-start;padding-left:1.5rem}}@media (max-width:779.9999px){.bottom-bar.show{display:block;justify-content:center;padding-left:0}.bottom-bar .bottom-bar__content{padding:15px 21px 21px 22px}.bottom-bar__bottom{display:flex}.bottom-bar .bottom-bar__sign-up{flex:0 0 auto}.bottom-bar .bottom-bar__label-text{display:block;margin:0 0 12px 0}.bottom-bar .bottom-bar__input{width:100%;max-width:calc(100% - 16px)}.bottom-bar .bottom-bar__close-container{padding:0;transform:translate(0,-100%)}.bottom-bar .bottom-bar__close{padding:7px 17px 7px;border-radius:2px 0 0 0}}.debug-email-forms{display:flex;flex-wrap:wrap;position:fixed;top:18px;right:24px;max-width:600px;padding:16px 21px;font-size:16px;line-height:1.4;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;color:#343a40;background-color:#fff;box-shadow:1px 3px 6px rgba(0,0,0,.25);border-radius:5px}.debug-email-forms .debug-email-forms__stat{width:50%;flex:1 0 auto;margin-bottom:12px}.debug-email-forms .debug-email-forms__stat--buttons{text-align:right}.debug-email-forms .debug-email-forms__reset{margin-right:8px}.debug-email-forms .debug-email-forms__stat-label{font-weight:700;color:#ae3ec9}.debug-email-forms .debug-email-forms__stat-value{white-space:nowrap;font-weight:700;color:#212529}.debug-email-forms .debug-email-forms__stat-requirements{margin:6px 0;padding-left:20px}.debug-email-forms .debug-email-forms__stat-requirement{color:#868e96;font-size:14px}.debug-email-forms .debug-email-forms__stat-value--success{color:#2f9e44}.debug-email-forms .debug-email-forms__stat-value--fail{color:#e03131}</style>`;
}