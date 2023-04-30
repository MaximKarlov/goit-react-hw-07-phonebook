import axios from 'axios';
import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactSlice';
const BASEURL = 'https://644e019f1b4567f4d57e0519.mockapi.io/contacts';

export const fetchTasks = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get(`${BASEURL}`);
    console.log('response: ' + response);
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};
