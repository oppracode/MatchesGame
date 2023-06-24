import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function GameScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.sampleText}>Matches Game</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  sampleText: {
    fontSize: 100,
  },
});

export default GameScreen;
