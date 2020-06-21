import MiniEvents from "./mini-events";

const validDataEventTypes = ["pageViews", "highestScrollPercentage", "activeTimeOnSite", "activeTimeOnPage"];
const eventValueUnitLookup = {
  pageViews: "",
  highestScrollPercentage: "%",
  activeTimeOnSite: "s",
  activeTimeOnPage: "s"
};



export default function initDebugNotice () {
  MiniEvents.listen("pageData", function (dataEvent) {
    let eventName = validDataEventTypes.find(name => dataEvent.hasOwnProperty(name));
    let eventValue = dataEvent[eventName] + eventValueUnitLookup[eventName];

    let eventDebugElement = document.querySelector(`.debug-emails-forms [data-event-name='${eventName}']`);
    eventDebugElement.innerText = eventValue;
  });

  MiniEvents.listen("MODAL_IS_OPENABLE", function (isOpenable) {
    let eventDebugElement = document.querySelector(`.debug-emails-forms [data-event-name='modalIsOpenable']`);
    eventDebugElement.innerText = isOpenable ? "true" : "false";
  });

  // reset button
  document.querySelector(".debug-emails-forms__reset").addEventListener("click", e => {
    window.localStorage.clear(); 
    window.location.reload();
  });
}