import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../redux/contactOperation';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload.id);
      });

    // .addMatcher();
  },
});

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
// // Виконається в момент старту HTTP-запиту
// fetchingInProgress(state) {
//   state.isLoading = true;
// },
//     // Виконається якщо HTTP-запит завершився успішно
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     // Виконається якщо HTTP-запит завершився з помилкою
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
//
export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions;
export const ContactReducer = contactSlice.reducer;
