import getTriggerRequirements from "./get-trigger-requirements";
import {getDaysSinceBottomBarClosed} from "../../helpers/helpers";

export default function meetsTriggerRequirements () {
  let [requirements, actual] = getTriggerRequirements();

  let meetsRequirements = Object.keys(requirements).every(key => {
    return actual[key] >= requirements[key];
  });

  let daysSinceBottomBarClosed = getDaysSinceBottomBarClosed();
  if (daysSinceBottomBarClosed) {
    meetsRequirements = meetsRequirements && daysSinceBottomBarClosed.days >= 2;
  }

  return [meetsRequirements, requirements, actual];
}



