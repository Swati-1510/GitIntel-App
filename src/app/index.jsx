import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const index = () => {
  const theme = useColorScheme()
  const isDarkMode = theme === 'dark';
  const backgroundColor = isDarkMode ? "black" : "white";
  const textColor = isDarkMode ? "white" : "black";

  return (
    <View style={[styles.container , {backgroundColor:backgroundColor}]}>
      <Text style={[styles.text,{color:textColor}]}>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",

    alignItems:"center"
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    color:"white"
  }
})