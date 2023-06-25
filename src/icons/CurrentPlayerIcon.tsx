import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CurrentPlayerIcon = (): JSX.Element => (
  <Text style={styles.currentIcon}>⭐</Text>
);

const styles = StyleSheet.create({
  currentIcon: {
    fontSize: 18,
  },
});

export default CurrentPlayerIcon;
