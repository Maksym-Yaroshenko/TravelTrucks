import DetailCamperCard from "../../components/DetailCamperCard/DetailCamperCard.jsx";
import "../../index.css";
import css from "./CamperIdPage.module.css";

export default function CamperIdPage() {
  return (
    <section className={`${css.CamperIdPage} section`}>
      <DetailCamperCard />
    </section>
  );
}
