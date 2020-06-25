import temporaryGlobals from "../temporary-globals/temporary-globals";

export default function getDebugNoticeTemplateString ({modalRequirements, modalActualValues, modalMeetsRequirements}) {
  return `<div class="debug-emails-forms">
    <div>
      <b class="label">Website type: </b>
      <b>${temporaryGlobals.websiteType.charAt(0).toUpperCase() + temporaryGlobals.websiteType.slice(1)} website</b>
    </div>
    <div>
      <b class="label">Page views: </b>
      <b>${modalActualValues.pageViews} </b>
      <span class="light-text">(requires: ${modalRequirements.pageViews}) </span>
    </div>
    <div>
      <b class="label">Highest scroll percentage: </b>
      <b>${modalActualValues.highestScrollPercentageAcrossAllPages}% </b>
      <span class="light-text">(requires: ${modalRequirements.highestScrollPercentageAcrossAllPages}%) </span>
    </div>
    <div>
      <b class="label">Active time on site: </b>
      <b>${modalActualValues.activeTimeOnSite}s </b>
      <span class="light-text">(requires: ${modalRequirements.activeTimeOnSite}s) </span>
    </div>
    <div>
      <b class="label">Active time on page: </b>
      <b>${modalActualValues.activeTimeOnPage}s </b>
      <span class="light-text">(requires: ${modalRequirements.activeTimeOnPage}s) </span>
    </div>
    <div>
      <b class="label">Saw modal: </b>
      <span>never</span>
    </div>
    <div>
      <b class="label">Closed modal: </b>
      <span>never</span>
    </div>
    <div>
      <b class="label">Closed bottom bar: </b>
      <span>never</span>
    </div>
    <div>
      <b class="label">Modal is openable: </b>
      ${modalMeetsRequirements ? '<b class="green">Yes</b>' : '<b class="red">No</b>'}
    </div>
    <button class="debug-emails-forms__reset" type="button">Reset</button>
  </div>`;
}