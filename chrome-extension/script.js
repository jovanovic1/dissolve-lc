const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('dissolve');



function logToConsole(){
    console.log("anshul")

    const inputValue = textInput.value;
    
    // // window.console.log('Hello from the extension!');
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {greeting: "hello"} , function(response) {
            console.log(inputValue,response)
        });
        // You can now access the content of the active tab using the "activeTab" object.
        // For example, you can access the URL of the active tab using activeTab.url.
  
        // Do whatever you want with the content of the active tab here.
        console.log('URL of the active tab:', activeTab.url);
      });

    //   (async () => {
    //     const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    //     const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
    //     // do something with response here, not outside the function
    //     // console.log(response);
    //   })();
}


submitButton.addEventListener('click', logToConsole);
// document.getElementById('dissolve').addEventListener('click', logToConsole);

