import {tigerlily} from "../persistent-globals/persistent-globals";
import temporaryGlobals from "../temporary-globals/temporary-globals";
import modalMeetsTriggerRequirements from "./modal-requirements/meets-trigger-requirements";
import updateDebugNotice from "../debug-notice/update-debug-notice";

export default function watchTriggerData () {
  tigerlily.on("*", function ({prop, path, oldValue, value}) {
    let [modalMeetsRequirements, modalRequirements, modalActualValues] = modalMeetsTriggerRequirements();

    if (temporaryGlobals.showDebugNotice) {
      updateDebugNotice({modalRequirements, modalActualValues, modalMeetsRequirements});
    }

    if (modalMeetsRequirements) {
      temporaryGlobals.isModalOpenable = true;
    }
  });
}