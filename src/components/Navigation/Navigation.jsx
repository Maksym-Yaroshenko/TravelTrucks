// src/components/Navigation/Navigation.jsx

import { NavLink, useLocation } from "react-router-dom";

import css from "./Navigation.module.css";

export default function Navigation() {
  const { pathname } = useLocation();

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
      </ul>
    </nav>
  );
}
