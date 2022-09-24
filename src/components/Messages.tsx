import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageIn from './MessageIn'
import MessageOut from './MessageOut'

const Messages = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageOut />
    <MessageOut />
    <MessageOut />
    <MessageOut />
    <MessageOut />
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageIn />
    <MessageOut />
    <MessageOut />
    <MessageOut />
    <MessageOut />

    </ScrollView>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    marginBottom:80,
  }
})