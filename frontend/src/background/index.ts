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
    const data = JSON.parse(message.data.BKHISTORY2).flights;
    const { destinationLocation, origin_location, depart_date, return_date, travelers } = data;

    await chrome.storage.local.set({
      destination: destinationLocation,
      origin: origin_location,
      departDate: depart_date,
      returnDate: return_date,
      travelers: travelers,
    });
    chrome.runtime.sendMessage({ action: 'saveFlight' });
  }
});
