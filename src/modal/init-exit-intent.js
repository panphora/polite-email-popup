import temporaryGlobals from "../temporary-globals/temporary-globals";
import onExitIntent from "../helpers/on-exit-intent";
import openModal from "./modal-actions/open-modal";


// adds exit intent event listener
export default function initExitIntent () {
  onExitIntent(() => {
    if (temporaryGlobals.isModalOpenable) {
      openModal();
    }
  });
}