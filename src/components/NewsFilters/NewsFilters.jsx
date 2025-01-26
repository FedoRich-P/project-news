import { Categories } from '../Categories/Categories.jsx';
import { Search } from '../Search/Search.jsx';
import { useFetch } from '../../helpers/hooks/useFetch.js';
import { getCategories } from '../../api/apiNews.js';
import s from './NewsFilters.module.scss';

export const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={s.filters}>
      {dataCategories && <Categories selectedCategory={filters.category}
                                     categories={dataCategories.categories}
                                     setSelectedCategory={(category) => changeFilter('category', category)} />}
      <Search keywords={filters.keywords}
              setKeywords={(keywords) => changeFilter('keywords', keywords)} />
    </div>);
};