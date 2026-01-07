import React, { useEffect, useRef, useState } from "react";
import "../styles/countdown.css";
import face from "../assets/ai-face.png";
import timeLeftImg from "../assets/time-left.png";

const Countdown = () => {
    const countdownRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    // SET EVENT DATE HERE
    const eventDate = new Date("2026-02-01T00:00:00").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const diff = eventDate - now;

        if (diff <= 0) {
            return { days: "00", hours: "00", minutes: "00", seconds: "00" };
        }

        return {
            days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
            minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
            seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
        };
    };

    const [time, setTime] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect(); // run once
                }
            },
            { threshold: 0.3 }
        );

        if (countdownRef.current) observer.observe(countdownRef.current);

        return () => observer.disconnect();
    }, []);


    return (
        <section
            ref={countdownRef}
            className={`countdown-section ${animate ? "animate" : ""}`}
            id="countdown"
        >
            <div className="countdown-grid"></div>
            <div className="countdown-grid-flex">
                <img src={face} alt="AI Face" className="countdown-face" />

                <img
                    src={timeLeftImg}
                    alt="Time Left"
                    className="countdown-title-img"
                />
                <div className="timer-bottom-bg"></div>

                <div className="timer">
                    <div>
                        <span>{time.days}</span>
                        <p>Days</p>
                    </div>
                    <span className="colon">:</span>

                    <div>
                        <span>{time.hours}</span>
                        <p>Hours</p>
                    </div>
                    <span className="colon">:</span>

                    <div>
                        <span>{time.minutes}</span>
                        <p>Minutes</p>
                    </div>
                    <span className="colon">:</span>

                    <div>
                        <span>{time.seconds}</span>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
