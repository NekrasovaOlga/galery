import style from './SearchList.module.scss';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';
import Images from '../List/Images';

export const SearchList = () => {
  const lists = useSelector((state) => state.galery.searchGalery);
  return (
    <Masonry
      breakpointCols={3}
      className={style['my-masonry-grid']}
      columnClassName={style['my-masonry-grid_column']}
    >
      {lists.map((item, index) => {
        return <Images key={index} data={item} link="/search" />;
      })}
    </Masonry>
  );
};
