import { useState, useEffect } from 'react';

import axios from 'axios';

const BASE_URL = 'http://localhost:3001';
const model = 'tacos';

const TacosService = {
  all: async () => {
    console.log('CA:')
    const tacosResponse = await axios.get(`${BASE_URL}/${model}`);
    return tacosResponse.data;
  }
}

// -----------------------
// useAPI hook
// -----------------------

export const useApi = (method: string | any, ...params: any[]) => {
  const [ data, setData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    setError(null);
    try {
      setIsLoading(true);
      setData(await (TacosService as any)[ method ](...params));
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ data, isLoading, error, fetchData ];
}
