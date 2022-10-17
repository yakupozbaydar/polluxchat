import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Button1 from '../components/Button1'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { UserDispatch, UserState } from '../redux/store';
import { pendingEnd, pendingEndWithAlert, pendingStart } from '../redux/userSlice';
import { doc, setDoc } from "firebase/firestore";


const RegisterScreen = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [photo, setPhoto] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    const dispatch = useDispatch<UserDispatch>()
    const pending = useSelector<UserState>(state => state.userSlice.pending)
    const handleRegister = async () => {
        dispatch(pendingStart())
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async userCredentials => {
                await updateProfile(userCredentials.user, { displayName: userName })
                const user = userCredentials.user;
                await setDoc(doc(db, "users", user.uid), {
                    email,
                    photo,
                    uid: user.uid,
                    username: userName,
                })
                await setDoc(doc(db, "userChats", user.uid), {})
                navigation.replace("LoginScreen" as never)
                dispatch(pendingEnd())
            }).catch(error => dispatch(pendingEndWithAlert(error)))

    }
    return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"} style={styles.container}>
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
                        <TextInput value={userName} onChangeText={u => setUserName(u)} placeholder='Kullanıcı Adı' style={styles.input} />
                        <TextInput value={email} onChangeText={e => setEmail(e)} keyboardType='email-address' placeholder='E-mail' style={styles.input} />
                        <TextInput value={password} autoCorrect={false} onChangeText={p => setPassword(p)} placeholder='Şifre' secureTextEntry style={styles.input} />
                    </View>
                    <Button1 pending={pending} text='Register' onPress={handleRegister} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text2}>
                            Hesabın var mı?
                        </Text>
                        <TouchableOpacity onPress={() => { navigation.push("LoginScreen" as never) }}>
                            <Text style={styles.text1}>Giriş Yap</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        flex: 1,
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