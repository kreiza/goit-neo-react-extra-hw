import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// Базовий URL встановлюється в auth/operations.js

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      toast.success('Контакт успішно додано!');
      return response.data;
    } catch (e) {
      toast.error('Помилка при додаванні контакту');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      toast.success('Контакт успішно видалено!');
      return contactId;
    } catch (e) {
      toast.error('Помилка при видаленні контакту');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);