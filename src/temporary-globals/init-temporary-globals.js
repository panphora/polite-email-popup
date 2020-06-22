import temporaryGlobals from "./temporary-globals";
import getElem from "../dom/get-elem";

export default function initTemporaryGlobals (userDefinedGlobals) {
  const SELECTORS = {
    MODAL_ELEM_SELECTOR: ".email-modal",
    MODAL_FORM_ELEM_SELECTOR: ".email-modal__content",
    MODAL_FORM_INPUT_ELEM_SELECTOR: ".email-signup-form-input",
    MODAL_CLOSE_BUTTON_ELEM_SELECTOR: ".email-modal__close",
    DEBUG_ELEM: ".polite-email-popup__debug-notice",
    DEBUG_ELEM_RESET_SELECTOR: ".debug-emails-forms__reset"
  };

  const defaultGlobals = {
    
    // USER DEFAULTS
    showDebugNotice: false,
    websiteType: "content", // "content" or "marketing"
    beSlightlyMoreAggressive: false,
    onSubmit: () => {console.log("Event: Email form submitted")},
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

    // SYSTEM GLOBALS - DEBUG NOTICE
    DEBUG_UNIT_PAGE_VIEWS: "",
    DEBUG_UNIT_HIGHEST_SCROLL_PERCENTAGE: "%",
    DEBUG_UNIT_ACTIVE_TIME_ON_SITE: "s",
    DEBUG_UNIT_ACTIVE_TIME_ON_PAGE: "s"
  };

  Object.assign(temporaryGlobals, defaultGlobals, userDefinedGlobals);

  temporaryGlobals.websiteType = temporaryGlobals.websiteType.toLowerCase();

  if (temporaryGlobals.websiteType !== "content" && temporaryGlobals.websiteType !== "marketing") {
    throw Error("websiteType must be set to either 'content' or 'marketing'");
  }

  // todo remove
  window.temporaryGlobals = temporaryGlobals;
}


