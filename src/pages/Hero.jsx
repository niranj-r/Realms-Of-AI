import "../styles//Hero.css";
import Navbar from "../components/Navbar";
import robot from "../assets/hero-robot.png";
import heroTitle from "../assets/hero-title.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">

      <Navbar />

      <div className="hero-grid"></div>

      {/* Title Image */}
      <img
        src={heroTitle}
        alt="Realms of AI"
        className="hero-title-img"
      />

      <img src={robot} alt="AI Robot" className="hero-robot" />

      <div className="hero-bottom">
        PIXEL <span>×</span> PLOT <span>×</span> HACK
      </div>

      <div className="hero-bottom-bg"></div>
    </section>
  );
};

export default Hero;
