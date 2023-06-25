import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PlayerMatchesState {
  value: boolean;
}

const initialState: PlayerMatchesState = {
  value: false,
};

const gameOverSlice = createSlice({
  name: 'gameOver',
  initialState,
  reducers: {
    setGameOver: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    resetGameOver: state => {
      state.value = initialState.value;
    },
  },
});

export const {setGameOver, resetGameOver} = gameOverSlice.actions;
export default gameOverSlice.reducer;
