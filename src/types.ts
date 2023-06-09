export const ACTIONS = [
  "ADD_TO_CART",
  "ALL_TAB_NAVIGATION",
  "APPLY",
  "AUTO_COMPLETE_SELECTION",
  "BACKWARD_PAGINATE",
  "BOOK",
  "BRAND_ICON",
  "CALL_TO_ACTION",
  "CASE_START",
  "CASE_SUBMITTED",
  "CHAT_IMPRESSION",
  "CHAT_LINK_CLICK",
  "CHAT_RESPONSE",
  "COLLAPSE",
  "DIRECTIONS",
  "EVENT",
  "EXPAND",
  "FEATURED_MESSAGE",
  "FILTERING_WITHIN_SECTION",
  "FORWARD_PAGINATE",
  "HEADER_LINKS",
  "ITEM_IN_LIST",
  "MAP_CARD",
  "MAP_PIN",
  "MENU",
  "MESSAGE",
  "ORDER",
  "PAGINATE",
  "PHONE",
  "POST",
  "PRESET_PROMPT",
  "PRODUCT",
  "PROFILE",
  "QUESTION_FOCUS",
  "QUESTION_SUBMIT",
  "REMOVED_FILTER",
  "REVIEW",
  "SCROLL_TO_BOTTOM_OF_PAGE",
  "SEARCH_BAR_IMPRESSION",
  "SEARCH_CLEAR_BUTTON",
  "THUMBS_DOWN",
  "THUMBS_UP",
  "TICKET_URL",
  "TITLE",
  "VERTICAL_TAB_NAVIGATION",
  "VERTICAL_VIEW_ALL",
  "VOICE_START",
  "VOICE_STOP",
  "WEBSITE",
] as const;

export type Action = (typeof ACTIONS)[number];

export interface EventPayload {
  action: Action;
  sessionId?: string;
  pageUrl?: string;
  destinationUrl?: string;
  label?: string;
  locale?: string;
  timestamp?: string;
  bot?: string; // Whether the event is from a bot
  browserAgent?: {
    browser?: string;
    browserVersion?: string;
    os?: string;
    osVersion?: string;
    device?: string;
    deviceClass?: string;
    userAgent?: string;
  };
  clientSdk?: Record<string, any>;
  count?: number;
  customTags?: Record<string, string>;
  customValues?: Record<string, number>;
  chat?: ChatDomainProperties;
  entity?:
    | {
        entityId: string;
      }
    | {
        entityUid: number;
      };
  ip?: {
    address: string;
    algorithm?: string;
  };
}
export interface ChatDomainProperties {
  botId: string;
  conversationId: string;
  sessionId: string;
}
