import React, { useEffect, useState, useMemo } from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "./../components/styles";
const { primary, tertiary } = Colors;

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
// screens
import Login from "./../screens/Loginpage";
import Home from "./../screens/Homepage";
import Splash from "../screens/Splash";
import TestLogin from "./../screens/TestLogin";
import TestHome from "./../screens/TestHome";
import SearchVideo from "../screens/SearchVideopage";
import Profile from "../screens/Profilepage";
import Factory from "../components/factory";
import OnePerson from "../components/onePerson";
import OnTheGo from "../components/onTheGo";
import MeetingRoom from "../components/meetingRoom";
import Family from "../components/family";
import FooterTabScreen from "../components/footer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export const SideBar = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeTabScreen}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="Factory"
        component={Factory}
        options={{ drawerLabel: "Factory" }}
      />
      <Drawer.Screen
        name="Family"
        component={Family}
        options={{ drawerLabel: "Family" }}
      />
      <Drawer.Screen
        name="OnTheGo"
        component={OnTheGo}
        options={{ drawerLabel: "OnTheGo" }}
      />
      <Drawer.Screen
        name="MeetingRoom"
        component={MeetingRoom}
        options={{ drawerLabel: "MeetingRoom" }}
      />
      <Drawer.Screen
        name="OnePerson"
        component={OnePerson}
        options={{ drawerLabel: "OnePerson" }}
      />
    </Drawer.Navigator>
  );
};

export const HomeTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={SearchVideo}
        options={{
          tabBarLabel: "Videos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Sidebar"
    >
      <Stack.Screen name="Sidebar" component={SideBar} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Hometab" component={HomeTabScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
