import css from "./CamperList.module.css";
import { useEffect, useState } from "react";
import { getTrucks } from "../../redux/trucks/operations.js";
import { useDispatch, useSelector } from "react-redux";
import VehicleCard from "../VehicleCard/VehicleCard.jsx";
import Loader from "../Loader/Loader.jsx";
import {
  selectTrucks,
  selectIsLoading,
  selectError,
} from "../../redux/trucks/selectors.js";

export default function CamperList() {
  const dispatch = useDispatch();

  const trucks = useSelector(selectTrucks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(getTrucks());
  }, [dispatch]);

  const loadMore = () => {
    const nextCount = visibleCount + 4;

    if (nextCount >= trucks.length) {
      setVisibleCount(trucks.length);
    } else {
      setVisibleCount(nextCount);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className={css.camperList}>
      {trucks.slice(0, visibleCount).map((truck) => (
        <li key={truck.id}>
          <VehicleCard truck={truck} />
        </li>
      ))}
      {visibleCount < trucks.length && (
        <li className={css.loadMoreButtonContainer}>
          <button onClick={loadMore} className={css.loadMoreButton}>
            Load More
          </button>
        </li>
      )}
    </ul>
  );
}
