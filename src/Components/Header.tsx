import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from "../assets/Icons/icon.svg";

const Header = () => {
  return (
    <SafeAreaView style = {styles.mainContainer} edges={['top']} >
        <View style = {styles.container}>
            <View style = {styles.leftSection}>
                 <Logo width={25} height={45}/>
                 <Text style= {styles.headerText}>GITINTEL</Text>
            </View>
            
            <View style = {styles.userprofile} >
            <Image source={require("../assets/Images/User Profile.png")} style = {styles.profileIcon}/>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor : '#18181B',
        borderBottomWidth : 2 ,
        borderBlockColor : '#27272A'
    },
    container : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        height : 60,
        paddingHorizontal :15  
    },
    leftSection :{
        flexDirection : "row",
        alignItems:"center",
        flex : 1
    },
    headerText :{
        paddingLeft : 10,
        fontSize : 18,
        fontWeight : "900",
        fontFamily : "Libertinus-Mono",
        color :"#007AFF"

    },
    userprofile:{
       justifyContent : "center",
       alignItems : "flex-end"
    },
    profileIcon :{
        width : 35,
        height : 35,
        borderRadius : 17.5       
}

})