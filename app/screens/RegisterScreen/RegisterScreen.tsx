import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Image, useWindowDimensions, GestureResponderEvent} from "react-native"
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

function RegisterScreen() { 
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')
    const [userConfirmPassword, setUserConfirmPassword] = useState<string>('')
    const [userEmail, setUserEmail] = useState<string>('')

    const navigation = useNavigation<any>()

    const onSignIn = (event: GestureResponderEvent): void => {
        navigation.navigate('Login')
    }
    const onRegister = (event: GestureResponderEvent): void => {

    }
    
    return (
        <View style={[styles.root, {height: height * 0.3}]}>
            <Image
            style={styles.Logo}
            source={logo}
            resizeMode="contain"
            />
            <Text>Create an account</Text>
            <CustomInput value = {username} setValue={setUsername} placeholder="Username"/>
            <CustomInput value = {userEmail} setValue={setUserEmail} placeholder="Email"/>
            <CustomInput value = {userPassword} setValue={setUserPassword} placeholder="Password" isPassword={true}/>
            <CustomInput value = {userConfirmPassword} setValue={setUserConfirmPassword} placeholder="Confirm Password" isPassword={true}/>
            <CustomButton placeholder='Register' onPress={onRegister}/>
            <Text>
                By registering, you confirm that you accept our Terms of Use
            </Text>
            <CustomButton placeholder="Haven an account? Sign in here" onPress={onSignIn} type="TERTIARY"/>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    Header:{
        fontSize: 40,
        padding: 40
    },
    Logo:{
        maxWidth: 300,
        maxHeight: 200,
    }
})

export default RegisterScreen;