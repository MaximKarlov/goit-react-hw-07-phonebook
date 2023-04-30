import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
export const getContacts = state => state.contacts;
export const { addContact, deleteContact } = contactSlice.actions;
export const ContactReducer = contactSlice.reducer;
