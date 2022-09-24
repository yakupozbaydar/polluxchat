import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Chats from './Chats';

const Sidebar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name='search' size={32} />
        </TouchableOpacity>
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        </View>
    </View>
  )
}

export default Sidebar

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  list: {
    alignItems:"center",
    flexDirection: "column",
    marginTop: 50,
  },
  button:{
    marginTop:20,
    marginBottom:10,
  },
})