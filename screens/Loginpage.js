import React, {useState} from 'react';
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
import {View} from 'react-native';

// Colors
const {brand, darkLight, primary } = Colors;

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    // const state = useState(false);


    return (
        
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContrainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/LogoPleaz.jpg')} />
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email:'', password: ''}}
                    onSubmit= {(values) =>  {
                        console.log(values);
                        // navigation.navigate("Home");
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                        <MyTextInput 
                            label="Email Address"
                            icon="mail"
                            placeholder="email"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            // onChangeText={(text) => this.setState({email:text})}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />

                        <MyTextInput 
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            // onChangeText={(text) => this.setState({password:text})}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />

                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={() => navigation.navigate("Home")}>
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

export default Login;