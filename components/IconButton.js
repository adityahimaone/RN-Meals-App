import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";

export default function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons
        style={styles.icons}
        name={icon ? icon : "md-star"}
        size={20}
        color={color ? color : Colors.primary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icons: {
    paddingLeft: 12,
  },
  pressed: {
    opacity: 0.7,
  },
});
