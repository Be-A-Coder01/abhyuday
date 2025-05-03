import React from "react";
import "../CSS/aboutUs/aboutUs.css";
import Navbar from "./Navbar";
import "../CSS/common/bg-animation.css";
import "../App.css";

import "../JavaScript/index.js";
import "../JavaScript/loader.js";

const About = () => {
  return (
    <>
      <div className="wrapper  md:mt-0   ">
        <div id="stars" className="-z-10"></div>
        <div id="stars2" className="-z-10"></div>
        <div id="stars3" className="-z-10"></div>
      </div>
      <Navbar></Navbar>
      <div className=" mt-[300px]  md:mt-14  flex justify-center place-items-center h-screen">
        <div className="text-white leading-5 tracking-widest md:text-center bg-[#7c8be3] p-10 rounded-lg text-xs  md:tracking-widest md:text-xl md:leading-10 w-[90vw] ">
          About <span className="text-pink-400 font-bold">Abhyuday 9.0</span> .
          The Department of Master of Computer Applications at{" "}
          <span className="text-pink-400 font-bold">
            Ramaiah Institute of Technology
          </span>{" "}
          proudly presents Abhyuday 9.0, the ninth edition of our annual
          techno-cultural fest. Set to launch on{" "}
          <span className="text-pink-400 font-bold">16th May 2025</span> , this
          year’s edition draws inspiration from the cosmic realm with the
          electrifying theme —{" "}
          <span className="text-pink-400 font-bold">
            "Guardians of the Galaxy"
          </span>{" "}
          . Abhyuday is more than just a fest — it’s a celebration of
          innovation, creativity, and collaboration. Designed exclusively for
          students of MCA and BCA, this one-day extravaganza offers a galaxy of
          opportunities to learn, compete, and connect. From brain-teasing
          challenges like{" "}
          <span className="text-pink-400 font-bold">Coding</span> ,{" "}
          <span className="text-pink-400 font-bold">IT Quiz</span> , and{" "}
          <span className="text-pink-400 font-bold">UI Design</span> , to
          ideation-driven contests like{" "}
          <span className="text-pink-400 font-bold">Ideathon</span> , to
          high-energy non-technical events like{" "}
          <span className="text-pink-400 font-bold">Gaming</span>
          and <span className="text-pink-400 font-bold">Treasure Hunt</span> —
          there’s something for every kind of explorer. Join us as we journey
          across the universe of technology and talent. Whether you're here to
          compete, collaborate, or simply get inspired,{" "}
          <span className="text-pink-400 font-bold">
            Abhyuday 9.0 promises an experience that's truly out of this world.
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
