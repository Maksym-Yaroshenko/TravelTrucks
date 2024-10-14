import { NavLink, useLocation } from "react-router-dom";

import css from "./Navigation.module.css";
// import { useSelector } from "react-redux";
// import { selectisLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const { pathname } = useLocation();
  // const isLoggedIn = useSelector(selectisLoggedIn);

  return (
    <>
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
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
