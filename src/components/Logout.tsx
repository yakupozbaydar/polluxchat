import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Logout = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>Log Out</Text>
    </TouchableOpacity>


    )
}

export default Logout

const styles = StyleSheet.create({
    button:{
        width:200,
        height:300,
        backgroundColor:"red"
    }
})