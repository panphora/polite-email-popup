import temporaryGlobals from "../temporary-globals/temporary-globals";

export default function initDebugNoticeEventListeners () {
  if (temporaryGlobals.showDebugNotice) {
    temporaryGlobals.DEBUG_RESET_ELEM.addEventListener("click", e => {
      window.localStorage.clear(); 
      window.location.reload();
    });
  }
}