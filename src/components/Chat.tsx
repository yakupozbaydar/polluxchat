import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Messages from './Messages'
import Input from './Input'
import {screenWidth,screenHeight} from "./Input"


const Chat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}} style={{width:50,height:50,borderRadius:25,marginRight:5}} />
        <Text>Mehmet</Text>
      </View>
      <View style={styles.chat}>
        <Messages />
      </View>
      <Input />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    borderLeftWidth:2,
    padding: 10,
    flex: 1,
    borderRadius:30,
  },
  headerContainer:{
    width:300,
    height:50,
    padding:10,
    justifyContent:"flex-start",
    alignItems:"center",
    marginTop:40,
    flexDirection:"row",
    borderBottomWidth:2,

  },
  chat:{
    marginBottom:screenHeight/16,
  }
})