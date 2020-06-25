import {tigerlily} from "../persistent-globals/persistent-globals";
import temporaryGlobals from "../temporary-globals/temporary-globals";
import updateDebugNotice from "../debug-notice/update-debug-notice";
import modalMeetsTriggerRequirements from "./modal-requirements/meets-trigger-requirements";
import bottomBarMeetsTriggerRequirements from "./bottom-bar-requirements/meets-trigger-requirements";

export default function watchTriggerData () {
  tigerlily.on("*", function ({prop, path, oldValue, value}) {

    // TRIGGER REQUIREMENTS
    let [modalMeetsRequirements, modalRequirements, modalActualValues] = modalMeetsTriggerRequirements();
    let [bottomBarMeetsRequirements, bottomBarRequirements, bottomBarActualValues] = bottomBarMeetsTriggerRequirements();

    if (modalMeetsRequirements) {
      temporaryGlobals.isModalOpenable = true;
    }

    if (bottomBarMeetsRequirements) {
      console.log("OPEN BOTTOM BAR");
    }

    if (temporaryGlobals.showDebugNotice) {
      updateDebugNotice({modalRequirements, modalActualValues, modalMeetsRequirements, bottomBarRequirements, bottomBarActualValues, bottomBarMeetsRequirements});
    }

  });
}