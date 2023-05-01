import { createSlice } from '@reduxjs/toolkit';
const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtered(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filtered } = filterSlice.actions;
export const filterReduce = filterSlice.reducer;
