import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={styles.sampleText}>Matches Game</Text>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sampleText: {
    fontSize: 100,
  },
});

export default App;
