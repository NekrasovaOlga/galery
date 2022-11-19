import axios from 'axios';

import { ACCESS_KEY, URL_API } from '../../api/const';

export const GALERY_REQUEST = 'GALERY_REQUEST';
export const GALERY_REQUEST_SUCCESS = 'GALERY_REQUEST_SUCCESS';
export const GALERY_REQUEST_ERROR = 'GALERY_REQUEST_ERROR';

export const galeryRequest = () => ({
  type: GALERY_REQUEST,
});

export const galeryRequestSuccess = (data) => ({
  type: GALERY_REQUEST_SUCCESS,
  galery: data,
});

export const galeryRequestError = (error) => ({
  type: GALERY_REQUEST_ERROR,
  error,
});

export const galeryRequestAsync = () => (dispatch) => {
  dispatch(galeryRequest());

  axios(`${URL_API}/photos/`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  })
    .then(({ data }) => {
      dispatch(galeryRequestSuccess(data));
    })
    .catch((err) => {
      dispatch(galeryRequestError(err.toString()));
    });
};
