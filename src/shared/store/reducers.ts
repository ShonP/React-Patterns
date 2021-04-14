import { combineReducers } from '@reduxjs/toolkit';
import counter from './slices/counterSlice';

const reducers = combineReducers({ counter });

export type RootState = ReturnType<typeof reducers>;

export default reducers;
