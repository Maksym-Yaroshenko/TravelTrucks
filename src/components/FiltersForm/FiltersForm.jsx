// src/components/FiltersForm/FiltersForm.jsx

import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/slicer.js";
import css from "./FiltersForm.module.css";
import "../../index.css";
import { CiMap } from "react-icons/ci";
import { useState } from "react";
import sprite from "../../images/icons.svg";

export default function FiltersForm() {
  const dispatch = useDispatch();

  const [filtersForm, setFiltersForm] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
    Van: false,
    FullyIntegrated: false,
    Alcove: false,
  });

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    const formattedName = name.replace(/\s+/g, "");

    setFiltersForm((prevFilters) => {
      const updatedFiltersForm = {
        ...prevFilters,
        [formattedName]: checked,
      };

      dispatch(setFilter(updatedFiltersForm));

      return updatedFiltersForm;
    });
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
            <li key={label} className={css.filterItem}>
              <label htmlFor={label}>
                <input
                  type="checkbox"
                  id={label}
                  name={label}
                  checked={filtersForm[label.replace(/\s+/g, "")]}
                  onChange={handleCheck}
                />
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
              <label htmlFor={label}>
                <input
                  type="checkbox"
                  id={label}
                  name={label}
                  checked={filtersForm[label.replace(/\s+/g, "")]}
                  onChange={handleCheck}
                />
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
        <button type="button" className={css.searchButton}>
          Search
        </button>
      </div>
    </div>
  );
}
