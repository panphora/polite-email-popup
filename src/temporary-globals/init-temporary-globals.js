import temporaryGlobals from "./temporary-globals";
import getElem from "../dom/get-elem";

export default function initTemporaryGlobals (userDefinedGlobals) {
  const SELECTORS = {
    MODAL_ELEM_SELECTOR: ".email-modal",
    MODAL_FORM_ELEM_SELECTOR: ".email-modal__content",
    MODAL_FORM_INPUT_ELEM_SELECTOR: ".email-signup-form-input",
    MODAL_CLOSE_BUTTON_ELEM_SELECTOR: ".email-modal__close",
    BOTTOM_BAR_ELEM_SELECTOR: ".bottom-bar",
    BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR: ".email-signup-form-input",
    BOTTOM_BAR_FORM_ELEM_SELECTOR: "form.bottom-bar__content",
    BOTTOM_BAR_CLOSE_BUTTON_ELEM_SELECTOR: ".bottom-bar__close",
    DEBUG_ELEM: ".polite-pop__debug-notice",
    DEBUG_ELEM_RESET_SELECTOR: ".debug-email-forms__reset",
    DEBUG_ELEM_BYPASS_SELECTOR: ".debug-email-forms__bypass"
  };

  const defaultGlobals = {
    
    // USER DEFAULTS
    showDebugNotice: false,
    websiteType: "content", // "content" or "marketing"
    beSlightlyMoreAggressive: false,
    onSubmit: () => {},
    imageSrc: "",
    headingText: "Sign up for updates",
    descriptionText: "Get cutting edge articles and insights into our process",
    mainButtonText: "Sign up",
    closeButtonText: "Close",

    // SYSTEM GLOBALS
    SELECTORS: SELECTORS,
    IS_MOBILE: window.matchMedia("only screen and (max-width: 780px)").matches,
    FOCUSABLE_SELECTORS: 'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]',
    BODY_CLASS_MODAL_OPEN: 'email-modal-is-open',
    BODY_CLASS_BOTTOM_BAR_OPEN: 'email-bottom-bar-is-open',

    // SYSTEM FLAGS
    isModalOpenable: false,
    isModalOpen: false
  };

  Object.assign(temporaryGlobals, defaultGlobals, userDefinedGlobals);

  // todo remove
  window.temporaryGlobals = temporaryGlobals;
}


