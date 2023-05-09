import React from 'react';

class FetchWrapper {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      if (!response) throw new Error('Network error');
      return this.handleResponse(response);
    } catch (error) {
      throw new Error(`GET request failed: ${error.message}`);
    }
  }

  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response) throw new Error('Network error');
      return this.handleResponse(response);
    } catch (error) {
      throw new Error(`POST request failed: ${error.message}`);
    }
  }

  async handleResponse(response) {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.statusText}`);
    }
    try {
      return await response.json();
    } catch (error) {
      throw new Error(`Parsing error: ${error.message}`);
    }
  }
}

export default FetchWrapper;