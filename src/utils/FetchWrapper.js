import React, { useState, useEffect } from 'react';

// A custom hook for fetching data and making POST requests
function useFetchWrapper(baseUrl) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}`);
        if (!response) throw new Error('Network error');
        const jsonResponse = await handleResponse(response);
        setData(jsonResponse);
      } catch (error) {
        setError(`GET request failed: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [baseUrl]);

  // Handles POST requests
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

  return { data, post, error, loading };
}

// Handles response and error checking for fetch requests
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

export default useFetchWrapper;