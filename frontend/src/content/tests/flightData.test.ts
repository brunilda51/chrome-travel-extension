import { extractFromURL } from '../'; // Make sure to import your function from the correct file
import { Website } from '../../types'; // Assuming you have a type definition file for Website enum

describe('extractFromURL function', () => {
  it('should extract data for Skyscanner URL', () => {
    const mockCurrentUrl = new URL('https://www.skyscanner.de/transport/flights/ber/mila/240501/240524/?adultsv2=1');
    const expectedData = {
      website: Website.SKYSCANNER,
      origin_code: 'BER',
      destination_code: 'MIL',
      departure: '240501',
      arrival: '240524',
    };

    expect(extractFromURL(mockCurrentUrl)).toEqual(expectedData);
  });

  it('should extract data for Kayak URL', () => {
    const mockCurrentUrl = new URL('https://www.kayak.de/flights/FRA-NYC/2024-05-05/2024-05-19');
    const expectedData = {
      website: Website.KAYAK,
      origin_code: 'FRA',
      destination_code: 'NYC',
      departure: '2024-05-05',
      arrival: '2024-05-19',
    };

    expect(extractFromURL(mockCurrentUrl)).toEqual(expectedData);
  });

  it('should return undefined for non-supported URL', () => {
    const mockCurrentUrl = new URL('https://www.google.com');

    expect(extractFromURL(mockCurrentUrl)).toBeUndefined();
  });
});
