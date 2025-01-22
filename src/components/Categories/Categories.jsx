import s from './Categories.module.scss';

export const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {

  return (
    <ul className={s.categories}>
      {categories.map(category => (
        <li key={category.id}>
          <button className={`${s.item} ${selectedCategory === category ? s.active : ''}`}
                  onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};