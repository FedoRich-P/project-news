import s from './Image.module.scss';
import { formatTimeAgo } from '../../helpers/formatTimeAgo.js';

export const Image = ({image}) => {
return (
  <div className={s.wrapper}>
    {image ? <img src={image} alt="News image" className={s.image}/> : "There are no images"}
  </div>
)

};