import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SettingsScreen from '../../features/restaurants/screens/settings.screen';
import RestaurantsNavigator from './restaurants.navigator';
import MapScreen from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Restaurants"
        screenOptions={{
          // tabBarActiveTintColor: theme.colors.brand.primary,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsNavigator}
          options={{
            tabBarLabel: 'Restaurants',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="restaurant-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="map-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
