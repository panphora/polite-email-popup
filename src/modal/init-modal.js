import globals from "../helpers/globals";
import getTemplateString from "./get-template-string";
import initModalEventListeners from "./init-modal-event-listeners";

export default function initModal ({onSubmit, imageSrc, headingText, descriptionText, mainButtonText}) {
  // Insert modal HTML
  let modalTemplateString = getTemplateString({imageSrc, headingText, descriptionText, mainButtonText});
  document.body.insertAdjacentHTML("beforeend", modalTemplateString);

  // get modal elements
  globals.modalElem = document.querySelector(globals.MODAL_ELEM_CLASS); // "$('.some-class')"
  globals.modalElemForm = document.querySelector(globals.MODAL_ELEM_FORM_CLASS);
  globals.modalElemCloseButton = document.querySelector(globals.MODAL_ELEM_CLOSE_BUTTON_CLASS);

  // save onSubmit callback
  globals.onSubmit = onSubmit;

  initModalEventListeners();
}