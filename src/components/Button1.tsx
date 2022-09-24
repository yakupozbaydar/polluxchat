import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type ButtonProps = {
    text:string,
    onPress:() => void
}


const Button1:React.FC<ButtonProps> = ({text,onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button1

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFC600",
        width:150,
        height:70,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:40,
    }
})