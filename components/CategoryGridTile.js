import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

export default function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={styles.buttonRippleAndroid}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    // shadow ios
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // for ripple effect no overflow in android
    overflow: Platform.select({ android: "hidden", default: "visible" }),
  },
  button: {
    flex: 1,
  },
  buttonRippleAndroid: {
    color: "#ccc",
  },
  // ios
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
