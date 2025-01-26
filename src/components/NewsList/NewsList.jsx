import s from './NewsList.module.scss';
import { NewsItem } from '../NewsItem/NewsItem.jsx';
import { withSkeleton } from '../../helpers/hocs/withSkeleton.jsx';

const NewsList = ({ news }) => {
  return (
    <ul className={s.list}>
      {news && news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);