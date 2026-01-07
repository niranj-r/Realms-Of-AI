import { useEffect, useRef, useState } from "react";
import "../styles/Events.css";
import { Link } from "react-router-dom";


import EventsTitle from "../assets/headings/events-title.png";
import RealmsTitle from "../assets/headings/realms-of-ai.png";

import Event1Img from "../assets/cards/event1-image.png";
import Event1Title from "../assets/cards/event1-title.png";

import Event2Img from "../assets/cards/event2-image.png";
import Event2Title from "../assets/cards/event2-title.png";

import Event3Img from "../assets/cards/event3-image.png";
import Event3Title from "../assets/cards/event3-title.png";

import FooterImg from "../assets/footer/pixel-plot-hack.png";

export default function Events() {

    const eventsRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect(); // run once
                }
            },
            { threshold: 0.25 }
        );

        if (eventsRef.current) observer.observe(eventsRef.current);

        return () => observer.disconnect();
    }, []);


    return (
        <section
            ref={eventsRef}
            className={`events-section ${animate ? "animate" : ""}`}
            id="events"
        >

            <div className="events-line"></div>
            <div className="events-grid-overlay"></div>
            <div className="events-container">
                {/* HEADER */}
                <div className="events-header">
                    <img src={EventsTitle} alt="Events" className="events-heading" />
                    <img src={RealmsTitle} alt="Realms of AI" className="events-brand" />
                </div>

                {/* CARDS */}
                <div className="events-cards">
                    <Link to="/neural-canvas" className="event-card">
                        <img src={Event1Img} className="event-image" alt="" />
                        <div className="event-text">
                            <img src={Event1Title} className="event-title" alt="" />
                        </div>
                    </Link>

                    <Link to="/script-shift" className="event-card">
                        <img src={Event2Img} className="event-image" alt="" />
                        <div className="event-text">
                            <img src={Event2Title} className="event-title" alt="" />
                        </div>
                    </Link>

                    <Link to="/think-trace" className="event-card">
                        <img src={Event3Img} className="event-image" alt="" />
                        <div className="event-text">
                            <img src={Event3Title} className="event-title" alt="" />
                        </div>
                    </Link>
                </div>

                {/* FOOTER */}
                <div className="events-footer">
                    <img src={FooterImg} alt="Pixel Plot Hack" />
                </div>
            </div>

            <div className="events-bottom-line"></div>
            <div className="events-bottom-line-violet"></div>
        </section>
    );
}
