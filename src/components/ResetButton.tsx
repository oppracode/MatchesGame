import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {resetComputerMatches} from '../redux/computerMatchesSlice';
import {resetCurrentPlayer} from '../redux/currentPlayerSlice';
import {resetPile} from '../redux/pileSlice';
import {resetPlayerMatches} from '../redux/playerMatchesSlice';
import {resetGameOver, resetGameStart} from '../redux/gameShapeSlice';
import {resetMatchesTurn} from '../redux/matchesTurnSlice';

function ResetButton(): JSX.Element {
  const dispatch = useDispatch();

  function handleResetButtonPress() {
    dispatch(resetComputerMatches());
    dispatch(resetCurrentPlayer());
    dispatch(resetPile());
    dispatch(resetPlayerMatches());
    dispatch(resetGameOver());
    dispatch(resetMatchesTurn());
    dispatch(resetGameStart());
  }
  return (
    <TouchableOpacity
      style={styles.resetButton}
      onPress={() => handleResetButtonPress()}>
      <Text style={styles.resetButtonText}>Reset</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  resetButton: {
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#f54242',
    marginBottom: 24,
  },
  resetButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ResetButton;
