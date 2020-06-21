export default function closeModal({modalElem}) {
  document.body.classList.remove("email-signup-modal-open");

  // keep track of when the modal was closed
  setItemLocalStorage("modalClosedDate", Date.now());

  // hide the modal
  modalElem.style.display = 'none';

  // Untrap the tab focus by removing tabindex=-1. You should restore previous values if an element had them.    
  const focusableElements = document.querySelectorAll(FOCUSABLE_SELECTORS);
  focusableElements.forEach(el => el.removeAttribute('tabindex'));
  
  // Untrap screen reader focus
  const topLevelElements = document.querySelectorAll("body > [aria-hidden]");
  topLevelElements.forEach(el => {
    el.removeAttribute('aria-hidden');
  });
  modalElem.setAttribute('aria-hidden', 'true');
  
  // restore focus to the triggering element
  if (activeElementOfDocument) {
    activeElementOfDocument.focus();
  }

  bodyScrollLock.enableBodyScroll(modalElem);
}