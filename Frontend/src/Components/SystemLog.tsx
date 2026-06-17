import { StyleSheet, Text, View } from "react-native";
import Icon from "../assets/Icons/SysIcon.svg";
import React from "react";

const SystemLog = () => {
  return (
    <View style={styles.cardShell}>
      {/* Top Header Bar */}
      <View style={styles.topContainer}>
        <View style={styles.dots}>
          <View style={styles.dot1} />
          <View style={styles.dot2} />
          <View style={styles.dot3} />
        </View>

        <Text style={styles.headerTitle}>
          GITINTEL SYSTEM LOG — LIVE_FETCHER_V2.0
        </Text>
        <Icon width={20} height={20} />
      </View>

      {/* Terminal Console Output Screen Body */}
      <View style={styles.mainContainer}>
        
        {/* Row 1: FETCH */}
        <View style={styles.logRow}>
          <Text style={styles.timeStamp}>[14:22:01]</Text>
          <Text style={styles.fetchStatus}>FETCH</Text>
          <Text style={styles.logText}>
            Initializing secure handshake with api.github.com/v4/
          </Text>
        </View>

        {/* Row 2: SUCCESS */}
        <View style={styles.logRow}>
          <Text style={styles.timeStamp}>[14:22:02]</Text>
          <Text style={styles.successStatus}>SUCCESS</Text>
          <Text style={styles.logText}>
            Secure connection established with remote cluster safely.
          </Text>
        </View>

        {/* Row 3: DATA */}
        <View style={styles.logRow}>
          <Text style={styles.timeStamp}>[14:22:03]</Text>
          <Text style={styles.dataStatus}>DATA</Text>
          <Text style={styles.logText}>
            Streaming user schema profiles and indexing dependency trees.
          </Text>
        </View>

        {/* NEW Row 4: WARN */}
        <View style={styles.logRow}>
          <Text style={styles.timeStamp}>[14:22:04]</Text>
          <Text style={styles.warnStatus}>WARN</Text>
          <Text style={styles.logText}>
            Rate limit approaching threshold balance (4982/5000 requests left).
          </Text>
        </View>

        {/* NEW Row 5: DONE */}
        <View style={styles.logRow}>
          <Text style={styles.timeStamp}>[14:22:05]</Text>
          <Text style={styles.doneStatus}>DONE</Text>
          <Text style={styles.logText}>
            Architectural index parsing completed successfully in 402ms.
          </Text>
        </View>

      </View>
    </View>
  );
};

export default SystemLog;


const styles = StyleSheet.create({
  cardShell: {
    backgroundColor: "#1E2020",
    borderRadius: 15,
    padding: 0,
    borderColor: "#27272A",
    marginBottom: 16,
    margin: 15,
    overflow: "hidden",
    borderWidth: 3,
    borderBottomColor: "#080808",
    borderRightColor: "#080808",
    borderLeftColor: "#222225",
    borderTopColor: "#222225",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    backgroundColor: "#323737a5",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderBottomColor: "#71717A",
  },
  dots: {
    flexDirection: "row",
    gap: 6,
  },
  dot1: { height: 12, width: 12, borderRadius: 6, backgroundColor: "#EF4444" },
  dot2: { height: 12, width: 12, borderRadius: 6, backgroundColor: "#EAB308" },
  dot3: { height: 12, width: 12, borderRadius: 6, backgroundColor: "#22C55E" },
  headerTitle: {
    color: "#71717A",
    fontSize: 11,
    fontWeight: "800",
    fontFamily: "Libertinus-Mono",
  },

  // --- TERMINAL INTERNAL CONTENT FIXED STYLES ---
  mainContainer: {
    backgroundColor: "#0D0D0D",
    paddingVertical: 14,
    paddingHorizontal: 14,
    // CONCEPT: Automatic Layout Spacing
    // This injects 12px of vertical room between every row safely!
    gap: 12, 
  },
  logRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    // CONCEPT: Content Truncation Bounds
    // Giving the row container 'flexShrink: 1' stops it from going off-screen!
    flexShrink: 1, 
    gap: 10,
  },
  timeStamp: {
    color: "#52525B",
    fontSize: 13,
    fontWeight: "500",
    width: 88, // FIXED: Gives the timestamp a stable width so statuses align perfectly!
  },
  logText: {
    flex: 1, // Grasps 100% of whatever width is remaining inside the card boundaries
    color: "#A1A1AA",
    fontSize: 13,
    lineHeight: 18,
  },

  // --- REUSABLE STATUS BADGE COLOR CONFIGURATIONS ---
  fetchStatus: {
    color: "#ADC6FF", // Soft Blue
    fontSize: 13,
    fontWeight: "700",
    width:85,        // Fixed width ensures alignment matches up row by row
  },
  successStatus: {
    color: "#40DFD2", // Vibrant Turquoise/Green
    fontSize: 13,
    fontWeight: "700",
    width:85,
  },
  dataStatus: {
    color: "#C084FC", // Soft Purple
    fontSize: 13,
    fontWeight: "700",
    width: 85,
  },
  warnStatus: {
    color: "#F59E0B", // Amber Warning Orange
    fontSize: 13,
    fontWeight: "700",
    width: 85,
  },
  doneStatus: {
    color: "#22C55E", // Rich Finished Green
    fontSize: 13,
    fontWeight: "700",
    width: 85,
  },
});
