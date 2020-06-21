import { enableBodyScroll } from 'body-scroll-lock';
import globals from "../helpers/globals";

export default function closeModal() {
  document.body.classList.remove(globals.BODY_CLASS_MODAL_OPEN);

  // TODO: keep track of when the modal was closed
  // setItemLocalStorage("modalClosedDate", Date.now());

  // hide the modal
  globals.modalElem.style.display = 'none';

  // Untrap the tab focus by removing tabindex=-1. You should restore previous values if an element had them.    
  const focusableElements = document.querySelectorAll(globals.FOCUSABLE_SELECTORS);
  focusableElements.forEach(el => el.removeAttribute('tabindex'));
  
  // Untrap screen reader focus
  const topLevelElements = document.querySelectorAll("body > [aria-hidden]");
  topLevelElements.forEach(el => el.removeAttribute('aria-hidden'));
  globals.modalElem.setAttribute('aria-hidden', 'true');
  
  // restore focus to the triggering element
  let activeElement = globals.getActiveElement();
  if (activeElement) {
    activeElement.focus();
  }

  enableBodyScroll(globals.modalElem);
}