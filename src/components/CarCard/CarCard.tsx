import { Car } from "../../do-not-open/temp";
import Arrow from "../../assets/icons/arrow.svg?react";
import ArrowBig from "../../assets/icons/arrow-big.svg?react";

interface CarCardProps {
  car: Car;
  className?: string;
}

function CarCard({ car, className }: CarCardProps) {
  return (
    <div className={"car-card" + (className ? " " + className : "")}>
      <h4 className="car-card-title .card-text">
        {car.make} {car.model} {car.bodyType}
      </h4>
      <div className="car-card-top-wrapper">
        <span className="car-card-top-wrapper-grade card-text">
          {car.grade}/10
        </span>
        <a href="" className="car-card-top-wrapper-review">
          {car.make} {car.model} {car.bodyType} Review
        </a>
      </div>
      <img
        src={car.imageLink}
        alt={car.make + " " + car.model}
        className="car-card-image"
      />
      <div className="car-card-image-buttons">
        <span className="car-card-image-buttons-number card-text">1/3</span>
        <button className="car-card-image-buttons-button">
          <Arrow />
        </button>
        <button className="car-card-image-buttons-button">
          <Arrow />
        </button>
      </div>
      <div className="car-card-bottom-wrapper">
        <div className="car-card-bottom-wrapper-inner">
          <p className="car-card-bottom-wrapper-inner-title">
            {car.year} {car.make} {car.model} {car.bodyType}
          </p>
          <p className="car-card-bottom-wrapper-inner-price">
            From {car.price} € {"(" + Math.ceil(car.price / 100) + " €/mo)"}
          </p>
        </div>
        <button className="car-card-bottom-wrapper-button primary-button">
          <ArrowBig />
        </button>
      </div>
    </div>
  );
}

export default CarCard;
