import getTriggerRequirements from "./get-trigger-requirements";
import {getDaysSinceBottomBarClosed, getDaysSinceModalClosed} from "../../helpers/helpers";

export default function meetsTriggerRequirements () {
  let [requirements, actual] = getTriggerRequirements();

  let meetsRequirements = Object.keys(requirements).every(key => {
    return actual[key] >= requirements[key];
  });

  // must wait a few days before opening either the modal or bottom bar again
  let daysSinceBottomBarClosed = getDaysSinceBottomBarClosed();
  if (daysSinceBottomBarClosed) {
    meetsRequirements = meetsRequirements && daysSinceBottomBarClosed.days >= 2;
  }

  // must wait a few days before opening either the modal or bottom bar again
  let daysSinceModalClosed = getDaysSinceModalClosed();
  if (daysSinceModalClosed) {
    meetsRequirements = meetsRequirements && daysSinceModalClosed.days >= 2;
  }

  return [meetsRequirements, requirements, actual];
}



