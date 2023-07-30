console.log("DISSOLVE: script loaded");

const textInput = document.getElementById("textInput");
const submitButton = document.getElementById("dissolve");

function logToConsole() {
  console.log("DISSOLVE:logToConsole");
  const inputValue = textInput.value;
  textInput.value = "";

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(
      activeTab.id,
      { query: inputValue, tabUrl: activeTab.url },
      function (response) {
        console.log("DISSOLVE:inputValue,response: ");
      }
    );
  });
}

submitButton.addEventListener("click", logToConsole);
