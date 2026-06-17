import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Star from "../assets/Icons/starIcon.svg";
import Followers from "../assets/Icons/followersIcon.svg";
import Repo from "../assets/Icons/repoIcon.svg";

const CompareUserCard = ({
  username,
  title,
  location,
  imageSource,
  stars,
  followers,
  repoActivity,
  languages,
}: any) => {
  return (
    <View style={styles.cardShell}>
      {/* MAIN HEADER ROW: Holds the avatar photo on the left, text stack on the right */}
      <View style={styles.profileHeaderRow}>
        {/* Left Side: Image Container Box */}
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>

        {/* Right Side: Stacks the text components vertically */}
        <View style={styles.textStackColumn}>
          {/* Row A: Handles Username and the Rank Badge side-by-side */}
          <View style={styles.nameAndTagRow}>
            <Text style={styles.usernameText}>{username}</Text>
          </View>

          {/* Row B: Handles location text directly beneath the name block */}
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>
              {title} • {location}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.metricContainer}>
        <View style={styles.metricBox}>
          <Star width={21} height={21} />
          <Text style={styles.metricText}>STAR COUNT</Text>
          <Text style={styles.countText}>{stars}</Text>
        </View>

        <View style={styles.metricBox}>
          <Followers width={21} height={21} />
          <Text style={styles.metricText}>FOLLOWERS</Text>
          <Text style={styles.countText}>{followers}</Text>
        </View>

        <View style={styles.metricBox}>
          <Repo width={21} height={21} />
          <Text style={styles.metricText}>REPO ACTIVITY</Text>
          <Text style={styles.countText}>{repoActivity}</Text>
        </View>
      </View>

      <View style={styles.metricBox2}>
        <View style={styles.contributionHeatBox}>
          <Text style={styles.boxText}>CONTRIBUTION HEAT</Text>
        </View>

        <View style={styles.PrimaryStackBox}>
          <Text style={styles.stackboxText}>PRIMARY STACK</Text>

          <View style={styles.stack}>
            {languages?.map((lang: string, index: number) => (
              <View key={index} style={styles.langBadge}>
                <Text style={styles.langText}>{lang}</Text>
              </View>
            ))}
          </View> 
        </View>
      </View>
    </View>
  );
};

export default CompareUserCard;

const styles = StyleSheet.create({
  cardShell: {
    backgroundColor: "#1E2020",
    borderRadius: 15,
    padding: 15,
    borderColor: "#27272A",
    marginBottom: 10,
    margin: 15,

    // THE 3D INSET EFFECT:
    borderWidth: 3,
    borderBottomColor: "#080808", // Pure black bottom border mimics a shadow "inside"
    borderRightColor: "#080808", // Pure black right border
    borderLeftColor: "#222225", // Lighter top/left edges mimic reflections
    borderTopColor: "#222225",
  },
  profileHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 8,
    overflow: "hidden", // Crucial: Cuts off the sharp square corners of the inner image component
    marginRight: 14,
    borderWidth: 1,
    borderColor: "#27272A",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textStackColumn: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1, // Allows the text column to take up all remaining horizontal space safely
  },
  nameAndTagRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8, // Automatically injects spacing between the username and the badge box
  },
  usernameText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  locationRow: {
    marginTop: 4, // Creates clean vertical separation from the text line above
  },
  locationText: {
    color: "#71717A",
    fontSize: 13,
    // fontFamily: "Libertinus-Mono", // Seamlessly binds into your pre-loaded typography stack
  },
  metricContainer: {
    marginTop: 20,
    gap: 10,
  },
  metricBox: {
    height: 75,
    width: "100%",
    backgroundColor: "#0D0E0F",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 9,
    borderWidth: 3,
    borderTopColor: "#000",
    borderLeftColor: "#000",
    borderBottomColor: "#212125",
    borderRightColor: "#212125",
  },
  metricText: {
    paddingLeft: 15,
    color: "#A1A1AA",
    fontSize: 12,
    fontWeight: "700",
  },
  countText: {
    flex: 1,
    textAlign: "right",
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
  metricBox2: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contributionHeatBox: {
    // height:"20%",
    width: "45%",
    borderWidth: 2,
    borderRadius: 7,
    borderTopColor: "#000",
    borderLeftColor: "#000",
    borderRightColor: "#222225",
    borderBottomColor: "#222225",
  },
  boxText: {
    fontSize: 11,
    fontWeight: "300",
    color: "#71717A",
    paddingLeft: 8,
  },
  PrimaryStackBox: {
    width: "45%",
    borderWidth: 2,
    borderRadius: 7,
    borderTopColor: "#000",
    borderLeftColor: "#000",
    borderRightColor: "#222225",
    borderBottomColor: "#222225",
  },
  stackboxText: {
    fontSize: 11,
    fontWeight: "300",
    color: "#71717A",
    paddingLeft: 8,
  },
  stack: {
    flexDirection: "row",
    gap: 7,
    marginLeft: 6,
    marginTop: 5,
    marginBottom: 5,
  },
  langBadge: {
    backgroundColor: "#343535",
    paddingHorizontal: 8, // Using internal padding instead of a fixed width
    paddingVertical: 4, // ensures text like "Rust" or "TS" always fits!
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  langText: {
    color: "#E3E2E2",
    fontSize: 12,
    fontWeight: "500",
  },
});
