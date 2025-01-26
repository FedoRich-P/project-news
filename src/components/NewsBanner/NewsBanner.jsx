import s from './NewsBanner.module.scss';
import { formatTimeAgo } from '../../helpers/formatTimeAgo.js';
import { Image } from '../Image/Image.jsx';
import { withSkeleton } from '../../helpers/hocs/withSkeleton.jsx';

const NewsBanner = ({ item }) => {
  return (
    <article className={s.banner}>
      <Image image={item?.image} />
      <h3>{item?.title}</h3>
      <p>{formatTimeAgo(item?.published)} by {item?.author}</p>
    </article>
  );
};

export const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1)