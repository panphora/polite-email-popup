import temporaryGlobals from "../../temporary-globals/temporary-globals";
import { disableBodyScroll } from 'body-scroll-lock';

export default function openModal() {
  // ensure modal can't be opened again on the same page load
  // todo: make this update the debug notice
  // temporaryGlobals.isModalOpenable = false; 
  temporaryGlobals.activeElement = document.activeElement;

  // show the modal
  temporaryGlobals.MODAL_ELEM.classList.add("show");
  document.body.classList.add(temporaryGlobals.BODY_CLASS_MODAL_OPEN);
  
  // Focus the first element within the modal. Make sure the element is visible and doesnt have focus disabled (tabindex=-1);
  temporaryGlobals.MODAL_ELEM.querySelector(temporaryGlobals.FOCUSABLE_SELECTORS).focus();

  // Trap the tab focus by disable tabbing on all elements outside of your modal.
  // These elements need to be gotten at the time the modal is opened because they may have been added to the page dynamically
  const focusableElements = document.querySelectorAll(temporaryGlobals.FOCUSABLE_SELECTORS);
  const focusableElementsInModal = temporaryGlobals.MODAL_ELEM.querySelectorAll(temporaryGlobals.FOCUSABLE_SELECTORS);
  const focusableElementsInModalArray = Array.from(focusableElementsInModal);
  focusableElements.forEach(el => {
    if (!focusableElementsInModalArray.includes(el)) {
      el.setAttribute('tabindex', '-1');
    }
  });

  // Trap the screen reader focus as well with aria roles.
  temporaryGlobals.MODAL_ELEM.removeAttribute('aria-hidden');
  const topLevelElements = Array.from(document.body.children);
  topLevelElements.forEach(el => {
    if (el !== temporaryGlobals.MODAL_ELEM) {
      el.setAttribute('aria-hidden', 'true');
    }
  });

  disableBodyScroll(temporaryGlobals.MODAL_ELEM);
  console.log("open modal");
}