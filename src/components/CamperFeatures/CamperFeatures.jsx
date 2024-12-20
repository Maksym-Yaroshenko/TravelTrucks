// src/components/CamperFeatures/CamperFeatures.jsx
/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTrucks } from "../../redux/trucks/selectors.js";

import css from "./CamperFeatures.module.css";
import sprite from "../../images/icons.svg";

const ICONS_MAP = {
  AC: "AC",
  TV: "TV",
  bathroom: "Bathroom",
  kitchen: "Kitchen",
  radio: "Radio",
  transmission: "Automatic",
};

const Icon = ({ iconId }) => (
  <svg aria-hidden="true" width="20" height="20">
    <use xlinkHref={`${sprite}#${iconId}`} />
  </svg>
);

export default function CamperFeatures() {
  const { camperId } = useParams();
  const truck = useSelector(selectTrucks)[camperId - 1];

  const truckDetailesForm = {
    form: "Form",
    length: "Length",
    width: "Width",
    height: "Height",
    tank: "Tank",
    consumption: "Consumption",
  };

  return (
    <li className={css.container}>
      <ul className={css.menuIcons}>
        {Object.entries(ICONS_MAP).map(
          ([key, iconId]) =>
            truck[key] && (
              <li className={css.menuItemIcon} key={key}>
                <Icon className={css.icon} iconId={iconId} />
                {iconId}
              </li>
            )
        )}
      </ul>
      <h3 className={css.vehicleDetails}>Vehicle details</h3>

      <ul className={css.formMenu}>
        {Object.entries(truckDetailesForm).map(([key, name]) => (
          <li className={css.formItem} key={key}>
            <p>{name}</p>
            <p>{truck[key]}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}
