import { formatDate } from '../../helpers/formatDate.js';
import { useEffect, useState } from 'react';
import s from './Header.module.scss'

export const Header = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);
  return (
    <header className={s.header}>
      <h2>Good morning</h2>
      <h1>News Reactify</h1>
      <p>{formatDate(currentDate)}</p>
    </header>
  );
};