// src/components/VehicleCard/VehicleCard.jsx


import css from "./VehicleCard.module.css";
import "../../index.css";
import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors.js";
import { Link } from "react-router-dom";
import MenuTruckRateLoc from "../MenuTruckRateLoc/MenuTruckRateLoc.jsx";

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

      <h3 className={css.truckName}>{truck.name}</h3>
      <p className={css.truckPrice}>€{truck.price}</p>
      <MenuTruckRateLoc truck={truck} to={`/catalog/${truck.id}`} />
      {/* <div className={css.truckRateLoc}>
        <p className={css.truckRating}>
          <Link className={css.truckRatingLink} to={`/catalog/${truck.id}`}>
            Rating: {truck.rating}({truck.reviews.length} Reviews)
          </Link>
        </p>
        <p className={css.truckLocation}>{truck.location}</p>
      </div> */}
      <p className={css.truckDescription}>{truck.description}</p>

      <ul className={css.truckFeatures}>
        {truck.AC && <li className={css.featureItem}>AC</li>}
        {truck.TV && <li className={css.featureItem}>TV</li>}
        {truck.bathroom && <li className={css.featureItem}>Bathroom</li>}
        {truck.kitchen && <li className={css.featureItem}>Kitchen</li>}
      </ul>

      <div className={css.showMoreButtonContainer}>
        <Link className={css.showMoreButton} to={`/catalog/${truck.id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
}
