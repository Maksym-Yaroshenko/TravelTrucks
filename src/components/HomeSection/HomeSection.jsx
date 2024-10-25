// src/components/HomeSection/HomeSection.jsx

import css from "./HomeSection.module.css";
import "../../index.css";
import { Link } from "react-router-dom";

export const HomeSection = () => {
  return (
    <div className={`${css.homeSection} section`}>
      <h1 className={css.h1Text}>Campers of your dreams</h1>
      <h3 className={css.h3Text}>
        You can find everything you want in our catalog
      </h3>
      <Link className={css.vievNowBtn} to="/catalog">
        View Now
      </Link>
    </div>
  );
};
