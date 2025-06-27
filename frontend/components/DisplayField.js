

import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  displayFieldValue: null,
  error: null,
  isLoading: false,
};

const displayFieldSlice = createSlice({
  name: 'displayField',
  initialState,
  reducers: {
    fetchDisplayFieldValueRequest(state) {
      state.isLoading = true;
    },
    fetchDisplayFieldValueSuccess(state, action) {
      state.displayFieldValue = action.payload;
      state.isLoading = false;
    },
    fetchDisplayFieldValueFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const store = configureStore({
  reducer: {
    displayField: displayFieldSlice.reducer,
  },
});

const { fetchDisplayFieldValueRequest, fetchDisplayFieldValueSuccess, fetchDisplayFieldValueFailure } =
  displayFieldSlice.actions;

const DisplayField = ({ displayFieldValue, error, isLoading, fetchDisplayFieldValue }) => {
  useEffect(() => {
    fetchDisplayFieldValue();
  }, [fetchDisplayFieldValue]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Current display field value: {displayFieldValue}</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayFieldValue: state.displayField.displayFieldValue,
    error: state.displayField.error,
    isLoading: state.displayField.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  const fetchDisplayFieldValue = async () => {
    dispatch(fetchDisplayFieldValueRequest());
    try {
      const response = await axios.get('/display-field');
      if (response.data) {
        dispatch(fetchDisplayFieldValueSuccess(response.data));
      } else {
        dispatch(fetchDisplayFieldValueFailure('Invalid or missing response data'));
      }
    } catch (error) {
      dispatch(fetchDisplayFieldValueFailure(error.message));
    }
  };
  return {
    fetchDisplayFieldValue,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayField);