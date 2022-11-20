import React from 'react';
import style from './Auth.module.scss';
import { url } from '../../../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  authRequestAsync,
  authTokenAsync,
} from '../../../store/auth/authAction';
export const Auth = (props) => {
  const auth = useSelector((state) => state.auth.data);
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) return;
    dispatch(authTokenAsync());
  }, [token]);

  useEffect(() => {
    if (!token) return;
    dispatch(authRequestAsync());
  }, [token]);
  return (
    <div className={style.logout}>
      {auth.name ? (
        <>
          <img src={auth.profile_image.small} className={style.user_img} />
          <p>{auth.name}</p>
        </>
      ) : (
        <a className={style.logout_btn} href={url.toString()}>
          Войти{' '}
        </a>
      )}
    </div>
  );
};
