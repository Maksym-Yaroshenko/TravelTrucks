// src/components/CamperDetailedInfo/CamperDetailedInfo.jsx

import { useState } from "react";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";
import CamperForm from "../CamperForm/CamperForm";
import css from "./CamperDetailedInfo.module.css";
import "../../index.css";

export default function CamperDetailedInfo() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <ul className={css.camperDetailedInfo}>
      <li className={css.tabs}>
        <button
          className={`${css.tabButton} ${
            activeTab === "features" ? css.active : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${css.tabButton} ${
            activeTab === "reviews" ? css.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </li>

      <li>
        <ul className={css.contentContainer}>
          {activeTab === "features" ? <CamperFeatures /> : <CamperReviews />}
          <li className={css.rightContent}>
            <CamperForm />
          </li>
        </ul>
      </li>
    </ul>
  );
}
