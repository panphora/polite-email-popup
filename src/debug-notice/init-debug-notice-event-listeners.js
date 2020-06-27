import temporaryGlobals from "../temporary-globals/temporary-globals";
import {persistentGlobals} from "../persistent-globals/persistent-globals";

export default function initDebugNoticeEventListeners () {
  if (temporaryGlobals.showDebugNotice) {
    document.addEventListener("click", event => {

      if (event.target.closest(temporaryGlobals.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)) {
        window.localStorage.clear(); 
        window.location.reload();
      }

      if (event.target.closest(temporaryGlobals.SELECTORS.DEBUG_ELEM_BYPASS_SELECTOR)) {
        persistentGlobals.pageViews = 100;
        persistentGlobals.activeTimeOnPage = 100;
        persistentGlobals.activeTimeOnSite = 100;
        persistentGlobals.highestScrollPercentageAcrossAllPages = 100;
      }

    });
  }
}