// src/pages/CamperIdPage.jsx

import { useParams } from "react-router-dom";
import CamperDetailedDescription from "../../components/CamperDetailedDescription/CamperDetailedDescription.jsx";
import CamperDetailedInfo from "../../components/CamperDetailedInfo/CamperDetailedInfo.jsx";
import "../../index.css";
import css from "./CamperIdPage.module.css";

export default function CamperIdPage() {
  const { camperId } = useParams();

  return (
    <>
      <section className={`${css.CamperDetailedDescription} section`}>
        <CamperDetailedDescription />
      </section>

      <section className={`${css.CamperDetailedInfo} section`}>
        <CamperDetailedInfo camperId={camperId} />
      </section>
    </>
  );
}
