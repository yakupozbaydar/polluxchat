import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { screenHeight, screenWidth } from '../components/Input'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={{fontSize:24}}>Settings</Text>
    </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    header:{
        width:screenWidth,
        justifyContent:"center",
        alignItems:"center",
        marginTop:screenHeight/16,
        borderBottomWidth:1,
    }
})