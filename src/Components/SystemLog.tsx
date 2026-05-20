import { StyleSheet, Text, View } from 'react-native';
import Icon from "../assets/Icons/SysIcon.svg"; 
import React from 'react'

const SystemLog = () => {
  return (
    <View style={styles.cardShell}>
        <View style={styles.topContainer}>
        <View style={styles.dots}>
            <View style={styles.dot1}/>
            <View style={styles.dot2}/>
            <View style={styles.dot3}/>
        </View>
            

      <Text style={styles.headerTitle}>GITINTEL SYSTEM LOG — LIVE_FETCHER_V2.0</Text>
      <Icon width={20} height={20} />
        </View>

        <View style={styles.mainContainer}>
            <Text>fjfjvkhvk</Text>
        </View>

    </View>
  )
}

export default SystemLog

const styles = StyleSheet.create({
    cardShell: {
    backgroundColor: "#1E2020",
    borderRadius: 15,
    padding: 0,
    borderColor: "#27272A",
    marginBottom: 16,
    margin: 15,
    overflow:"hidden",
    borderWidth: 3,
    borderBottomColor: "#080808", // Pure black top border mimics a shadow "inside"
    borderRightColor: "#080808",
    borderLeftColor: "#1F1F1F", // Lighter right/bottom edges look like
    borderTopColor: "#1F1F1F",
  },
  topContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    height:45,
    backgroundColor:"#323737a5",
    paddingHorizontal:12,
    borderWidth:1,
    borderBottomColor:"#71717A"
  },
  dots:{
    flexDirection:"row",
    gap:6
  },
  dot1:{
    height:15,
    width:15,
    borderRadius:10,
    backgroundColor:"#EF4444"
  },
  dot2:{
    height:15,
    width:15,
    borderRadius:10,
    backgroundColor:"#EAB308"

  },
  dot3:{
    height:15,
    width:15,
    borderRadius:10,
    backgroundColor:"#22C55E"

  },
  
  headerTitle:{
    alignItems:"center",
    color:"#71717A",
    fontSize:11,
    fontWeight: "bold",
    fontFamily: "Libertinus-Mono",
  },
  mainContainer:{
    flexDirection:"row",
    backgroundColor:"#0D0D0D"
  }
})