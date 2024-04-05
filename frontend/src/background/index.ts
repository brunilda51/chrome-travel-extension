// Function to handle tab updates
function handleTabUpdate(tabId: any, changeInfo: any, tab: any) {
  if (changeInfo.status === 'complete') {
    // Send a message to the content script to retrieve local storage data
    chrome.tabs.sendMessage(tabId, { action: 'getLocalStorage' });
  }
}

// Listen for tab updates
chrome.tabs.onUpdated.addListener(handleTabUpdate);

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === 'sendLocalStorage') {
    const desti = JSON.parse(message.data.BKHISTORY2).flights.destinationLocation;

    await chrome.storage.local.set({ destination: desti });
  }
});
