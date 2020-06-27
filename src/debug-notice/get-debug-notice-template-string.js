import temporaryGlobals from "../temporary-globals/temporary-globals";

export default function getDebugNoticeTemplateString ({modalRequirements, modalActualValues, modalMeetsRequirements, bottomBarRequirements, bottomBarActualValues, bottomBarMeetsRequirements}) {
  return `<div class="debug-email-forms">
  <div class="debug-email-forms__buttons">
    <button class="debug-email-forms__reset" type="button">Reset</button>
    <button class="debug-email-forms__bypass" type="button">Bypass</button>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Website type: </span>
    <span class="debug-email-forms__stat-value">${temporaryGlobals.websiteType.charAt(0).toUpperCase() + temporaryGlobals.websiteType.slice(1)} website</span>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Page views: </span>
    <span class="debug-email-forms__stat-value">${modalActualValues.pageViews}</span>
    <ul class="debug-email-forms__stat-requirements">
      <li class="debug-email-forms__stat-requirement">Modal requires: ${modalRequirements.pageViews}</li>
      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${bottomBarRequirements.pageViews}</li>
    </ul>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Highest scroll percentage: </span>
    <span class="debug-email-forms__stat-value">${modalActualValues.highestScrollPercentageAcrossAllPages}% </span>
    <ul class="debug-email-forms__stat-requirements">
      <li class="debug-email-forms__stat-requirement">Modal requires: ${modalRequirements.highestScrollPercentageAcrossAllPages}%</li>
      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${bottomBarRequirements.highestScrollPercentageAcrossAllPages}%</li>
    </ul>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Active time on site: </span>
    <span class="debug-email-forms__stat-value">${modalActualValues.activeTimeOnSite}s </span>
    <ul class="debug-email-forms__stat-requirements">
      <li class="debug-email-forms__stat-requirement">Modal requires: ${modalRequirements.activeTimeOnSite}s</li>
      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${bottomBarRequirements.activeTimeOnSite}s</li>
    </ul>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Active time on page: </span>
    <span class="debug-email-forms__stat-value">${modalActualValues.activeTimeOnPage}s </span>
    <ul class="debug-email-forms__stat-requirements">
      <li class="debug-email-forms__stat-requirement">Modal requires: ${modalRequirements.activeTimeOnPage}s</li>
      <li class="debug-email-forms__stat-requirement">Bottom bar requires: ${bottomBarRequirements.activeTimeOnPage}s</li>
    </ul>
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
</div>`;
}