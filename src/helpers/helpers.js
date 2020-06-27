import {persistentGlobals} from "../persistent-globals/persistent-globals";

export function getDaysSinceModalClosed () {
  let modalClosedDate = persistentGlobals.modalClosedDate;
  if (!modalClosedDate) {
    return;
  }

  let days = Math.floor((Date.now() - modalClosedDate) / (1000 * 60 * 60 * 24));
  return {days};
}