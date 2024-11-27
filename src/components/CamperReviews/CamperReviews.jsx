// src/components/CamperReviews/CamperReviews.jsx
// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { fetchReviews } from "../../redux/reviews/operations";
// import {
//   selectReviews,
//   selectIsLoadingReviews,
//   selectReviewsError,
// } from "../../redux/reviews/selectors";
import css from "./CamperReviews.module.css";
import "../../index.css";
// import Loader from "../Loader/Loader.jsx";
import { useParams } from "react-router-dom";
import { selectTrucks } from "../../redux/trucks/selectors.js";

// export default function CamperReviews({ camperId2 }) {
export default function CamperReviews() {
  // const dispatch = useDispatch();
  // const reviews = useSelector(selectReviews);
  // const isLoading = useSelector(selectIsLoadingReviews);
  // const error = useSelector(selectReviewsError);

  const { camperId } = useParams();
  // console.log(camperId2);
  // console.log(camperId);
  const { reviews } = useSelector(selectTrucks)[camperId - 1];

  // useEffect(() => {
  //   dispatch(fetchReviews(camperId));
  // }, [dispatch, camperId]);

  // if (isLoading) return <Loader />;
  // if (error) return <p>Error loading reviews: {error}</p>;

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
