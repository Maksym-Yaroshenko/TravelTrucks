// src/pages/HomePage.jsx

import css from "./HomePage.module.css";
import "../../index.css";
// import Header from "../../components/Header/Header";
import { HomeSection } from "../../components/HomeSection/HomeSection";

export default function HomePage() {
  return (
    <div className={`${css.HomePage} page`}>
      {/* <Header /> */}
      <HomeSection />
    </div>
  );
}
