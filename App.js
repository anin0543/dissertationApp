import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// React Navigator Stack
import RootStack from './navigators/RootStack';

import {
  StatusBar,
} from 'react-native';


export default function App() {
  return <RootStack />;
}
