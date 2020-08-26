import { enableBodyScroll } from 'body-scroll-lock';
import temporaryGlobals from "../../temporary-globals/temporary-globals";
import {persistentGlobals} from "../../persistent-globals/persistent-globals";
import {whenTriggerDataChanges} from "../../trigger-popups/watch-trigger-data";
import closeBottomBar from "../../bottom-bar/bottom-bar-actions/close-bottom-bar";

export default function closeModal() {
  // close bottom bar whenever the modal is closed, but don't overwrite its previous close date (if any)
  closeBottomBar({dontRecordCloseDate: true});

  // store date it was clsoed
  persistentGlobals.modalClosedDate = Date.now();

  // hide the modal
  temporaryGlobals.MODAL_ELEM.classList.remove("show");
  // remove body class
  document.body.classList.remove(temporaryGlobals.BODY_CLASS_MODAL_OPEN);

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

  temporaryGlobals.isModalOpen = false;
  // manually recompute `isModalOpenable` because temporary globals don't trigger this automatically
  whenTriggerDataChanges();
}