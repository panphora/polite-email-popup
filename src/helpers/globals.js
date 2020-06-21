import db from "./localstorage-db";
import MiniEvents from "./mini-events";

export default {
  WEBSITE_TYPES: {
    CONTENT: "CONTENT",
    MARKETING: "MARKETING"
  },
  FOCUSABLE_SELECTORS: 'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex]',
  IS_MOBILE: window.matchMedia("only screen and (max-width: 780px)").matches,
  MODAL_ELEM_CLASS: '.email-modal',
  MODAL_ELEM_FORM_CLASS: '.email-modal__content',
  MODAL_ELEM_CLOSE_BUTTON_CLASS: '.email-modal__close',
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
  },
  getHighestScrollPercentage () {
    return this.HIGHEST_SCROLL_PERCENTAGE;
  },
  getActiveTimeOnSite () {
    return this.ACTIVE_TIME_ON_SITE;
  },
  getActiveTimeOnPage () {
    return this.ACTIVE_TIME_ON_PAGE;
  },
  incrementSitePageViews () {
    let pageViews = db.increment("pageViews");
    this.SITE_PAGE_VIEWS = pageViews;

    MiniEvents.trigger("pageData", {pageViews});
  },
  setHighestScrollPercentage (num) {
    let savedScrollPercentage = db.get("highestScrollPercentage") || 0;

    let highestScrollPercentage = num > savedScrollPercentage ? num : savedScrollPercentage;

    db.set("highestScrollPercentage", highestScrollPercentage);
    this.HIGHEST_SCROLL_PERCENTAGE = highestScrollPercentage;

    MiniEvents.trigger("pageData", {highestScrollPercentage});
  },
  incrementActiveTimeOnSite (seconds) {
    let activeTimeOnSite = db.increment("activeTimeOnSite");
    this.ACTIVE_TIME_ON_SITE = activeTimeOnSite;

    MiniEvents.trigger("pageData", {activeTimeOnSite});
  },
  incrementActiveTimeOnPage (seconds) {
    this.ACTIVE_TIME_ON_PAGE += 1;
    MiniEvents.trigger("pageData", {activeTimeOnPage: this.ACTIVE_TIME_ON_PAGE});
  }
}





