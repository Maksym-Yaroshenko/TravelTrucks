import css from "./HomeSection.module.css";
// import "../../index.css";
import container from "../Container.module.css";

export const HomeSection = () => {
  return (
    <div className={`${css.homeSection} ${container.container}`}>
      <h1 className={css.h1Text}>Campers of your dreams</h1>
      <h3 className={css.h3Text}>
        You can find everything you want in our catalog
      </h3>
      <button className={css.vievNowBtn}>View Now</button>
    </div>
  );
};
