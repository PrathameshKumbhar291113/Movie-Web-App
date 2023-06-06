// src/api.js

const BASE_URL = 'https://api.tvmaze.com';

export async function searchShows(query) {
  const response = await fetch(`${BASE_URL}/search/shows?q=${query}`);
  const data = await response.json();
  return data;
}

export async function getShowSummary(showId) {
  const response = await fetch(`${BASE_URL}/shows/${showId}`);
  const data = await response.json();
  return data.summary;
}
