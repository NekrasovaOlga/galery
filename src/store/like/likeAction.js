import { URL_API } from '../../api/const';
import { imageRequestSuccess } from '../image/imageAction';

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

export const likeAuthRequest = (id, status) => (dispatch, getState) => {
  const token = getState().token.token;
  if (!id || !token) return;
  fetch(`${URL_API}/photos/${id}/like`, {
    method: `${!status ? 'post' : 'delete'}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then(({ photo }) => {
      dispatch(imageRequestSuccess(photo));
    })
    .catch((err) => {
      dispatch(likeRequestError(err));
    });
};
