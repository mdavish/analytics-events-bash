import { type Action } from "./types";

interface EventsClientsOptions {
  apiKey: string; // TODO: Add optional token
  env: "QA" | "PROD";
  cloudProvider?: "AWS"; // TODO Add more?
}

interface EventPayload {
  action: Action;
  pageUrl?: string;
  locale?: string;
  timestamp?: string;
}

interface EventsAPIResponse {
  id: string;
}

export default class EventsClient {
  public readonly apiKey: string;
  public readonly env: EventsClientsOptions["env"];

  private endpoints: Record<EventsClientsOptions["env"], string> = {
    QA: "https://www.qa.us.yextevents.com/accounts/me/events",
    PROD: "https://www.yextevents.com/accounts/me/events",
  };

  constructor({ apiKey, env = "QA" }: EventsClientsOptions) {
    this.apiKey = apiKey;
    this.env = env;
    console.log("EventsClient constructor");
  }

  public async report(event: EventPayload) {
    const res = await fetch(this.endpoints[this.env], {
      method: "POST",
      headers: {
        Authorization: `KEY ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    if (!res.ok) {
      throw new Error(
        `Events API responded with ${res.status}. ${res.statusText}`
      );
    }
    const resJson = await res.json();
    return resJson as EventsAPIResponse;
  }
}
