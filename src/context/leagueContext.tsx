import React, {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import {ILeagueParams} from '../interfaces/league';

export interface ILeagueContextProps {
  leagueData: ILeagueParams;
  setLeagueData: Dispatch<SetStateAction<ILeagueParams>>;
}

export const LeagueContext = createContext<ILeagueContextProps>({
  leagueData: {
    id: 0,
    logo: '',
    name: '',
    type: '',
  },
  setLeagueData: () => {},
});

export const LeagueProvider = ({children}: PropsWithChildren) => {
  const [leagueData, setLeagueData] = useState<ILeagueParams>({
    id: 0,
    logo: '',
    name: '',
    type: '',
  });

  return (
    <LeagueContext.Provider value={{leagueData, setLeagueData}}>
      {children}
    </LeagueContext.Provider>
  );
};

export const useLeagueContext = () => {
  const {leagueData, setLeagueData} = useContext(LeagueContext);

  return {
    leagueData,
    setLeagueData,
  };
};
