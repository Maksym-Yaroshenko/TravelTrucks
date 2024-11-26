// src/components/Navigation/Navigation.jsx

import { NavLink, useLocation } from "react-router-dom";

import css from "./Navigation.module.css";
import sprite from "../../images/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectorBooleanFavorite } from "../../redux/isFavorite/selectors.js";
import { toggleFavorites } from "../../redux/isFavorite/slicer.js";

export default function Navigation() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const booleanFavorite = useSelector(selectorBooleanFavorite);
  // console.log(booleanFavorite);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorites(!booleanFavorite));
  };

  return (
    <nav>
      <ul className={css.navigationList}>
        <li>
          <NavLink
            className={`${css.linkItem} ${pathname === "/" && css.active}`}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${css.linkItem} ${
              pathname === "/catalog" && css.active
            }`}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </li>
        <li onClick={handleFavoriteClick}>
          Favorite
          <svg width="25" height="25">
            <use xlinkHref={`${sprite}#Heart`} />
          </svg>
        </li>
      </ul>
    </nav>
  );
}
