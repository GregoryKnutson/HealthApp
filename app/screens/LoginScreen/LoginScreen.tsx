import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Image, useWindowDimensions, GestureResponderEvent} from "react-native"
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

function LoginScreen() { 
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    const navigation = useNavigation<any>()

    const onSignIn = (event: GestureResponderEvent): void => {

    }
    const onRegister = (event: GestureResponderEvent): void => {
        navigation.navigate('Register')
    }
    
    return (
        <View style={[styles.root, {height: height * 0.3}]}>
            <Image
            style={styles.Logo}
            source={logo}
            resizeMode="contain"
            />
            <CustomInput value = {username} setValue={setUsername} placeholder="Username"/>
            <CustomInput value = {userPassword} setValue={setUserPassword} placeholder="Password" isPassword={true}/>
            <CustomButton placeholder='Sign In' onPress={onSignIn}/>
            <CustomButton placeholder="Don't have an account? Create one here." onPress={onRegister} type="TERTIARY"/>
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

export default LoginScreen;