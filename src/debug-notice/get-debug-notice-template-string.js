export default function getDebugNoticeTemplateString ({requirements, actual, meetsRequirements}) {
  return `<div class="debug-emails-forms">
    <div>
      <b>Page views: </b>
      <span>${actual.pageViews} </span>
      <span>(requires: ${requirements.pageViews}) </span>
    </div>
    <div>
      <b>Highest scroll percentage: </b>
      <span>${actual.highestScrollPercentageAcrossAllPages}% </span>
      <span>(requires: ${requirements.highestScrollPercentageAcrossAllPages}%) </span>
    </div>
    <div>
      <b>Active time on site: </b>
      <span>${actual.activeTimeOnSite}s </span>
      <span>(requires: ${requirements.activeTimeOnSite}s) </span>
    </div>
    <div>
      <b>Active time on page: </b>
      <span>${actual.activeTimeOnPage}s </span>
      <span>(${requirements.activeTimeOnPage}s) </span>
    </div>
    <div>
      <b>Saw modal: </b>
      <span>never</span>
    </div>
    <div>
      <b>Closed modal: </b>
      <span>never</span>
    </div>
    <div>
      <b>Closed bottom bar: </b>
      <span>never</span>
    </div>
    <div>
      <b>Modal is openable: </b>
      <span>${meetsRequirements}</span>
    </div>
    <button class="debug-emails-forms__reset" type="button">Reset</button>
  </div>`;
}