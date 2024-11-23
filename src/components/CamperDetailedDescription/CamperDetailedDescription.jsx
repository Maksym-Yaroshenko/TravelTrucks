// src/components/CamperDetailedDescription/CamperDetailedDescription.jsx

import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors.js";
import "../../index.css";
import css from "./CamperDetailedDescription.module.css";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import MenuTruckRateLoc from "../MenuTruckRateLoc/MenuTruckRateLoc.jsx";

export default function CamperDetailedDescription() {
  const { camperId } = useParams();
  const truck = useSelector(selectTrucks)[camperId - 1];

  return (
    <>
      <h2 className="visually-hidden">Info truck card</h2>
      <h3 className={css.truckName}>{truck.name}</h3>
      <MenuTruckRateLoc truck={truck} to={`/catalog/${truck.id}`} />

      <p className={css.truckPrice}>€{truck.price}</p>

      {truck.gallery.length > 0 && (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 36,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 48,
            },
          }}
          className={css.imgList}
        >
          {truck.gallery.map((img, id) => (
            <SwiperSlide key={id} className={css.imgSlide}>
              <img
                className={css.imgItem}
                src={img.thumb}
                alt={`${truck.name} image`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <p className={css.truckDescription}>{truck.description}</p>
    </>
  );
}
