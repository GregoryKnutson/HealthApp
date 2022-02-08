import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

type Props = {
    value: string;
    placeholder: string
    setValue: (val :string) => void;
    isPassword?: boolean
}

const CustomInput: React.FC<Props> = ({placeholder, value, setValue, isPassword=false}) =>{
    return(
        <View style={styles.container}>
            <TextInput 
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={setValue}
                secureTextEntry={isPassword}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,

    },
    input:{
        height: 30
    },
})

export default CustomInput