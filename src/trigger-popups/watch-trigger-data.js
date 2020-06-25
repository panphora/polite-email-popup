import {tigerlily} from "../persistent-globals/persistent-globals";
import temporaryGlobals from "../temporary-globals/temporary-globals";
import meetsTriggerRequirements from "./meets-trigger-requirements";
import updateDebugNotice from "../debug-notice/update-debug-notice";

export default function watchTriggerData () {
  tigerlily.on("*", function ({prop, path, oldValue, value}) {
    let [meetsRequirements, requirements, actual] = meetsTriggerRequirements();

    if (temporaryGlobals.showDebugNotice) {
      updateDebugNotice({requirements, actual, meetsRequirements});
    }

    console.log({meetsRequirements, modalIsOpenable: temporaryGlobals.isModalOpenable});
    if (meetsRequirements) {
      temporaryGlobals.isModalOpenable = true;
    }
  });
}