import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button1 from '../components/Button1'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 28, fontWeight: "900" }}>
            Pollux Chat
          </Text>
          <Text style={{ fontSize: 22 }}>
            Giriş Yap
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='E-mail' style={styles.input} />
          <TextInput placeholder='Şifre' secureTextEntry style={styles.input} />
        </View>
        <Button1 text='Giriş Yap' onPress={() => console.log("basıldı")} />
        <View style={styles.textContainer}>

          <Text style={styles.text2}>
            Hesabın yok mu?
          </Text>
          <TouchableOpacity>
            <Text style={styles.text1}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    padding: 15,
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
  inputContainer:{
    flex:1,
  }
})