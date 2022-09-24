import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {screenWidth,screenHeight} from "./Input"
const Message = () => {
  return (
    <View style={styles.chat}>
      <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ height: 30, width: 30, borderRadius: 15 }} />
      <View style={styles.container}>
        <Text style={{flexDirection:"column"}}>Message</Text>
      </View>
    </View>
    )
}

export default Message

const styles = StyleSheet.create({
  container: {
    maxWidth:screenWidth*8/10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    margin: 10,
    borderWidth:1,
    padding:10,
    flexDirection: "row",
  },
  chat:{
    flexDirection:"row",
  }
})