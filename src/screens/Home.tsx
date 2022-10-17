import { StyleSheet, View, Text, Animated } from 'react-native'
import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
    return (
        <View style={styles.container}>
            <Animated.View style={styles.sidebar}>
                <Sidebar />
            </Animated.View>
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
        flexDirection: "row",
    },
    chat: {
        flex:1,
    }

})