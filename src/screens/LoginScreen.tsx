import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Button1 from '../components/Button1'
import { useNavigation } from '@react-navigation/native'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { UserDispatch, UserState } from '../redux/stroje'
import { pendingEnd, pendingEndWithAlert, pendingStart, setActiveUser } from '../redux/userSlice'

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch<UserDispatch>()
  const pending = useSelector<UserState>(state => state.userSlice.pending)
  useEffect(() => {
    dispatch(pendingEnd())
  }, [])
  const handleLogin = () => {
    dispatch(pendingStart())
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        dispatch(setActiveUser(userCredentials.user))
      })
      .catch(error => dispatch(pendingEndWithAlert(error)))
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} >
      <View style={styles.innerContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 28, fontWeight: "900" }}>
            polluxchat
          </Text>
          <Text style={{ fontSize: 22 }}>
            Giriş Yap
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput onChangeText={(e) => setEmail(e)} keyboardType='email-address' placeholder='E-mail' style={styles.input} />
          <TextInput autoCorrect={false} onChangeText={(p) => setPassword(p)} placeholder='Şifre' secureTextEntry style={styles.input} />
        </View>
        <Button1 pending={pending} text='Giriş Yap' onPress={handleLogin} />
        <View style={styles.textContainer}>

          <Text style={styles.text2}>
            Hesabın yok mu?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen" as never)}>
            <Text style={styles.text1}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "#000000",
    width: 330,
    height: 50,
    margin: 20,
    paddingLeft: 15,
    borderRadius: 30,
  },
  innerContainer: {
    padding: 20,
    borderRadius: 40,
    alignItems: "center",
    backgroundColor: "white",
    width: 370,
    height: 500,
  },
  text1: {
    fontSize: 16,
    fontWeight: "700"
  },
  text2: {
  },
  textContainer: {
    flexDirection: "row",
    margin: 30,
  },
  inputContainer: {
    flex: 1,
  }
})