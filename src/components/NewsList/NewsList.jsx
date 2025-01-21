import s from './NewsList.module.scss';
import { formatTimeAgo } from '../../helpers/formatTimeAgo.js';
import { NewsItem } from '../NewsItem/NewsItem.jsx';

export const NewsList = ({ news }) => {
return (
  <ul className={s.list}>
    {news && news.map((item) => (
      <NewsItem key={item.id} item={item} />
    ))}
  </ul>
)

};