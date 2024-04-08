import { extractFlightDataFromUrl, sendMessageToBackground } from '../';
import { Website } from '../../types';

// Mock the chrome runtime sendMessage function
const chrome = {
  runtime: {
    sendMessage: jest.fn(),
  },
};
describe('extractFlightDataFromUrl', () => {
  test('should extract flight data from Skyscanner URL', () => {
    const url =
      'https://www.skyscanner.com/flight-search/ABC-XYZ/2024-04-07/2024-04-10?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false';

    const flightData = extractFlightDataFromUrl(url);

    expect(flightData).toEqual({
      website: Website.SKYSCANNER,
      origin_code: 'ABC',
      destination_code: 'XYZ',
      departure: '2024-04-07',
      arrival: '2024-04-10',
    });
  });

  // Add more test cases for other scenarios (e.g., Kayak URL)
});

describe('sendMessageToBackground', () => {
  test('should send message to background', () => {
    const flightData = {
      website: Website.SKYSCANNER,
      origin_code: 'ABC',
      destination_code: 'XYZ',
      departure: '2024-04-07',
      arrival: '2024-04-10',
    };

    sendMessageToBackground(flightData);

    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      action: 'sendLocalStorage',
      data: flightData,
    });
  });
});
