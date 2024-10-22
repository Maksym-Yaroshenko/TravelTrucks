import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/trucks/slicer.js";
import css from "./FiltersForm.module.css";
import "../../index.css";
import { selectTrucks } from "../../redux/trucks/selectors.js";
import { CiMap } from "react-icons/ci";

export default function FiltersForm() {
  const dispatch = useDispatch();
  const filters = useSelector(selectTrucks);
  console.log(filters);

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    dispatch(setFilter({ filter: name, value: checked }));
  };

  const equipmentLabels = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
  const typeLabels = ["Van", "Fully Integrated", "Alcove"];

  return (
    <div className={css.filtersForm}>
      <h2 className="visually-hidden">Filters</h2>

      <div className={css.locationContainer}>
        <p className={css.locationTitle}>Location</p>
        <p className={css.locationContent}>
          <CiMap size={20} />
          <span>Kyiv, Ukraine</span>
        </p>
      </div>

      <fieldset>
        <legend className={css.typeFilter}>Vehicle equipment</legend>
        <ul className={css.filterList}>
          {equipmentLabels.map((label) => (
            <div key={label} className={css.filterItem}>
              <label>
                <input
                  type="checkbox"
                  name={label}
                  checked={filters[label] || false}
                  onChange={handleCheck}
                />
                {label}
              </label>
            </div>
          ))}
        </ul>
      </fieldset>

      <fieldset>
        <legend className={css.typeFilter}>Vehicle type</legend>
        <ul className={css.filterList}>
          {typeLabels.map((label) => (
            <li key={label} className={css.filterItem}>
              <label>
                <input
                  type="checkbox"
                  name={label}
                  checked={filters[label] || false}
                  onChange={handleCheck}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <div className={css.searchButtonContainer}>
        <button type="button" className={css.searchButton}>
          Search
        </button>
      </div>
    </div>
  );
}
