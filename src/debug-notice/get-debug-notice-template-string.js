import temporaryGlobals from "../temporary-globals/temporary-globals";
import {getDaysSinceModalClosed, getDaysSinceBottomBarClosed} from "../helpers/helpers";

export default function getDebugNoticeTemplateString ({modalRequirements, modalActualValues, modalMeetsRequirements, bottomBarRequirements, bottomBarActualValues, bottomBarMeetsRequirements}) {
  let daysSinceModalClosed = getDaysSinceModalClosed();
  let daysSinceBottomBarClosed = getDaysSinceBottomBarClosed();

  return `<div class="debug-email-forms">
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Website type: </span>
    <span class="debug-email-forms__stat-value">${temporaryGlobals.websiteType.charAt(0).toUpperCase() + temporaryGlobals.websiteType.slice(1)} website</span>
  </div>
  <div class="debug-email-forms__stat debug-email-forms__stat--buttons">
    <button class="debug-email-forms__reset" type="button">Reset</button>
    <button class="debug-email-forms__bypass" type="button">Bypass requirements</button>
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
    <span class="debug-email-forms__stat-label">Modal was closed: </span>
    <span class="debug-email-forms__stat-value">${daysSinceModalClosed ? (daysSinceModalClosed.days + ` day${daysSinceModalClosed.days !== 1 ? "s" : ""} ago`) : "never"}</span>
    <ul class="debug-email-forms__stat-requirements">
      <li class="debug-email-forms__stat-requirement">Requires: never or 2 days ago</li>
    </ul>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Bottom bar was closed: </span>
    <span class="debug-email-forms__stat-value">${daysSinceBottomBarClosed ? (daysSinceBottomBarClosed.days + ` day${daysSinceBottomBarClosed.days !== 1 ? "s" : ""} ago`) : "never"}</span>
    <ul class="debug-email-forms__stat-requirements">
      <li class="debug-email-forms__stat-requirement">Requires: never or 2 days ago</li>
    </ul>
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Modal is openable: </span>
    ${modalMeetsRequirements ? '<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>' : '<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>'}
  </div>
  <div class="debug-email-forms__stat">
    <span class="debug-email-forms__stat-label">Bottom bar is open: </span>
    ${bottomBarMeetsRequirements ? '<span class="debug-email-forms__stat-value debug-email-forms__stat-value--success">Yes</span>' : '<span class="debug-email-forms__stat-value debug-email-forms__stat-value--fail">No</span>'}
  </div>
</div>`;
}