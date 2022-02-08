import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

type Props = {
    placeholder: string;
    type?: string;
    onPress: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<Props> = ({placeholder, onPress, type="PRIMARY"}) =>{
    return(
        <Pressable  onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{placeholder}</Text>
        </Pressable>
    )
}

const styles : any = StyleSheet.create({
    container:{
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,

    },
    container_PRIMARY:{
        backgroundColor: '#3B71F3',

    },
    container_TERTIARY:{
        borderColor: '#e8e8e8',
    },

    text:{
        color: 'white'
    },
    text_TERTIARY:{
        color: 'black'
    }
})

export default CustomButton