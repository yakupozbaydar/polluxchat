import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Chats = () => (
    <TouchableOpacity style={styles.container}>

        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} style={{  width: 50, height: 50, borderRadius: 25,borderWidth:2,borderColor:"black" }} />
        <View style={styles.notDot}>
            <Text style={styles.notText}>2</Text>
        </View>
    </TouchableOpacity>
)

export default Chats

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom:10,
    },
    notDot:{
        marginLeft:-8,
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
    },
    notText:{
        fontSize:12,
    }
})