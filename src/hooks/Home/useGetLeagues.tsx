import {useCallback, useState} from 'react';
import api from '../../services/api';

export const useGetLeagues = () => {
  const [leagues, setLeagues] = useState();
  const [loadingLeagues, setLoadingLeagues] = useState(false);
  const [errorLeagues, setErrorLeagues] = useState(false);

  const getLeagues = useCallback(async (country: string) => {
    try {
      setLoadingLeagues(true);
      setErrorLeagues(false);

      const response = await api.get('leagues', {
        params: {country: country},
      });
      setLeagues(response.data.response);
    } catch (err) {
      setErrorLeagues(true);
    } finally {
      setLoadingLeagues(false);
    }
  }, []);

  return {
    leagues,
    loadingLeagues,
    errorLeagues,
    getLeagues,
  };
};
