import temporaryGlobals from "../temporary-globals/temporary-globals";
import {onSubmit} from "../event-handlers/on-submit";
import closeBottomBar from "./bottom-bar-actions/close-bottom-bar";

export default function initBottomBarEventListeners () {
  temporaryGlobals.BOTTOM_BAR_FORM_ELEM.addEventListener("submit", onSubmit);
  temporaryGlobals.BOTTOM_BAR_CLOSE_BUTTON_ELEM.addEventListener('click', closeBottomBar);
}
