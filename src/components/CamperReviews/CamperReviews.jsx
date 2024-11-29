// src/components/CamperReviews/CamperReviews.jsx
import "../../index.css";
import css from "./CamperReviews.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTrucks } from "../../redux/trucks/selectors.js";

export default function CamperReviews() {
  const { camperId } = useParams();

  const { reviews } = useSelector(selectTrucks)[camperId - 1];

  return (
    <li className={css.reviewSection}>
      <h2 className="visually-hidden">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.reviewer_name} className={css.reviewContainer}>
          <div className={css.avatar}>{review.reviewer_name.charAt(0)}</div>
          <div className={css.reviewContent}>
            <h3 className={css.reviewName}>
              {review.reviewer_name}, {review.reviewer_rating} stars
            </h3>
            <p className={css.reviewComment}>{review.comment}</p>
          </div>
        </div>
      ))}
    </li>
  );
}
