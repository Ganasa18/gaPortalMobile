import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CarsPage,
  Home,
  HomeAdminScreen,
  LocationScreen,
  LoginScreen,
  ProfileScreen,
  SplashScreen,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CarsPage"
        component={CarsPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />

      {/* Admin Page */}
      <Stack.Screen
        name="HomeAdmin"
        component={HomeAdminScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
