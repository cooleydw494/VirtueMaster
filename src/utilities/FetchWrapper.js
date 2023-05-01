import React from 'react';

class FetchWrapper {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
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


// Task 23: Implement a backup and sync feature for data access across multiple devices
// 1. Adapt FetchWrapper functions to work with Firebase Realtime Database or Cloud Firestore.
// 2. Add mechanisms to synchronize remote and local data, ensuring changes from one device are propagated to others.
// 3. Handle potential errors and edge cases in fetching or syncing data across devices.
// 4. Test the data synchronization feature with different scenarios to ensure reliability and consistency.