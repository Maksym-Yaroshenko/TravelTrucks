// src/components/Layout/Layout.jsx

import css from "./Layout.module.css";
import Header from "../Header/Header.jsx";
// import { useSelector } from "react-redux";
// import Loader from "../Loader/Loader";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      {/* {loadingContactsBoolean || (loadingAuthBoolean && <Loader />)} */}
      {children}
    </div>
  );
}
