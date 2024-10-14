import css from "./Layout.module.css";
import PropTypes from "prop-types";
import Header from "../Header/Header.jsx";
// import { useSelector } from "react-redux";
// import Loader from "../Loader/Loader";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      {/* {loadingContactsBoolean || (loadingAuthBoolean && <Loader />)} */}
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
