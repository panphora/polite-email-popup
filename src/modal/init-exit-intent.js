import {persistentGlobals} from "../persistent-globals/persistent-globals";
import onExitIntent from "../helpers/on-exit-intent";
import openModal from "./modal-actions/open-modal";

export default function initExitIntent () {
  onExitIntent(() => {
    if (persistentGlobals.isModalOpenable) {
      openModal();
    }
  });
}