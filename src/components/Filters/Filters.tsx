interface FiltersProps {
  makers: string[];
  selectedMakers: string[];
  handleMakerSelect: (maker: string) => void;
  fuelTypes: string[];
  seletedFuelTypes: string[];
  handleFuelTypeSelect: (fuelType: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

function Filters({
  makers,
  selectedMakers,
  handleMakerSelect,
  fuelTypes,
  seletedFuelTypes,
  handleFuelTypeSelect,
  className,
  style,
}: FiltersProps) {
  const checkFuelType = (fuelType: string) =>
    seletedFuelTypes.includes(fuelType);

  const checkMaker = (maker: string) => selectedMakers.includes(maker);

  return (
    <div
      className={className ? `filters ${className}` : "filters"}
      style={style}
    >
      <div className="filters-container">
        <div className="filters-container-wrapper">
          {makers.map((maker) => (
            <button
              key={maker}
              className={
                "filters-button secondary-button" +
                (checkMaker(maker) ? " filters-button--active" : "")
              }
              onClick={() => handleMakerSelect(maker)}
            >
              {maker}
            </button>
          ))}
        </div>
      </div>
      <div className="filters-container">
        <div className="filters-container-wrapper">
          {fuelTypes.map((fuelType) => (
            <button
              key={fuelType}
              className={
                "filters-button secondary-button" +
                (checkFuelType(fuelType) ? " filters-button--active" : "")
              }
              onClick={() => handleFuelTypeSelect(fuelType)}
            >
              {fuelType}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
