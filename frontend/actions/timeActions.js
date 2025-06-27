

import axios from 'axios';

export const GET_TIME_REQUEST = 'GET_TIME_REQUEST';
export const GET_TIME_SUCCESS = 'GET_TIME_SUCCESS';
export const GET_TIME_FAILURE = 'GET_TIME_FAILURE';

const getTimeRequest = () => {
  return {
    type: GET_TIME_REQUEST,
  };
};

const getTimeSuccess = (time) => {
  return {
    type: GET_TIME_SUCCESS,
    time,
  };
};

const getTimeFailure = (error) => {
  return {
    type: GET_TIME_FAILURE,
    error,
  };
};

export const getTime = () => {
  return (dispatch) => {
    dispatch(getTimeRequest());
    axios
      .get('/api/time')
      .then((response) => {
        dispatch(getTimeSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getTimeFailure(error));
      });
  };
};