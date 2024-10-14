// src/components/Header/Header.jsx

// import { useState } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./Header.module.css";

export default function Header() {
  // const [activeState, setActiveState] = useState(true);
  return (
    <>
      <header className={css.header}>
        <div className={css.divLogo}>
          <a className={css.logo} href="/">
            Travel
            <span className={css.logoSpan}>Trucks</span>
          </a>
        </div>

        <Navigation />
      </header>
    </>
  );
}
