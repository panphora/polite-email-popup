import {persistentGlobals} from "../persistent-globals/persistent-globals";

export function getDaysSinceModalClosed () {
  return getDaysSinceClosed("modal");
}

export function getDaysSinceBottomBarClosed () {
  return getDaysSinceClosed("bottom-bar");
}

function getDaysSinceClosed (popupType) {
  let closedDate = popupType === "modal" ? persistentGlobals.modalClosedDate : persistentGlobals.bottomBarClosedDate;

  if (!closedDate) {
    return;
  }

  let oneDay = 1000 * 60 * 60 * 24;
  let days = Math.floor((Date.now() - closedDate) / oneDay);

  return {days};
}
