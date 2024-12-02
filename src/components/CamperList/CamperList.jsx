// src/components/CamperList/CamperList.jsx

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
import { selectFilters } from "../../redux/filters/selectors.js";
import {
  selectorBooleanFavorite,
  selectorIsFavorite,
} from "../../redux/isFavorite/selectors.js";

export default function CamperList() {
  const dispatch = useDispatch();

  const trucks = useSelector(selectTrucks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const booleanFavorite = useSelector(selectorBooleanFavorite);
  const arrFavorite = useSelector(selectorIsFavorite);

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(getTrucks());
  }, [dispatch]);

  const filterTrucks = (trucks, filters) => {
    return trucks.filter((truck) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;

        const filterKeyMap = {
          AC: "AC",
          Automatic: "transmission",
          Bathroom: "bathroom",
          Kitchen: "kitchen",
          TV: "TV",
          Van: "form",
          FullyIntegrated: "form",
          Alcove: "form",
          location: "location",
        };

        const truckKey = filterKeyMap[key];
        const truckValue = truck[truckKey];

        if (key === "location") return truckValue.includes(value);

        if (key === "Automatic") return truckValue === "automatic";
        if (key === "Van") return truckValue === "panelTruck";
        if (key === "FullyIntegrated") return truckValue === "fullyIntegrated";
        if (key === "Alcove") return truckValue === "alcove";

        return truckValue === true;
      });
    });
  };

  const filteredTrucks = filterTrucks(trucks, filters);

  const loadMore = () => {
    const nextCount = visibleCount + 4;

    if (nextCount >= filteredTrucks.length) {
      setVisibleCount(filteredTrucks.length);
    } else {
      setVisibleCount(nextCount);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>An error has occurred. Please refresh the page.{error}</div>;
  }

  return (
    <ul className={css.camperList}>
      {(booleanFavorite
        ? filteredTrucks.filter((truck) =>
            arrFavorite.includes(Number(truck.id))
          )
        : filteredTrucks
      )
        .slice(0, visibleCount)
        .map((truck) => (
          <li className={css.card} key={truck.id}>
            <VehicleCard truck={truck} />
          </li>
        ))}
      {booleanFavorite && arrFavorite.length === 0 && (
        <h3 className={css.noFeaturedCampers}>
          There are no featured campers yet.
        </h3>
      )}
      {visibleCount < filteredTrucks.length && !booleanFavorite && (
        <li className={`${css.loadMoreButtonContainer} ${css.card}`}>
          <button className={css.loadMoreButton} onClick={loadMore}>
            Load More
          </button>
        </li>
      )}
    </ul>
  );
}
