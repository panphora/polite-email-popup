import {persistentGlobals} from "../helpers/persistent-globals";
import initModalEventListeners from "./init-modal-event-listeners";

export default function initModal ({onSubmit, imageSrc, headingText, descriptionText, mainButtonText}) {
  initModalEventListeners();
}