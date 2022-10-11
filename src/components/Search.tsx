import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { screenHeight } from './Input';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { search } from '../redux/searchSlice';

type SearchProps = {
  onPress: () => {},
  isOpen: boolean,
}

const Search: React.FC<SearchProps> = ({ onPress, isOpen }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState("")
  const handleSearch = async () => {
    const q = query(collection(db,"users"),where("username","==",text))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      dispatch(search(doc.data()))
    })
  }
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Ionicons style={{flex:1}} name='search' color={"black"} size={32} />
        {isOpen && <TextInput  onSubmitEditing={handleSearch} onChangeText={e => setText(e)} clearTextOnFocus clearButtonMode='always' placeholderTextColor={"black"} placeholder="Search" autoCorrect={false} autoFocus style={styles.input} />}
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    backgroundColor: "#fff",
    borderWidth:1,
    padding: 8,
    borderRadius: 25,
    flexDirection: "row",
  },
  input: {
    fontSize:14,
    color:"black",
    width:108,
  },
  view: {
    marginTop: screenHeight / 15,
    flexDirection: "row"
  }
})