import React from 'react';
import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Shadow from '../constants/shadow';
import Colors from '../constants/colors';

export default function CategoryGridTile({ items }) {
  // destructuring items
  const { id: categoryId, title, color } = items;

  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.navigate('MealsOverview', {
      categoryId: categoryId,
    });
  };

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={styles.buttonRippleAndroid}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={navigationHandler}
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
    ...Shadow,
  },
  button: {
    flex: 1,
  },
  buttonRippleAndroid: {
    color: '#ccc',
  },
  // ios
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.primary,
  },
});
