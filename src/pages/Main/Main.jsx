import { useEffect, useState } from 'react';
import s from './Main.module.scss';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner.jsx';
import { getCategories, getNews } from '../../api/apiNews.js';
import { NewsList } from '../../components/NewsList/NewsList.jsx';
import { Skeleton } from '../../components/Skeleton/Skeleton.jsx';
import { Pagination } from '../../components/Pagination/Pagination.jsx';
import { Categories } from '../../components/Categories/Categories.jsx';

export const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === 'All' ? null : selectedCategory,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(['All', ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <main className={s.main}>
      <Categories selectedCategory={selectedCategory} categories={categories}  setSelectedCategory={setSelectedCategory} />
      {news.length > 0 && !isLoading ? <NewsBanner {...news[0]} /> : <Skeleton type={'banner'} count={1} />}
      <Pagination totalPages={totalPages}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  handlePageNumber={handlePageNumber}
                  currentPage={currentPage} />
      {!isLoading ? <NewsList news={news} /> : <Skeleton type={'item'} count={10} />}

      <Pagination totalPages={totalPages}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  handlePageNumber={handlePageNumber}
                  currentPage={currentPage} />
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