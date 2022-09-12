import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Shadow from "../constants/shadow";
import Colors from "../constants/colors";
import MealDetails from "./MealDetails";

export default function MealItem({ items }) {
  // destructuring items
  const { id, title, imageUrl, duration, complexity, affordability } = items;

  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  const detailsProps = {
    duration,
    complexity,
    affordability,
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={styles.buttonRippleAndroid}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails detailsItem={detailsProps} />
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
});
