import s from './NewsItem.module.scss';
import { formatTimeAgo } from '../../helpers/formatTimeAgo.js';
import { Image } from '../Image/Image.jsx';

export const NewsItem = ({ item }) => {
return (
  <li className={s.item}>
    <article className={s.article}>
      <div
        className={s.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
        role="img"
        aria-label={item.title}
      ></div>
      <div className={s.info}>
        <h3 className={s.title}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item?.title}
          </a>
        </h3>
        <p className={s.meta}>
          <time dateTime={item?.published}>{formatTimeAgo(item?.published)}</time>
          by <span>{item?.author}</span>
        </p>
      </div>
    </article>
  </li>
)

};