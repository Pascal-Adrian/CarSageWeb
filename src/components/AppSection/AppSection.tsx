function AppSection() {
  return (
    <section className="app-section">
      <div className="app-section-content">
        <h2 className="app-section-title">Get started for free</h2>
        <p className="app-section-subtitle">Join our mobile app</p>
        <button className="app-section-content-button primary-button">
          Get the app now
        </button>
      </div>
      <div className="app-section-price">
        <sup>$</sup>
        <p>0</p>
        <sub>/month</sub>
      </div>
    </section>
  );
}

export default AppSection;
