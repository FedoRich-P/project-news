import  { useEffect, useState } from 'react';
import s from './Main.module.scss';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner.jsx';
import { getNews } from '../../api/apiNews.js';
import { NewsList } from '../../components/NewsList/NewsList.jsx';
import { Skeleton } from '../../components/Skeleton/Skeleton.jsx';

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={s.main}>
      {news.length > 0 && !isLoading ? <NewsBanner {...news[0]} /> : <Skeleton type={'banner'} count={1} />}
      {!isLoading ? <NewsList news={news} /> : <Skeleton type={'item'} count={10} />}
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