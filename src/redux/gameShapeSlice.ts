import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface GameShapeState {
  started: boolean;
  over: boolean;
}

const initialState: GameShapeState = {
  over: false,
  started: false,
};

const gameShapeSlice = createSlice({
  name: 'gameShape',
  initialState,
  reducers: {
    setGameOver: (state, action: PayloadAction<boolean>) => {
      state.over = action.payload;
    },
    resetGameOver: state => {
      state.over = initialState.over;
    },

    setGameStart: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
    resetGameStart: state => {
      state.started = initialState.started;
    },
  },
});

export const {setGameOver, resetGameOver, setGameStart, resetGameStart} =
  gameShapeSlice.actions;
export default gameShapeSlice.reducer;
