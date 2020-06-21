  modalElem.addEventListener("click", event => onClickModalBackdrop({event, modalElem, shouldCloseOnOverlayClick}));
  modalElemForm.addEventListener("submit", event => onSubmit({event, modalElem}));
  modalElemCloseButton.addEventListener('click', () => closeModal({modalElem}));
  document.addEventListener("keydown", (event) => onKeyDown({event, modalElem}));

  
function onKeyDown ({event, modalElem}) {
  if (event.keyCode === 27 && document.body.classList.contains("email-signup-modal-open")) {
    closeModal({modalElem});
  }
}

function onSubmit ({event, modalElem}) {
  event.preventDefault();
  // console.log("onSubmit", event, modalElem);
}

function onClickModalBackdrop ({event, modalElem, shouldCloseOnOverlayClick}) {
  if (shouldCloseOnOverlayClick && !event.target.closest(MODAL_ELEM_FORM_CLASS)) {
    closeModal({modalElem});
  }
}