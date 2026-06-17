import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import SkillIcon from "../assets/Icons/skill.svg";
import Icon from "../assets/Icons/infoIcon.svg";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";

const SkillHeatmapCard = () => {
  return (
    <View style={styles.cardShell}>
      <View style={styles.container1}>
        <SkillIcon style={styles.skillIcon} width={22} height={22} />
        <Text style={styles.headerText}>Skill Heatmap</Text>
        <Icon width={20} height={20} />
      </View>
      <View>
        <View style={styles.firstRow}>
          <Text style={styles.techText1}>TypeScript</Text>
          <Text style={styles.percentText1}>60%</Text>
        </View>

        <View style={styles.progressBarTrack}>
          <LinearGradient colors={['#78a0ff', '#ADC6FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.progressFill1} />
        </View>

        <View style={styles.secondRow}>
          <Text style={styles.techText2}>React / Next.js</Text>
          <Text style={styles.percentText2}>30%</Text>
        </View>

        <View style={styles.progressBarTrack}>
          <LinearGradient colors={["#98f5ed", "#18eddb"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.progressFill2} />
        </View>

        <View style={styles.thirdRow}>
          <Text style={styles.techText3}>Rust / Cargo</Text>
          <Text style={styles.percentText3}>10%</Text>
        </View>

        <View style={styles.progressBarTrack}>
          <LinearGradient colors={["#A1A1AA", "#707076"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.progressFill3} />
        </View>
      </View>

      <View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>VIEW FULL MATRIX</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SkillHeatmapCard;

const styles = StyleSheet.create({
  cardShell: {
    backgroundColor: "#1E2020",
    borderRadius: 15,
    padding: 15,
    borderColor: "#27272A",
    marginBottom: 16,
    margin: 15,

    borderWidth: 3,
    borderBottomColor: "#080808", // Pure black top border mimics a shadow "inside"
    borderRightColor: "#080808",
    borderLeftColor: "#222225", // Lighter right/bottom edges look like
    borderTopColor: "#222225",
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
  },
  skillIcon: {
    marginRight: 10,
  },
  headerText: {
    color: "#E3E2E2",
    fontSize: 16,
    fontWeight: "400",
    flex: 1,
  },
  firstRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  techText1: {
    flex: 1,
    color: "#E3E2E2",
    fontSize: 12,
  },
  percentText1: {
    color: "#ADC6FF",
    fontSize: 12,
  },
  progressBarTrack: {
    height: 10,
    width: "100%",
    backgroundColor: "#121414",
    borderRadius: 10,
    borderTopColor: "#080808",
    borderBottomColor: "#2b2b2b",
    marginTop: 8,
  },
  progressFill1: {
    height: "100%",
    width: "60%",
    borderRadius: 10,
    backgroundColor: "#ADC6FF",
  },
  secondRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  techText2: {
    flex: 1,
    color: "#E3E2E2",
    fontSize: 12,
  },
  percentText2: {
    color: "#40DFD2",
    fontSize: 12,
  },
  progressFill2: {
    height: "100%",
    width: "30%",
    borderRadius: 10,
    backgroundColor: "#40DFD2",
  },
  thirdRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  techText3: {
    flex: 1,
    color: "#E3E2E2",
    fontSize: 12,
  },
  percentText3: {
    color: "#A1A1AA",
    fontSize: 12,
  },
  progressFill3: {
    height: "100%",
    width: "10%",
    borderRadius: 10,
    backgroundColor: "#A1A1AA",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "#1E2020",
    borderWidth: 2,
    borderBottomColor: "#080808", // Pure black top border mimics a shadow "inside"
    borderRightColor: "#080808",
    borderLeftColor: "#353535", // Lighter right/bottom edges look like
    borderTopColor: "#353535",
    borderRadius: 8,
  },
  buttonText: {
    color: "#ADC6FF",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
