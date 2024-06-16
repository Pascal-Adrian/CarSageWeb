import { Car } from "../../do-not-open/temp";

interface CarInfoComponentProps {
  car: Car;
  recommended?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function CarInfoComponent({
  car,
  className,
  style,
  recommended,
}: CarInfoComponentProps) {
  return (
    <div
      className={"car-info" + (className ? " " + className : "")}
      style={style}
    >
      {recommended ? (
        <p className="car-info-recommend">Recommended</p>
      ) : (
        <p className="car-info-placeholder"></p>
      )}
      <h2 className="car-info-title">
        {car.model} {recommended}
      </h2>
      <div className="car-info-top-section">
        <h5 className="car-info-top-section-element">
          {car.traction} <span>{car.gearbox}</span>
        </h5>
        <h5 className="car-info-top-section-element">
          {car.year} <span>{car.bodytype}</span>
        </h5>
        <h5 className="car-info-top-section-element">
          {car.power} hp <span>{car.torque} Nm</span>
        </h5>
      </div>
      <div className="car-info-row">
        <p className="car-info-row-title">Brand</p>
        <p className="car-info-row-value">{car.make}</p>
      </div>
      <div className="car-info-row">
        <p className="car-info-row-title">Fuel type</p>
        <p className="car-info-row-value">{car.fuel}</p>
      </div>
      <div className="car-info-row">
        <p className="car-info-row-title">Upholstry</p>
        <p className="car-info-row-value">{car.upholstery}</p>
      </div>
      <div className="car-info-row">
        <p className="car-info-row-title">State</p>
        <p className="car-info-row-value">{car.state}</p>
      </div>
      <div className="car-info-row">
        <p className="car-info-row-title">Price</p>
        <p className="car-info-row-value">{car.price}$</p>
      </div>
      <div className="car-info-overview">
        <p className="car-info-overview-title">Overview</p>
        <p className="car-info-overview-content">{car.long_description}</p>
      </div>
    </div>
  );
}

export default CarInfoComponent;
