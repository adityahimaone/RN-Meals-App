import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Shadow from '../constants/shadow';
import Colors from '../constants/colors';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
// import { FavoriteContext } from "../store/context/favorite-context";
import { addFavorite, removeFavorite } from '../store/redux/favoritesSlice';

export default function MealDetailScreen({ route, navigation }) {
  // const favoriteMealCtx = useContext(FavoriteContext);
  const dispatch = useDispatch();
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const mealId = route.params.mealId;

  // includes is a method of the array object for checking if an array contains a value
  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const { title, imageUrl, duration, complexity, affordability, ingredients, steps } = selectedMeal;

  const detailsProps = {
    duration,
    complexity,
    affordability,
  };

  const changeStatusFavoriteMeal = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'md-bookmark' : 'md-bookmark-outline'}
          color="white"
          onPress={changeStatusFavoriteMeal}
        />
      ),
    });
  }, [navigation, changeStatusFavoriteMeal]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.wrapContentContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <View>
            <MealDetails detailsItem={detailsProps} textStyle={styles.textMealDetails} />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 4,
  },
  image: {
    width: '100%',
    height: 300,
  },
  wrapContentContainer: {
    zIndex: 1,
    marginTop: -32,
    backgroundColor: Colors.tertiary,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    ...Shadow,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
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
