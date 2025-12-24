// Store cached data
const cache = {};

// Fetch data with caching
export const fetchWithCache = async (key, fetchFn) => {
  // Return cached data if available
  if (cache[key]) return cache[key];

  // Fetch fresh data
  const data = await fetchFn();

  // Save data to cache
  cache[key] = data;

  // Return data
  return data;
};
