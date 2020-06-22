import getTriggerOptions from "./get-trigger-options";

export default function initModalDataWatchers ({websiteType, beSlightlyMoreAggressive}) {
  MiniEvents.listen("pageData", function (dataEvent) {
    let triggerOptions = getTriggerOptions({websiteType, beSlightlyMoreAggressive});

    let shouldShowModal = Object.keys(triggerOptions).every(triggerOptionKey => {
      let minValue = triggerOptions[triggerOptionKey];
      let actualValue = globals[triggerOptionKey];

      return actualValue >= minValue;
    });;

    if (shouldShowModal) {
      globals.setModalAsOpenable();
    }
  });
}