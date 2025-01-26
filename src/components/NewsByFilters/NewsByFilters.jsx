import s from './NewsByFilters.module.scss';
import { Pagination } from '../Pagination/Pagination.jsx';
import { TOTAL_PAGES } from '../../constants/constatnts.js';
import { NewsListWithSkeleton } from '../NewsList/NewsList.jsx';
import { NewsFilters } from '../NewsFilters/NewsFilters.jsx';

export const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) changeFilter('page_number', filters.page_number + 1);
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) changeFilter('page_number', filters.page_number - 1);
  };

  const handlePageNumber = (pageNumber) => {
    changeFilter('page_number', pageNumber);
  };

  return (
    <section className={s.section}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />
      <Pagination totalPages={TOTAL_PAGES}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  handlePageNumber={handlePageNumber}
                  currentPage={filters.page_number} />
      <NewsListWithSkeleton isLoading={isLoading}
                            news={news} />
      <Pagination totalPages={TOTAL_PAGES}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  handlePageNumber={handlePageNumber}
                  currentPage={filters.page_number} />
    </section>
  );
};