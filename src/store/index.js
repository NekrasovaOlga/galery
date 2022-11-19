import { composeWithDevTools } from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './auth/authReducer';
import { galeryReducer } from './galery/galeryReducer';
import { imageReducer } from './image/imageReducer';
import { likeReducer } from './like/likeReducer';

import { tokenMiddlewere, tokenReducer } from './tokenReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  galery: galeryReducer,
  auth: authReducer,
  image: imageReducer,
  like: likeReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddlewere, thunkMiddleware))
);
