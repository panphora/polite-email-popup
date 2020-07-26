import temporaryGlobals from "../temporary-globals/temporary-globals";
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

function onSubmit (event) {
  event.preventDefault();

  closeBottomBar();

  // SPAM PREVENTION
  if (event.currentTarget.querySelector('.js-validate-not-robot').value !== '') {
    return;
  }

  let emailInputElement = event.currentTarget.querySelector(temporaryGlobals.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR);
  let email = emailInputElement.value;

  // MAILCHIMP integration
  let {spamPreventionKey, formAction} = temporaryGlobals.mailchimpConfig;
  if (spamPreventionKey && formAction) {
    sendEmailToMailChimp({event, email, spamPreventionKey, formAction});
  } else {
    temporaryGlobals.onSubmit({event, email});
  }
}

function onClickModalBackdrop (event) {
  if (!event.target.closest(temporaryGlobals.SELECTORS.MODAL_FORM_ELEM_SELECTOR)) {
    closeModal();
  }
}



