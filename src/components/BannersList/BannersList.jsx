import s from './BannersList.module.scss';
import { withSkeleton } from '../../helpers/hocs/withSkeleton.jsx';
import { NewsBanner } from '../NewsBanner/NewsBanner.jsx';

export const BannersList = ({ banners }) => {
  return (
    <ul className={s.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} banner={banner} />
      ))}
    </ul>
  );
};

export const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')