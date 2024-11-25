/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
// src/components/VehicleCard/VehicleCard.jsx

import css from "./VehicleCard.module.css";
import "../../index.css";
import { Link } from "react-router-dom";
import sprite from "../../images/icons.svg";
import MenuTruckRateLoc from "../MenuTruckRateLoc/MenuTruckRateLoc.jsx";
import { setIsFavorite } from "../../redux/isFavorite/slicer.js";
import { useDispatch, useSelector } from "react-redux";
import { selectorIsFavorite } from "../../redux/isFavorite/selectors.js";

export default function VehicleCard({ truck }) {
  if (!truck) return null;
  const dispatch = useDispatch();
  const favorites = useSelector(selectorIsFavorite);
  const booleanFavorite = favorites.includes(Number(truck.id));

  const objectIcons = {
    AC: "AC",
    TV: "TV",
    bathroom: "Bathroom",
    kitchen: "Kitchen",
  };

  const handleFavoriteClick = () => {
    dispatch(setIsFavorite(truck.id));
  };

  return (
    <div className={css.vehicleCard}>
      <h2 className="visually-hidden">Trucks List</h2>
      <div className={css.truckImage}>
        {truck.gallery && truck.gallery.length > 0 && (
          <img src={truck.gallery[0].thumb} alt={`${truck.name} image`} />
        )}
      </div>

      <div className={css.truckHeader}>
        <h3 className={css.truckName}>{truck.name}</h3>
        <div className={css.truckPriceContainer}>
          <p className={css.truckPrice}>€{truck.price}</p>
          <svg
            className={`${css.svgBorder} ${
              booleanFavorite ? css.svgBorderActive : ""
            }`}
            onClick={handleFavoriteClick}
            width="25"
            height="24"
          >
            <use xlinkHref={`${sprite}#Heart`} />
          </svg>
        </div>
      </div>
      <MenuTruckRateLoc truck={truck} to={`/catalog/${truck.id}`} />

      <p className={css.truckDescription}>{truck.description}</p>

      <ul className={css.truckFeatures}>
        {Object.entries(objectIcons).map(
          ([key, name]) =>
            // console.log(key, name);
            truck[key] && (
              <li className={css.featureItem} key={key}>
                <svg className={css.featureIcon}>
                  <use xlinkHref={`${sprite}#${name}`} />
                </svg>
                <p className={css.featureItemName}>{name}</p>
              </li>
            )
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
