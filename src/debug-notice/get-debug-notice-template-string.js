import temporaryGlobals from "../temporary-globals/temporary-globals";

export default function getDebugNoticeTemplateString ({modalRequirements, modalActualValues, modalMeetsRequirements, bottomBarRequirements, bottomBarActualValues, bottomBarMeetsRequirements}) {
  console.log({bottomBarRequirements});
  return `<div class="debug-email-forms">
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Website type: </span>
    <span class="debug-email-forms__stat-value">${temporaryGlobals.websiteType.charAt(0).toUpperCase() + temporaryGlobals.websiteType.slice(1)} website</span>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Page views: </span>
    <span class="debug-email-forms__stat-value">${modalActualValues.pageViews}</span>
    <div>
      <div class="debug-email-forms__stat-requirement">(modal requires: ${modalRequirements.pageViews})</div>
      <div class="debug-email-forms__stat-requirement">(bottom bar requires: ${bottomBarRequirements.pageViews})</div>
    </div>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>
    <span class="debug-email-forms__stat-value">${modalActualValues.highestScrollPercentageAcrossAllPages}% </span>
    <span class="debug-email-forms__stat-requirement">(requires: ${modalRequirements.highestScrollPercentageAcrossAllPages}%) </span>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Active time on site: </span>
    <span class="debug-email-forms__stat-value">${modalActualValues.activeTimeOnSite}s </span>
    <span class="debug-email-forms__stat-requirement">(requires: ${modalRequirements.activeTimeOnSite}s) </span>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Active time on page: </span>
    <span class="debug-email-forms__stat-value">${modalActualValues.activeTimeOnPage}s </span>
    <span class="debug-email-forms__stat-requirement">(requires: ${modalRequirements.activeTimeOnPage}s) </span>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Saw modal: </span>
    <span class="debug-email-forms__stat-value">never</span>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Closed modal: </span>
    <span class="debug-email-forms__stat-value">never</span>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Closed bottom bar: </span>
    <span class="debug-email-forms__stat-value">never</span>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Modal is openable: </span>
    ${modalMeetsRequirements ? '<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>' : '<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>'}
  </div>
  <button class="debug-email-forms__reset" type="button">Reset</button>
</div>`;
}