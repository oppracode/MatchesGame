import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {resetPile, setPile} from '../redux/pileSlice';
import {useDispatch} from 'react-redux';
import {resetComputerMatches} from '../redux/computerMatchesSlice';
import {
  resetCurrentPlayer,
  setCurrentPlayer,
} from '../redux/currentPlayerSlice';
import {resetPlayerMatches} from '../redux/playerMatchesSlice';
import {resetGameOver} from '../redux/gameOverSlice';
import {resetMatchesTurn, setMatchesTurn} from '../redux/matchesTurnSlice';

function SettingsScreen(): JSX.Element {
  const [pileValue, setPileValue] = useState(25);
  const [firstPlayer, setFirstPlayer] = useState('human');
  const [matchesEachTurn, setMatchesEachTurn] = useState(3);

  const dispatch = useDispatch();

  function handleResetButtonPress() {
    dispatch(resetComputerMatches());
    dispatch(resetCurrentPlayer());
    dispatch(resetPile());
    dispatch(resetPlayerMatches());
    dispatch(resetGameOver());
    dispatch(resetMatchesTurn());
  }

  function handleSaveButtonPress() {
    dispatch(setPile(pileValue));
    dispatch(setCurrentPlayer(firstPlayer));
    dispatch(setMatchesTurn(matchesEachTurn));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          Set total matches by formula (2n + 1):
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter n"
          onChangeText={text => setPileValue(Number(text))}
        />
        <Text style={styles.inputLabel}>
          Number of matches allowed to take(1 to m):
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter m"
          onChangeText={text => setMatchesEachTurn(Number(text))}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          firstPlayer === 'computer' && styles.selectedButton,
        ]}
        onPress={() =>
          setFirstPlayer(firstPlayer === 'computer' ? 'human' : 'computer')
        }>
        <Text style={styles.buttonText}>Computer moves first</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSaveButtonPress()}>
        <Text style={styles.buttonText}>Save Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleResetButtonPress()}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
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
  inputContainer: {
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
    paddingTop: 18,
  },
  input: {
    height: 40,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#4287f5',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  selectedButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
