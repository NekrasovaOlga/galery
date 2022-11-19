import {
  GALERY_REQUEST,
  GALERY_REQUEST_ERROR,
  GALERY_REQUEST_SUCCESS,
} from './galeryAction';

const initialState = {
  galery: [],
  status: '',
  error: '',
};

export const galeryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GALERY_REQUEST:
      return {
        ...state,
        error: '',
        status: 'loading',
      };
    case GALERY_REQUEST_SUCCESS:
      return {
        ...state,
        error: '',
        galery: action.galery,
        status: 'loaded',
      };
    case GALERY_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        status: 'loaded',
      };

    default:
      return state;
  }
};
