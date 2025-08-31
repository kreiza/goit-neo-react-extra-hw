import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search contacts..."
      />
    </div>
  );
}