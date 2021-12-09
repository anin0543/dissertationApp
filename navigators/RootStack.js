import React, { useEffect, useState, useMemo } from "react";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "./../components/styles";
const { primary, tertiary } = Colors;

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import Login from "./../screens/Loginpage";
import Home from "./../screens/Homepage";
import Splash from "../screens/Splash";
import TestLogin from "./../screens/TestLogin";
import TestHome from "./../screens/TestHome";
import SearchVideo from "../screens/SearchVideopage";
import Profile from "../screens/Profilepage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabScreen() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Home}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Videos" component={SearchVideo} options={{
          tabBarLabel: 'Videos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}



const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Hometab"
      >
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Hometab" component={HomeTabScreen} />

        <Stack.Screen name="TestHome" component={TestHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
