import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slicer.js";
import css from "./FiltersForm.module.css";
import { useState, useEffect } from "react";
import sprite from "../../images/icons.svg";
import { selectFilters } from "../../redux/filters/selectors.js";
import { toggleFavorites } from "../../redux/isFavorite/slicer.js";
import { selectorBooleanFavorite } from "../../redux/isFavorite/selectors.js";

export default function FiltersForm() {
  const dispatch = useDispatch();
  const shapeValuesFromSlicer = useSelector(selectFilters);
  const booleanFavorite = useSelector(selectorBooleanFavorite);

  const [filtersForm, setFiltersForm] = useState(shapeValuesFromSlicer);

  useEffect(() => {
    setFiltersForm(shapeValuesFromSlicer);
  }, [shapeValuesFromSlicer]);

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    const formattedName = name.replace(/\s+/g, "");

    setFiltersForm((prevFilters) => ({
      ...prevFilters,
      [formattedName]: checked,
    }));
  };

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setFiltersForm((prevFilters) => ({
      ...prevFilters,
      location: newLocation,
    }));
  };

  const handleSearch = () => {
    return dispatch(setFilter(filtersForm));
  };

  const handleFavoriteClick = (e) => {
    const id = e.target.id;
    if (id === "favorite") {
      return dispatch(toggleFavorites(true));
    } else if (id === "all") {
      return dispatch(toggleFavorites(false));
    }
  };

  const equipmentLabels = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
  const typeLabels = ["Van", "Fully Integrated", "Alcove"];

  return (
    <div className={css.filtersForm}>
      <ul className={css.filterListFavorite} onClick={handleFavoriteClick}>
        <li
          className={`${css.filterItemFavorite} ${
            booleanFavorite === true ? css.filterItemFavoriteActive : ""
          }`}
          id="favorite"
        >
          FAVORITE
          <svg className={css.heartIcon} width="20" height="20">
            <use xlinkHref={`${sprite}#Heart`} />
          </svg>
        </li>
        <li
          className={`${css.filterItemFavorite} ${
            booleanFavorite === false ? css.filterItemFavoriteActive : ""
          }`}
          id="all"
        >
          ALL
        </li>
      </ul>
      <form action="">
        <h2 className="visually-hidden">Filters</h2>
        <div className={css.locationContainer}>
          <p className={css.locationTitle}>Location</p>
          <div className={css.locationInputContainer}>
            <svg className={css.iconMap}>
              <use xlinkHref={`${sprite}#icon-map`} />
            </svg>
            <input
              type="text"
              className={css.locationInput}
              placeholder="Enter location"
              onChange={handleLocationChange}
            />
          </div>
        </div>
        <fieldset>
          <legend className={css.typeFilter}>Vehicle equipment</legend>
          <ul className={css.filterList}>
            {equipmentLabels.map((label) => (
              <li key={label} className={css.filterItem}>
                <input
                  className={css.input}
                  type="checkbox"
                  id={label}
                  name={label}
                  value="true"
                  checked={filtersForm[label.replace(/\s+/g, "")]}
                  onChange={handleCheck}
                />
                <label htmlFor={label}>
                  <div className={css.iconAndText}>
                    <svg className={css.filterItemIcon}>
                      <use xlinkHref={`${sprite}#${label}`} />
                    </svg>
                    {label}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset>
          <legend className={css.typeFilter}>Vehicle type</legend>
          <ul className={css.filterList}>
            {typeLabels.map((label) => (
              <li key={label} className={css.filterItem}>
                <input
                  type="checkbox"
                  id={label}
                  name={label}
                  value="true"
                  checked={filtersForm[label.replace(/\s+/g, "")]}
                  onChange={handleCheck}
                />
                <label htmlFor={label}>
                  <div className={css.iconAndText}>
                    <svg className={css.filterItemIcon}>
                      <use xlinkHref={`${sprite}#${label}`} />
                    </svg>
                    {label}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <div className={css.searchButtonContainer}>
          <button
            className={css.searchButton}
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
