import React , { useEffect, useState, useMemo } from 'react';

import {Colors} from './../components/styles';
const {primary, tertiary} = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Login from './../screens/Loginpage';
import Home from './../screens/Homepage';
import TestLogin from './../screens/TestLogin';
import TestHome from './../screens/TestHome';

const Stack = createStackNavigator();

const RootStack = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Login"
            >

                <Stack.Screen name="Login" component={Login} />

                <Stack.Screen name="Home" component={Home} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;