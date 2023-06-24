import {configureStore} from '@reduxjs/toolkit';
import pileReducer from './pileSlice';

export const store = configureStore({
  reducer: {
    pile: pileReducer,
  },
});
