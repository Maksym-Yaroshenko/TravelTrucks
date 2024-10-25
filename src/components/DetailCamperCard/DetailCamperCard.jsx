import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors.js";
import "../../index.css";
import css from "./DetailCamperCard.module.css";
import { useParams } from "react-router-dom";

import MenuTruckRateLoc from "../MenuTruckRateLoc/MenuTruckRateLoc.jsx";

export default function DetailCamperCard() {
  const { camperId } = useParams();
  const truck = useSelector(selectTrucks)[camperId - 1];
  console.log(truck);
  return (
    <>
      <h2 className="visually-hidden">Info truck card</h2>
      <h3 className={css.truckName}>{truck.name}</h3>
      <MenuTruckRateLoc truck={truck} to={`/catalog/${truck.id}`} />

      <p className={css.truckPrice}>€{truck.price}</p>

      {truck.gallery.length > 0 && (
        <ul className={css.imgList}>
          {truck.gallery.map((img, id) => (
            <li className={css.li} key={id}>
              <img
                className={css.imgItem}
                src={img.thumb}
                alt={`${truck.name} image`}
              />
            </li>
          ))}
        </ul>
      )}

      <p className={css.truckDescription}>{truck.description}</p>
    </>
  );
}
