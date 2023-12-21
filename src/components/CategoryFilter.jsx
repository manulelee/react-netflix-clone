import classes from "./CategoryFilter.module.css";
const CategoryFilter = ({ title, genres, setterFn }) => {
  return (
    <div className={classes.categoryFilter}>
      <p className="text-4xl font-bold me-3">{title}</p>
      <select name="category" id="category" onChange={(e) => setterFn(parseInt(e.target.value))}>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
