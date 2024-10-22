// src/components/Header/Header.jsx

import Navigation from "../Navigation/Navigation.jsx";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.divLogo}>
        <a className={css.logo} href="/">
          Travel
          <span className={css.logoSpan}>Trucks</span>
        </a>
      </div>

      <Navigation />
    </header>
  );
}
