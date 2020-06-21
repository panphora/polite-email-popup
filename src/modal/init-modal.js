import {persistentGlobals} from "../helpers/persistent-globals";
import initModalEventListeners from "./init-modal-event-listeners";

export default function initModal ({onSubmit, imageSrc, headingText, descriptionText, mainButtonText}) {
  // Get modal elements
  globals.modalElem = document.querySelector(globals.MODAL_ELEM_CLASS); // "$('.some-class')"
  globals.modalElemForm = document.querySelector(globals.MODAL_ELEM_FORM_CLASS);
  globals.modalElemCloseButton = document.querySelector(globals.MODAL_ELEM_CLOSE_BUTTON_CLASS);

  // save onSubmit callback
  globals.onSubmit = onSubmit;

  initModalEventListeners();
}