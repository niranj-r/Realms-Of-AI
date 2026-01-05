import "../styles/RealmsHero.css";
import HeroImg from "../assets/hero-desktop.png";
import TitleImg from "../assets/realms-title.png";
import SubtitleImg from "../assets/realms-subtitle.png";

export default function RealmsHero() {
  return (
    <section className="realms-hero">
      <div className="realms-hero-inner">

        {/* Top TEXT / IMAGE BLOCK */}
        <div className="realms-text">
          <img
            src={TitleImg}
            alt="Realms of AI"
            className="realms-title-img"
          />
        </div>

        {/* Bottom IMAGE BLOCK */}
        <div className="realms-image">
          <img
            src={HeroImg}
            alt="AI Character"
            className="realms-hero-img"
          />
        </div>

      </div>
    </section>
  );
}
/*<img
            src={SubtitleImg}
            alt="Pixel Plot Hack"
            className="realms-subtitle-img"
          />*/