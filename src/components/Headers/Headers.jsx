import style from './Headers.module.scss';
import Layout from '../Layout';
import { authRequestAsync, authTokenAsync } from '../../store/auth/authAction';
import { url } from '../../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCode } from '../../api/code';
import { Link } from 'react-router-dom';

export const Headers = (props) => {
  const auth = useSelector((state) => state.auth.data);
  const token = useSelector((state) => state.token.token);

  const code = getCode();
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
    <div className={style.header}>
      <Layout>
        <div className={style.logo}>Galery</div>
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
        <nav className={style.nav}>
          <ul className={style.nav__block}>
            <li className={style.nav__item}>
              <Link
                className={style.nav__link + ' ' + style.nav__link__active}
                to={`/`}
              >
                Главная
              </Link>
            </li>

            <li className={style.nav__item}>
              <Link className={style.nav__link} to={`/galery`}>
                Галерея
              </Link>
            </li>
            <li className={style.nav__item}>
              <a href="/" className={style.nav__link}>
                Профиль
              </a>
            </li>
          </ul>
        </nav>
      </Layout>
    </div>
  );
};
