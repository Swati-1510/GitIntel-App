import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style = {styles.container}>
      <TextInput
        placeholder='Search repositories, users, or architectural patterns...'
        style = {styles.input}  
       />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container :{
        flex :1,
        justifyContent:"center",
        alignItems:"center",
        paddingTop:15,
    },
    input:{
        width:485,
        height:65,
        padding :5,
        borderWidth:1,
        borderRadius : 5,
        backgroundColor:"white"
    },


})