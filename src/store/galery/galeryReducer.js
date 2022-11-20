import {
  GALERY_CHANGE_PAGE,
  GALERY_REQUEST,
  GALERY_REQUEST_ERROR,
  GALERY_REQUEST_SUCCESS,
  GALERY_REQUEST_UPDATE,
  GALERY_SEARCH_SUCCESS,
} from './galeryAction';

const initialState = {
  galery: [],
  status: '',
  error: '',
  page: 1,
  after: false,
  loading: true,
  searchGalery: [],
};

export const galeryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GALERY_REQUEST:
      return {
        ...state,
        error: '',
        status: 'loading',
        loading: true,
        after: false,
        page: 1,
        galery: [],
      };
    case GALERY_REQUEST_SUCCESS:
      return {
        ...state,
        error: '',
        galery: action.galery,
        status: 'loaded',
        loading: false,
      };
    case GALERY_SEARCH_SUCCESS:
      return {
        ...state,
        error: '',
        searchGalery: action.galery,
        status: 'loaded',
        loading: false,
      };
    case GALERY_REQUEST_UPDATE:
      return {
        ...state,
        error: '',
        galery: [...state.galery, ...action.galery],
        status: 'loaded',
        loading: false,
      };
    case GALERY_CHANGE_PAGE:
      return {
        ...state,
        error: '',
        page: action.page + 1,
        after: true,
        loading: false,
      };
    case GALERY_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        status: 'loaded',
        loading: false,
      };

    default:
      return state;
  }
};
