import { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import { Car } from "../../do-not-open/temp";
import CarCard from "../CarCard/CarCard";
import { useSelector } from "react-redux";
import { getCarsByFilters } from "../../axios/getCarsByFilters";
import { State } from "../../stores/store";
// import Filter from "../Filter/Filter";

function FilterSection() {
  const [makers, setMakers] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [selectedMakers, setSelectedMakers] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const recommendedCars = useSelector(
    (state: State) => state.recommendedCars.recommendedCars
  );

  const recom = useSelector((state: State) => state.recommendedCars.compare);

  const handleMakerSelect = (maker: string) => {
    setSelectedMakers((prev) =>
      prev.includes(maker) ? prev.filter((m) => m !== maker) : [...prev, maker]
    );
  };

  const handleFuelTypeSelect = (fuelType: string) => {
    setSelectedFuelTypes((prev) =>
      prev.includes(fuelType)
        ? prev.filter((f) => f !== fuelType)
        : [...prev, fuelType]
    );
  };

  useEffect(() => {
    import("../../do-not-open/temp").then((module) => {
      setMakers(module.makers);
      setFuelTypes(module.fuelTypes);
    });
  }, []);

  useEffect(() => {
    if (recommendedCars.length > 0) {
      setCars(recommendedCars.slice(0, 9));
    } else {
      const cars = getCarsByFilters({ limit: 9 });
      cars.then((data) => setCars(data));
    }
  }, [recommendedCars]);

  return (
    <section className="filter-section">
      <div className="filter-section-top">
        <h3 className="filter-section-top-title">Scale without limits</h3>
        <button
          className="filter-section-top-button primary-button"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          Filters
        </button>
      </div>
      {filterOpen && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 72,
          }}
        >
          <img
            src="/images/Filters.png"
            alt="Filters"
            style={{ maxWidth: 1410 }}
          />
        </div>
      )}
      <Filters
        className="filter-section-filters"
        makers={makers}
        selectedMakers={selectedMakers}
        handleMakerSelect={handleMakerSelect}
        fuelTypes={fuelTypes}
        seletedFuelTypes={selectedFuelTypes}
        handleFuelTypeSelect={handleFuelTypeSelect}
      />
      <div className="filter-section-cars cols-12">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            car={car}
            className="filter-section-cars-card"
            inComparison={recom.includes(car.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default FilterSection;
