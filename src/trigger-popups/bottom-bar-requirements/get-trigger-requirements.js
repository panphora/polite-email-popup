import {persistentGlobals} from "../../persistent-globals/persistent-globals";
import temporaryGlobals from "../../temporary-globals/temporary-globals";

const minimumsLookup = {
  "pageViews": {
    "content": {
      "notAggressive": 0,
      "aggressive": 0
    },
    "marketing": {
      "notAggressive": 0,
      "aggressive": 0
    }
  },
  "activeTimeOnPage": {
    "content": {
      "notAggressive": 0,
      "aggressive": 0
    },
    "marketing": {
      "notAggressive": 0,
      "aggressive": 0
    }
  },
  "activeTimeOnSite": {
    "content": {
      "notAggressive": 10,
      "aggressive": 7
    },
    "marketing": {
      "notAggressive": 10,
      "aggressive": 7
    }
  },
  "highestScrollPercentageAcrossAllPages": {
    "content": {
      "notAggressive": 25,
      "aggressive": 20
    },
    "marketing": {
      "notAggressive": 25,
      "aggressive": 20
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



