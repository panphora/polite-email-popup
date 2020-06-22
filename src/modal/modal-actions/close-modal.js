import { enableBodyScroll } from 'body-scroll-lock';
import temporaryGlobals from "../../temporary-globals/temporary-globals";

export default function closeModal() {
  document.body.classList.remove(temporaryGlobals.BODY_CLASS_MODAL_OPEN);

  // TODO: keep track of when the modal was closed
  // setItemLocalStorage("modalClosedDate", Date.now());

  // hide the modal
  temporaryGlobals.MODAL_ELEM.style.display = 'none';

  // Untrap the tab focus by removing tabindex=-1. You should restore previous values if an element had them.    
  const focusableElements = document.querySelectorAll(temporaryGlobals.FOCUSABLE_SELECTORS);
  focusableElements.forEach(el => el.removeAttribute('tabindex'));
  
  // Untrap screen reader focus
  const topLevelElements = document.querySelectorAll("body > [aria-hidden]");
  topLevelElements.forEach(el => el.removeAttribute('aria-hidden'));
  temporaryGlobals.MODAL_ELEM.setAttribute('aria-hidden', 'true');
  
  // restore focus to the triggering element
  if (temporaryGlobals.activeElement) {
    temporaryGlobals.activeElement.focus();
  }

  enableBodyScroll(temporaryGlobals.MODAL_ELEM);
}