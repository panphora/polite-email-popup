import initDebugNoticeEventListeners from "./init-debug-notice-event-listeners";
// keep track of data and modify debug notice when they change

export default function initDebugNotice () {
  initDebugNoticeEventListeners();
}

/*
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
*/