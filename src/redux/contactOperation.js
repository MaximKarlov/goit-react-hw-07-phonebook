import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const BASEURL = 'https://644e019f1b4567f4d57e0519.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${BASEURL}`);
    return data;
  } catch (err) {
    Notiflix.Notify.failure(err.message);
    return rejectWithValue(err.message);
  }
});

// export const fetchContacts = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get(`${BASEURL}`);
//     // Обробка даних
//     return dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     Notiflix.Notify.failure(e.message);
//     dispatch(fetchingError(e.message));
//   }
// };

// export const addContacts = contact => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.post(`${BASEURL}`, contact);
//     Notiflix.Notify.success('Contact added');
//     // Обробка даних
//     if (response.status === 201) {
//       dispatch(fetchingInProgress());
//       // HTTP-запит
//       const response = await axios.get(`${BASEURL}`);
//       // Обробка даних
//       return dispatch(fetchingSuccess(response.data));
//     }
//   } catch (e) {
//     // Обробка помилки
//     Notiflix.Notify.error(e.message);
//     dispatch(fetchingError(e.message));
//   }
// };

// export const deleteContacts = id => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.delete(`${BASEURL}/${id}`);
//     Notiflix.Notify.success('Contact deleted successfully');
//     // Обробка даних
//     if (response.status === 200) {
//       dispatch(fetchingInProgress());
//       // HTTP-запит
//       const response = await axios.get(`${BASEURL}`);
//       // Обробка даних
//       return dispatch(fetchingSuccess(response.data));
//     }
//   } catch (e) {
//     // Обробка помилки
//     Notiflix.Notify.error(e.message);
//     dispatch(fetchingError(e.message));
//   }
// };
