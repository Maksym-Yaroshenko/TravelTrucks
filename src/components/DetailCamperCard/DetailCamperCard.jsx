import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors.js";
import "../../index.css";
import css from "./DetailCamperCard.module.css";
import {
  useParams,
  // Link,
} from "react-router-dom";

export default function DetailCamperCard() {
  const { camperId } = useParams();
  const truck = useSelector(selectTrucks)[camperId - 1];
  console.log(truck);
  return (
    <>
      <h2 className="visually-hidden">Info truck card</h2>
      <h3 className={css.truckName}>{truck.name}</h3>
      <div className={css.truckRateLoc}>
        <p className={css.truckRating}>
          {/* <Link
            className={css.truckRatingLink}
            to={`/catalog/${truck.id}/reviews`}
            >
            Rating: {truck.rating}({truck.reviews.length} Reviews)
            </Link> */}
        </p>
        <p>
          Rating: {truck.rating}({truck.reviews.length} Reviews)
        </p>
        <p className={css.truckLocation}>{truck.location}</p>
      </div>

      <p className={css.truckPrice}>€{truck.price}</p>

      {truck.gallery.length > 0 && (
        <ul className={css.imgList}>
          {truck.gallery.map((img, id) => (
            <li key={id}>
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
