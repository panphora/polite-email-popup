import temporaryGlobals from "../temporary-globals/temporary-globals";

export default function initDebugNoticeEventListeners () {
  if (temporaryGlobals.showDebugNotice) {
    document.addEventListener("click", event => {
      if (event.closest(temporaryGlobals.SELECTORS.DEBUG_ELEM_RESET_SELECTOR)) {
        window.localStorage.clear(); 
        window.location.reload();
      }
    });
  }
}