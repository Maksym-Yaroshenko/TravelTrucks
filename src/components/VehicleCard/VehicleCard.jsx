// src/components/VehicleCard/VehicleCard.jsx

import PropTypes from "prop-types";
import css from "./VehicleCard.module.css";

export default function VehicleCard({ truck }) {
  return (
    <div className={css.VehicleCard}>
      <h2>{truck.name}</h2>
      <p>Price: ${truck.price}</p>
      <p>
        <a href={`/reviews/${truck.id}`} className={css.RatingLink}>
          Rating: {truck.rating}({truck.reviews.length} Reviews)
        </a>
      </p>
      <p>Location: {truck.location}</p>
      <p className={css.Description}>{truck.description}</p>

      <div className={css.Amenities}>
        <ul>
          {truck.AC && <li>AC</li>}
          {truck.TV && <li>TV</li>}
          {truck.bathroom && <li>Bathroom</li>}
          {truck.kitchen && <li>Kitchen</li>}
        </ul>
      </div>

      <div className={css.Gallery}>
        {truck.gallery.length > 0 && (
          <img src={truck.gallery[0].thumb} alt={`${truck.name} image`} />
        )}
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