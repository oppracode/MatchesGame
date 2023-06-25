import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {StyleSheet} from 'react-native';

function GameOver(): JSX.Element {
  const computerMatches = useSelector(
    (state: RootState) => state.computerMatches.value,
  );

  return (
    <View>
      <Text style={styles.gameOverText}>Game Over</Text>
      <Text style={styles.gameOverText}>
        {computerMatches % 2 === 0 ? 'Computer' : 'Player'} won!!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gameOverText: {
    fontSize: 48,
    paddingBottom: 20,
    alignSelf: 'center',
  },
});

export default GameOver;
