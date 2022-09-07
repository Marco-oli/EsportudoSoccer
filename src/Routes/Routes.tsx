import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {LeagueScreen} from '../screens/Leagues';
import {TeamScreen} from '../screens/Teams';
import {colors} from '../assets/colors';
import {Image} from 'react-native';
import {images} from '../assets/images';

const Tab = createBottomTabNavigator<MainStackParamList>();

export type MainStackParamList = {
  LeagueScreen: undefined;
  TeamScreen: undefined;
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
          },
          tabBarItemStyle: {
            paddingVertical: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarActiveBackgroundColor: colors.purple,
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.black_seconday,
        }}>
        <Tab.Screen
          name="LeagueScreen"
          component={LeagueScreen}
          options={{
            tabBarLabel: 'Leagues',
            tabBarIcon: ({color}) => (
              <Image source={images.leagueIcon} tintColor={color} />
            ),
          }}
        />
        <Tab.Screen
          name="TeamScreen"
          component={TeamScreen}
          options={{
            tabBarLabel: 'Teams',
            tabBarIcon: ({color}) => (
              <Image source={images.TeamIcon} tintColor={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
