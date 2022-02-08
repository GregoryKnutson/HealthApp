import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Image, useWindowDimensions, GestureResponderEvent} from "react-native"
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

function HomeScreen() { 
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    const navigation = useNavigation<any>()

    
    return (
        <View style={[styles.root, {height: height * 0.3}]}>
            <Image
            style={styles.Logo}
            source={logo}
            resizeMode="contain"
            />
            <Text>Home Screen</Text>
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

export default HomeScreen;