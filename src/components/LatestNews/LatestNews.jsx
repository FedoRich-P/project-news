import s from './LatestNews.module.scss';
import { BannersList } from '../BannersList/BannersList.jsx';

export const LatestNews = ({banners, isLoading}) => {
  return (
    <section className={s.section}>
      <BannersList banners={banners}  isLoading={isLoading}/>
    </section>
  );
};