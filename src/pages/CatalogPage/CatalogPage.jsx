// src/pages/CatalogPage.jsx

import Header from "../../components/Header/Header";
import { FiltersForm } from "../../components/FiltersForm/FiltersForm";
import { CatalogSectionList } from "../../components/CatalogSectionList/CatalogSectionList";
import css from "./CatalogPage.module.css";
import "../../index.css";

export default function CatalogPage() {
  return (
    <div className={`${css.CatalogPage} page`}>
      <Header />
      <FiltersForm />
      <CatalogSectionList />
    </div>
  );
}
