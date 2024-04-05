// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getLocalStorage') {
    // Retrieve local storage data
    const localStorageData = { ...localStorage }; // Access local storage of the active tab
    // Send the data back to the background script
    chrome.runtime.sendMessage({ action: 'sendLocalStorage', data: localStorageData });
  }
});
