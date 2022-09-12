import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";

import Shadow from "../constants/shadow";
import Colors from "../constants/colors";

export default function MealItem({ items }) {
  // destructuring items
  const { title, imageUrl, duration, complexity, affordability } = items;

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={styles.buttonRippleAndroid}
        style={({ pressed }) => pressed && styles.buttonPressed}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity?.toUpperCase()}</Text>
            <Text style={styles.detailItem}>
              {affordability?.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: Colors.quaternary,
    ...Shadow,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonRippleAndroid: {
    color: "#ccc",
  },
  // ios
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
