import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  galeryChangePage,
  galeryRequest,
  galeryRequestAsync,
} from '../../../store/galery/galeryAction';
import style from './Navigate.module.scss';

export const Navigate = (props) => {
  const [activeLink, setActiveLink] = useState('/');
  const dispatch = useDispatch();
  const menu = [
    {
      name: 'Главная',
      id: '1',
      link: '/',
    },
    {
      name: 'Галерея',
      id: '2',
      link: '/galery',
    },
  ];
  const handleClick = () => {
    dispatch(galeryRequest());
  };
  return (
    <nav className={style.nav}>
      <ul className={style.nav__block}>
        {menu.map(({ name, id, link }) => {
          return (
            <li key={id} className={style.nav__item}>
              <Link
                className={
                  activeLink === link
                    ? `${style.nav__link + ' ' + style.nav__link__active}`
                    : `${style.nav__link}`
                }
                to={link}
                onClick={() => handleClick()}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
