# Chrome Extension - Developer Mode Installation Guide

This guide will walk you through the steps to add the Chrome extension in developer mode to your Google Chrome browser. Developer mode allows you to test and debug your extension during development before publishing it to the Chrome Web Store.

**Note:** This guide assumes that you already have the Chrome extension files in a directory on your computer.

## Prerequisites

- Google Chrome browser installed on your computer.

## Installation Steps

1. **Open Google Chrome**

   Make sure you have Google Chrome installed on your computer. If not, you can download and install it from the official website: [Google Chrome Download](https://www.google.com/chrome/).

2. **Open the Extensions page**

   - Open a new tab in Google Chrome.
   - Type `chrome://extensions` in the address bar and press Enter.
   - Alternatively, you can access the Extensions page by clicking the three-dot menu in the top-right corner of Chrome, then navigating to `More tools > Extensions`.

3. **Enable Developer Mode**

   - In the top-right corner of the Extensions page, you should see a toggle switch labeled "Developer mode." Toggle it on to enable Developer Mode.

4. **Load the Extension**

   - Click on the "Load unpacked" button that appears after enabling Developer mode.
   - A file dialog will open. Navigate to the directory where you have stored the Chrome extension files and select the main folder (the one containing the `manifest.json` file).

5. **Confirm the Installation**

   - After selecting the folder, Chrome will load the extension, and you will see its icon in the Extensions toolbar.

6. **Verify the Installation**

   - To verify that the extension has been successfully loaded, you can click on the extension's icon in the Extensions toolbar.
   - If the extension has a popup or UI, it should open, indicating that the extension is working correctly.

7. **Test Your Extension**

   - Your Chrome extension is now running in Developer mode, allowing you to test and debug it as needed.
   - You can interact with your extension on various web pages to ensure it works as expected.

## Updating the Extension

If you make changes to your extension's code or manifest, you will need to reload the extension in Developer mode to apply the updates.

1. Open the Extensions page (`chrome://extensions`).
2. Find your extension in the list of installed extensions.
3. Click the "Reload" icon next to your extension to update it with the latest changes.

## Removal

To remove the extension loaded in Developer mode, follow these steps:

1. Open the Extensions page (`chrome://extensions`).
2. Find your extension in the list of installed extensions.
3. Click the "Remove" button to uninstall the extension.

## Final Words

Congratulations! You have successfully added your Chrome extension in Developer mode. Remember that this method is intended for testing and development purposes only. If you want to distribute your extension to a wider audience, consider publishing it to the Chrome Web Store after thoroughly testing it in Developer mode.

For more information on Chrome extensions and their capabilities, you can refer to the [Google Chrome Developer Documentation](https://developer.chrome.com/docs/extensions/). Happy coding!
