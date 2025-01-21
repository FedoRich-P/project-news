import s from './NewsBanner.module.scss';
import { formatTimeAgo } from '../../helpers/formatTimeAgo.js';
import { Image } from '../Image/Image.jsx';

export const NewsBanner = (item) => {
return (
  <article className={s.baner}>
    <Image image={item?.image} />
    <h3>{item?.title}</h3>
    <p>{formatTimeAgo(item?.published)} by {item?.author}</p>
  </article>
)

};