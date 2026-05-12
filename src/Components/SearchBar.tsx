import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef } from 'react'; // Added useRef

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  // Concept: useRef (Direct Access)
  // We use a "ref" to manually tell the input to focus if the View is tapped
  const inputRef = useRef<TextInput>(null);

  return (
    <Pressable 
      onPress={() => inputRef.current?.focus()} // Focus input when clicking anywhere on the bar
      style={[styles.container, isFocused ? styles.containerFocused : null]}
    >
      <Ionicons name="search" size={18} color="#52525B" style={styles.icon} />
      
      <TextInput
        ref={inputRef} // Connect the ref
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardAppearance="dark"
        placeholder="Search repositories, users, or architect..."
        placeholderTextColor="#52525B"
        style={styles.input} 
      />

      <View style={styles.kkey}>
        <Text style={styles.kText}>⌘ K</Text>
      </View>
    </Pressable>
  );
};



export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // 1. Use a color DARKER than your main app background (#121414)
    backgroundColor: "#09090B",
    borderRadius: 8,
    height: 65,
    paddingHorizontal: 12,
    marginHorizontal: 8,
    marginTop: 15,

    // 2. THE DEPTH TRICK:
    borderWidth: 1,
    borderTopColor: "#000000", // Pure black top border mimics a shadow "inside"
    borderLeftColor: "#000000",
    borderRightColor: "#27272A", // Lighter right/bottom edges look like
    borderBottomColor: "#27272A",
  },
  containerFocused:{
    borderColor: "#007AFF", 
    borderTopColor: "#007AFF",    // Overwrite the specific black top
    borderLeftColor: "#007AFF",   // Overwrite the specific black left
    borderRightColor: "#007AFF",
    borderBottomColor: "#007AFF",
    
    // Glow effect
    shadowColor: '#007AFF',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    marginLeft: 8,
  },
  kkey: {
    backgroundColor: "#18181B",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#27272A",
  },
  kText: {
    color: "#52525B",
    fontSize: 12,
    fontWeight: "600",
  },
});
