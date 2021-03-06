const KEY = 'f019aca7974bbfe3a8774b9cae2b67a5';

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

  async get(page) {
    try {
      const response = await fetch(
        `${this.baseUrl}trending/all/day?api_key=${KEY}&page=${page}`,
      );
      const data = await response.json();
      return data;
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
