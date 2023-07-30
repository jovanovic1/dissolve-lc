console.log("DISSOLVE: content script loaded");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("DISSOLVE: message received",
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  console.log("DISSOLVE:Dissolve is ready!!!")
  if (request.action == "fetch html") {
    console.log("DISSOLVE:fetching html")
  }
  if(request.action == "execute query"){
    console.log("DISSOLVE:executing query",request.selectorString)
    if(request.redirectUrl != ""){
      window.location.replace(request.redirectUrl);
    }
    for (let i = 0; i < request.selectorString.length; i++) {
      document.querySelector(request.selectorString[i]).click()
    }
  }
  sendResponse({
    farewell: "goodbye",
    htmlPayLoad: document.documentElement.outerHTML,
  });
});
