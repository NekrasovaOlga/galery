import axios from 'axios';
import { urlToken } from '../../api/auth';

import { CODE, URL_API } from '../../api/const';
import { getToken } from '../../api/token';
import { updateToken } from '../tokenReducer';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authTokenAsync = () => (dispatch, getState) => {
  const loading = getState().auth.loading;
  if (!CODE || loading) return;
  axios
    .post(`${urlToken.toString()}`)
    .then(({ data }) => {
      dispatch(updateToken(getToken(data)));
      dispatch(authRequestAsync());
    })
    .catch((err) => {
      dispatch(authRequestError(err.toString()));
    });
};

export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  const loading = getState().auth.loading;
  if (!token || loading) return;
  dispatch(authRequest());
  axios(`${URL_API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data: { name, profile_image, username } }) => {
      dispatch(authRequestSuccess({ name, profile_image, username }));
    })
    .catch((err) => {
      dispatch(authRequestError(err.toString()));
    });
};
