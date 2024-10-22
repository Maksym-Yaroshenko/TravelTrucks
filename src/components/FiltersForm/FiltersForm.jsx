// src/components/FiltersForm/FiltersForm.jsx

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/trucks/slicer.js";
import css from "./FiltersForm.module.css";
import { selectTrucks } from "../../redux/trucks/selectors.js";
import { CiMap } from "react-icons/ci";

const FiltersForm = () => {
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

      <div className={css.content}>
        <p className={css.text}>Location</p>
        <p className={css.location}>
          <CiMap size={20} />
          <span>Kyiv, Ukraine</span>
        </p>
      </div>

      <fieldset>
        <legend className={css.typeFilter}>Vehicle equipment</legend>
        <ul className={css.list}>
          {equipmentLabels.map((label) => (
            <div key={label} className={css.item}>
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
        <ul className={css.list}>
          {typeLabels.map((label) => (
            <li key={label} className={css.item}>
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

      <button type="button" className={css.searchButton}>
        Search
      </button>
    </div>
  );
};

export default FiltersForm;
