import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icon from "../assets/Icons/RetryIcon.svg";

const CompareHeader = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
            <Text style={styles.headerText}>
                Developer Comparison
            </Text>
            <Text style={styles.idText}>
                System ID: INTEL-VS-8829
            </Text>
        </View>

        <View style={styles.rightContainer}>
            <Pressable style={styles.analysisButton}>
                <Icon width={10} height={20}/>
                <View style={styles.buttonTextStack}>
    <Text style={styles.buttonText}>RE-RUN</Text>
    <Text style={styles.buttonText}>ANALYSIS</Text>
  </View>
            </Pressable>
        </View>
      
    </View>
  )
}

export default CompareHeader

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 24,
    marginHorizontal: 15,
    flexDirection: "row",
    // CONCEPT: Horizontal Distribution
    // This forces the text box to the far left and the button to the far right!
    justifyContent: "space-between", 
    // CONCEPT: Vertical Center Alignment
    // This lines up the center of the button with the center of your 2-line title!
    alignItems: "center",            
  },
  leftContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1, // Let's give text the primary share of the space safely
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 28, // Scaled down from 34 so it fits beautifully next to a button!
    fontWeight: "700",
    lineHeight: 32,
  },
  idText: {
    color: "#71717A",
    fontSize: 12,
    fontWeight: "400",
    marginTop: 6,
  },
  rightContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    },
  analysisButton: {
    flexDirection: "row",       // Places the Icon and Text stack side-by-side
    alignItems: "center",       // Centers the icon vertically next to the text lines
    backgroundColor: "#0D0D0E", // Very dark box fill (darker than the app background)
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    gap: 8,                     // Injects clean space between the icon and the text

    // THE 3D INSET EFFECT:
    borderWidth: 1,
    borderTopColor: "#222225",   // Dark top border creates the inset shadow look
    borderLeftColor: "#222225",
    borderRightColor: "#0000", // Subtle highlight borders create the box edge
    borderBottomColor: "#0000",
  },
   buttonTextStack: {
    flexDirection: "column",    // Forces RE-RUN and ANALYSIS to stack vertically
    justifyContent: "center",
  },
  buttonText: {
    color: "#ADC6FF",           // Soft neon blue font color
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 12,             // Tight line height stops lines from floating apart
    letterSpacing: 0.5,
  }
});
