import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { screenHeight, screenWidth } from '../components/Input'
import Logout from '../components/Logout'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLogout } from '../redux/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const SettingsScreen = () => {
  const user= useSelector(state => state.userSlice.user)
  const dispatch = useDispatch()
  const handleLogout = ()  => {
    try {
      signOut(auth).then(() => {
        dispatch(setUserLogout())
      })
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
        <Text>Email:{user.email}</Text>
        <Logout onPress={handleLogout} />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
  },
  header: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    marginTop: screenHeight / 16,
    borderBottomWidth: 2,
  },
  headerText:{
    fontSize:24,
    fontWeight:"700",
  }
})