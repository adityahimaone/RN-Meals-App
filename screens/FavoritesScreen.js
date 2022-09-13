import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import MealsList from "../components/MealsList/MealsList";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import Colors from "../constants/colors";

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoriteContext);

  //  get the favorite meals from the favorite meals context, includes is a method of the array object for checking if an array contains a value
  const listFavoriteMeals = MEALS.filter((mealItem) =>
    favoriteMealsCtx.ids.includes(mealItem.id)
  );

  if (listFavoriteMeals.length === 0 || !listFavoriteMeals) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={listFavoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
  },
});
