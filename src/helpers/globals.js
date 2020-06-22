export default {
  WEBSITE_TYPES: {
    CONTENT: "CONTENT",
    MARKETING: "MARKETING"
  },
  FOCUSABLE_SELECTORS: 'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]',
  IS_MOBILE: window.matchMedia("only screen and (max-width: 780px)").matches,
  MODAL_ELEM_SELECTOR: '.email-modal',
  MODAL_ELEM_FORM_SELECTOR: '.email-modal__content',
  MODAL_ELEM_CLOSE_BUTTON_SELECTOR: '.email-modal__close',
  BODY_CLASS_MODAL_OPEN: 'email-modal-is-open',
  MODAL_IS_OPENABLE: false,
  SITE_PAGE_VIEWS: 0,
  HIGHEST_SCROLL_PERCENTAGE: 0,
  ACTIVE_TIME_ON_SITE: 0,
  ACTIVE_TIME_ON_PAGE: 0,
  // TODO:
  // MODAL_VIEW_COUNT, 
  // CLOSED_MODAL_DATE, 
  // CLOSED_MODAL_IN_PAST_TWO_WEEKS, 
  // CLOSED_BOTTOM_BAR_DATE,
  // CLOSED_BOTTOM_BAR_IN_PAST_TWO_WEEKS,
  setActiveElement (el) {
    this.activeElement = el;
  },
  getActiveElement () {
    return this.activeElement;
  },
  setModalAsOpenable () {
    this.MODAL_IS_OPENABLE = true;
    MiniEvents.trigger("MODAL_IS_OPENABLE", true);
  },
  isModalOpenable () {
    return this.MODAL_IS_OPENABLE;
  }
}





