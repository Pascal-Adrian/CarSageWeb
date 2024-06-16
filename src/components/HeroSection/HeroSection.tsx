import Find from "../../assets/icons/find-icon.svg?react";

function HeroSection() {
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
        <source src="src/assets/video/hero-video.mp4" type="video/mp4" />
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
                placeholder="Search made powerfull"
              />
              <button className="hero-section-container-content-wrapper-input-wrapper-button">
                <Find />
              </button>
            </div>
            <button className="hero-section-container-content-wrapper-button primary-button">
              Compare
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
