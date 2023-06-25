import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PileState {
  value: number;
}

const initialState: PileState = {
  value: 25,
};

const pileSlice = createSlice({
  name: 'pile',
  initialState,
  reducers: {
    setPile(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    removePileMatches(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
    resetPile(state) {
      state.value = initialState.value;
    },
  },
});

export const {setPile, removePileMatches, resetPile} = pileSlice.actions;
export default pileSlice.reducer;
