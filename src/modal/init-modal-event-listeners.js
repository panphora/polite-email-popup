import temporaryGlobals from "../temporary-globals/temporary-globals";
import initExitIntent from "./init-exit-intent";
import closeModal from "./modal-actions/close-modal";

export default function initModalEventListeners () {
  // when user goes to exit the page, if politeness rules are met, show modal
  initExitIntent();
  // when backdrop clicked, close modal
  temporaryGlobals.MODAL_ELEM.addEventListener("click", event => onClickModalBackdrop({event}));
  // when email form submitted, call onSubmit callback and close modal
  temporaryGlobals.MODAL_FORM_ELEM.addEventListener("submit", event => onSubmit({event}));
  // when modal close button clicked, close modal
  temporaryGlobals.MODAL_CLOSE_BUTTON_ELEM.addEventListener('click', () => closeModal());
  // when Esc key is pressed, close modal
  document.addEventListener("keydown", (event) => onKeyDown({event}));
}

function onKeyDown ({event}) {
  if (event.keyCode === 27 && document.body.classList.contains(temporaryGlobals.BODY_CLASS_MODAL_OPEN)) {
    closeModal();
  }
}

function onSubmit ({event}) {
  event.preventDefault();

  // trigger onSubmit callback and pass in the user's email
  let emailInputElement = event.currentTarget.querySelector(temporaryGlobals.SELECTORS.MODAL_FORM_INPUT_ELEM_SELECTOR);
  let email = emailInputElement.value;
  temporaryGlobals.onSubmit({event, email});

  closeModal();
}

function onClickModalBackdrop ({event}) {
  if (!event.target.closest(temporaryGlobals.SELECTORS.MODAL_FORM_ELEM_SELECTOR)) {
    closeModal();
  }
}



