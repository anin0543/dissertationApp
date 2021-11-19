// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

import React, { useEffect, useState, useMemo } from 'react';
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


export default function App({navigation}) {

  const [isLoading, setIsLoading] = useState(true); //true when the app is loading
  const [isLogged, setIsLogged] = useState(false); //True if the user is logged in
  const [userToken, setUserToken] = useState(null); //User token, maybe a useless state
  const [userProfile, setUserProfile] = useState(null); //userProfile object, it contains token too
  const [loggingIn, setloggingIn] = useState(false); //True when user is waiting for auth
  const [error, setError] = useState(null); //Error texts from the app or serve
  const [message, setMessage] = useState();

  useEffect(() => {
    AsyncStorage.getItem('userProfile').then((value) => {
      if (value) {
        setUserProfile(JSON.parse(value)),
          setIsLoading(false),
          setIsLogged(true);
      } else {
        setIsLoading(false), setIsLogged(false);
      }
    });
  }, []); //Run once

  const doLogout = async () => {
    try {
      await AsyncStorage.removeItem('userProfile');
      setloggingIn(true);
      setUserProfile(null);
      setloggingIn(false);
      setIsLogged(false);
      return true;
    } catch (exception) {
      setError('Error deleting data');
      return false;
    }
  };

  // const loginData = {
  //   username: "Username",
  //   password: "Password"
  // };
  // axios.post('http://test04.onpressidium.com/wp-json/jwt-auth/v1/token', loginData)
  // .then((res) => {
  // console.log(res.data);
  // localStorage.setItem('token', res.data.token);
  // localStorage.setItem('user_nicename', res.data.user_nicename);
  // localStorage.setItem('user_email', res.data.user_email);
  // localStorage.setItem('user_display_name', res.data.user_display_name);
  // })
  // .catch((err) => {
  // console.log(err);
  // });

    const handleMessage = (message) => {
      setMessage(message);

    }
    

  const doLogin = async (username, password) => {
    // console.log(email + '...' + password);
    setloggingIn(true);
    setError(null);
    let formData = new FormData();
    formData.append('type', 'login');
    formData.append('username', username);
    formData.append('password', password);
    

    axios.post('http://test04.onpressidium.com/wp-json/jwt-auth/v1/token', formData)
    .then((res) => {
    console.log(res.data);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user_nicename', res.data.user_nicename);
    localStorage.setItem('user_email', res.data.user_email);
    localStorage.setItem('user_display_name', res.data.user_display_name);

    if(!res.data.token) {
      handleMessage('error');
    } else {
      navigation.navigate('Home');
      console.log("Nik ça mère le navigate");
      // return <Home />;
    }

    })
    .catch((err) => {
      console.log(err);
      handleMessage("An error occured. Check your network and try again");
    });

    // axios.get('https://test04.onpressidium.com/wp-json/wp/v2/posts')
    // .then((res) => {
    //     console.log(res.data)   
    // })
    // .catch((err) => {
    //     console.log(err);
    // });


    // try {
    //   let response = await fetch(loginUrl, {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   let json = await response.json();
    //   //console.log(json);
    //   if (json.status != false) {
    //     setError(null);
    //     try {
    //       await AsyncStorage.setItem(
    //         'userProfile',
    //         JSON.stringify({
    //           isLoggedIn: json.status,
    //           authToken: json.token,
    //           id: json.data.id,
    //           name: json.data.user_login,
    //           avatar: json.avatar,
    //         })
    //       );
    //     } catch {
    //       setError('Error storing data on device');
    //     }
    //     setUserProfile({
    //       isLoggedIn: json.status,
    //       authToken: json.token,
    //       id: json.data.id,
    //       name: json.data.user_login,
    //       avatar: json.avatar,
    //     });
    //     setIsLogged(true);
    //     setUserProfile(json);
    //     setUserToken(json.token);
    //   } else {
    //     setIsLogged(false);
    //     setError('Login Failed');
    //   }
    //   setloggingIn(false);
    // } catch (error) {
    //   //console.error(error);
    //   setError('Error connecting to server');
    //   setloggingIn(false);
    // }
  };

  const wContext = {
    userProfile: userProfile,
    loggingIn: loggingIn,
    error: error,
    doSome: () => {
      doSome();
    },
    doLogin: (username, password) => {
      doLogin(username, password);
    },
    doLogout: () => {
      doLogout();
    },
  };

  if (isLoading) {
    // SHOWING SPINNING WHEEL DURING LOAD AND USEEFFECT PROCESSING
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <mainContext.Provider value={wContext}>
      <RootStack />
    </mainContext.Provider>
  );
}

  // return <RootStack />;
// export default function App() {
//   // return <RootStack />;
//   return <TestHome />;
