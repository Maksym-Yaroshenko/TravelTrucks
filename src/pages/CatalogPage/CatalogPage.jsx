// src/pages/CatalogPage.jsx

import { FiltersForm } from "../../components/FiltersForm/FiltersForm";
import { CatalogSectionList } from "../../components/CatalogSectionList/CatalogSectionList";
import css from "./CatalogPage.module.css";
import "../../index.css";

export default function CatalogPage() {
  return (
    <section className={`${css.CatalogPage} section`}>
      <FiltersForm />
      <CatalogSectionList />
    </section>
  );
}
