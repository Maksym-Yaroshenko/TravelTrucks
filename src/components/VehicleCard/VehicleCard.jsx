// src/components/VehicleCard/VehicleCard.jsx

import css from "./VehicleCard.module.css";
import "../../index.css";
import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors.js";
import { Link } from "react-router-dom";
import MenuTruckRateLoc from "../MenuTruckRateLoc/MenuTruckRateLoc.jsx";
import sprite from "../../images/icons.svg";

// eslint-disable-next-line react/prop-types
export default function VehicleCard({ id }) {
  const truck = useSelector(selectTrucks)[id];

  return (
    <div className={css.vehicleCard}>
      <h2 className="visually-hidden">Trucks List</h2>
      <div className={css.truckImage}>
        {truck.gallery.length > 0 && (
          <img src={truck.gallery[0].thumb} alt={`${truck.name} image`} />
        )}
      </div>

      <div className={css.truckHeader}>
        <h3 className={css.truckName}>{truck.name}</h3>
        <div className={css.truckPriceContainer}>
          <p className={css.truckPrice}>€{truck.price}</p>
          <svg width="25" height="24">
            <use xlinkHref={`${sprite}#Heart`} />
          </svg>
        </div>
      </div>
      <MenuTruckRateLoc truck={truck} to={`/catalog/${truck.id}`} />

      <p className={css.truckDescription}>{truck.description}</p>

      <ul className={css.truckFeatures}>
        {truck.AC && (
          <li className={css.featureItem}>
            <svg className={css.featureIcon}>
              <use xlinkHref={`${sprite}#AC`} />
            </svg>
            AC
          </li>
        )}
        {truck.TV && (
          <li className={css.featureItem}>
            <svg className={css.featureIcon}>
              <use xlinkHref={`${sprite}#TV`} />
            </svg>
            TV
          </li>
        )}
        {truck.bathroom && (
          <li className={css.featureItem}>
            <svg className={css.featureIcon}>
              <use xlinkHref={`${sprite}#Bathroom`} />
            </svg>
            Bathroom
          </li>
        )}
        {truck.kitchen && (
          <li className={css.featureItem}>
            <svg className={css.featureIcon}>
              <use xlinkHref={`${sprite}#Kitchen`} />
            </svg>
            Kitchen
          </li>
        )}
      </ul>

      <div className={css.showMoreButtonContainer}>
        <Link className={css.showMoreButton} to={`/catalog/${truck.id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
}
