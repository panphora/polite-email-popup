import temporaryGlobals from "./temporary-globals";
import getElem from "../helpers/get-elem";

const selectors = {
  MODAL_ELEM_SELECTOR: '.email-modal',
  MODAL_FORM_ELEM_SELECTOR: '.email-modal__content',
  MODAL_CLOSE_BUTTON_ELEM_SELECTOR: '.email-modal__close',
};

export default function initTemporaryGlobals (userDefinedGlobal) {
  Object.keys(userDefinedGlobal).forEach(key => {
    temporaryGlobals[key] = userDefinedGlobal[key]
  });

  Object.assign(temporaryGlobals, {
    WEBSITE_TYPES: {
      CONTENT: "CONTENT",
      MARKETING: "MARKETING"
    },
    IS_MOBILE: window.matchMedia("only screen and (max-width: 780px)").matches,
    FOCUSABLE_SELECTORS: 'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]',
    BODY_CLASS_MODAL_OPEN: 'email-modal-is-open',
    MODAL_ELEM: getElem(selectors.MODAL_ELEM_SELECTOR),
    MODAL_FORM_ELEM: getElem(selectors.MODAL_FORM_ELEM_SELECTOR),
    MODAL_CLOSE_BUTTON_ELEM: getElem(selectors.MODAL_CLOSE_BUTTON_ELEM_SELECTOR)
  });
}


