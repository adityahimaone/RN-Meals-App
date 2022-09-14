import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../../constants/colors';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleContainer: {
    marginVertical: 4,
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.primary,
  },
});
