import React, { useState, useEffect } from 'react';

function FetchWrapper(baseUrl) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${baseUrl}`);
        if (!response) throw new Error('Network error');
        const jsonResponse = await handleResponse(response);
        setData(jsonResponse);
      } catch (error) {
        setError(`GET request failed: ${error.message}`);
      }
    }
    fetchData();
  }, [baseUrl]);

  async function post(endpoint, data) {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response) throw new Error('Network error');
      return handleResponse(response);
    } catch (error) {
      throw new Error(`POST request failed: ${error.message}`);
    }
  }

  async function handleResponse(response) {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.statusText}`);
    }
    try {
      return await response.json();
    } catch (error) {
      throw new Error(`Parsing error: ${error.message}`);
    }
  }

  return { data, post, error };
}

export default FetchWrapper;