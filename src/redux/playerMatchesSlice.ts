import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PlayerMatchesState {
  value: number;
}

const initialState: PlayerMatchesState = {
  value: 0,
};

const playerMatchesSlice = createSlice({
  name: 'playerMatches',
  initialState,
  reducers: {
    addPlayerMatches: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    resetPlayerMatches: state => {
      state.value = initialState.value;
    },
  },
});

export const {addPlayerMatches, resetPlayerMatches} =
  playerMatchesSlice.actions;
export default playerMatchesSlice.reducer;
