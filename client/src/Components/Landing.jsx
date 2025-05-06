import React, { useState, useEffect } from "react";
import "../App.css";
import spaceship from "../assets/spaceshipp.png";
import Navbar from "./Navbar";
import "../CSS/common/loader.css";

const Landing = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  // Loader logic - show loader, then show page after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("loader-wrapper").style.display = "none";
      document.getElementById("landing").style.display = "block";
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Countdown logic
  const calculateTimeLeft = () => {
    const targetDate = new Date("May 16, 2025 00:00:00");
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
      setTimeLeft(0);
    } else {
      setTimeLeft(difference / 1000);
    }
  };

  useEffect(() => {
    calculateTimeLeft();
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      {/* Loader Wrapper */}
      <div
        id="loader-wrapper"
        className="load-wrapper"
        style={{ display: "flex" }}
      >
        <div className="loader"></div>
      </div>

      {/* Main Content */}
      <div id="landing" className="relative" style={{ display: "none" }}>
        <Navbar />

        {/* Overlay and Text */}
        <div className="overlay"></div>
        <div className="text-container">
          <h2 className="text-[30px] md:text-[25px] font-bold lg:text-[70px] text-shadow-custom">
            Abhyuday Vol 9.0
          </h2>
          <h1 className="text-[13px] font-black w-screen md:text-[40px] lg:text-[30px] lg:w-[90vw]">
            Master of Computer Applications
          </h1>

          {/* Countdown Timer */}
          <div className="countdown-timer gap-5 md:gap-10">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="timer-box h-[30px] w-[70px] rounded-md md:rounded-2xl md:h-[30px] md:w-[30px] lg:w-[100px] lg:h-[120px]"
              >
                <p className="text-[12px] md:text-[24px] lg:text-[48px]">
                  {String(item.value).padStart(2, "0")}
                </p>
                <span className="text-[10px] lg:text-[16px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating spaceship */}
        <div className="floating-element absolute bottom-16 md:bottom-52 lg:max-h-[150px] lg:bottom-16">
          <img src={spaceship} alt="Spaceship" />
        </div>
      </div>
    </>
  );
};

export default Landing;
