import React from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import SearchActive from "../../src/assets/Icons/ActiveSearch.svg";
import SearchInactive from "../../src/assets/Icons/InactiveSearch.svg";
import CompareActive from "../../src/assets/Icons/ActiveCompare.svg";
import CompareInactive from "../../src/assets/Icons/InactiveCompare.svg";
import SaveActive from "../../src/assets/Icons/ActiveSave.svg";
import SaveInactive from "../../src/assets/Icons/InactiveSave.svg";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#18181B",
          borderTopColor: "#27272A",
          borderTopWidth: 2,
          height: 85, // Increased height to accommodate glow
          paddingBottom: 12,
          paddingTop : 8
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarLabelStyle: {
          fontSize: 10,
          paddingTop:5,
          fontWeight: "bold",
          textShadowColor: "rgba(0, 122, 255, 0.8)",
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius:8,
        },
      }}
    >
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.glowActive]}>
              {focused ? (
                <SearchActive width={24} height={24} />
              ) : (
                <SearchInactive width={24} height={24} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="compare"
        options={{
          title: "Compare",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.glowActive]}>
              {focused ? (
                <CompareActive width={24} height={24} />
              ) : (
                <CompareInactive width={24} height={24} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.glowActive]}>
              {focused ? (
                <SaveActive width={24} height={24} />
              ) : (
                <SaveInactive width={24} height={24} />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius:30,
    overflow: "visible",
  },
  glowActive: {
    // Spreading light effect
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 25,
    elevation: 5, // Android fallback
  },
});

export default _layout;
