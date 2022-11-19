import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getCode } from '../../api/code';

import {
  authLogout,
  authRequestAsync,
  authTokenAsync,
} from '../../store/auth/authAction';

export const useAuth = () => {
  const auth = useSelector((state) => state.auth.data);
  const token = useSelector((state) => state.token.token);
  const code = getCode();
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (code == null) return;
    dispatch(authTokenAsync());
  }, [code]);

  useEffect(() => {
    console.log(token);
    dispatch(authRequestAsync());
  }, [token]);
  const clearAuth = () => dispatch(authLogout());
  return [auth, loading, clearAuth];
};
