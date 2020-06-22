import {tigerlily} from "../persistent-globals/persistent-globals";
import meetsTriggerRequirements from "./meets-trigger-requirements";

export default function watchTriggerData () {
  tigerlily.on("*", function ({prop, path, oldValue, value}) {
    let [meetsRequirements, requirements, actual] = meetsTriggerRequirements();
    console.log({meetsRequirements, requirements, actual});
  });
}