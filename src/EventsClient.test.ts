import EventsClient from "./EventsClient";
import { v4 as uuid } from "uuid";

export async function main() {
  console.log("Initializing EventsClient...");
  const myClient = new EventsClient({
    apiKey: "c84c27611e629bd7e9b0c99147f99a0e",
    env: "QA",
  });
  console.log("Initialized EventsClient!");
  const response = await myClient.report({
    action: "CALL_TO_ACTION",
    pageUrl: "https://www.yext.com",
    destinationUrl: "https://www.yext.com/chat",
    sessionId: uuid(),
  });
  console.log({ response });
}

main();
