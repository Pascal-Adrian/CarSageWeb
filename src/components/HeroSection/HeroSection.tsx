import { useState } from "react";
import Find from "../../assets/icons/find-icon.svg?react";
import { useDispatch } from "react-redux";
import { setRecommendedCars } from "../../stores/slice";
import { getCarsByPrompt } from "../../axios/getCarsByPrompt";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [promt, setPromt] = useState<string>("Search made powerfull");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleCompareClick = () => {
    navigate("/compare");
  };

  const handlePromtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromt(e.target.value);
  };

  const handleFindClick = () => {
    const cars = getCarsByPrompt(promt);
    cars.then((res) => {
      dispatch(setRecommendedCars(res));
    });
  };

  return (
    <section className="hero-section">
      <video
        width="100%"
        height="100%"
        className="hero-section-video"
        autoPlay
        muted
        loop
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-section-container cols-12">
        <h2 className="hero-section-container-logo">CarSage</h2>
        <div className="hero-section-container-content">
          <h1 className="hero-section-container-content-title">
            Discover your Dream
          </h1>
          <div className="hero-section-container-content-wrapper">
            <div className="hero-section-container-content-wrapper-input-wrapper">
              <input
                className="hero-section-container-content-wrapper-input-wrapper-input"
                type="text"
                placeholder={promt}
                value={promt}
                onChange={handlePromtChange}
              />
              <button
                className="hero-section-container-content-wrapper-input-wrapper-button"
                onClick={handleFindClick}
              >
                <Find />
              </button>
            </div>
            <button
              className="hero-section-container-content-wrapper-button primary-button"
              onClick={handleCompareClick}
            >
              Compare
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
