import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen() {
  const renderCategoryItem = (itemData) => {
    return <CategoryGridTile items={itemData.item} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
