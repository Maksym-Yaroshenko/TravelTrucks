// src/redux/reviews/selectors.js

export const selectReviews = (state) => state.reviews.reviews;
export const selectIsLoadingReviews = (state) => state.reviews.isLoading;
export const selectReviewsError = (state) => state.reviews.error;
