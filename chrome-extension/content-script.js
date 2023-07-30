console.log("DISSOLVE: content script loaded");

function runQuerySelector(jsonData) {
  for (let i = 0; i < jsonData.selectorString.length; i++) {
    document.querySelector(jsonData.selectorString[i]).click();
  }
}

function executeQuery(jsonData) {
  console.log("DISSOLVE:executing query", jsonData.selectorString);

  if (data.redirectUrl != "") {
    window.location.replace(jsonData.redirectUrl);
    setTimeout(runQuerySelector(jsonData), 3000);
  } else {
    runQuerySelector(jsonData);
  }
}

async function postToServer(query, htmlPayLoad, tabUrl) {
  console.log("DISSOLVE:tried posting");
  const url = "https://13.232.247.37:8080/handle_post";

  const data = {
    query: query,
    htmlPayLoad: htmlPayLoad,
    tabUrl: tabUrl,
  };

  let jsonData;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convert the data to a valid JSON string
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    jsonData = await response.json();
    console.log("DISSOLVE:Response:", jsonData);
  } catch (error) {
    console.error("DISSOLVE:Error:", error);
  }
  executeQuery(jsonData);
}

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  console.log(
    "DISSOLVE: message received",
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  let htmlPayLoad = document.documentElement.outerHTML;

  await postToServer(request.query, htmlPayLoad, request.tabUrl);
  console.log("DISSOLVE:Dissolve is ready!!!");

  sendResponse({
    farewell: "goodbye",
  });
});
