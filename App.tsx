import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
};

export default App;
