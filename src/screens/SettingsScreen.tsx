import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { screenHeight, screenWidth } from '../components/Input'
import Logout from '../components/Logout'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLogout } from '../redux/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { UserState } from '../redux/stroje'

const SettingsScreen = () => {
  const user = useSelector<UserState>(state => state)
  const dispatch = useDispatch()
  const handleLogout = () => {
    try {
      signOut(auth).then(() => {
        dispatch(setUserLogout())
        console.log(user)
        console.log(auth.currentUser);
        console.log("çıkıldı");
      })
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24 }}>Settings</Text>
        <Logout onPress={handleLogout} />
      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    marginTop: screenHeight / 16,
    borderBottomWidth: 1,
  }
})