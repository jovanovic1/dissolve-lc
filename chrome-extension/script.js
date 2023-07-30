console.log("DISSOLVE: script loaded");

const textInput = document.getElementById("textInput");
const submitButton = document.getElementById("dissolve");

function executeQuery(jsonData) {

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(
      activeTab.id,
      {
        action: "execute query",
        selectorString:
          ['span.color-swatch-inner[style*="background-image:url(https://resource.logitech.com/w_32,h_32,c_fill,b_white,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/swatch/rose.jpg?v=1)"]'],
        redirectUrl: "",
      },
      function (response) {
        console.log("DISSOLVE:", response);
      }
    );
  });
}

async function postToServer(query, htmlPayLoad, tabUrl) {
  console.log("tried posting");
  const url = "http://13.232.247.37:8080/handle_post";

  const data = {
    query: query,
    htmlPayLoad: htmlPayLoad,
    tabUrl: tabUrl,
  };

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

    const jsonData = await response.json();
    console.log("Response:", jsonData);

    executeQuery(jsonData);
  } catch (error) {
    console.error("Error:", error);
  }
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
