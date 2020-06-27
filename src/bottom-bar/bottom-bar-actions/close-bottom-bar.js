import temporaryGlobals from "../../temporary-globals/temporary-globals";

export default function openBottomBar () {
  temporaryGlobals.BOTTOM_BAR_ELEM.classList.remove("show");
  document.body.classList.remove(temporaryGlobals.BODY_CLASS_BOTTOM_BAR_OPEN);
}