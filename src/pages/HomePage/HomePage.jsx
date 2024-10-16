// src/pages/HomePage.jsx

import css from "./HomePage.module.css";
import "../../index.css";
import { HomeSection } from "../../components/HomeSection/HomeSection";

export default function HomePage() {
  return (
    <section className={`${css.HomePage} section`}>
      <HomeSection />
    </section>
  );
}
