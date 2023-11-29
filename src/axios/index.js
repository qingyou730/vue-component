import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://8.130.103.188/api',
      // baseURL: 'http://localhost:8889',
      timeout: 10000,
    })
  }

  async get(url, params) {
    try {
      const response = await this.api.get(url, { params });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async post(url, data) {
    try {
      const response = await this.api.post(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

    async put(url, data) {
    try {
      const response = await this.api.put(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(url) {
    try {
      const response = await this.api.delete(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async patch(url, data) {
    try {
      const response = await this.api.patch(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

}

const api = new Api();

export default api;


