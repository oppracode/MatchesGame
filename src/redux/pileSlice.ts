import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const pileSlice = createSlice({
  name: 'pile',
  initialState: {
    pile: 25,
  },
  reducers: {
    setPile(state, action: PayloadAction<number>) {
      state.pile = action.payload;
    },
  },
});

export const {setPile} = pileSlice.actions;
export default pileSlice.reducer;
