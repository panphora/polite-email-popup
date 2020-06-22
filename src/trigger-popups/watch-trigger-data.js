import {tigerlily} from "../persistent-globals/persistent-globals";
import meetsTriggerRequirements from "./meets-trigger-requirements";

export default function watchTriggerData () {
  tigerlily.on("*", function ({prop, path, oldValue, value}) {
    console.log("*", {prop, path, oldValue, value});
    console.log({meetsTriggerRequirements: meetsTriggerRequirements()});
  });
}