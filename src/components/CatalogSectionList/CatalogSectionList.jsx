// src/components/CatalogSectionList/CatalogSectionList.jsx

import css from "./CatalogSectionList.module.css";

import { useEffect } from "react";
import { getTrucks } from "../../redux/trucks/operations.js";
import {
  useDispatch,
  // useSelector
} from "react-redux";

export const CatalogSectionList = () => {
  const dispatch = useDispatch();
  // const trucks = useSelector((state) => state.trucks.trucks);
  // const isLoading = useSelector((state) => state.trucks.isLoading);
  // const error = useSelector((state) => state.trucks.error);

  useEffect(() => {
    dispatch(getTrucks());
  }, [dispatch]);

  return <div className={`${css.catalogSectionList}`}></div>;
};
