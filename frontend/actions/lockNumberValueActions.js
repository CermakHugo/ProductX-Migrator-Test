

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const lockNumberValue = createAsyncThunk(
  'lockNumberValue',
  async (number, { rejectWithValue }) => {
    if (isNaN(number)) {
      return rejectWithValue('Invalid number');
    }
    try {
      const response = await axios.post('/api/lock-number-value', { number });
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue('Backend endpoint is not reachable');
      } else {
        return rejectWithValue('An error occurred while locking the number value');
      }
    }
  }
);