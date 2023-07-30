console.log("DISSOLVE: script loaded");

const textInput = document.getElementById("textInput");
const submitButton = document.getElementById("dissolve");

function executeQuery(jsonData) {
  const redirectUrl = jsonData.redirectUrl;
  const selectorString = jsonData.selectorString;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(
      activeTab.id,
      {
        action: "execute url query",
        redirectUrl: redirectUrl,
      },
      function (response) {
        console.log("DISSOLVE:", response);
      }
    );
  });

  for (let i = 0; i < selectorString.length; i++) {
    setTimeout(() => {
        console.log("sending request")
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(
          activeTab.id,
          {
            action: "execute selector query",
            selectorString: selectorString[i] ,
          },
          function (response) {
            console.log("DISSOLVE:", response);
          }
        );
      });
    }, 3000 * (i + 1));
  }
}

async function postToServer(query, htmlPayLoad, tabUrl) {
  console.log("tried posting");
  const url = "http://13.232.247.37:8080/handle_post";

  const data = {
    query: query,
    htmlPayLoad: htmlPayLoad,
    tabUrl: tabUrl,
  };

  const jsonData = {
    selectorString: [
        'button.search-trigger[data-analytics-title="Search"][aria-expanded="false"][aria-label="Search"]',
    ],
    redirectUrl: "https://www.logitech.com/en-in",
  };

  executeQuery(jsonData);

  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data), // Convert the data to a valid JSON string
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok.");
  //     }

  //     const jsonData = await response.json();
  //     console.log("Response:", jsonData);

  //     executeQuery(jsonData);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
}

function logToConsole() {
  console.log("DISSOLVE:logToConsole");
  const inputValue = textInput.value;
  textInput.value = "";

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(
      activeTab.id,
      { action: "fetch html" },
      function (response) {
        console.log("DISSOLVE:inputValue,response: ", inputValue, response);
        postToServer(inputValue, response.htmlPayLoad, activeTab.url);
      }
    );
  });
}

submitButton.addEventListener("click", logToConsole);
