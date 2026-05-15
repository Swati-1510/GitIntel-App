import { StyleSheet, Text, View,Image } from 'react-native'
import {Octicons} from "@expo/vector-icons";
import React from 'react'

const ProfileCard = () => {
  return (
    <View style={styles.cardShell}>
        <View style={styles.topContainer}>
            <View>
                <Image/>
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
        height:"70%",
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
    }


});