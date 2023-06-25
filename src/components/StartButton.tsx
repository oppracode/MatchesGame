import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setGameStart} from '../redux/gameShapeSlice';

function StartButton(): JSX.Element {
  const dispatch = useDispatch();

  function handleButtonPress() {
    dispatch(setGameStart(true));
  }

  return (
    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress()}>
      <Text>Start</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});

export default StartButton;
