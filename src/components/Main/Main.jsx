import React from 'react';
import style from './Main.module.scss';
import Home from './Home';
import ImageInfo from './ImageInfo';

import List from './List';
import { Route, Routes } from 'react-router-dom';
import { SearchList } from './SearchList/SearchList';

export const Main = (props) => {
  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<List />} />
        <Route path="/search" element={<SearchList />} />

        <Route path="/galery/:id" element={<ImageInfo />} />
        <Route path="/search/:id" element={<ImageInfo />} />
      </Routes>
    </div>
  );
};
