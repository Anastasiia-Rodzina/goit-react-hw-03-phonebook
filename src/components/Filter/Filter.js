import css from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.filter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
export default Filter;
