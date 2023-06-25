import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import type {RootState} from '../redux/store';
import {removePileMatches} from '../redux/pileSlice';
import {setCurrentPlayer} from '../redux/currentPlayerSlice';
import {addComputerMatches} from '../redux/computerMatchesSlice';
import {setGameOver} from '../redux/gameOverSlice';
import MatchButtons from './MatchButtons';
import GameOver from './GameOver';

const GameCard: React.FC = () => {
  const pileMatches = useSelector((state: RootState) => state.pile.value);
  const currentPlayer = useSelector(
    (state: RootState) => state.currentPlayer.player,
  );
  const computerMatches = useSelector(
    (state: RootState) => state.computerMatches.value,
  );
  const gameOver = useSelector((state: RootState) => state.gameOver.value);
  const maxMatchesPerTurn = useSelector(
    (state: RootState) => state.matchesTurn.value,
  );
  const dispatch = useDispatch();

  const renderedTexts = Array.from(Array(pileMatches), (_, index) => (
    <Text style={styles.matchIcon} key={index}>
      🔥
    </Text>
  ));

  useEffect(() => {
    if (pileMatches === 0) {
      dispatch(setGameOver(true));
    } else if (currentPlayer === 'computer') {
      let computerMove;
      if (computerMatches % (maxMatchesPerTurn + 1) === 0) {
        // Force player into a losing position
        const maxMatches = Math.min(maxMatchesPerTurn, pileMatches);
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
        const maxMatches = Math.min(maxMatchesPerTurn, pileMatches);
        const remainingMatches = pileMatches - maxMatches;

        if (remainingMatches % 2 === 1) {
          // If the remaining matches after the player's move is odd,
          // the computer takes a random odd number of matches to make it even
          const oddMoves = [...Array(maxMatches + 1).keys()].filter(
            move => move % 2 === 1 && move <= remainingMatches,
          );
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
  }, [
    computerMatches,
    pileMatches,
    currentPlayer,
    dispatch,
    maxMatchesPerTurn,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.matchesContainer}>{renderedTexts}</View>
      {gameOver ? <GameOver /> : null}
      <Text>Matches in this pile: {pileMatches}</Text>
      <MatchButtons />
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
});

export default GameCard;
