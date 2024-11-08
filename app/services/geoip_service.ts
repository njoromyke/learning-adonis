export default class GeoIpService {
  async lookup(ip: string) {
    return {
      city: 'New York',
      country: 'United States',
      countryCode: 'US',
      region: 'NY',
      regionName: 'New York',
      zip: '10001',
      lat: 40.7143,
      lon: -74.006,
      timezone: 'America/New_York',
      isp: 'Cloudflare Inc',
      org: 'Cloudflare Inc',
      as: 'AS13335 Cloudflare, Inc.',
    }
  }
}
