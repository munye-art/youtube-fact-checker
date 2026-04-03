console.log("YouTube Fact Checker: content script loaded");

chrome.runtime.sendMessage({
  type: "CONTENT_SCRIPT_LOADED",
  url: window.location.href
});