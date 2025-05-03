import React from "react";
import "../CSS/aboutUs/aboutUs.css";
import Navbar from "./Navbar";
import "../CSS/common/bg-animation.css";
import "../App.css";
import itQuizBanner from "../assets/de.png";
import codingBanner from "../assets/coding.png";
import uiuxBanner from "../assets/uiux.png";
import treasureHuntImg from "../assets/treasurehunt.png";

import "../JavaScript/index.js";
import "../JavaScript/loader.js";

import gamingImg from "../assets/gaming.png";
import ideathonImg from "../assets/ideathon.png";
import itManagerImg from "../assets/itmanager.png";
import photographyImg from "../assets/photography.png";
import { useDispatch } from "react-redux";
import { updateEvent } from "../features/getEvents";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let handleEvent = async (value) => {
    await dispatch(updateEvent(value));
    navigate("/eventInfo");
  };

  return (
    <>
      <div className="wrapper  ">
        <div id="stars" className="-z-10"></div>
        <div id="stars2" className="-z-10"></div>
        <div id="stars3" className="-z-10"></div>
      </div>

      <Navbar></Navbar>

      <div className=" h-[120vh]">
        <p className="text-[20px] mt-20 pl-5 md:mt-20 md:my-10 lg:mt-30   text-white font-bold md:pl-10 my-5 pb-1 underline">
          Events
        </p>
        <div
          className=" flex w-full flex-col gap-y-8 place-items-center md:flex-row flex-wrap md:gap-x-8 md:gap-y-10 lg:gap-x-8 lg:px-7 lg:gap-y-8 justify-center"
          id="events"
        >
          <div
            className=" box z-10 text-white rounded-xl w-[80vw] md:w-[29vw]  lg:w-[22vw] h-fit  flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("itQuiz")}
          >
            <img
              src={itQuizBanner}
              className="rounded-t-md md:h-32 lg:h-48 w-full"
            />
            <div className="flex flex-col p-4 gap-1 md:gap-2 md:p-4 lg:gap-2 lg:p-4">
              <p
                id="eventName"
                className="text-xl font-bold md:text-xl lg:text-xl  text-white"
              >
                Cosmo’s Space Trivia
              </p>
              <p className="text-md md:text-xs lg:text-lg  text-white">
                IT QUIZ
              </p>
              <p className=" text-[#D2D2CA] text-lg  md:text-sm">16 May 2025</p>
              <p className="line-clamp-2 text-lg  md:text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className=" box z-10 text-white rounded-xl w-[80vw] md:w-[29vw]  lg:w-[22vw] h-fit  flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("coding")}
          >
            <img
              src={codingBanner}
              className="rounded-t-md md:h-32 lg:h-48 w-full"
            />
            <div className="flex flex-col p-4 gap-2 md:gap-2 md:p-4 lg:gap-2 lg:p-4">
              <p
                id="eventName"
                className="text-lg font-bold md:text-xl lg:text-lg  text-white"
              >
                Nebula’s Cyber Takeover
              </p>
              <p className="text-md md:text-xs lg:text-lg  text-white">
                Coding
              </p>
              <p className=" text-[#D2D2CA]  text-lg  md:text-sm">
                16 May 2025
              </p>
              <p className="line-clamp-2 text-lg  md:text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className=" box z-10 text-white rounded-xl w-[80vw] md:w-[29vw]  lg:w-[22vw] h-fit  flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("uiux")}
          >
            <img
              src={uiuxBanner}
              className="rounded-t-md  md:h-32 lg:h-48 w-full"
            />
            <div className="flex flex-col p-4 gap-2 md:gap-2 md:p-4 lg:gap-2 lg:p-4">
              <p
                id="eventName"
                className="text-xl font-bold md:text-xl lg:text-xl  text-white"
              >
                Gamora’s UI Forge
              </p>
              <p className="text-md md:text-xs lg:text-lg  text-white">
                UI/UX - Design
              </p>
              <p className=" text-[#D2D2CA] text-lg  md:text-sm">16 May 2025</p>
              <p className="line-clamp-2 text-lg  md:text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className=" box z-10 text-white rounded-xl w-[80vw] md:w-[29vw]  lg:w-[22vw] h-fit  flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("treasureHunt")}
          >
            <img
              src={treasureHuntImg}
              className="rounded-t-md md:h-32 lg:h-48 w-full"
            />
            <div className="flex flex-col p-4 gap-2 md:gap-2 md:p-4 lg:gap-2 lg:p-4">
              <p
                id="eventName"
                className="text-xl font-bold md:text-xl lg:text-xl  text-white"
              >
                Rocket’s Relic Raid
              </p>
              <p className="text-md md:text-xs lg:text-lg  text-white">
                Treasure Hunt
              </p>
              <p className=" text-[#D2D2CA] text-lg  md:text-sm">16 May 2025</p>
              <p className="line-clamp-2 text-lg  md:text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className=" box z-10 text-white rounded-xl w-[80vw] md:w-[29vw]  lg:w-[22vw] h-fit  flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("gaming")}
          >
            <img
              src={gamingImg}
              className="rounded-t-md md:h-32 lg:h-48 w-full"
            />
            <div className="flex flex-col p-4 gap-2 md:gap-2 md:p-4 lg:gap-2 lg:p-4">
              <p
                id="eventName"
                className="text-xl font-bold md:text-xl lg:text-xl  text-white"
              >
                Groot’s Game Grid
              </p>
              <p className="text-md md:text-xs lg:text-lg  text-white">
                Gaming
              </p>
              <p className=" text-[#D2D2CA] text-lg  md:text-sm">16 May 2025</p>
              <p className="line-clamp-2 text-lg  md:text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className=" box z-10 text-white rounded-xl w-[80vw] md:w-[29vw]  lg:w-[22vw] h-fit  flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("ideathon")}
          >
            <img
              src={ideathonImg}
              className=" rounded-t-md md:h-32 lg:h-48 w-full"
            />
            <div className="flex flex-col p-4 gap-2 md:gap-2 md:p-4 lg:gap-2 lg:p-4">
              <p
                id="eventName"
                className="text-xl font-bold md:text-xl lg:text-xl  text-white"
              >
                Drax’s Power Pitch
              </p>
              <p className="text-md md:text-xs lg:text-lg  text-white">
                Ideathon
              </p>
              <p className=" text-[#D2D2CA] text-lg  md:text-sm">16 May 2025</p>
              <p className="line-clamp-2 text-lg  md:text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className=" box z-10 text-white rounded-xl w-[80vw] md:w-[29vw]  lg:w-[22vw] h-fit  flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("itManager")}
          >
            <img
              src={itManagerImg}
              className="rounded-t-md md:h-32 lg:h-48 w-full"
            />
            <div className="flex flex-col p-4 gap-2 md:gap-2 md:p-4 lg:gap-2 lg:p-4">
              <p
                id="eventName"
                className="text-xl font-bold md:text-xl lg:text-xl  text-white"
              >
                Star-Lord’s IT Command
              </p>
              <p className="text-md md:text-xs lg:text-lg  text-white">
                IT Manager
              </p>
              <p className=" text-[#D2D2CA] text-lg  md:text-sm">16 May 2025</p>
              <p className="line-clamp-2 text-lg  md:text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className=" box z-10 text-white rounded-xl w-[80vw] md:w-[29vw]  lg:w-[22vw] h-fit  flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("photography")}
          >
            <img
              src={photographyImg}
              className="rounded-t-md md:h-32 lg:h-48 w-full"
            />
            <div className="flex flex-col p-4 gap-2 md:gap-2 md:p-4 lg:gap-2 lg:p-4">
              <p
                id="eventName"
                className="text-xl font-bold md:text-xl lg:text-xl  text-white"
              >
                Hulk’s Smash Clicks
              </p>
              <p className="text-md md:text-xs lg:text-lg  text-white">
                Photography
              </p>
              <p className=" text-[#D2D2CA] text-lg  md:text-sm">16 May 2025</p>
              <p className="line-clamp-2 text-lg  md:text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
