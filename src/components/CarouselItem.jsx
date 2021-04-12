import React from "react";
import "../style/components/CarouselItem.css";
import Plus from "../assets/plus-icon.png";
import Plus2 from "../assets/play-icon.png";

const CarouselItem = ({cover, title, year, contentRating, duration}) => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src={cover}
      alt={title}
    />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={Plus2} alt="Play Icon" />
        <img
          className="carousel-item__details--img"
          src={Plus}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`${year} ${contentRating } ${duration }`}</p>
    </div>
  </div>
);

export default CarouselItem;
