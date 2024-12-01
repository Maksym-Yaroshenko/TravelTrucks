// src/pages/CamperIdPage.jsx

import { useParams } from "react-router-dom";
import CamperDetailedDescription from "../../components/CamperDetailedDescription/CamperDetailedDescription.jsx";
import CamperDetailedInfo from "../../components/CamperDetailedInfo/CamperDetailedInfo.jsx";
import "../../index.css";
import css from "./CamperIdPage.module.css";
import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";

export default function CamperIdPage() {
  const { camperId } = useParams();
  const trucksFirst = Number(useSelector(selectTrucks)[0].id);
  const trucksLength = useSelector(selectTrucks).length;

  // console.log(camperId, trucksFirst, trucksLength);

  if (Number(camperId) >= trucksFirst && Number(camperId) <= trucksLength) {
    return (
      <div className={`scrollable-content`}>
        <section className={`${css.CamperDetailedDescription} section`}>
          <CamperDetailedDescription />
        </section>

        <section className={`${css.CamperDetailedInfo} section`}>
          <CamperDetailedInfo />
        </section>
      </div>
    );
  } else {
    return <NotFoundPage />;
  }
}
