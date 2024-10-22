import PropTypes from "prop-types";
import css from "./VehicleCard.module.css";
import "../../index.css";

export default function VehicleCard({ truck }) {
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
      <div className={css.truckRateLoc}>
        <p className={css.truckRating}>
          <a href={`/catalog/${truck.id}`} className={css.truckRatingLink}>
            Rating: {truck.rating}({truck.reviews.length} Reviews)
          </a>
        </p>
        <p className={css.truckLocation}>{truck.location}</p>
      </div>
      <p className={css.truckDescription}>{truck.description}</p>

      <ul className={css.truckFeatures}>
        {truck.AC && <li className={css.featureItem}>AC</li>}
        {truck.TV && <li className={css.featureItem}>TV</li>}
        {truck.bathroom && <li className={css.featureItem}>Bathroom</li>}
        {truck.kitchen && <li className={css.featureItem}>Kitchen</li>}
      </ul>

      <div className={css.showMoreButtonContainer}>
        <a href={`/catalog/${truck.id}`} className={css.showMoreButton}>
          Show more
        </a>
      </div>
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
