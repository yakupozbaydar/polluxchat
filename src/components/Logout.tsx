import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screenHeight, screenWidth } from './Input'

const Logout = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Log Out</Text>
    </TouchableOpacity>
    )
}

export default Logout

const styles = StyleSheet.create({
    button:{
        position:"absolute",
        bottom:20,
        justifyContent:"center",
        alignItems:"center",
        width:screenWidth/3,
        height:screenHeight/12,
        backgroundColor:"red",
        borderRadius:10,
    },
    text:{
        fontSize:18,
        fontWeight:"700"
    }
})