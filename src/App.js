import React from 'react';
import {StatusBar} from 'react-native';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Router />
    </NavigationContainer>
  );
};

export default App;
