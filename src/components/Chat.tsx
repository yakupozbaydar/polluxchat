import { KeyboardAvoidingView, StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'
import Messages from './Messages'
import Input from './Input'
import { screenWidth, screenHeight } from "./Input"
import { useSelector } from 'react-redux'
import chatSlice from '../redux/chatSlice'


const Chat = () => {
  const user = useSelector(state => state.chatSlice.user)
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 5 }} />
        <Text>{user?.username}</Text>
      </View>
      <View style={styles.chat}>
        <Messages />
      </View>
      <View style={styles.input}>
        <Input/>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    borderLeftWidth: 2,
    padding: 10,
    flex:1,
    marginTop: screenHeight / 20,
    borderRadius: 30,
  },
  headerContainer: {
    height: 50,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 2,

  },
  chat: {
    flex:1,
  },
  input:{
    justifyContent:"center",
    alignItems:"center",
    height:screenHeight/16,
  }
})