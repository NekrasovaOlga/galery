import style from './List.module.scss';
import Masonry from 'react-masonry-css';
import { useDispatch, useSelector } from 'react-redux';
import { galeryRequestAsync } from '../../../store/galery/galeryAction';
import { useEffect, useRef } from 'react';
import Images from './Images';
import { Outlet, useParams } from 'react-router-dom';

export const List = (props) => {
  const lists = useSelector((state) => state.galery.galery);
  const dispatch = useDispatch();
  const { page } = useParams();

  const endList = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(galeryRequestAsync(true));
        }
      },
      {
        rootMargin: '100px',
      }
    );
    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  useEffect(() => {
    dispatch(galeryRequestAsync(false));
  }, [page]);
  return (
    <Masonry
      breakpointCols={3}
      className={style['my-masonry-grid']}
      columnClassName={style['my-masonry-grid_column']}
    >
      {lists.map((item, index) => {
        return <Images key={index} data={item} link="/galery" />;
      })}
      <div ref={endList} className={style.end} />
      <Outlet />
    </Masonry>
  );
};
