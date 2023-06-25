import {configureStore} from '@reduxjs/toolkit';
import pileReducer from './pileSlice';
import playerMatchesReducer from './playerMatchesSlice';
import computerMatchesSlice from './computerMatchesSlice';
import currentPlayerSlice from './currentPlayerSlice';
import gameOverSlice from './gameOverSlice';
import matchesTurnSlice from './matchesTurnSlice';

export const store = configureStore({
  reducer: {
    pile: pileReducer,
    playerMatches: playerMatchesReducer,
    computerMatches: computerMatchesSlice,
    currentPlayer: currentPlayerSlice,
    gameOver: gameOverSlice,
    matchesTurn: matchesTurnSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
