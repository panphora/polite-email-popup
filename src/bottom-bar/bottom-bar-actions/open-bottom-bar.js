import temporaryGlobals from "../../temporary-globals/temporary-globals";

export default function openBottomBar () {
  // show the bottom bar
  temporaryGlobals.BOTTOM_BAR_ELEM.classList.add("show");
  document.body.classList.add(temporaryGlobals.BODY_CLASS_BOTTOM_BAR_OPEN);
}