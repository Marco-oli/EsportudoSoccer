import {useCallback, useState} from 'react';
import {ICountriesParams} from '../interfaces/countries';
import api from '../services/api';

export const useGetCountries = () => {
  const [countries, setCountries] = useState<ICountriesParams[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [errorCountries, setErrorCountries] = useState(false);

  const getCountries = useCallback(async () => {
    try {
      setLoadingCountries(true);
      setErrorCountries(false);

      const response = await api.get('countries');
      setCountries(response.data.response);
    } catch (err) {
      setErrorCountries(true);
    } finally {
      setLoadingCountries(false);
    }
  }, []);

  return {
    countries,
    loadingCountries,
    errorCountries,
    getCountries,
  };
};
