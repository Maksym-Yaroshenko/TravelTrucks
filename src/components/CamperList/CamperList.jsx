// src/components/CamperList/CamperList.jsx

import css from "./CamperList.module.css";
import { useEffect, useState } from "react";
import { getTrucks } from "../../redux/trucks/operations.js";
import { useDispatch, useSelector } from "react-redux";
import VehicleCard from "../VehicleCard/VehicleCard.jsx"

export const CamperList = () => {
  const dispatch = useDispatch();

  const trucks = useSelector((state) => state.trucks.items);
  const isLoading = useSelector((state) => state.trucks.isLoading);
  const error = useSelector((state) => state.trucks.error);

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
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`${css.CamperList}`}>
      {trucks.slice(0, visibleCount).map((truck) => (
        <VehicleCard key={truck.id} truck={truck} />
      ))}
      {visibleCount < trucks.length && (
        <button onClick={loadMore} className={css.loadMoreButton}>
          LoadMore
        </button>
      )}
    </div>
  );
};
