import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import bgImage from "../assets/st-hero-bg.png";
import { Button } from "@mui/material";
import logo from "../assets/st-text-hero.png";

const EVENT_END = new Date("2026-04-11T23:59:59");
const REGISTER_URL = "#"; // TODO: replace with devfolio project URL

const calculateTimeLeft = () => {
  const diff = EVENT_END - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) return;
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [!!timeLeft]);

  const eventConcluded = !timeLeft;

  return (
    <section id="home">
      <div className="hero-container" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="overlay" />

        <div className="hero-content">
          <img src={logo} alt="Hack The Upside Down" className="hero-logo" />

          <p className="tagline fade-in-up delay-1">
            Enter the Upside Down of Innovation
          </p>

          <p className="time fade-in-up delay-2">
            April 10 – 11, 2026 &nbsp;•&nbsp; NSHM KNOWLEDGE CAMPUS, DURGAPUR
          </p>

          {eventConcluded ? (
            <div className="event-concluded fade-in-up delay-3">
              <span className="concluded-badge">EVENT CONCLUDED</span>
              <p className="concluded-text">Thank you to all participants &amp; sponsors!</p>
            </div>
          ) : (
            <div className="countdown fade-in-up delay-3">
              {Object.entries(timeLeft).map(([unit, val]) => (
                <div key={unit}>
                  <h2>{val}</h2>
                  <span>{unit.toUpperCase()}</span>
                </div>
              ))}
            </div>
          )}

          <div className="hero-buttons fade-in-up delay-3">
            <Button variant="outlined" className="view-schedule" href="/#timeline">
              View Schedule
            </Button>
            {!eventConcluded && (
              <Button
                variant="contained"
                className="register-now"
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register on Devfolio
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;