import { Car } from "../../do-not-open/temp";
import Arrow from "../../assets/icons/arrow.svg?react";
import ArrowBig from "../../assets/icons/arrow-big.svg?react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../stores/store";

interface CarCardProps {
  car: Car;
  className?: string;
  inComparison?: boolean;
}

function CarCard({ car, className, inComparison }: CarCardProps) {
  const navigate = useNavigate();

  const compare = useSelector((state: State) => state.recommendedCars.compare);

  const handleCompareClick = () => {
    if (compare.length == 2) {
      navigate("/compare/" + compare[0] + "/" + compare[1]);
    }
  };

  const handleGoButton = () => {
    console.log("Go button clicked", car.id);
    navigate("car/" + car.id);
  };

  return (
    <div className={"car-card" + (className ? " " + className : "")}>
      <h4 className="car-card-title .card-text">
        {car.make} {car.model} {car.bodytype}
      </h4>
      <div className="car-card-top-wrapper">
        <span className="car-card-top-wrapper-grade card-text">
          {car.grade}/10
        </span>
        <a href="" className="car-card-top-wrapper-review">
          {car.make} {car.model} {car.bodytype} Review
        </a>
        {inComparison && (
          <button
            className="car-card-top-wrapper-in-comparison"
            onClick={handleCompareClick}
          >
            In coparison
          </button>
        )}
      </div>
      <img
        src={car.image_link}
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
            {car.year} {car.make} {car.model} {car.bodytype}
          </p>
          <p className="car-card-bottom-wrapper-inner-price">
            From {car.price} € {"(" + Math.ceil(car.price / 100) + " €/mo)"}
          </p>
        </div>
        <button
          className="car-card-bottom-wrapper-button primary-button"
          onClick={handleGoButton}
        >
          <ArrowBig />
        </button>
      </div>
    </div>
  );
}

export default CarCard;
