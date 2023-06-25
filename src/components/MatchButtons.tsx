import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {removePileMatches} from '../redux/pileSlice';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPlayer} from '../redux/currentPlayerSlice';
import {addPlayerMatches} from '../redux/playerMatchesSlice';
import type {RootState} from '../redux/store';

function MatchButtons(): JSX.Element {
  const dispatch = useDispatch();

  const numberOfButtons = useSelector(
    (state: RootState) => state.matchesTurn.value,
  );
  const pileMatches = useSelector((state: RootState) => state.pile.value);
  const currentPlayer = useSelector(
    (state: RootState) => state.currentPlayer.player,
  );

  function handleButtonPress(value: number) {
    dispatch(removePileMatches(value));
    dispatch(setCurrentPlayer('computer'));
    dispatch(addPlayerMatches(value));
  }

  function renderButtons() {
    const buttons = [];

    for (let i = 0; i < numberOfButtons; i++) {
      const matchValue = i + 1; // Calculate the match value for each button

      buttons.push(
        <TouchableOpacity
          key={matchValue}
          style={[
            styles.button,
            pileMatches < matchValue && styles.inactiveButton,
          ]}
          onPress={() => handleButtonPress(matchValue)}
          disabled={pileMatches < matchValue || currentPlayer === 'computer'}>
          <Text style={styles.buttonText}>{matchValue}</Text>
        </TouchableOpacity>,
      );
    }

    return buttons;
  }

  return <View style={styles.buttonContainer}>{renderButtons()}</View>;
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    flexWrap: 'wrap',
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4287f5',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 8,
    marginBottom: 10,
  },
  inactiveButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MatchButtons;
