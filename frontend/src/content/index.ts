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

export const sendMessageToBackground = (
  website: Website,
  origin_code: string,
  destination_code: string,
  departure: string,
  arrival: string,
) => {
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
};

if (!(window as Window).hasRun) {
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

  (window as Window).hasRun = true;
}
