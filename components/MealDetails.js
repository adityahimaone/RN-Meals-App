import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

export default function MealDetails({ detailsItem, textStyle }) {
  const { duration, complexity, affordability } = detailsItem;

  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>
        <Ionicons style={styles.icons} name="md-time" size={15} color={Colors.primary} />
        {duration} mins
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        <Ionicons style={styles.icons} name="md-star" size={15} color={Colors.primary} />
        {complexity?.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        <Ionicons style={styles.icons} name="md-cash" size={15} color={Colors.primary} />
        {affordability?.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  icons: {
    marginRight: 12,
    paddingRight: 12,
  },
});
