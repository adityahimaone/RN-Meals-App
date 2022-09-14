import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function List({ data }) {
  return (
    <View>
      {data?.map((item, index) => (
        <View key={item} style={styles.listItem}>
          <Text style={styles.itemText}>{`${index + 1}. ${item}`}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 1.5,
  },
  itemText: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
