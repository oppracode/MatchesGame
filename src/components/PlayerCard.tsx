import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {RootState} from '../redux/store';
import {useSelector} from 'react-redux';

const PlayerCard: React.FC = () => {
  const playerMatches = useSelector(
    (state: RootState) => state.playerMatches.value,
  );
  return (
    <View style={styles.container}>
      <Text style={styles.playerIcon}>😎</Text>
      <View style={styles.playerInfo}>
        <Text style={styles.playerText}>Player</Text>
        <Text style={styles.scoreText}>Matches: {playerMatches}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  playerIcon: {
    fontSize: 80,
    marginRight: 16,
  },
  playerInfo: {
    alignItems: 'center',
    flexGrow: 2,
  },
  playerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 18,
  },
});

export default PlayerCard;
