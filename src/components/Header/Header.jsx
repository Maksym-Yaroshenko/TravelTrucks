import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      {/* <div className="navbar"> */}
      <div className={css.logo}>
        <a href="/">TravelTrucks</a>
      </div>
      <nav>
        <ul className={css.navigationList}>
          <li>
            <a className={css.linkItem} href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Catalog</a>
          </li>
        </ul>
      </nav>
      {/* </div>     */}
    </header>
  );
};
