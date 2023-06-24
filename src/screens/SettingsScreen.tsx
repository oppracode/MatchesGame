import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Setting 1:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter something"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Setting 2:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter something"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>setting 3:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter something"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Settings</Text>
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
