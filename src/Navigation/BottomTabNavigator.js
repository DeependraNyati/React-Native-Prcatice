import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '../screens/HomePage';
import SearchTab from '../screens/SearchTab';
import LibraryTab from '../screens/LibraryTab';
const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="grey" size={15} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="search" color="grey" size={15} />
          ),
         
        }}
      />
      <Tab.Screen
        name="LibraryTab"
        component={LibraryTab}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color="grey" size={15} />
          ),
        }}
      />
    </Tab.Navigator>
    /* </NavigationContainer> */
  );
}

export default BottomTabNavigator;