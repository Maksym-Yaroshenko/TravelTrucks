// src/pages/HomePage.jsx

import { useEffect } from "react";
import css from "./HomePage.module.css";
import "../../index.css";
import { HomeSection } from "../../components/HomeSection/HomeSection";

export default function HomePage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className={`${css.HomePage} section`}>
      <HomeSection />
    </section>
  );
}
