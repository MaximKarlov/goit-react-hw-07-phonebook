import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactSlice';
const BASEURL = 'https://644e019f1b4567f4d57e0519.mockapi.io/contacts';

export const fetchContacts = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get(`${BASEURL}`);
    // Обробка даних
    return dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    Notiflix.Notify.failure(e.message);
    dispatch(fetchingError(e.message));
  }
};

export const addContacts = contact => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.post(`${BASEURL}`, contact);
    Notiflix.Notify.success('Contact added');
    // Обробка даних
    if (response.status === 201) {
      dispatch(fetchingInProgress());
      // HTTP-запит
      const response = await axios.get(`${BASEURL}`);
      // Обробка даних
      return dispatch(fetchingSuccess(response.data));
    }
  } catch (e) {
    // Обробка помилки
    Notiflix.Notify.error(e.message);
    dispatch(fetchingError(e.message));
  }
};

export const deleteContacts = id => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.delete(`${BASEURL}/${id}`);
    Notiflix.Notify.success('Contact deleted successfully');
    // Обробка даних
    if (response.status === 200) {
      dispatch(fetchingInProgress());
      // HTTP-запит
      const response = await axios.get(`${BASEURL}`);
      // Обробка даних
      return dispatch(fetchingSuccess(response.data));
    }
  } catch (e) {
    // Обробка помилки
    Notiflix.Notify.error(e.message);
    dispatch(fetchingError(e.message));
  }
};
