// src/components/FiltersForm/FiltersForm.jsx

import css from "./FiltersForm.module.css";
import "../../index.css";

export const FiltersForm = () => {
  return (
    <div className={`${css.FiltersForm}`}>
      <h2 className="visually-hidden">Filters</h2>
      <ul>
        <li>Location</li>
        <li>
          Filters
          <ul>
            <li>Vehicle equipment</li>
            <li>Vehicle type</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
