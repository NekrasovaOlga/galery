import axios from 'axios';
import { URL_API, ACCESS_KEY, API_URL_LIKE } from '../../api/const';

export const LIKE_REQUEST = 'LIKE_REQUEST';
export const LIKE_REQUEST_SUCCES = 'LIKE_REQUEST_SUCCES';
export const LIKE_REQUEST_ERROR = 'LIKE_REQUEST_ERROR';

export const likeRequest = () => ({
  type: LIKE_REQUEST,
});

export const likeRequestSuccess = (data) => ({
  type: LIKE_REQUEST_SUCCES,
  data,
});

export const likeRequestError = (error) => ({
  type: LIKE_REQUEST_ERROR,
  error,
});

export const likeAuthRequest = (id) => (dispatch, getState) => {
  const token = getState().token.token;
  if (!id || !token) return;

  console.log(token);
  axios
    .post(`${URL_API}/photos/${id}/like`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
