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
          <h1 className="text-[20px] font-black w-screem  md:text-[40px] md:w-screen lg:border-none lg:text-[70px] lg:w-[90vw]">
            Master Of Computer Application
          </h1>
          <h2 className="md:text-[25px] lg:text-[50px]">
            Ramaiah Institute of Technology
          </h2>

          {/* Countdown Timer */}
          <div className="countdown-timer gap-5 md:gap-10   ">
            <div className="timer-box h-[10px] w-[70px] rounded-md md:rounded-3xl  md:h-[30px] md:w-[30px] lg:w-[100px] lg:h-[120px]">
              <p className="  text-[12px] md:text-[24px] lg:text-[48px]">
                {String(days).padStart(2, "0")}
              </p>
              <span className="text-[10px] lg:text-[16px]">Days</span>
            </div>
            <div className="timer-box h-[30px] w-[70px] border-2 border-red-800 rounded-md md:rounded-2xl md:h-[30px] md:w-[30px] lg:w-[100px] lg:h-[120px]">
              <p className="text-[12px] md:text-[24px] lg:text-[48px]">
                {String(hours).padStart(2, "0")}
              </p>
              <span className="text-[10px] lg:text-[16px]">Hours</span>
            </div>
            <div className="timer-box h-[30px] w-[70px] md:h-[30px] md:w-[30px] rounded-md md:rounded-2xl lg:w-[100px] lg:h-[120px]">
              <p className=" text-[12px] md:text-[24px] lg:text-[48px]">
                {String(minutes).padStart(2, "0")}
              </p>
              <span className="text-[10px] lg:text-[16px]">Minutes</span>
            </div>
            <div className="timer-box sm:filt h-[30px] w-[70px] md:h-[30px] md:w-[30px] rounded-md md:rounded-2xl lg:w-[100px] lg:h-[120px]">
              <p className="text-[12px] md:text-[24px] lg:text-[48px]">
                {String(seconds).padStart(2, "0")}
              </p>
              <span className="text-[10px] lg:text-[16px]">Seconds</span>
            </div>
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
