import MiniEvents from "./mini-events";

const validDataEventTypes = ["pageViews", "highestScrollPercentage", "activeTimeOnSite", "activeTimeOnPage"];
const eventValueUnitLookup = {
  pageViews: "",
  highestScrollPercentage: "%",
  activeTimeOnSite: "s",
  activeTimeOnPage: "s"
};

const debugNoticeHtml = `<div class="debug-emails-forms">
  <div>
    <b>Page views: </b><span data-event-name="pageViews">0</span>
  </div>
  <div>
    <b>Scroll percentage: </b><span data-event-name="highestScrollPercentage">0%</span>
  </div>
  <div>
    <b>Time on site: </b><span data-event-name="activeTimeOnSite">0s</span>
  </div>
  <div>
    <b>Time on page: </b><span data-event-name="activeTimeOnPage">0s</span>
  </div>
  <div>
    <b>Saw modal: </b><span>never</span>
  </div>
  <div>
    <b>Closed modal: </b><span>never</span>
  </div>
  <div>
    <b>Closed bottom bar: </b><span>never</span>
  </div>
  <div>
    <b>Modal is openable: </b><span data-event-name="modalIsOpenable">false</span>
  </div>
  <button class="debug-emails-forms__reset" type="button">Reset</button>
</div>`;

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

  document.body.insertAdjacentHTML("beforeend", debugNoticeHtml);

  // reset button
  document.querySelector(".debug-emails-forms__reset").addEventListener("click", e => {
    window.localStorage.clear(); 
    window.location.reload();
  });
}