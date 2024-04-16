export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_TMDB_ACCESS_TOKEN
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original";