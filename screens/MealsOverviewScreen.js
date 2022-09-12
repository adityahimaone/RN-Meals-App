import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
// import { useRoute } from "@react-navigation/native"; -> use this if component not a registered screen

import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen({ route, navigation }) {
  //   const route = useRoute(); -> use this if component not a registered screen

  const categoryId = route.params.categoryId;

  // display meals if meals are in the category id
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  //   get the category title
  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  ).title;

  const renderMealItem = (itemData) => {
    return <MealItem items={itemData.item} />;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryTitle]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
