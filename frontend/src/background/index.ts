import searchService from '../services/search.service';
import { Search } from '../types';

export enum TemplateType {
  basic = 'basic',
  image = 'image',
  list = 'list',
  progress = 'progress',
}
const createSearchInBackground = async (data: Search) => {
  try {
    const createdSearch = await searchService.createSearch({
      destination_code: data.destination_code,
      origin_code: data.origin_code,
      departure: data.departure,
      arrival: data.arrival,
    });

    await chrome.storage.local.set({
      searchData: createdSearch,
    });
    return createdSearch;
  } catch (error) {
    console.error('Error creating search:', error);
  }
};

chrome.runtime.onMessage.addListener(async (message, _sender, _sendResponse) => {
  if (message.action === 'sendLocalStorage') {
    chrome.notifications.create(
      'notificationId',
      {
        type: 'basic',
        iconUrl: 'https://www.munich-startup.de/wp-content/uploads/2021/11/admin-ajax.php_.jpg',
        title: 'Hello from eco mio!',
        message: `Click here to see the sustainability info from your most recent trip search!`,
      },
      function (notificationId) {
        console.log('Notification created with id: ' + notificationId);
      },
    );
    await createSearchInBackground(message.data);
  }
});
