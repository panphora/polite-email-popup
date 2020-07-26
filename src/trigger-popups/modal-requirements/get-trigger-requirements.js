import {persistentGlobals} from "../../persistent-globals/persistent-globals";
import temporaryGlobals from "../../temporary-globals/temporary-globals";

const minimumsLookup = {
  "pageViews": {
    "content": {
      "notAggressive": 0,
      "aggressive": 0
    },
    "marketing": {
      "notAggressive": 2,
      "aggressive": 1
    }
  },
  "activeTimeOnPage": {
    "content": {
      "notAggressive": 6,
      "aggressive": 4
    },
    "marketing": {
      "notAggressive": 6,
      "aggressive": 4
    }
  },
  "activeTimeOnSite": {
    "content": {
      "notAggressive": 21,
      "aggressive": 14
    },
    "marketing": {
      "notAggressive": 21,
      "aggressive": 14
    }
  },
  "highestScrollPercentageAcrossAllPages": {
    "content": {
      "notAggressive": 35,
      "aggressive": 25
    },
    "marketing": {
      "notAggressive": 35,
      "aggressive": 25
    }
  }
};

export default function getTriggerRequirements () {
  let websiteType = temporaryGlobals.websiteType;
  let aggressive = temporaryGlobals.beSlightlyMoreAggressive ? "aggressive" : "notAggressive";

  const minimums = {
    pageViews: minimumsLookup["pageViews"][websiteType][aggressive],
    activeTimeOnPage: minimumsLookup["activeTimeOnPage"][websiteType][aggressive],
    activeTimeOnSite: minimumsLookup["activeTimeOnSite"][websiteType][aggressive],
    highestScrollPercentageAcrossAllPages: minimumsLookup["highestScrollPercentageAcrossAllPages"][websiteType][aggressive]
  };

  const actual = {
    pageViews: persistentGlobals["pageViews"],
    activeTimeOnPage: persistentGlobals["activeTimeOnPage"],
    activeTimeOnSite: persistentGlobals["activeTimeOnSite"],
    highestScrollPercentageAcrossAllPages: persistentGlobals["highestScrollPercentageAcrossAllPages"],
  }

  return [minimums, actual];
}



