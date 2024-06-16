import AppSection from "./components/AppSection/AppSection";
import DealSection from "./components/DealSection/DealSection";
import FAQSection from "./components/FAQSection/FAQSection";
import FilterSection from "./components/FilterSection/FilterSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import "./styles/styles.scss";
function App() {
  return (
    <div id="app">
      <HeroSection />
      <FilterSection />
      <DealSection />
      <FAQSection />
      <AppSection />
      <Footer />
    </div>
  );
}

export default App;
