import {
  IMAGE_REQUEST,
  IMAGE_REQUEST_ERROR,
  IMAGE_REQUEST_SUCCES,
} from './imageAction';

const initialState = {
  id: '',
  loading: false,
  error: '',
  data: [],
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case IMAGE_REQUEST_SUCCES:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.data,
      };
    case IMAGE_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
