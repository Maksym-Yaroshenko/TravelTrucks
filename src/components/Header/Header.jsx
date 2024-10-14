// src/components/Header/Header.jsx

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

      <nav>
        <ul className={css.navigationList}>
          <li>
            <a className={`${css.linkItem} ${css.active}`} href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Catalog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
