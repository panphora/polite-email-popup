import temporaryGlobals from "../temporary-globals/temporary-globals";
import closeBottomBar from "./bottom-bar-actions/close-bottom-bar";

export default function initBottomBarEventListeners () {
  temporaryGlobals.BOTTOM_BAR_FORM_ELEM.addEventListener("submit", onSubmit);
  temporaryGlobals.BOTTOM_BAR_CLOSE_BUTTON_ELEM.addEventListener('click', closeBottomBar);
}

function onSubmit (event) {
  event.preventDefault();

  // trigger onSubmit callback and pass in the user's email
  let emailInputElement = event.currentTarget.querySelector(temporaryGlobals.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR);
  let email = emailInputElement.value;
  temporaryGlobals.onSubmit({event, email});

  closeBottomBar();
}