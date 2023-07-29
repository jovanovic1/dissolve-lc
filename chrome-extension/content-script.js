console.log("anshul");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  console.log(request.greeting);
  if (request.greeting == "hello") console.log(document.body);
  sendResponse({
    farewell: "goodbye",
    htmlPayLoad: document.documentElement.outerHTML,
  });
});
