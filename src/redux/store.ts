import {configureStore} from '@reduxjs/toolkit';
import pileReducer from './pileSlice';
import playerMatchesReducer from './playerMatchesSlice';
import computerMatchesSlice from './computerMatchesSlice';
import currentPlayerSlice from './currentPlayerSlice';
import matchesTurnSlice from './matchesTurnSlice';
import gameShapeSlice from './gameShapeSlice';

export const store = configureStore({
  reducer: {
    pile: pileReducer,
    playerMatches: playerMatchesReducer,
    computerMatches: computerMatchesSlice,
    currentPlayer: currentPlayerSlice,
    gameShape: gameShapeSlice,
    matchesTurn: matchesTurnSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
