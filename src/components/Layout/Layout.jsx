// src/components/Layout/Layout.jsx

import css from "./Layout.module.css";
import Header from "../Header/Header.jsx";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      {children}
    </div>
  );
}
