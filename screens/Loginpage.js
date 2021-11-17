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
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const { userProfile, loggingIn, doLogin, error } = useContext(mainContext); //Objects and function from App.js passed via context

    const handleMessage = (message) => {
        setMessage(message);
        // setMessageType(type);
    }


    // const handleLogin = (credentials) => {
    //     const url = 'https://pleaz.io/wp-json/wp/v2/posts/';

    //     axios
    //         .post(url, credentials)
    //         .then((response) => {
    //             const result = response.data;
    //             const {data} = result;
    //         })
    //         .catch(error => {
    //         console.log(error.JSON());
    //     })
    // }

    return (
        
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContrainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/LogoPleaz.jpg')} />
                <SubTitle>Account Login</SubTitle>

                <Formik
                    // initialValues={{username:'', password: ''}}
                    onSubmit= {() =>  {
                        if (username == '' || password == '') {
                            handleMessage('Please fill all the fields');
                        }
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
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

                        <MsgBox type={messageType}>{message}</MsgBox>
                        
                        <StyledButton title="Login to Site"
                            onPress={() => doLogin(username, password)}
                            // disabled={loggingIn}
                        >
                            <ButtonText>Login</ButtonText>
                        </StyledButton>

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