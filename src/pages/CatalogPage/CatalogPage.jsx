// src/pages/CatalogPage.jsx

import { FiltersForm } from "../../components/FiltersForm/FiltersForm";
import { CamperList } from "../../components/CamperList/CamperList";
import css from "./CatalogPage.module.css";
import "../../index.css";

export default function CatalogPage() {
  return (
    <section className={`${css.CatalogPage} section`}>
      <FiltersForm className={css.Filters} />
      <CamperList className={css.camperList} />
    </section>
  );
}
