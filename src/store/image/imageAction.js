import axios from 'axios';
import { URL_API, ACCESS_KEY } from '../../api/const';

export const IMAGE_REQUEST = 'IMAGE_REQUEST';
export const IMAGE_REQUEST_SUCCES = 'IMAGE_REQUEST_SUCCES';
export const IMAGE_REQUEST_ERROR = 'IMAGE_REQUEST_ERROR';

export const imageRequest = () => ({
  type: IMAGE_REQUEST,
});

export const imageRequestSuccess = (data) => ({
  type: IMAGE_REQUEST_SUCCES,
  data,
});

export const imageRequestError = (error) => ({
  type: IMAGE_REQUEST_ERROR,
  error,
});

export const imageAuthRequest = (id) => (dispatch, getState) => {
  if (!id) return;

  axios(`${URL_API}/photos/${id}`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  })
    .then(({ data }) => {
      dispatch(imageRequestSuccess(data));
    })
    .catch((err) => {
      dispatch(imageRequestError(err.toString()));
    });
};
