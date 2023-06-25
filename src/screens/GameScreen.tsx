import React from 'react';
import {View, StyleSheet} from 'react-native';
import PlayerCard from '../components/PlayerCard';
import ComputerCard from '../components/ComputerCard';
import GameCard from '../components/GameCard';

function GameScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <ComputerCard />
      <GameCard />
      <PlayerCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});

export default GameScreen;
