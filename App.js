/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Componet} from 'react';
import {Text,View} from 'react-native';
import 'react-native-gesture-handler';
import HomePage from './src/screens/HomePage';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
const App=()=>{

  return(
    //<HomePage/>
    // <NavigationContainer>
    // <HomePage/>
    // </NavigationContainer>
    <NavigationContainer>
    <BottomTabNavigator/>
    </NavigationContainer>
  );
}

export default App;
