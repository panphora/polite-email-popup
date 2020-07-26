export default function getStylesString () {
  return `<style>.bottom-bar,.email-modal{display:none;line-height:1.4;font-size:16px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.bottom-bar.show,.email-modal.show{display:flex}.bottom-bar,.bottom-bar *,.email-modal,.email-modal *{box-sizing:border-box;margin:0;padding:0;color:#212529}.bottom-bar button,.email-modal button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:0 0;color:inherit;font:inherit;line-height:normal;cursor:pointer;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none}.bottom-bar button::-moz-focus-inner,.email-modal button::-moz-focus-inner{border:0;padding:0}.bottom-bar .bottom-bar__close,.bottom-bar .bottom-bar__sign-up,.email-modal .email-modal__sign-up{padding:9px 22px 11px;font-size:17px;font-weight:700;letter-spacing:.5px;color:#fff;background-color:#4263eb;border-radius:1px}.bottom-bar .bottom-bar__sign-up:hover,.email-modal .email-modal__sign-up:hover{background-color:#364fc7}@media (min-width:780px){.bottom-bar .hide-desktop,.email-modal .hide-desktop{display:none!important}}@media (max-width:779.9999px){.bottom-bar .hide-mobile,.email-modal .hide-mobile{display:none!important}}.email-modal{z-index:100;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;line-height:1.4;font-size:16px;background-color:rgba(0,0,0,.6)}.email-modal .email-modal__content{transform:translate(0,1000px);transition:transform .4s;position:relative;width:480px;max-width:calc(100vw - 3rem);padding:35px 32px 33px 32px;background-color:#fff;border-radius:5px;box-shadow:0 2px 8px 0 rgba(0,0,0,.24)}.email-modal-is-open .email-modal .email-modal__content{transform:translate(0,0)}.email-modal .email-modal__top{display:flex;margin-bottom:1.75rem}.email-modal .email-modal__top-media{width:108px;margin-right:22px}.email-modal .email-modal__top-image{box-sizing:content-box;display:block;max-width:100%;border:1px solid #dee2e6;border-radius:5px}.email-modal .email-modal__title{font-size:22px;font-weight:700;margin-bottom:.25rem}.email-modal .email-modal__description{font-size:18px;color:#757575}.email-modal .email-modal__input-container{margin-bottom:1.75rem}.email-modal .email-modal__input{display:block;width:100%;padding:9px 15px 10px;border:1px solid #dee2e6;font-size:16px;font-family:inherit}.email-modal .email-modal__button-container{text-align:center}.email-modal .email-modal__close{position:absolute;top:14px;right:13px;width:33px;height:33px}.email-modal .email-modal__close:hover::after,.email-modal .email-modal__close:hover::before{background-color:#b1bac4}.email-modal .email-modal__close::before{transform:rotate(45deg);position:absolute;top:0;left:0;bottom:0;right:0;width:5px;height:33px;margin:auto;content:"";background-color:#ced4da;border-radius:2px}.email-modal .email-modal__close::after{transform:rotate(-45deg);position:absolute;top:0;left:0;bottom:0;right:0;width:5px;height:33px;margin:auto;content:"";background-color:#ced4da;border-radius:2px}@media (max-width:779.9999px){.email-modal .email-modal__top{display:block}.email-modal .email-modal__top-media{width:75px;margin:0 auto 1.75rem auto}.email-modal .email-modal__top-content{text-align:center}}.bottom-bar{z-index:99;position:fixed;left:0;bottom:0;justify-content:center;width:100%;border-top:1px solid #adb5bd;background-color:#f1f3f5}.bottom-bar .bottom-bar__content{display:flex;padding:10px 0 11px 0}.bottom-bar .bottom-bar__label{display:flex;align-items:center}.bottom-bar .bottom-bar__label-text{margin-top:-1px;margin-right:12px;font-weight:600;color:#343a40}.bottom-bar .bottom-bar__input{margin-right:11px;padding:6px 10px 7px;max-width:300px;width:31vw;border:1px solid #adb5bd;font-family:inherit;font-size:16px;border-radius:1px}.bottom-bar .bottom-bar__close,.bottom-bar .bottom-bar__sign-up{padding:7px 19px 9px;font-size:15px;font-weight:600;border-radius:999px}.bottom-bar .bottom-bar__close-container{position:absolute;top:0;right:0;padding:10px 16px 10px 0}.bottom-bar .bottom-bar__close{background-color:#ced4da;color:#495057}.bottom-bar .bottom-bar__close:hover{background-color:#adb5bd;color:#343a40}.bottom-bar .bottom-bar__close-x-icon{display:block;width:3px;height:20px;background-color:#868e96;transform:rotate(45deg)}.bottom-bar .bottom-bar__close-x-icon>span{display:block;width:3px;height:20px;background-color:#868e96;transform:rotate(-90deg)}@media (max-width:779.9999px){.bottom-bar.show{display:block}.bottom-bar .bottom-bar__content{align-items:flex-end;padding:15px 21px 21px 22px}.bottom-bar .bottom-bar__label{flex:1 0 auto;display:block}.bottom-bar .bottom-bar__label-text{display:block;margin:0 0 12px 0}.bottom-bar .bottom-bar__input{width:100%;max-width:calc(100% - 16px)}.bottom-bar .bottom-bar__close-container{padding:0;transform:translate(0,-100%)}.bottom-bar .bottom-bar__close{padding:7px 17px 7px;border-radius:2px 0 0 0}}.debug-email-forms{display:flex;flex-wrap:wrap;position:fixed;top:18px;right:24px;max-width:600px;padding:16px 21px;font-size:16px;line-height:1.4;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;color:#343a40;background-color:#fff;box-shadow:1px 3px 6px rgba(0,0,0,.25);border-radius:5px}.debug-email-forms .debug-email-forms__stat{width:50%;flex:1 0 auto;margin-bottom:12px}.debug-email-forms .debug-email-forms__stat--buttons{text-align:right}.debug-email-forms .debug-email-forms__reset{margin-right:8px}.debug-email-forms .debug-email-forms__stat-label{font-weight:700;color:#ae3ec9}.debug-email-forms .debug-email-forms__stat-value{white-space:nowrap;font-weight:700;color:#212529}.debug-email-forms .debug-email-forms__stat-requirements{margin:6px 0;padding-left:32px}.debug-email-forms .debug-email-forms__stat-requirement{color:#868e96}.debug-email-forms .debug-email-forms__stat-value--success{color:#2f9e44}.debug-email-forms .debug-email-forms__stat-value--fail{color:#e03131}</style>`;
}