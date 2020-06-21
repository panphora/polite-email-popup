import globals from "../helpers/globals";
import closeModal from "./close-modal";

export default function initModalEventListeners () {
  globals.modalElem.addEventListener("click", event => onClickModalBackdrop({event}));
  globals.modalElemForm.addEventListener("submit", event => onSubmit({event}));
  globals.modalElemCloseButton.addEventListener('click', () => closeModal());
  document.addEventListener("keydown", (event) => onKeyDown({event}));
}

function onKeyDown ({event}) {
  if (event.keyCode === 27 && document.body.classList.contains(globals.BODY_CLASS_MODAL_OPEN)) {
    closeModal();
  }
}

function onSubmit ({event}) {
  event.preventDefault();

  // trigger onSubmit callback
  let emailInputElement = event.currentTarget.querySelector(".email-signup-form-input");
  let email = emailInputElement.value;
  globals.onSubmit({event, email});

  closeModal();
}

function onClickModalBackdrop ({event}) {
  if (!event.target.closest(globals.MODAL_ELEM_FORM_CLASS)) {
    closeModal();
  }
}

