import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CurrentPlayerState {
  player: string;
}

const initialState: CurrentPlayerState = {
  player: 'human',
};

const currentPlayerSlice = createSlice({
  name: 'currentPlayer',
  initialState,
  reducers: {
    setCurrentPlayer: (state, action: PayloadAction<string>) => {
      state.player = action.payload;
    },
    resetCurrentPlayer: state => {
      state.player = initialState.player;
    },
  },
});

export const {setCurrentPlayer, resetCurrentPlayer} =
  currentPlayerSlice.actions;
export default currentPlayerSlice.reducer;
