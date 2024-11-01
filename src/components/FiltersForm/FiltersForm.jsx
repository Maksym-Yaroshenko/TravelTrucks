// src/components/FiltersForm/FiltersForm.jsx

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slicer.js";
import css from "./FiltersForm.module.css";
import "../../index.css";
import { useState } from "react";
import sprite from "../../images/icons.svg";
import { selectFilters } from "../../redux/filters/selectors.js";

export default function FiltersForm() {
  const dispatch = useDispatch();
  const shapeValuesFromSlicer = useSelector(selectFilters);

  const [filtersForm, setFiltersForm] = useState(shapeValuesFromSlicer);

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    const formattedName = name.replace(/\s+/g, "");

    setFiltersForm((prevFilters) => ({
      ...prevFilters,
      [formattedName]: checked,
    }));
  };

  const handleSearch = () => {
    dispatch(setFilter(filtersForm));
  };

  const equipmentLabels = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
  const typeLabels = ["Van", "Fully Integrated", "Alcove"];

  return (
    <div className={css.filtersForm}>
      <h2 className="visually-hidden">Filters</h2>

      <div className={css.locationContainer}>
        <p className={css.locationTitle}>Location</p>
        <p className={css.locationContent}>
          <svg
            // className={css.iconMap}
            width="20"
            height="20"
            aria-label="icon-map"
          >
            <use href={`${sprite}#icon-map`}></use>
          </svg>
          <span>Kyiv, Ukraine</span>
        </p>
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
          type="button"
          onClick={handleSearch}
          className={css.searchButton}
        >
          Search
        </button>
      </div>
    </div>
  );
}
