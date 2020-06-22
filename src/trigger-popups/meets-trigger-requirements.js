import {persistentGlobals} from "../persistent-globals/persistent-globals";
import temporaryGlobals from "../temporary-globals/temporary-globals";

const minimumsLookup = {
  "pageViews": {
    "content": {
      "notAggressive": 0,
      "aggressive": 0
    },
    "marketing": {
      "notAggressive": 3,
      "aggressive": 2
    }
  },
  "activeTimeOnPage": {
    "content": {
      "notAggressive": 8,
      "aggressive": 6
    },
    "marketing": {
      "notAggressive": 8,
      "aggressive": 6
    }
  },
  "activeTimeOnSite": {
    "content": {
      "notAggressive": 30,
      "aggressive": 20
    },
    "marketing": {
      "notAggressive": 30,
      "aggressive": 20
    }
  },
  "highestScrollPercentageAcrossAllPages": {
    "content": {
      "notAggressive": 35,
      "aggressive": 25
    },
    "marketing": {
      "notAggressive": 0,
      "aggressive": 0
    }
  }
}

export default function meetsTriggerRequirements () {
  let websiteType = temporaryGlobals.websiteType;
  let aggressive = temporaryGlobals.beSlightlyMoreAggressive ? "aggressive" : "notAggressive";

  const minimums = {
    pageViews: minimumsLookup["pageViews"][websiteType][aggressive],
    activeTimeOnPage: minimumsLookup["activeTimeOnPage"][websiteType][aggressive],
    activeTimeOnSite: minimumsLookup["activeTimeOnSite"][websiteType][aggressive],
    highestScrollPercentageAcrossAllPages: minimumsLookup["highestScrollPercentageAcrossAllPages"][websiteType][aggressive]
  }

  return Object.keys(minimums).every(key => {
    return persistentGlobals[key] >= minimums[key];
  });
}





