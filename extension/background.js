console.log("YouTube Fact Checker: background service worker started");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Background received message:", message);

  if (message.type === "CONTENT_SCRIPT_LOADED") {
    console.log("Content script loaded on:", message.url);
  }
});