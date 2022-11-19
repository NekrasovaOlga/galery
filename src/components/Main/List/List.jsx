import style from './List.module.scss';
import Masonry from 'react-masonry-css';
import { useDispatch, useSelector } from 'react-redux';
import { galeryRequestAsync } from '../../../store/galery/galeryAction';
import { useEffect } from 'react';
import Images from './Images';

export const List = (props) => {
  const lists = useSelector((state) => state.galery.galery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(galeryRequestAsync());
  }, []);

  return (
    <Masonry
      breakpointCols={3}
      className={style['my-masonry-grid']}
      columnClassName={style['my-masonry-grid_column']}
    >
      {lists.map((item) => {
        return <Images key={item.id} data={item} />;
      })}
    </Masonry>
  );
};
