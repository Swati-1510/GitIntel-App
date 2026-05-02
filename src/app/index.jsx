import { StyleSheet, Text, useColorScheme, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements';

const index = () => {
  const theme = useColorScheme()
  const isDarkMode = theme === 'dark';
  const backgroundColor = isDarkMode ? "black" : "white";
  const textColor = isDarkMode ? "white" : "black";

  return (
    <View style={[styles.container , {backgroundColor:backgroundColor}]}>
      <Text style={[styles.text,{color:textColor}]}>index</Text>
      <Image style = {styles.image}
       source = {{uri : "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}/>
       <TouchableOpacity style = {styles.button}>
        <Text style = {styles.text}> Toch meee</Text>
       </TouchableOpacity>
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
  },
  image:{
    height : 300,
    width:300,
    backgroundImage:"cover",
  },
  button :{
    marginTop:20,
    height : 60,
    width:200,
    backgroundColor:"black",
    borderRadius :50
  },
  text:{
    textAlign:"center",
    marginTop:15,
    color:"white"
  }
})