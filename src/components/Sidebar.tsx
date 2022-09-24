import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Chats from './Chats';
import { screenHeight } from './Input';
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name='search' size={32} />
        </TouchableOpacity>
      <View style={styles.list}>
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")} style={styles.settings}>
          <Ionicons name='settings-outline' size={32} />
        </TouchableOpacity>
    </View>
  )
}

export default Sidebar

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection:"column",
  },
  list: {
    alignItems:"center",
    flexDirection: "column",
    marginTop: 20,
  },
  button:{
    marginTop:screenHeight/13,
  },
  settings:{
    flexDirection:"column-reverse",
    flex:1,
    marginBottom:screenHeight/40,
    
  }
})