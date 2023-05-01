import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { ContactReducer } from './contactSlice';
import { filterReduce } from './filter';

const rootReducer = combineReducers({
  contacts: ContactReducer,
  filter: filterReduce,
});

export const store = configureStore({
  reducer: rootReducer,
});
