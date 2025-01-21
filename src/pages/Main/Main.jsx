import React, { useEffect, useState } from 'react';
import s from './Main.module.scss';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner.jsx';
import { getNews } from '../../api/apiNews.js';
import { NewsList } from '../../components/NewsList/NewsList.jsx';

export const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={s.main}>
      <NewsBanner {...news[0]} />
      <NewsList news={news}/>
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