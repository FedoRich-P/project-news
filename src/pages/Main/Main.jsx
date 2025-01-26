import { useEffect, useState } from 'react';
import s from './Main.module.scss';
import { NewsBannerWithSkeleton } from '../../components/NewsBanner/NewsBanner.jsx';
import { getCategories, getNews } from '../../api/apiNews.js';
import { Skeleton } from '../../components/Skeleton/Skeleton.jsx';
import { Pagination } from '../../components/Pagination/Pagination.jsx';
import { Categories } from '../../components/Categories/Categories.jsx';
import { Search } from '../../components/Search/Search.jsx';
import { useDebounce } from '../../helpers/hooks/useDebounce.js';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constatnts.js';
import { NewsListWithSkeleton } from '../../components/NewsList/NewsList.jsx';
import { useFetch } from '../../helpers/hooks/useFetch.js';
import { useFilters } from '../../helpers/hooks/useFilters.js';

export const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });
  // const [filters, setFilters] = useState({
  //   page_number: 1,
  //   page_size: PAGE_SIZE,
  //   category: null,
  //   keywords: '',
  // });
  //
  // const changeFilter = (key, value) => {
  //   setFilters((prevState) => ({ ...prevState, [key]: value }));
  // };

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading, data } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

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
    <main className={s.main}>
      {dataCategories && <Categories selectedCategory={filters.category}
                                     categories={dataCategories.categories}
                                     setSelectedCategory={(category) => changeFilter('category', category)} />}
      <Search keywords={filters.keywords}
              setKeywords={(keywords) => changeFilter('keywords', keywords)} />
      <NewsBannerWithSkeleton isLoading={isLoading} item={data && data.news && data.news[0]} />
      <Pagination totalPages={TOTAL_PAGES}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  handlePageNumber={handlePageNumber}
                  currentPage={filters.page_number} />
      <NewsListWithSkeleton isLoading={isLoading}
                            news={data?.news} />
      <Pagination totalPages={TOTAL_PAGES}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  handlePageNumber={handlePageNumber}
                  currentPage={filters.page_number} />
    </main>
  );
};

// const fetchNews = async (currentPage) => {
//   try {
//     setIsLoading(true);
//     const response = await getNews({
//       page_number: currentPage,
//       page_size: PAGE_SIZE,
//       category: selectedCategory === 'All' ? null : selectedCategory,
//       keywords: debouncedKeywords,
//     });
//     setNews(response.news);
//     setIsLoading(false);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchCategories = async () => {
//   try {
//     const response = await getCategories();
//     setCategories(['All', ...response.categories]);
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   fetchCategories();
// }, []);
//
// useEffect(() => {
//   fetchNews(currentPage);
// }, [currentPage, selectedCategory, debouncedKeywords]);

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