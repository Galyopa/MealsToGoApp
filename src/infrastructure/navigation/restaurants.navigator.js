import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      initialRouteName="RestaurantsScreen"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
