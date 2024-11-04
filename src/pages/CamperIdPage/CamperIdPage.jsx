// src/pages/CamperIdPage

import CamperDetailedDescription from "../../components/CamperDetailedDescription/CamperDetailedDescription.jsx";
import CamperDetailedInfo from "../../components/CamperDetailedInfo/CamperDetailedInfo.jsx";
import "../../index.css";
import css from "./CamperIdPage.module.css";

export default function CamperIdPage() {
  return (
    <>
      <section className={`${css.CamperDetailedDescription} section`}>
        <CamperDetailedDescription />
      </section>

      <section className={`${css.CamperDetailedInfo} section`}>
        <CamperDetailedInfo />
      </section>
    </>
  );
}
