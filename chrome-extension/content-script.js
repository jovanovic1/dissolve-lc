console.log("DISSOLVE: content script loaded");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    "DISSOLVE: message received",
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  console.log("DISSOLVE:Dissolve is ready!!!");
  if (request.action == "fetch html") {
    console.log("DISSOLVE:fetching html");
    sendResponse({
      farewell: "goodbye",
      htmlPayLoad: document.documentElement.outerHTML,
    });
  }
  if (request.action == "execute url query") {
    console.log("DISSOLVE:executing url query", request.redirectUrl);
    if (request.redirectUrl != "") {
      window.location.replace(request.redirectUrl);
    }
    sendResponse({
      farewell: "goodbye",
    });
  }

  if (request.action == "execute selector query") {
    console.log("DISSOLVE:executing selector query", request.selectorString);
    document.querySelector(request.selectorString).click();
    sendResponse({
      farewell: "goodbye",
    });
  }
});
