import { StyleSheet, View, Text } from 'react-native'
import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { useSelector } from 'react-redux'
import { UserState } from '../redux/stroje'
import { auth } from '../firebase'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sidebar}>
                <Sidebar />
            </View>
            <View style={styles.chat}>
                <Chat />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    sidebar: {
        flex: 1,
        flexDirection: "row",
    },
    chat: {
        flex: 6,
    }

})