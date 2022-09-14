import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MealItem from './MealItem';

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    return <MealItem items={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
