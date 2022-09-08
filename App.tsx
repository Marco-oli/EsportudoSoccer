import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {colors} from './src/assets/colors';
import {LeagueProvider} from './src/context/leagueContext';

import {Routes} from './src/Routes/Routes';

const App = () => {
  return (
    <LeagueProvider>
      <ThemeProvider theme={{colors}}>
        <StatusBar barStyle={'light-content'} />
        <Routes />
      </ThemeProvider>
    </LeagueProvider>
  );
};

export default App;
