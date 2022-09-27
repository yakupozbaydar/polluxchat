import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button1 from '../components/Button1'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const RegisterScreen = () => {
    const [error, setError] = useState(false)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    const handleRegister = () => {
             createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user=userCredentials.user;
                console.log(user)
                setError(true)
                navigation.navigate("LoginScreen")
            }).catch(error => alert(error.message) )

    }
    if(!error){
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 28, fontWeight: "900" }}>
                        polluxchat
                    </Text>
                    <Text style={{ fontSize: 22 }}>
                        Kayıt Ol
                    </Text>
                </View>
                <View>
                    <TextInput value={userName}  onChangeText={u => setUserName(u)} placeholder='Kullanıcı Adı' style={styles.input} />
                    <TextInput value={email} onChangeText={e => setEmail(e)} keyboardType='email-address' placeholder='E-mail' style={styles.input} />
                    <TextInput value={password} autoCorrect={false} onChangeText={p => setPassword(p)} placeholder='Şifre' secureTextEntry style={styles.input} />
                </View>
                <Button1 text='Register' onPress={handleRegister} />
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                        Hesabın var mı ?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                        <Text style={styles.text1}>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )}
    else{
        return(
            alert("User created")
        )
    }
}

export default RegisterScreen

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
})