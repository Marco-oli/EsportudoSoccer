import React from 'react';
import {StatusBar} from 'react-native';

import {Routes} from './src/Routes/Routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Routes />
    </>
  );
};

export default App;
