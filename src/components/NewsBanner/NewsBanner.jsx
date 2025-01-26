import s from './NewsBanner.module.scss';
import { formatTimeAgo } from '../../helpers/formatTimeAgo.js';
import { Image } from '../Image/Image.jsx';

export const NewsBanner = ({ banner }) => {
  return (
    <article className={s.banner}>
      <Image image={banner?.image} />
      <h3>{banner?.title}</h3>
      <p>{formatTimeAgo(banner?.published)} by {banner?.author}</p>
    </article>
  );
};