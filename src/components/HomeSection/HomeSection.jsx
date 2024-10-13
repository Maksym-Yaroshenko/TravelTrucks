import css from "./HomeSection.module.css";
import container from "../Container.module.css";

export const HomeSection = () => {
  return (
    <section className={`${css.homeSection} ${container.container}`}>
      <h1>Campers of your dreams</h1>
      <h3>You can find everything you want in our catalog</h3>
      <button>View Now</button>
    </section>
  );
};
