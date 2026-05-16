import { StyleSheet, Text, View,Image } from 'react-native'
import {Octicons} from "@expo/vector-icons";
import React from 'react'

const ProfileCard = () => {
  return (
    <View style={styles.cardShell}>
        <View style={styles.topContainer}>
            <View style={styles.ImageContainer}>
            <Image source={require("../assets/Images/User Profile.png")} style = {styles.image}/>
            <View style={styles.dotStatus}></View>
            </View>


        </View>

    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    cardShell:{
        backgroundColor:"#1E2020",
        borderRadius:15,
        padding:15,
        borderColor:"#27272A",
        marginBottom:16,
        margin:15,

        borderWidth: 3,
        borderBottomColor: "#080808", // Pure black top border mimics a shadow "inside"
        borderRightColor: "#080808",
        borderLeftColor: "#1F1F1F", // Lighter right/bottom edges look like
        borderTopColor: "#1F1F1F",
    },
    topContainer :{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    ImageContainer:{
        height:128,
        width:128,
        borderRadius:12,
        borderWidth:2,
        borderColor:"#ADC6FF",
        position: "relative"

    },
    image:{
        height:"100%",
        width:"100%",
        borderRadius:12,
    },
    dotStatus:{
        width:16,
        height:16,
        backgroundColor:"#22C55E",
        borderRadius:9,
        position:"absolute",
        bottom:0,
        right:0,
        borderWidth:3,
        borderColor:"#1E2020"
    }
    


});