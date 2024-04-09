import { FlightData, Website, Window } from '../types';

export const sendMessageToBackground = (flight: FlightData) => {
  chrome.runtime.sendMessage({
    action: 'sendLocalStorage',
    data: flight,
  });
};

export const extractFromURL = (currentUrl: URL) => {
  let data;
  if (currentUrl.host.includes('skyscanner')) {
    const origin_code = currentUrl.pathname.split('/')[3].substring(0, 3).toUpperCase();
    const destination_code = currentUrl.pathname.split('/')[4].substring(0, 3).toUpperCase();
    const departure = currentUrl.pathname.split('/')[5];
    const arrival = currentUrl.pathname.split('/')[6].split('?')[0];

    data = {
      website: Website.SKYSCANNER,
      origin_code,
      destination_code,
      departure,
      arrival,
    };
  } else if (currentUrl.host.includes('kayak') && currentUrl.pathname.includes('/flights')) {
    const flightDetails = currentUrl.pathname.split('/')[2];
    const [origin_code, destination_code] = flightDetails.split('-');
    const [departure, arrival] = currentUrl.pathname.split('/').slice(-2);

    data = {
      website: Website.KAYAK,
      origin_code,
      destination_code,
      departure,
      arrival,
    };
  }

  return data;
};

if (!(window as Window).hasRun) {
  const currentUrl = new URL(window.location.href);
  let data = extractFromURL(currentUrl);
  data ? sendMessageToBackground(data) : null;

  (window as Window).hasRun = true;
}
