import React from 'react';
import style from './Main.module.scss';
import Home from './Home';
import ImageInfo from './ImageInfo';

import List from './List';
import { Route, Routes } from 'react-router-dom';

export const Main = (props) => {
  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<List />} />
        <Route path="/galery/:id" element={<ImageInfo />} />
      </Routes>
    </div>
  );
};
