import getTriggerRequirements from "./get-trigger-requirements";
import {getDaysSinceModalClosed} from "../../helpers/helpers";

export default function meetsTriggerRequirements () {
  let [requirements, actual] = getTriggerRequirements();

  let meetsRequirements = Object.keys(requirements).every(key => {
    return actual[key] >= requirements[key];
  });

  let daysSinceModalClosed = getDaysSinceModalClosed();
  if (daysSinceModalClosed) {
    meetsRequirements = meetsRequirements && daysSinceModalClosed.days >= 2;
  }

  return [meetsRequirements, requirements, actual];
}



