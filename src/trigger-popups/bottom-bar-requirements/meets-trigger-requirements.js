import getTriggerRequirements from "./get-trigger-requirements";

export default function meetsTriggerRequirements () {
  let [requirements, actual] = getTriggerRequirements();

  let meetsRequirements = Object.keys(requirements).every(key => {
    return actual[key] >= requirements[key];
  });

  return [meetsRequirements, requirements, actual];
}



