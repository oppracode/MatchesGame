import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ComputerMatchesState {
  value: number;
}

const initialState: ComputerMatchesState = {
  value: 15,
};

const computerMatchesSlice = createSlice({
  name: 'playerMatches',
  initialState,
  reducers: {
    addComputerMatches: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {addComputerMatches} = computerMatchesSlice.actions;
export default computerMatchesSlice.reducer;
