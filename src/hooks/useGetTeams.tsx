import {useCallback, useState} from 'react';
import api from '../services/api';

export const useGetTeams = () => {
  const [teams, setTeams] = useState();
  const [loadingTeams, setLoadingTeams] = useState(false);
  const [errorTeams, setErrorTeams] = useState(false);

  const getTeams = useCallback(async (leagueId: number, season: number) => {
    try {
      setLoadingTeams(true);
      setErrorTeams(false);

      const response = await api.get(
        `teams?league=${leagueId}&season=${season}`,
      );
      setTeams(response.data.response);
    } catch (err) {
      setErrorTeams(true);
    } finally {
      setLoadingTeams(false);
    }
  }, []);

  return {
    teams,
    loadingTeams,
    errorTeams,
    getTeams,
  };
};
