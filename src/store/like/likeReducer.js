import {
  LIKE_REQUEST,
  LIKE_REQUEST_ERROR,
  LIKE_REQUEST_SUCCES,
} from '../like/likeAction';

const initialState = {
  id: '',
  loading: false,
  error: '',
  data: [],
};

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIKE_REQUEST_SUCCES:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.data,
      };
    case LIKE_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
