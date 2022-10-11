import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Chats from './Chats';
import { screenHeight } from './Input';
import { useNavigation } from '@react-navigation/native';
import Search from './Search';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../redux/store';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { search } from '../redux/searchSlice';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const progress = useSharedValue(72)
  const dispatch = useDispatch()
  const searchRes = useSelector<UserState>(state => state.searchSlice)
  const animatedView = useAnimatedStyle(() => {
    return {
      width:withSpring(progress.value)
    }
  })

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
  return (
    <Animated.View style={[styles.container, animatedView]}>
      <Search isOpen={isOpen} onPress={handleSearch} />
      <View style={styles.list}>
        {!isOpen ?
          <ScrollView>
          </ScrollView>
          : <ScrollView>
            {searchRes.email != undefined && <Chats isOpen={isOpen} name={searchRes.username} />}
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