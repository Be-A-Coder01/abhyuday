import React, { useState, useEffect } from "react";
import "../App.css";
import spaceship from "../assets/spaceshipp.png";
import Navbar from "./Navbar";

const Landing = () => {
  // State to store the countdown time in seconds
  const [timeLeft, setTimeLeft] = useState(0);

  // Function to calculate time remaining in seconds
  const calculateTimeLeft = () => {
    const targetDate = new Date("May 16, 2025 00:00:00");
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
      setTimeLeft(0);
    } else {
      setTimeLeft(difference / 1000); // Store in seconds
    }
  };

  // Update the countdown every second
  useEffect(() => {
    calculateTimeLeft();
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Decrement time by 1 second
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Convert the remaining time in seconds to days, hours, minutes, and seconds
  const getTime = () => {
    const days = Math.floor(timeLeft / (3600 * 24));
    const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = Math.floor(timeLeft % 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTime();

  return (
    <>
      <div id="landing" className="relative">
        {/* Navbar */}
        <Navbar />

        {/* Overlay and Text */}
        <div className="overlay"></div>
        <div className="text-container">
          <h1 className="text-lg w-[90vw]">Master Of Computer Application</h1>
          <h2>Ramaiah Institute of Technology</h2>

          {/* Countdown Timer */}
          <div className="countdown-timer">
            <div className="timer-box">
              <p>{String(days).padStart(2, "0")}</p>
              <span>Days</span>
            </div>
            <div className="timer-box">
              <p>{String(hours).padStart(2, "0")}</p>
              <span>Hours</span>
            </div>
            <div className="timer-box">
              <p>{String(minutes).padStart(2, "0")}</p>
              <span>Minutes</span>
            </div>
            <div className="timer-box">
              <p>{String(seconds).padStart(2, "0")}</p>
              <span>Seconds</span>
            </div>
          </div>
        </div>

        {/* Floating spaceship */}
        <div className="floating-element">
          <img src={spaceship} alt="Spaceship" />
        </div>
      </div>
    </>
  );
};

export default Landing;
