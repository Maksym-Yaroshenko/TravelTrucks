// src/components/VehicleCard/VehicleCard.jsx

import PropTypes from "prop-types";
import css from "./VehicleCard.module.css";

export default function VehicleCard({ truck }) {
  return (
    <div className={css.VehicleCard}>
      <div className={css.TruckImage}>
        {truck.gallery.length > 0 && (
          <img src={truck.gallery[0].thumb} alt={`${truck.name} image`} />
        )}
      </div>

      <h2 className={css.TruckName}>{truck.name}</h2>
      <p className={css.TruckPrice}>€{truck.price}</p>
      <div className={css.TruckRateLoc}>
        <p className={css.TruckRating}>
          <a href={`/catalog/${truck.id}`} className={css.TruckRatingLink}>
            Rating: {truck.rating}({truck.reviews.length} Reviews)
          </a>
        </p>
        <p className={css.TruckLocation}>{truck.location}</p>
      </div>
      <p className={css.TruckDescription}>{truck.description}</p>

      <ul className={css.TruckFeatures}>
        {truck.AC && <li className={css.FeatureItem}>AC</li>}
        {truck.TV && <li className={css.FeatureItem}>TV</li>}
        {truck.bathroom && <li className={css.FeatureItem}>Bathroom</li>}
        {truck.kitchen && <li className={css.FeatureItem}>Kitchen</li>}
      </ul>

      <a href={`/catalog/${truck.id}`} className={css.ShowMoreButton}>
        Show more
      </a>
    </div>
  );
}

VehicleCard.propTypes = {
  truck: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewer_name: PropTypes.string,
        reviewer_rating: PropTypes.number,
        comment: PropTypes.string,
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
    AC: PropTypes.bool,
    TV: PropTypes.bool,
    bathroom: PropTypes.bool,
    kitchen: PropTypes.bool,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string,
      })
    ).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
