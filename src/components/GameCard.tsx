import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import type {RootState} from '../redux/store';
import {removePileMatches} from '../redux/pileSlice';
import {setCurrentPlayer} from '../redux/currentPlayerSlice';
import {addComputerMatches} from '../redux/computerMatchesSlice';
import {addPlayerMatches} from '../redux/playerMatchesSlice';

const GameCard: React.FC = () => {
  const pileMatches = useSelector((state: RootState) => state.pile.value);
  const currentPlayer = useSelector(
    (state: RootState) => state.currentPlayer.player,
  );
  const computerMatches = useSelector(
    (state: RootState) => state.computerMatches.value,
  );
  const dispatch = useDispatch();

  const [gameOver, setGameOver] = useState(false);

  const renderedTexts = Array.from(Array(pileMatches), (_, index) => (
    <Text style={styles.matchIcon} key={index}>
      🔥
    </Text>
  ));

  function handleButtonPress(value: number) {
    dispatch(removePileMatches(value));
    dispatch(setCurrentPlayer('computer'));
    dispatch(addPlayerMatches(value));
  }
  useEffect(() => {
    if (pileMatches === 0) {
      setGameOver(true);
    } else if (currentPlayer === 'computer') {
      let computerMove;
      if (computerMatches % 4 === 0) {
        // Force player into a losing position
        const maxMatches = Math.min(3, pileMatches);
        const remainingMatches = pileMatches - maxMatches;

        if (remainingMatches % 2 === 1) {
          // If the remaining matches after the player's move is odd,
          // the computer takes 1 match to make it even
          computerMove = 1;
        } else {
          // Otherwise, the computer takes the maximum number of matches allowed
          computerMove = maxMatches;
        }
      } else {
        // Random computer move
        const maxMatches = Math.min(3, pileMatches);
        const remainingMatches = pileMatches - maxMatches;

        if (remainingMatches % 2 === 1) {
          // If the remaining matches after the player's move is odd,
          // the computer takes a random odd number of matches to make it even
          const oddMoves = [1, 3].filter(move => move <= remainingMatches);
          computerMove = oddMoves[Math.floor(Math.random() * oddMoves.length)];
        } else {
          // Otherwise, the computer takes the maximum number of matches allowed
          computerMove = maxMatches;
        }
      }
      dispatch(removePileMatches(computerMove));
      dispatch(addComputerMatches(computerMove));
      dispatch(setCurrentPlayer('human'));
    }
  }, [computerMatches, pileMatches, currentPlayer, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.matchesContainer}>{renderedTexts}</View>
      {gameOver ? (
        <View>
          <Text style={styles.gameOverText}>Game Over</Text>
          <Text style={styles.gameOverText}>
            {computerMatches % 2 === 0 ? 'Computer' : 'Player'} won!!!
          </Text>
        </View>
      ) : null}
      <Text>Matches in this pile: {pileMatches}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, pileMatches < 1 && styles.inactiveButton]}
          onPress={() => handleButtonPress(1)}
          disabled={pileMatches < 1 || currentPlayer === 'computer'}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, pileMatches < 2 && styles.inactiveButton]}
          onPress={() => handleButtonPress(2)}
          disabled={pileMatches < 2 || currentPlayer === 'computer'}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, pileMatches < 3 && styles.inactiveButton]}
          onPress={() => handleButtonPress(3)}
          disabled={pileMatches < 3 || currentPlayer === 'computer'}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  matchesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
  matchIcon: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#4287f5',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 8,
  },
  inactiveButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameOverText: {
    fontSize: 48,
    paddingBottom: 50,
  },
});

export default GameCard;
