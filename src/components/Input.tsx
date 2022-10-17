import { StyleSheet,TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { screenHeight } from '../constants/Dimensions';

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Mesaj...' style={{flex:1}}/>
      <TouchableOpacity onLongPress={() => console.log("long")} style={styles.send}>
        <Feather name="send" size={24} color="black" />
      </TouchableOpacity>
      </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    height: screenHeight/16,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius:50,
    alignItems:"center",
  },
  send:{
    marginRight:5,
  }
})