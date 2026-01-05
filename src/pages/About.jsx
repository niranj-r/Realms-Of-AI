import React from "react";
import "../styles/about.css";
import character from "../assets/about-character.png";

const About = () => {
    return (
        <section className="about-section">
                <div className="about-line"></div>
                <div className="about-grid-overlay"></div>

                <div className="about-content">
                    <h1 className="about-title">
                        <span className="about-a">A</span>BOUT
                    </h1>

                    <h2 className="about-subtitle">
                        Where Creativity, Logic, and Intelligence Converge
                    </h2>

                    <p className="about-text">
                        Realms of AI is a curated multi-competition experience that explores
                        the diverse dimensions of artificial intelligence not just as
                        technology, but as a creative partner, a reasoning engine, and a
                        problem-solving force. Designed for thinkers, creators, and innovators, Realms of AI brings
                        together three distinct competitions, each representing a unique
                        realm of AI exploration.
                    </p>
                </div>

                <div className="about-image-wrapper">
                    <img src={character} alt="AI Character" />
                </div>
                <div className="about-bottom-bg"></div>
                <div className="about-bottom-line"></div>
                <div className="about-bottom-line-violet"></div>
        </section>
    );
};

export default About;
