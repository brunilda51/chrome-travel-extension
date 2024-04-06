interface Window {
  hasRun?: boolean;
}
// Check if the content script has already run
if (!window.hasRun) {
  // Your content script logic here

  // Access local storage data
  const localStorageData = { ...localStorage }; // Access local storage of the active tab

  // Send the data back to the background script
  chrome.runtime.sendMessage({ action: 'sendLocalStorage', data: localStorageData });

  // Set window.hasRun to true to indicate that the content script has run
  window.hasRun = true;
}
