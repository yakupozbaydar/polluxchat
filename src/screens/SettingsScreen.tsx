import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
        marginTop:50,
        borderBottomWidth:1,
    }
})