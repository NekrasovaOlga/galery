import style from './Headers.module.scss';
import Layout from '../Layout';

import { Link } from 'react-router-dom';
import { Auth } from './Auth/Auth';
import { Navigate } from './Navigate/Navigate';

export const Headers = (props) => {
  return (
    <div className={style.header}>
      <Layout>
        <div className={style.logo}>Galery</div>
        <Auth />
        <Navigate />
      </Layout>
    </div>
  );
};
