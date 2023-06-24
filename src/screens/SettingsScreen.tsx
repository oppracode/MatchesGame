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

const SettingsScreen: React.FC = () => {
  const [pileValue, setPileValue] = useState(0);

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          {' '}
          Set total matches by formula (2n + 1):
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter n"
          onChangeText={text => setPileValue(Number(text))}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => dispatch(setPile(pileValue))}>
          Save Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
