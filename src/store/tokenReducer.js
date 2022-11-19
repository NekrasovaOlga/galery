import { setToken } from '../api/token';

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';
const UPDATE_CODE = 'UPDATE_CODE';
const initialState = {
  token: '',
  code: '',
};

export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: '',
});

export const tokenMiddlewere = (store) => (next) => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }
  if (action.type === DELETE_TOKEN) {
    setToken('');
  }

  next(action);
};
export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

export const updateCode = (code) => ({
  type: UPDATE_CODE,
  code,
});

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case UPDATE_CODE:
      return {
        ...state,
        code: action.code,
      };
    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
