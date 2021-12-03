import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import {Formik} from 'formik';

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContrainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    StyledButton2,
    ButtonText,
    ButtonText2,
    Colors,
    MsgBox,
    Line,
    TextUnderButton,
} from '../components/styles.js';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
  } from 'react-native';

import { TextInput, Button, Text } from 'react-native-paper';
import mainContext from '../context/Context'; //Context
import Home from './Homepage';

// Colors
const {brand, darkLight, primary } = Colors;

// API client
import axios from 'axios';

const Login = ({navigation}) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [hidePassword, setHidePassword] = useState(true);

    const [submitting, setSubmitting] = useState(null);
    const [message, setMessage] = useState();
    // const [messageType, setMessageType] = useState();


    const handleMessage = (message) => {
        setMessage(message);
        // setMessageType(type);
    }


    const doLogin = async (username, password) => {
        // console.log(email + '...' + password);
        // setloggingIn(true);
        // setError(null);

        handleMessage(null);
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

        // if( username === '' || password === '' ) {
        //     handleMessage("Please fill all the fields");
        // }

        if(!res.data.user_email) {
            handleMessage("Please fill all the fields");
        }
    
        if(!res.data.token) {
          handleMessage('error');
        } else {
          navigation.navigate('Hometab');
        }
        setSubmitting(false);
    
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
          handleMessage("An error occured. Check your network or try again");
        });
      };

    return (
        
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContrainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/LogoPleaz.jpg')} />
                <SubTitle>Account Login</SubTitle>

                <Formik
                    //initialValues={{username:'', password: ''}}
                    onPress = {({username, password, setSubmitting}) =>  {
                        if (username == '' || password == '') {
                            handleMessage("Please fill all the fields");
                            setSubmitting(false);
                        } else {
                            doLogin(username, password);
                        }
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFormArea>
                        <MyTextInput 
                            label="Email Address"
                            icon="mail"
                            placeholder="email"
                            placeholderTextColor={darkLight}
                            // onChangeText={handleChange('username')}
                            onChangeText={(username) => setUsername(username)}
                            onBlur={handleBlur('email')}
                            value={username}
                            keyboardType="email-address"
                            // disabled={loggingIn}
                        />

                        <MyTextInput 
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            // onChangeText={handleChange('password')}
                            onChangeText={(password) => setPassword(password)}
                            onBlur={handleBlur('password')}
                            value={password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            // disabled={loggingIn}
                        />

                        <MsgBox>{message}</MsgBox>
                        
                        {!isSubmitting && (
                        <StyledButton title="Login to Site"
                            onPress={() => doLogin(username, password)}
                            // disabled={loggingIn}
                        >
                            <ButtonText>Login</ButtonText>
                        </StyledButton>)}

                        {isSubmitting && (
                        <StyledButton disabled={true}>
                            <ActivityIndicator size="large" color={primary} />
                        </StyledButton>)}

                        <TextUnderButton>Lost Your Password ?</TextUnderButton>
                        <Line/>

                        
                        <StyledButton2 microsoft={true} onPress={handleSubmit}>
                            <Fontisto name="microsoft" color={primary} size={20} />
                            <ButtonText2 microsoft={true} >Login with Office365</ButtonText2>
                        </StyledButton2>

                    </StyledFormArea>)}
                </Formik>

            </InnerContrainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        backgroundColor: '#f8d7da',
        padding: 10,
        width: '80%',
        borderRadius: 5,
        borderColor: '#f5c6cb',
        marginBottom: 20,
    },
      errortext: {
        color: '#721c24',
    }
});

export default Login;