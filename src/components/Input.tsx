import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export const screenHeight=Dimensions.get("screen").height
export const screenWidth=Dimensions.get("screen").width
const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Mesaj...' style={{flex:1}} />
      <TouchableOpacity style={styles.send}>
        <Feather name="send" size={28} color="black" />
      </TouchableOpacity>
      </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    height: 50,
    marginTop: screenHeight*11/12,
    width: 350,
    padding: 10,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    borderRadius:50,
    alignItems:"center",
  },
  send:{
    marginRight:10,
    color:"red",
  }
})