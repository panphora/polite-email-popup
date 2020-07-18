import getTriggerRequirements from "./get-trigger-requirements";
import {getDaysSinceModalClosed} from "../../helpers/helpers";
import temporaryGlobals from "../../temporary-globals/temporary-globals";

export default function meetsTriggerRequirements () {
  let [requirements, actual] = getTriggerRequirements();

  // compare all the requirements to the actual values
  let meetsRequirements = Object.keys(requirements).every(key => {
    return actual[key] >= requirements[key];
  });

  // must wait a few days before opening the modal again
  let daysSinceModalClosed = getDaysSinceModalClosed();
  if (daysSinceModalClosed) {
    meetsRequirements = meetsRequirements && daysSinceModalClosed.days >= 2;
  }

  // can't open the modal twice
  if (temporaryGlobals.isModalOpen) {
    meetsRequirements = false;
  }

  return [meetsRequirements, requirements, actual];
}



