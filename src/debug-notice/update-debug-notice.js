import temporaryGlobals from "../temporary-globals/temporary-globals";
import getDebugNoticeTemplateString from "./get-debug-notice-template-string";

export default function updateDebugNotice ({modalRequirements, modalActualValues, modalMeetsRequirements, bottomBarRequirements, bottomBarActualValues, bottomBarMeetsRequirements}) {
  temporaryGlobals.DEBUG_NOTICE_ELEM.innerHTML = getDebugNoticeTemplateString({modalRequirements, modalActualValues, modalMeetsRequirements, bottomBarRequirements, bottomBarActualValues, bottomBarMeetsRequirements});
}