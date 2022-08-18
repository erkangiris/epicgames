import { configureStore } from '@reduxjs/toolkit'
import BasketReducer from './BasketReducer';
import GamedbReducer from './GamedbReducer';

export const store = configureStore({
  reducer: {
    basket: BasketReducer,
    gamedb : GamedbReducer
  },
})