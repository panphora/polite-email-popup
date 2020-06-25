import temporaryGlobals from "../temporary-globals/temporary-globals";
import getElem from "./get-elem";

export default function initElemGlobals () {
  let {SELECTORS} = temporaryGlobals;

  Object.assign(temporaryGlobals, {
    MODAL_ELEM: getElem(SELECTORS.MODAL_ELEM_SELECTOR),
    MODAL_FORM_ELEM: getElem(SELECTORS.MODAL_FORM_ELEM_SELECTOR),
    MODAL_CLOSE_BUTTON_ELEM: getElem(SELECTORS.MODAL_CLOSE_BUTTON_ELEM_SELECTOR),
    BOTTOM_BAR_ELEM: getElem(SELECTORS.BOTTOM_BAR_ELEM_SELECTOR),
    DEBUG_NOTICE_ELEM: getElem(SELECTORS.DEBUG_ELEM)
  });
}