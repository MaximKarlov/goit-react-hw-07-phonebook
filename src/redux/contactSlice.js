import { createSlice } from '@reduxjs/toolkit';
const contactsInitialState = {
  contact: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    // Виконається в момент старту HTTP-запиту
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    // Виконається якщо HTTP-запит завершився успішно
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.contact = action.payload;
    },
    // Виконається якщо HTTP-запит завершився з помилкою
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
//
export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions;
export const ContactReducer = contactSlice.reducer;

// const initialState = [];

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });
// export const getContacts = state => state.contacts;
// export const { addContact, deleteContact } = contactSlice.actions;
// export const ContactReducer = contactSlice.reducer;
