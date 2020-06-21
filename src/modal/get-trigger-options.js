import globals from "../helpers/globals";

export default function ({websiteType, beSlightlyMoreAggressive}) {
  if (websiteType === globals.WEBSITE_TYPES.CONTENT) {
    if (!beSlightlyMoreAggressive) {
      // not aggressive
      return {
        ACTIVE_TIME_ON_PAGE: 8,
        ACTIVE_TIME_ON_SITE: 30,
        HIGHEST_SCROLL_PERCENTAGE: 35
      };
    } else {
      // somewhat aggressive
      return {
        ACTIVE_TIME_ON_PAGE: 6,
        ACTIVE_TIME_ON_SITE: 20,
        HIGHEST_SCROLL_PERCENTAGE: 25
      };
    }
  } else if (websiteType === globals.WEBSITE_TYPES.MARKETING) {
    if (!beSlightlyMoreAggressive) {
      // not aggressive
      return {
        ACTIVE_TIME_ON_PAGE: 8,
        SITE_PAGE_VIEWS: 3,
        ACTIVE_TIME_ON_SITE: 30
      };
    } else {
      // somewhat aggressive
      return {
        ACTIVE_TIME_ON_PAGE: 6,
        SITE_PAGE_VIEWS: 2,
        ACTIVE_TIME_ON_SITE: 20
      };
    }
  }
}