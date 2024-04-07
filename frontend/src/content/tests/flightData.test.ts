import { extractFlightDataFromUrl, sendMessageToBackground } from '../';
import { Website } from '../../types';

jest.mock('chrome', () => ({
  runtime: {
    sendMessage: jest.fn(),
    // Add other methods and properties you need to mock
  },
}));
describe('extractFlightDataFromUrl', () => {
  test('should extract flight data from Skyscanner URL', () => {
    const url =
      'https://www.skyscanner.com/flight-s earch/ABC-XYZ/2024-04-07/2024-04-10?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false';

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
