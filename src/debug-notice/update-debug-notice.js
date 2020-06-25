import temporaryGlobals from "../temporary-globals/temporary-globals";
import getDebugNoticeTemplateString from "./get-debug-notice-template-string";

export default function updateDebugNotice ({requirements, actual, meetsRequirements}) {
  temporaryGlobals.DEBUG_NOTICE_ELEM.innerHTML = getDebugNoticeTemplateString({requirements, actual, meetsRequirements});
}