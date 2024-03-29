import {tigerlily} from "../persistent-globals/persistent-globals";
import temporaryGlobals from "../temporary-globals/temporary-globals";
import updateDebugNotice from "../debug-notice/update-debug-notice";
import modalMeetsTriggerRequirements from "./modal-requirements/meets-trigger-requirements";
import bottomBarMeetsTriggerRequirements from "./bottom-bar-requirements/meets-trigger-requirements";
import openBottomBar from "../bottom-bar/bottom-bar-actions/open-bottom-bar";

export function watchTriggerData () {
  tigerlily.on("*", whenTriggerDataChanges);
}

export function whenTriggerDataChanges () {

  // TRIGGER REQUIREMENTS
  let [modalMeetsRequirements, modalRequirements, modalActualValues] = modalMeetsTriggerRequirements();
  let [bottomBarMeetsRequirements, bottomBarRequirements, bottomBarActualValues] = bottomBarMeetsTriggerRequirements();

  if (modalMeetsRequirements) {
    temporaryGlobals.isModalOpenable = true;
  } else {
    temporaryGlobals.isModalOpenable = false;
  }

  if (bottomBarMeetsRequirements) {
    openBottomBar();
  }

  if (temporaryGlobals.showDebugNotice) {
    updateDebugNotice({modalRequirements, modalActualValues, modalMeetsRequirements, bottomBarRequirements, bottomBarActualValues, bottomBarMeetsRequirements});
  }

}