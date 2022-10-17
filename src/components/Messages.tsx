import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MessageIn from './MessageIn'
import MessageOut from './MessageOut'
import { doc, onSnapshot } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { db } from '../firebase'

const Messages = () => {
  // const [messages, setMessages] = useState([])
  // const data = useSelector(state => state.chatSlice.chatId)
  // useEffect(() => {
  //   const unsub = onSnapshot(doc(db,"chats",data),(doc) => { 
  //     doc.exists() && setMessages(doc.data().messages)})
  //     return () => {
  //       unsub()
  //     }
  // }, [])
  return (
    <View style={styles.container}>
    <ScrollView bounces alwaysBounceVertical canCancelContentTouches indicatorStyle='white' >
        <MessageIn />

    </ScrollView>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  container:{
    borderRadius:20,
    marginBottom:-5,
  }
})