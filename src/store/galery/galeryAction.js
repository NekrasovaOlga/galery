import { ACCESS_KEY, URL_API } from '../../api/const';

export const GALERY_REQUEST = 'GALERY_REQUEST';
export const GALERY_REQUEST_SUCCESS = 'GALERY_REQUEST_SUCCESS';
export const GALERY_REQUEST_UPDATE = 'GALERY_REQUEST_UPDATE';
export const GALERY_REQUEST_ERROR = 'GALERY_REQUEST_ERROR';
export const GALERY_CHANGE_PAGE = 'GALERY_CHANGE_PAGE';
export const GALERY_SEARCH_SUCCESS = 'GALERY_SEARCH_SUCCESS';

export const galeryRequest = () => ({
  type: GALERY_REQUEST,
});

export const galeryRequestSuccess = (data) => ({
  type: GALERY_REQUEST_SUCCESS,
  galery: data,
});

export const galerySearchSuccess = (data) => ({
  type: GALERY_SEARCH_SUCCESS,
  galery: data,
});

export const galeryRequestUpdate = (data) => ({
  type: GALERY_REQUEST_UPDATE,
  galery: data,
});

export const galeryChangePage = (page) => ({
  type: GALERY_CHANGE_PAGE,
  page,
});

export const galeryRequestError = (error) => ({
  type: GALERY_REQUEST_ERROR,
  error,
});

export const galeryRequestAsync = (page) => (dispatch, getState) => {
  let pageOld = getState().galery.page;
  if (page) {
    pageOld = pageOld++;
    dispatch(galeryChangePage(pageOld));
  }
  const token = getState().token.token;
  const loading = getState().galery.loading;
  let after = getState().galery.after;
  if (loading) return;

  fetch(`${URL_API}/photos?page=${page ? pageOld : 1}&per_page=30`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY} ${token && `Bearer ${token}`}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (after) {
        dispatch(galeryRequestUpdate(data));
      } else {
        dispatch(galeryRequestSuccess(data));
      }
    })
    .catch((err) => {
      dispatch(galeryRequestError(err.toString()));
    });
};

export const galerySearchAsync = (search) => (dispatch, getState) => {
  const token = getState().token.token;

  fetch(`${URL_API}/search/photos?per_page=30&query=${search}`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY} ${token && `Bearer ${token}`}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(galerySearchSuccess(data.results));
    })
    .catch((err) => {
      dispatch(galeryRequestError(err.toString()));
    });
};
