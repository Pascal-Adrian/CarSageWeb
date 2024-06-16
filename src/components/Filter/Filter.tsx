import { useState } from "react";

function Filter() {
  const [price, setPrice] = useState<{ lower: number; upper: number }>({
    lower: 10000,
    upper: 300000,
  });

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setPrice({ lower: 10000, upper: price.upper });
      return;
    }
    if (parseInt(e.target.value) > price.upper) {
      setPrice({ lower: price.upper, upper: price.upper });
      return;
    }
    setPrice({ lower: parseInt(e.target.value), upper: price.upper });
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setPrice({ lower: price.lower, upper: 300000 });
      return;
    }
    if (parseInt(e.target.value) < price.lower) {
      setPrice({ lower: price.lower, upper: price.lower });
      return;
    }
    setPrice({ lower: price.lower, upper: parseInt(e.target.value) });
  };

  return (
    <div className="filter">
      <div className="filter-first-part">
        <p>What’s your budget?</p>
        <div className="filter-buget-input">
          <div className="filter-buget-input-wrapper">
            <input
              className="filter-buget-input-wrapper-input"
              type="text"
              inputMode="numeric"
              pattern="[0-9*]"
              value={price.lower}
              onChange={handleMinPriceChange}
            />
          </div>
          <div className="filter-buget-input-wrapper">
            <input
              className="filter-buget-input-wrapper-input"
              type="text"
              inputMode="numeric"
              pattern="[0-9*]"
              value={price.upper}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
      </div>
      <div className="filter-second-part"></div>
      <div className="filter-third-part"></div>
    </div>
  );
}

export default Filter;
