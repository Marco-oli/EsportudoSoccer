import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {colors} from './src/assets/colors';

import {Routes} from './src/Routes/Routes';

const App = () => {
  return (
    <ThemeProvider theme={{colors}}>
      <StatusBar barStyle={'light-content'} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
