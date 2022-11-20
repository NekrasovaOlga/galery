import { useEffect } from 'react';
import style from './ImageInfo.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { imageAuthRequest } from '../../../store/image/imageAction';
import fromDate from '../../utils/formatDate';
import { likeAuthRequest } from '../../../store/like/likeAction';
import likeImg from './img/like.png';

export const ImageInfo = () => {
  const { id } = useParams();
  const page = useParams();
  let img = useSelector((state) => state.image.data);

  const { created_at: date, user, likes, urls, liked_by_user } = img;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(imageAuthRequest(id));
  }, [id]);

  const handleLike = (id) => {
    dispatch(likeAuthRequest(id, liked_by_user));
  };

  return (
    <div className={style.container}>
      <Link to={`/${page['*'].replace(/\/.*/i, '')}`}>
        <button className={style.return}>Вернуться</button>
      </Link>

      {urls && (
        <div className={style.container__img}>
          <div className={style.img}>
            <img src={urls.regular} alt="" />
          </div>
          <div className={style.info_img}>
            <p>
              Автор:{' '}
              <a className={style.link} href={user.links.html}>
                {user.name}
              </a>{' '}
            </p>
            <p>Дата публикации: {fromDate(date)}</p>
            <button className={style.likes} onClick={() => handleLike(id)}>
              {!liked_by_user ? (
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  enableBackground="new 0 0 1000 1000"
                  fill="#000"
                  width="20px"
                  height="20px"
                >
                  <g>
                    <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                      <path d="M2747,4395.8c-431.5-61.4-669.3-132.3-997.2-295.3c-838-418-1444-1212-1612.7-2119c-53.7-280-47.9-753.6,9.6-1025.9C202.3,694.8,284.8,453.2,397.9,225c178.3-362.4,368.2-615.6,694.2-928.1c481.3-460.2,3741.3-3434.5,3789.2-3455.6c28.8-13.4,82.5-23,118.9-23c36.4,0,90.1,9.6,118.9,23c61.4,26.9,3735.5,3390.4,3948.4,3612.8c402.7,423.8,661.6,916.6,786.2,1501.5c61.4,285.7,61.4,786.2,1.9,1066.2c-61.4,285.7-126.6,469.8-253.1,726.8c-149.6,299.1-327.9,546.5-567.6,784.3c-239.7,239.7-485.2,418-784.3,567.6c-264.6,130.4-435.3,189.8-719.1,251.2c-285.7,61.4-803.5,63.3-1085.4,1.9c-494.7-105.5-1020.2-360.5-1353.9-653.9l-90.1-80.5L4852.6,3740c-381.6,308.7-874.4,536.9-1342.3,621.3C3345.3,4390.1,2862.1,4413.1,2747,4395.8z M3523.6,3738.1c437.2-99.7,747.9-274.2,1114.1-627.1c174.5-170.7,235.9-218.6,291.5-228.2c147.7-28.8,195.6-1.9,433.4,228.2c473.7,456.4,910.9,650.1,1536,675c1016.3,44.1,1894.6-521.6,2239.8-1436.3c92-249.3,136.2-467.9,149.6-751.7c28.8-625.1-174.5-1188.9-598.3-1654.9c-120.8-134.2-3664.6-3388.5-3689.5-3388.5c-23,0-3540,3225.5-3670.3,3367.4c-326,350.9-548.4,818.8-606,1267.5C651,1778.2,798.7,2386.1,1128.5,2854c335.6,475.6,885.9,813.1,1488.1,910.9C2844.8,3803.3,3303.1,3787.9,3523.6,3738.1z" />
                    </g>
                  </g>
                </svg>
              ) : (
                <img src={likeImg} />
              )}
              {likes}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
