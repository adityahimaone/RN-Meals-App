import React, { useLayoutEffect } from 'react';

import MealsList from '../components/MealsList/MealsList';
// import { useRoute } from "@react-navigation/native"; -> use this if component not a registered screen

import { CATEGORIES, MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen({ route, navigation }) {
  //   const route = useRoute(); -> use this if component not a registered screen

  const categoryId = route.params.categoryId;

  // display meals if meals are in the category id
  const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0);

  //   get the category title
  const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryTitle]);

  return <MealsList items={displayedMeals} />;
}
