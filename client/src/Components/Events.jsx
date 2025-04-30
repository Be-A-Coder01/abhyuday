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
        <p className="text-[20px] mt-30  text-white font-bold pl-10 my-5 pb-1 underline">
          Events
        </p>
        <div
          className=" flex w-full flex-wrap gap-x-8 px-7 gap-y-8 justify-center"
          id="events"
        >
          <div
            className=" box z-10 text-white rounded-xl  w-[22vw]  flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("itQuiz")}
          >
            <img src={itQuizBanner} className="rounded-t-md h-48 w-full" />
            <div className="flex flex-col gap-2 p-4">
              <p className="text-2xl font-bold text-white">IT QUIZ</p>
              <p id="eventName" className="text-sm  text-white">
                Cosmo’s Space Trivia
              </p>
              <p className=" text-[#D2D2CA]  text-sm">16 May 2026</p>
              <p className="line-clamp-2 text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className="box z-10 text-white rounded-xl  w-[22vw] h-fit flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("coding")}
          >
            <img src={codingBanner} className="h-48 rounded-t-md w-full" />
            <div className="flex flex-col gap-2 p-4">
              <p className="text-2xl font-bold text-white">Coding</p>
              <p id="eventName" className="text-sm  text-white">
                Nebula’s Cyber Takeover
              </p>
              <p className=" text-[#D2D2CA]  text-sm">16 May 2026</p>
              <p className="line-clamp-2 text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className="box z-10 text-white rounded-xl  w-[22vw] h-fit flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("uiux")}
          >
            <img src={uiuxBanner} className="rounded-t-md h-48 w-full" />
            <div className="flex flex-col gap-2 p-4">
              <p className="text-2xl font-bold text-white">UI/UX - Design</p>
              <p id="eventName" className="text-sm  text-white">
                Gamora’s UI Forge
              </p>
              <p className=" text-[#D2D2CA]  text-sm">16 May 2026</p>
              <p className="line-clamp-2 text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className="z-10 box text-white rounded-xl  w-[22vw] h-fit flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("treasureHunt")}
          >
            <img src={treasureHuntImg} className="rounded-t-md h-48 w-full" />
            <div className="flex flex-col gap-2 p-4">
              <p className="text-2xl font-bold text-white">Treasure Hunt</p>
              <p id="eventName" className="text-sm  text-white">
                Rocket’s Relic Raid
              </p>
              <p className=" text-[#D2D2CA]  text-sm">16 May 2026</p>
              <p className="line-clamp-2 text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className="z-10 box text-white rounded-xl  w-[22vw] h-fit flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("gaming")}
          >
            <img src={gamingImg} className="rounded-t-md h-48 w-full" />
            <div className="flex flex-col gap-2 p-4">
              <p className="text-2xl font-bold text-white">Gaming</p>
              <p id="eventName" className="text-sm  text-white">
                Groot’s Game Grid
              </p>
              <p className=" text-[#D2D2CA]  text-sm">16 May 2026</p>
              <p className="line-clamp-2 text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className="z-10 box text-white rounded-xl  w-[22vw] h-fit flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("ideathon")}
          >
            <img src={ideathonImg} className=" rounded-t-md h-48 w-full" />
            <div className="flex flex-col gap-2 p-4">
              <p className="text-2xl font-bold text-white">Ideathon</p>
              <p id="eventName" className="text-sm  text-white ">
                Drax’s Power Pitch
              </p>
              <p className=" text-[#D2D2CA]  text-sm">16 May 2026</p>
              <p className="line-clamp-2 text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className="z-10 box text-white rounded-xl  w-[22vw] h-fit flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("itManager")}
          >
            <img src={itManagerImg} className="rounded-t-md h-48 w-full" />
            <div className="flex flex-col gap-2 p-4">
              <p className="text-2xl font-bold text-white">IT Manager</p>
              <p id="eventName" className="text-sm  text-white">
                Star-Lord’s IT Command
              </p>
              <p className=" text-[#D2D2CA]  text-sm">16 May 2026</p>
              <p className="line-clamp-2 text-sm text-[#D2D2D5] font-semibold">
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente vel doloremque omnis
              </p>
            </div>
          </div>
          <div
            className="z-10 box text-white rounded-xl  w-[22vw] h-fit flex flex-col bg-[#1E1E2D]"
            id="box1"
            onClick={() => handleEvent("photography")}
          >
            <img src={photographyImg} className="rounded-t-md h-48 w-full" />
            <div className="flex flex-col gap-2 p-4">
              <p className="text-2xl font-bold text-white">Photography</p>
              <p id="eventName" className="text-sm  text-white">
                8. Hulk’s Smash Clicks
              </p>
              <p className=" text-[#D2D2CA]  text-sm">16 May 2026</p>
              <p className="line-clamp-2 text-sm text-[#D2D2D5] font-semibold">
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
