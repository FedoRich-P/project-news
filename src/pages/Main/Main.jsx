import s from './Main.module.scss';
import { getNews } from '../../api/apiNews.js';
import { useDebounce } from '../../helpers/hooks/useDebounce.js';
import { PAGE_SIZE } from '../../constants/constatnts.js';
import { useFetch } from '../../helpers/hooks/useFetch.js';
import { useFilters } from '../../helpers/hooks/useFilters.js';
import { LatestNews } from '../../components/LatestNews/LatestNews.jsx';
import { NewsByFilters } from '../../components/NewsByFilters/NewsByFilters.jsx';

export const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading, data } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <main className={s.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />
      <NewsByFilters filters={filters} changeFilter={changeFilter} news={data?.news} isLoading={isLoading} />
    </main>
  );
};

// type Article = {
//   author: string;
//   category: string[];
//   description: string;
//   id: string;
//   image: string;
//   language: string;
//   published: string;
//   title: string;
//   url: string;
// };