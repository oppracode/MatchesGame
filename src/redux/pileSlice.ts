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
  },
});

export const {setPile} = pileSlice.actions;
export default pileSlice.reducer;
