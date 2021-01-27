const KEY = 'f019aca7974bbfe3a8774b9cae2b67a5';

// async function fetchFunc(url = '') {
//   const response = await fetch(
//     url
//   );
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

//   export function  fetchTrending() {
//     return fetchFunc(`${BASE_URL}/trending/all/day?api_key=${KEY}`)
// }

export class Backend {
  constructor() {
    this.baseUrl = '';
  }

  setBaseUrl(url) {
    this.baseUrl = url;
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}?api_key=${KEY}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const response = await fetch(`${this.baseUrl}movie/${id}?api_key=${KEY}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getReview(id) {
    const response = await fetch(
      `${this.baseUrl}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
    );
    const data = await response.json();
    return data.results;
  }

  async getCast(id) {
    try {
      const response = await fetch(
        `${this.baseUrl}movie/${id}/credits?api_key=${KEY}&language=en-US`,
      );
      const { cast } = await response.json();
      return cast;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getByName(value) {
    const response = await fetch(
      `${this.baseUrl}search/movie?api_key=${KEY}&query=${value}&language=en-US&page=1`,
    );
    const data = await response.json();
    return data.results;
  }
}

const API = new Backend();
API.setBaseUrl('https://api.themoviedb.org/3/');

export default API;
