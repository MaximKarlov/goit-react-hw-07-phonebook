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

export const addContact = createAsyncThunk('contacts/addContact', async (contact, { rejectWithValue }) => {
  try {
    const { data, status } = await axios.post(`${BASEURL}`, contact);
    if (status === 201) Notiflix.Notify.success('Контакт додано');
    return data;
  } catch (err) {
    Notiflix.Notify.failure(err.message);
    return rejectWithValue(err.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, { rejectWithValue }) => {
  try {
    const { data, status } = await axios.delete(`${BASEURL}/${id}`);
    if (status === 200) Notiflix.Notify.success('Контакт видалено з бази');
    return data;
  } catch (err) {
    Notiflix.Notify.failure(err.message);
    return rejectWithValue(err.message);
  }
});
