function Footer() {
  return (
    <footer className="footer cols-12">
      <h3 className="footer-logo">CarSage</h3>
      <div className="footer-discover">
        <h5 className="footer-title">Discover</h5>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="">Smart search</a>
          </li>
          <li className="footer-list-item">
            <a href="">Car filter</a>
          </li>
          <li className="footer-list-item">
            <a href="">Big deals</a>
          </li>
          <li className="footer-list-item">
            <a href="">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="footer-better">
        <h5 className="footer-title">Better together</h5>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="">Get app</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
