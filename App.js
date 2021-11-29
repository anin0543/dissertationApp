// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

import React, { useEffect, useState, useMemo } from 'react';
import 'localstorage-polyfill'; 
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { loginUrl } from './const/const';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestLogin from './screens/TestLogin'; //Login component
import TestHome from './screens/TestHome'; //Logged in component 
import mainContext, { doSome } from './context/Context'; //Our context
import axios from 'axios'


// React Navigator Stack
import RootStack from './navigators/RootStack';


export default function App() {

  return (
    <RootStack />
  );
}

  // return <RootStack />;
// export default function App() {
//   // return <RootStack />;
//   return <TestHome />;
