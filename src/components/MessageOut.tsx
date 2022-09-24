import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {screenWidth,screenHeight} from "./Input"
const MessageOut = () => {
  return (
    <View style={styles.chat}>
      <View style={styles.container}>
        <Text>MessageOut</Text>
      </View>
    </View>
    )
}

export default MessageOut

const styles = StyleSheet.create({
  container: {
    maxWidth:screenWidth*8/10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    margin: 10,
    borderWidth:1,
    padding:10,
  },
  chat:{
    flexDirection:"row-reverse",
  }
})