// src/components/CamperReviews/CamperReviews.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../redux/reviews/operations";
import {
  selectReviews,
  selectIsLoadingReviews,
  selectReviewsError,
} from "../../redux/reviews/selectors";
import css from "./CamperReviews.module.css";
import PropTypes from "prop-types";
import "../../index.css";
import Loader from "../Loader/Loader.jsx";

export default function CamperReviews({ camperId }) {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(selectIsLoadingReviews);
  const error = useSelector(selectReviewsError);

  useEffect(() => {
    dispatch(fetchReviews(camperId));
  }, [dispatch, camperId]);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading reviews: {error}</p>;

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

CamperReviews.propTypes = {
  camperId: PropTypes.string.isRequired,
};
