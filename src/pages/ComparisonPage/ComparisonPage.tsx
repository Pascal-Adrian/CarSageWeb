import { useEffect, useState } from "react";
import CarInfoComponent from "../../components/CarInfoComponent/CarInfoComponent";
import { useNavigate, useParams } from "react-router-dom";
import { Car } from "../../do-not-open/temp";
import { getCarByIdRequest } from "../../axios/getCarByIdRequest";
import { useDispatch } from "react-redux";
import { clearCompare } from "../../stores/slice";
import { compareCars } from "../../axios/compareCars";

function ComparisonPage() {
  const id1 = useParams().carId1;
  const id2 = useParams().carId2;

  const [car1, setCar1] = useState({} as Car);
  const [car2, setCar2] = useState({} as Car);
  const [best, setBest] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id1 && id2) {
      compareCars(id1, id2).then((data: number) => {
        setBest(data);
      });
      getCarByIdRequest(id1).then((data) => {
        setCar1(data);
      });
      getCarByIdRequest(id2).then((data) => {
        setCar2(data);
      });
    }
  }, [id1, id2]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
    dispatch(clearCompare());
  };

  return (
    <div className="comparison-page cols-12">
      <div className="comparison-page-car">
        <img
          src={car1.image_link}
          alt={car1.make + " " + car1.model}
          className="comparison-page-car-image"
        />
        <CarInfoComponent
          car={car1}
          className="comparison-page-car-info"
          recommended={car1.id == best}
        />
      </div>
      <div className="comparison-page-car">
        <img
          src={car2.image_link}
          alt={car2.make + " " + car2.model}
          className="comparison-page-car-image"
        />
        <CarInfoComponent
          car={car2}
          className="comparison-page-car-info"
          recommended={car2.id == best}
        />
      </div>
      <div className="comparison-page-button-wrapper">
        <button className="comparison-page-button" onClick={handleGoBack}>
          Back Home
        </button>
      </div>
    </div>
  );
}

export default ComparisonPage;
