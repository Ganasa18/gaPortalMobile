import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CarsPage,
  Home,
  HomeAdminScreen,
  LocationScreen,
  LoginScreen,
  MenuScreen,
  ProfileScreen,
  SplashScreen,
} from '../pages';
import ButtomNavigator from '../components/BottomNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={MenuScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notifications"
        component={MenuScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

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
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kilometer"
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
      {/* <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      /> */}

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
