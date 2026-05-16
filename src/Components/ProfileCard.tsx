import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import {Octicons} from "@expo/vector-icons";
import React from 'react'

const ProfileCard = () => {
  return (
    <View style={styles.cardShell}>
        <View style={styles.topContainer}>
            <View style={styles.ImageContainer}>
            <Image source={require("../assets/Images/Avatar.png")} style = {styles.image}/>
            <View style={styles.dotStatus}></View>
            </View>
        </View>

        <View style={styles.secondContainer}>
            <Text style={styles.text}>Alex Rivera</Text>
            <View style={styles.tag}>
                    <Text style={styles.labelText}>PRO ARCHITECT</Text>
            </View>
        </View>

        <View style={styles.thirdContainer}>
            <Text style={styles.usernameText}>@arivera_dev</Text>
            <Text style={styles.dotDivider}>•</Text>
            <Text style={styles.locationText}>San Francisco,  CA</Text>
        </View>
  
        <Text style={styles.bioText}>
            Specializing in distributed systems and high-performance Rust backends.Contributor to major OSS cloud-native tooling and advocate for memory-safe engineering.
        </Text>

        <View style={styles.lastContainer}>
            <View>
                <Text style={styles.num1}>12.4k</Text>
                <Text style={styles.numText1}>FOLLOWERS</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View>
                <Text style={styles.num2}>842</Text>
                <Text style={styles.numText2}>CONTRIBUTIONS</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View>
                <Text style={styles.num3}>42</Text>
                <Text style={styles.numText3}>REPOSITORIES</Text>
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
        bottom:3,
        right:3,
        borderWidth:3,
        borderColor:"#1E2020"
    },
    secondContainer :{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        marginTop:24,
        marginBottom:3
    },
    text:{
        color:"#fff",
        fontWeight:"600",
        paddingRight:20,
        fontSize:16,

    },
    tag:{
        backgroundColor:"#adc6ff2b",
        padding:7,
        paddingVertical:4,
        paddingHorizontal:8,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#ADC6FF",
        borderRadius:4
        
    },
    
    labelText:{
        fontSize:9,
        fontWeight:"700",
        color:"#ADC6FF"

    },
    thirdContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    usernameText:{
        color:"#71717A",
        fontSize:14,
    },
    dotDivider:{
        color:"#71717A",
        paddingLeft:6,
        paddingRight:6
    },
    locationText:{
        color:"#71717A",
        fontSize:14,

    },
    bioText:{
        color:"#C1C6D7",
        fontSize:14,
        textAlign:"left",
        lineHeight:20,
        marginTop:14,
        paddingRight:15

    },
    lastContainer:{
        flexDirection:"row",
        marginTop:20,
        justifyContent:"space-between"
    },
    followersContainer:{

    },
    num1:{
        color:"#ADC6FF",
        fontSize:22,
        fontWeight:"bold"
    },
    numText1:{
        color:"#52525B",
        fontSize:11,
        fontWeight:"bold"
    },
    num2:{
        color:"#40DFD2",
        fontSize:22,
        fontWeight:"bold"
    },
    numText2:{
        color:"#52525B",
        fontSize:11,
        fontWeight:"bold"
    },
    num3:{
        color:"#E3E2E2",
        fontSize:22,
        fontWeight:"bold"

    },
    numText3:{
        color:"#52525B",
        fontSize:11,
        fontWeight:"bold"
    },
    verticalDivider:{
        width:1,
        height:"80%",
        backgroundColor:"#35353a",
        alignSelf:"center"
    }
    


});