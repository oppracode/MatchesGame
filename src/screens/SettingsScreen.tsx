import React from 'react';
import {View, StyleSheet} from 'react-native';
import ResetButton from '../components/ResetButton';
import SettingsMenu from '../components/SettingsMenu';

function SettingsScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <SettingsMenu />
      <ResetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#333',
  },
});

export default SettingsScreen;
