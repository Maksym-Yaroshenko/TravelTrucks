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
    <div className={css.camperDetailedInfo}>
      <div className={css.tabs}>
        <button
          className={`${css.tabButton} ${activeTab === "features" ? css.active : ""}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${css.tabButton} ${activeTab === "reviews" ? css.active : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={css.contentContainer}>
        <div className={css.leftContent}>
          {activeTab === "features" ? <CamperFeatures /> : <CamperReviews />}
        </div>

        <div className={css.rightContent}>
          <CamperForm />
        </div>
      </div>
    </div>
  );
}