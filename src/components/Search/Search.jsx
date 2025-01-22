import s from './Search.module.scss';

// eslint-disable-next-line react/prop-types
export const Search = ({ keywords, setKeywords }) => {

  return (
    <div className={s.search}>
      <input type="text" className={s.input} value={keywords} onChange={(e) => setKeywords(e.target.value)} />
    </div>
  );
};