import { useEffect, useState } from "react";
import Arrow from "../../assets/icons/arrow-big.svg?react";

function DealSection() {
  const [deals, setDeals] = useState<{ name: string; imageLink: string }[]>([]);

  useEffect(() => {
    import("../../do-not-open/temp").then((module) => {
      setDeals(module.deals);
    });
  }, []);

  return (
    <section className="deal-section">
      <h3 className="deal-section-title">Big Deals on Wheels</h3>
      <p className="deal-section-subtitle">
        Say hello to the hottest deals on the market
      </p>
      <div className="deal-section-wrapper cols-12">
        {deals.map((deal, index) => (
          <div className="deal-section-card" key={index}>
            <img
              src={deal.imageLink}
              alt={deal.name}
              className="deal-section-card-image"
            />
            <button className="deal-section-card-button">
              <h5 className="deal-section-card-button-text">{deal.name}</h5>
              <Arrow />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DealSection;
