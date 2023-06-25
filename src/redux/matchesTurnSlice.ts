import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface MatchesEachTurnState {
  value: number;
}

const initialState: MatchesEachTurnState = {
  value: 3,
};

const matchesTurnSlice = createSlice({
  name: 'matchesTurn',
  initialState,
  reducers: {
    setMatchesTurn: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    resetMatchesTurn: state => {
      state.value = initialState.value;
    },
  },
});

export const {setMatchesTurn, resetMatchesTurn} = matchesTurnSlice.actions;
export default matchesTurnSlice.reducer;
