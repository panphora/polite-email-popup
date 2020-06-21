import globals from "../helpers/globals";
import { disableBodyScroll } from 'body-scroll-lock';

export default function openModal() {
  globals.setActiveElement(document.activeElement);

  // show the modal
  globals.modalElem.style.display = 'flex';
  document.body.classList.add(globals.BODY_CLASS_MODAL_OPEN);
  
  // Focus the first element within the modal. Make sure the element is visible and doesnt have focus disabled (tabindex=-1);
  globals.modalElem.querySelector(globals.FOCUSABLE_SELECTORS).focus();

  // Trap the tab focus by disable tabbing on all elements outside of your modal.
  // These elements need to be gotten at the time the modal is opened because they may have been added to the page dynamically
  const focusableElements = document.querySelectorAll(globals.FOCUSABLE_SELECTORS);
  const focusableElementsInModal = globals.modalElem.querySelectorAll(globals.FOCUSABLE_SELECTORS);
  const focusableElementsInModalArray = Array.from(focusableElementsInModal);
  focusableElements.forEach(el => {
    if (!focusableElementsInModalArray.includes(el)) {
      el.setAttribute('tabindex', '-1');
    }
  });

  // Trap the screen reader focus as well with aria roles.
  globals.modalElem.removeAttribute('aria-hidden');
  const topLevelElements = Array.from(document.body.children);
  topLevelElements.forEach(el => {
    if (el !== globals.modalElem) {
      el.setAttribute('aria-hidden', 'true');
    }
  });

  disableBodyScroll(globals.modalElem);
}