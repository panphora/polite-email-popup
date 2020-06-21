export default function openModal({modalElem}) {
  activeElementOfDocument = document.activeElementOfDocument;

  // show the modal
  modalElem.style.display = 'flex';
  setTimeout(() => {
    document.body.classList.add("email-signup-modal-open");
  }, 100);
  
  // Focus the first element within the modal. Make sure the element is visible and doesnt have focus disabled (tabindex=-1);
  modalElem.querySelector(FOCUSABLE_SELECTORS).focus();

  // Trap the tab focus by disable tabbing on all elements outside of your modal.  Because the modal is a sibling of main, this is easier. Make sure to check if the element is visible, or already has a tabindex so you can restore it when you untrap.    
  const focusableElements = document.querySelectorAll(FOCUSABLE_SELECTORS);
  const focusableElementsInModal = modalElem.querySelectorAll(FOCUSABLE_SELECTORS);
  const focusableElementsInModalArray = Array.from(focusableElementsInModal);
  focusableElements.forEach(el => {
    if (!focusableElementsInModalArray.includes(el)) {
      el.setAttribute('tabindex', '-1');
    }
  });

  // Trap the screen reader focus as well with aria roles. This is much easier as our main and modal elements are siblings, otherwise you'd have to set aria-hidden on every screen reader focusable element not in the modal.
  modalElem.removeAttribute('aria-hidden');
  const topLevelElements = Array.from(document.body.children);
  topLevelElements.forEach(el => {
    if (el !== modalElem) {
      el.setAttribute('aria-hidden', 'true');
    }
  });

  bodyScrollLock.disableBodyScroll(modalElem);
}