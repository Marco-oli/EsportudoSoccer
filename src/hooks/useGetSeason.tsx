import {useCallback, useState} from 'react';
import api from '../services/api';

export const useGetSeason = () => {
  const [seasons, setSeasons] = useState([]);
  const [loadingSeason, setLoadingSeason] = useState(false);
  const [errorSeason, setErrorSeason] = useState(false);

  const getSeasons = useCallback(async () => {
    try {
      setLoadingSeason(true);
      setErrorSeason(false);

      const response = await api.get('leagues/seasons');
      setSeasons(response.data.response);
    } catch (err) {
      setErrorSeason(true);
    } finally {
      setLoadingSeason(false);
    }
  }, []);

  return {
    seasons,
    loadingSeason,
    errorSeason,
    getSeasons,
  };
};
