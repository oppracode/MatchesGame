import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {setPile} from '../redux/pileSlice';
import {useDispatch} from 'react-redux';
import {setCurrentPlayer} from '../redux/currentPlayerSlice';
import {setMatchesTurn} from '../redux/matchesTurnSlice';

function SettingsMenu(): JSX.Element {
  const [pileValue, setPileValue] = useState(12);
  const [firstPlayer, setFirstPlayer] = useState('human');
  const [matchesEachTurn, setMatchesEachTurn] = useState(3);

  const dispatch = useDispatch();

  function handleSaveButtonPress() {
    dispatch(setPile(pileValue * 2 + 1));
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
          value={pileValue.toString()}
          onChangeText={text => setPileValue(Number(text))}
        />
        <Text style={styles.inputLabel}>
          Number of matches allowed to take (1 to m):
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter m"
          value={matchesEachTurn.toString()}
          onChangeText={text => setMatchesEachTurn(Number(text))}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          firstPlayer === 'computer' && styles.selectedButton,
          styles.firstPlayerButton,
        ]}
        onPress={() =>
          setFirstPlayer(firstPlayer === 'computer' ? 'human' : 'computer')
        }>
        <Text style={[styles.buttonText, styles.firstPlayerButtonText]}>
          {firstPlayer === 'computer'
            ? 'Computer Moves First'
            : 'Human Moves First'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.saveButton]}
        onPress={() => handleSaveButtonPress()}>
        <Text style={styles.buttonText}>Save Settings</Text>
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
    marginTop: 10,
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
    color: 'white',
  },
  input: {
    height: 40,
    width: '70%',
    borderRadius: 8,
    borderColor: '#4287f5',
    borderWidth: 1,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginBottom: 8,
    color: '#333',
  },
  button: {
    backgroundColor: '#4287f5',
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  selectedButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  firstPlayerButton: {
    backgroundColor: '#333',
    borderColor: '#4287f5',
    borderWidth: 1,
  },
  firstPlayerButtonText: {
    color: '#4287f5',
  },
  saveButton: {
    marginBottom: 8,
  },
});

export default SettingsMenu;
