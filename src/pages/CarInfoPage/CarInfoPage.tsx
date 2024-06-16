import { useEffect, useState } from "react";
import CarInfoComponent from "../../components/CarInfoComponent/CarInfoComponent";
import { useNavigate, useParams } from "react-router-dom";
import { getCarByIdRequest } from "../../axios/getCarByIdRequest";
import { Car } from "../../do-not-open/temp";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setCompare } from "../../stores/slice";
import { State } from "../../stores/store";

function CarInfoPage() {
  const [car, setCar] = useState({} as Car);

  const id = useParams().carId;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const recom = useSelector((state: State) => state.recommendedCars.compare);

  useEffect(() => {
    if (!id) {
      getCarByIdRequest("1").then((data) => {
        setCar(data);
      });
      return;
    }
    getCarByIdRequest(id).then((data) => {
      setCar(data);
    });
  }, [id]);

  const handleCompareClick = () => {
    dispatch(setCompare(car.id));
  };

  return (
    <>
      <div className="car-info-page cols-12">
        <h2 className="car-info-page-logo">CarSage</h2>
        <img
          src={car.image_link}
          alt={car.make + " " + car.model}
          className="car-info-page-image"
        />
        <div className="car-info-page-info">
          <CarInfoComponent car={car} />
          <div className="car-info-page-info-button-wrapper">
            <button className="car-info-page-info-button-underline">
              See more
            </button>
            <button
              className="car-info-page-info-button-primary primary-button"
              onClick={handleCompareClick}
            >
              Compare
            </button>
          </div>
        </div>
      </div>
      <Footer className="car-info-page-footer" />
    </>
  );
}

export default CarInfoPage;
