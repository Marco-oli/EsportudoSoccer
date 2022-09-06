import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/Home';
import {TeamDetailsScreen} from '../screens/TeamDetails';

const Stack = createNativeStackNavigator<MainStackParamList>();

export type MainStackParamList = {
  HomeScreen: undefined;
  TeamDetailsScreen: undefined;
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TeamDetailsScreen" component={TeamDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
