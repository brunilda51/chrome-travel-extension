interface Window {
  hasRun?: boolean;
}

interface FlightData {
  website: Website;
  origin_code: string;
  destination_code: string;
  departure: string;
  arrival: string;
}

enum Website {
  SKYSCANNER = 'skyscanner',
  KAYAK = 'kayak',
}

const showNotification = (message: string) => {
  const notification = document.createElement('div');
  notification.className = 'extension-notification';
  notification.textContent = message;

  notification.style.position = 'fixed';
  notification.style.maxWidth = '200px';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  notification.style.color = '#fff';
  notification.style.padding = '10px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '9999';

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 5000);
};

if (!window.hasRun) {
  const currentUrl = new URL(window.location.href);

  if (currentUrl.host.includes('skyscanner')) {
    const origin_code = currentUrl.pathname.split('/')[3].substring(0, 3).toUpperCase();
    const destination_code = currentUrl.pathname.split('/')[4].substring(0, 3).toUpperCase();
    const departure = currentUrl.pathname.split('/')[5];
    const arrival = currentUrl.pathname.split('/')[6].split('?')[0];

    sendMessageToBackground(Website.SKYSCANNER, origin_code, destination_code, departure, arrival);
  } else if (currentUrl.host.includes('kayak') && currentUrl.pathname.includes('/flights')) {
    const flightDetails = currentUrl.pathname.split('/')[2];
    const [origin_code, destination_code] = flightDetails.split('-');
    const [departure, arrival] = currentUrl.pathname.split('/').slice(-2);

    sendMessageToBackground(Website.KAYAK, origin_code, destination_code, departure, arrival);
  }
  showNotification('Click eco mio to see the sustainability info from your trip search!');
  window.hasRun = true;
}

function sendMessageToBackground(
  website: Website,
  origin_code: string,
  destination_code: string,
  departure: string,
  arrival: string,
) {
  const flightData: FlightData = {
    website,
    origin_code,
    destination_code,
    departure,
    arrival,
  };

  chrome.runtime.sendMessage({
    action: 'sendLocalStorage',
    data: flightData,
  });
}
