import { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import { Car, carTemplate } from "../../do-not-open/temp";
import CarCard from "../CarCard/CarCard";

function FilterSection() {
  const [makers, setMakers] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [selectedMakers, setSelectedMakers] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [cars, setCars] = useState<Car[]>([]);

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
    setCars(Array.from({ length: 6 }, () => carTemplate));
  }, []);

  return (
    <section className="filter-section">
      <div className="filter-section-top">
        <h3 className="filter-section-top-title">Scale without limits</h3>
        <button className="filter-section-top-button primary-button">
          Filters
        </button>
      </div>
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
          <CarCard key={index} car={car} className="filter-section-cars-card" />
        ))}
      </div>
    </section>
  );
}

export default FilterSection;
