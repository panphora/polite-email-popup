import temporaryGlobals from "../temporary-globals/temporary-globals";
import {onSubmit} from "../event-handlers/on-submit";
import initExitIntent from "./init-exit-intent";
import closeModal from "./modal-actions/close-modal";

export default function initModalEventListeners () {
  // when user goes to exit the page, if politeness rules are met, show modal
  initExitIntent();
  // when backdrop clicked, close modal
  temporaryGlobals.MODAL_ELEM.addEventListener("click", onClickModalBackdrop);
  // when email form submitted, call onSubmit callback and close modal
  temporaryGlobals.MODAL_FORM_ELEM.addEventListener("submit", onSubmit);
  // when modal close button clicked, close modal
  temporaryGlobals.MODAL_CLOSE_BUTTON_ELEM.addEventListener('click', closeModal);
  // when Esc key is pressed, close modal
  document.addEventListener("keydown", onKeyDown);
}

function onKeyDown (event) {
  if (event.keyCode === 27 && document.body.classList.contains(temporaryGlobals.BODY_CLASS_MODAL_OPEN)) {
    closeModal();
  }
}

function onClickModalBackdrop (event) {
  if (!event.target.closest(temporaryGlobals.SELECTORS.MODAL_FORM_ELEM_SELECTOR)) {
    closeModal();
  }
}



