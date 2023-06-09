import EventsClient from "./EventsClient";

export async function main() {
  console.log("Initializing EventsClient...");
  const myClient = new EventsClient({
    apiKey: "c84c27611e629bd7e9b0c99147f99a0e",
    env: "QA",
  });
  console.log("Initialized EventsClient!");
  const response = await myClient.report({
    action: "ADD_TO_CART",
    pageUrl: "https://www.yext.com",
  });
  const json = await response.json();
  console.log({ json });
}

main();
