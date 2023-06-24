import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.sampleText}>Matches Game</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sampleText: {
    fontSize: 100,
  },
});

export default App;
