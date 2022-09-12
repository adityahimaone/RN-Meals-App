import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Shadow from "../constants/shadow";
import Colors from "../constants/colors";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

export default function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = selectedMeal;

  const detailsProps = {
    duration,
    complexity,
    affordability,
  };

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <View>
          <MealDetails
            detailsItem={detailsProps}
            textStyle={styles.textMealDetails}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  textMealDetails: {
    padding: 5,
    color: Colors.primary,
    backgroundColor: Colors.quaternary,
    borderRadius: 4,
    fontSize: 12,
    ...Shadow,
  },

  contentContainer: {
    marginHorizontal: 20,
  },
});
