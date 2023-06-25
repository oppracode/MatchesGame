import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ComputerMatchesState {
  value: number;
}

const initialState: ComputerMatchesState = {
  value: 0,
};

const computerMatchesSlice = createSlice({
  name: 'playerMatches',
  initialState,
  reducers: {
    addComputerMatches: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    resetComputerMatches: state => {
      state.value = initialState.value;
    },
  },
});

export const {addComputerMatches, resetComputerMatches} =
  computerMatchesSlice.actions;
export default computerMatchesSlice.reducer;
