/* eslint-disable react/prop-types */
import css from "./MenuTruckRateLoc.module.css";
import Icon from "../../images/icons.svg";
import { Link } from "react-router-dom";

export default function MenuTruckRateLoc({ truck, to }) {
  console.log(to);
  return (
    <ul className={css.menuTruckRateLoc}>
      <li className={css.itemTruckRateLoc}>
        <svg
          className={css.iconRating}
          width="16"
          height="16"
          aria-label="icon-rating"
        >
          <use href={`${Icon}#icon-rating`}></use>
        </svg>

        <p className={css.truckRatingLink}>
          <Link to={to}>
            {truck.rating}({truck.reviews.length} Reviews)
          </Link>
        </p>
      </li>

      <li className={css.itemTruckRateLoc}>
        <svg
          className={css.iconMap}
          width="16"
          height="16"
          aria-label="icon-map"
        >
          <use href={`${Icon}#icon-map`}></use>
        </svg>
        <p className={css.truckLocation}>{truck.location}</p>
      </li>
    </ul>
  );
}
