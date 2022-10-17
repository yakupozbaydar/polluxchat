import { ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Chats from './Chats';
import { useNavigation } from '@react-navigation/native';
import Search from './Search';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { pendingEnd, pendingStart, search } from '../redux/searchSlice';
import { doc, getDoc,onSnapshot,serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { changeChat } from '../redux/chatSlice';
import { screenHeight } from '../constants/Dimensions';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const progress = useSharedValue(72)
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.userSlice.user)
  const searchRes = useSelector(state => state.searchSlice)
  const [chats, setChats] = useState([])
  const animatedView = useAnimatedStyle(() => {
    return {
      width: withSpring(progress.value)
    }
  })
  useEffect(() => {
    const getChats = () => {
    const unsub = onSnapshot(doc(db,"userChats",currentUser.uid),(doc) => {
      setChats(doc.data())
      return () => {
        unsub();
      }
    })}
    {currentUser.uid && getChats()}
  }, [currentUser.uid])
  const navigation = useNavigation()
  const handleSearch = async () => {
    if (isOpen == false) {
      setIsOpen(true)
      progress.value = 168
    }
    else {
      dispatch(search({}))
      setIsOpen(false)
      progress.value = 72
    }
  }
  const handleSelect = async () => {
    dispatch(pendingStart())
    const derivedId = 
    currentUser.uid > searchRes.uid 
    ? currentUser.uid + searchRes.uid
    : searchRes.uid + currentUser.uid;
         
    try {
      const res = await getDoc(doc(db,"chats",derivedId))
      if(!res.exists()){
        //create chat collection
        await setDoc(doc(db,"chats",derivedId),{messages:[]})
        //create user chats
        await updateDoc(doc(db,"userChats",currentUser.uid),
        {
          [derivedId+".userInfo"]:{
            uid:searchRes.uid,
            username:searchRes.username,
          },
          [derivedId+".date"]:serverTimestamp()
        })
        await updateDoc(doc(db,"userChats",searchRes.uid),
        {
          [derivedId+".userInfo"]:{
            uid:currentUser.uid,
            username:currentUser.username,
          },
          [derivedId+".date"]:serverTimestamp()
        })
      }
      dispatch(pendingEnd())
      handleSearch()
    } catch (error) {
      console.log(error);
    }
  }
  const handleChat = (userInfo,currentUserUid) => {
    dispatch(changeChat({userInfo,currentUserUid}))
  }

  return (
    <Animated.View style={[styles.container, animatedView]}>
      <Search isOpen={isOpen} onPress={handleSearch} />
      <View style={styles.list}>
        {!isOpen ?
          <ScrollView>
            {Object.entries(chats).map((chat) => (
              <Chats name={chat[1].userInfo.username} isOpen={false} onPress={() => handleChat(chat[1].userInfo,currentUser.uid)} />
            ) )}
          </ScrollView>
          : <ScrollView>
            {searchRes.uid != undefined && <Chats onPress={handleSelect} isOpen={isOpen} name={searchRes.username}  />}
            {searchRes.pending && <ActivityIndicator size={"small"} />}
          </ScrollView>
        }
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")} style={styles.settings}>
        <Ionicons name='settings-outline' size={32} />
      </TouchableOpacity>
    </Animated.View>
  )
}

export default Sidebar

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
  },
  list: {
    marginTop: 20,
    maxHeight: screenHeight * 7 / 9,
  },
  button: {
    marginTop: screenHeight / 13,
  },
  settings: {
    position: "absolute",
    bottom: 10,
    justifyContent: "center",
  }
})