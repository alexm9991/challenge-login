import { useState } from "react";

export default function useFetch() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRequest = async (url, options) => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const data = await response?.json();

      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      return { data };
    } catch (error) {
      console.error(error);
      setError(error);
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  // the empty array ensures that the effect only runs once
  return { fetch: fetchRequest, error, loading };
}
