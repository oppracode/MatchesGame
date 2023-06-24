import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import type {RootState} from '../redux/store';
import {addComputerMatches} from '../redux/computerMatchesSlice';

const GameCard: React.FC = () => {
  const matchesNumber = useSelector((state: RootState) => state.pile.value);
  const dispatch = useDispatch();

  const renderedTexts = Array.from(Array(matchesNumber), (_, index) => (
    <Text style={styles.matchIcon} key={index}>
      🔥
    </Text>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.matchesContainer}>{renderedTexts}</View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GameCard;
