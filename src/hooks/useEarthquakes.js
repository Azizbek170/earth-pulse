/*
 * File: src/hooks/useEarthquakes.js - loads earthquake data (stub)
 * Authors: [fill in names]
 * Course: PED 379
 * Midterm 2 Project
 */

// Stub. Member C replaces the body but keeps the returned shape:
//   status:  'idle' | 'loading' | 'success' | 'empty' | 'error'
//   events:  [{ id, magnitude, place, time, depthKm, lat, lon, url, distanceKm }]
//            time is in milliseconds since the epoch
//   stats:   { count, strongest, closest, avgDepthKm } or null
//   message: text for the user
//   search:  async function that takes
//            { city: { name, lat, lon }, radiusKm, minMagnitude, startDate, endDate, limit }
export default function useEarthquakes() {
  return {
    status: 'idle',
    events: [],
    stats: null,
    message: '',
    search: async () => {},
  };
}
